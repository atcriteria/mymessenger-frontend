import {useState} from 'react';
import { socket } from '../util/socket';

const initialValues = {
    text: ""
}

export default function TextField({username, colorScheme}){
    const [state, setState] = useState(initialValues)

    const handleChange = e => {
        return setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const message = {username: username, message: [state.text], colorScheme: colorScheme}
        if (message === ""){
            return
        }
        socket.emit("send-message", message)
        setState(initialValues)
    }
    return(
        <div className="text-field-wrapper">
            <form className="text-field-form-wrapper" onSubmit={handleSubmit} >
                <input className="text-field-input" type="text" name="text" value={state.text} onChange={handleChange} placeholder="Enter your message here..." required maxLength="160" />
                <button className="send-button" type="submit" >Send</button>
            </form>
        </div>
    )
}