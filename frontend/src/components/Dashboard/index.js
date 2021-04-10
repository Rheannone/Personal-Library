import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getItems, setOne, /*apiBooks*/ } from '../../store/items';
import { useTheme } from '../../context/ThemeContext'
import dark from '../../images/dark.jpg'
import light from '../../images/light.jpg'
import Item from "../Item"
import SearchFormModal from '../SearchModal'

function Dashboard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const itemList = useSelector((state) => Object.values(state.items));
    const [item, setItem ] = useState('');
    const { themeName } = useTheme();


    useEffect(() => {
        dispatch(getItems(sessionUser.id))
    }, [dispatch, item])

    const handleSubmit = e => {
      e.preventDefault();
      dispatch(setOne(item, sessionUser.id));
      setItem('');
    }

    if (!sessionUser) return <Redirect to='/'/>;

    return (
        <>
        <div 
        className = 'dashboard-container'
        style={themeName === 'dark'? {backgroundImage: `url(${dark})`}:{backgroundImage: `url(${light})`} }
        > 
        <h1>My Library</h1>
        <form onSubmit={handleSubmit}>

          <input type="text" value = {item} onChange={(e) => setItem(e.target.value)}/>
          <button type="submit">Add to Library</button>
        </form>
      <ul>
        {itemList.map(item => (
        <Item key={item.id} id={item.id} title={item.title} desc={item.desc}/>
        ))}
      </ul>

      <h1>Borrows</h1>
      <SearchFormModal />
      </div>
            </>
    )

}

export default Dashboard;