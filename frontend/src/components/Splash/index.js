import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import './Splash.css'



function Splash() {
    const sessionUser = useSelector((state) => state.session.user);


    if (sessionUser) {
        return <Redirect to="/dashboard" />;
      }



    

    return (
        <>
        <div className="splash-title">
        <h1 className='splash-groovy'>
        <div className='splash-spans'>
        <span>M</span><span>y</span><span> </span><span>G</span><span>r</span><span>o</span><span>o</span><span>v</span><span>y</span><span> </span><span>L</span><span>i</span><span>b</span><span>r</span><span>a</span><span>r</span><span>y</span>
        </div>
        </h1>
        </div>
        </>
        )
        
    };
    
    export default Splash;