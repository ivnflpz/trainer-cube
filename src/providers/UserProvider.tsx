import React from 'react';
import { auth, createUserProfileDoc } from '../firebase';

interface IUserContext {
    user: any;
}

const UserContext = React.createContext<IUserContext>({ user: null });

const UserProvider: React.FC = ({children}) => {
  const [sUser, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDoc(userAuth);
      setUser(user);
    });

    return () => unsubscribeAuth();
  }, []);

  return (
    <UserContext.Provider value={{ user: sUser}}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = React.useContext(UserContext);
  return context;
};

export { UserProvider, useUserContext };