// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';

// function Home() {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert('User signed out');
//       navigate('/signin'); 
//     } catch (error) {
//       console.error('Error signing out:', error.message);
//       alert('Logout failed: ' + error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Welcome to Home Page</h2>
//       <p>You have successfully signed in/up!</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Home;


// chat code

// import '../App.css';
// import React, { useState, useEffect, useRef } from 'react';
// import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { auth, db } from '../firebase';


// function Home() {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const q = query(collection(db, 'messages'), orderBy('createdAt'));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setMessages(msgs);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
  
  //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   }, [messages]);
  
//   const handleSend = async () => {
//     if (message.trim()) {
//       await addDoc(collection(db, 'messages'), {
//         text: message,
//         createdAt: new Date(),
//         uid: auth.currentUser.uid,
//       });
//       setMessage('');
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="messages">
//         {messages.map((msg) => (
//           <div 
//             key={msg.id} 
//             className={`message ${msg.uid === auth.currentUser.uid ? 'sent' : 'received'}`}
//           >
//             <div className="content">
//               {msg.text}
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="input-container">
//         <input 
//           type="text" 
//           placeholder="Type a message" 
//           value={message} 
//           onChange={(e) => setMessage(e.target.value)} 
//           onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
//         />
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default Home;




import React,{ useState } from 'react'
import '../App.css';


function Home() {
  
  const [input, setInput] = useState('');

  const handleclick = (number) => {
   setInput((prevInput) => prevInput + number);
  };


  const clear = () => {
    setInput(" ");
  };


  const backSpace = () => {
    setInput(input.slice(0, -1));
   
  };
  const calculate = () => {}
    
      
    

  
  
 
  return (

       <div className="container" >
    
        <input type="text"value={input}/>
     
      <div className="keypad">
        <button className="calculator" onClick={clear}>Clear</button>
        <button className="calculator"id="backspace" onClick={backSpace}>C</button>
        <button className="calculator"onClick={()=> handleclick("÷")} name="/">&divide;</button>
        <button name="7" className='calculator'onClick={()=> handleclick("7")} >7</button>
        <button name="8"className='calculator' onClick={()=>handleclick("8")} >8</button>
        <button name="9" className='calculator'onClick={()=>handleclick("9")} >9</button>
        <button class="calculator" name="*"onClick={()=> handleclick("*")} >&times;</button>
        <button name="4" class='calculator'onClick={()=>handleclick("4")} >4</button>
        <button name="5" class='calculator'onClick={()=>handleclick("5")} >5</button>
        <button name="6" class='calculator'onClick={()=>handleclick("6")} >6</button>
        <button className="calculator" name="-"onClick={()=> handleclick("-")}>&ndash;</button>
        <button name="1" className='calculator'onClick={()=>handleclick("1")} >1</button>
        <button name="2" className='calculator'onClick={()=>handleclick("2")} >2</button>
        <button name="3" className='calculator'onClick={()=>handleclick("3")} >3</button>
        <button className="calculator" name="+" onClick={()=>handleclick("+")}>+</button>
        <button name="0" className='calculator'onClick={()=>handleclick("0")} >0</button>
        <button className="calculator" name="." onClick={()=> handleclick(".")}>.</button>
        <button className="calculator" name="="onClick={calculate} id="result">=</button>
      </div>
    </div>

)

};
export default Home
