import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function EditUserForm({updateUser, selectUser, setEdit}) {
  const [user, setUser] = useState({id: selectUser?.id, firstName: selectUser?.firstName, lastName: selectUser?.lastName, email: selectUser?.email, userEnum: selectUser?.userEnum, dni: selectUser?.dni})
  const classes = useStyles();

  const handleOnChange = (e) => {
    setUser({...user, 
    [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => { 
    e.preventDefault()
    updateUser(user)
    setEdit(false)
  }

  return (
    <div className="form" >
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit} >
          <button className="add-btn" type='submit'>
              Add
          </button>
          <button className="close-btn" onClick={() => setEdit(false)}>
            Close
          </button>
      <div>
        <TextField
          label="ID"
          id="standard-read-only-input"
          type="number"
          name="id"
          value={user.id}
          onChange={handleOnChange}
        />
        <TextField label="First name"  name="firstName" id="firstName" type="text" value={user.firstName} onChange={handleOnChange}/>
        <TextField label="Last name"  id="lastName" type="text" name="lastName" value={user.lastName} onChange={handleOnChange}/>
        </div>
        <div>
        <TextField label="DNI" id="dni" name="dni" type="text" value={user.dni} onChange={handleOnChange} />
        <TextField label="E-mail" name="email" id="email"  type="text" value={user.email} onChange={handleOnChange} />
        <TextField label="Invitation Status" name="userEnum" id="userEnum"  type="text" value={user.userEnum} onChange={handleOnChange}/>
       
      </div>
    </form>
    </div>
  );
}

/*
 <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Invitation Status</InputLabel>
          <Select
          native
          value={user.userEnum}
          onChange={handleOnChange}
          inputProps={{
            name: 'Invitation Status',
            id: 'userEnum',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"SINCONFIRMAR"}>SINCONFIRMAR</option>
          <option value={"CONFIRMADO"}>CONFIRMADO</option>
        </Select>
        </FormControl>
  */