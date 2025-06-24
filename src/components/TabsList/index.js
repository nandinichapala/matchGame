import './index.css'

const TabsList = props => {
  const {tabDetails, onChangeActiveId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickChangeActiveId = () => {
    onChangeActiveId(tabId)
  }
  const extraColors = isActive ? 'tab-btn-border' : ''
  return (
    <>
      <li className="tab-item-container">
        <button
          type="button"
          className={`tab-btn ${extraColors}`}
          onClick={onClickChangeActiveId}
        >
          {displayText}
        </button>
      </li>
    </>
  )
}

export default TabsList
