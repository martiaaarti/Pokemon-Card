import React, {Component} from 'react';

export default class PokemonDetails extends Component {
    state = {}
    
    componentDidMount(){
        let id = this.props.match.params.pokemon_id;
        this.setState({
            id: id
        })
    }
    
    render() {       
        return (
            <div>
                <h1>{this.state.id}</h1>              
            </div>
        )
    }
};