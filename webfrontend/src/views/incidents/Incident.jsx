import React, { Component } from 'react';
<<<<<<< HEAD:webfrontend/src/views/incidents/Incident.jsx
import { Link } from 'react-router-dom';
import IncidentEventTable from '../../components/incidentPageComponents/IncidentEventTable';
import IncidentEventDetails from '../../components/incidentPageComponents/IncidentEventDetails';
import EventSideBar from '../../components/eventSidebarComponent/EventSidebar';
=======
import IncidentEventTable from './IncidentEventTable';
import EventSideBar from './eventSidebarComponent/EventSidebar';
>>>>>>> 96bc13a74ec8f2e0f8dbaca199936d194e0bfb36:webfrontend/src/components/Incident.jsx


export default class Location extends Component {

    constructor(props){
        super(props);

        this.state={
            activeEvent: null
        }
    }

    render () {
        return (
        <div className="incidentClassMain">
            <IncidentEventTable onChangeActiveEvent={(event)=>this.setState({activeEvent:event})} />
            <EventSideBar activeEvent={this.state.activeEvent}  />
        </div>

        )
    }
}
