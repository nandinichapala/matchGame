import './index.css'

const TabItem = props => {
  const {thumbnailDetails,onClickMatchCard} = props
  const {thumbnailUrl, imageUrl} = thumbnailDetails
  const onClickTabItem = () => {
    onClickMatchCard(imageUrl)
  }
  return (
    <>
      <li className="list-item-container">
        <button type="button" className="list-item-btn">
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="thumbnail-image"
            onClick={onClickTabItem}
          />
        </button>
      </li>
    </>
  )
}
export default TabItem
