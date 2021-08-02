import {useState} from 'react';

const initialValues = {
    text: ""
}

export default function TextField(){
    const [state, setState] = useState(initialValues)

    const handleChange = e => {
        return setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="text-field-wrapper">
            <form className="text-field-form-wrapper">
                <input className="text-field-input" type="text" name="text" value={state.text} onChange={handleChange} placeholder="Enter your message here..." required maxLength="160" />
                <button className="send-button" type="submit" >Send</button>
            </form>
        </div>
    )
}