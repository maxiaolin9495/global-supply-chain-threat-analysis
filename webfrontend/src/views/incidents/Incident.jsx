import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncidentEventTable from '../../components/incidentPageComponents/IncidentEventTable';
import IncidentEventDetails from '../../components/incidentPageComponents/IncidentEventDetails';
import EventSideBar from '../../components/eventSidebarComponent/EventSidebar';


export default class Location extends Component {
    render () {
        return (
        <div className="incidentClassMain">
            <IncidentEventTable />
            <EventSideBar />
        </div>
        )
    }
}