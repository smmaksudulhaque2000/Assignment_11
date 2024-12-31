import React, { useEffect } from "react";
import profile from "../assets/images/profile.png";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpeg";
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="flex flex-col py-10 px-5 gap-8 bg-gray-300 ">
      <h3 className="text-center font-bold text-3xl text-sky-600">
        About Us
      </h3>
      <p className="w-full lg:w-3/4 mx-auto text-center my-5 text-slate-500">
        Our platform bridges the gap between people who have lost something and those who have found items. We provide a space where users can post details about their lost belongings or report items they have found. Our goal is to help reconnect lost items with their rightful owners through a simple and efficient process. Join us in creating a community that values honesty, responsibility, and mutual support.
      </p>

      <div className="bg-gray-600 p-6 rounded-lg shadow-md w-3/4 mx-auto text-center">
        <h4 className="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h4>
        <p className="text-gray-400">
          Our mission is to create a reliable platform for reuniting people with their lost items. We strive to foster trust and integrity within our community by encouraging individuals to report items they have found and search for their lost possessions. Together, we can build a network of support that makes finding lost items easier and more effective.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-3/4 mx-auto">
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-left">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Post Lost Items</h4>
          <p className="text-gray-600">
            Lost something valuable? Create a post with the details of your lost item to help others identify and return it to you. Provide clear descriptions and images for better visibility.
          </p>
        </div>
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-down">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Report Found Items</h4>
          <p className="text-gray-600">
            Found an item that seems important to someone? Post the details on our platform and help reunite the item with its rightful owner. Your honesty can make a big difference.
          </p>
        </div>
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-right">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Search Lost & Found</h4>
          <p className="text-gray-600">
            Looking for a lost item? Browse through the posts to see if someone has already found it. Use filters and search options to locate items quickly and efficiently.
          </p>
        </div>
      </div>

      <div className="w-4/4 mx-auto text-center">
        <h4 className="text-2xl font-semibold text-gray-800 mb-5">Meet Our Team</h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">John Doe</h5>
            <p className="text-gray-600 text-sm">Platform Developer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile2}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">Jane Smith</h5>
            <p className="text-gray-600 text-sm">Community Manager</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile3}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">Emily Johnson</h5>
            <p className="text-gray-600 text-sm">Support Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
