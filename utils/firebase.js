import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAOKYOubGuqs9_TBlFfkqP6eJ1kFOR-URk',
  authDomain: 'ucl-app-cd7bb.firebaseapp.com',
  databaseURL: 'https://ucl-app-cd7bb.firebaseio.com',
  projectId: 'ucl-app-cd7bb',
  storageBucket: 'ucl-app-cd7bb.appspot.com',
  messagingSenderId: '914815302438'
};

export const initFirebase = ()=> firebase.initializeApp(firebaseConfig);
export const getDb = (app)=>{
  const store =  firebase.firestore(app);
  store.settings({timestampsInSnapshots: true});
  return store;
};
export const loadUser =  (userId, db)=>{
  return new Promise((resolve,reject)=>{
    const docRef = db.collection('users').doc(userId);
    docRef.get().then((doc)=> {
      if (doc.exists) {
        resolve(doc.data());
      } else {
        reject();
      }
    }).catch(function(error) {
      reject(error);
    });

  });
};
export const loginUserWithEmail =  (email,password)=>firebase.auth().signInWithEmailAndPassword(email, password);
