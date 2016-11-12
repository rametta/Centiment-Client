import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: [],
      label: '',
      data: [],
      optionData: {},
      default: {
        labels: [],
        datasets: [
          {
            label: '',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#81a9ea',
            borderColor: '#283593',
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#4185f2',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#4185f2',
            pointHoverBorderColor: '#283593',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
          }
        ]
      }
    }
    
    };

    componentWillMount() {
      const { quote } = this.props.data;

      let a = {};
      let label = quote[0].Symbol.toUpperCase();
      let labels = [];
      let data = [];

      quote.forEach(stock => {
        labels.unshift(stock.Date);
        data.unshift(stock.Close);
      });

      Object.assign(a, this.state.default);

      a.labels = labels;
      a.datasets[0].data = data;
      a.datasets[0].label = label;
      
      this.setState({optionData: a});
    }

  render() {
    return <Line data={this.state.optionData} />
  }
}