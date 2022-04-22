import React, {useState, useEffect} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Cards from './components/Cards';
import Details from './components/Details';

function App() {
  const [users, setUser] = useState([])
  const navigate = useNavigate()
  useEffect (() => {
    handleSubmit()
  }, [])
  const handleSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUser(data)
    })  
  }
  const showDetails = (code) => {
    navigate(`/${code}`)
  }
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
           <div className='users'>
             <h1>Users Info</h1>
              <div className='container'>
            {users.map((user, index) => (
              <Cards key={index} user={user} index={index} showDetails={showDetails} code={user.name} />
            ))}
            </div>
           </div>
        } />
        <Route path='/:details' element={
          <Details users={users} />
        } />
      </Routes>
     
    </div>
  );
}

export default App;
