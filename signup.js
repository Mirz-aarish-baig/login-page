import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import '../App.css';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential.user);
      navigate('/home');

      const userDoc = {
        fullName,
        email,
        gender,
        whatsappNumber,
      };
      await addDoc(collection(db, "users"), userDoc);

    } catch (error) {
      console.error('Error signing up:', error.message);
      alert('Sign-up failed: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          placeholder="Full Name" 
          required 
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <input 
          type="text" 
          value={gender} 
          onChange={(e) => setGender(e.target.value)} 
          placeholder="Gender" 
        />
        <input 
          type="text" 
          value={whatsappNumber} 
          onChange={(e) => setWhatsappNumber(e.target.value)} 
          placeholder="WhatsApp Number" 
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
}

export default SignUp;
