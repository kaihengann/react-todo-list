import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", tasks: ["Buy milk", "Have dinner"] };
  }

  handleChange = e => this.setState({ input: e.target.value });

  handleSubmit = e => {
    if (e.key === "Enter" || e.type === "click") {
      this.state.tasks.push(this.state.input);
    }
  };

  render() {
    const tasks = this.state.tasks.map(task => (<Task taskName={task} /> ));

    return (
      <React.Fragment>
        <ul>
          {tasks}
        </ul>
        <div>
          <Form onChange={this.handleChange} onKeyDown={this.handleSubmit} />
          <SubmitButton onClick={this.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

const Task = ({ taskName }) => {
  return (
    <li>
      <span>{taskName}</span>
      <button className="delButton" />
    </li>
  );
};

const Form = ({ onKeyDown, onChange }) => {
  return <input type="text" onChange={onChange} placeholder=">> Add Task" onKeyDown={onKeyDown} />;
};

const SubmitButton = ({ onClick }) => {
  return <button type="submit" onClick={onClick} className="submitButton" />;
};

// Task -> taskname, delbutton
// Form
// Submit button

export default App;
