function RegisterAccount() {
  return (
    <div>
      RegisterAccount
      <h1>Signup</h1>
      <form className="LogForm">
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
        <input
          className="LogInput"
          type="password"
          placeholder="Confirm Password"
          name="Confirm Password"
        />
        <button className="LogInput" type="submit">
          Sign Up
        </button>
      </form>
      <div>
        <button className="logo" onClick={() => (window.location.href = "/")}>
          Already have an account?
        </button>
      </div>
    </div>
  );
}

export default RegisterAccount;
