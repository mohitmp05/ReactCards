import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';
import Heading from './Heading';
import pic1 from './images/mohit.png';

const App = () => {
  return(
    <div>
      <Heading />
      <br></br>
    <div className='ui four column grid' >
      <UserCard 
      name = 'Mohit Pandey'
      mutual = '2 Mutual Friends'
      desc = 'Hello I am Mohit from Lucknow'
      img = {pic1}/>

      <UserCard 
      name = 'Aakash Kumar'
      mutual = '5 Mutual Friends'
      desc = 'Hello I am Aakash from Delhi'
      img = {pic1}/>

      <UserCard 
      name = 'Ashish Gupta'
      mutual = 'New Account'
      desc = 'Hello I am Ashish from Madhya Pradesh'
      img = {pic1}/>

    <UserCard 
      name = 'Sumit Mahato'
      mutual = '0 Mutual Friends'
      desc = 'Hello I am Sumit from Kolkata'
      img = {pic1}/>
    </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)