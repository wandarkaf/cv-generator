import React, { Component } from 'react'
import Chart from 'chart.js'
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif'

class BarChart extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidUpdate () {
    this.myChart.data.labels = this.props.data.map(d => d.label)
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value)
    this.myChart.update()
  }

  componentDidMount () {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      options: {
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100
              }
            }
          ]
        }
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.value),
          backgroundColor: this.props.color
        }]
      }
    })
  }

  render () {
    return <canvas ref={this.canvasRef} />
  }
}

export default BarChart

// call example
// <BarChart
// data={data[2].data}
// title={data[2].title}
// color='#2F7443'
// />
