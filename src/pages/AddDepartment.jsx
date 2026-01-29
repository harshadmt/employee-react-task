import { useState } from "react";
import API from "../Api";
import { useNavigate } from "react-router-dom";

function AddDepartment() {
  const [dept_name, setDeptName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/add-department", { dept_name, description });
    navigate("/departments");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add Department
        </h2>

        <input
          type="text"
          placeholder="Department Name"
          value={dept_name}
          onChange={(e) => setDeptName(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-6 px-3 py-2 border rounded resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add
          </button>

          <button
            type="button"
            onClick={() => navigate("/departments")}
            className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDepartment;
