import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import './AddForm.css'
function UpdateContent() {
    const {id} = useParams()
    const [serialNumber, setSrNo] = useState()
    const [seriesOrMovieName, setMovieName] = useState()
    const [villainName, setVillainName] = useState()
    const [actions, setVillainActions] = useState()
    const [villainImgLink, setVillainLink] = useState()
    const [posterLink, setPosterLink] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/getItem/${id}`)
            .then(res => { 
                console.log(res)
                setSrNo(res.data.serialNumber)
                setMovieName(res.data.seriesOrMovieName)
                setVillainName(res.data.villainName)
                setVillainActions(res.data.actions)
                setVillainLink(res.data.villainImgLink)
                setPosterLink(res.data.posterLink)

            })
        .catch(err => console.log(err))
      },[])

    const Update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/update/'+id , {serialNumber,seriesOrMovieName, villainName, actions,villainImgLink, posterLink})

            .then(res => {
                console.log(res)
                navigate('/content')
            })
            .catch((err) => console.log(err))
    }
  return (

    <div className='form'>
            <form onSubmit={Update}>
            <h2>Update the details of your content here</h2>
                <div className='inputField'>
                    <h3 className='formLabel'>Update Serial Number</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Serial No. : </label>
                    <input type='text' id="" value={serialNumber} onChange={(e) => setSrNo(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Update Movie or Series Name</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Series / Movie Name :  </label>
                    <input type='text' id="" value={seriesOrMovieName} onChange={(e) => setMovieName(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    
                    <h3 className='formLabel'>Update Villain Name</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Villain Name : </label>
                    <input type='text' id="" value={villainName} onChange={(e) => setVillainName(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Update Actions of the Villain </h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Actions : </label>
                    <textarea type='text' id="" value={actions} onChange={(e) => setVillainActions(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Update Villain Image Link</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Villan Image Link : </label>
                    <input type='text' id=""  value={villainImgLink} onChange={(e) => setVillainLink(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Update Movie/Series Poster Link</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Poster Link : </label>
                    <input type='text' id="" value={posterLink} onChange={(e) => setPosterLink(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className='AddSubmit'>Update</button>
            </form>
        </div>
    )
}


export default UpdateContent