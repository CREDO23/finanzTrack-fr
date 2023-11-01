
import { createContext } from "react";

interface Initial {
    isLoading: boolean;
    user : IUser | null,
    accessToken : string | null
}

export const defaultUserContext : Initial = {
    isLoading: false,
    user : null,
    accessToken: null
}

const AuthContext = createContext(defaultUserContext)

export default AuthContext