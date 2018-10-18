import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  numero: 0, 
		  mostra: true
		};
	}
	
	IncrementoNumero = () => {
		this.setState({ numero: this.state.numero + 5});
	}
	
	DecrementoNumero = () => {
		this.setState({ numero: this.state.numero - 5});
	}
	
	CambioStato = () => {
		this.setState({ mostra: !this.state.mostra });
	}
	
	render(){
		return(
			<div className="App">
				<header className="App-header">
					<button onClick = {this.IncrementoNumero}>Clicca per aumentare di 5</button>
					<button onClick = {this.DecrementoNumero}>Clicca per diminuire di 5</button>
					<button onClick = {this.CambioStato}>
						{	this.state.mostra ? 'Nascondi numero' : 'Mostra numero' }
					</button>
					{	this.state.mostra ? <h2>{ this.state.numero } </h2> : ''}
					<img src={logo} className="App-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default App;
