import React, {
  Dispatch, SetStateAction, useContext, useState,
} from 'react';

const CommonContext = React.createContext<{
  id?: string,
  name?: string,
  setId: Dispatch<SetStateAction<string | undefined>>,
  setName: Dispatch<SetStateAction<string | undefined>>,
}>({
  setId: {} as Dispatch<SetStateAction<string | undefined>>,
  setName: {} as Dispatch<SetStateAction<string | undefined>>,
});

export const CommonProvider = ({ children }: { children: any }) => {
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();

  return (
    <CommonContext.Provider value={{
      id,
      name,
      setId,
      setName,
    }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export function useCommonContext() {
  return useContext(CommonContext);
}
