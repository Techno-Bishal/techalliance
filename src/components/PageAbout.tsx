import Image from 'next/image';
import pageAbout from '../assets/pageabout.jpeg'

const PageAbout = () => {
  return (
    <section className="bg-purple-100 text-purple-900 py-20 px-6 md:px-16 lg:px-24">
      <h3 className="text-3xl font-bold text-center text-purple-700 mb-12">
        About Tech Alliance
      </h3>

      <div className="container max-w-screen-2xl mx-auto px-4 lg:px-28 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={pageAbout} // ✅ Corrected: Use public folder image
            alt="about-img"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Empowering Minds, Unlocking Potential
          </h2>
          <p className="mb-4 text-base leading-relaxed text-purple-800">
            Tech Alliance is a tech-driven community with the motto "Together We Grow." 
            The group provides various technology services, including web development, 
            app development, and SEO. The primary goal of Tech Alliance is to foster 
            a collaborative environment where members can learn, grow, and advance 
            professionally in the tech industry.
          </p>

          <div className="mb-6 text-base leading-relaxed text-purple-800"> {/* ✅ Fixed incorrect class syntax */}
            <h2 className="text-xl font-semibold">Vision & Missions</h2>
            <p className="mb-2"><strong>Vision:</strong> To create a strong tech community where innovation, learning, and collaboration drive growth.</p>
            <p className="mb-2"><strong>Mission:</strong> To provide high-quality tech solutions while empowering members to enhance their skills and contribute to the industry.</p>
          </div>
         
          <ul className="space-y-2 mb-6 text-purple-800">
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔️</span> Hands-On Projects
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔️</span> Flexible Learning
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 mr-2">✔️</span> WhatsApp Community
            </li>
          </ul>

          <button className="bg-purple-500 text-white cursor-pointer font-semibold py-3 px-6 rounded-lg transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default PageAbout;
