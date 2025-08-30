function Login() {
  function Logged(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("You are logged in");
  }
  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <input
          className="LogInput"
          type="text"
          placeholder="Username"
          name="Username"
        />
        <input
          className="LogInput"
          type="password"
          placeholder="Password"
          name="Password"
        />
        <button type="submit" onClick={Logged}>
          Login
        </button>
      </form>
      <div>
        <p>Username: {}</p>
        <p>Password: {}</p>
      </div>
    </div>
  );
}
export default Login;
