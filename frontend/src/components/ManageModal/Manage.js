import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Borrow from '../Borrow'
import { getBorrows } from '../../store/borrows'
import './Manage.css'

function ManageModal() {
    const itemList = useSelector((state) => Object.values(state.items));
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBorrows(sessionUser.id))
    }, [dispatch])

  

    return(
        <>
        <div className="auth-title">
        <h1 className='auth-groovy'><span>M</span><span>a</span><span>n</span><span>a</span><span>g</span><span>e</span></h1>
        </div>
        <div>
            <div>
                <p>{sessionUser.username}'s Library </p>
            </div>
            <div className='table-container'>
            <table id="manage">
                <tr>
                    <th>Borrower</th>
                    <th>Title</th>
                    <th>Lent</th>
                    <th>Returned</th>
                </tr>
                
                {itemList.map(item => (
        <Borrow key={item.id} id={item.id} title={item.title} borrower={item.desc}/>
        ))}
        
            </table>
            </div>

        </div>
        </>
    )
}

export default ManageModal;