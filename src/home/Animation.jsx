import React, { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    // Sparkle creation
    function createSparkles() {
      const container = document.getElementById("sparkle-container");
      const sparkleCount = 30;

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

    // Parallax effect
    const parallaxHandler = (e) => {
      const parallax = document.querySelector(".parallax-bg");
      const x = (window.innerWidth - e.pageX * 0.5) / 100;
      const y = (window.innerHeight - e.pageY * 0.5) / 100;
      if (parallax) parallax.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    // Initialize sparkles
    window.addEventListener("load", createSparkles);
    document.addEventListener("mousemove", parallaxHandler);

    return () => {
      window.removeEventListener("load", createSparkles);
      document.removeEventListener("mousemove", parallaxHandler);
    };
  }, []);

  return (
    <>
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          scroll-behavior: smooth;
          background: #0f0f1a;
          color: #f0f0f0;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 4rem;
        }

        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(92, 119, 255, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 40%);
          z-index: 0;
        }

        .sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #5c77ff, #ec4899);
          border-radius: 50%;
          box-shadow: 0 0 20px 5px rgba(92, 119, 255, 0.7);
          animation: sparkle-fall linear infinite;
          z-index: 1;
        }

        @keyframes sparkle-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg) scale(1.5);
            opacity: 0;
          }
        }

        .fade-in {
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .flame-animation {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          height: 60px;
          width: 40px;
          background: linear-gradient(to top, #ff7800, #ff0000);
          border-radius: 50% 50% 20% 20%;
          box-shadow: 0 0 20px #ff6600;
          animation: flicker 2s ease-in-out infinite alternate;
        }

        @keyframes flicker {
          0%, 100% {
            transform: scaleY(1) skewX(0deg);
          }
          50% {
            transform: scaleY(1.1) skewX(5deg);
          }
        }

        .hero-buttons a {
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: bold;
          transition: all 0.3s ease;
          text-align: center;
          display: inline-block;
          margin: 0.5rem;
        }

        .btn-gradient {
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
          color: white;
        }
        .btn-gradient:hover {
          background: linear-gradient(to right, #2563eb, #7c3aed);
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
        }

        .btn-outline {
          border: 2px solid #60a5fa;
          background: transparent;
          color: white;
        }
        .btn-outline:hover {
          background-color: rgba(30, 58, 138, 0.2);
          transform: scale(1.05) rotate(-1deg);
        }
      `}</style>

      <section id="home" className="hero-gradient">
        <div id="sparkle-container"></div>
        <div
          className="parallax-bg"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        ></div>

        <div
          style={{ maxWidth: "80rem" }}
          className="mx-auto px-4 py-24 relative z-10 text-center"
        >
          <h1 className="fade-in" style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            <span
              style={{
                background: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ELEVATE YOUR EVENT
            </span>
          </h1>
          <p
            className="fade-in"
            style={{ fontSize: "1.25rem", color: "#d1d5db", maxWidth: "48rem", margin: "0 auto 2.5rem", animationDelay: "0.3s" }}
          >
            Immersive special effects that transform ordinary moments into extraordinary experiences
            With unforgettable special effects that create jaw-dropping moments
          </p>
          <div className="hero-buttons fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="#contact" className="btn-gradient">
              BOOK A CONSULTATION
            </a>
            <a href="#services" className="btn-outline">
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        <div className="flame-animation"></div>
      </section>
    </>
  );
}
