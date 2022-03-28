import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="support-ukraine-banner">
      <div className="support-ukraine-message">
        <img
          src="https://pt.savefrom.net/assets/experiment/supportUkraine/img/ua-flag.png"
          alt="ua-flag"
        />

        <div className="support-ukraine-text">
          <h3 className="support-ukraine-header">AJUDE A UCRÂNIA</h3>
          <p className="support-ukraine-donate-now">
            Doe agora para ajudar a fornecer ajuda humanitária
          </p>
          
          <p className="support-ukraine-humanitarian">ajuda humanitária</p><br />
          <strong>CEO: Wanderson Felipe / Rafael Baitola</strong>
        </div>
      </div>
      <div className="support-ukraine-fonds">
        <a
          href="https://razomforukraine.org/donate/"
          target="_blank"
          rel="nofollow noopener"
        >
          <img
            src="	https://pt.savefrom.net/assets/experiment/supportUkraine/img/fonds/1.png"
            alt="fond-1"
          />
        </a>
        <a
          href="https://dobro.ua/en/projects/category/zdorovia"
          target="_blank"
          rel="nofollow noopener"
        >
          <img
            src="https://pt.savefrom.net/assets/experiment/supportUkraine/img/fonds/4.png"
            alt="fond-1"
          />
        </a>
        <a
          href="https://www.malteser-international.org/en/donation.html"
          target="_blank"
          rel="nofollow noopener"
        >
          <img
            src="https://pt.savefrom.net/assets/experiment/supportUkraine/img/fonds/5.png
            "
            alt="fond-1"
          />
        </a>
        <a
          href="https://lifelineukraine.com/en/donation"
          target="_blank"
          rel="nofollow noopener"
        >
          <img
            src="	https://pt.savefrom.net/assets/experiment/supportUkraine/img/fonds/2.png"
            alt="fond-1"
          />
        </a>
        <a
          href="https://unitedhelpukraine.org/"
          target="_blank"
          rel="nofollow noopener"
        >
          <img
            src="	https://pt.savefrom.net/assets/experiment/supportUkraine/img/fonds/6.png"
            alt="fond-1"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
