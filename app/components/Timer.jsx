var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function(){
        return {
        count: 0,
        countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function(prevProps, prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus){
                case 'started':
                    clearInterval(this.timer);
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count +1;
            this.setState({
                count: newCount,
                countdownStatus: 'started'
            })
        }, 1000);
    },
    handleStatusChange: function(newStatus) {
        this.setState({countdownStatus: newStatus})
    },
    render: function(){
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if(countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <button className="button expanded" onClick={this.startTimer}>Start!</button>
            }
        }

        return (
            <div>
                <div>
                    <h1 className="page-title">Timer</h1>
                    <Clock totalSeconds={count}/>
                    {renderControlArea()}
                </div>
            </div>
        )
    }
});

module.exports=Timer;