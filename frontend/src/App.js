import React, { useState } from 'react';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';


const App = () => {
    const [token, setToken] = useState(null);

    return (
        <div>
            {!token ? (
                <Login setToken={setToken} />
            ) : (
                <EmployeeList token={token} />
            )}
        </div>
    );
};

export default App;
