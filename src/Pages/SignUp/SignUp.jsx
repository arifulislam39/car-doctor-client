import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {
    const {createUser}=useContext(AuthContext);

    const handleSignUp =event=>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;

        console.log(name, email, password);
        createUser(email, password)
        .then(result =>{
            const user = user.result;
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
        
    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up </h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
                 
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="text-center">Already Have an Account?<Link className="text-orange-500 font-bold" to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;