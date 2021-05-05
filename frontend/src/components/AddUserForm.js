import Reac, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddUserForm({addUser}) {
  const [user, setUser] = useState({id: 0, firstName: '', lastName: '', email: '', userEnum: "SINCONFIRMAR", dni:""})
  const classes = useStyles();

  const handleOnChange = (e) => {
    setUser({...user, 
    [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => { 
    e.preventDefault()
    addUser(user)
    setUser({id: 0, firstName: '', lastName: '', email: '', userEnum: "", dni:""})
  }

  return (
    <div className="form" >
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit} >
          <button className="add-btn" type='submit'>
              Add
          </button>
          <Link to="/">
            <button className="close-btn">
              Close
            </button>
          </Link>
      <div>
        <TextField label="First name"  name="firstName" id="firstName" type="text" value={user.firstName} onChange={handleOnChange}/>
        <TextField label="Last name"  id="lastName" type="text" name="lastName" value={user.lastName} onChange={handleOnChange}/>
        </div>
        <div>
        <TextField label="DNI" id="dni" name="dni" type="text" value={user.dni} onChange={handleOnChange} />
        <TextField label="E-mail" name="email" id="email"  type="text" value={user.email} onChange={handleOnChange} />
        
        <FormControl>
        <Select onChange={handleOnChange} value={user.userEnum} name="userEnum">
        <option value={"SINCONFIRMAR"}>SINCONFIRMAR</option>
        <option value={"CONFIRMADO"}>CONFIRMADO</option>
        </Select>
        </FormControl>
      </div>
    </form>
    </div>
  );
}

//<TextField label="Invitation Status" name="userEnum" id="userEnum"  type="text" value={user.userEnum}/>