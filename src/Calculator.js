import React, {Component} from 'react';
import './css/style2.css';
import Button from './Components/Button';

class Calculator extends Component {

    constructor(props){
        super(props);

        this.state = {
            current: '0',
            previous: [],
            nextIsReset: false
        }
    }

    reset = () => {

        this.setState({current: '0', previous: [], nextIsReset: false});
      
    }

    calculate = (symbol) => {
        let {current, previous, nextIsReset} = this.state;
        if(previous.length > 0){
            current = eval(String(previous[previous.length - 1] + current));
            this.setState({current, previous: [], nextIsReset: true});
        }
    }


    partCalc = (symbol) => {
        let {current, previous, nextIsReset} = this.state;
        console.log(this.state);
    }
    

    addToCurrent = (symbol) => {


     
        if(["/", "-", "+", "*"].indexOf(symbol) > -1){

            //this.partCalc(symbol);

            let {previous} = this.state;
            previous.push(this.state.current + symbol);
            this.setState({previous, nextIsReset: true});
            }      
            

            else {
                if((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset){
                this.setState({current: symbol, nextIsReset: false});
                }else{
                    this.setState({current: this.state.current + symbol, upAction: symbol});
                }

            }
        }
    

    render(){

        const buttons = [
            {symbol: 'C', cols: 3, action: this.reset},
            {symbol: '/', cols: 1, action: this.addToCurrent},
            {symbol: '7', cols: 1, action: this.addToCurrent},
            {symbol: '8', cols: 1, action: this.addToCurrent},
            {symbol: '9', cols: 1, action: this.addToCurrent},
            {symbol: '*', cols: 1, action: this.addToCurrent},
            {symbol: '4', cols: 1, action: this.addToCurrent},
            {symbol: '5', cols: 1, action: this.addToCurrent},
            {symbol: '6', cols: 1, action: this.addToCurrent},
            {symbol: '-', cols: 1, action: this.addToCurrent},
            {symbol: '1', cols: 1, action: this.addToCurrent},
            {symbol: '2', cols: 1, action: this.addToCurrent},
            {symbol: '3', cols: 1, action: this.addToCurrent},
            {symbol: '+', cols: 1, action: this.addToCurrent},
            {symbol: '+-', cols: 1, action: this.addToCurrent},
            {symbol: '0', cols: 1, action: this.addToCurrent},
            {symbol: '.', cols: 1, action: this.addToCurrent},
            {symbol: '=', cols: 1, action: this.calculate}
        ];

        return (
            <div className="Calc">
                <h2 className="heading">Responsive Calculator using React</h2>
      
                <input className="preResult" type="text" readOnly="true" value={this.state.previous}></input>
                <input className="result" type="text" value={this.state.current}></input>
            
                {buttons.map((btn, i) => {
                    return <Button key={i} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} ></Button>
                })}
            
            </div>
        );

        
        
    }

}

export default Calculator;