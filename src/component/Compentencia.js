import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/css/App.css';
import Logo from "../dist/logo.png";
import piedra from '../dist/1.jfif'
import papel from '../dist/2.png'
import tijera from '../dist/3.png'
import lagarto from '../dist/4.jfif'
import spock from '../dist/5.png'
import win from '../dist/win.jfif'
import lose from '../dist/lose.png'
import empate from '../dist/empate.png'


class Compentencia extends React.Component {
    constructor(props) {
        super(props);
        this.maquina = Math.trunc(1 + (Math.random() * 5));
        this.state = {
            value: props.match.params.seleccion,
            imgUser: '',
            imgPC: '',
            imgWinner: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }
    handleChange(event) {
    }
    handleSubmit() {
        this.competir()
    }
    goHome(){
        this.props.history.push('/')
    }
    competir(){
        switch (this.state.value) {
            case '1':
                switch (this.maquina) {
                    case 1:
                        this.state.imgUser = piedra
                        this.state.imgPC = piedra
                        this.state.imgWinner = empate;
                        break;
                    case 2:
                        this.state.imgUser = piedra
                        this.state.imgPC = papel
                        this.state.imgWinner = lose
                        break;
                    case 3:
                        this.state.imgUser = piedra
                        this.state.imgPC = tijera
                        this.state.imgWinner = win
                        break;
                    case 4:
                        this.state.imgUser = piedra
                        this.state.imgPC = lagarto
                        this.state.imgWinner = win
                        break;
                    case 5:
                        this.state.imgUser = piedra
                        this.state.imgPC = spock
                        this.state.imgWinner = lose
                        break;
                }
                break;
            case '2':
                switch (this.maquina) {
                    case 1:
                        this.state.imgUser = papel
                        this.state.imgPC = piedra
                        this.state.imgWinner = win
                        break;
                    case 2:
                        this.state.imgUser = papel
                        this.state.imgPC = papel
                        this.state.imgWinner = empate;
                        break;
                    case 3:
                        this.state.imgUser = papel
                        this.state.imgPC = tijera
                        this.state.imgWinner = lose
                        break;
                    case 4:
                        this.state.imgUser = papel
                        this.state.imgPC = lagarto
                        this.state.imgWinner = lose
                        break;
                    case 5:
                        this.state.imgUser = papel
                        this.state.imgPC = spock
                        this.state.imgWinner = win
                        break;
                }
                break;
            case '3':
                switch (this.maquina) {
                    case 1:
                        this.state.imgUser = tijera
                        this.state.imgPC = piedra
                        this.state.imgWinner = lose
                        break;
                    case 2:
                        this.state.imgUser = tijera
                        this.state.imgPC = papel
                        this.state.imgWinner = win
                        break;
                    case 3:
                        this.state.imgUser = tijera
                        this.state.imgPC = tijera
                        this.state.imgWinner = empate;
                        break;
                    case 4:
                        this.state.imgUser = tijera
                        this.state.imgPC = lagarto
                        this.state.imgWinner = win
                        break;
                    case 5:
                        this.state.imgUser = tijera
                        this.state.imgPC = spock
                        this.state.imgWinner = lose
                        break;
                }
                break;
            case '4':
                switch (this.maquina) {
                    case 1:
                        this.state.imgUser = lagarto
                        this.state.imgPC = piedra
                        this.state.imgWinner = lose
                        break;
                    case 2:
                        this.state.imgUser = lagarto
                        this.state.imgPC = papel
                        this.state.imgWinner = win
                        break;
                    case 3:
                        this.state.imgUser = lagarto
                        this.state.imgPC = tijera
                        this.state.imgWinner = lose
                        break;
                    case 4:
                        this.state.imgUser = lagarto
                        this.state.imgPC = lagarto
                        this.state.imgWinner = empate;
                        break;
                    case 5:
                        this.state.imgUser = lagarto
                        this.state.imgPC = spock
                        this.state.imgWinner = win
                        break;
                }
                break;
            case '5':
                switch (this.maquina) {
                    case 1:
                        this.state.imgUser = spock
                        this.state.imgPC = piedra
                        this.state.imgWinner = win
                        break;
                    case 2:
                        this.state.imgUser = spock
                        this.state.imgPC = papel
                        this.state.imgWinner = lose
                        break;
                    case 3:
                        this.state.imgUser = spock
                        this.state.imgPC = tijera
                        this.state.imgWinner = win
                        break;
                    case 4:
                        this.state.imgUser = spock
                        this.state.imgPC = lagarto
                        this.state.imgWinner = lose
                        break;
                    case 5:
                        this.state.imgUser = spock
                        this.state.imgPC = spock
                        this.state.imgWinner = empate;
                        break;
                }
                break;
        }
    }
    render() {
        return (
            <>
                <nav className= "navbar navbar-dark bg-dark ">
                    <div>
                        <img src={Logo} width="150" />
                    </div>
                    <div className="form-inline">
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0n " onClick={() => this.goHome()}> <span className="oi oi-book" />Volver a Jugar</button>
                    </div>
                </nav>
                <div className='container bg-white'>
                <div>
                    <h4>Resultado: {this.competir()}</h4>
                    <div>
                        <img src={this.state.imgWinner} width="150" />
                    </div>
                </div>
                    <div>
                        <h4>Su Personaje: </h4>
                        <div>
                            <img src={this.state.imgUser} width="150" />
                        </div>
                    </div>
                    <div>
                        <h4>La Maquina elijio: </h4>
                        <div>
                            <img src={this.state.imgPC} width="150" />
                        </div>
                    </div>
                </div>

            </>
        );
    }
}


export default Compentencia;