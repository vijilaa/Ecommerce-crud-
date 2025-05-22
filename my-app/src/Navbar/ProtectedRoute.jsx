import React from 'react';

function ProtectedRoute({ show, onClose }) {
  return (
    <div
      className={`modal fade ${show ? 'show d-block' : 'd-none'}`}
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control mb-2" placeholder="Username" />
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProtectedRoute;
