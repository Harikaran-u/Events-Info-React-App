import './index.css'

const EventItem = props => {
  const {event, showDetailedView} = props
  const {imageUrl, name, location, registrationStatus} = event

  const sendInfo = () => {
    showDetailedView(registrationStatus)
  }

  const eventItems = (
    <li className="list-items">
      <button type="button" onClick={sendInfo}>
        <img src={imageUrl} alt="event" className="event-img-style" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
  return eventItems
}

export default EventItem
