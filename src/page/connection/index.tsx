import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import WebrtcChannelClient from '@chip-chip/webrtc-channel-client';
import { CroupierAction, PlayerAction, PlayerShowDownAction } from '@chip-chip/core/lib/component/action';

import { Stack } from '@mui/material';
import { ChipChipIcon } from '../../component/chip-chip-icon';
import { useCommonContext } from '../../lib/common-context';
import { HTTPUri, WebsocketUri } from '../../constant';
import {
  BeOwnerMessage, NextMessage, ParticipantMessage, useWebrtcContext,
} from '../../lib/webrtc-context';

import styles from './index.module.scss';
import { ChipChipButton } from '../../component/chip-chip-button';
import { useI18nContext } from '../../lib/i18n-context';

export const Connection = () => {
  const {
    id, name, setOwner, setParticipants, participants, owner,
  } = useCommonContext();
  const { setMainChannel, setMessageChannel, channels } = useWebrtcContext();
  const { map } = useI18nContext();
  const history = useHistory();

  if (!id || !name) {
    history.replace('/');
    return (<div />);
  }

  useEffect(() => {
    const messageClient = new WebrtcChannelClient
    <ParticipantMessage | BeOwnerMessage | NextMessage>(HTTPUri, WebsocketUri, { id: `${id}-message` });

    const mainClient = new WebrtcChannelClient <
    CroupierAction<{ id: string, name: string }>
    | PlayerAction | PlayerShowDownAction
    >(HTTPUri, WebsocketUri, { id: `${id}-main` });

    setParticipants((prevState) => {
      if (prevState.find((p) => p.id === mainClient.id)) return prevState;
      return [
        ...prevState,
        { id: mainClient.id, name },
      ];
    });

    messageClient.addEventListener('candidate', () => {
      messageClient.send({ id: mainClient.id, name });
    });

    messageClient.addEventListener('message', (message) => {
      if ((message as ParticipantMessage).name) {
        setParticipants((prevState) => {
          if (prevState.find((p) => p.id
              === (message as ParticipantMessage).id)) return prevState;
          return [
            ...prevState,
            (message as ParticipantMessage),
          ];
        });
        return;
      }

      if ((message as BeOwnerMessage).owner) {
        setOwner({ id: (message as BeOwnerMessage).id });
        return;
      }

      if ((message as NextMessage)) {
        setTimeout(() => {
          history.push('/preparation');
        }, 500);
      }
    });

    // @ts-ignore
    window.$1 = messageClient; window.$2 = mainClient;
    setMainChannel({ id, channel: mainClient });
    setMessageChannel({ id, channel: messageClient });
  }, []);

  useEffect(() => {
    if (!owner) return;
    channels?.message.channel.addEventListener('candidate', () => {
      channels?.message.channel.send({
        id: owner.id,
        owner: true,
      });
    });
  }, [owner]);

  return (
    <section className={styles.connectionContainer}>
      <header className={styles.connectionContainerHeader}>
        <ChipChipIcon type="decorator" />
      </header>
      <main className={styles.connectionContainerMain}>
        <Stack className={styles.list}>
          {
            participants.map((participant) => (
              <span
                key={participant.id + participant.name}
                className={styles.content}
              >
                <span className={styles.bold}>{participant.name}</span>
                {' '}
                { map.JOIN_TABLE }
              </span>
            ))
          }
          {
            owner?.id
              ? (
                <span
                  className={styles.contentRed}
                >
                  <span className={styles.bold}>
                    {participants
                      .find((p) => p.id === owner.id)?.name}
                  </span>
                  {' '}
                  { map.IS_THE_OWNER }
                </span>
              )
              : null
          }
        </Stack>
      </main>
      <footer className={styles.connectionContainerFooter}>
        <ChipChipButton
          onClick={() => {
            channels?.message.channel.send({
              id: channels?.main.channel.id,
              owner: true,
            });
            setOwner({
              id: channels?.main.channel.id!,
            });
          }}
          type="button"
        >
          {map.BE_OWNER}
        </ChipChipButton>
        <div className={styles.divider} />
        <ChipChipButton
          disabled={participants.length < 3 || !owner}
          onClick={() => {
            channels?.message.channel.send({
              next: true,
            });
            setTimeout(() => {
              history.push('/preparation');
            }, 500);
          }}
          type="button"
        >
          {map.CONNECTION_CONTINUE_BUTTON}
        </ChipChipButton>
      </footer>
    </section>
  );
};
