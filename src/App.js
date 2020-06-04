import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

import image from "./images/image.png";

class App extends React.Component {
  //don't have to include constructor, as JS takes care of it in the background + it's cleaner syntax too
  state = {
    data: {},
    country: "",
  };
  //componentDidMount is a hook that gets invoked right after a component has been mounted, aka after the first render
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      //we put style.container to make sure we don't have inteferance with other CSS files
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
