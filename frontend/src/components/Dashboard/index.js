import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getItems, setOne, /*apiBooks*/ } from '../../store/items';
import { getBorrows } from '../../store/borrows'
import { useTheme } from '../../context/ThemeContext'
import dark from '../../images/dark.jpg'
import light from '../../images/light.jpg'
import './Dashboard.css'
import Item from "../Item"
import SearchFormModal from '../SearchModal'

function Dashboard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const borrows = useSelector((state) => state.borrows)
    const itemList = useSelector((state) => Object.values(state.items));
    const [item, setItem ] = useState('');
    const { themeName } = useTheme();


    useEffect(() => {
        dispatch(getItems(sessionUser.id))
    }, [dispatch, item])

    // useEffect(() => {
    //   dispatch(getBorrows(sessionUser.id))
    // }, [dispatch])

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

      </div>
            </>
    )

}

export default Dashboard;