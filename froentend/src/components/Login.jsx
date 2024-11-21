import { useForm } from "react-hook-form";
import { Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
  if(isSignup){
  
   const userInfo = {
    fullname : data.fullname,
    email : data.email,
    password : data.password,
   }
   await axios.post("http://localhost:4001/users/signup",userInfo).then((res)=>{
    console.log(res);
    if(res){
      alert("User created successfully");
     
    }
   }).catch((err) => {
    alert(err);
   })
    
  }
  else{
    
      const loginInfo = {
       email : data.email,
       password : data.password,
      }
      await axios.post("http://localhost:4001/users/login",loginInfo).then((res)=>{
       console.log(res);
       if(res){
         alert("User Login successfully");
       }
      }).catch((err) => {
       alert(err);
      })       
     }

  }

  return (
    <>
    <div className="text-black">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form  method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">{isSignup ? 'Signup' : 'Login'}</h3>
            {isSignup && (
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: "This field is required" })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            )}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "This field is required" })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              <br />
            </div>

            <div className="mt-2 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "This field is required" })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
              <br />
            </div>

            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white  rounded-md px-3 py-1 hover:bg-pink-700 duration-200" onClick={handleSubmit(onSubmit)}>
                {isSignup ? 'Signup' : 'Login'}
              </button>
              <p>
                {isSignup ? 'Already registered? ' : 'Not registered? '}
                <button
                  type="button"
                  onClick={() => setIsSignup(!isSignup)}
                  className="underline text-blue-500 cursor-pointer"
                >
                  {isSignup ? 'Login' : 'Signup'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
    </>
  );
};

export default Login;


