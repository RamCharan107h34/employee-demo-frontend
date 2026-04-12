import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router";
import { counterContextObj } from "./ContextProvider";



function EditEmployee() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   const API = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState:{errors},
    setValue
  } = useForm();

  const navigate = useNavigate();

  // get empObj from navigate hook
  const { state } = useLocation();

  useEffect(() => {
    setValue("name",state.name);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyName",state.companyName);
  })

  const saveModifiedEmp = async (modifiedEmp) => {
    try{
      setLoading(true)
    // make http put req
    const res = await axios.put(`${API}/emp-api/employees/${state._id}`,modifiedEmp)
    if(res.status === 200){
      // navigate to ListOfEmps
      navigate("/list")
    }
  } catch(err){
    setError(err.message)
  }finally{
    setLoading(false)
  }
  }

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-800 text-white block mx-auto p-4">
          save
        </button>
      </form>
    </div>
  )
}

export default EditEmployee