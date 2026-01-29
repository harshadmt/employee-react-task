import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../Api";

function DepartmentDetails() {
  const { deptId } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState(null);

  const fetchDepartment = async () => {
    const res = await API.get(`/department/${deptId}`);
    setDepartment(res.data);
  };

  useEffect(() => {
    fetchDepartment();
  }, [deptId]);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">
          {department.dept_name || department.deptName}
        </h2>

        <p className="text-gray-600 mb-6">
          {department.description}
        </p>

        <button
          onClick={() => navigate("/departments")}
          className="text-sm border px-4 py-2 rounded hover:bg-gray-100"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default DepartmentDetails;
