import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'

import './sign-in-and-sign-up.styles.scss'

function SignInAndSignUpPage(props) {
  return (
    <div className="sign-in-and-sign-up">
      SIGN IN
      <SignIn />
    </div>
  )
}

export default SignInAndSignUpPage