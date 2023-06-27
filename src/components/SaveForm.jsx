import SaveIcon from './ui/SaveIcon';

const SaveForm = (props) => {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <input
        type='text'
        name='name'
        id='name-input'
        placeholder='name..'
        onChange={props.handleChange}
        value={props.formData.name}
      />
      <input
        type='tel'
        name='phone'
        id='phone-input'
        placeholder='phone...'
        onChange={props.handleChange}
        value={props.formData.phone}
      />
      <button type='submit' id='form-submit'>
        <SaveIcon />
      </button>
    </form>
  );
};

export default SaveForm;
