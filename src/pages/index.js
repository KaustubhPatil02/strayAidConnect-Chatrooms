
import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

const Auth = () => {
  const { 
          username, 
          setUsername, 
          secret,
          setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;
    if (username.length === 0){
      alert('Username is empty')
    } if (secret.length === 0) {
      alert('Password is missing or wrong')
    }
    
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "d6708a26-5c83-4400-bd28-d6e66ef79c92" } }
      )

      .then((r) => {
        router.push("/chats");
      });
      
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">strayAidConnect </div>
          {/* <div className="input-container">
            <input
              placeholder="Display Name"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> */}

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>



          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;