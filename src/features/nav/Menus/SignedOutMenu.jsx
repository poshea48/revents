import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = (props) => {
  return (
    <Menu.Item position="right">
      <Button onClick={props.signIn} basic inverted content="Login" />
      <Button basic inverted content="Register" style={{marginLeft: '0.5em'}} />
    </Menu.Item>
  )
}

export default SignedOutMenu
