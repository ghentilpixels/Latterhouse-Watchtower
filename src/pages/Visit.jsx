import { MapPin, Clock, Coffee, Car } from "lucide-react";

const Visit = () => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Plan a Visit</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're so glad you're thinking about joining us! Here's everything
            you need to know for your first visit.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Info Area */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-blue-600" /> Service Times
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <ul className="space-y-4 text-lg text-slate-700">
                  <li className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="font-semibold">
                      Sunday Encounter Service:
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                      9:00 AM & 11:00 AM
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Wednesday Bible Study</span>
                    <span className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-bold">
                      7:00 PM
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-blue-600" /> Location
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-lg text-slate-700">
                <p className="font-medium text-xl mb-1">
                  Latterhouse Watchtower ECCLESIA Main Campus
                </p>
                <p>123 Faith Avenue</p>
                <p>Cityville, CV 12345</p>
              </div>
            </div>
          </div>

          {/* Map Embed Container */}
          <div className="bg-slate-100 rounded-3xl p-2 shadow-inner h-[500px]">
            {/* Real maps embed should go here; using placeholder visual matching instructions */}
            <div className="w-full h-full bg-slate-200 rounded-2xl overflow-hidden shadow-sm relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1d3151.83543450937!2d144.9537353153163!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1611110000000!5m2!1sen!2sau"
                className="w-full h-full border-0 absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <section className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Coffee className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Warm Welcome
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Grab a complimentary cup of coffee in the lobby, and stop by
                  the Next Steps desk if you have any questions. We're a
                  friendly bunch!
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <Car className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Easy Parking
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We have dedicated visitor parking right near the main
                  entrance. Follow the signs, and our parking team will direct
                  you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Visit;
