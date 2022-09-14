import React, { useState } from 'react'
import { auth } from '../../api/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const onSubmit = (form) => {
    return signInWithEmailAndPassword(auth, form.email, form.password)
}

export const LoginPage = () => {
    const [form, setForm] = useState({ email: '', password: '' })

    const handleChangeForm = (e) => {
        const field = e.target.getAttribute('data-name')
        setForm({
            ...form,
            [field]: e.target.value
        })
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <input type='text' placeholder='email' value={form.email} data-name='email'
                onChange={handleChangeForm} />
            <input type='password' placeholder='password' value={form.password} data-name='password'
                onChange={handleChangeForm} />
            <button onClick={() => onSubmit(form)}>Log in</button>
        </div>
    )
}