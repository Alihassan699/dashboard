import React from 'react'
import { Link } from 'react-router-dom';
import "./Dashboard.css"


function Dashboard() {
  return (
    <div className='container'>
      <nav>
          <Link to="/dashboard/progress">Progress Panel</Link>
          <br></br>
          <Link to="/dashboard/chat">Chats Panel</Link>
          <br></br>
          <Link to="/dashboard/profile">Profile Panel</Link>
          <br></br>
          <Link to="/dashboard/members">Members Panel</Link>
          <br></br>
          <Link to="/dashboard/Clients">Clients Panel</Link>
      </nav>
    </div>
  )
}

export default Dashboard