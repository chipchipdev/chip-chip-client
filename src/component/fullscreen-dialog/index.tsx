import React from 'react';
import { Dialog } from '@mui/material';
import Alert from '@mui/material/Alert';

export const FullscreenDialog = ({ open }: { open: boolean }) => (
  <Dialog
    onClick={() => {
      document.querySelector('#root')!.requestFullscreen();
    }}
    open={open}
  >
    <Alert severity="info">
      Click anywhere to enable fullscreen mode.
    </Alert>
  </Dialog>
);
