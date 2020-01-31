import React, { Component } from 'react'
import { Button, Segment } from "semantic-ui-react"

class CharInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false,  
    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open(){
    this.setState({ expanded: !this.state.expanded })
  }

  close(){
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    const info = this.props.charInfo;
    if(!this.state.expanded){
      return <Button onClick={this.open}>Show info</Button>
    }

    return(
      <div>
        <Button color="red" onClick={this.close}>Hide info</Button>
        <Segment>
        <ul>
          <li><h2>Gender: {info.gender}</h2></li>
          <li><h2>Birth Date: {info.birth_year}</h2></li>
          <li><h2>Hair Color: {info.hair_color}</h2></li>
          <li><h2>Height: {info.height}</h2></li>
          <li><h2>Home World: {info.homeworld}</h2></li>
        </ul>
        </Segment>
      </div>
    )
  }
}

export default CharInfo;