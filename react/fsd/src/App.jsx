import React from "react";

const App = () => {
  return (
    <>
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title text-center text-primary fw-bold mb-4">
            📝 To-Do List
          </h4>

          {/* Add Task Section */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task..."
            />
            <button className="btn btn-primary" type="button">
              Add
            </button>
          </div>

          {/* Task List */}
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Complete React Project
              <div>
                <span className="badge bg-success me-2">Done</span>
                <button className="btn btn-sm btn-outline-danger">✖</button>
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              Study DSA Problems
              <div>
                <button className="btn btn-sm btn-outline-danger">✖</button>
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              Prepare for Hackathon
              <div>
                <button className="btn btn-sm btn-outline-danger">✖</button>
              </div>
            </li>
          </ul>

          {/* Footer */}
          <div className="card-footer text-muted text-center">
            3 Tasks • 1 Completed ✅
          </div>
        </div>
      </div>
    </div>






    <div>
      
    </div></>
  );
};

export default App;
