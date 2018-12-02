import {loginUserWithEmail, loadUser} from '../utils/firebase';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_STARTED = 'AUTH_STARTED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const CONNECT_DB = 'CONNECT_DB';

export const  authUser = (email, password, db)=>{
  return async (dispatch)=> {
    dispatch(authStarted());
    return new Promise((resolve,reject)=>{
      loginUserWithEmail(email, password)
        .then(({user}) => {
          loadUser(user.uid, db)
            .then(userDetail => {
              resolve();
              return dispatch(authSuccess(userDetail));
            })
            .catch((e) =>{
              dispatch(authError(e.message));
              reject(e);
            });
        })
        .catch((e) =>{
          dispatch(authError(e.message));
          reject(e);
        });
    });
  };
};

export const authSuccess = (user)=>( {
  type: AUTH_SUCCESS,
  payload: user
});

export const authStarted = () => ({
  type: AUTH_STARTED,
});

export const authError = (err) => ({
  type: AUTH_ERROR,
  payload: err
})

;export const connectDb = (db) => ({
  type: CONNECT_DB,
  payload: db
});
