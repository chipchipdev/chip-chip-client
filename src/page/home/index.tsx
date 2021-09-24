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
    <main className={styles.homeContainer}>
      <header className={styles.headerIconContainer}>
        <ChipChipIcon />
        <p className={styles.iconDescription}>
          {map.HOME_PAGE_SLOGAN}
        </p>
      </header>
      <footer className={styles.footerButtonContainer}>
        <ChipChipButton
          onClick={() => history.push('/link')}
          type="button"
        >
          {map.START_GAME_BUTTON}
        </ChipChipButton>
      </footer>
    </main>
  );
};
