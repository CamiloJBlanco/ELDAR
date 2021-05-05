import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Table from './components/Table';
import AddUserForm from './components/AddUserForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [ users, setUsers ] = useState([]);
  const [ render, setRender ] = useState(false);
  
  useEffect(() => {
    getUsers();
    }, [render]);

const URL = `http://localhost:8080/api`

const getUsers = () => {
    axios.get(`${URL}/users`)
    .then(response => setUsers(response.data))
}

const leftUsers=  users?.filter((value) => value.userEnum === "SINCONFIRMAR");
const rightUsers=  users?.filter((value) => value.userEnum === "CONFIRMADO");

const removeUser = (id) => {
    axios.delete(`${URL}/${id}`).then(() => {
                setUsers(users.filter((user) => user.id !== id))
            }
        );
}

const addUser = (user) => {
    axios.post(`${URL}/user`, user)
        .then(
            (response) => {
                setUsers([...users, response.data])
                render === false ? setRender(true) : setRender(false) 
            }
        );
}

const updateUser = (user) => {
    axios.put(`${URL}/user/${user.id}`, user)
        .then(resp => {
            setUsers(users.map(user => (user.id === resp.data.id ? resp.data : user)))
        })
        render === false ? setRender(true) : setRender(false) 
}

//<TransferList />
  return (
    <div className="App">
        <div className="header">Birthday Invitations App</div>
        <Router>
            <Switch>
                <Route path="/addUser">
                    <AddUserForm addUser={addUser}/>    
                </Route>
                <Route path="/">
                    <Table users={users} leftUsers={leftUsers} rightUsers={rightUsers} removeUser={removeUser}  updateUser={updateUser}/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;