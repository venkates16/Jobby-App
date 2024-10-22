import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Profile from '../Profile'
import SerachBar from '../SerachBar'
import Filters from '../Filters'
import JobCard from '../JobCard'

import './index.css'

class Jobs extends Component {
  state = {
    apiStatus: 'inital',
    renderData: '',
    changeEmptype: 'FULLTIME',
    changeSalaryType: '',
    btnClickSearch: '',
    inputSearch: '',
  }

  componentDidMount() {
    this.renderJobData()
  }

  renderJobData = async () => {
    const getToken = Cookies.get('jwt_token')
    this.setState({apiStatus: 'loading'})
    const options = {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
      method: 'GET',
    }
    const {btnClickSearch, changeEmptype, changeSalaryType} = this.state
    console.log(btnClickSearch)
    const response = await fetch(
      `https://apis.ccbp.in/jobs?employment_type=${changeEmptype},${changeEmptype}&minimum_package=${changeSalaryType}&search=${btnClickSearch}`,
      options,
    )
    if (response.ok) {
      const data = await response.json()
      const access = data.jobs
      let count = 0

      const convertForm = access.map(each => {
        const newItem = {
          companyLogoUrl: each.company_logo_url,
          empType: each.employment_type,
          id: each.id,
          uniqueNo: count,
          jobDescrip: each.job_description,
          location: each.location,
          package: each.package_per_annum,
          rating: each.rating,
          title: each.title,
        }
        //    console.log(each.company_logo_url)
        count += 1
        return newItem
      })

      console.log(convertForm)

      this.setState({apiStatus: 'jobsview', renderData: convertForm})
    } else {
      this.setState({apiStatus: 'error'})
    }
  }

  loaderView = () => (
    <div className="loader-container spinnerLoader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  jobsData = () => {
    const {renderData} = this.state

    const viewData =
      renderData.length === 0 ? (
        <div className="alignError">
          <div>
            {' '}
            <img
              className="imgError"
              src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png "
              alt="no jobs"
            />
          </div>
          <h1>No Jobs Found</h1>
          <p>we could not found any jobs.try other filters</p>
        </div>
      ) : (
        <div>
          <ul>
            {renderData.map(each => (
              <JobCard obj={each} key={each.uniqueNo} />
            ))}
          </ul>
        </div>
      )
    return viewData
  }

  errorView = () => (
    <div className="alignError">
      <div>
        <img
          className="imgError"
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
      </div>
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <div className="alignBtn">
        <button type="button" className="RetryBtn" onClick={this.renderJobData}>
          Retry
        </button>
      </div>
    </div>
  )

  renderJobsStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'loading':
        return this.loaderView()
      case 'jobsview':
        return this.jobsData()
      case 'error':
        return this.errorView()

      case 'inital':
        return 'notound' // I place generally this case
      default:
        return 'Notfound'
    }
  }

  changeEmplementType = id => {
    this.setState(
      {
        changeEmptype: id,
      },
      this.renderJobData,
    )
  }

  changeSalaryRange = id => {
    console.log(id)
    this.setState(
      {
        changeSalaryType: id,
      },
      this.renderJobData,
    )
  }

  changeSearch = event => {
    console.log(event.target.value)
    this.setState({
      inputSearch: event.target.value,
    })
  }

  buttonClickSearch = () => {
    const {inputSearch} = this.state
    this.setState(
      {
        btnClickSearch: inputSearch,
      },
      this.renderJobData,
    )
  }

  render() {
    const data = this.renderJobsStatus()
    return (
      <div className="jobsections">
        <div className="searchSideBar">
          <div className="smDevices">
            <SerachBar
              changeSearch={this.changeSearch}
              buttonClickSearch={this.buttonClickSearch}
            />
          </div>
          <Profile />
          <Filters
            changeEmplementType={this.changeEmplementType}
            changeSalaryRange={this.changeSalaryRange}
          />
        </div>
        <div className="rightJobs">
          <div className="lgDevices">
            <SerachBar
              changeSearch={this.changeSearch}
              buttonClickSearch={this.buttonClickSearch}
            />
          </div>
          <div className="jobsListCompanys">{data}</div>
        </div>
      </div>
    )
  }
}

export default Jobs
