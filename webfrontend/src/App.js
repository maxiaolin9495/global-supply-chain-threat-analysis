import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import './components/Nav.css';
import './components/SideBar.css';
import './views/home/home.css';
import './components/main.css';
<<<<<<< HEAD
import './components/incidentPageComponents/IncidentEventDetails.css'
import './components/incidentPageComponents/IncidentEventTable.css'
import './views/incidents/Incident';
=======
import './components/IncidentEventDetails.css'
import './components/IncidentEventTable.css'
import './components/incident.css';
import './components/LocationRow.css';
import './components/location.css';
>>>>>>> 96bc13a74ec8f2e0f8dbaca199936d194e0bfb36


class App extends Component {

  constructor(props){
      super(props);
      this.state={
          title:"BWM Thread Analysis"
      }
  }
/* we use handler in the name as we are not calling it particularly but we
   are using it to handle something. */

  render() {
    return (
      <Router>
          <Nav/>
          <div className="mainArea">
            <SideBar/>
            <Main/>
          </div>
      </Router>
    );

  }

    componentDidMount(){
        document.title = this.state.title;
    }

}


export default App;
