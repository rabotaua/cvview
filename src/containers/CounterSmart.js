import { connect } from 'react-redux'
import { CounterDummy } from '../components/CounterDummy'

const mapStateToProps = ({counter}) => ({
  counter
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterDummy)
