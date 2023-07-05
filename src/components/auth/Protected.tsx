import { useEffect } from "react";
import { useAuthContex } from "../../context";
import { useNavigate } from "react-router-dom";


const Protected = ({ children }: { children: JSX.Element }) => {
    const { authState } = useAuthContex();
    const natigate = useNavigate();

    useEffect(() => {
        if (!authState.username || !authState.jwt_token) {
            natigate('/auth/login');
        }
    }, [])

    return (
        <>
            {
                children
            }
        </>
    )
}

export default Protected;