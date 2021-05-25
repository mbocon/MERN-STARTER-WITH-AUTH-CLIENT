
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../services/userService';

import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = (props) => {
    return (
      <div className="GamePage">
        <NavBar user={props.user} handleLogout={props.handleLogout} />
        <div className="flex-h align-flex-end">
          
           
            
          </div>
        </div>
    );
};
  
export default HomePage;