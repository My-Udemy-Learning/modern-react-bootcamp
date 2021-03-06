import React, { Component } from 'react'
import Box from './box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
        constructor(props){
            super(props);
                this.state = {
                    boxes: [{width: 10, height: 40, color: 'orange'}]
                }
            }
    render() {
        const boxes = this.state.boxes.map(box => (
            
            <Box
            width={box.width}
            height={box.height}
            color={box.color}
            />
        ))
        return (
            <div>
                <h1>Color Box Maker</h1>

                <NewBoxForm />
                {boxes}
              
            </div>
        )
    }
}
export default BoxList;