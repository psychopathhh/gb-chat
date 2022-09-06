import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { updateProfile } from '../../store/profile'

export const ProfileForm = ({ name, surname, phone }) => {
    const [form, setForm] = useState({ name, surname, phone })
    const dispatch = useDispatch()
    const handleChangeForm = (e) => {
        const field = e.target.getAttribute('data-name')
        setForm({
            ...form,
            [field]: e.target.value
        })
    }
    return (
        <div>
            <h1>Profile Form</h1>
            <div>
                {
                    Object.keys(form).map(id => {
                        return <input key={id} value={form[id]} placeholder={id} data-name={id} onChange={handleChangeForm} />
                    })
                }
                <button onClick={() => dispatch(updateProfile(form))}>click me</button>
            </div>
        </div>
    )
}
