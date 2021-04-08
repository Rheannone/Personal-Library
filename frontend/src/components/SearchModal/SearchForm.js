import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

function SearchForm() {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);


    return (
        <>
        <h1>Search for Friends</h1>
        </>
    )
};

export default SearchForm;