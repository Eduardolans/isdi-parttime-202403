import { Link, useNavigate } from "react-router-dom"
import Title from "../components/core/Title"

import Button from "../components/core/Button"

import logic from "../logic"
import { useEffect, useState } from "react"

import AdList from "./components/AdList/AdList"


import './Home.css'
import Header from "./components/Header/Header"
import { CreateAdButton } from "./components/CreateAdButton/CreateAdButton"
function Home() {

    const [user, setUser] = useState('')
    const navigate = useNavigate

    useEffect(() => {
        console.log('Home -> useEffect')

        try {
            logic.getUserInfo()
                .then(user => {
                    console.log('Home -> setUsername')

                    setUser(user)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message + " " + "HELL")
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    return <>

        <Header user={user} />

        {/* <Title>Farm-Hub</Title>
            <h1 className='UsernameTitle'>{user.username}</h1>


        </Header> */}
        <main className="Home">

            <CreateAdButton />

            <div>
                <AdList />

            </div>


        </main>
    </>
}

export default Home