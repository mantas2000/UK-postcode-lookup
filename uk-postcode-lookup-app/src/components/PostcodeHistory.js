import React from 'react';

const PostcodeHistory = ({ history, onView, onRemove }) => {
  return (
    <div className="shadow-effect">
      <h2>Postcode History</h2>
      <ul className="list-group">
        {history.map((item) => (
          <li key={item} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <div>
              <button className="btn btn-primary btn-custom me-2" onClick={() => onView(item)}>
                View
              </button>
              <button className="btn btn-danger btn-custom" onClick={() => onRemove(item)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostcodeHistory;