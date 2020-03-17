import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import TurnoverList from './turnoverList/turnoverList'
 
function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div>
      Welcome {user.name}!<br /><br />
      <TurnoverList />
      <input type="button" onClick={handleLogout} value="Logout" />

    </div>
    

  );
}
 
export default Dashboard;