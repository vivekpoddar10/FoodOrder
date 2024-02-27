
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    console.log('Parent constructor called');
  }
  componentDidMount() {
    console.log('parent mount called');
  }
  render() {
    console.log('parent render called');
    return <div>
      <UserClass name={'first'}/>
      <UserClass name={'second'}/>
    </div>
  }
}

export default About;
