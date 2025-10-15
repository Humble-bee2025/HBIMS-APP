import './styles.css';

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1601703604922-0b7ba8dc0f7e?auto=format&fit=crop&w=1600&q=80';

const App = () => (
  <div className="app">
    <header className="hero" aria-label="Merchant Navy cadets aboard a vessel with the Indian flag">
      <div
        className="hero__image"
        role="presentation"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      />
      <div className="hero__crest" aria-hidden="true">
        <span className="hero__crest-icon">⚓</span>
      </div>
    </header>

    <main className="card" role="main">
      <h1 className="card__title">Welcome to HBIMS</h1>
      <p className="card__subtitle">Start Your Merchant Navy Journey with Us</p>

      <form className="card__form">
        <label className="card__label" htmlFor="mobile">
          Mobile Number
        </label>
        <div className="input-field">
          <span className="input-field__icon" aria-hidden="true">
            📱
          </span>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            placeholder="Mobile Number"
            autoComplete="tel"
          />
        </div>
        <button type="submit" className="primary-button">
          Login &amp; Continue Your Journey
        </button>
      </form>

      <p className="card__footer">
        New to HBIMS?{' '}
        <a href="#" className="card__link">
          Register &amp; Start Your Journey
        </a>
      </p>
    </main>
  </div>
);

export default App;
