import React from 'react';

import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();

    this.renderInventory = this.renderInventory.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.state = {
      uid: null,
      owner: null,
    }
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    };

    this.props.updateFish(key, updatedFish)
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
        <button className="facebook" onClick={() => this.authenticate('facebook')}>Log In with Facebook</button>
        <button className="twitter" onClick={() => this.authenticate('twitter')}>Log In with Twitter</button>
      </nav>
    )
  }
  renderInventory(key) {
    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          name="name"
          value={fish.name}
          placeholder="Fish Name"
          onChange={(e) => this.handleChange(e, key)}/>
        <input
          type="text"
          name="price"
          value={fish.price}
          placeholder="Fish Price"
          onChange={(e) => this.handleChange(e, key)}/>
        <select
          type="text"
          name="status"
          value={fish.status}
          placeholder="Fish Status"
          onChange={(e) => this.handleChange(e, key)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          value={fish.desc}
          placeholder="Fish Desc"
          onChange={(e) => this.handleChange(e, key)}></textarea>
        <input
          type="text"
          name="image"
          value={fish.image}
          placeholder="Fish Image"
          onChange={(e) => this.handleChange(e, key)}/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}


Inventory.PropTypes = {
  addFish     : React.PropTypes.func.isRequired,
  removeFish  : React.PropTypes.func.isRequired,
  updateFish  : React.PropTypes.func.isRequired,
  loadSamples : React.PropTypes.func.isRequired,
  fished      : React.PropTypes.object.isRequired,
}

export default Inventory;
