import React, { Component } from 'react'
import { getAllRides } from '../services/rides'

class Rides extends Component {

  state = {
    rides: []
	}
	
	async componentDidMount() {
    const data = await getAllRides()
    this.setState({ rides: data })
	}

  render() {
    const { rides } = this.state
    return (
			<div>
        <h2>Rides</h2>
        {rides.map(ride => (
          <li key={ride.id}>
            {ride.origin} - {ride.destiny}
          </li>
        ))}
			</div>
    )
  }
}

export default Rides