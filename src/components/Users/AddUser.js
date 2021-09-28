import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEId, setEnteredEId] = useState('');
    const [enteredBirthDate, setEnteredBirthDate] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredFirstName.trim().length === 0 )
        {
            setError({
                title: 'Invalid Input',
                message: 'First Name is required'
            });
            return;
        }
        if (enteredLastName.trim().length === 0 )
        {
            setError({
                title: 'Invalid Input',
                message: 'Last Name is required'
            });
            return;
        }
        if (enteredEmail.trim().length === 0 )
        {
            setError({
                title: 'Invalid Input',
                message: 'E-mail is required'
            });
            return;
        }
        if (enteredEId.trim().length === 0 )
        {
            setError({
                title: 'Invalid Input',
                message: 'Enterprise ID is required'
            });
            return;
        }
        if (enteredBirthDate.trim().length === 0 )
        {
            setError({
                title: 'Invalid Input',
                message: 'Birth date ID is required'
            });
            return;
        }
        if (enteredFirstName.trim().length === 0 || 
        enteredLastName.trim().length === 0 || 
        enteredEmail.trim().length === 0 ||
        enteredEId.trim().length === 0 ||
        enteredBirthDate.trim().length === 0 )
        {
            setError({
                title: 'Invalid Input',
                message: 'Please fill out all the missing field'
            });
            return;
        }
    
        //console.log(enteredFirstName, enteredLastName, enteredEmail, enteredEId, enteredBirthDate);
        props.onAddUser(enteredFirstName, enteredLastName, enteredEmail, enteredEId, enteredBirthDate);
        setEnteredFirstName ('');
        setEnteredLastName ('');
        setEnteredEmail ('');
        setEnteredEId ('');
        setEnteredBirthDate ('');
    };
    
    const firstnameChangeHandler = (event) => {
        setEnteredFirstName(event.target.value);
    };

    const lastnameChangeHandler = (event) => {
        setEnteredLastName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const eidChangeHandler = (event) => {
        setEnteredEId(event.target.value);
    };

    const birthdateChangeHandler = (event) => {
        setEnteredBirthDate(event.target.value);
    };
    
    const errorHandler = () => {
        setError(null);
    }
    return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="">First Name:</label>
        <input id="firstname" type="text" value={enteredFirstName} onChange={firstnameChangeHandler} />
        <label htmlFor="">Last Name:</label>
        <input id="lastname" type="text" value={enteredLastName} onChange={lastnameChangeHandler} />
        <label htmlFor="">E-mail:</label>
        <input id="email" type="email" value={enteredEmail} onChange={emailChangeHandler} />
        <label htmlFor="">Enterprise ID:</label>
        <input id="eid" type="number" value={enteredEId} onChange={eidChangeHandler}/>
        <label htmlFor="">Birth Date:</label>
        <input id="birth" type="date" value={enteredBirthDate} onChange={birthdateChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
    );
};

export default AddUser;