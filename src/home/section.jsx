import React, { useEffect } from "react";

export default function LowerSection() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <>
      <style>{`
        .testimonials {
          background-color: #111827;
          padding: 5rem 1rem;
          color: #ccc;
        }
        .testimonials h2 {
          font-size: 2rem;
          background: linear-gradient(to right, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .testimonial {
          background-color: #1f2937;
          border-radius: 1rem;
          padding: 2rem;
        }
        .testimonial .avatar {
          height: 3rem;
          width: 3rem;
          background-color: #9333ea;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }
        .testimonial h4 {
          margin: 0;
        }
        .testimonial .title {
          color: #a78bfa;
          font-size: 0.875rem;
        }
        .testimonial p {
          font-style: italic;
          margin-top: 1rem;
        }
        .testimonial .stars {
          color: #facc15;
          margin-top: 1rem;
        }
        .cta-section {
          background: linear-gradient(to right, #6b21a8, #be185d);
          color: white;
          padding: 5rem 1rem;
        }
        .cta-form {
          background-color: rgba(17, 24, 39, 0.6);
          padding: 2rem;
          border-radius: 1rem;
          max-width: 600px;
          margin: auto;
        }
        .cta-form input,
        .cta-form select,
        .cta-form textarea {
          width: 100%;
          padding: 0.75rem;
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          color: white;
        }
        .cta-form button {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(to right, #a855f7, #ec4899);
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-weight: bold;
          margin-top: 1rem;
        }
        .cta-contact {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }
        .cta-contact div {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .cta-icon {
          background-color: rgba(255, 255, 255, 0.2);
          padding: 0.75rem;
          border-radius: 9999px;
        }
          .text-center{
            display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
          }
      `}</style>

      <section className="testimonials">
        <div className="text-center mb-16">
          <h2>WHAT OUR CLIENTS SAY</h2>
          <p>
            Don't just take our word for it - hear from those who've experienced the Luxe SFX difference
          </p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial">
            <div className="flex items-center mb-4">
              <div className="avatar">JD</div>
              <div style={{ marginLeft: "1rem" }}>
                <h4>Jessica D.</h4>
                <p className="title">Wedding Planner</p>
              </div>
            </div>
            <p>
              "The cold sparkler entrance Luxe SFX created for our bride and groom was absolutely magical! Our clients were thrilled and the photos are stunning. Their team was professional from start to finish."
            </p>
            <div className="stars">
              ★★★★★
            </div>
          </div>

          <div className="testimonial">
            <div className="flex items-center mb-4">
              <div className="avatar">MT</div>
              <div style={{ marginLeft: "1rem" }}>
                <h4>Mike T.</h4>
                <p className="title">Concert Producer</p>
              </div>
            </div>
            <p>
              "We've worked with many SFX companies, but Luxe SFX stands out. Their CO2 jets synchronized perfectly with our headliner's drops. The crowd went wild! Their safety protocols are impeccable."
            </p>
            <div className="stars">
              ★★★★★
            </div>
          </div>

          <div className="testimonial">
            <div className="flex items-center mb-4">
              <div className="avatar">SC</div>
              <div style={{ marginLeft: "1rem" }}>
                <h4>Sarah C.</h4>
                <p className="title">Corporate Event Manager</p>
              </div>
            </div>
            <p>
              "Our product launch wouldn't have been the same without Luxe SFX's confetti cannons and smoke effects. They took our creative vision and made it reality. Already booked them for next year!"
            </p>
            <div className="stars">
              ★★★★★
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="text-center">
          <h2>READY TO ELEVATE YOUR EVENT?</h2>
          <p>Contact us today for a free consultation and let's create something spectacular together</p>
          <div className="cta-form">
            <form id="contact-form" >
              <div style={{ display: "grid", gap: "3rem", gridTemplateColumns: "1fr 1fr" }}>
                <div>
                  <label>Your Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div style={{marginTop:"1rem"}}>
                <label >Event Type</label>
                <select id="event-type" name="event-type">
                  <option value="">Select your event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="concert">Concert/Festival</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="club">Club/Nightlife</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{marginTop:"1rem"}}>
                <label >Tell Us About Your Event</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>

          <div className="cta-contact">
            <div>
              <div className="cta-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p>Call us anytime</p>
                <p>+91 9001888199</p>
              </div>
            </div>

            <div>
              <div className="cta-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p>Email us</p>
                <p>luxesfx@gmail.com</p>
              </div>
            </div>
          </div>
<div className="social-links" style={{ marginTop: "1rem", textAlign: "center" }}>
  <p style={{ margin: "0.5rem 0" }}>
    WhatsApp us{""}
    <a
      href="https://wa.me/919001888199"
      target="_blank"
      style={{
        color: "#25D366",
        fontWeight: "bold",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        style={{ width: "20px", height: "20px", marginRight: "0.3rem" }}
      />
      
    </a>
  </p>
  <p style={{ margin: "0.5rem 0" }}>
    Follow us on{" "}
    <a
      href="https://www.instagram.com/luxe_sfx?igsh=MTU0N3p5eHY4dHAwNA%3D%3D&utm_source=qr"
      target="_blank"
      style={{
        color: "#E1306C",
        fontWeight: "bold",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        alt="Instagram"
        style={{ width: "20px", height: "20px", marginRight: "0.3rem" }}
      />
      
    </a>
  </p>
  <p style={{ margin: "0.5rem 0" }}>
    Fallow us on
    <a
      href="https://www.facebook.com/share/19fWKFecRT/?mibextid=wwXIfr"
      target="_blank"
      style={{
        color: "#1877F2",
        fontWeight: "bold",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
        alt="Facebook"
        style={{ width: "20px", height: "20px", marginRight: "0.3rem" }}
      />
      
    </a>
  </p>
</div>

        </div>
      </section>
    </>
  );
}