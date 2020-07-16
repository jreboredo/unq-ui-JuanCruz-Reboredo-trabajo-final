import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from './dist/logo.png'
import piedra from './dist/1.jfif'
import papel from './dist/2.png'
import tijera from './dist/3.png'
import lagarto from './dist/4.jfif'
import spock from './dist/5.png'
import choose from './dist/choose.png'



class Reglas extends React.Component {
    constructor(props) {
        super(props)
        this.victorias = 0
        this.state = {
            value: '',
            img: choose};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    goHome(){
        this.props.history.push('/')
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
                        <img src={Logo} width="150" />
                    </div>
                    <div className="btn-toolbar">

                    </div>
                    <div className="form-inline">
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0n " onClick={() => this.goHome()}> <span className="oi oi-book" />Jugar</button>
                    </div>
                </nav>
                <div className='container bg-white'>
                    <div>
                        <h1>
                            Reglamento del Juego
                        </h1>
                    </div>
                    <div className='container bg-white'>
                    <p>El juego consta de las mismas Reglas que el "Piedra, papel o tijera" pero con mas casos.
                    A continuacion se detallan los posibles casos:</p>
                        <ul>
                            <li>Tijera corta a Papel</li>
                            <li>Tijera corta a Papel</li>
                            <li>Piedra aplasta a Lagarto</li>
                            <li>Lagarto envenena a Spock</li>
                            <li>Spock rompe a Tijera</li>
                            <li>Tijera decapita a Lagarto</li>
                            <li>Lagarto devora a Papel</li>
                            <li>Papel desautoriza a Spock</li>
                            <li>Spock vaporiza a Piedra</li>
                            <li>y como siempre, Piedra aplasta a Tijera</li>
                    </ul>
                        <p>A continuacion, dejamos un Video de Sheldon Cooper explicando el juego en la famosa serie "The Bing Bang Theory:</p>
                        <iframe  width="560" height="315" className="video-player" src="https://www.youtube.com/embed/O5j4RGw6fHQ" frameBorder="0" allowFullScreen />
                    </div>
                </div>

            </>
        );
    }
}


export default Reglas;