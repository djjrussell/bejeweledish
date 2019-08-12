import React from 'react';

export class Piece extends React.Component {


    constructor(props) {
        super(props);
        this.colors = ["blue", "green", "yellow", "purple", "red", "orange", "pink"];
        this.state = {
            row: this.props.row,
            column: this.props.column
        };

        this.getRandomColor = this.getRandomColor.bind(this);
    }

    getRandomColor() {

        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        return {
            backgroundColor: this.color
        };
    }



    render() {
        return (

            <div
                className="piece"
                data-row={this.state.row}
                data-column={this.state.column}
                style={this.getRandomColor()}
                data-color={this.color}
                onClick={this.props.onClick}
            />

        )
    }
}