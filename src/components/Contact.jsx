const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacteer Mij</h2>
      <p>Heb je vragen? Wil je samenwerken? Neem contact met mij op!</p>

      <form>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="fullName">Volledige Naam</label>
            <input
              type="text"
              id="fullName"
              placeholder="Jan Jansens"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="janjansens@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categorie</label>
            <input
              type="text"
              id="category"
              placeholder="Kies een categorie"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Onderwerp</label>
            <input
              type="text"
              id="subject"
              placeholder="Onderwerp van uw bericht"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Uw Vraag</label>
            <textarea id="message" placeholder="Uw bericht" required></textarea>
          </div>
        </div>
        <button type="submit">Verstuur</button>
      </form>
    </section>
  );
};

export default Contact;
