import React, { useRef, useState } from 'react';
import { ChipChipIcon } from 'component/chip-chip-icon';
import { Snackbar, Alert } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ChipChipButton } from '../../component/chip-chip-button';
import { ChipChipInput } from '../../component/chip-chip-input';
import styles from './index.module.scss';
import { useCommonContext } from '../../lib/common-context';
import { useI18nContext } from '../../lib/i18n-context';

export const Link = () => {
  const history = useHistory();
  const { setId, setName } = useCommonContext();
  const [error, setError] = useState('');
  const idInputElement = useRef<HTMLInputElement>(null);
  const nameInputElement = useRef<HTMLInputElement>(null);
  const { map } = useI18nContext();

  return (
    <section className={styles.linkContainer}>
      <header className={styles.headerIconContainer}>
        <ChipChipIcon />
      </header>
      <main className={styles.linkChannelContainer}>
        <ChipChipInput
          maxRows={1}
          inputRef={idInputElement}
          placeholder={map.TABLE_ID_PLACEHOLDER}
        />
        <div className={styles.divider} />
        <ChipChipInput
          maxRows={1}
          inputRef={nameInputElement}
          placeholder={map.PARTICIPANT_NAME_PLACEHOLDER}
        />
        <div className={styles.divider} />
        <ChipChipButton onClick={() => {
          if (!idInputElement.current?.value) {
            setError(map.MISSING_ROOM_ID);
            return;
          }
          if (!nameInputElement.current?.value) {
            setError(map.MISSING_PARTICIPANT_NAME);
            return;
          }
          setId(idInputElement.current.value);
          setName(nameInputElement.current.value);
          setTimeout(() => {
            history.push('/connection');
          }, 500);
        }}
        >
          {map.START_CONNECTION_BUTTON}
        </ChipChipButton>
      </main>
      <footer>
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError('')}
          message={error}
        >
          <Alert
            sx={{ width: '100%' }}
            onClose={() => setError('')}
            severity="error"
          >
            {error}
          </Alert>
        </Snackbar>
      </footer>
    </section>
  );
};
