import { Link } from "react-router-dom";
import lostItem1 from "../assets/images/story.jpg";
import lostItem2 from "../assets/images/story2.jpg";
import lostItem3 from "../assets/images/story3jpeg.jpeg";
import Marquee from "react-fast-marquee";

const Story = () => {
  return (
    <div className="font-poppins">
      <section id="stories-of-impact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-center font-bold text-3xl text-sky-600">Lost and Found Stories</h2>
            <p className="w-full lg:w-3/4 mx-auto text-center my-5 text-slate-500">Explore the inspiring stories of lost items being reunited with their rightful owners. These real-life accounts highlight the impact of kindness and community in bringing hope and happiness to those who thought their belongings were gone forever. Be part of this journey of rediscovery and connection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={lostItem1} alt="Lost Item Story" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">A Wallet Reunited</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                  A heartfelt journey of a lost wallet returned with everything intact...
                  </p>
                </Marquee>
                <Link to="/wallet-story" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={lostItem2} alt="Lost Item Story" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">A Missing Pet's Return</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                  The emotional reunion of a family and their beloved dog...
                  </p>
                </Marquee>
                <Link to="/pet-story" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={lostItem3} alt="Lost Item Story" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">The Lost Necklace</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                  An heirloom necklace found and returned to its grateful owner...
                  </p>
                </Marquee>
                <Link to="/necklace-story" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/items"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Post About Lost/Found Items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
