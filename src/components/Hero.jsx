import profilePic from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">

      <img
        src={profilePic}
        alt="Manasa S S"
        className="profile-image"
      />
      <h1>Hi, I'm Manasa S S 👋</h1>

      <h2>MCA Graduate</h2>

      <h3>Software Developer</h3>

      <p>
        Passionate about building web applications using ASP.NET,
        Django, React, JavaScript, and MySQL.
      </p>

      <p>
        Currently exploring Artificial Intelligence and Machine Learning
        to build intelligent software solutions.
      </p>

      <div className="hero-buttons">
        <a
          href="https://github.com/manasa0922"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>GitHub</button>
        </a>

        <a
          href="https://www.linkedin.com/in/manasa-s-s-4951b4256"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>LinkedIn</button>
        </a>
</div>
    </section>
  );
}

export default Hero;