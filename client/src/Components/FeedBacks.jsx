import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedbacks, deleteFeedback } from '../Slices/FeedBacksSlice';
import FeedBack from './FeedBack';
import '../Styles/FeedBacks.css';

const FeedBacks = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const feedbackStatus = useSelector((state) => state.feedbacks.status);
  const error = useSelector((state) => state.feedbacks.error);

  useEffect(() => {
    if (feedbackStatus === 'idle') {
      dispatch(fetchFeedbacks());
    }
  }, [feedbackStatus, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteFeedback(id));
  }
  return (
    <div className='FeedBacks'>
    {feedbackStatus === 'loading' && <div>Loading...</div>}
    {feedbackStatus === 'failed' && <div>{error}</div>}
    {feedbackStatus === 'succeeded' && 
      feedbacks.map((feedback) => (
        <FeedBack 
          key={feedback.id}
          name={feedback.name}
          comment={feedback.comment}
          image={feedback.image}
          onDelete={() => handleDelete(feedback.id)}
        />
      ))
    }
  </div>
  );
}

export default FeedBacks;
