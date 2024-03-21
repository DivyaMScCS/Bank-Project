import React from 'react';
import { Link} from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Grow Bank</h1>
      </header>

      <section >
        <p>
          At Grow Bank, we are dedicated to providing you with excellent banking services.
          Whether you are saving for the future or managing your day-to-day transactions,
          we've got you covered.
        </p>
        <p>
          Explore our user-friendly platform, and experience the convenience of modern banking.
        </p>
        
        <Link to="/Login"  >
          <button>Get Started</button>
        </Link>
        
      </section>

      <section>
        <h2>Why Choose Grow Bank?</h2>
        <ul>
          <li>Secure and reliable banking services</li>
          <li>Competitive interest rates on savings</li>
          <li>Effortless online transactions</li>
          <li>24/7 customer support</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;