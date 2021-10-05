import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div>
        {conteudos.map((element, index) => {
          return(<div>
            <p key={Math.random() * index + 1}>O conteúdo é: {element.conteudo}</p>
            <p key={Math.random() * index + 1}>Status: {element.status}</p>
            <p key={Math.random() * index + 1}>Bloco: {element.bloco}</p>
          </div>)
        })}
      </div>
    );
  }
}

export default Content;