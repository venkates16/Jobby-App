import './index.css'
import SimilarJobCards from '../SimilarJobCards'

const SimilarJobsContainer = props => {
  const {similarData} = props
  console.log(props)

  return (
    <div className="similarInfoJobs">
      <h1>Similar Jobs</h1>
      <ul className="listOfCards">
        {similarData.map(each => (
          <SimilarJobCards key={each.id} obj={each} />
        ))}
      </ul>
    </div>
  )
}

export default SimilarJobsContainer
