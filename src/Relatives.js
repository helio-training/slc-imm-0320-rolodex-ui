import React, { Component } from 'react';
import RelativeForm from './RelativeForm'

class Relatives extends Component {
    constructor(props){
        super(props);
        this.state = {
            relatives : []
        }
    }

    getRelatives = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/relatives`)
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
                <RelativeForm refresh={this.getRelatives}/>
                {displayRelatives}
            </>
        )
    }
};

export default Relatives;

