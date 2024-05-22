import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [result, setResult] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://192.168.0.75:8080/processUserData', null, {
      params: {
        result: result
      }
    });

    console.log('응답:', response.data);
    setResult('');
  } catch (error) {
    console.error('에러:', error);
  }
};


  return (
    <div>
      <h2>사용자 데이터 입력</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="result">결과:</label><br />
        <input
          type="text"
          id="result"
          name="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        /><br />
        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default Test;
