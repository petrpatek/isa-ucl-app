import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAOKYOubGuqs9_TBlFfkqP6eJ1kFOR-URk',
  authDomain: 'ucl-app-cd7bb.firebaseapp.com',
  databaseURL: 'https://ucl-app-cd7bb.firebaseio.com',
  projectId: 'ucl-app-cd7bb',
  storageBucket: 'ucl-app-cd7bb.appspot.com',
  messagingSenderId: '914815302438'
};

const initFirebase = ()=> firebase.initializeApp(firebaseConfig);
export default initFirebase;
