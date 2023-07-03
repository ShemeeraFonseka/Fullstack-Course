const Deleted = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='deleteMessage'>
        {message}
      </div>
    )
  }
  export default Deleted;