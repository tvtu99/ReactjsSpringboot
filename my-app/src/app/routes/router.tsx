import { Routes, Route } from 'react-router-dom'
import TrangChu from '../components/home/Home'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<TrangChu />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      {/* <Route path='/web_one' element={<WebOne />} />
      <Route path='/web_two' element={<WebTwo />} />
      <Route path='/web_three' element={<WebThree />} /> */}
    </Routes>
  )
}
