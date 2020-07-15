import React from 'react';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import './App.css';



class Compentencia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.match.params.seleccion};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //this.setState({ value: this.props.location.state.value });
    }
    handleChange(event) {
        //this.setState({ value: event.target.value });
    }

    handleSubmit() {
        this.competir()
    }
    competir(){
        this.props.history.push("/competencia", {value: {value: this.state.value}});
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
                </div>

            </>
        );
    }
}


export default Compentencia;