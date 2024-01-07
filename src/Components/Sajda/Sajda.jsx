import React, { useState, useEffect } from "react";
import './Sajda.css'; // Import your custom CSS file for styling


function Sajda() {
  const [ayah, setAyah] = useState([]);
  

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/sajda/quran-uthmani')
      .then((Response) => Response.json())
      .then((Ukkash) => {
        setAyah(Ukkash.data);
      });
  }, []);

  return (
    <div className="RTL">
    <div className="sajda-container">
      <h1 className="sajda-header">Total Sajda Ayah in Quran: {ayah?.ayahs?.length}</h1>

      {ayah?.ayahs?.map((item, index) => (
        <div key={index} className="sajda-item">
          <h2>فی الجزء:{item.juz}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Sajda;
