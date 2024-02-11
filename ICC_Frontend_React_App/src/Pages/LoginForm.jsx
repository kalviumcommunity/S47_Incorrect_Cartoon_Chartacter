import React from 'react'
import { Link } from 'react-router-dom';
import './AddForm.css'

function LoginForm() {

    const CookieData = (name , value) => {
        document.cookie= `${name}=${value};path=/;`;
    }
  return (
    <>
    <h1>Login Form</h1>
    <br />
    <form onSubmit={(e)=>{ e.preventDefault(); }} >
        <label htmlFor="">Enter Name :</label>
        <input type='text' name='name' id='name' onChange={(e)=> CookieData('name', e.target.value)}/> <br />
        <label htmlFor="">Enter Email :</label>
        <input type='email' name='email' id='email' onChange={(e)=> CookieData('email', e.target.value)}/><br/>
        <label htmlFor="">Enter User Name :</label>
        <input type='text' name='username' id='username' onChange={(e)=> CookieData('username', e.target.value)}/><br/>
        <Link to='/content'>
        <button type='submit'>Submit</button>
        </Link>
       
    </form>
    </>
  )
}

export default LoginForm