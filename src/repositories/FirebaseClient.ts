import { firestore } from '../firebase';

export const upsertAlgorithm = (algorithm: UserAlgorithm): void => {
  if (algorithm.id) {
    firestore
      .collection('algorithms')
      .doc(algorithm.id)
      .set(algorithm, { merge: true });
  } else {
    firestore.collection('algorithms').add(algorithm);
  }
};

export default { upsertAlgorithm };
