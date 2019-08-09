import React from 'react';
import {Row} from "./row";

export class Board extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            size : 25
        };

        this.rows = [];

        this.getRows()
    }

    getRows(){

        for(let i = 0; i < this.state.size; i ++){

            this.rows.push( <Row size={this.state.size} row={i} />)

        }

    }

    render(){
        return (
            <div className="board">
                {this.rows}
            </div>
        )
    }

}