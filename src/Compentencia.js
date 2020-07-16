import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from "./dist/logo.png";
import piedra from './dist/1.jfif'
import papel from './dist/2.png'
import tijera from './dist/3.png'
import lagarto from './dist/4.jfif'
import spock from './dist/5.png'
import win from './dist/win.jfif'
import lose from './dist/lose.png'
import empate from './dist/empate.png'


class Compentencia extends React.Component {
    constructor(props) {
        super(props);
        this.maquina = 1//Math.trunc(1 + (Math.random() * 4));
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
        //this.setState({ value: event.target.value });
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
                this.state.imgUser = piedra
                switch (this.maquina) {
                    case 1:
                       this.state.imgPC = piedra
                       this.state.imgWinner = empate;
                       break;
                    case 2:
                        this.state.imgWinner =  lose
                        break;
                    case 3:
                        this.state.imgWinner = win
                        break;
                    case 4:
                        this.state.imgWinner = win
                        break;
                    case 5:
                        this.state.imgWinner =  lose
                        break;
                }
            case '2':
                this.state.imgUser = papel
                switch (this.maquina) {
                    case 1:
                        this.state.imgPC = piedra
                        this.state.imgWinner = win
                        break;
                    case 2:
                        this.state.imgWinner = empate;
                        break;
                    case 3:
                        this.state.imgWinner = lose
                        break;
                    case 4:
                        this.state.imgWinner =  lose
                        break;
                    case 5:
                        this.state.imgWinner = win
                        break;
                }
            case '3':
                this.state.imgUser = tijera
                switch (this.maquina) {
                    case 1:
                        this.state.imgPC = piedra
                        this.state.imgWinner =  lose
                        break;
                    case 2:
                        this.state.imgWinner = win
                        break;
                    case 3:
                        this.state.imgWinner = empate;
                        break;
                    case 4:
                        this.state.imgWinner = win
                        break;
                    case 5:
                        this.state.imgWinner =  lose
                        break;
                }
            case '4':
                this.state.imgUser = lagarto
                switch (this.maquina) {
                    case 1:
                        this.state.imgPC = piedra
                        this.state.imgWinner =  lose
                        break;
                    case 2:
                        this.state.imgWinner = win
                        break;
                    case 3:
                        this.state.imgWinner =  lose
                        break;
                    case 4:
                        this.state.imgWinner = empate;
                        break;
                    case 5:
                        this.state.imgWinner = win
                        break;
                }
            case '5':
                this.state.imgUser = spock
                switch (this.maquina) {
                    case 1:
                        this.state.imgPC = piedra
                        this.state.imgWinner = win
                        break;
                    case 2:
                        this.state.imgWinner =  lose
                        break;
                    case 3:
                        this.state.imgWinner = win
                        break;
                    case 4:
                        this.state.imgWinner =  lose
                        break;
                    case 5:
                        this.state.imgWinner = empate;
                        break;
                }
        }
    }
    render() {
        return (
            <>
                <nav className= "navbar navbar-dark bg-dark ">
                    <div>
                        <img src={Logo} width="150" />
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
                <div>
                    <button type="button" className="btn btn-outline-success my-2 my-sm-0n " onClick={() => this.goHome()}> <span className="oi oi-book" />Volver a Jugar</button>
                </div>
                </div>

            </>
        );
    }
}


export default Compentencia;