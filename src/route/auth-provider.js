import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            const data = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            return data;
          } catch (err) {
            switch (err.code) {
              case 'auth/user-not-found':
              case 'auth/user-disabled':
              case 'auth/invalid-email':
                return {
                  message: 'Invalid Email, try with another email address',
                  isError: true,
                };
              case 'auth/wrong-password':
                return {
                  message: err.message,
                  isError: true,
                };
              default:
                return {
                  message: 'Something went wrong!',
                  isError: true,
                };
            }
          }
        },
        register: async (email, password) => {
          try {
            const data = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );
            return data;
          } catch (e) {
            switch (e.code) {
              case 'auth/email-already-in-use':
                return {
                  message: 'Email already in use',
                  isError: true,
                };
              case 'auth/invalid-email':
                return {
                  message: 'Invalid email',
                  isError: true,
                };
              case 'auth/weak-password':
                return {
                  message: 'Password is weak',
                  isError: true,
                };
              default:
                return {
                  message: 'Something went wrong',
                  isError: true,
                };
            }
          }
        },
        logout: async () => {
          try {
            const data = await auth().signOut();
            return data;
          } catch (err) {
            return {
              message: 'Something went wrong',
              isError: true,
            };
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
