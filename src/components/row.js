import React from 'react'
import {Piece} from "./piece";

export class Row extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            size : this.props.size,
            row: this.props.row
        };

        this.children = [];

        this.populateChildren()
    }

    populateChildren(){

        for(let i = 0; i < this.state.size; i ++){
            this.children.push(<Piece column={i} row={this.state.row} />)
        }

    }

    render() {
        return (
            <div className="row">
                {this.children}
            </div>
        )
    }

}