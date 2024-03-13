import { ReactNode } from 'react';
import { User } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { db } from '../firebase';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = db.onAuthStateChanged((newUser) => {
      console.log(`user`, newUser);
      setUser(newUser);
    });
    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
