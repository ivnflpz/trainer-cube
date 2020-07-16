import React from 'react';
import { auth, createUserProfileDoc } from '../firebase';

interface IUserContext {
    authenticated: boolean;
    user: any;
}

const UserContext = React.createContext<IUserContext>({ authenticated: false, user: null });

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
    <UserContext.Provider value={{ authenticated: sUser !== null && sUser !== undefined, user: sUser}}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = React.useContext(UserContext);
  return context;
};

export { UserProvider, useUserContext };