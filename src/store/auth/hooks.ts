import { useContext, Dispatch } from "react"
import { AuthAction } from "./actions"
import { AuthContext, AuthDispatcher } from "./provider"

const useAuth = () => useContext<AuthState>(AuthContext)
const useAuthDispatcher = () => useContext<Dispatch<AuthAction> | (() => null)>(AuthDispatcher)


export {useAuth, useAuthDispatcher}