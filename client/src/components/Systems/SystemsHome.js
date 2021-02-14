import React from 'react';
import {useState , useEffect} from 'react';
import {mew,old} from './load';

const SystemsHome = (props) => {
    const [user,setUser] = useState('');
    const [isNew, setNew] = useState(false);

    useEffect(() => {
        getLogin = async () => {
            isLoggedIn = await axios.get('localhost:5000/logged-in');
            //if true, then redirect to new page with user information ... fetch information here
            //setState and handlesubmit
        },
        getLogin();
    }, [])

    return(
        <React.Fragment>
            <form className = "ui form">
                <div className = "field">
                    <label> Returning User ? </label>
                    <input type="text" name="username" />
                </div>
                <div className = "field">
                    <label> New User? </label>
                    <input type="text" name="username" />
                </div>
                <button className = "ui button" onClick = {(e) => handleSubmit(e)}> </button>
            </form>
        </React.Fragment>
    );
}