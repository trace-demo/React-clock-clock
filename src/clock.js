import React from 'react';
import './clock.scss'


class Clock extends React.Component {

    constructor(props) {
        super(props);
        
        this.state ={
            hours: "",
            minutes: "",
            seconds: ""
        };

        this.handleDate = this.handleDate.bind(this);
    }

    
    clockInterval="";


    componentDidMount() {
        this.clockInterval = setInterval(this.handleDate, 1000);
    }


    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }


    handleDate() {
        const { datediff } =this.props;
        const date = new Date();

        date.setHours(date.getHours() + datediff);

        let hours =this.formatTime(date.getHours());
        let minutes =this.formatTime(date.getMinutes());
        let seconds =this.formatTime(date.getSeconds());

        this.setState( {hours, minutes, seconds})

    }


    formatTime(time) {
        return time <10 ? `0${time}` :time;
    }


    render() {
        const { hours, minutes, seconds } = this.state;

        const secondsStyle ={transform: `rotate(${seconds * 6}deg)`};
        const minutesStyle ={transform: `rotate(${minutes * 6}deg)`};
        const hoursStyle ={transform: `rotate(${hours * 30}deg)`};
        
        const { title } = this.props;

        return (
            <div className={"clock"}>

                <h3>{title}</h3>

                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle} />
                    <div className={"dial minutes"} style={minutesStyle} />
                    <div className={"dial hours"} style={hoursStyle} />                   
                </div>

                <div className={"digital-clock"}>
                    {hours}:{minutes}:{seconds}
                </div>

            </div>
        )
    }
}


export default Clock;