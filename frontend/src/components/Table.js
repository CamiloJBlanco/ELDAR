import React, { useState, useEffect } from 'react';
import '../App.css';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { Link } from 'react-router-dom';
import EditUserForm from "./EditUserForm"

export default function Table({leftUsers, rightUsers, removeUser, updateUser}) {
  console.log(leftUsers)
  console.log(rightUsers)

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);
  const [edit, setEdit] = React.useState([]);

  useEffect(() => {
    setLeft(leftUsers)
    setRight(rightUsers)
  })

  const moveFromLeft = () => {
    const arrayToMove = left.filter(user => checked.includes(user.id));
    setRight(prevRight => [...prevRight, ...arrayToMove]);
    setLeft(prevLeft => prevLeft.filter(user => !checked.includes(user.id)));
    setChecked([]);
  }

  const moveFromRight = () => {
    const arrayToMove = right.filter(user => checked.includes(user.id));
    setLeft(prevLeft => [...prevLeft, ...arrayToMove]);
    setRight(prevRight => prevRight.filter(user => !checked.includes(user.id)));
    setChecked([]);
  }

  const addChecked = (cked, id) => {
    if(cked) {
      setChecked(prevChecked => [...prevChecked, id]);
    } else {
      setChecked(prevChecked => prevChecked.filter(idUser => idUser !== id));
    }
  }

  
  return (
    <div className="table">
      <div className="table">
      <div>
      <div className="column left">
      <div className="side">
      <h4 className="title">Possible guests</h4>
      {left.map(user => (
        <div key={user.id} className="info">
          <Button onClick={() => setEdit(user.id)}><EditRoundedIcon/></Button>
            {edit === user.id && <EditUserForm updateUser={updateUser} selectUser={user} setEdit={setEdit}/>}   
          <Button onClick={() => removeUser(user.id)}><DeleteRoundedIcon/></Button>
          <Checkbox onChange={(e) => addChecked(e.target.checked, user.id)} />
          <span className="userInfo">{`${user.id}, ${user.firstName}  ${user.lastName}, ${user.dni}, ${user.email}`}</span>
        </div>
      ))}
      </div>
      </div>
      <div className="column middle">
        <div className="accionesBotones">
        <h4 className="title">Accions</h4>
        <Button className="moveBotones" onClick={moveFromLeft}>Move to Confirmed guest
        <ArrowForwardRoundedIcon />
        </Button>
      <br></br>
      <Button className="moveBotones" onClick={moveFromRight}>Move to Possible guest
      <ArrowBackRoundedIcon />
      </Button>
      <br></br> 
      <Link to="/addUser" className="link">
        <Button className="moveBotones">
          Add new guest
        <AddBoxRoundedIcon/>
        </Button>
      </Link>
      <br></br>
      <Button className="moveBotones">
          Invite guests
      <CheckBoxRoundedIcon />
      </Button>
        </div>
      </div>
      <div className="column right">
      <div className="side">
      <h4 className="title">Confirmed guests</h4>
      {right.map(user => (
        <div key={user.id} className="info">
          <Button onClick={() => setEdit(user.id)}><EditRoundedIcon/></Button>
            {edit === user.id && <EditUserForm updateUser={updateUser} selectUser={user} setEdit={setEdit}/>}
          <Button onClick={() => removeUser(user.id)}><DeleteRoundedIcon/></Button>
          <Checkbox onChange={(e) => addChecked(e.target.checked, user.id)} />
          <span className="userInfo">{`${user.id}, ${user.firstName}  ${user.lastName}, ${user.dni}, ${user.email}`}</span>
        </div>
      ))}
      </div>
      </div>
      </div>
      </div>      
    </div>
  );
}