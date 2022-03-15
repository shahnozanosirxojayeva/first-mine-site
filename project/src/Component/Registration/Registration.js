import React, { useContext,  useState, useEffect } from "react";
import "./registration.css";
import { ThemeContext } from "../../Context";

function getFormValue() {
  const storedValue = localStorage.getItem("form");
  if (!storedValue) {
    return { username: "", email: "", password: "" };
  }
  return JSON.parse(storedValue);
}
function Test(props) {
  const [initialValue, setInitialValue] = useState(getFormValue);
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { theme } = useContext(ThemeContext);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formValue));
  }, [formValue]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className={`${theme} registration-page`}>
      <form onSubmit={handleSubmit}  className={`${theme} registration-card`} >
        <h2>Registration</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          officia totam aliquid quisquam iusto unde, nihil neque quidem,
          consectetur repudiandae recusandae quam laboriosam cupiditate ratione!
        </p>
        <div className="ul-form">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="text-success fw-bold"> Signed Succesfully </div>
          ) : (
            <pre></pre>
          )}

          <div className="my-2">
            <label className="label">Username</label> <br />
            <input
              className="reg-input"
              type="text"
              name="username"
              placeholder="Username"
              value={formValue.username}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger my-1"> {formErrors.username} </p>
          <div className="my-2">
            <label className="label">Email</label> <br />
            <input
              className="reg-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger my-1"> {formErrors.email} </p>
          <div className="my-2">
            <label className="label">Password</label> <br />
            <input
              className="reg-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formValue.password}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger my-1"> {formErrors.password} </p>
          <button className={`${theme} reg-btn`}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

const Registration = () => {


  return (
    <>
      <ThemeContext.Consumer>
        {(ctx) => <Test ctx={ctx} />}
      </ThemeContext.Consumer>
    </>
  );
};

export default Registration;


