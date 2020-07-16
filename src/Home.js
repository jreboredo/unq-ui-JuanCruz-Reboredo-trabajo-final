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



class Home extends React.Component {
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
        switch (event.target.value) {
            case '1':
                this.setState({img: piedra});
                break;
            case '2':
                this.setState({img:papel});
                break;
            case '3':
                this.setState({img: tijera});
                break;
            case '4':
                this.setState({img: lagarto});
                break;
            case '5':
                this.setState({img: spock});
                break;
            default:
                this.setState({img: choose});
                break;
        }

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
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0n "> <span className="oi oi-book" />Reglas del Juego</button>
                    </div>
                </nav>
                <div className='container bg-white'>
                    <div>
                        <h1>
                            Bienvenido a Piedra, Papel, Tijera, Lagarto o Spock
                        </h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                            <label>
                                <div>
                                Seleccione su Personaje:
                                </div>
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="1">Piedra</option>
                                    <option value="2">Papel</option>
                                    <option value="3">Tijera</option>
                                    <option value="4">Lagarto</option>
                                    <option value="5">Spock</option>
                                </select>
                            </label>
                            <div>
                                <p>Usted Selecciono:</p>
                                <div>
                                    <img src={this.state.img} width="150" />
                                </div>
                            </div>
                            <div>
                            <input type="submit"  className="btn btn-outline-success my-2 my-sm-0n " value="Competir" />
                            </div>
                        </form>
                </div>

            </>
        );
    }
}


export default Home;