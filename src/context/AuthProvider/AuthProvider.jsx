import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const AUTH_CONTEXT = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a user with an email address and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in a user with an email address and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Handles Firebase user-Data Persistency
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // contextAPI Values
  const value = {
    user,
    loading,
    createUser,
    signIn,
  };

  return (
    <AUTH_CONTEXT.Provider value={value}>{children}</AUTH_CONTEXT.Provider>
  );
};

export default AuthProvider;
