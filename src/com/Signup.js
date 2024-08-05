
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

export default function Log() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username , setUsername] = useState("");

  useEffect(() => {
    console.log(email);
    console.log(pass);
  }, [email, pass]);

  const handleSignupSubmit = () => {
    console.log(email);
    axios.post("http://localhost:8000/signup", { email: email, password: pass ,username:username })
      .then((data) => {
        console.log(data);
        swal.fire('Signup successful');
      })
      .catch((err) => {
        swal.fire('Signup unsuccessful');
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <div className="mb-4">
          <input
            type="email"
            name="em"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="pass"
            placeholder="Enter your password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <Link to="/readarticle">
          <button
            onClick={handleSignupSubmit}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
