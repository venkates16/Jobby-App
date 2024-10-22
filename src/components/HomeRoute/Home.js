import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="homeContainer">
          <div className="homeText">
            <h1 className="headText">Find The Job That fits Your Life</h1>
            <p className="para">
              Millions of people are searching for jobs, salary information,
              company reviews. Find the job that fits your abilities and
              potential.
            </p>
            <div>
              <Link to="/jobs">
                {' '}
                <button type="button" className="findBtn">
                  Find Jobs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
