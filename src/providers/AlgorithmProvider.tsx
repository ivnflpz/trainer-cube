import React from 'react';
import { firestore } from '../firebase';
import { useUserContext } from './UserProvider';
import { upsertAlgorithm } from '../repositories/FirebaseClient';

interface AlgorithmContext {
  ollAlgorithms: UserAlgorithmMap;
  pllAlgorithms: UserAlgorithmMap;
  upsert: (
    name: string,
    primary: string,
    type: AlgType,
    favorite: boolean
  ) => void;
}

const AlgorithmContext = React.createContext<AlgorithmContext>({
  ollAlgorithms: {},
  pllAlgorithms: {},
  upsert: () => null,
});

const USER_ALGORITHMS_KEY = 'userAlgorithms';
const AlgorithmProvider: React.FC = ({ children }) => {
  const [sOllMap, setOllMap] = React.useState({} as UserAlgorithmMap);
  const [sPllMap, setPllMap] = React.useState({} as UserAlgorithmMap);
  const { user } = useUserContext();

  const readAlgorithms = (algorithms: Array<UserAlgorithm>) => {
    setOllMap(
      algorithms
        .filter((a: any) => a.type === 'OLL')
        .reduce((p: any, c: any) => ({ ...p, [c.name]: c }), {})
    );
    setPllMap(
      algorithms
        .filter((a: any) => a.type === 'PLL')
        .reduce((p: any, c: any) => ({ ...p, [c.name]: c }), {})
    );
  };

  React.useEffect(() => {
    if (user === null || user === undefined) {
      const algorithmsLS = localStorage.getItem(USER_ALGORITHMS_KEY);
      if (algorithmsLS) {
        readAlgorithms(JSON.parse(algorithmsLS));
      }
      return () => null;
    }

    const unsubscribeAlgorithms = firestore
      .collection('algorithms')
      .where('uid', '==', user.uid)
      .onSnapshot((snapshot) => {
        const algorithms: any = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        readAlgorithms(algorithms);
      });

    return () => unsubscribeAlgorithms();
  }, [user]);

  const upsert = (
    name: string,
    primary: string,
    type: AlgType,
    favorite: boolean
  ) => {
    const map = type === 'OLL' ? sOllMap : sPllMap;
    const newAlgorithm: UserAlgorithm = {
      name,
      primary,
      type,
      favorite,
    };
    if (map[name]) {
      newAlgorithm.id = map[name].id;
    }

    if (user) {
      newAlgorithm.uid = user.uid;
      upsertAlgorithm(newAlgorithm);
    } else {
      const newMap = { ...map, [name]: newAlgorithm };
      let userAlgorithms = null;
      if (type === 'OLL') {
        setOllMap(newMap);
        userAlgorithms = [...Object.values(sPllMap), ...Object.values(newMap)];
      } else {
        setPllMap(newMap);
        userAlgorithms = [...Object.values(sOllMap), ...Object.values(newMap)];
      }
      localStorage.setItem(USER_ALGORITHMS_KEY, JSON.stringify(userAlgorithms));
    }
  };

  return (
    <AlgorithmContext.Provider
      value={{ upsert, ollAlgorithms: sOllMap, pllAlgorithms: sPllMap }}
    >
      {children}
    </AlgorithmContext.Provider>
  );
};

const useAlgorithmContext = () => {
  const context = React.useContext(AlgorithmContext);
  return context;
};

export { AlgorithmProvider, useAlgorithmContext };
