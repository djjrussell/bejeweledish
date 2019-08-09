import React from 'react';

export class Piece extends React.Component {


    constructor(props) {
        super(props);
        this.colors = ["blue", "green", "yellow", "purple", "red", "orange", "pink"];
        this.state = {
            row: this.props.row,
            column: this.props.column
        };

    }

    getRandomColor() {

        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        return {
            backgroundColor: color
        };
    }

    render() {
        return (
            <div
                className="piece"
                data-row={this.state.row}
                data-column={this.state.column}
                style={this.getRandomColor()}
            />
        )
    }
}