
class App extends React.Component {
	render(){
		return (
		<div>
			<Hello />
			<Hello />
		</div>		
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
