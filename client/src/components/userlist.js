import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
		console.log('I was triggered during componentDidMount');
    axios.get('http://localhost:5000/user')
      .then(res => {
				console.log('hi');
				console.log(res);
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
		console.log('I was triggered during render');
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.no_of_users}>{person.no_of_users}</li>
            )
        }
      </ul>
    )
  }
}
