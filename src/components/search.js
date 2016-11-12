import React, { Component } from 'react';
import Axios from 'axios';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

const YAHOO = 'https://query.yahooapis.com/v1/public/yql?q=';
const YAHOO_END = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
const SERVER = 'https://shrouded-sands-52424.herokuapp.com/twitter?q=';

export default class Search extends Component {
  constructor() {
    super();
    this.state = { input: '' };
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  fetchData(ticker) {
    const historical = `${YAHOO}${encodeURI("select * from yahoo.finance.historicaldata where symbol = '" + ticker + "' and startDate = '" + this.getLastYear() + "' and endDate = '" + this.getToday()  + "'")}${YAHOO_END}`;

    // call 1 to yahoo for historical data
    Axios.get(historical)
      .then(res => {

        // call 2 to our server for sentiment and tweets
        Axios.get(`${SERVER}${ticker}`)
          .then(res2 => {
            // props is located in analysisPage.js
            this.props.addStock(Object.assign(res.data.query.results, res2)); 
            this.setState({ input: '' });
          })
          .catch(err2 => console.log('ERROR2:', err2))

      })
      .catch(err => console.log('ERROR:',err))
  }

  getToday() {
    const t = new Date();
    return `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`;
  }
  
  getLastYear() {
    const t = new Date();
    return `${t.getFullYear()-1}-${t.getMonth()+1}-${t.getDate()}`;
  }

  addStock() {
    this.fetchData(this.state.input);
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
              style={{marginTop: 15}}
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