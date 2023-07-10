import { useAuthContex } from "../../context";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }: { children: JSX.Element }) => {
    const { authState } = useAuthContex();
    const navigate = useNavigate();
    
    if (!authState) {
        navigate('/auth/login');
    }

    return (
        <>
            {
                children
            }
        </>
    )
}

export default Protected;