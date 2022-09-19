import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from './routes';
import Header from './components/Header';
import { useTypedSelector } from './hooks/useTypedSelector';


const App:React.FC =()=> {
  const {isAuth} = useTypedSelector(state=>state.auth) 

  const routes = useRoutes(isAuth)
  return (
    
      <Router>
        <Header/>
            {routes}
      </Router>
    
  );
}

export default App;
