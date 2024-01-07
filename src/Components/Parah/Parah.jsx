import React, { useState, useEffect } from 'react';
import './Parah.css'
export default function Parah() {
  const [data, setData] = useState({});
  const [parano, setParano] = useState(1);
  const [textt, setTextt] = useState('ar.uthmani'); // Default to English translation
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(parano, textt);
  }, [parano, textt]);

  function fetchData(juz, translation) {
    fetch(`https://api.alquran.cloud/v1/juz/${juz}/${translation}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }

  const linesPerPage = 16;

  const startIndex = (currentPage - 1) * linesPerPage;
  const endIndex = startIndex + linesPerPage;
  const ayahs = data?.data?.ayahs?.slice(startIndex, endIndex);

  return (
    <>
    <div className="RTL">
    <div className="container1">
      <div className="buttons">
     
        <button className='btn btn-danger' onClick={() => setTextt('ar.Buck')}>Arabic</button>
        <button className='btn btn-dark' onClick={() => setParano(parano +1)}>Next Parah</button>
        <button  className='btn btn-info' onClick={() => setParano(parano - 1)}>Previous Parah</button>

      </div>
      <div className="page-navigation">
       
        <button className='btn btn-danger'
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          style={{ float: 'right' }}
        >
          Previous Page
        </button>
        <button className='btn btn-primary'
          disabled={endIndex >= data?.data?.ayahs?.length}
          onClick={() => setCurrentPage(currentPage + 1)}
          style={{ float: 'left' }}
        >
          Next Page
        </button>
      </div>
      <div style={{marginTop:"50px"}} className="container">

      {ayahs?.map((item, index) => (
        <p key={index} className="quran-line"> {item.number} : {item.text}</p>
      ))}

</div>
      
    </div>
    </div>
    </>
  );
}
