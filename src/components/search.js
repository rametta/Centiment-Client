import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

export default class Search extends Component {
  constructor() {
    super();
    this.state = { input: '' };
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  addStock() {
    this.props.addStock(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-9 col-sm-offset-3">
            <TextField
              hintText="Ex. AAPL"
              fullWidth
              value={this.state.input}
              onChange={e => this.onInputChange(e)}
              underlineStyle={{borderColor: '#283593'}}
              underlineFocusStyle={{borderColor: '#81a9ea'}}
              floatingLabelFocusStyle={{color: '#283593'}}
              floatingLabelText="Enter a Stock Symbol"
            />
          </div>
          <div className="col-xs-2" >
            <FloatingActionButton
              style={{marginTop: '15'}}
              backgroundColor="#283593"
              onTouchTap={() => this.addStock()}>
                <ContentAdd />
            </FloatingActionButton>
          </div>
        </div>
      </div>
    )
  }
}