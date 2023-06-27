import ContactItem from './ContactItem';

const ContactList = (props) => {
  return (
    <ul>
      {props.data.map((value) => {
        return (
          <ContactItem
            key={value.phone}
            name={value.name}
            phone={value.phone}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
