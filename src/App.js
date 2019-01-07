import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
//addItem (imported here) is our action creater - returns
//{ type: 'INCREASE_COUNT' }

class App extends Component {

  //returns our action object
  handleOnClick = event => {
    this.props.addItem()
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    addItem: () => {
      dispatch(addItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
