import React from 'react';

class UpdateForm extends React.Component {
    state = {
        name: this.props.relative.name,
        relation: this.props.relative.relation,
        age: this.props.relative.age
    }
    handleChange = ( { target } ) => {
        const key = target.name;
        this.setState({ [key] : target.value }, () => console.log(this.state[key]));
    }
    handleSubmit = (event) => {
        event.preventDefault(); 
        fetch(`${process.env.REACT_APP_API_URL}/api/relatives/${this.props.relative._id}`, {
            method: 'PUT',
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
                <input type="submit" value="Edit Relative"/>
                <input type="button" value="Cancel" onClick={this.props.refresh}/>
            </form>
        )
    }
}

export default UpdateForm;