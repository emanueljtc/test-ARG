'use client';
import { createContext, useState, useContext } from 'react';
import UserInterface from '@/interfaces/UserInterface';

const UserContext = createContext<any>(undefined);

export function UserWrapper({ children }: { children: React.ReactNode }) {
  // In the future, if we need more than modify user, we can use setState
  let [user, setUser] = useState<UserInterface | null>(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};

