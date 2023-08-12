import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider/AuthProvider";

const SignIn = () => {
  // importing utility Functions from contextAPI
  const { signIn } = useContext(AUTH_CONTEXT);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Getting values from the register Form
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        e.target.reset();
        navigate("/");
        toast.success("Welcome to Rollin Rust");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-32">
      <div className="container mx-auto text-white">
        <div className="w-full lg:w-2/4 mx-auto px-8">
          <h5 className="animate-gradient-text text-4xl lg:text-7xl text-center capitalize font-bold py-8">
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
          <button className="form_btn w-full mt-3 mb-3">Sign in</button>
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
