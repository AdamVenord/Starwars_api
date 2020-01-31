import React, { Component } from 'react';
import { Header, Segment, } from 'semantic-ui-react';
import List from './List'
import axios from "axios"

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [], 
    }
    this.getPeople = this.getPeople.bind(this);
  }

  getPeople(){
    return axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results } )
    })
  }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    const {people} = this.state;
    return(
      <>
      <Segment style={{ background: "black", }} >
        <Header 
        as="h1" 
        textAlign="center"
        style={{ background: "grey", align: "center", }}
        >
          StarBros API
        </Header>
        <h3 style={{ color: "grey" }}>
          The StarWars Friends and info app
        </h3>
        </Segment>

        <Segment style={{ background: "navy", }}>
        <List people={people} />

        </Segment>

      </>
    )
  }
}

export default Home;
