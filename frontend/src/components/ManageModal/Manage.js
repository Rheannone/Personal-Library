import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Borrow from '../Borrow'
import { getBorrows } from '../../store/borrows'
import './Manage.css'

function ManageModal() {
    const itemList = useSelector((state) => Object.values(state.items));
    const sessionUser = useSelector((state) => state.session.user);
    const borrows = useSelector((state) => Object.values(state.borrows))
    const dispatch = useDispatch();
    console.log(itemList, "THIS IS ITEMLIST")

    // all.forEach(object => {
    //     if (object.lent){
    //         console.log("GAHH")
    //     }
    // })
    useEffect(() => {
        dispatch(getBorrows(sessionUser.id))
    }, [dispatch])


    return(
        <div>
        <div className="auth-title">
        <h1 className='auth-groovy'><span>M</span><span>a</span><span>n</span><span>a</span><span>g</span><span>e</span></h1>
        </div>
        <div>
            <div className='manage-modal'>
                
            <div className='table-container'>
            <table id="manage">
            <caption><span>{sessionUser.username}</span>'s Library </caption>
                <tr>
                    <th>Borrower</th>
                    <th>Title</th>
                    <th>Lent</th>
                    <th>Returned</th>
                </tr>
                
                {itemList.map(item => (
                    <Borrow key={item.id} id={item.id} title={item.title} lent={item.lent_date}/>
                    ))}
        
            </table>
            </div>
                    </div>

        </div>
        </div>
    )
}

export default ManageModal;