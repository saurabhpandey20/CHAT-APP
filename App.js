import ChatEngine from 'react-chat-engine';

import './App.css';


const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID= "1302033a-76a6-4cb9-bcb2-b5b48b5d5393"
      userName="javascriptmastry"
      userSecret="1234"
    
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;