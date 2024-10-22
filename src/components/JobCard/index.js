import {Link} from 'react-router-dom'
import './index.css'

const JobCard = props => {
  const {obj} = props

  const {companyLogoUrl, empType, id, jobDescrip} = obj
  const {location, rating, title} = obj
  return (
    <li className="jobCard">
      <Link to={`/jobs/${id}`} className="link">
        <div className="logoBlock">
          <img
            src={companyLogoUrl}
            className="imgCompanyLogo"
            alt="company logo"
          />
          <div>
            <h1 className="title">{title}</h1>
            <div className="starContainer">
              <img
                className="starImg"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
              />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="locationcon">
          <div className="location">
            <p>{location}</p>
            <p>{empType}</p>
          </div>
          <p>{obj.package}</p>
        </div>
        <hr className="line" />
        <div>
          <h1 className="headdescrip">Description</h1>
          <p className="descriptionPara">{jobDescrip}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobCard
