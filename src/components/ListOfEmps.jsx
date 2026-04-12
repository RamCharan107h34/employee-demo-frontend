import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const API = import.meta.env.VITE_API_URL;


  const gotoEmployee = (empObj) =>{
    // navigate to /employee along with a 
    navigate("/employee", {state: empObj})
  }

  const gotoEditEmployee = (empObj) =>{
    // navigate to /employee along with a 
    navigate("/edit-emp",{state: empObj})
  }

  // delete emp by id
  const deleteEmpByID = async (id) => {
    try{
      setLoading(true);
      let res = await axios.delete(`${import.meta.env.VITE_API_URL}/emp-api/employees/${id}`)
      if(res.status === 200){
        // get latest emps data
        getEmps();
      }
    } catch(err){
      setError(err.message);
    } finally{
      setLoading(false);
    }
  }


  async function getEmps() {
    try{
      setLoading(true)
      let res = await axios.get(`${import.meta.env.VITE_API_URL}/emp-api/employees`);
      if (res.status === 200) {
        let resObj = await res.data;
        setEmps(resObj.payload);
      }
    } catch(err){
      setError(err.message);
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getEmps();
  }, []);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center mb-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-2xl rounded-2xl">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            {/* 3 buttons */}
            <div className="flex - justify-around">
              <button onClick={()=>gotoEmployee(empObj)} className="bg-blue-600 p-2 rounded-2xl text-white">
                View
              </button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-yellow-600 p-2 rounded-2xl text-white">
                Edit
              </button>
              <button onClick={()=>deleteEmpByID(empObj._id)} className="bg-red-600 p-2 rounded-2xl text-white">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
