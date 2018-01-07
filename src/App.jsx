import React, {Component} from 'react';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      title:''
    };
  }
  changeTitle(){
    alert ('title is changed!');
  }

  submitTitleForm(){
    alert ('submitted');
  }
  render(){
    return(
      <div>
        <h1>Todos</h1>
        <form onSubmit={this.submitTitleForm}>
          <input
            name='title'
            type='text'
            placeholder='What needs to be done?'
            onChange={this.changeTitle}
            value={this.state.value}
            />
        </form>
      </div>
    );
  }
}
