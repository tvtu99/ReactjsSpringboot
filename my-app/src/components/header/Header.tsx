import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import './Header.scss'
const Header = () => {

    return <>
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light bg-light-tu nav-header">
                <Link className="navbar-brand" to="/">
                    <img src="./assets/img/logo.png" alt="" />
                </Link>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Trang Chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Giới Thiệu</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Phản Hồi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Liên Hệ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Đăng Nhập</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex form-search" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </>
}
export default Header;