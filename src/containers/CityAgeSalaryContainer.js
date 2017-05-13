import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CityAgeSalary from '../components/Resume/CityAgeSalary'
import { getCitiesDictionaryAction } from '../actions/dictionaryActions'


const mapStateToProps = (state) => {
	return {
		cities: state.citiesDictionary,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCitiesDictionaryAction: bindActionCreators(getCitiesDictionaryAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CityAgeSalary)

