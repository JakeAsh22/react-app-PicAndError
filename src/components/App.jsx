import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import Picture from './Picture';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} /> 
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
      <Picture /> 
    </div>
  );
}
//using exact above helps protect us from accidently loading too many things
export default App;
