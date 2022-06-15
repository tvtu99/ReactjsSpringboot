import { Routes, Route } from 'react-router-dom'
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
