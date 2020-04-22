import React from 'react';

class RelativeForm extends React.Component {
    state = {
        name: "",
        relation: "",
        age: 0
    }
    handleChange = ( { target } ) => {
        const key = target.name;
        this.setState({ [key] : target.value }, () => console.log(this.state[key]));
    }
    handleSubmit = (event) => {
        event.preventDefault(); //TODO: .then(clear form)
        fetch(`${process.env.REACT_APP_API_URL}/api/relatives`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(this.props.refresh)
            .then(() => this.setState({
                name: "",
                relation: "",
                age: 0
            }));
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="name"
                    type="text" 
                    value={this.state.name} 
                    placeholder="Name" 
                    onChange={this.handleChange}/>
                <input name="relation"
                    type="text" 
                    value={this.state.relation} 
                    placeholder="Relation" 
                    onChange={this.handleChange}/>
                <input name="age"
                    type="number" 
                    value={this.state.age} 
                    placeholder="Age" 
                    onChange={this.handleChange}/>
                <input type="submit" value="Add Relative"/>
            </form>
        )
    }
}


export default RelativeForm;