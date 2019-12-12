import React, {Component} from 'react';
import './mapMarker.css';
import Card from "react-bootstrap/Card";
import MetricBatchComponent from "../metricBatchComponent/MetricBatchComponent";
import EventAction from "../../actions/event.actions"

export default class MapMarker extends Component {
    constructor(props) {
        super(props);

        this.onHover = this.onHover.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        EventAction.updateActiveEvent(this.props.event._source)
    }

    onHover() {
    }

    render() {

        console.log(this.props.isHovered);
        let size = this.props.isActive ? "fa-2x" : "fa-2x";
        let isHovered = this.props.isHovered? " hovered-marker " :"";
        let isActive = this.props.isActive ? "active_element" : "";
        let classes = "fas fa-exclamation-triangle hovered mapmarker " + size + " " + isActive + isHovered;
        return (
            <div>
                <i className={classes}
                   onClick={this.onClick}
                   onMouseOver={this.onHover}
                   lat={this.props.lat}
                   lng={this.props.lng}/>
                {this.props.isActive?
                    <Card className={"info-window"}>
                        <Card.Body>
                            <Card.Title>{this.props.event._source.id}</Card.Title>
                            <hr className="horizontal-line"/>
                            <div className={"marker-batches"}>
                                <MetricBatchComponent size="big"
                                                      value={this.props.event._source.importance}
                                                      field="Importance"/>
                                <MetricBatchComponent size="big"
                                                      value={20}
                                                      field="Importance"/>
                            </div>
                            <hr className="horizontal-line"/>

                            {this.props.event._source.description}
                        </Card.Body>
                    </Card> : ""}
                {this.props.isHovered && !this.props.isActive?
                    <Card className={"info-window"}>
                        <Card.Body>
                            <Card.Title>{this.props.event._source.id}</Card.Title>
                            {this.props.event._source.description}

                        </Card.Body>
                    </Card> : ""}
            </div>
        )
    }
}