import './App.css';
import {useState, useEffect} from 'react'
import UsernameForm from './components/UsernameForm';
import UserWindow from './components/UserWindow';

const initialValues = {
  username: window.localStorage.getItem("username") || ""
}

function App() {
  const [state, setState] = useState(initialValues)

  useEffect(() => {
    if (state.username !== ""){
      console.log(state.username)
      let username = state.username;
    } else {
      return
    }
  }, [state])

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
        (state.username) ? <UserWindow props={state} /> : <UsernameForm submitUsername={submitUsername} />
      }
    </div>
  );
}

export default App;
