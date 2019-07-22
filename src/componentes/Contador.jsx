import React, { Component } from 'react'

export default class Contador extends Component{
  constructor(props) { 
    super(props)
    this.state = {
      numero : this.props.numeroInicial
    }
  }

  maisUm = () => { 
    this.alterarNumero(1)
  }

  menosUm = () => { 
    this.alterarNumero(-1)
  }

  alterarNumero = valor => {
    this.setState({
      numero: this.state.numero + valor
    })
  }

  render() { 
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        
        <button onClick={() => this.alterarNumero(10)}>
          Mais
        </button>

        <button onClick={()=> this.alterarNumero(-10)}>Menos</button>
      </div>
    )
  }
}