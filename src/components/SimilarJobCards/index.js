import {FaLocationArrow} from 'react-icons/fa'

import './index.css'

const SimilarJobCards = props => {
  const {obj} = props
  const {companyLogo, empType, title} = obj
  const {jobDescrib, location, rating} = obj

  return (
    <li className="startCard">
      <div className="alignSimilar">
        <img
          src={companyLogo}
          alt="similar job company logo"
          className="logoname"
        />
        <div>
          <h1 className="smiliarTittle">{title}</h1>
          <div className="starCardImg">
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="imgContainerblock">Description</h1>
      <div>
        <p>{jobDescrib}</p>
      </div>
      <div className="jobData">
        <div className="loactionIcon">
          <FaLocationArrow />
          <p> {location}</p>
        </div>

        <p>{empType}</p>
      </div>
    </li>
  )
}

export default SimilarJobCards
