import React, {useState} from 'react';

const initialValues = {
    username: ""
}

export default function UsernameForm({submitUsername}){
    const [values, setValues] = useState(initialValues)

    const handleChange = e => {
        return setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        submitUsername(values.username)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={values.username} onChange={handleChange} name="username" placeholder="Your Username..." minLength="3" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}