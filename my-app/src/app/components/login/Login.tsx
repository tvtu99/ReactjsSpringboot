import React, { FunctionComponent, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReduxCallbacks } from '../../models/redux/Callbacks';
import { User } from '../../models/User';
import { login } from '../../redux/modules/login';
import './Login.scss'

interface Props {
    user: User;
    login: (user: User, callbacks?: ReduxCallbacks) => void;
}
const mapStateToProps = (state: any) => {
    return {
        user: state.login.user,
    };
};
const mapDispatchToProps = {
    login,
};

const Login: FunctionComponent<Props> = ({
    user,
    login,
}) => {

    let navigate = useNavigate();
    //initState form login
    const initState: User = {
        email: '',
        password: ''
    }
    // form login
    const [formLogin, setFormLogin] = useState(initState);
    const credentialChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormLogin({ ...formLogin, [name]: value });
    };

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('user');
        let userStorage:User;
        if (typeof userLocalStorage === 'string' && userLocalStorage !== 'null') {
            userStorage = JSON.parse(userLocalStorage);
            login(userStorage)
            navigate('/');
        }
    },[])
    const loginPOST = async () => {
        // POST request using fetch with async/await
        //login(formLogin);
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formLogin)
        // };

        // const response = await fetch('/test', requestOptions).then(res => res.json())
        // const data = await response.json();
        // console.log(data);
        fetch('./api/login.json').then((res) => res.json())
            .then((result) => {
                if (result[0].kq) {
                    login(formLogin);
                    localStorage.setItem("user",JSON.stringify(formLogin));
                    navigate('/');
                }
                else {
                    toast.warn('User name or password fail!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            },
                (error) => {
                    console.log(error);
                }
            );


    }
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            loginPOST();
        }
        setValidated(true);


    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="row no-gutter bg-image" style={{ padding: "100px" }}>
                <div className="col-md-8 col-lg-8 col-xl-8 mx-auto bg-light">
                    <div className=" d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-xl-9 mx-auto">
                                    <h2 className="align-items-center text-center">Đăng Nhập Hệ Thống</h2>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="login-form d-flex flex-column">
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="inputEmail" type="email" name="email" onChange={credentialChange} placeholder="Địa chỉ Email" required className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </Form.Group>
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="inputPassword" type="password" name="password" onChange={credentialChange} placeholder="Mật Khẩu" required
                                                className="form-control rounded-pill border-0 shadow-sm px-4" />
                                            <br />
                                        </Form.Group>
                                        <Form.Group className="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" className="custom-control-input" />
                                            <label htmlFor="customCheck1" className="custom-control-label ml-20">Lưu mật khẩu</label>
                                        </Form.Group>
                                        <button type="submit" className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm align-center">Đăng Nhập</button>
                                        <div className="text-center d-flex justify-content-between mt-4 mx-auto">
                                            <p> Hoặc
                                                <Link to="/register" className="font-italic text-muted"> <u>Tạo Tài Khoản</u>
                                                </Link>
                                            </p>
                                        </div>
                                    </Form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
