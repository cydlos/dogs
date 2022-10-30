import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange= {({target})=> setUsername(target.value)}
        />

      <input
        type="text"
        value={email}
        onChange= {({target}) => setEmail(target.value)}
        />

      <input
        type="text"
        value={password}
        onChange= {({target}) => setPassword(target.value)}
        />
    </div>
  )
}

export default UserPost
