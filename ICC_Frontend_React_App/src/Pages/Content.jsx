import React from 'react';
// import datas from './data.json'
import './Content.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Content() {

  const [datas, setDatas] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/data')
    .then(datas => setDatas(datas.data))
    .catch(err => console.log(err))
  },[])
  return (
    <div className='grid'>
      <Link to='/add'><button>Add Data</button></Link>
    {
        datas.map((data, index)=>{
            return(
                <div key={index} className='movieDiv'>
                    <div>
                    <img src={data.posterLink} className='posterMovie' />
                    </div>
                    <h2>Movie Title : {data.seriesOrMovieName}</h2>
                    <p>{data.actions}</p>
                    <img src={data.villainImgLink} alt="" />
                    <h2>Villan Name : {data.villainName}</h2>
                </div>
            )
        })
    }
    </div>
  )
}

export default Content