import { useState } from "react";
import ApiService from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { useAuthContex } from "../context";

const Login = () => {
    const { authState, setAuthState } = useAuthContex()
    const [error, setError] = useState<string>('');
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = () => {
        ApiService.login(form).then(res => {
            if (res.status === 200) {
                setAuthState({
                    ...authState,
                    jwt_token: res.data.data.jwt_token,
                    username: res.data.data.username
                })
                navigate('/');
                return;
            }
        }).catch(err => {
            console.log(err);
            setError(err.response.message)
            navigate('/auth/login')
        })
    }

    return (
        <div className="form-wrapper bg-dark d-flex justify-content-center align-center" style={{ width: '100vw', height: '100vh' }}>
            {/* <LoginForm /> */}
            <div className="login rounded">
                <h2 className="text-red">PetPooja</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }}
                    className="needs-validation">
                    <div className="form-group mb-2 was-validated">
                        <label htmlFor="username" className="form-lable">Username</label>
                        <input type="text" required onChange={(e) => setForm({
                            ...form,
                            username: e.target.value
                        })}
                            className="form-control" id="username" placeholder="Username" />
                        <div className="invalid-feedback">
                            Please enter your username
                        </div>
                    </div>
                    <div className="form-group mb-2 was-validated">
                        <label htmlFor="password" className="form-lable">Password</label>
                        <input type="password" required onChange={(e) => setForm({
                            ...form,
                            password: e.target.value
                        })}
                            className="form-control" id="password" placeholder="Password" />
                        <div className="invalid-feedback">
                            Please enter your password
                        </div>
                    </div>
                    {error}
                    {error && <div className="invalid-feedback">
                        {error}
                    </div>}
                    <button className="btn btn-success mt-2 border border-white text-white">Sign In</button>
                </form>
            </div>
        </div >
    )
}

export default Login;