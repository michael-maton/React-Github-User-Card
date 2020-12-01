import React from "react";
import Card from "./components/Card";
import fetchUsers from "./services/fetchUsers";
import "./App.css";

class App extends React.Component {
  state = {
    card: [],
    textInput: "",
  };

  componentDidMount() {
    fetchUsers("michael-maton")
      .then((res) => {
        this.setState({
          card: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers(this.state.textInput)
      .then((res) => {
        this.setState({
          card: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.textInput}
            type="text"
            name="search"
            placeholder="enter a username"
          />
          <button>Search</button>
        </form>
        <Card data={this.state.card} />
      </div>
    );
  }
}

export default App;
