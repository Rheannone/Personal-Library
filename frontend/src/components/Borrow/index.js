import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOne, } from '../../store/borrows';
import './Borrow.css'


function Borrow({id, title, lent}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const borrows = useSelector((state) => Object.values(state.borrows));
    const friends = useSelector((state) => Object.values(state.friends));
    const [borrowerId, setBorrowerId] = useState('')
    console.log(friends, "friends")
    
    let borrowedItem = borrows.filter(item => id === item.item_id)
    const date = new Date()

    const numId = Number(id)

    const submitLend = ()  => {
        // console.log(borrowerId, "this is borrower")
        dispatch(setOne(sessionUser.id, borrowerId, date, numId ))
    }



    console.log(friends, "friend from map")

    return (
        <>
        <tr>
            <td key={id}>
                {borrowedItem.length ? <p>{borrowedItem[0]?.borrower_name}</p> :
                 <p className="select-hover"> <label for="cars">Choose a Friend:</label>
                    <select name="cars" id="cars" onChange={(e) => setBorrowerId(e.target.value)}>
                   {friends.map(friend => (
                       <option value={friend.friendId} >{friend.username}</option>
                   ))}
                    </select> 
                </p>  
                }
            </td>
            <td>
                {/* item title */}
                <p>{title}</p>
            </td>
            <td>
                {/* date lent */}
               <p className='lent-stamp'>{borrowedItem.length ? <p>{borrowedItem[0]?.lent}</p> : 
               
               <p className='select-hover' onClick={submitLend}>stuff</p>
               }
               
               </p> 
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