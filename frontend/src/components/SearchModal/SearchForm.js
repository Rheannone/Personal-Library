import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from '../../store/friends'

function SearchForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("")


    const handleSearch = e => {
        e.preventDefault();
        dispatch(searchUsers(email))

    }

    return (
        <>
        <h1>Search for Friends</h1>
        <form onSubmit={handleSearch}>
        <input
        type="text"
        placeholder="search by email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Search</button>

        </form>
        </>
    )
};

export default SearchForm;