import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", tasks: ["Buy milk", "Have dinner"] };
  }

  handleChange = e => this.setState({ input: e.target.value });

  handleSubmit = e => {
    const inputWithNoSpaces = this.state.input.trim();
    if ((e.key === "Enter" || e.type === "click") && inputWithNoSpaces !== "") {
      this.state.tasks.push(this.state.input);
      this.setState({ tasks: this.state.tasks });
    }
  };

  render() {
    const taskItems = this.state.tasks.map(task => <Task taskName={task} />);

    return (
      <React.Fragment>
        <ul>{taskItems}</ul>
        <div>
          <Form onChange={this.handleChange} onKeyDown={this.handleSubmit} />
          <SubmitButton onClick={this.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false, isDeleted: false };
  }

  handleClick = e => {
    if (e.target.className !== "delButton") {
      this.setState({ isChecked: !this.state.isChecked });
    }
  };

  handleDelete = () => {
    this.setState({ isDeleted: !this.state.isDeleted });
  };

  render() {
    const taskDeleted = this.state.isDeleted;
    const taskDone = this.state.isChecked;
    return (
      !taskDeleted && (
        <li onClick={this.handleClick}>
          <span className={taskDone ? "checked" : "unchecked"}>
            {this.props.taskName}
          </span>
          <button className="delButton" onClick={this.handleDelete} />
        </li>
      )
    );
  }
}

const Form = ({ onKeyDown, onChange }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder=">> Add Task"
      onKeyDown={onKeyDown}
    />
  );
};

const SubmitButton = ({ onClick }) => {
  return <button type="submit" onClick={onClick} className="submitButton" />;
};

export default App;
