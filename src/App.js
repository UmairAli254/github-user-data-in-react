import React, { useState, useEffect } from 'react';
import "./App.css";
import Card from "./Card/Card";

const App = () => {
    const [users, updateUsers] = useState([]);

    const apiFun = async () => {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        updateUsers(data)
    }

    useEffect(() => {
        apiFun();
    }, []);

    return (
        <div>
            <h2>List of GitHub Users</h2>
            <div className="container mt-5">
                <div className="row text-center">
                    {
                        users.map((one) => {
                            return (
                                <Card Name={one.login} key={one.id} Img={one.avatar_url} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default App