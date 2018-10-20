import React, { Component } from 'react';
import './App.css';


class Button extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var themeColor=this.props.themeColor;
        return(
            <div >
                <button style={{color:themeColor}} onClick={()=>this.props.handleClick('red')}>红色</button>
                <button style={{color:themeColor}} onClick={()=>this.props.handleClick('green')}>绿色</button>
            </div>
        )
    }
}

class Title extends Component {
    constructor (){
        super()
    }
    render () {
        const themeColor=this.props.themeColor;
        return (
            <h2 style={{color:themeColor}}>标题</h2>
        )
    }
}
class App extends Component {
    constructor (props){
        super(props)
        this.state={
            themeColor:''
        }
    }
    handleClick(color){
        this.setState(
            {themeColor:color}
        )
    }
  render() {
    return (
      <div >
        <Title themeColor={this.state.themeColor}></Title>
          <Button themeColor={this.state.themeColor} handleClick={
              (color)=>this.handleClick(color)}></Button>
      </div>
    );
  }
}

export default App;
