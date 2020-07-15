import React from 'react';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import './App.css';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        this.competir()
    }
    competir(){
        this.props.history.push(`/competencia/${this.state.value}`)
    }
    render() {
        return (
            <>
                <nav className= "navbar navbar-dark bg-dark ">
                    <div>
                    </div>
                    <div className="form-inline">
                        <input
                            className="form-control"
                            placeholder="Buscar"
                            type="text"
                            onChange={event => this.handleChange(event)}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => this.handleSubmit()}>Buscar</button>
                    </div>
                </nav>
<div><h1>Selecciono: {this.state.value}</h1></div>
                    <div className="container bg-white">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="1">Piedra</option>
                                    <option value="2">Papel</option>
                                    <option value="3">Tijera</option>
                                    <option value="4">Lagarto</option>
                                    <option value="5">Spock</option>
                                </select>
                            </label>
                            <input type="submit" value="Competir" />
                        </form>
                    </div>

            </>
        );
    }
}


export default Home;