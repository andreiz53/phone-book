import Header from "./components/Header";
import SaveForm from "./components/SaveForm";
import { useEffect, useState } from 'react';
import ContactList from "./components/ContactList";


function App() {

  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("data"));
    if (storage) {
      setContactData(storage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(contactData));
  }, [contactData]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(formData).some(res => res === "")) {
      setContactData((prev) => ([
        ...prev,
        formData
      ]));
      setFormData({
        name: "",
        phone: ""
      });
    }

  }
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleDelete = (key) => {
    setContactData((prev) => (
      prev.filter((item) => item.phone !== key)
    ))
  }


  return (
    <div id="page-container">

      <div className="container">
        <div className="book-header">
          <Header />
        </div>
        <div className="book-main">
          {
            contactData.length ? <ContactList data={contactData} handleDelete={handleDelete} /> : <p>No entries found. Add one now</p>
          }

        </div>
        <div className="book-footer">
          <SaveForm handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
