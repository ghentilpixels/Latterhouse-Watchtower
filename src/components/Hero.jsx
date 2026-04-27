import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Section */}
      <div className="absolute inset-0 z-0 bg-navy-800">
        <img
          src="https://i.pinimg.com/736x/b5/a9/43/b5a9430392294777a51f458e988ec839.jpg"
          alt="Church background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/10 via-navy-800/20 to-navy-800/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-20">
        <h4 className="text-gold-500 font-semibold tracking-widest text-sm md:text-base uppercase mb-6">
          Welcome To
        </h4>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-2 leading-tight text-white drop-shadow-sm">
          Latterhouse Watchtower
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gold-500 mb-8 drop-shadow-sm">
          Ecclesia
        </h2>
        {/* <h3>Apostolic & Prophetic Ministry</h3> */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-sans font-light">
          A divine apostolic and prophetic movement raised to position men on
          the watchtower and usher them into the manifest glory of God.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="#service-times"
            className="w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm uppercase tracking-wide rounded border border-transparent transition-all duration-300"
          >
            Service Times
          </a>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wide rounded border border-gray-400 hover:border-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Down Chevron */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#service-times"
          className="text-gray-400 hover:text-white transition-colors block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
