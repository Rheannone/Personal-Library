import { useState } from 'react';
import { useDispatch } from "react-redux";

function Friend({id, name}) {
    const [edit, setEdit] = useState(false);
    const [text, setText ] = useState(name)
    const dispatch = useDispatch();

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
            {text} <span onClick={console.log("delete")}>x </span>
            <span > edit</span>
          </li>
        )}
      </>
    )
}

export default Friend;