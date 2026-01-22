import React from "react";
import "../css/pages.css";

const Home = () => {
  return (
    <div className="page">
      <h1>Welcome to Our Application</h1>

      <p>
        This platform is designed to provide a smooth, intuitive, and
        user-friendly experience while exploring modern web application
        features built with React.
      </p>

      <section>
        <h2>What You Can Do Here</h2>
        <p>
          Our application demonstrates how component-based architecture,
          reusable UI elements, and efficient state management come together
          to create scalable and maintainable web applications.
        </p>
      </section>

      <section>
        <h2>Key Highlights</h2>
        <ul>
          <li>Clean and modular React component structure</li>
          <li>Separation of concerns using dedicated CSS files</li>
          <li>Fast rendering and smooth user interactions</li>
          <li>Easy navigation and responsive layout</li>
        </ul>
      </section>

      <section>
        <h2>Why React?</h2>
        <p>
          React allows developers to build dynamic user interfaces efficiently
          by breaking the UI into reusable components. This leads to better
          code readability, easier debugging, and faster development.
        </p>
      </section>

      <section>
        <h2>Get Started</h2>
        <p>
          Use the navigation menu to explore different pages of the application
          and see how each feature is implemented. This project can also serve
          as a foundation for building more complex real-world applications.
        </p>
      </section>
    </div>
  );
};

export default Home;
