import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="main-l col-md-3">
          <div className="dm">
            <h5 style={{ padding: "5px" }}>Danh Mục Chính</h5>
            <ul className="menu">
              <li>
                <a href="/" className="active">
                  <span>Trang Chủ</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Tuyển sinh</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Tin Tức</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Chương Trình Đào Tạo</span>
                </a>
              </li>
              <li>
                <Link to="/admin/khoa">
                  <span>ADMIN</span>
                </Link>
              </li>
              <li>
                <a href="/bts/hoso">
                  <span>BAN TUYỂN SINH</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- box check --> */}
          <div className="box-check">
            <h5>Điều tra nguyện vọng đăng ký</h5>
            <div style={{ paddingLeft: "10px", textAlign: "left" }}>
              Bạn đã có nguyện vọng, mong muốn của mình chưa chưa?
              <table>
                <tr>
                  <td>
                    <input type="radio" name="check" value="Đã Có" />
                    <label htmlFor="ctl02_rbl1_0">Đã Có</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" name="check" value="Chưa Có" />
                    <label htmlFor="ctl02_rbl1_1">Chưa Có</label>
                  </td>
                </tr>
              </table>
              <input
                type="submit"
                name="Save"
                value="Đồng ý"
                className="btn-primary"
              />
              <input
                type="submit"
                name="Cancel"
                value="Hủy"
                className="btn-primary"
              />
              <input
                type="submit"
                name="Result"
                value="Thống kê"
                className="btn-primary"
              />
            </div>
          </div>
        </div>
        <div className="main-r col-md-9">
          <div className="daumuc">
            <a href="">
              <h3>Tin Tức Tuyển Sinh</h3>
            </a>
          </div>
          <ul>
            <li>
              <a href="http://ts.tlu.edu.vn/tuyen-sinh-dai-hoc/truong-dai-hoc-thuy-loi-thong-bao-tuyen-11002">
                Trường Đại học Thủy lợi thông báo Tuyển sinh đại học hệ chính
                quy năm 2020
              </a>
            </li>
            <li>
              <a href="http://ts.tlu.edu.vn/tuyen-sinh-dai-hoc/huong-dan-nhap-hoc-truc-tuyen-14845">
                Hướng dẫn nhập học trực tuyến
              </a>
            </li>
            <li>
              <a href="http://ts.tlu.edu.vn/tuyen-sinh-dai-hoc/huong-dan-thi-sinh-kiem-tra-ho-so-dang-13167">
                Hướng dẫn thí sinh kiểm tra hồ sơ đăng ký xét tuyển online
              </a>
            </li>
            <li>
              <a href="http://ts.tlu.edu.vn/tuyen-sinh-dai-hoc/thong-bao-diem-chuan-dai-hoc-he-chinh-13250">
                Thông báo điểm chuẩn đại học hệ chính quy năm 2020 theo phương
                thức xét tuyển học bạ đợt 1
              </a>
            </li>
            <li>
              <a href="http://ts.tlu.edu.vn/tuyen-sinh-dai-hoc/thong-bao-ve-viec-xac-nhan-nhap-hoc-va-14854">
                Thông báo về việc xác nhận nhập học và nhập học đối với thí sinh
                trúng tuyển theo phương thức xét điểm thi THPT năm 2021
              </a>
            </li>
            <li>
              <a href="http://ts.tlu.edu.vn/tuyen-sinh-dai-hoc/thong-bao-ke-hoach-nhap-hoc-he-dai-hoc-14840">
                Thông báo kế hoạch nhập học hệ Đại học chính quy năm 2021
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
