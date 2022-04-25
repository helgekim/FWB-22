function Message({message}) {

  const success = {
  color: 'green',
  background: 'lightgrey',
  'font-size': '20px',
  'border-style': 'solid',
  'border-radius': '5px',
  padding: '10px',
  'margin-bottom': '10px'
  }

  const fail = {
  color: 'red',
  background: 'lightgrey',
  'font-size': '20px',
  'border-style': 'solid',
  'border-radius': '5px',
  padding: '10px',
  'margin-bottom': '10px'}

  if (message.statusID === 1) {
    return(
      <div style={success}>
        {message.status}
      </div>
    )
  } else if (message.statusID === 2) {
    return (
      <div style={fail}>
        {message.status}
      </div>
    )
  }
  return null
}

export default Message;
