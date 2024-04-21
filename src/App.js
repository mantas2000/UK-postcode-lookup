import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostcodeForm from './components/PostcodeForm';
import PostcodeDetails from './components/PostcodeDetails';
import PostcodeHistory from './components/PostcodeHistory';
import { usePostcode } from './hooks/usePostcode';

function App() {
  const {
    error,
    loading,
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
    fetchPostcodeDetails(postcode);
  };

  return (
    <div className="container">
      <h1 className="text-center">UK Postcode Lookup</h1>
      <PostcodeForm
        postcode={postcode}
        setPostcode={setPostcode}
        onSubmit={handlePostcodeSubmit}
        loading={loading}
      />
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <PostcodeDetails data={postcodeData} />
      {postcodeHistory.length > 0 && (
      <PostcodeHistory
        history={postcodeHistory}
        onView={handlePostcodeView}
        onRemove={removePostcodeFromHistory}
      />
      )}
    </div>
  );
}

export default App;