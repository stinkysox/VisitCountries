import './index.css'

const SelectOption = props => {
  const {details, onVisitClicked, onAddCountry} = props
  const {id, name, isVisited} = details
  const onVisitBtn = () => {
    console.log('visited')
    onVisitClicked(id)
    onAddCountry(details)
  }
  return (
    <li className="list-item">
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={onVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default SelectOption
