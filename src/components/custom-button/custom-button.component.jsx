import React from 'react'

import './custom-button.styles.scss'

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <div className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}{...otherProps}>
      {children}
    </div>
  )
}

export default CustomButton