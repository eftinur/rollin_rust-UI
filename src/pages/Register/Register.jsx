import { useContext } from "react";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  // importing utility Functions from contextAPI
  const { createUser } = useContext(AUTH_CONTEXT);

  const handleRegister = (e) => {
    e.preventDefault();

    // Getting values from the register Form
    const email = e.target.email.value;
    const password = e.target.password.value;

    // contextAPI FUnction to creating users
    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-32">
      <div className="container mx-auto text-white">
        <div className="w-2/4 mx-auto">
          <h5 className="animate-gradient-text text-6xl text-center uppercase ">
            Register to book our services Now!
          </h5>
        </div>
        <form onSubmit={handleRegister} className="w-2/4 mx-auto py-12 px-8">
          <input
            placeholder="First name"
            className="input"
            name="firstName"
            type="text"
            autoComplete="off"
            required
          />
          <input
            placeholder="Last name"
            className="input"
            name="lastName"
            type="text"
            autoComplete="off"
            required
          />
          <input
            placeholder="Email"
            className="input"
            name="email"
            type="email"
            autoComplete="off"
            required
          />
          <input
            placeholder="Password"
            className="input"
            name="password"
            type="text"
            autoComplete="off"
            required
          />
          {/* Button Goes Here */}
          <button className="form_btn">Register</button>
          <p className="mt-2">
            Already have an account{" "}
            <Link to="/signin" className="text-blue-500">
              Sign-in
            </Link>{" "}
            here!
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
