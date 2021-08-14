function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumberPicker extends React.Component {
    render(){
        const nums = getNumber();
        return(
            <div>
         <h1>Your number is: {nums}</h1>
         <p>{nums === 7 ? 'Congrats!' : 'Unlucky!' }</p>
         {
         nums === 7 
         ? <img src="https://media.giphy.com/media/vvbGMpbhZMcHSsD50w/giphy.gif" /> 
         : null 
         }
    </div>
        ) 
    }
}
ReactDOM.render(<NumberPicker />, document.getElementById('root'));
