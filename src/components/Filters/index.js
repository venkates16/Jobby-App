import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const Filters = props => {
  const {changeSalaryRange, changeEmplementType} = props
  // console.log(changeSalaryRange)
  return (
    <div className="halfView">
      <hr />
      <div className="checkboxCard">
        {employmentTypesList.map(each => (
          <div key={each.employmentTypeId} className="alignFilers">
            <input
              type="checkbox"
              id="label"
              className="inputCheckbox"
              onClick={() => {
                changeEmplementType(each.employmentTypeId)
              }}
            />
            <label htmlFor="label" className="inputLabel">
              {each.label}
            </label>
          </div>
        ))}
      </div>
      <hr />
      <div className="radioCard">
        {salaryRangesList.map(each => (
          <div key={each.salaryRangeId} className="alignFilers">
            <input
              type="radio"
              name="slaryRange"
              id={each.salaryRangeId}
              onClick={() => {
                changeSalaryRange(each.salaryRangeId)
              }}
              className="inputCheckbox"
            />
            <label htmlFor={each.salaryRangeId} className="inputLabel">
              {each.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
