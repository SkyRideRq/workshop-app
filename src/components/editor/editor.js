import React, { Component } from 'react';

class Editor extends Component {
    
    render () {
        return (
            <div>
                <input 
                    type="text" 
                    value="Model"
                    name="text"
                    className="model-input"
                    placeholder="Model"/>
            </div>
            
        )
    }
}
export default Editor;