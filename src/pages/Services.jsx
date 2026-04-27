import heroImg from "../assets/hero.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Sunday Encounter Service",
      time: "5:00 PM",
      description:
        "Join us for a powerful time of worship, prayer, and an inspiring message from God's Word. Our Sunday gatherings are designed to help you encounter God and connect with others.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Midweek Wednesday Service",
      time: "Wednesdays 5:00 PM",
      description:
        "Dive deeper into Scripture with our interactive Bible study sessions. These smaller gatherings are perfect for asking questions, sharing insights, and growing spiritually.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      id: 3,
      title: "Youth Ministry",
      time: "Fridays at 6:30 PM",
      description:
        "A vibrant, engaging environment for teenagers and young adults to discover their purpose, build lasting friendships, and learn how to navigate life with faith.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImg}
            alt="Worship service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join us as we gather to worship, learn, and grow together in faith.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="bg-blue-50 p-8 rounded-2xl h-full border border-blue-100 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <div className="inline-block bg-slate-900 text-white font-semibold px-4 py-2 rounded-lg mb-4 text-sm self-start">
                    {service.time}
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      : index === 1
                        ? "https://images.unsplash.com/photo-1494635154388-c715f33fc514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        : "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  }
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect / Call to Action */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What to Expect
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Whether you've grown up in church or this is your first time
            checking it out, we want you to feel welcome. Come as you are, enjoy
            a cup of coffee, and experience a genuinely welcoming community.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-2 text-slate-900">
                Welcoming Atmosphere
              </h3>
              <p className="text-slate-600">
                You'll be greeted with a smile. We want everyone to feel at home
                the moment they arrive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-2 text-slate-900">
                Engaging Worship
              </h3>
              <p className="text-slate-600">
                Our worship is modern, heartfelt, and centered on encountering
                God together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-2 text-slate-900">
                Relevant Teaching
              </h3>
              <p className="text-slate-600">
                We teach practically from the Bible, aiming to inspire everyday
                living.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
