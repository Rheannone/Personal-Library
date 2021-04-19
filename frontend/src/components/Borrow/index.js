import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOne, } from '../../store/borrows';
import './Borrow.css'


function Borrow({id, title, lent}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const borrows = useSelector((state) => Object.values(state.borrows));
    
    let borrowedItem = borrows.filter(item => id === item.item_id)
    
    return (
        <>
        <tr>
            <td key={id}>
                {borrowedItem ? <p>{borrowedItem[0]?.borrower_name}</p> : null}
                
            </td>
            <td>
                {/* item title */}
                <p>{title}</p>
            </td>
            <td>
                {/* date lent */}
               <p className='lent-stamp'>{lent}</p> 
            </td>
            <td>
                {/* date returned */}
                <p></p>
            </td>
        </tr>

        
        </>

    )
}

export default Borrow;