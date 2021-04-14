import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { searchUsers } from '../../store/friends'
import Friend from '../Friend';

function SearchForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("")
    const foundFriends = useSelector((state) => Object.values(state.friends))


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
        {foundFriends? foundFriends.map(friend => (
            <Friend key={friend.id}  id={friend.id} name={friend.username} />
        )) : <p>no friends with that email address were found </p>}
        </form>
        </>
    )
};

export default SearchForm;