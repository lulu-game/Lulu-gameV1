import React from 'react';
import '../styles/LanguageLounge.css';

const LanguageLounge = () => {
  const mostLearnedLanguages = [
    { name: 'Kiswahili', learners: '7,000', enrollments: '10,000+', love: '1M+' },
    { name: 'Hausa', learners: '4,000', enrollments: '10,000+', love: '1M+' },
    { name: 'Igbo', learners: '3,000', enrollments: '10,000+', love: '1M+' },
  ];

  const languageData = [
    { name: 'Yoruba', enrollments: '7,00', completionRate: '90' },
    { name: 'Amharic', enrollments: '1,050', completionRate: '94' },
    { name: 'Oromo', enrollments: '570', completionRate: '86' },
    { name: 'Zulu', enrollments: '750', completionRate: '71' },
    { name: 'Xhosa', enrollments: '200', completionRate: '89' },
    { name: 'Kikuyu', enrollments: '809', completionRate: '91' },
    { name: 'Fulfude', enrollments: '978', completionRate: '61' },
    { name: 'Kanuri', enrollments: '1,042', completionRate: '95' },
  ];

  const learnerDemographics = {
    age: [10, 20, 30, 40, 30, 20],
    gender: [
      { name: 'Female', value: 60 },
      { name: 'Male', value: 30 },
      { name: 'Non-Binary', value: 5 },
      { name: 'Prefer Not to Say', value: 5 },
    ],
    country: [
      { name: 'Nigeria', value: 50 },
      { name: 'Kenya', value: 20 },
      { name: 'South Africa', value: 15 },
      { name: 'Ethiopia', value: 10 },
      { name: 'Rwanda', value: 5 },
    ],
  };

  return (
    <div className="language-lounge">
      <div className="most-learned-languages">
        <h2>Most Learned</h2>
        <div className="language-cards">
          {mostLearnedLanguages.map((language, index) => (
            <div className="language-card" key={index}>
              <h3>{language.name}</h3>
              <p>{language.learners}</p>
              <p>{language.enrollments}</p>
              <p>{language.love}</p>
            </div>
          ))}
        </div>
        <button>See all</button>
      </div>

      <div className="language-details">
        <table>
          <thead>
            <tr>
              <th>Language</th>
              <th>Enrollments</th>
              <th>Completion Rate</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {languageData.map((language, index) => (
              <tr key={index}>
                <td>{language.name}</td>
                <td>{language.enrollments}</td>
                <td>{language.completionRate}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="learner-demographics">
        <h2>Learner Demographics</h2>
        <div className="age-distribution">
          <h3>Age</h3>
          <div className="bar-chart">
            {learnerDemographics.age.map((value, index) => (
              <div className="bar" key={index} style={{ height: `${value * 10}px` }}></div>
            ))}
          </div>
          <div className="bar-labels">
            <span>18-25</span>
            <span>25-34</span>
            <span>35-44</span>
            <span>45-54</span>
            <span>55-64</span>
            <span>65+</span>
          </div>
        </div>

        <div className="gender-distribution">
          <h3>Gender</h3>
          {learnerDemographics.gender.map((gender, index) => (
            <div className="gender-bar" key={index}>
              <span>{gender.name}</span>
              <div className="bar" style={{ width: `${gender.value}%` }}></div>
            </div>
          ))}
        </div>

        <div className="country-distribution">
          <h3>Country</h3>
          {learnerDemographics.country.map((country, index) => (
            <div className="country-bar" key={index}>
              <span>{country.name}</span>
              <div className="bar" style={{ width: `${country.value}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageLounge;