import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageAndVideoListComponent() {
  const [mediaUrls, setMediaUrls] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://192.168.0.75:8080/api/photogroup/get_photogroup');
        setMediaUrls(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Images</h2>
      {mediaUrls.imagePath && <img src={mediaUrls.imagePath} alt="" />}
      {/* {mediaUrls.imagePath2 && <img src={mediaUrls.imagePath2} alt="" />}
      {mediaUrls.imagePath3 && <img src={mediaUrls.imagePath3} alt="" />}
      {mediaUrls.imagePath4 && <img src={mediaUrls.imagePath4} alt="" />} */}
      
      <h2>Video</h2>
      {mediaUrls.videoPath && <video controls src={mediaUrls.videoPath} />}
    </div>
  );
}

export default ImageAndVideoListComponent;
