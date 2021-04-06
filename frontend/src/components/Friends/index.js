import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getFriends, searchUsers } from '../../store/friends';
import Friend from '../Friend'



function Friends() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const friendList = useSelector((state) => Object.values(state.friends));


    useEffect(() => {
        dispatch(getFriends(sessionUser.id))
    }, [dispatch])

    const handleSearch = e => {
        e.preventDefault();
        dispatch(searchUsers("rheannone@gmail.com"))

    }
    if (!sessionUser) return <Redirect to="/"/>

    return (
        <>
        <h1>My Friends</h1>
        <button type="button" onClick={handleSearch}>Click</button>
        <ul>
            {friendList.map(friend => (
        <Friend key={friend.id} id={friend.id} name={friend.username} />
                    ))}
        </ul>
        </>
        )
        
    };
    
    export default Friends;