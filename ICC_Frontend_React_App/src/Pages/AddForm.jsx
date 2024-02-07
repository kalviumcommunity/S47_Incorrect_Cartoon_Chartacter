import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AddForm.css'

function AddForm() {

    const [serialNumber, setSrNo] = useState('')
    const [seriesOrMovieName, setMovieName] = useState('')
    const [villainName, setVillainName] = useState('')
    const [actions, setVillainActions] = useState('')
    const [villainImgLink, setVillainLink] = useState('')
    const [posterLink, setPosterLink] = useState('')

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/data', {
            serialNumber: serialNumber,
            seriesOrMovieName: seriesOrMovieName,
            villainName: villainName,
            actions: actions,
            villainImgLink: villainImgLink,
            posterLink: posterLink
        })

            .then(res => {
                console.log(res)
                navigate('/content')
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className='form'>
            <form onSubmit={(e) => Submit(e)}>
            <h2>Enter the details of your content here</h2>
                <div className='inputField'>
                    <h3 className='formLabel'>Add Serial Number</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Serial No. : </label>
                    <input type='text' id="" value={serialNumber} onChange={(e) => setSrNo(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Add Movie or Series Name</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Series / Movie Name :  </label>
                    <input type='text' id="" value={seriesOrMovieName} onChange={(e) => setMovieName(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    
                    <h3 className='formLabel'>Add Villain Name</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Villain Name : </label>
                    <input type='text' id="" value={villainName} onChange={(e) => setVillainName(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Add Actions of the Villain </h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Actions : </label>
                    <textarea type='text' id="" value={actions} onChange={(e) => setVillainActions(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Add Villain Image Link</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Villan Image Link : </label>
                    <input type='text' id="" value={villainImgLink} onChange={(e) => setVillainLink(e.target.value)} />
                    </div>
                </div>

                <div className='inputField'>
                    <h3 className='formLabel'>Add Movie/Series Poster Link</h3>
                    <div className='inputLabel'>
                    <label htmlFor="">Poster Link : </label>
                    <input type='text' id="" value={posterLink} onChange={(e) => setPosterLink(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className='AddSubmit'>Submit</button>
            </form>
        </div>
    )
}

export default AddForm