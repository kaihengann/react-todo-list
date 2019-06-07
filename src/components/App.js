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
      this.setState({ tasks: this.state.tasks });
    }
  };

  render() {
    const taskItems = this.state.tasks.map(task => (<Task taskName={task} /> ));

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

// upgrade Task to class
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false, isDeleted: false };
  }

  handleClick = (e) => {
    if (e.target.className !== 'delButton') {
      this.setState({ isChecked: !this.state.isChecked })
    }
  };

  handleDelete = e => {
    this.setState({ isDeleted: !this.state.isDeleted })
  }

  render() {
    if (this.state.isDeleted) {
      return null;
    } else if (!this.state.isChecked) {
      return (
      <li onClick={this.handleClick}>
        <span className='unchecked'>{this.props.taskName}</span>
        <button className="delButton" onClick={this.handleDelete}/>
      </li >
    )}
    return (
      <li onClick={this.handleClick}>
        <span className='checked'>{this.props.taskName}</span>
        <button className="delButton" />
      </li >
    )
    }
}


// const Task = ({ taskName, onClick }) => {
//   return (
//     <li>
//       <span onClick={onClick}>{taskName}</span>
//       <button className="delButton" />
//     </li>
//   );
// };

const Form = ({ onKeyDown, onChange }) => {
  return <input type="text" onChange={onChange} placeholder=">> Add Task" onKeyDown={onKeyDown} />;
};

const SubmitButton = ({ onClick }) => {
  return <button type="submit" onClick={onClick} className="submitButton" />;
};

export default App;
