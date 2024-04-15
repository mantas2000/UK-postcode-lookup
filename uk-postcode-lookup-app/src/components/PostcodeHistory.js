import React from 'react';

const PostcodeHistory = ({ history, onView, onRemove }) => {
  return (
    <div className="mt-4">
      <h2>Postcode History</h2>
      <ul className="list-group">
        {history.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
            <button className="btn btn-link" onClick={() => onView(item)}>
              View
            </button>
            <button className="btn btn-link text-danger" onClick={() => onRemove(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostcodeHistory;