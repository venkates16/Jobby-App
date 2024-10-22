import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import JobDetailesInfo from '../JobDetailesInfo'
import SimilarJobsContainer from '../SimilarJobsContainer'
import './index.css'

class JobsDetailesRoute extends Component {
  state = {
    apiStatus: 'inital',
  }

  componentDidMount() {
    this.getDetailesJob()
  }

  getDetailesJob = async () => {
    this.setState({apiStatus: 'loaderView'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const getcookies = Cookies.get('jwt_token')
    console.log(id)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getcookies}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/jobs/${id}`, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const jobDetailesAccess = data.job_details
      const jobDetailes = {
        compyLogo: jobDetailesAccess.company_logo_url,
        compayWebsite: jobDetailesAccess.company_website_url,
        empType: jobDetailesAccess.employment_type,
        id: jobDetailesAccess.id,
        jobDescript: jobDetailesAccess.job_description,
      }

      const basicJobInfo = {
        title: jobDetailesAccess.title,
        packaginfo: jobDetailesAccess.package_per_annum,
        rating: jobDetailesAccess.rating,
        location: jobDetailesAccess.location,
      }
      console.log(basicJobInfo)

      const skillsData = jobDetailesAccess.skills.map(each => ({
        imgLogo: each.image_url,
        name: each.name,
      }))

      //   console.log(skillsData)

      const lifeAtConpany = jobDetailesAccess.life_at_company
      const dataLifeCompany = {
        disscrip: lifeAtConpany.description,
        imgSrc: lifeAtConpany.image_url,
        loaction: lifeAtConpany.location,
        raing: lifeAtConpany.rating,
      }
      const accesData = data.similar_jobs

      const similarData = accesData.map(each => ({
        companyLogo: each.company_logo_url,
        empType: each.employment_type,
        id: each.id,
        jobDescrib: each.job_description,
        location: each.location,
        rating: each.rating,
        title: each.title,
      }))

      this.setState({
        apiStatus: 'diplayData',
        similarData,
        skillsData,
        dataLifeCompany,
        jobDetailes,
        basicJobInfo,
      })
    } else {
      this.setState({apiStatus: 'error'})
    }
  }

  loaderRender = () => (
    <div className="loader-container spinnerLoader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  displayData = () => {
    const {
      similarData,
      skillsData,
      jobDetailes,
      dataLifeCompany,
      basicJobInfo,
    } = this.state
    //   console.log(similarData)
    return (
      <div className="totalSection">
        <div className="jobdetailes">
          <div>
            <JobDetailesInfo
              skillsData={skillsData}
              jobDetailes={jobDetailes}
              dataLifeCompany={dataLifeCompany}
              basicJobInfo={basicJobInfo}
            />
          </div>
          <div>
            <SimilarJobsContainer similarData={similarData} />
          </div>
        </div>
      </div>
    )
  }

  errorView = () => (
    <div className="alignErrorSimilar">
      <div className="errorMsg">
        {' '}
        <div>
          <img
            className="imgError"
            src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
            alt="failure view"
          />
        </div>
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <div className="align Btn">
          <button
            type="button"
            className="RetryBtn"
            onClick={this.getDetailesJob}
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  )

  renderSimilarJobs = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'loaderView':
        return this.loaderRender()
      case 'diplayData':
        return this.displayData()
      case 'error':
        return this.errorView()

      default:
        return null
    }
  }

  render() {
    const returedView = this.renderSimilarJobs()
    return (
      <>
        <Header />
        <div className="SimilarContainer">
          <div>{returedView}</div>
        </div>
      </>
    )
  }
}

export default JobsDetailesRoute
