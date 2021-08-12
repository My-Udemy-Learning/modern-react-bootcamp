
function getMood(){
	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Current Mood is: {getMood()}</h1>
				<img src="https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" />
			</div>
			);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
