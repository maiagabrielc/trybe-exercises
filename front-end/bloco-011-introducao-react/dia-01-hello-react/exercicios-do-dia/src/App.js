import './App.css';

const Task = () => {
  const lis = ['Comprar pão', 'Comprar carne', 'Fazer investimentos mensais', 'Treinar programação', 'Ler mangás'];
  return (
    lis.map((item, index) => (
      <li key={index}>{item}</li>
    ))
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Task()}
      </header>
    </div>
  );
}

export default App;
