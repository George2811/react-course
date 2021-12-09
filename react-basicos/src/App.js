import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import NewComponent from './components/NewComponent';
import Properties from './components/Properties';
import State from './components/State';
import ConditionalRender from './components/ConditionalRender';
import ElementsRender from './components/ElementsRender';
import {EventsEs6, EventsEs7, MoreAboutEvents} from './components/Events';
import Father from './components/ComponentsCommunication';
import Lifecycle from './components/Lifecycle';
import AjaxApis from './components/AjaxApis';
import HooksCounter from './components/HooksCounter';
import ScrollHooks from './components/ScrollHooks';
import WatchHooks from './components/WatchHooks';
import AjaxHooks from './components/AjaxHooks';
import CustomHooks from './components/CustomHooks';
import References from './components/References';
import Forms from './components/Forms';
import Styles from './components/Styles';
import StyledComponents from './components/StyledComponents';

function App() {
  let name = 'George';
  let seasons = ['Summer', 'Winter', 'Spring', 'Autumn']

  return (
    <div className="App">
      <header className="App-header">

        <section>
        <img src={logo} className="App-logo" alt="logo" />        
        <p>
          First React App :), by {name}
        </p>
        <h2>
          Seasons
        </h2>
        <ul>
          {seasons.map((el,index) => 
          <li key={index}>{el}</li>
          )}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>

        <section>        
          <NewComponent msg="Hi, I´m a Expressed Functional Component with props"/>
          <hr/>
          <Properties
          msg="Hi, this is the Properties Component"
          num={19}
          booleano={true}
          arr={[1,2,3]}
          obj={{name: 'George', email:'jsanv.dev@gmail.com', age:19}}
          function={(num) => num*num}
          reactElement={<i>This is an react element</i>}
          reactComponent={<NewComponent msg="I´m a component as a Prop"/>}
          />
          <hr/>
          <State/>
          <hr/>
          <ConditionalRender/>
          <hr/>
          <ElementsRender/>
          <hr/>
          <EventsEs6 />
          <hr/>
          <EventsEs7 />
          <hr/>
          <MoreAboutEvents />
          <hr/>
          <Father />
          <hr/>
          <Lifecycle />
          <hr/>
          <AjaxApis />
          <hr/>
          <HooksCounter />
          <hr/>
          <ScrollHooks />
          <hr/>
          <WatchHooks />
          <hr/>
          <AjaxHooks />
          <hr/>
          <CustomHooks />
          <hr/>
          <References />
          <hr/>
          <Forms />
          <br />
          <hr/>
          <Styles />
          <br />
          <br />          
          <hr/>
          <StyledComponents />
        </section>      

      </header>      
    </div>
  );
}

export default App;
