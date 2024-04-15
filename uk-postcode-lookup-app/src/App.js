import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostcodeForm from './components/PostcodeForm';
import PostcodeDetails from './components/PostcodeDetails';
import PostcodeHistory from './components/PostcodeHistory';
import { usePostcode } from './hooks/usePostcode';

function App() {
  const {
    postcode,
    setPostcode,
    postcodeData,
    postcodeHistory,
    fetchPostcodeDetails,
    removePostcodeFromHistory,
  } = usePostcode();

  const handlePostcodeSubmit = () => {
    fetchPostcodeDetails();
  };

  const handlePostcodeView = (postcode) => {
    setPostcode(postcode);
    fetchPostcodeDetails();
  };

  return (
    <div className="container">
      <h1>UK Postcode Lookup</h1>
      <PostcodeForm
        postcode={postcode}
        setPostcode={setPostcode}
        onSubmit={handlePostcodeSubmit}
      />
      <PostcodeDetails data={postcodeData} />
      <PostcodeHistory
        history={postcodeHistory}
        onView={handlePostcodeView}
        onRemove={removePostcodeFromHistory}
      />
    </div>
  );
}

export default App;
