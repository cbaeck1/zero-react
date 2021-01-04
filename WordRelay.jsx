const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'What?',
      value: '',
      result: '',
    };
  };
  
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  };

  onChange = (ev) => {this.setState({ value: ev.target.value })};
  
  input;  // this.input을 생성
  onRefInput = (c) => { this.input = c; };
  
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
        <input
          ref={this.onRefInput}
          value={this.state.value}
          onChange={this.onChange}
        />
        <button>확인!</button>
      </form>
      <div id="result">{this.state.result}</div>        
      </>
    );
  }
}

module.exports = WordRelay;
