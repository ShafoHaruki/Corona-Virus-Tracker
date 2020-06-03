import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

// import image from './images/image.png';

class App extends React.Component {
  //don't have to include constructor, as JS takes care of it in the background + it's cleaner syntax too
  state = {
    data: {},
    country: "",
  };
  //componentDidMount is a hook that gets invoked right after a component has been mounted, aka after the first render
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    return (
      //we put style.container to make sure we don't have inteferance with other CSS files
      <div className={styles.container}>
        <h1>App</h1>
        <Cards data={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
