import React, { useState, useEffect } from 'react';
import './SearchWords.css';

export default function SearchWords() {
  const [data, setData] = useState({});
  const [word, setWord] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [surah, setSurah] = useState('all');
  const [language, setLanguage] = useState('en.daryabadi');

  const languages = [
    { label: 'English', value: 'en.daryabadi' },
    { label: 'Urdu', value: 'ur.jawadi' },
    { label: 'German', value: 'de' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Czech', value: 'cs' },
    { label: 'Arabic', value: 'ar.uthmani' }
    // Add more languages as needed
  ];

  useEffect(() => {
    if (searchClicked) {
      fetch(`https://api.alquran.cloud/v1/search/${word}/${surah}/${language}`)
        .then((Response) => Response.json())
        .then((ukkash) => {
          setData(ukkash.data);
        });
      setSearchClicked(false); // Reset the searchClicked state
    }
  }, [searchClicked, word, surah, language]);

  const handleSearchClick = () => {
    setSearchClicked(true); // Set searchClicked to true when the "Search" button is clicked
  };

  const highlightSearchedText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} style={{ color: 'red' }}>
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  const isEnglishLanguage = language === 'en.daryabadi';

  return (
    <div className={isEnglishLanguage ? 'LTR' : 'RTL'}>
      <div className="container">
        <label htmlFor="input">{isEnglishLanguage ? 'Enter Word' : 'اکتب الکلمۃ'}</label>
        <input
          type="text"
          placeholder={isEnglishLanguage ? 'Enter Word' : 'اکتب الکلمۃ'}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <label htmlFor="input">{isEnglishLanguage ? 'Enter Surah Number' : 'اکتب رقم السورۃ'}</label>
        <input
          type="number"
          placeholder={isEnglishLanguage ? 'Enter Surah Number' : 'اکتب رقم السورۃ'}
          value={surah}
          onChange={(e) => setSurah(e.target.value)}
        />

        <label htmlFor="input">{isEnglishLanguage ? 'Select Language' : 'اختار اللغة'}</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>

        <button onClick={handleSearchClick}>{isEnglishLanguage ? 'Search' : 'بحث'}</button>
        <h1>{isEnglishLanguage ? 'Total Results' : 'النتيجة الإجمالية'}: {data.count}</h1>
        {data?.matches?.map((item, index) => (
          <div key={index}>
            <h1>
              {index + 1} {highlightSearchedText(item.text, word)}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
