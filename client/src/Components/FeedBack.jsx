import React from 'react'
//import Rating from '@material-ui/core/Rating'
const FeedBack = () => {
  return (
    <div className='FeedBack'>
    <div className='profile'>
        <img src='../Images/Profile.png'/>
        <h3>Eya Zneidia</h3>
        
    </div>
    <div className='Commentaire'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime possimus excepturi nostrum, natus iure ratione nobis, eveniet eos iste repellat commodi ducimus sed voluptatum ipsum sapiente dolorem tempore praesentium cupiditate!</p>
      {/*<Rating name="size-medium" defaultValue={2} />*/}
    </div>
  </div>
  )
}

export default FeedBack
