import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    //  A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super();
    // console.log(this);

    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numberClicks: 0,
      numberClicks2: 0,
      numberClicks3: 0,
      bg: "black",
    }

    // Este this é usado para fazer bind, e poder utilizar posteriomente dentro da função desejada (nesse caso a handleClick)
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* setState é utilizada para fazer atribuições diretemante a key desejada em this.state */
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((prevState, _props) => ({
      numberClicks: prevState.numberClicks + 1,
    }))
    console.log(this.state.numberClicks);

    if ((this.state.numberClicks % 2) === 0) {
      this.setState({
        bg: "violet",
      })
    }
    // this.setState((prevState, _props) => ({
    //   numberClicks2: prevState.numberClicks2 + 2,
    // }))
  }
  handleClick2 = () => {
    /* setState é utilizada para fazer atribuições diretemante a key desejada em this.state */
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    // this.setState((prevState, _props) => ({
    //   numberClicks: prevState.numberClicks + 1,
    // }))
    this.setState((prevState, _props) => ({
      numberClicks2: prevState.numberClicks2 + 2,
    }))
    console.log(this.state.numberClicks2);

    if ((this.state.numberClicks2 % 3) === 0) {
      this.setState({
        bg: "red",
      })
    } else {
      this.setState({
        bg: "black",
      })
    }
  }

  render() {
    // console.log(this);
    return (
      <div style={{backgroundColor: this.state.bg }}>
      {/* this.handleClick é usado para especificar que quero usar a função handleClick desta classe, neste evento de click */}
        <button type="button" onClick={this.handleClick}>Meu Botão {this.state.numberClicks}</button>
        <button type="button" onClick={this.handleClick2}>Meu Botão {this.state.numberClicks2}</button>
        <button type="button" onClick={this.handleClick}>Meu Botão {this.state.numberClicks3}</button>
      </div>
    )
  }
}

export default App;
