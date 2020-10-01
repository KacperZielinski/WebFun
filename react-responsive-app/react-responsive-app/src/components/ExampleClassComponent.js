import React from 'react';

class ExampleClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {type: "class2"};
      }

    render() {
        return (
            <div className="ecc">Hello from {this.state.type} component!</div>
        )
    }
}

export default ExampleClassComponent;