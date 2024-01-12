import React from "react";
import ReactApexChart from 'react-apexcharts';

class Piechart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 150
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      };
    }

    render() {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={400}/>
        </div>
      );
    }
}

export default Piechart;
