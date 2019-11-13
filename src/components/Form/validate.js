const validate = values => { 
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if(!/[а-яёА-ЯЁ]{2,50}/i.test(values.firstName)) {
      errors.firstName = "The Field must consists from 2 to 50 Cyrillic symbols";
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if(!/[а-яёА-ЯЁ]{2,50}/i.test(values.lastName)) {
      errors.lastName = "The Field must consists from 2 to 50 Cyrillic symbols";
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.userId) {
      errors.userId = 'Required';
    } else if (!/[a-zA-Z_]{5,30}/i.test(values.userId)) {
      errors.userId = "The field must consists from 5 to 30 latin symbols";
    }

    if (!values.country) {
      errors.country = 'Required';
    }

    if (!values.stateCountry) {
      errors.stateCountry = 'Required';
    } 

    if (!values.city) {
      errors.city = 'Required';
    } 

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required';
    } else if (!/(44|50|56|63|66|67|68|73|91|92|93|94|95|96|97|98|99){1}-[\d]{3}-[\d]{2}-[\d]{2}/i.test(values.phoneNumber)) {
      errors.phoneNumber = "Please enter valid ukrainian phone number";
    }

    if (values.referenceCode && !/[a-zA-Z0-9]{10}/i.test(values.referenceCode)) {
      errors.referenceCode = "The field must consists of 10 latin symbols. Field isn't required";
    }
    
    return errors;
  }
  
  export default validate; 