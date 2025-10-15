import { useState } from 'react';
import { languages } from './languages.js';

const LanguageSelectorButton = ({ language, isActive, onSelect }) => (
  <button
    type="button"
    className={`language-button ${isActive ? 'language-button--active' : ''}`}
    onClick={() => onSelect(language.id)}
  >
    <span className="language-button__icon" aria-hidden="true">
      {language.icon}
    </span>
    <span className="language-button__texts">
      <span className="language-button__name">{language.name}</span>
      {language.nativeName && (
        <span className="language-button__native">{language.nativeName}</span>
      )}
    </span>
  </button>
);

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <div className="language-card" role="form" aria-labelledby="language-heading">
      <header className="language-card__header">
        <h1 id="language-heading">Choose Your Language</h1>
        <p>Select your preferred reading language to continue.</p>
      </header>

      <div className="language-grid" role="list">
        {languages.map((language) => (
          <LanguageSelectorButton
            key={language.id}
            language={language}
            isActive={selectedLanguage === language.id}
            onSelect={setSelectedLanguage}
          />
        ))}
      </div>

      <button type="submit" className="continue-button">
        Continue
      </button>

      <footer className="language-card__footer">
        <p>
          Empowering Every Student—
          <span className="language-card__highlight"> In Every Language</span>
        </p>
      </footer>
    </div>
  );
};

const App = () => (
  <div className="app">
    <LanguageSelector />
  </div>
);

export default App;
