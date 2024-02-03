import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='HomePage'>
            <div className='HomeDiv'>
                <h1 className='Heading'>Welcome to Incorrect Cartoon Characters</h1>
                <p className='description'>We all have noticed how villains always seem to behave in the most illogical and nonsensical ways? <br />
                    I mean, they spend all this time plotting their evil schemes,
                    but then they leave obvious clues for the hero to find.
                    <br />
                    In this appliction, we will create a list of nonsensical actions performed by villains.
                </p>
                
            </div>
            <div>
                <Link to='/content'><button className='continueBtn'>Continue</button></Link>
            </div>
        </div>
    )
}

export default Home