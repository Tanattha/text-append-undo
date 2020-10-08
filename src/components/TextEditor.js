import React from "react";

class TextEditor extends React.Component {
  state = {
    input: "",
    list: [],
  };

  handleonChange = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  handleonSubmit = (e) => {
    e.preventDefault();
    const newInput = this.state.input;
    this.setState({ list: [...this.state.list, newInput], input: "" });
  };

  handleUndo = () => {
    this.setState({
      list: [...this.state.list].slice(0, -1),
    });
  };

  render() {
    const { input, list } = this.state;

    return (
      <React.Fragment>
        <div className="controls">
          <input
            value={input}
            className="word-input"
            type="text"
            data-testid="word-input"
            onChange={this.handleonChange}
          />

          <button
            disabled={!input}
            data-testid="append-button"
            onClick={this.handleonSubmit}
          >
            Append
          </button>
          <button
            data-testid="undo-button"
            disabled={list.length === 0}
            onClick={this.handleUndo}
          >
            Undo
          </button>
        </div>

        <div className="text-field" data-testid="text-field">
          {list.map((obj, index) => (
            <li key={index}>{obj}&nbsp;</li>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
