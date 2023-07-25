import { useContext } from "react";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";

const SignIn = () => {
  // importing utility Functions from contextAPI
  const { signIn } = useContext(AUTH_CONTEXT);

  const handleSignIn = (e) => {
    e.preventDefault();

    // Getting values from the register Form
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-32">
      <div className="container mx-auto text-white">
        <div className="w-full lg:w-2/4 mx-auto px-8">
          <h5 className="animate-gradient-text text-4xl lg:text-7xl text-center capitalize py-8">
            Sign in and Get Started right now!
          </h5>
        </div>
        <form
          onSubmit={handleSignIn}
          className="w-full lg:w-2/4 mx-auto py-12 px-8"
        >
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
          <button className="form_btn">Sign in</button>
          <p className="mt-2">
            Don&apos;t have an account
            <Link to="/register" className="text-blue-500 px-1">
              Register
            </Link>{" "}
            here!
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
