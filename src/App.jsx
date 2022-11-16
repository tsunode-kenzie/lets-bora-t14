import './App.css';
import { Profile } from './components/Profile';

export const App = () => {
  const users = [
    {
      name: 'Tsunode',
      age: 24,
    },
    {
      name: 'Vilson',
      age: 23,
    },
    {
      name: 'Nicole',
      age: 28,
    },
    {
      name: 'Alex',
      age: 32,
    },
  ]

  function teste() {

  }

  return (
    <div className="App">
      <h1>Usuarios</h1>

      {
        users.map((user, index) => 
          <Profile key={index} name={user.name} age={user.age} onClick={teste}>
            <button>Teste</button>
            <button>Teste 2</button>
          </Profile> 
        )
      }

      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {/* <Profile name='Vilson' age={23} />
      <Profile name='Nicole' age={28} />
      <Profile name='Alex' age={32} /> */}
      
      {/* <div>
        <span>Vilson - 21</span>
      </div>

      <div>
        <span>Nicole - 28</span>
      </div>

      <div>
        <span>Alex - 32</span>
      </div> */}
    </div>
  );
};

// SPA

// tags todas são fechadas
// for => htmlFor
// class => className

// props => atributos da Tag html
// children => conteúdo de Tag