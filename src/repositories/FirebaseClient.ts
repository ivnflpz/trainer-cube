import { firestore } from '../firebase';

class FirebaseClient {
  upsertAlgorithm(algorithm: UserAlgorithm) {
    if (algorithm.id) {
      firestore.collection('algorithms').doc(algorithm.id).set(algorithm, { merge: true });
    } else {
      firestore.collection('algorithms').add(algorithm);
    }
  }
}

export default FirebaseClient;