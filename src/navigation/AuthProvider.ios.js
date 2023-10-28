import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { appleAuth } from '@invertase/react-native-apple-authentication';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        appleLogin: async () => {
          // performs login request
          const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
          });

          // get current authentication state for user
          // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
          const credentialState = await appleAuth.getCredentialStateForUser(
            appleAuthRequestResponse.user
          );

          // use credentialState response to ensure the user is authenticated
          if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated

            console.log(credentialState)
            console.log(appleAuthRequestResponse)
            
              await auth()
                .createUserWithEmailAndPassword(appleAuthRequestResponse.email, "abc123")
                .then(() => {
                  //Once the user creation has happened successfully, we can add the currentUser into firestore
                  //with the appropriate details.
                  firestore()
                    .collection("users")
                    .doc(auth().currentUser.uid)
                    .set({
                      fname: "",
                      lname: "",
                      email: email,
                      createdAt: firestore.Timestamp.fromDate(new Date()),
                      userImg: null,
                    })
                    //ensure we catch any errors at this stage to advise us if something does go wrong
                    .catch((error) => {
                      console.log(
                        "Something went wrong with added user to firestore: ",
                        error
                      );
                    });
                })
          }
        },
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore()
                  .collection("users")
                  .doc(auth().currentUser.uid)
                  .set({
                    fname: "",
                    lname: "",
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch((error) => {
                    console.log(
                      "Something went wrong with added user to firestore: ",
                      error
                    );
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch((error) => {
                console.log("Something went wrong with sign up: ", error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
