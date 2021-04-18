import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOne, } from '../../store/borrows';
import './Borrow.css'


function Borrow({id, title}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const borrowList = useSelector((state) => Object.values(state.borrows))
 

        let lentdate
        let borrower
        borrowList.forEach(borrow => {
        let singleBorrows = (Object.values(borrow))
        let singleBorrowValues = Object.values(singleBorrows)
         if (singleBorrowValues[singleBorrowValues.length -1] === id){
              lentdate = singleBorrowValues[1]
              borrower = singleBorrowValues[4]
         }
         else return null
    })
  
    return (
        <>
        <tr>
            <td key={id}>
                {borrower ? <p>{borrower}</p> : <p>select a friend</p> }
                
            </td>
            <td>
                {/* item title */}
                <p>{title}</p>
            </td>
            <td>
                {/* date lent */}
               <p className='lent-stamp'>{lentdate}</p> 
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