import Swal from 'sweetalert2'


import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { noteLogout } from './notes';
import { finishLoading, startLoading } from "./ui";


export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) => {
        // primera instancia disparamos la accion startloading para colocar el loading en true
        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({user}) => {
                dispatch(login( user.uid, user.displayName ));
                //disparamos la accion finish loading luego de hacer el login
                dispatch( finishLoading() )
            })
            .catch( e => {
                console.log(e);

                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');

            })
    }
}

export const startRegisterWhitEmail = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {
                // actualizamos el displayName del usuario por el nombre que el ingreso
                await user.updateProfile({ displayName: name})
                dispatch(
                    //enviamos el id y el nombre de usuarios recibidos por firebase y los enviamos a la accion login
                    login( user.uid, user.displayName )
                );
            })
            .catch( e=> {
                console.log(e)
                Swal.fire('Error', e.message, 'error');
            })
    }
}


//accion de autenticacion de google

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        //desestructuraccion del user
            .then( ({ user }) => {
                dispatch(
                    //enviamos el id y el nombre de usuarios recibidos por firebase y los enviamos a la accion login
                    login( user.uid, user.displayName )
                );
            });
    }
}

export const login = (uid, displayName ) => ({ 
        type: types.login,
        payload: {
            uid,
            displayName
        }
});

export const startLogout = () => { 
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
        dispatch( noteLogout() );
    }
}

export const logout = () => ({
  type: types.logout  
})
