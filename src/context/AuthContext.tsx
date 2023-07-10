import { createContext, ReactNode, useEffect, useState } from "react";
import { IAuthState } from "../types";
import { getAuth } from "../helper";


interface IAuthContextProps {
    authState: IAuthState | null
    setAuthState: React.Dispatch<React.SetStateAction<IAuthState | null>>
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<IAuthState | null>(null);

    useEffect(() => {
        if (authState === null || authState === undefined) return;
        window.localStorage.setItem('authState', JSON.stringify(authState));
    }, [authState])

    useEffect(() => {
        getAuth()
            .then(authState => {
                setAuthState({
                    ...authState,
                    jwt_token: authState.jwt_token,
                    username: authState.username
                });
            })
            .catch(err => setAuthState(err)); // error is null in this case.
    }, [])

    return <AuthContext.Provider value={{
        authState,
        setAuthState
    }}>
        {
            children
        }
    </AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };