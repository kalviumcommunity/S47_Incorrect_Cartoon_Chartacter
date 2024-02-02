import React from 'react'
import datas from './data.json'
import './Content.css'
function Content() {
  return (
    <div className='grid'>
    {
        datas.map((data, index)=>{
            return(
                <div key={index} className='movieDiv'>
                    <div>
                    <img src={data.posterLink} className='posterMovie' />
                    </div>
                    
                    <h2>Movie Title : {data.seriesMovieName}</h2>
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