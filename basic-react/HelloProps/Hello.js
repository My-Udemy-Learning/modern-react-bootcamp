//Class Component

class Hello extends React.Component {
	render() {
		const props = this.props;
		console.log(props.data)
		let bangs = "!".repeat(props.bangs)
		return (
			<div>
			<p>Hi {props.to} from {props.from}{bangs}</p>
			<img src={props.img}/>
			</div>
		);
	}
}


