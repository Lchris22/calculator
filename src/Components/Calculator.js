import React from "react";
class Calculator extends React.Component {

    state = {
        expression: "1+2"
    };

    operatorPossible = (data) => {
        const lastOperator = this.state.expression.charAt(this.state.expression.length - 1);
        if ((lastOperator == '+' || lastOperator == '-' || lastOperator == '*' || lastOperator == '/'
            || lastOperator == '%') &&
            (data == '+' || data == '-' || data == '*' || data == '/' || data == '%')) {
            return false

        }
        return true
    }
    onInput = (data) => {
        if (this.state.expression.charAt(0)=="0"){
            var temp = this.state.expression.substring()
                temp = temp.slice(1,temp.length)
            this.setState({
                expression: temp
            })
        }
        if (data == "A") {
            var temp = this.state.expression.substring()
            temp = temp.slice(0, -1)
            this.setState({
                expression: temp 
            })
        }
        else if (data == "D") {
            this.setState({
                expression: ""
            })
        }
        else if (data == "K") {
            this.setState({
                expression: this.state.expression + "."
            })
        }
        else if (data == "P") {
            pass
        }
        else if (data == "=") {
            this.setState({
                expression: eval(this.state.expression).toString()
            })
        } else {
            if (this.operatorPossible(data)) {
                this.setState({
                    expression: this.state.expression + data
                })
            } else {
                //used substring because of "immutability thing"
                //the below expression will make temp point to a new object in memory
                var temp = this.state.expression.substring()
                temp = temp.slice(0, -1)
                this.setState({
                    expression: temp + data
                })
            }
        }


    }

    render() {
        // const expression = "1";
        return (
            <div className="ui centred  card">
                <CalcDisplay
                    expression={this.state.expression}
                />
                <ButtonArea
                    onInput={this.onInput}
                />
            </div>
        );
    }
}



class CalcDisplay extends React.Component {
    render() {
        return (
            <div className="ui centred right aligned card ">
                <h1>{this.props.expression}</h1>
            </div>
        );
    }
}


class ButtonArea extends React.Component {
    handleData = (data) => (
        this.props.onInput(data)
    );
    render() {
        return (
            <div className="ui centred grid">
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(1)} >1</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(2)} >2</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(3)} >3</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("+")} >+</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(4)} >4</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(5)} >5</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(6)} >6</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("-")} >-</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(7)} >7</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(8)} >8</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(9)}>9</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("*")}>x</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("A")} >AC</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("D")}>DEL</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("%")}>%</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("/")}>/</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("K")} >.</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData(0)}>0</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("P")}>()</button>
                </div>
                <div className="four wide column">
                    <button className="ui button" onClick={() => this.handleData("=")}>=</button>
                </div>
            </div>
        );
    }
}



export default Calculator;