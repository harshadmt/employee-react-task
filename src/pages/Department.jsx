import { useEffect, useState } from "react";
import API from "../Api";
import { useNavigate } from "react-router-dom";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const fetchDepartments = async () => {
    const res = await API.get("/departments");
    setDepartments(res.data);
  };

  const deleteDepartment = async (id) => {
    await API.delete(`/delete-department/${id}`);
    fetchDepartments();
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
       <div className="flex items-center justify-between mb-6">
  <h2 className="text-2xl font-semibold">Departments</h2>
</div>


        {/* List */}
        {departments.length === 0 ? (
          <p className="text-gray-500 text-center">No departments found</p>
        ) : (
          <div className="space-y-4">
            {departments.map((dept) => (
              <div
                key={dept._id}
                className="bg-white p-4 rounded shadow flex justify-between items-start"
              >
                <div>
               <h3 className="text-lg font-medium">
                     {dept.dept_name || dept.deptName}
                 </h3>
                  <p className="text-gray-600 text-sm">
                    {dept.description}
                  </p>
                </div>

                <button
                  onClick={() => deleteDepartment(dept._id)}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Departments;
