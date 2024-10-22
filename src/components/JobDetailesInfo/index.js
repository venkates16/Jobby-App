import {BsArrowUpRight} from 'react-icons/bs'
import './index.css'

const JobDetailesInfo = props => {
  const {skillsData, jobDetailes, dataLifeCompany, basicJobInfo} = props

  const skillsDiplay = () => (
    <div className="skillCard">
      <h1>Skills</h1>
      <ul className="imgSkills">
        {skillsData.map(each => (
          <li key={each.name} className="listItem">
            <img className="imgItems" src={each.imgLogo} alt={each.name} />
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  const lifeAtCompany = () => {
    const {disscrip, imgSrc} = dataLifeCompany
    return (
      <div className="lifeCard">
        <div>
          {' '}
          <h1 className="lifeInfoText">Life at Company</h1>
          <p className="textConetent">{disscrip}</p>
        </div>
        <div>
          <img src={imgSrc} className="imglife" />
        </div>
      </div>
    )
  }

  const dataDetailes = () => {
    const {compyLogo, compayWebsite, empType, id, jobDescript} = jobDetailes
    const {title, rating, location, packaginfo} = basicJobInfo
    return (
      <div>
        <div className="imgContainer">
          <img
            src={compyLogo}
            alt="job details company logo"
            className="logoImgInfo"
          />
          <div>
            <h1 className="titleInfo">{title}</h1>
            <div className="imgStar">
              {' '}
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
              />
              <p>{rating}</p>
              <p>rating</p>
            </div>
          </div>
        </div>

        <div className="jobType">
          <div className="intern">
            <p>{location}</p>
            <p>{empType}</p>
          </div>
          <p>{packaginfo}</p>
        </div>
        <hr className="line" />
        <div>
          <div className="descripPart">
            <h1 className="textDescrip"> Description</h1>
            <div className="linkCard">
              {' '}
              <a href={compayWebsite} className="visit">
                Visit
              </a>
              <a href={compayWebsite}>
                {' '}
                <BsArrowUpRight />
              </a>
            </div>
          </div>
          <p className="decriptionText">{jobDescript}</p>
        </div>

        {skillsDiplay()}
        {lifeAtCompany()}
      </div>
    )
  }

  return <div className="dataJob">{dataDetailes()}</div>
}

export default JobDetailesInfo
