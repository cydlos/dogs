import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange= {({target})=> setUsername(target.value)}
        />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange= {({target}) => setEmail(target.value)}
        />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange= {({target}) => setPassword(target.value)}
        />
    </div>
  )
}

export default UserPost
