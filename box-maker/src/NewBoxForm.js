import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = { height: "", width: "", color: "" };
        this.handleChange = this.handleChange.bind(this);
    }
        handleChange(event){
            this.setState({
                [event.target.value]: event.target.value
            });
        }
    
    render() {
        return (
            <form>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input type='text' 
                    name='height'
                    value={this.state.height} 
                    onChange={this.handleChange}
                    id='height'
                    />
                    <label htmlFor='width'>Width</label>
                    <input type='text' 
                    name='width'
                    value={this.state.width} 
                    onChange={this.handleChange}
                    id='width'
                    />
                    <label htmlFor='color'>Color</label>
                    <input type='text' 
                    name='color'
                    value={this.state.color} 
                    onChange={this.handleChange}
                    id='color'
                    />
                </div>
            </form>
        )
    }
}
export default NewBoxForm;