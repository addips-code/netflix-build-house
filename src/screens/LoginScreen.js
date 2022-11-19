import React, { useState } from 'react'
// import { useStore } from 'react-redux';
import "./LoginScreen.css"
import SingupScreen from './SingupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img className='loginScreen_logo' 
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt='' 
            />
            <button onClick={() =>setSignIn(true)}
             className='loginScreen_button'>Sign In
             </button>

            <div className='loginScreen_gradient' />
        </div>

        <div className='loginScreen_body'>
            {signIn ? (
                <SingupScreen />
            ) : (
                <>
                    <h1>Unlimited films, TV programes and more.</h1>

                    <h2>Watch anywhere, Cancel at any time.</h2>

                    <h3>Ready to watch? Enter your email to create or restart your memberships.</h3>

                    <div className='loginScreen_input'>
                        <form>
                            <input type='email' placeholder='Email Address' />
                            <button 
                                onClick={() => setSignIn(true)} 
                                className='loginScreen_getStarted'>GET STARTED
                            </button>
                        </form>
                    </div>
                </>  
            )}
        </div>
    </div>
  );
}

export default LoginScreen