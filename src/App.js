import React, { useRef, useEffect } from 'react';
import './App.css';
import { mount as mountAuth } from 'auth/AuthApp';

function App() {
  const authRef = useRef(null);

  useEffect(() => {
    if (authRef.current) {
      mountAuth(authRef.current);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Matilha Container
        </p>
      </header>
      <div ref={authRef}></div>
    </div>
  );
}

export default App;