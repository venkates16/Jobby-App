import Header from '../Header'
import Jobs from '../Jobs'
import './index.css'

const JobsContainerRoute = () => (
  <>
    <Header />
    <div className="JobsContainer">
      <Jobs />
    </div>
  </>
)

export default JobsContainerRoute
