import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getFriends } from '../../store/friends';



function Friends() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const friendList = useSelector((state) => Object.values(state.friends));


    useEffect(() => {
        dispatch(getFriends(sessionUser.id))
    }, [dispatch])


    if (!sessionUser) return <Redirect to="/"/>

    return (
        <>
        <h1>My Friends</h1>

        <ul>
            {friendList.map(friend => (
                console.log(friend)
            ))}
        </ul>
        </>
    )

};

export default Friends;