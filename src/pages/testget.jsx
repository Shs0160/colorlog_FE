import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResultComponent() {
  const [result, setResult] = useState('');

  useEffect(() => {
    async function fetchResult() {
      try {
        const response = await axios.get('http://192.168.0.75:8080/api/user/get_result');
        setResult(response.data);
      } catch (error) {
        console.error('Error fetching result:', error);
      }
    }

    fetchResult();
  }, []);

  return (
    <div>
      <h1>Result: {result}</h1>
    </div>
  );
}

export default ResultComponent;
