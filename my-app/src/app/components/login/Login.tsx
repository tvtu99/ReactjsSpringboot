import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginA } from '../../redux/modules/auth/actions';
// import { loginA } from '../../redux/modules/auth';

export default function Login() {
    const state = useSelector( (state:any) => {
        console.log(state);
        return state;
    })
    const dispatch = useDispatch();
    // dispatch({ type: 'LOGIN' })
    useEffect(() => {
        // dispatch({ type: 'LOGIN' , payload: {email: "admin", password:"admin"}});
        dispatch(loginA({email: "admin", password:"admin"}))
    }, [])
    
  return (
    <div>Login</div>
  )
}