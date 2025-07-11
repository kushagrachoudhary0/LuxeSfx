import React from "react";
import Animations from "./Animation";
import logo from '../home/WhatsApp_Image_2025-07-11_at_2.15.39_PM-removebg-preview (1).png';
const LuxeSFX = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #0f0f0f;
          color: #f5f5f5;
          scroll-behavior: smooth;
        }
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(8px);
          padding: 16px 32px;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .menu a {
          margin-left: 24px;
          text-decoration: none;
          color: #ccc;
          font-weight: 500;
          transition: color 0.3s;
        }
        .menu a:hover {
          color: #a855f7;
        }
        .btn {
          background-color: #a855f7;
          color: white !important;
          padding: 8px 16px;
          border-radius: 999px;
          margin-right: 35px;
        }
        .services {
          padding: 80px 32px;
          background: #0f0f0f;
        }
        .section-title {
          text-align: center;
          margin-bottom: 48px;
        }
        .section-title h2 {
          font-size: 32px;
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-title p {
          color: #ccc;
          max-width: 600px;
          margin: 0 auto;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
       .service-card {
  background: #1f1f1f;
  border-radius: 16px;
  padding: 24px;
  transition: 0.3s;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(255, 0, 255, 0.1);
}
.service-card .icon {
  font-size: 32px;
  color: #a855f7;
  margin-bottom: 16px;
}
.service-card h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}
.service-card p {
  color: #ccc;
  margin-bottom: 12px;
}
.service-card .highlight-text {
  font-size: 14px;
  color: #c084fc;
  margin-bottom: 12px;
  font-weight: 500;
}
.service-card ul {
  font-size: 14px;
  list-style: none;
  padding: 0;
  color: #aaa;
}
.service-card ul li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding: 6px 0;
}

        .about {
          padding: 80px 32px;
          background: linear-gradient(to bottom, #111827, #1f2937);
        }
       .about-content {
  position: relative;
  background-image: url('https://speceffect.com/wp-content/uploads/2021/10/touring-ref2.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 2rem;
  z-index: 1;
}

.about-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6); /* dark overlay for contrast */
  border-radius: 16px;
  z-index: 0;
}
.about-media {
  position: relative;
  z-index: 1;
}
        .video-placeholder {
          font-size: 48px;
          color: #a855f7;
        }
        .event-count {
          position: absolute;
          bottom: -16px;
          right: -16px;
          background: #db2777;
          color: white;
          font-weight: bold;
          border-radius: 999px;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(219, 39, 119, 0.6);
        }
        .about-text {
          max-width: 600px;
        }
        .about-text h2 {
          font-size: 28px;
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 24px;
        }
        .about-points .point {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }
        .point .icon {
          font-size: 24px;
          color: white;
          background: #a855f7;
          border-radius: 999px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
          .about-media {
  position: relative;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 12px;
  margin: 2rem auto;
}

.about-video {
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  display: block;
}

.event-count {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(15, 15, 26, 0.7);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
}
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
  <img src={logo} alt="LUXE SFX Logo" style={{ height: '100px' ,width:'100px'}} />
</div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <Animations/>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="section-title">
          <h2>OUR PREMIUM EFFECTS</h2>
          <p>Cutting-edge special effects designed to electrify your event and create unforgettable moments</p>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <div className="icon">💨</div>
            <h3>CO2 Jet Effects</h3>
            <p>High-powered CO2 blasts that energize crowds instantly with dramatic bursts of cold fog.</p>
            <ul>
              <li>LED CO2 Jet – ₹</li>
              <li>DMX LED Sonicboom Jet – ₹</li>
              <li>LED CO2 Gun – ₹</li>
              <li>Big CO2 Confetti Blower – ₹</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="icon">🔥</div>
            <h3>Flame & Pyro Effects</h3>
            <p>Safe, synchronized, and spectacular pyrotechnics that light up your event.</p>
            <ul>
              <li>Fireball Machine – ₹</li>
              <li>180° Flamethrower – ₹</li>
              <li>Five Head Flame Thrower – ₹</li>
              <li>Wireless Comet – ₹</li>
            </ul>
          </div>
          <div className="service-card">
            <div className="icon">✨</div>
            <h3>Sparkler Effects</h3>
            <p>Indoor-safe spark fountains for grand entrances, product launches, and special moments.</p>
            <ul>
              <li>Sparkle Machine – ₹</li>
              <li>Spin Sparkle – ₹</li>
              <li>Nigrafall Sparkle – ₹</li>
              <li>Wireless Cold Pyros – ₹</li>
            </ul>
          </div>
        </div>
      <div className="service-grid" style={{ marginTop: "2rem" }}>
  {/* Service 1: Confetti & Aerial Effects */}
  <div className="service-card">
    <div className="icon">🎊</div>
    <h3>Confetti & Aerial Effects</h3>
    <p>
      Explosive color bursts to celebrate key moments with customizable colors and patterns.
    </p>
    <div className="highlight-text">
      Great for announcements, celebrations, and photo moments
    </div>
    <ul>
      <li><span>CO2 Confetti Blower</span><span>₹</span></li>
      <li><span>Stadium Ribbon Shots</span><span>₹</span></li>
      <li><span>Wireless Big Aerial Sky Shots</span><span>₹</span></li>
      <li><span>Imported Day Colour Shots (Wireless)</span><span>₹</span></li>
    </ul>
  </div>

  {/* Service 2: Smoke & Fog Effects */}
  <div className="service-card">
    <div className="icon">💨</div>
    <h3>Smoke & Fog Effects</h3>
    <p>
      Create atmosphere, drama, and cinematic style with our fog and haze machines.
    </p>
    <div className="highlight-text">
      Essential for concerts, theatrical productions, and immersive events
    </div>
    <ul>
      <li><span>Topcat Smoke Bubble Machine</span><span>₹</span></li>
      <li><span>LED 4 Head Smoke Bubble</span><span>₹</span></li>
      <li><span>Dry Ice Low Fog Machine</span><span>₹</span></li>
      <li><span>Animation Laser</span><span>₹</span></li>
    </ul>
  </div>

  {/* Service 3: Specialty Effects */}
  <div className="service-card">
    <div className="icon">🌟</div>
    <h3>Specialty Effects</h3>
    <p>
      Unique effects for dramatic reveals, transitions, and special moments.
    </p>
    <div className="highlight-text">
      Perfect for stage performances and theatrical productions
    </div>
    <ul>
      <li><span>Curtain Drop Kabuki Machine</span><span>₹</span></li>
      <li><span>Custom SFX Packages</span><span>Contact Us</span></li>
      <li><span>Event Consultation</span><span>Free</span></li>
    </ul>
  </div>
</div>


        
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <div className="about-media">
      <iframe
      src="https://player.vimeo.com/video/266452955?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
       frameBorder="0"
       allow="autoplay; fullscreen"
       allowFullScreen
       title="Event Highlight Video"
       className="about-video"
         ></iframe>
         </div>
          <div className="about-text">
            <h2>WHY CHOOSE LUXE SFX?</h2>
            <div className="about-points">
              <div className="point">
                <div className="icon">🛡</div>
                <div>
                  <h4>Safety First</h4>
                  <p>Certified equipment & top safety standards.</p>
                </div>
              </div>
              <div className="point">
                <div className="icon">🛠</div>
                <div>
                  <h4>High-End Equipment</h4>
                  <p>Only event-grade tools from top brands.</p>
                </div>
              </div>
              <div className="point">
                <div className="icon">👥</div>
                <div>
                  <h4>Experienced Team</h4>
                  <p>Hundreds of successful events powered.</p>
                </div>
              </div>
              <div className="point">
                <div className="icon">💡</div>
                <div>
                  <h4>Creative Consultation</h4>
                  <p>Tailored SFX for your vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LuxeSFX;
