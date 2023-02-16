import { useFormik } from 'formik';
import  apiRequests from "./apiRequests.js"

const validate = (values, props ) => {
  const errors = {};
  if(!values.firstName || values.firstName.length < 2){
    errors.firstName = "Invalid Name " 
  }

  if(!values.lastName || values.lastName.length < 2){
    errors.lastName = "Invalid Name " 
  }

  if(!values.about){
    errors.about = "Required " 
  }
  

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'; 
  }

  return errors;
};


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      about:'',
      email: '',
      mobile:'',

    },
    validate : validate,
    onSubmit: values => {

       apiRequests('POST', "register", values)

    },
  });
  return (

    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
    
        value={formik.values.firstName}
      />
      {
          formik.errors.firstName && <div style={{color :"red"}}>  {formik.errors.firstName}</div>
        }

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
          {
          formik.errors.lastName && <div style={{color :"red"}}>  {formik.errors.lastName}</div>
        }
      <label> ჩემ შესახებ </label>
      <input
        id="about"
        name="about"
        type="about"
        onChange={formik.handleChange}
        value={formik.values.about}
      />
       {
          formik.errors.about && <div style={{color :"red"}}>  {formik.errors.about}</div>
        }
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {
          formik.errors.email && <div style={{color :"red"}}>  {formik.errors.email}</div>
        }
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;


