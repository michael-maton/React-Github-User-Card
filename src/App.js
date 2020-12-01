import React from "react";
import axios from "axios";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  state = {
    card: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/michael-maton")
      .then((res) => {
        console.log(res);
        this.setState({
          card: res.data
        });
        console.log("Card: ", this.state.card)
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <Card data={this.state.card}/>
      </div>
    );
  }
}

export default App;
