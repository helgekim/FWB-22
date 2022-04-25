function Message({message}) {

  if (message.statusID === 1) {
    return(
      <div>
        {message.status}
      </div>
    )
  } else if (message.statusID === 2) {
    return (
      <div>
        {message.status}
      </div>
    )
  }
  return null
}

export default Message;
