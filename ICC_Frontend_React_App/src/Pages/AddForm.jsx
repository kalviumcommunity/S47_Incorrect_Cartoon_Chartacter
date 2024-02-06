import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
        <div>
            <form onSubmit={(e) => Submit(e)}>
                <h2>Add Serial No.</h2>
                <div>
                    <label htmlFor="">Serial No. : </label>
                    <input type='text' id="" value={serialNumber} onChange={(e) => setSrNo(e.target.value)} />
                </div>
                <h2>Add Movie or Series Name</h2>
                <div>
                    <label htmlFor="">Series / Movie Name : </label>
                    <input type='text' id="" value={seriesOrMovieName} onChange={(e) => setMovieName(e.target.value)} />
                </div>
                <h2>Add Villain Name</h2>
                <div>
                    <label htmlFor="">Villain Name : </label>
                    <input type='text' id="" value={villainName} onChange={(e) => setVillainName(e.target.value)} />
                </div>
                <h2>Add Actions of the Villain </h2>
                <div>
                    <label htmlFor="">Actions. : </label>
                    <textarea type='text' id="" value={actions} onChange={(e) => setVillainActions(e.target.value)} />
                </div>
                <h2>Add Villain Image Link</h2>
                <div>
                    <label htmlFor="">Villan Image Link : </label>
                    <input type='text' id="" value={villainImgLink} onChange={(e) => setVillainLink(e.target.value)} />
                </div>
                <h2>Add Movie/Series Poster Link</h2>
                <div>
                    <label htmlFor="">Poster Link : </label>
                    <input type='text' id="" value={posterLink} onChange={(e) => setPosterLink(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddForm