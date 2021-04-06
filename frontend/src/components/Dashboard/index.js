import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getItems, setOne } from '../../store/items';
import Item from "../Item"

function Dashboard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const itemList = useSelector((state) => Object.values(state.items));
    const [item, setItem ] = useState('');

    useEffect(() => {
        dispatch(getItems(sessionUser.id))
    }, [dispatch])

    const handleSubmit = e => {
      e.preventDefault();
      console.log("FROM SUBMIT", item)
      console.log(sessionUser.id)
      dispatch(setOne(item, sessionUser.id));
      setItem('');
    }

    if (!sessionUser) return <Redirect to='/'/>;

    return (
        <>
        <h1>My Library</h1>
        <form onSubmit={handleSubmit}>
        {/* <input type="hidden" name="_csrf" value="csrfToken" /> */}

          <input type="text" value = {item} onChange={(e) => setItem(e.target.value)}/>
          <button type="submit">Add to Library</button>
        </form>
      <ul>
        {itemList.map(item => (
        <Item key={item.id} id={item.id} title={item.title} desc={item.desc}/>
        ))}
      </ul>
            </>
    )

}

export default Dashboard;