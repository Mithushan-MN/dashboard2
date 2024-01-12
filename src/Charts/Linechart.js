import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Linechart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Series 1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      options: {
        chart: {
          type: 'line',
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
          ],
        },
        
      },
    };
  }

  render() {
    return (
      <div>
        <h4>Basic Line Chart</h4>
        <div id="line-chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={300}
            width={450}
          />
        </div>
      </div>
    );
  }
}

export default Linechart;
