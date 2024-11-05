
import Footer from "./Footer";
import Why from "./Why";
const About =()=>{
    return(
        <>
        <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/image5.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-6xl text-center pt-60">
        About Us
      </div>
    </div>
    <div className="flex justify-center space-x-8 p-8">
      {/* Card 1 */}
      <div className="group relative w-[700px] h-64 bg-gray-700 rounded-lg shadow-lg flex items-center justify-center">
        {/* Icon */}
        <div className="text-white group-hover:opacity-0 transition-opacity duration-300">
          <div className="text-6xl">🚀</div>
          <div className="text-2xl text-bold">our mission</div>
        </div>
        {/* Write-up to display on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg bg-purple-400 transition-opacity duration-1000 px-4">
          <p className="text-white text-lg text-center">Opti-care Eye clinic exist to deliver world class eye care services to everyone with dedication, care and the blessings of God in a friendly and cost effective manner.</p>
        </div>
      </div>
     
      {/* Card 2 */}
      <div className="group relative w-[700px] h-64 bg-gray-700 rounded-lg shadow-lg flex items-center justify-center">
        {/* Icon */}
        <div className="text-white group-hover:opacity-0 transition-opacity duration-300">
          <div className="text-6xl"> 🎯</div>
          <div className="text-2xl text-bold">our mission</div>
        </div>
        {/* Write-up to display on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg bg-purple-400 transition-opacity duration-1000 px-4">
          <p className="text-white text-lg text-center">To become a center of excellence in Eye care by delivering the best eye services that caters for all categories of people through research and hard work.

</p>
        </div>
      </div>
      </div>
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/mbah2.png" 
            alt="Opti-Care Eye Clininic"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="leading-relaxed mb-4">
            Opti-Care Eye Clinic was established in ....... and began as one of the few dedicated, comprehensive eye clinic in Port Harcourt, Nigeria, diagnosing and treating the entire spectrum of conditions of the eye, including complex problems such as glaucoma, cataracts, diabetic retinopathy, retinal detachments, macular degeneration, uveitis, strabismus, pediatric eye disorders, etc.
          </p>
          <p className="leading-relaxed mb-4">
            Dedicated to the protection, preservation, and restoration of vision, we provide treatment for children who have a world to discover and explore, as well as for adults.
          </p>
          <p className="leading-relaxed">
            Right from its inception, it had the most advanced equipment in diagnostics. Our expert doctors, equipped with knowledge and hands-on experience, handle even the most complex eye care needs. Our specialized team covers all areas of ophthalmology, providing patients with comprehensive diagnosis and treatment.
          </p>
          <button className="p-2 font-bold text-white rounded-full mt-4 w-40 bg-black hover:scale-95">
          Find out more
        </button>
        </div>
      </div>
    </section>
    <Why/>
    <Footer/>
    </>
    
          
    )
}
export default About;