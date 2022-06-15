import React from 'react';
const Footer = () => {
    return <>
        <div className="page-footer row">
            <div className="col-md-3 bd">
                <p style={{ color: "#fff" }}>Bản Đồ</p>
                <a href="/"><img src="../img/TLU-map.png" alt="map-thuy-loi" style={{ width: "90%" }} /></a>
            </div>
            <div className="font-size-a nav-footer col-md-3">
                <ul>
                    <h4 style={{ textAlign: "center" }}>ĐẠI HỌC THỦY LỢI</h4>
                    <li><a href="/">TUYỂN SINH</a></li>
                    <li><a href="/">ĐÀO TẠO</a></li>
                    <li><a href="/">KHOA HỌC CÔNG NGHỆ</a></li>
                    <li><a href="/">SINH VIÊN</a></li>
                    <li><a href="/">ĐỐI Ngoại</a></li>
                </ul>
            </div>
            <div className="font-size-a nav-footer col-md-3">
                <ul>
                    <h4 style={{ textAlign: "center" }}>TIN TỨC-THÔNG BÁO</h4>
                    <li><a href="/">TIN TỨC</a></li>
                    <li><a href="/">THÔNG BÁO</a></li>
                    <li><a href="/">TIN VIDEO</a></li>
                </ul>
            </div>
            <div className="col-md-3 dc">
                <p>TRƯỜNG ĐẠI HỌC THỦY LỢI <br />
                    Địa chỉ : 175 TÂY SƠN, ĐỐNG ĐA, HÀ NỘI.<br />
                    Điện thoại: (024) 3852 2201 - Fax: (024) 3563 3351<br />
                    Email: phonghcth@tlu.edu.vn<br />
                </p>
            </div>
        </div>
        <div className="row copyandmxh">
            <div className="col-md-9 copy">
                <p>@2017. Bản quyền thuộc về trường Đại học Thủy Lợi</p>
            </div>
            <div className="mxh col-md-3">
                <ul>
                    <li><a href="https://www.facebook.com/daihocthuyloi1959/?fref=ts" className="fb">FB</a></li>
                    <li><a href="https://twitter.com/Daihocthuyloihn" className="tw">TW</a></li>
                    <li><a href="https://www.youtube.com/user/daihocthuyloi" className="gp">Y</a></li>
                </ul>
            </div>
        </div>
    </>
};
export default Footer;