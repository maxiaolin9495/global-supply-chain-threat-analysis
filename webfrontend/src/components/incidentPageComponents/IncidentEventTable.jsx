import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import EventStore from "../../stores/event.store";
import EventAction from "../../actions/event.actions";
import eventStore from '../../stores/event.store';

export default class Incident extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            events: EventStore.getEvents(),
            activeEvent: null,
        };

        this.onFetchEvents = this.onFetchEvents.bind(this);
        this.onRowClick = this.onRowClick.bind(this);
        this.getTrProps = this.getTrProps.bind(this);

    }

    componentDidMount() {
        // const url = "https://jsonplaceholder.typicode.com/posts"; 
        // fetch(url, {
        //     method: "GET"
        // }).then(response => response.json()).then(posts =>{
        //     this.setState({posts: posts})
        // })
        EventStore.addChangeListener("FETCH_EVENTS", this.onFetchEvents);

        if (this.state.events.length < 1) {
            EventAction.fetchEvents();
        }

    }

    onFetchEvents() {
        this.setState({
            events: EventStore.getEvents()
        })
    }

    getTrProps(state, rowInfo, column, instance){
        return {
            onClick: e => this.onRowClick(rowInfo)
        }

    }

    onRowClick (rowInfo){
        console.log('It was in this row:', rowInfo.row._original);
        this.props.onChangeActiveEvent(rowInfo.row._original)
    }

    render() {

        const columns = [
<<<<<<< HEAD:webfrontend/src/components/incidentPageComponents/IncidentEventTable.jsx
            {
                Header: "Even Name",
                accessor: "eventName",
                width: 300,
                style: {
                    textAlign: "center"
                }
            },
=======
            // {
            //     Header: "Actor",
            //     accessor: "actor",
            //     width: 80,
            //     style: {
            //         textAlign: "center"
            //     }
            // },
>>>>>>> 96bc13a74ec8f2e0f8dbaca199936d194e0bfb36:webfrontend/src/components/IncidentEventTable.jsx
            {
                Header: "Importance",
                accessor: "importance",
                width: 50,
                sortable: true
<<<<<<< HEAD:webfrontend/src/components/incidentPageComponents/IncidentEventTable.jsx
                
            },
            {
                Header: "Description",
                accessor: "description",
                filterable: true
            },
            {
                Header: "Country",
                accessor: "body",
=======
            },
            {
                Header: "Description",
                accessor: "description",
>>>>>>> 96bc13a74ec8f2e0f8dbaca199936d194e0bfb36:webfrontend/src/components/IncidentEventTable.jsx
                filterable: true
                
            },
            // {
            //     Header: "Country",
            //     accessor: "body",
            //     filterable: true
            // },
            {
                Header: "Source URL",
                accessor: "url",
                width: 200,
<<<<<<< HEAD:webfrontend/src/components/incidentPageComponents/IncidentEventTable.jsx
                filterable: true
            },
            {
                Header: "Source Origin",
                accessor: "origin",
                width: 200,
                filterable: true
            },
        ];
        const data = this.state.posts;
        console.log(data);
        const onRowClick = (state, rowInfo, column, instance) => {
            return {
                onClick: e => {
                    console.log('It was in this row:', rowInfo)
                }
=======
                filterable: true
>>>>>>> 96bc13a74ec8f2e0f8dbaca199936d194e0bfb36:webfrontend/src/components/IncidentEventTable.jsx
            }
            // {
            //     Header: "Source Origin",
            //     accessor: "origin",
            //     width: 200,
            //     filterable: true
            // },
        ];

        return (

            <div className="eventTable">
                {/*{console.log(this.state.events?this.state.events[0]._source : " ")}*/}
                {
                    this.state.events[0] ? (

                    <ReactTable
                        columns={columns}
                        data={this.state.events.map((event)=>{return event._source})}
                        style={{
                            height: "570px"
                        }}
                        defaultPageSize={20}
                        showPagination={false}
                        getTrProps={this.getTrProps}
                        filterable
                    >

                    </ReactTable>) : ""}
            </div>
        )
    }
}