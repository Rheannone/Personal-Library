import { useState } from 'react';
import { useDispatch } from "react-redux";
import {deleteOne, updateOne } from '../../store/items'

function Item({id, title, desc}) {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(title);
    const dispatch = useDispatch();
  
    const handleDelete = () => dispatch(deleteOne(id));

    
    const flipEdit = async () => {
      await dispatch(updateOne(text, id))
      setEdit((prev) => !prev);
    }

    return (
        <>
        {edit && (
          <li>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <span onClick={flipEdit}> done</span>
          </li>
        )}
        {!edit && (
          <li>
            {text} <span onClick={handleDelete}>x </span>
            <span onClick={flipEdit}> edit</span>
          </li>
        )}
      </>
    )
}

export default Item;