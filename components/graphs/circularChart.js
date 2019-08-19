import React, { Component } from 'react'
import Chart from 'chart.js'
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif'

class CircularChart extends Component {
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
    const { colors, data, type, hoverColors } = this.props

    this.myChart = new Chart(this.canvasRef.current, {
      // type: 'pie',
      // type: 'doughnut',
      // type: 'polarArea',
      type,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            boxWidth: 10
          }
        }
      },
      data: {
        labels: data.map(d => d.label),
        datasets: [{
          data: data.map(d => d.value),
          backgroundColor: colors,
          borderWidth: 1,
          hoverBackgroundColor: hoverColors
        }]
      }
    })
  }

  render () {
    return <canvas ref={this.canvasRef} />
  }
}

export default CircularChart
