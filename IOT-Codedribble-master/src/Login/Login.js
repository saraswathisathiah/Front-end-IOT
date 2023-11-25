import React from 'react'
import './Login.css'
import { useState } from 'react'
import {useNavigate } from 'react-router-dom'

import axios from 'axios'
import DashBoard from '../DashBoard/DashBoard'
export default function LoginPage(props) {
  var [email, setEmail] = useState("")
  var [password, setPassword] = useState("")
  var navigate=useNavigate();
  const textChangeHandler = (i) => {
    setEmail(i.target.value);
    console.log(i.target.value);
  };
  const setChangePassword = (i) => {
    setPassword(i.target.value);
    console.log(i.target.value);
  };

  var loginSubmit = (e) => {


    e.preventDefault();
    navigate('dashboard')
    

  }
  return (
    <div class="loginBackGround">
      <div >
        <img src="./Aspire-Systems.png" class="imgStyle" />
      </div>
      <div className="backfeature">

        <div className="row">
          <form className="col-7 formlogin">
            <div className="divLabelLogin row">
              <label className="labelLogin">  Login  </label>
            </div>
            <div className="form-group">

              <div className="input-group input-group1" >
                <div className="input-group-addon envglyph " id="email">
                  <span className="glyphicon glyphicon-envelope envglyph" ></span>
                </div>
                <input className="form-control" id="email" name="email" type="text" placeholder="E-mail" value={email} onChange={textChangeHandler} />
              </div>


              <div className="input-group input-group1 input-group2">
                <div className="input-group-addon passglyph" id="password">
                  <span className="glyphicon glyphicon-lock passglyph" ></span>
                </div>
                <input className="form-control" id="password" name="password" type="password" placeholder="Password" value={password} onChange={setChangePassword} />
              </div>
            </div>
            <div className="aaligndiv">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="div-btn-submit">

              <input type="submit" value="Sign In" className="btn-submit" onClick={e => loginSubmit(e)} />
            </div>
            <div className="h11">
              <label >OR</label>
            </div>
            <div className="div-btn-msoft">
              <button className="btn-msoft">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)"></path><path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)"></path><path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)"></path><path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)"></path>
                </svg>&nbsp;&nbsp;Login with Microsoft</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
