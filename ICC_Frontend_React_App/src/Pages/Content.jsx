import React from 'react';
// import datas from './data.json'
import './Content.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Content() {

  const [datas, setDatas] = useState([])
  const [userData, setUserData] = useState({})

  useEffect (() => {
    const getCookie = (name) => {
      const cookieArray = document.cookie.split('; ');
      const cookie = cookieArray.find((row) => row.startsWith(name + "="))
      return cookie ? cookie.split("=")[1] : null;
    }

    const name = getCookie("name")
    const email = getCookie("email")
    const username = getCookie("username")

    setUserData({name, email, username})
  }, [])

  const clearCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 2000 00:00:01 GMT;path=/;`;
  };

  const handleLogOut = () => {
    clearCookie("name");
    clearCookie("email");
    clearCookie("username");
    console.log("Updated Cookies:", document.cookie);
  };


  useEffect(()=>{
    axios.get('http://localhost:3000/data')
    .then(datas => setDatas(datas.data))
    .catch(err => console.log(err))
  },[])
  
  const handleDelete= (id) =>{
    axios.delete('http://localhost:3000/delete/'+id)
    .then(res => {
        console.log(res)
        window.location.reload();
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='grid'>
      <nav>
      {userData.name && <p className="name">Name: {userData.name}</p>}
          {userData.email && <p  className="name">Email: {userData.email}</p>}
          {userData.username && <p className="name">Username: {userData.username}</p>}
      </nav>
      <div className='btns'>
        <Link to='/login'>
        <button onClick={handleLogOut}>Log Out</button>
        </Link>
      <Link to='/add'><button className='AddDataBtn'>Add Data</button></Link>
      </div>
      
    {
        datas.map((data, index)=>{
            return(
                <div key={index} className='movieDiv'>
                    <div>
                    <img src={data.posterLink} className='posterMovie' />
                    </div>
                    <h2><span>{data.serialNumber}.</span> Movie Title : {data.seriesOrMovieName}</h2>
                    <p>{data.actions}</p>
                    <img src={data.villainImgLink} alt="" />
                    <h2>Villan Name : {data.villainName}</h2>
                    <div className="btnContainer">
                     <Link to={`/update/${data._id}`}> <button className='EditButton'>Edit</button></Link>
                      <button onClick={(e)=>handleDelete(data._id)} className='DeleteButton'>Delete</button>
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}

export default Content