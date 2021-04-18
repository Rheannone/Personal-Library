import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { searchUsers, getFriends } from '../../store/friends'
import Friend from '../Friend';

function SearchForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("")
    const sessionUser = useSelector((state) => state.session.user);
    const foundFriends = useSelector((state) => Object.values(state.friends))
    


    useEffect(() => {
        dispatch(getFriends(sessionUser.id))
    }, [dispatch])

    const handleSearch = e => {
        e.preventDefault();
        dispatch(searchUsers(email))
    }

    let friendPool = []
    const eachFriend = () => foundFriends.forEach(friend => {
        friendPool.push(Object.values(friend))
    })
    eachFriend()
    let list = (friendPool.flat())




    return (
        <div className='auth-title'>
        <h1 className='auth-groovy'><span>S</span><span>e</span><span>a</span><span>r</span><span>c</span><span>h</span></h1>
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
            )) : <p>no friends with that email address were found </p> }
            
        </form>
        </div>
    )
};

export default SearchForm;