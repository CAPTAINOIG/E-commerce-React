import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loaderimage from '../assets/loaderimage.gif';
import Datadetails from './Datadetails';


const Loader = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/fashion');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <img id='img'
            src={loaderimage}
            alt="Loading..."
            style={{ display: 'block', margin: '0 auto', width: '250px', height: '250px', marginTop:'200px' }}
          />
        </div>
      ) : (
        <div>
          <Datadetails/>
        </div>
      )}
    </div>
  );
};

export default Loader;
