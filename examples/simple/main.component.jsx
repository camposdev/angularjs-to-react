const alignCenter = {
  textAlign: 'center'
}
const alignRight = {
  textAlign: 'right'
}

class CounterComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: this.props.initialCounter
    }

    this.changeCount = this.changeCount.bind(this)
  }

  changeCount(type, qtd){
    let curr = this.state.counter
    let calc = type === 'DECREMENT' ? curr - 1 : curr + 1
    this.setState({ counter: calc })
  }

  render(){
    return (
      <div className="row">
        <div className="five columns" style={alignRight}>
          <button onClick={ () => this.changeCount('DECREMENT', 5) }>Decrement</button>
        </div>

        <div className="two columns" style={alignCenter}>
          <h2>{ this.state.counter }</h2>
        </div>

        <div className="five columns">
          <button onClick={ () => this.changeCount('INCREMENT', 5) }>Increment</button>
        </div>
      </div>
    )
  }
}

CounterComponent.propTypes = {
  initialCounter: React.PropTypes.string
}