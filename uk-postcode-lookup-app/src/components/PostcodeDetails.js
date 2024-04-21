import React from 'react';

const PostcodeDetails = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="shadow-effect">
      <h2>Details for: {data.postcode}</h2>
      <p>Country: {data.country}</p>
      <p>Longitude: {data.longitude}</p>
      <p>Latitude: {data.latitude}</p>
      <p>Admin District: {data.admin_district}</p>
    </div>
  );
};

export default PostcodeDetails;