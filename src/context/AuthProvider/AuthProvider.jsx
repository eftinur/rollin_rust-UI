import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

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

  // Handles Google Firebase user-Data Persistency
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // Handles Google Firebase user_sign-out
  const logOut = () => {
    return signOut(auth);
  };

  // contextAPI Values to use across the application
  const value = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AUTH_CONTEXT.Provider value={value}>{children}</AUTH_CONTEXT.Provider>
  );
};

export default AuthProvider;
