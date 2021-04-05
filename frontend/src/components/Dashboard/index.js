import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getItems } from '../../store/items';
import Item from "../Item"

function Dashboard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const itemList = useSelector((state) => Object.values(state.items));
    const [item, setItem ] = useState('');

    useEffect(() => {
        dispatch(getItems(sessionUser.id))
    }, [dispatch])

    if (!sessionUser) return <Redirect to='/'/>;

    return (
        <>
        <h1>My Library</h1>
      <ul>
        {itemList.map(item => (
        <Item key={item.id} id={item.id} title={item.title} desc={item.desc}/>
        ))}
      </ul>
            </>
    )

}

export default Dashboard;