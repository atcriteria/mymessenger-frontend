import './App.css';
import {useState} from 'react'
import UsernameForm from './components/UsernameForm';

const initialValues = {
  username: window.localStorage.getItem("username") || ""
}

function App() {
  const [state, setState] = useState(initialValues)

  const submitUsername = username => {
    window.localStorage.setItem("username", username)
    return setState({
      ...state,
      username
    })
  }
  return (
    <div className="App">
      Main App<br />
      {
        (state.username) ? `Welcome back ${state.username}` : <UsernameForm submitUsername={submitUsername} />
      }
    </div>
  );
}

export default App;
