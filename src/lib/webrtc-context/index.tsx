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

export type ParticipantMessage = { name: string, id: string };
export type BeOwnerMessage = { id: string, owner: boolean };
export type NextMessage = { next: boolean };

type MessageChannel = {
  id: string,
  channel: WebrtcChannelClient<ParticipantMessage | BeOwnerMessage | NextMessage>
};

const WebrtcContext = React.createContext<{
  channels?: {
    main: MainChannel,
    message: MessageChannel,
  }
  setMainChannel: Dispatch<SetStateAction<MainChannel>>,
  setMessageChannel: Dispatch<SetStateAction<MessageChannel>>,
}>({
  setMainChannel: {} as Dispatch<SetStateAction<MainChannel>>,
  setMessageChannel: {} as Dispatch<SetStateAction<MessageChannel>>,
});

export const WebrtcProvider = ({ children }: { children: any }) => {
  const [mainChannel, setMainChannel] = useState<MainChannel>({} as MainChannel);
  const [messageChannel, setMessageChannel] = useState<MessageChannel>({} as MessageChannel);

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
