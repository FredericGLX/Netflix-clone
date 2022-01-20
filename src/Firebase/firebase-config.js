import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyACiW-WDkW545pUkyUZPJcqTaJoIFSJ2L4',
  authDomain: 'netflix-clone-ce91e.firebaseapp.com',
  projectId: 'netflix-clone-ce91e',
  storageBucket: 'netflix-clone-ce91e.appspot.com',
  messagingSenderId: '1092341763334',
  appId: '1:1092341763334:web:6eb379f52b404fdfa52287',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
