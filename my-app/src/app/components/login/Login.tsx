import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Login.scss'

export default function Login() {

    const login =async () => {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        const response = await fetch('https://reqres.in/api/posts', requestOptions);
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
        else{
            event.preventDefault();
            event.stopPropagation();
            login();
            }
        setValidated(true);
        
        
      };
    return (
        <div className="row no-gutter bg-image" style={{ padding: "100px" }}>
            <div className="col-md-8 col-lg-8 col-xl-8 mx-auto bg-light">
                <div className=" d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-xl-9 mx-auto">
                                <h2 className="align-items-center text-center">Đăng Nhập Hệ Thống</h2>
                                <Form noValidate validated={validated} onSubmit={handleSubmit} className="login-form d-flex flex-column">
                                    <Form.Group className="form-group mb-3">
                                        <Form.Control id="inputEmail" type="email" name="email" placeholder="Địa chỉ Email" required className="form-control rounded-pill border-0 shadow-sm px-4" />
                                    </Form.Group>
                                    <Form.Group className="form-group mb-3">
                                        <Form.Control id="inputPassword" type="password" name="password" placeholder="Mật Khẩu" required
                                            className="form-control rounded-pill border-0 shadow-sm px-4 text-danger" />
                                        <br />
                                    </Form.Group>
                                    <Form.Group className="custom-control custom-checkbox mb-3">
                                        <input id="customCheck1" type="checkbox" className="custom-control-input" />
                                        <label htmlFor="customCheck1" className="custom-control-label ml-20">Lưu mật khẩu</label>
                                    </Form.Group>
                                    <button type="submit" className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm align-center">Đăng Nhập</button>
                                    <div className="text-center d-flex justify-content-between mt-4 mx-auto">
                                        <p> Hoặc 
                                            <Link to="dangky" className="font-italic text-muted"> <u>Tạo Tài Khoản</u>
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
    )
}