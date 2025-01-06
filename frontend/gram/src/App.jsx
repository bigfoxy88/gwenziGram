import { Link } from 'react-router-dom'
function App() {
  

  return (
    <>
      <form action="" method="post">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
      </form>
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
    </>
  )
}

export default App
