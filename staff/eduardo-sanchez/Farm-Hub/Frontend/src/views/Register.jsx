import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"

import logic from '../logic'

import Field from '../components/core/Field'
// import Link from '../components/core/Link'
import Title from '../components/core/Title'

import { SystemError } from 'com/errors'

// import useContext from "../useContext"

import './Register.css'

function Register() {

    const navigate = useNavigate()

    console.log('Register -> render')

    const [message, setMessage] = useState('')

    // const { alert } = useContext()

    const handleRegisterSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const surname = form.surname.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordRepeat.value

        try {
            logic.registerUser(name, surname, email, username, password, passwordRepeat)
                .then(() => {
                    navigate("/login")
                    console.log('User Register -> success')
                })
                .catch((error) => {
                    if (error instanceof SystemError) {
                        console.error(error)
                        alert(error.message)

                        return
                    }
                    setMessage(error.message)
                })
        } catch (error) {
            setMessage(error.message)
            console.error(error)
        }
    }

    // const handleLoginClick = event => {
    //     event.preventDefault()

    //     navigate('/login')
    // }

    return (
        <div>

            <Title className="text-4xl text-green-300">Farm-Hub</Title>

            <form className="RegisterForm" onSubmit={handleRegisterSubmit}>
                <Title>Register</Title>

                <Field id="name" type="text" placeholder="name">Name</Field>

                <Field id="surname" type="text" placeholder="surname">Surname</Field>

                <Field id="email" type="email" placeholder="name@example.com">E-mail</Field>

                <Field id="username" type="text" placeholder="username">Username</Field>

                <Field id="password" type="password" placeholder="password">Password</Field>

                <Field id="passwordRepeat" type="password" placeholder="password repeat">Password Repeat</Field>

                <button type="submit">Register</button>

            </form>
            <p className="ErrorMessage">{message}</p>
            <Link className="Link" to="/login">Login</Link>

        </div>
    )
}

export default Register