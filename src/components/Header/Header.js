import React, {useState, useRef, useEffect} from 'react';
import './Header.scss';


function Header() {

    const [username, setUsername] = useState();
    const userNameInputRef = useRef();

    useEffect(() => {

        const storedUsername = localStorage.getItem('username');

        if (storedUsername) {
            setUsername(storedUsername);
        }

    },[username]);




    function usernameSubmit() {
        const userNameInputValue = userNameInputRef.current.value;

        try {
        localStorage.setItem('username', userNameInputValue);
        setUsername(userNameInputValue);

        } catch (e) {
            console.log(e);

        }



    }

    return (
        <div className="header">
            <h3 className="app-name">Popupsmart React Practicum Todo App</h3>
            {username ?  <h3 className="username">Welcome {username}</h3> :
                <div className="usernameInput"><input ref={userNameInputRef} type="text" value={username}  />
                    <button type="submit" onClick={usernameSubmit}>Submit</button>
                </div>}

        </div>
    );
}

export default Header;