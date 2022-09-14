import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../api/firebase'

const onSubmit = (form) => {
    return createUserWithEmailAndPassword(auth, form.email, form.password)
}

export const SignUpPage = () => {
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
            <h1>SignUpPage</h1>
            <input type='text' placeholder='email' value={form.email} data-name='email'
                onChange={handleChangeForm} />
            <input type='password' placeholder='password' value={form.password} data-name='password'
                onChange={handleChangeForm} />
            <button onClick={() => onSubmit(form)}>Sign Up</button>
        </div>
    )
}