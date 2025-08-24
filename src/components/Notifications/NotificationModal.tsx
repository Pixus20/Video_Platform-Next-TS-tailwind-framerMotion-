import MyNotifications from "./MyNotifications"

interface NoteProps{
  onClose:()=> void
}

const NotificationModal = ({onClose}:NoteProps) => {
  return (
    <div >
      <MyNotifications  onClose={onClose}/>
    </div>
  )
}

export default NotificationModal