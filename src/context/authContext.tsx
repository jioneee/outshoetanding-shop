import React from 'react';
import { User } from '@firebase/auth';
//모든 컴포넌트에서 사용할 수 있도록 context 사용

export const AuthContext = React.createContext<User | null>(null);
