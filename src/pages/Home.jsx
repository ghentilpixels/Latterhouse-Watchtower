import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import prayer from "../assets/prayer.jpg";
import prayer1 from "../assets/prayer1.jpg";
import prayer2 from "../assets/prayer2.jpg";
import community from "../assets/community.jpg";

const Home = () => {
  const serviceTimes = [
    {
      id: 1,
      title: "Encounter Service",
      time: "5:00 PM",
      desc: "Sunday ",
    },
    {
      id: 2,
      title: "Midweek Service",
      time: "5:00pm",
      desc: "Wednesday",
    },
    {
      id: 3,
      title: "Watchers All Night",
      time: "6:30 PM",
      desc: "2nd & 4th Friday Every month .",
    },
    {
      id: 4,
      title: "Friday Youth Night",
      time: "7:00 PM",
      desc: "A vibrant gathering for teens and young adults.",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Easter Sunday Celebration",
      day: "27",
      month: "APR",
      category: "WORSHIP",
      badgeColor: "bg-gold-500 text-white",
      time: "8:00 AM & 10:30 AM",
      location: "Main Sanctuary",
    },
    {
      id: 2,
      title: "Community Food Drive",
      day: "04",
      month: "MAY",
      category: "OUTREACH",
      badgeColor: "bg-green-500 text-white",
      time: "9:00 AM - 2:00 PM",
      location: "Church Parking Lot",
    },
    {
      id: 3,
      title: "Mother's Day Brunch",
      day: "10",
      month: "MAY",
      category: "FELLOWSHIP",
      badgeColor: "bg-red-500 text-white",
      time: "11:00 AM - 1:00 PM",
      location: "Fellowship Hall",
    },
    {
      id: 4,
      title: "Youth Leadership Summit",
      day: "17",
      month: "MAY",
      category: "YOUTH",
      badgeColor: "bg-blue-500 text-white",
      time: "6:00 PM - 9:00 PM",
      location: "Youth Center",
    },
    {
      id: 5,
      title: "Marriage Enrichment Workshop",
      day: "24",
      month: "MAY",
      category: "FAMILY",
      badgeColor: "bg-purple-500 text-white",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Room A",
    },
    {
      id: 6,
      title: "Annual Praise Concert",
      day: "31",
      month: "MAY",
      category: "MUSIC",
      badgeColor: "bg-orange-500 text-white",
      time: "6:30 PM",
      location: "Main Sanctuary",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Service Times Section */}
      <section
        id="service-times"
        className="py-24 bg-navy-900 border-t border-navy-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">
              Join Us
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Service Times
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              We gather regularly to worship, pray, and grow together in faith.
              All are welcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTimes.map((service) => (
              <div
                key={service.id}
                className="bg-navy-800/80 rounded-2xl p-6 border border-navy-700 hover:border-gold-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-navy-700 flex items-center justify-center mb-5 text-gold-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gold-500 mb-1">
                  {service.time}
                </h3>
                <h4 className="text-white font-bold mb-3">{service.title}</h4>
                <p className="text-sm text-gray-400 bg-transparent">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gold-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Adjacent Bank of Africa-Ashaiman Roundabout, Ghana• </span>
            <a
              href="#"
              className="text-gold-500 hover:text-gold-400 font-semibold underline-offset-4 hover:underline transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* 3. Upcoming Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">
                What's Happening
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="text-gold-500 font-bold hover:text-gold-600 transition-colors flex items-center gap-1 group"
            >
              View All Events{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Photo Gallery Section */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">
              Memories
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
              Photo Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A glimpse into our vibrant church life, worship, fellowship,
              outreach, and celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden h-64 md:h-80 shadow-sm relative group cursor-pointer">
              <img
                src={prayer}
                alt="Prayer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="rounded-3xl overflow-hidden h-64 md:h-80 shadow-sm relative group cursor-pointer">
              <img
                src={prayer1}
                alt="Prayer gathering"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="rounded-3xl overflow-hidden h-64 md:h-80 shadow-sm relative group cursor-pointer">
              <img
                src={prayer2}
                alt="Prayer team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section className="py-24 bg-offwhite pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={community}
                alt="Church Community"
                className="rounded-3xl shadow-xl w-full object-cover sm:h-[500px]"
              />
              <div className="absolute -bottom-8 right-0 sm:-right-8 bg-navy-900 text-white p-8 rounded-2xl shadow-2xl flex flex-col justify-center items-center">
                <span className="text-4xl text-gold-500 font-serif font-bold mb-1">
                  2+
                </span>
                <span className="font-semibold text-sm tracking-wide">
                  Years of Ministry
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">
                Who We Are
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight">
                More Than a Church <br />
                <span className="text-gold-500 italic">A Family</span>
              </h2>
              <div className="space-y-6 text-gray-600 mb-10 text-lg leading-relaxed">
                <p>
                  Latterhouse Watchtower Ecclesia has been a
                  beacon of hope in our city for over a period. We believe
                  every person has inherent worth and a God given purpose. No
                  matter where you are in your faith journey, you are welcome
                  here.
                </p>
                {/* <p>
                  Our mission is simple: to love God wholeheartedly, love our
                  neighbors sacrificially, and make disciples who change the
                  world.
                </p> */}
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="w-10 h-10 mb-4 text-gold-500 bg-gold-500/10 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">
                    Biblical Teaching
                  </h4>
                  <p className="text-sm text-gray-600">
                    Rooted in Scripture, we seek to understand and apply God's
                    Word to every area of life.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 mb-4 text-gold-500 bg-gold-500/10 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">
                    Authentic Worship
                  </h4>
                  <p className="text-sm text-gray-600">
                    We pursue genuine encounters with God through Spirit-led
                    worship and heartfelt prayer.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 mb-4 text-gold-500 bg-gold-500/10 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">
                    Loving Community
                  </h4>
                  <p className="text-sm text-gray-600">
                    We are family committed to caring for one another and
                    reaching our wider community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
