import React, { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    description: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleChange = (event:any) => {
    const { name, value } = event.target;

    let isValid = true;
    let errorMessage = '';

    switch (name) {
      case 'name':
        isValid = validateName(value);
        errorMessage = isValid ? '' : 'Invalid name';
        break;
      case 'number':
        isValid = validateNumber(value);
        errorMessage = isValid ? '' : 'please enter a valid number';
        break;
      case 'email':
        isValid = validateEmail(value);
        errorMessage = isValid ? '' : 'please enter a valid email address';
        break;
      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const isNameValid = validateName(formData.name);
    const isNumberValid = validateNumber(formData.number);
    const isEmailValid = validateEmail(formData.email);

    if (isNameValid && isNumberValid && isEmailValid) {
      // Your fetch logic remains the same
      console.log('Form submitted:', formData);
      try {
        const response = await fetch('http://localhost:40700/api/userData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Post created successfully:', data);
        } else {
          console.error('Error creating post:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating post:', error);
      }
    } else {
      console.error('Form validation failed. Please check your inputs.');
    }
  };

  const validateName = (value:any) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(value);
  };

  const validateNumber = (value:any) => {
    const regex = /^[0-9]*$/;
    return  (regex.test(value) && value.length === 10);
  };
  
  const validateEmail = (value:any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(value)){
      return true
    } else {
      return false;
    }
  };


  return (
    <div className='formcontainer'>
     <div className="form-container">
     <div className='heading'>Please submit the details !</div>
      <div className="form-group">
        <input  type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required placeholder=" " id="lastname" />
                        <label >Name *</label>
            <div className="error">{formErrors.name}</div>
      </div>
      <div className="form-group">
        <input             type="email"
                name="email"
                value={formData.email}
                      onChange={handleChange}
                  required  placeholder=" " id="inputField" />
          <label >Email Address *</label>
          <div className="error">{formErrors.email}</div>
        </div>
        <div className="form-group">
          <input   type="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required placeholder=" " id="number" />
          <label >Phone *</label>
          <div className="error">{formErrors.number}</div>
        </div>
        <div className="form-group">
          <input   type="text"
                  name="number"
                  value={formData.description}
                  onChange={handleChange}
                  required placeholder=" "  />
          <label >Which course are you interested in ? (optional)</label>
        </div>
        <button className="submit-button" type="submit" onSubmit={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
