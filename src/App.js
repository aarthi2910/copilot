// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React from 'react';
// import './App.css';
// import LoginForm from './components/LoginForm';

// function App() {
//     return (
//         <div className="App">
//             <LoginForm />
//         </div>
//     );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Chat from './components/Chat';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Replace with real authentication logic
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Chat />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;


