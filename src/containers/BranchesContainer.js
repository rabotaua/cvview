import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Branch from '../components/Resume/Branch'
import { getBranchesDictionaryAction } from '../actions/dictionaryActions'


const mapStateToProps = (state) => {
	return {
		branches: state.branchesDictionary,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getBranchesDictionaryAction: bindActionCreators(getBranchesDictionaryAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Branch)

