import { Heart, Smartphone, Building2 } from 'lucide-react';

const Giving = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Giving</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."<br />  2 Cor 9:7
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Giving CTA */}
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-16 text-center max-w-4xl mx-auto mb-24 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500" />
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your generosity helps us continue our mission in the community,
            support our local ministries, and extend our reach globally. Thank
            you for partnering with Latterhouse Watchtower Ecclesia.
          </p>
          <a
            href="#"
            className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto transform hover:-translate-y-1"
          >
            Give Online Now
          </a>
        </div>

        {/* Other Ways to Give */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Other Ways to Give
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mobile Money */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Mobile Money
                </h4>
              </div>
              <p className="text-slate-600 mb-6">
                Send your tithe or offering securely via our trusted mobile
                money lines.
              </p>
              <div className="space-y-4 font-mono text-lg bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">MTN MoMo:</span>
                  <span className="font-bold text-slate-900">054-091-5475</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Vodafone Cash:</span>
                  {/* <span className="font-bold text-slate-900">020-987-6543</span> */}
                </div>
                <div className="pt-2 mt-2 border-t border-slate-200">
                  <span className="text-sm text-slate-800 italic block mt-1">
                    Name: Latterhouse Watchtower Ecclesia
                  </span>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                  <Building2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Bank Transfer
                </h4>
              </div>
              <p className="text-slate-600 mb-6">
                Set up a recurring transfer or send a direct deposit to our main
                bank account.
              </p>
              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700">
                <p>
                  <span className="text-slate-500 block text-sm">
                    Bank Name
                  </span>{" "}
                  <span className="font-bold">National Faith Bank</span>
                </p>
                <p>
                  <span className="text-slate-500 block text-sm">
                    Account Name
                  </span>{" "}
                  <span className="font-bold">
                    Latterhouse Watchtower Ecclesia Global
                  </span>
                </p>
                <p>
                  <span className="text-slate-500 block text-sm">
                    Account Number
                  </span>{" "}
                  <span className="font-mono font-bold tracking-wider">
                    {/* 1234567890 */}
                  </span>
                </p>
                <p>
                  <span className="text-slate-500 block text-sm">Branch</span>{" "}
                  <span className="font-bold">City Center Branch</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giving;
