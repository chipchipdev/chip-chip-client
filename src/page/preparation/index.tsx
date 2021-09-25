import React, { useEffect } from 'react';
import { useChipChip } from '@chip-chip/react-library';
import { useHistory } from 'react-router-dom';
import { CroupierActionEnum } from '@chip-chip/core/lib';
import { useWebrtcContext } from '../../lib/webrtc-context';
import { useCommonContext } from '../../lib/common-context';
import styles from './index.module.scss';
import { ChipChipIcon } from '../../component/chip-chip-icon';
import { useI18nContext } from '../../lib/i18n-context';

// todo modify this part's logic
export const Preparation = () => {
  const history = useHistory();
  const { map } = useI18nContext();
  const { channel, playersUnscheduled } = useChipChip();
  const { channels } = useWebrtcContext();
  const { name } = useCommonContext();

  if (!channels || !channels.message || !channels.main) {
    history.replace('/');
    return <div />;
  }

  useEffect(() => {
    const { main } = channels;

    main.channel.addEventListener('message', (message) => {
      channel.trigger(message);
    });

    main.channel.send({
      type: CroupierActionEnum.SET_CROUPIER_ID,
      payload: {
        id: main.channel.id,
      },
    });

    main.channel.send({
      type: CroupierActionEnum.SET_OWNER,
      payload: {
        id: 'default',
        name: 'croupier',
      },
    });

    main.channel.send({
      type: CroupierActionEnum.ARRANGE,
      id: 'default',
      payload: {
        id: main.channel.id,
        name,
      },
    });
  }, []);

  return (
    <section className={styles.preparationContainer}>
      <header className={styles.preparationContainerHeader}>
        <ChipChipIcon type="decorator" />
        <h1 className={styles.title}>{map.PREPARATION_TITLE}</h1>
        <div>
          {JSON.stringify(playersUnscheduled)}
        </div>
      </header>
    </section>
  );
};
