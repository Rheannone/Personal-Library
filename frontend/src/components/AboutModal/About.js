import React from 'react';

function AboutModal() {

    return (
        <>
        <div className="auth-title">
        <h1 className='auth-groovy'><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span></h1>
        </div>
        <div>
            <h2>Made by a curious software engineer...</h2>
            <p>'My Groovy Library' is a student project designed to explore the <b><u>Google API</u></b> and advanced frontend engineering.
                Inspired by all the books I have lent to friends and never saw again, I designed a straightforward app to manage your home library.
            </p>
            <p>React and Redux make up a powerful frontend, quickly accessing data from the <b>Express and Sequelize</b> backend.
                'My Groovy Library' implements <b><u>Google OAuth2 and bcrypt hashing</u></b> for authentication, maintaing session in Redux. React Context 
                powers an  <b><u>easter egg...</u></b>. 
                <center><p>💡  Can you find it? </p></center>
                <hr></hr>
                <center><h2>Coming in Update 1.0.1:</h2>
                <ul>
                    <li>Facebook OAuth2</li>
                    <li>Improved Friend Search</li>
                    <li>Borrow History</li>
                    <li>Profile Photos</li>
                </ul>
            </center>
            </p>

        </div>
        </>
    )
}

export default AboutModal;