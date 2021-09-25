import React, {
  Dispatch, SetStateAction, useContext, useState,
} from 'react';

const CommonContext = React.createContext<{
  id?: string,
  name?: string,
  participants: { id: string, name: string }[],
  owner?: { id: string },
  setParticipants: Dispatch<SetStateAction<{ id: string, name: string }[]>>,
  setOwner: Dispatch<SetStateAction<{ id: string } | undefined>>,
  setId: Dispatch<SetStateAction<string | undefined>>,
  setName: Dispatch<SetStateAction<string | undefined>>,
}>({
  participants: [],
  setParticipants: {} as Dispatch<SetStateAction<{ id: string, name: string }[]>>,
  setOwner: {} as Dispatch<SetStateAction<{ id: string } | undefined>>,
  setId: {} as Dispatch<SetStateAction<string | undefined>>,
  setName: {} as Dispatch<SetStateAction<string | undefined>>,
});

export const CommonProvider = ({ children }: { children: any }) => {
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();
  const [participants, setParticipants] = useState<{ id: string, name: string }[]>([]);
  const [owner, setOwner] = useState<{ id: string }>();

  return (
    <CommonContext.Provider value={{
      id,
      name,
      participants,
      owner,
      setId,
      setName,
      setParticipants,
      setOwner,
    }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export function useCommonContext() {
  return useContext(CommonContext);
}
