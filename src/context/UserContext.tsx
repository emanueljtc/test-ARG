'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import UserInterface from '@/interfaces/UserInterface';

const UserContext = createContext<any>(undefined);

export function UserWrapper({ children }: { children: React.ReactNode }) {
  // In the future, if we need more than modify user, we can use setState
  let [user, setUser] = useState<UserInterface | null>(null);

   const callInfoUser = async () => {
     try {
       const response = await fetch('https://randomuser.me/api/?results=1');
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       const data = await response.json();
       const userResult = data.results[0];
       if (!userResult) {
         throw new Error('No user found!');
       }
       const userData = {
         name: userResult.name?.first + ' ' + userResult.name?.last,
         age: userResult.dob?.age,
         address: userResult.location?.street?.name,
         city: userResult.location?.city,
         state: userResult.location?.state,
         proffession: 'Developer',
         country: userResult.location?.country,
         description:
           'is passionate about web development with a focus on the client side. His experience ranges from creating attractive user interfaces to optimizing web application performance.',
         avatar: userResult.picture?.medium,
         avatarBigger: userResult.picture?.large,
         interests: ['Music', 'Football', 'Cooking'],
       };
       setUser(userData);
     } catch (error) {
       console.error(error);
     }
   };

   useEffect(() => {
     if (!user) {
       callInfoUser();
     }
   }, [user]);
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


