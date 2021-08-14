
class App extends React.Component {
	render(){
		return (
		<div>
			<Hello 
			to="Ringo" 
			from="Paul" 
			bangs={4}
			// num={3} 
			// data={[1,2,3,4,5]}
			img="https://images.unsplash.com/photo-1623270858942-26e553643516?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
			/>
		
		</div>		
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
