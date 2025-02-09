import './index.css';

const Notification = ({ data }) => {

  const { text, type } = data;

  const notificationTypeCls = type === 'success' ? 'success' : 'error'

  return (
    <div className={`notification ${notificationTypeCls}`}>
      {text}
    </div>
  )
}

export default Notification;