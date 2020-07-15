import React from 'react';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import './App.css';



class Compentencia extends React.Component {
    constructor(props) {
        super(props);
        this.maquina = Math.trunc(1 + (Math.random() * 4));
        this.user = props.match.params.seleccion
        this.state = {
            value: props.match.params.seleccion};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }
    handleChange(event) {
        //this.setState({ value: event.target.value });
    }

    handleSubmit() {
        this.competir()
    }
    competir(){
        switch (this.user) {
            case '1':
                switch (this.maquina) {
                    case 1:
                       return 'Empate';
                       break;
                    case 2:
                        return 'Maquina'
                        break;
                    case 3:
                        return 'User'
                        break;
                    case 4:
                        return'User'
                        break;
                    case 5:
                        return'Maquina'
                        break;
                }
            case '2':
                switch (this.maquina) {
                    case 1:
                        return 'User'
                        break;
                    case 2:
                        return'Empate'
                        break;
                    case 3:
                        return 'Maquina'
                        break;
                    case 4:
                        return'Maquina'
                        break;
                    case 5:
                        return'User'
                        break;
                }
            case '3':
                switch (this.maquina) {
                    case 1:
                        return 'Maquina'
                        break;
                    case 2:
                        return'User'
                        break;
                    case 3:
                        return 'Empate'
                        break;
                    case 4:
                        return 'User'
                        break;
                    case 5:
                        return 'Maquina'
                        break;
                }
            case '4':
                switch (this.maquina) {
                    case 1:
                        return 'Maquina'
                        break;
                    case 2:
                        return 'User'
                        break;
                    case 3:
                        return 'Maquina'
                        break;
                    case 4:
                        return 'Empate'
                        break;
                    case 5:
                        return 'User'
                        break;
                }
            case '5':
                switch (this.maquina) {
                    case 1:
                        return 'User'
                        break;
                    case 2:
                        return 'Maquina'
                        break;
                    case 3:
                        return 'User'
                        break;
                    case 4:
                        return 'Maquina'
                        break;
                    case 5:
                        return 'Empate'
                        break;
                }
            default:
                return 'error'
        }
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
                <div><h1>Selecciono: {this.user}</h1></div>
                <div><h1>Maquina: {this.maquina}</h1></div>
                <div>
                    <h1>Ganador: {this.competir()}</h1>

                </div>
                <div className="container bg-white">
                </div>


            </>
        );
    }
}


export default Compentencia;