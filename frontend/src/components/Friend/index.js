import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postFriend } from '../../store/friends'

function Friend({id, name}) {
  const sessionUser = useSelector((state) => state.session.user);
    const [edit, setEdit] = useState(false);
    const [text, setText ] = useState(name)
    const dispatch = useDispatch();

    const handleAdd = e => {
      e.preventDefault();
      dispatch(postFriend(sessionUser.id, id))
    }

    return (
        <>
        {edit && (
          <li>
            <input type="text" value={name} onChange={e => setText(e.target.value)}/>
            <span > done</span>
          </li>
        )}
        {!edit && (
          <li>
            {text} <span onClick={handleAdd}>+</span>
            
          </li>
        )}
      </>
    )
}

export default Friend;