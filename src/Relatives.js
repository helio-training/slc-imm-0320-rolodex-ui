import React, { Component } from 'react';
import RelativeForm from './RelativeForm'
import Relative from './Relative'

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

    deleteRelative = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/relatives/${id}`, {
            method: 'DELETE'
        }) 
            .then(response => response.json())
            .then(console.log)
            .then(this.getRelatives);
    };

    componentDidMount(){
        this.getRelatives();
    }
    render(){
        const displayRelatives = this.state.relatives.map((relative) => {
            return <Relative key={relative._id} relative={relative} deleteRelative={this.deleteRelative}/>
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

