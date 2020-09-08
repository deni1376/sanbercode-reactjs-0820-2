import React, {Component} from 'react'
const event = new Date('August , 2020 07:38:00 UTC+07:00');
class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        time: 60
      }
    }
  
  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
    });
  }


  render(){
    return(
    <thead style={{textAlign: "center"}}>
      <tr>
          <th style={{textAlign: "center"}}> Sekarang jam: {event.toLocaleTimeString()}</th>
          <th style={{textAlign: "center"}}> Sekarang jam:  hitung mundur : {this.state.time}</th>
      </tr>
  </thead>
    )
  }
}

export default Timer