const Languages = ({ languages }) => {
    if (!Array.isArray(languages)) {
      return null; // Return null if languages is not an array
    }
  
    return (
      <ul>
        {languages.map((language,index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    );
  };

  export default Languages;