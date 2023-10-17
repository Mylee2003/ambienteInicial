import React, { Component } from 'react';
import {} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: null,
      items: [],
    };

    this.setValue = this.setValue.bind(this);
  }

  setOpen(open) {
    this.setState({
      open: !open,
    });
  }

  setValue(callback) {
    this.setState((state) => ({
      value: callback(state.value),
    }));
  }

  setItems(callback) {
    this.setState((state) => ({
      items: callback(state.items),
    }));
  }

  getEvaluations = async () => {
    fetch('https://10.67.168.152:3000/getAllRatings')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          items: data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getEvaluations();
  }

  render() {
    const { open, value, items } = this.state;

    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={this.setOpen}
        setValue={this.setValue}
        setItems={this.setItems}
      />
    );
  }
}
