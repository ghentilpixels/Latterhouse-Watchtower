import { team } from "../data/dummyData";
import aboutImg from "../assets/About.jpg";
import congImage from "../assets/cong.jpg";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 ">
          <img
            src={congImage}
            alt="Church congregation"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Latterhouse Watchtower
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We are a community driven by purpose, faith, and a desire to make
            God's love known in our city.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story & Mission */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Latterhouse Watchtower Ecclesia has been a beacon of hope in our
                city for over a period. We believe every person has inherent
                worth and a God given purpose. No matter where you are in your
                faith journey, you are welcome here.
              </p>

              {/* <p>
                Over the years, we've grown in numbers but our core remains
                unchanged. We believe that the church is not a building, but a
                people a family united by the grace of Jesus Christ.
              </p> */}
            </div>

            <div className="mt-2 p-4 bg-blue-50 rounded-2xl ">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Vision:</h3>
              <p>
                To raise spiritually sensitive watchmen with apostolic
                authority.
              </p>
            </div>

            <div className="mt-10 p-8 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Our Mission
              </h3>
              <ol className="text-blue-800 italic text-lg">
                <li>
                  - Equip believers 
                  - Build intercessory base 
                  - Establish kingdom systems 
                  - Reveal Christ
                </li>
              </ol>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] transform rotate-3 z-0"></div>
            <img
              src={aboutImg}
              alt="Community gathering"
              className="relative z-10 rounded-2xl shadow-xl w-full"
            />
          </div>
        </section>

        {/* Leadership Team */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the dedicated team serving and guiding our church community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
