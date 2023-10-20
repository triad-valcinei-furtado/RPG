/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, createContext, useState } from "react";

type UserContextProps = {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;

  userWallet: UserWallet;
  setUserWallet: React.Dispatch<React.SetStateAction<UserWallet>>;
};

type UserWallet = {
  PO: number;
  PP: number;
  PC: number;
};

type UserInfo = {
  name: string;
  role: "Mestre" | "Jogador";
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [userWallet, setUserWallet] = useState<UserWallet>({
    PO: 2,
    PP: 0,
    PC: 0,
  });

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, userWallet, setUserWallet }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
