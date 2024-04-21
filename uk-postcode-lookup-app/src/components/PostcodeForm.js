import React from 'react';

const PostcodeForm = ({ postcode, setPostcode, onSubmit, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="shadow-effect">
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
        <button type="submit" className="btn btn-primary btn-custom w-100" disabled={loading}>
          {loading ? (
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          ) : null}
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default PostcodeForm;