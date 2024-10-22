import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import './index.css'

class Profile extends Component {
  state = {
    apiStatus: 'initial',
    data: '',
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      apiStatus: 'loading',
    })
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/profile', options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const backData = data.profile_details
      const dataCovert = {
        name: backData.name,
        imgUrl: backData.profile_image_url,
        bio: backData.short_bio,
      }
      console.log(dataCovert)
      this.setState({data: dataCovert, apiStatus: 'profileView'})
    } else {
      this.setState({apiStatus: 'retryBtn'})
    }
  }

  renderLoader = () => (
    <div className="loader-container spinnerLoader" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfile = () => {
    const {data} = this.state
    const {name, imgUrl, bio} = data
    console.log(imgUrl)
    return (
      <div className="profileCard">
        <img src={imgUrl} alt="profile" />
        <h1 className="nameProfile">{name}</h1>
        <p className="profileBio">{bio} </p>
      </div>
    )
  }

  retry = () => this.getData()

  renderButton = () => (
    <div className="retryCard">
      <button className="btnRetry" onClick={this.retry}>
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'loading':
        return this.renderLoader()
      case 'profileView':
        return this.renderProfile()

      case 'retryBtn':
        return this.renderButton()

      default:
        return null
    }
  }
}

export default Profile
