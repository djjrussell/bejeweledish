import React from 'react';
import {Row} from "./row";
import {get} from "./../commonFunctions/common"

export class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            size: 5,
            currentComponent: null,
            scoreX: -1,
            scoreY: -1,
            scoreTotal: 0
        };

        this.rows = [];

        this.getRows();
        this.checkY = this.checkY.bind(this);
    }

    checkY(t, sibling) {
        debugger;
        let next = get(".piece[data-column='" + parseInt(t.dataset.column) + "']", t.parentElement[sibling]);

        if (next && next.dataset.color == t.dataset.color) {

            let newScore = this.state.scoreY + 1;

            this.setState({
                scoreY: newScore
            });

            this.checkY(next);


        }

    }

    getRows() {

        for (let i = 0; i < this.state.size; i++) {

            this.rows.push(<Row size={this.state.size} row={i}/>)

        }

    }

    componentWillUpdate(nextProps, nextState, nextContext) {

        if (this.state.currentComponent) {

            let currentRow = parseInt(this.state.currentComponent.dataset.row);
            let currentColumn = parseInt(this.state.currentComponent.dataset.column);

            let nextRow = parseInt(nextState.currentComponent.dataset.row);
            let nextColumn = parseInt(nextState.currentComponent.dataset.column);

            if (
                (currentColumn == nextColumn && (currentRow + 1 == nextRow || currentRow - 1 == nextRow)) ||
                (currentRow == nextRow && (currentColumn + 1 == nextColumn || currentColumn - 1 == nextColumn))
            ) {

                let nextColor = nextState.currentComponent.dataset.color;
                let thisColor = this.state.currentComponent.dataset.color;

                this.state.currentComponent.dataset.color = nextColor;
                this.state.currentComponent.style.backgroundColor = nextColor;

                nextState.currentComponent.dataset.color = thisColor;
                nextState.currentComponent.style.backgroundColor = thisColor;

            }

        }

    }

    handleClick = (e) => {

        this.setState({
            currentComponent: e.target
        });

        this.checkY(e.target, "nextElementSibling");
        this.checkY(e.target, "previousElementSibling");

    };

    render() {
        return (
            <div className="board" onClick={this.handleClick}>
                {this.rows}
            </div>
        )
    }

}