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
        <div>
            This is where you will input all of your text
            <form>
                <input type="text" name="text" value={state.text} onChange={handleChange} placeholder="Enter your message here..." required maxLength="160" size="100" />
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}