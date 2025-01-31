import profielFoto from "../assets/profielfotos/profielFotoOud.png";

const Home = () => {
  return (
    <section id="about" className="about">
      <div
        className="blob"
        style={{
          background: `url(${profielFoto}) center/cover`,
        }}
      ></div>
      <div className="text-content">
        <h2>Hallo,</h2>
        <h2>
          Ik ben <strong>Brent</strong>,
        </h2>
        <h2>Software Developer</h2>
        <br />
        <a href="/path/to/je/cv.pdf" className="cv-button" download>
          Download mijn CV
        </a>
      </div>
    </section>
  );
};

export default Home;
