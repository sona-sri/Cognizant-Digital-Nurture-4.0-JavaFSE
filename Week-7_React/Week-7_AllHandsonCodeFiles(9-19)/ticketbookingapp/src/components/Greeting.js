import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

export default Greeting;
