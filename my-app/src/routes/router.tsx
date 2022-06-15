
import { Routes, Route } from 'react-router-dom'
// import Home from '../Page/Home'
// import WebOne from '../Page/web1'
// import WebTwo from '../Page/web2'
// import WebThree from '../Page/web3'
import TrangChu from '../components/home/Home'
import Login from '../components/login/Login'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<TrangChu />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='/web_one' element={<WebOne />} />
      <Route path='/web_two' element={<WebTwo />} />
      <Route path='/web_three' element={<WebThree />} /> */}
    </Routes>
  )
}
