import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOne,  getBorrows, deleteOne} from '../../store/borrows';
import './Borrow.css'


function Borrow({id, title, lent}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const borrows = useSelector((state) => Object.values(state.borrows));
    const friends = useSelector((state) => Object.values(state.friends));
    const [borrowerId, setBorrowerId] = useState('')
    const [item, setItem] = useState('');
    const [returned, setReturned] = useState(true)
    let borrowedItem = borrows.filter(item => id === item.item_id)

    const date = new Date()

    const numId = Number(id)

    useEffect(() => {
        dispatch(getBorrows(sessionUser.id))
    }, [dispatch, item, returned, borrowerId, numId])
    

    const submitLend = ()  => {
        dispatch(setOne(sessionUser.id, borrowerId, date, numId ))
        setItem(numId)
        setReturned(false)
    }

    const handleReturn = () => {
        console.log(borrowedItem? borrowedItem[0] : null, "one item")
        setItem("")
        setReturned(true)
        dispatch(deleteOne(borrowedItem[0].id))
    }

    return (
        <>
        <tr>
            <td key={id}>
                {borrowedItem.length ? <p>{borrowedItem[0]?.borrower_name}</p> :
                 <p className="select-hover"> <label for="friends"></label>
                    <select name="friends" id="friends" onChange={(e) => setBorrowerId(e.target.value)} onClick={(e) => setBorrowerId(e.target.value)}>
                    <option value="">Choose A Friend:</option>
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
            {/* github */}
            <td>
                {/* date lent */}
               <p className='lent-stamp'>{borrowedItem.length ? <p>{borrowedItem[0]?.lent}</p> : 
               
               <p className='select-hover' onClick={submitLend}>click to lend</p>
               }
               
               </p> 
            </td>
            <td>
                {/* date returned */}
                <div onClick={handleReturn}>
                {borrowedItem.length ? <h4><i class="fas fa-times-circle"> Click to Return</i></h4> : <h4><i class="fas fa-check-square"></i></h4> }
                </div>
            </td>
        </tr>

        
        </>

    )
}

export default Borrow;