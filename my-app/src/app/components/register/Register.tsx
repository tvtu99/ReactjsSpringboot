import React, { useState } from 'react'
import { Form, ToastHeader } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { register } from '../../redux/modules/register/actions';

import './Register.scss'
export default function Register() {

    const initUserRegister = {
        email: "",
        name: "",
        password: "",
        rePassword: "",
        phone: ""
    }
    const credentialChange = (event: { target: { name: any; value: any; }; }) => {
        setUserRegister({
            ...userRegister,
            [event.target.name]: event.target.value
        });
    }
    const [userRegister, setUserRegister] = useState(initUserRegister);

    const dispatch = useDispatch();
    const registerSubmit = async () => {
        // // POST request using  fetch with async/await
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(initUserRegister)
        // };
        // const response = await fetch('/register', requestOptions);
        // const data = await response.json();
        // console.log(data);
        // if (data.message === "success") {
        //     // 
        // }
        // else if(data.message === "email"){
        //     //
        // }
        dispatch(register(userRegister));
    }
    const [validated, setValidated] = useState(false);
    const handleSubmitRegister = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            toast.error('Input fail!');
        }
        else if (userRegister.password !== userRegister.rePassword) {
            event.preventDefault();
            event.stopPropagation();
            toast.warn('RePassword fail!');
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            registerSubmit();
            console.log(userRegister);
            
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
                                    <h2 className="align-items-center text-center">Đăng Ký Tài Khoản</h2>
                                    <br />
                                    <Form noValidate validated={validated} onSubmit={handleSubmitRegister} className="login-form d-flex flex-column">
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="name" type="text" name="name" placeholder="Tên Người Dùng" required onChange={credentialChange} 
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" />
                                            <br />
                                        </Form.Group>
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="email" type="email" name="email" placeholder="Địa chỉ Email" required onChange={credentialChange} 
                                                className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </Form.Group>
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="password" type="password" name="password" placeholder="Mật Khẩu" required onChange={credentialChange} 
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" />
                                            <br />
                                        </Form.Group>
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="rePassword" type="password" name="rePassword" placeholder="Nhập lại Mật Khẩu"
                                                required onChange={credentialChange} className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" />
                                            <br />
                                        </Form.Group>
                                        <button type="submit" className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm">Đăng Ký</button>
                                        <div className="text-center d-flex justify-content-between mt-4">
                                            <p> Hoặc nếu đã có tài khoản <a href="/login" className="font-italic text-muted">
                                                <u>Đăng nhập</u></a></p>
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