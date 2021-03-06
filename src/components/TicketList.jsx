import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Potato and Kaley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani and Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app.l :()'
  }

];


function TicketList(){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: blue;
        }
      `}</style>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
