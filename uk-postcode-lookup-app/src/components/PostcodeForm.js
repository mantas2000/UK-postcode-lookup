import React from 'react';


const PostcodeForm = ({ postcode, setPostcode, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="postcode" className="form-label">
          Enter a UK postcode:
        </label>
        <input
          type="text"
          className="form-control"
          id="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostcodeForm;