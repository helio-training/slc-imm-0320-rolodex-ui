import React, { Component } from 'react';
import RelativeForm from './RelativeForm'
import UpdateForm from './UpdateForm'
import Relative from './Relative'

// TODO: 
// - renderForm() : toggle between Create & Update forms 
// - MODIFY Relative Component : with EDIT button that calls updateRelative
// - updateRelative(relative) : change state to update with relative
// - MODIFY getRelatives() : reset to Create form
// - MODIFY UpdateForm Component : Ability to cancel edit
class Relatives extends Component {
    constructor(props){
        super(props);
        this.state = {
            relatives : [],
            isCreate : true,
            updateRelative: {}
        }
    }

    getRelatives = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/relatives`)
            .then(response => response.json())
            .then(data => this.setState( { relatives : data, isCreate: true } ));
    };

    deleteRelative = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/relatives/${id}`, {
            method: 'DELETE'
        }) 
            .then(response => response.json())
            .then(console.log)
            .then(this.getRelatives);
    };

    updateRelative = (relative) => {
        this.setState({
            isCreate: false,
            updateRelative: relative
        })
    }

    renderForm = () => {
        let result;
        if (this.state.isCreate){
            result = <RelativeForm key="createForm" refresh={this.getRelatives} />; 
        } else {
            const data = this.state.updateRelative;
            result = <UpdateForm key={data._id} relative={data} refresh={this.getRelatives}/>; 
        }
        return result;
    }

    componentDidMount(){
        this.getRelatives();
    }
    render(){
        const displayRelatives = this.state.relatives.map((relative) => {
            return <Relative key={relative._id} 
                        relative={relative} 
                        deleteRelative={this.deleteRelative}
                        updateRelative={this.updateRelative}/>
        })
        return(
            <>
                <h2>Relatives Rolodex</h2>
                {this.renderForm()}
                {displayRelatives}
            </>
        )
    }
};

export default Relatives;

