import React, { useEffect } from "react";

export default function Eventsetion() {
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
        /* Gallery Section Styles */
        .gallery {
          background-color: #1f2937;
          padding: 5rem 1rem;
        }
        .gallery h2 {
          font-size: 2rem;
          background: linear-gradient(to right, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        .gallery p {
          color: #d1d5db;
          max-width: 48rem;
          margin: 0 auto;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          height: 16rem;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          opacity: 0.7;
        }
        .gallery-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 1.5rem;
          color: white;
        }
        .gallery-caption h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0;
        }
        .gallery-caption p {
          color: #c084fc;
          margin: 0;
        }
        .gallery-btn {
          margin-top: 3rem;
          padding: 0.75rem 2rem;
          border: 2px solid #c084fc;
          border-radius: 9999px;
          font-weight: bold;
          background-color: transparent;
          color: white;
          transition: background-color 0.3s;
        }
        .gallery-btn:hover {
          background-color: rgba(139, 92, 246, 0.3);
        }
      `}</style>

      <section id="gallery" className="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2>
              <span>OUR WORK IN ACTION</span>
            </h2>
            <p>
              See how we've transformed events with our spectacular effects
            </p>
          </div>

          <div className="gallery-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1470&q=80",
                title: "Music Festival",
                subtitle: "CO2 Jets & Pyrotechnics",
              },
              {
                img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1470&q=80",
                title: "Wedding Reception",
                subtitle: "Cold Sparkler Entrance",
              },
              {
                img: "https://img.freepik.com/premium-vector/holiday-party-happy-new-year-party-invitation-card-flyer-poster-greeting-card-design_115495-653.jpg",
                title: "Product Launch",
                subtitle: "Confetti Cannon Finale",
              },
              {
                img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1374&q=80",
                title: "Nightclub Event",
                subtitle: "Fog & Laser Combination",
              },
              {
                img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1470&q=80",
                title: "Stadium Concert",
                subtitle: "Synchronized Fireworks",
              },
              {
                img: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=1473&q=80",
                title: "Fashion Show",
                subtitle: "Custom SFX Package",
              },
            ].map(({ img, title, subtitle }, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={title} />
                <div className="gallery-overlay"></div>
                <div className="gallery-caption">
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button id="view-more" className="gallery-btn">
              VIEW MORE EVENT GALLERY
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
