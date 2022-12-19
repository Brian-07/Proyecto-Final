import React from 'react';
import "../../styles/Login.css"



function Login(){
    return <div className='bg-light '>
      <div className= 'container w-25 pt-5'>
        <main className="form-signin">
  <form>
    <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57 "/>
    <h1 className="h3 mb-3 fw-normal">Ingresa a tu cuenta</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Recuerdame
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>
      </div>
    </div>

}

export default Login;