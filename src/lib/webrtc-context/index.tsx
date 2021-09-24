import React, {
  Dispatch, SetStateAction, useContext, useState,
} from 'react';
import WebrtcChannelClient from '@chip-chip/webrtc-channel-client';
import {
  CroupierAction,
  PlayerAction,
  PlayerShowDownAction,
} from '@chip-chip/core/lib/component/action';

type MainChannel = {
  id: string,
  channel: WebrtcChannelClient<
  CroupierAction<{ id: string, name: string }>
  | PlayerAction
  | PlayerShowDownAction
  >
};

type MessageChannel = {
  id: string,
  channel: WebrtcChannelClient<{ name: string, id: string }>
};

const WebrtcContext = React.createContext<{
  channels?: {
    main?: MainChannel,
    message?: MessageChannel,
  }
  setMainChannel: Dispatch<SetStateAction<MainChannel | undefined>>,
  setMessageChannel: Dispatch<SetStateAction<MessageChannel | undefined>>,
}>({
  setMainChannel: {} as Dispatch<SetStateAction<MainChannel | undefined>>,
  setMessageChannel: {} as Dispatch<SetStateAction<MessageChannel | undefined>>,
});

export const WebrtcProvider = ({ children }: { children: any }) => {
  const [mainChannel, setMainChannel] = useState<MainChannel>();
  const [messageChannel, setMessageChannel] = useState<MessageChannel>();

  return (
    <WebrtcContext.Provider value={{
      channels: {
        main: mainChannel,
        message: messageChannel,
      },
      setMainChannel,
      setMessageChannel,
    }}
    >
      {children}
    </WebrtcContext.Provider>
  );
};

export function useWebrtcContext() {
  return useContext(WebrtcContext);
}
