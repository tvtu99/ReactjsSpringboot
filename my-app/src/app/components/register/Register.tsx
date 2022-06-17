import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Register.scss'
export default function Login() {

    const login = async () => {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'GET',
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const response = await fetch('/test', requestOptions);
        const data = await response.json();
        console.log(data);
    }
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("ok");
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            login();
        }
        setValidated(true);


    };
    return (
        <>
            <div className="row no-gutter bg-image" style={{ padding: "100px" }}>
                <div className="col-md-8 col-lg-8 col-xl-8 mx-auto bg-light">
                    <div className=" d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-xl-9 mx-auto">
                                    <h2 className="align-items-center text-center">Đăng Ký Tài Khoản</h2>
                                    <br />
                                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="login-form d-flex flex-column">
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="name" type="text" name="name" placeholder="Tên Người Dùng" required
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" />
                                            <br />
                                        </Form.Group>
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="email" type="email" name="email" placeholder="Địa chỉ Email" required
                                                className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </Form.Group>
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="password" type="password" name="password" placeholder="Mật Khẩu" required
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" />
                                            <br />
                                        </Form.Group>
                                        <Form.Group className="form-group mb-3">
                                            <Form.Control id="rePassword" type="password" name="rePassword" placeholder="Nhập lại Mật Khẩu"
                                                required className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" />
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