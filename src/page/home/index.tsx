import React from 'react';
import { ChipChipIcon } from 'component/chip-chip-icon';
import { useHistory } from 'react-router-dom';
import { ChipChipButton } from '../../component/chip-chip-button';
import styles from './index.module.scss';
import { useI18nContext } from '../../lib/i18n-context';

export const Home = () => {
  const history = useHistory();
  const { map } = useI18nContext();

  return (
    <section className={styles.homeContainer}>
      <main className={styles.headerIconContainer}>
        <ChipChipIcon />
        <p className={styles.iconDescription}>
          {map.HOME_PAGE_SLOGAN}
        </p>
      </main>
      <main className={styles.startGameButtonContainer}>
        <ChipChipButton
          onClick={() => history.push('/link')}
          type="button"
        >
          {map.START_GAME_BUTTON}
        </ChipChipButton>
      </main>
    </section>
  );
};
