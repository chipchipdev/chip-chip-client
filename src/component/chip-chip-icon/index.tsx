import React from 'react';
import chipChipIconPath from 'asset/image/chip-chip-icon.svg';
import styles from './index.module.scss';

interface ChipChipIconType {
  main: string,
  decorator: string,
}

export const ChipChipIcon = ({ type }: { type?: keyof ChipChipIconType }) => (
  <img
    className={
      type === 'main'
        ? styles.chipChipIconMain
        : styles.chipChipIconDecorator
    }
    src={chipChipIconPath}
    alt="chip-chip-icon"
  />
);

ChipChipIcon.defaultProps = {
  type: 'main',
};
