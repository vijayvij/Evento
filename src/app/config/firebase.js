import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTDXDx-WoL7FpNtiG4JR4ilBE8slXzA2A',
  authDomain: 'evento-209109.firebaseapp.com',
  databaseURL: 'https://evento-209109.firebaseio.com',
  projectId: 'evento-209109',
  storageBucket: 'evento-209109.appspot.com',
  messagingSenderId: '1070390204838'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
