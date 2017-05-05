import authHoc from '../components/authHoc'
import UnAuth from '../components/AuthExample/UnAuth'
import Logged from '../components/AuthExample/Logged'

export default authHoc(Logged)(UnAuth)
