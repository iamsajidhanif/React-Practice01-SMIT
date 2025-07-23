
import './Card.css';

const Card = ({id, title, body }) => {

  return (
    <div className='card element' style={{ overflow: 'hidden'}}>
      <img
        src='https://static4.depositphotos.com/1016929/320/i/450/depositphotos_3201978-stock-photo-post-it-notes.jpg'
        alt='fuit-basket'
        width={345}
      />
      {id}
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Card;


