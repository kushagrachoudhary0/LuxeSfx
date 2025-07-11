import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const mobileBtn = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    const container = document.getElementById("sparkle-container");
    const sparkleCount = 30;
    if (container) {
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        const posX = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 7;
        const size = 2 + Math.random() * 4;

        sparkle.style.left = `${posX}%`;
        sparkle.style.animationDelay = `${delay}s`;
        sparkle.style.animationDuration = `${duration}s`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;

        container.appendChild(sparkle);
      }
    }

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
          if (mobileMenu) mobileMenu.classList.add("hidden");
        }
      });
    });
  }, []);

  return (
    <>
      <style>{`
        .footer {
          background-color: #000;
          padding: 3rem 1rem;
          color: #ccc;
        }
        .footer-inner {
          max-width: 1280px;
          margin: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        .social-icons a {
          margin-right: 1rem;
          color: #999;
          font-size: 1.25rem;
        }
        .social-icons a:hover {
          color: #a855f7;
        }
        h4 {
          color: #fff;
          margin-bottom: 1rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        li a {
          color: #aaa;
          text-decoration: none;
        }
        li a:hover {
          color: #a855f7;
        }
        .newsletter-form {
          display: flex;
          margin-top: 0.5rem;
        }
        .email-input {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 4px 0 0 4px;
          background-color: #333;
          color: white;
        }
        .submit-btn {
          padding: 0 1rem;
          background-color: #a855f7;
          border: none;
          border-radius: 0 4px 4px 0;
          color: white;
          cursor: pointer;
        }
        .submit-btn:hover {
          background-color: #9333ea;
        }
        .footer-bottom {
          border-top: 1px solid #333;
          margin-top: 3rem;
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-links a {
          color: #777;
          text-decoration: none;
        }
        .footer-links a:hover {
          color: #a855f7;
        }
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px #ff00ff;
          animation: sparkle-fall linear infinite;
        }
        @keyframes sparkle-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <h3 className="footer-logo">LUXE SFX</h3>
              <p>Elevating events with unforgettable special effects since 2015.</p>
              <div className="social-icons">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#">CO2 Jet Effects</a></li>
                <li><a href="#">Fireworks & Pyro</a></li>
                <li><a href="#">Cold Sparklers</a></li>
                <li><a href="#">Confetti Cannons</a></li>
                <li><a href="#">Smoke & Fog</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4>Newsletter</h4>
              <p>Subscribe for exclusive offers and event inspiration</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" className="email-input" />
                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 Luxe SFX. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Safety Information</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
