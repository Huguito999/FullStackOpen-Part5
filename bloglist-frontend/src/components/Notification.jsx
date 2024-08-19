import React from 'react'

const Notification = ({ message, type }) => {
  if (message === null) {
    return null
  }

  const notificationStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    color: type === 'error' ? 'red' : 'green',
    border: `1px solid ${type === 'error' ? 'red' : 'green'}`,
    backgroundColor: '#f4f4f4',
  }

  return <div style={notificationStyle}>{message}</div>
}

export default Notification
