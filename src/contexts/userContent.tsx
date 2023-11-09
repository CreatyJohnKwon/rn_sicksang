import { createContext } from 'react';

interface UserContextProps {
  setUser: React.Dispatch<React.SetStateAction<null>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default UserContext;