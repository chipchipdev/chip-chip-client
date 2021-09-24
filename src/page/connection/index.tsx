import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import WebrtcChannelClient from '@chip-chip/webrtc-channel-client';
import { CroupierAction, PlayerAction, PlayerShowDownAction } from '@chip-chip/core/lib/component/action';

import { Stack } from '@mui/material';
import { ChipChipIcon } from '../../component/chip-chip-icon';
import { useCommonContext } from '../../lib/common-context';
import { HTTPUri, WebsocketUri } from '../../constant';
import { useWebrtcContext } from '../../lib/webrtc-context';

import styles from './index.module.scss';

export const Connection = () => {
  const { id, name } = useCommonContext();
  const { setMainChannel, setMessageChannel } = useWebrtcContext();
  const history = useHistory();

  if (!id || !name) {
    history.replace('/');
    return (<div />);
  }

  const [participants, setParticipants] = useState<{ id: string, name: string }[]>([]);

  useEffect(() => {
    const messageClient = new WebrtcChannelClient
    <{ name: string, id: string }>(HTTPUri, WebsocketUri, { id: `${id}-message` });

    setParticipants((prevState) => {
      if (prevState.find((p) => p.id === messageClient.id)) return prevState;
      return [
        ...prevState,
        { id: messageClient.id, name },
      ];
    });

    messageClient.addEventListener('candidate', () => {
      messageClient.send({ id: messageClient.id, name });
    });

    messageClient.addEventListener('message', (participant) => {
      setParticipants((prevState) => {
        if (prevState.find((p) => p.id === participant.id)) return prevState;
        return [
          ...prevState,
          participant,
        ];
      });
    });

    // @ts-ignore
    window.client = messageClient;

    const mainClient = new WebrtcChannelClient <
    CroupierAction<{ id: string, name: string }>
    | PlayerAction | PlayerShowDownAction
    >(HTTPUri, WebsocketUri, { id: `${id}-main` });

    setMainChannel({ id, channel: mainClient });
    setMessageChannel({ id, channel: messageClient });
  }, []);

  return (
    <main className={styles.connectionContainer}>
      <ChipChipIcon type="decorator" />
      <h1 className={styles.title}>Who&#39;s in the game</h1>
      <Stack>
        {
          participants.map((participant) => (
            <span
              key={participant.id + participant.name}
              className={styles.content}
            >
              {participant.name}
            </span>
          ))
        }
      </Stack>
    </main>
  );
};
