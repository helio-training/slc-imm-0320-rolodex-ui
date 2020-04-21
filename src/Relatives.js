import React, { Component } from 'react';

class Relatives extends Component {
    constructor(props){
        super(props);
        this.state = {
            relatives : []
        }
    }

    getRelatives = () => {
        fetch('http://localhost:5000/api/relatives')
            .then(response => response.json())
            .then(data => this.setState( { relatives : data } ));
    };

    componentDidMount(){
        this.getRelatives();
    }
    render(){
        const displayRelatives = this.state.relatives.map((relative) => {
            return <div key={relative._id}>{relative.name}</div>
        })
        return(
            <>
                <h2>Relatives Rolodex</h2>
                {displayRelatives}
            </>
        )
    }
};

export default Relatives;

