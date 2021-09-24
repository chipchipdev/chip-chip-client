import React from 'react';
import { render } from 'react-dom';
import { ChipChipProvider } from '@chip-chip/react-library';
import { Channel } from '@chip-chip/core';
import { WebrtcProvider } from './lib/webrtc-context';

import { App } from './App';
import { CommonProvider } from './lib/common-context';
import { I18nProvider } from './lib/i18n-context';

const channel = new Channel();

render(
  <I18nProvider>
    <CommonProvider>
      <WebrtcProvider>
        <ChipChipProvider channel={channel}>
          <App />
        </ChipChipProvider>
      </WebrtcProvider>
    </CommonProvider>
  </I18nProvider>,
  document.querySelector('#root'),
);
