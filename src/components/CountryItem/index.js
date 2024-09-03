import './index.css'

const CountryItem = props => {
  const {details, onRemove} = props
  const {id, imageUrl, name} = details

  const onClickRemove = () => {
    console.log('Deleted')
    onRemove(id)
  }

  return (
    <li className="country-item">
      <img className="flag" src={imageUrl} alt="thumbnail" />
      <div className="details-container">
        <p>{name}</p>
        <button type="button" onClick={onClickRemove} className="remove-btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem
