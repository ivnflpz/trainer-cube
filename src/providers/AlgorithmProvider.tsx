import React from 'react';
import { firestore } from '../firebase';
import { useUserContext } from './UserProvider';

interface IAlgorithmContext {
  ollAlgorithms: any;
  pllAlgorithms: any;
  upsert: (newAlgorithm: any) => void;
}

const AlgorithmContext = React.createContext<IAlgorithmContext>({ 
  ollAlgorithms: {},
  pllAlgorithms: {},
  upsert: () => null });

const AlgorithmProvider: React.FC = ({children}) => {
  const [sOllMap, setOllMap] = React.useState({});
  const [sPllMap, setPllMap] = React.useState({});
  const { user } = useUserContext();

  React.useEffect(() => {
    if (user === null || user === undefined) {
      return;
    }
    const unsubscribeAlgorithms = firestore.collection('algorithms').where('uid', '==', user.uid).onSnapshot(snapshot => {
      const algorithms: any = snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() }; });
      setOllMap(algorithms.filter((a: any) => a.type === 'OLL').reduce((p: any, c: any) => { return {...p, [c.name]: c}; }, {}));
      setPllMap(algorithms.filter((a: any) => a.type === 'PLL').reduce((p: any, c: any) => { return {...p, [c.name]: c}; }, {}));
    });

    return () => unsubscribeAlgorithms();
  }, [user]);

  const upsert = (newAlgorithm: any) => {
    newAlgorithm.uid = user.uid;
    const dict: any = newAlgorithm.type === 'OLL' ? sOllMap : sPllMap;
    if (dict[newAlgorithm.name]) {
      firestore.collection('algorithms').doc(dict[newAlgorithm.name].id).set(newAlgorithm, { merge: true });
    } else {
      firestore.collection('algorithms').add(newAlgorithm);
    }
  };

  return (
    <AlgorithmContext.Provider value={{ upsert, ollAlgorithms: sOllMap, pllAlgorithms: sPllMap }}>
      {children}
    </AlgorithmContext.Provider>
  );
};

const useAlgorithmContext = () => {
  const context = React.useContext(AlgorithmContext);
  return context;
};

export { AlgorithmProvider, useAlgorithmContext };