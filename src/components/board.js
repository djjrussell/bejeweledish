import React from 'react';
import {Row} from "./row";
import {get} from "./../commonFunctions/common"

export class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            size: 5,
            currentComponent: null
        };

        this.rows = [];
        this.checkForMatches = this.checkForMatches.bind(this);

        this.getRows();

    }

    checkDown(t){

    }

    checkUp(t) {

        let matched = 0;

        for(let i = 0; i < this.state.size; i++){

            let above = get(".piece[data-column='" + parseInt(t.dataset.column) + "']" , t.parentElement.previousSibling);

            if(
                t.parentElement.previousSibling &&
                above.dataset.color == t.dataset.color
            ){
                matched++
            }

        }

        for(let i = 0; i < this.state.size; i++){

            if(
                t.parentElement.nextElementSibling &&
                get(".piece[data-column='" + parseInt(t.dataset.column) + "']" , t.parentElement.nextElementSibling).dataset.color == t.dataset.color
            ){
                matched++
            }

        }

        return matched;

    }

    checkLeftRight(t) {

        let matched = 0;

    }

    checkForMatches() {

        this.checkUpDown();
        this.checkLeftRight();

    }

    getRows() {

        for (let i = 0; i < this.state.size; i++) {

            this.rows.push(<Row size={this.state.size} row={i}/>)

        }

    }

    // isAdjacent = (t) => {
    //
    //     const thisRow = parseInt(t.dataset.row);
    //     const thisColumn = parseInt(t.dataset.column);
    //     const thisColor = t.dataset.color;
    //
    //     return (
    //         this.state.currentComponent.dataset.color == t.dataset.color &&
    //         (
    //             (get(".piece[data-row='" + (thisRow + 1) + "']") && thisColor == get(".piece[data-row='" + (thisRow + 1) + "']").dataset.color) ||
    //             (get(".piece[data-row='" + (thisRow - 1) + "']") && thisColor == get(".piece[data-row='" + (thisRow - 1) + "']").dataset.color) ||
    //             (get(".piece[data-column='" + (thisColumn + 1) + "']") && thisColor == get(".piece[data-column='" + (thisColumn + 1) + "']").dataset.color) ||
    //             (get(".piece[data-column='" + (thisColumn - 1) + "']") && thisColor == get(".piece[data-column='" + (thisColumn - 1) + "']").dataset.color)
    //         )
    //     );
    // };

    componentWillUpdate(nextProps, nextState, nextContext) {
        if(this.state.currentComponent) {

            let currentRow = parseInt(this.state.currentComponent.dataset.row);
            let currentColumn = parseInt(this.state.currentComponent.dataset.column);

            let nextRow = parseInt(nextState.currentComponent.dataset.row);
            let nextColumn = parseInt(nextState.currentComponent.dataset.column);

            debugger;

            if(currentColumn == nextColumn && (currentRow+1 == nextRow || currentRow-1 == nextRow)){
                let nextColor = nextState.currentComponent.dataset.color;
                let thisColor = this.state.currentComponent.dataset.color;

                this.state.currentComponent.dataset.color = nextColor;
                this.state.currentComponent.style.backgroundColor = nextColor;

                nextState.currentComponent.dataset.color = thisColor;
                nextState.currentComponent.style.backgroundColor = thisColor;
            }

            if(currentRow == nextRow && (currentColumn+1 == nextColumn || currentColumn-1 == nextColumn)){
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

        // const isAdjacent = this.isAdjacent(tile);
        //
        // if (isAdjacent) {
        //
        //
        // }

    };

    render() {
        return (
            <div className="board" onClick={this.handleClick}>
                {this.rows}
            </div>
        )
    }

}