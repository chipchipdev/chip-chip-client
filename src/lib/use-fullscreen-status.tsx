import { useLayoutEffect, useState } from 'react';

function hasFullscreenElement() {
  if (document.fullscreenElement) {
    return true;
  }
  // @ts-ignore
  if (document.mozFullScreenElement) {
    return true;
  }

  // @ts-ignore
  if (document.msFullscreenElement) {
    return true;
  }

  // @ts-ignore
  return !!document.webkitFullscreenElement;
}

export const useFullscreenStatus = () => {
  const [isFullScreen, setIsFullScreen] = useState(
    hasFullscreenElement(),
  );

  useLayoutEffect(() => {
    document.onfullscreenchange = () => {
      if (hasFullscreenElement()) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };
  }, [isFullScreen]);

  return isFullScreen;
};
