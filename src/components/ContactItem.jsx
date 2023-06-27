import TrashIcon from './ui/TrashIcon';

const ContactItem = (props) => {
  return (
    <li>
      <div className='book-item'>
        <div className='book-item-info'>
          <h3>{props.name}</h3>
          <h5>{props.phone}</h5>
        </div>
        <button
          type='button'
          className='delete'
          onClick={() => props.handleDelete(props.phone)}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
