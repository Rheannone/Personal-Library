import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOne, } from '../../store/borrows';


function Borrow({}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const borrows = useSelector((state) => state.borrows)

    const addBorrow = async () => {
        await dispatch( setOne() )
    }



    return (
        <>
        <tr>
            <td>
                {/* friend selector */}
                <p>friend</p>
            </td>
            <td>
                {/* item title */}
                <p>item</p>
            </td>
            <td>
                {/* date lent */}
                <span onCick={addBorrow}></span>
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