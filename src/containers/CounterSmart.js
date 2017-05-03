import { connect } from 'react-redux'
import { CounterDummy } from '../components/CounterDummy'
import { bindActionCreators } from 'redux'
import { counterDecrement, counterIncrement } from '../actions/counterActions'

const mapStateToProps = ({counter}) => ({
  counter
})

const mapDispatchToProps = (dispatch) => ({
  counterIncrement: bindActionCreators(counterIncrement, dispatch),
  counterDecrement: bindActionCreators(counterDecrement, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterDummy)
