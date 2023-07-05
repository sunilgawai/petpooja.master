import { createContext, ReactNode, useEffect, useState } from "react";


interface IAuthState {
    username: string;
    jwt_token: string;
}

interface IAuthContextProps {
    authState: IAuthState
    setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<IAuthState>({
        username: "",
        jwt_token: ""
    });

    useEffect(() => {
        // get auth state from local storage.
        const auth = localStorage.getItem('authState');
        console.log("auth", auth)
        if (auth) {
            const _authState = JSON.parse(auth) as IAuthState;
            console.log('from local storage', _authState);
            setAuthState({
                ...authState,
                jwt_token: _authState.jwt_token,
                username: _authState.username
            });
            console.log('stored to state')
        }
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