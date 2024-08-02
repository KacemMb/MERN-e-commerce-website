import React from 'react';
//import Rating from '@material-ui/core/Rating';

const FeedBack = ({ name, comment, image, onDelete }) => {
  return (
    <div className='FeedBack'>
      <div className='F'>
      <div className='Deletebt'>
          <button onClick={onDelete}>X</button>
      </div>
      <div className='profile'>
        <div className='pro'>
          <img src={image} alt='Profile' />
          <h3>{name}</h3>
        </div>
        
      </div>
      </div>
      <div className='Commentaire'>
        <p>{comment}</p>
        {/*<Rating name="size-medium" defaultValue={2} />*/}
      </div>
    </div>
  );
}

export default FeedBack;
