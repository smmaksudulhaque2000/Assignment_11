import React from "react";

const MoreStories = () => (
  <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">More Stories of Impact</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-3">
      <li>
        <strong>The Honest Wallet Return:</strong> How a Lost Wallet Found Its Way Back
      </li>
      <li>
        <strong>A Token of Kindness:</strong> A Stranger’s Effort to Reunite Lost Belongings
      </li>
      <li>
        <strong>Community Spirit:</strong> The Incredible Story of a Neighborhood Coming Together
      </li>
    </ul>
  </div>
);

const Rahim = () => {
  return (
    <div>
      <div className="bg-gray-100 py-8 px-6 min-h-screen font-poppins">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Honest Wallet Return: How a Lost Wallet Found Its Way Back</h3>
          <p className="text-gray-600 leading-relaxed">
            It was a regular day for Mr. Rahim, who was commuting home after a long day at work. As he boarded a crowded bus, little did he realize that his wallet had slipped out of his pocket. The wallet contained not only cash but also important documents and sentimental items that held great value to him. It wasn’t until he reached home and reached for his wallet that he discovered it was missing. Panic set in as he retraced his steps in his mind, trying to recall where he might have lost it.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Meanwhile, a young college student named Arman found the wallet on the bus floor. Realizing its importance, he decided to open it in hopes of identifying its owner. Inside, he found an ID card with Mr. Rahim’s contact details. Without hesitation, Arman called the number listed and informed Mr. Rahim about the wallet. Mr. Rahim was overwhelmed with relief and gratitude upon hearing the news.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The two arranged to meet at a nearby coffee shop. When they met, Arman handed over the wallet intact, with everything inside untouched. Mr. Rahim was moved by Arman’s honesty and thanked him profusely. He offered a monetary reward as a token of appreciation, but Arman politely declined, saying that doing the right thing was reward enough for him.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            This act of kindness did not go unnoticed. Other patrons at the coffee shop who witnessed the exchange applauded Arman’s gesture. Inspired by this story, some even shared similar experiences where strangers had gone out of their way to return lost belongings. Mr. Rahim later shared the incident on social media, praising Arman’s integrity and urging others to follow his example. The post went viral, sparking a wave of positivity and reminding everyone of the goodness that still exists in the world.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            For Mr. Rahim, the return of his wallet was more than just the recovery of lost items; it was a heartwarming reminder of the power of honesty and kindness. For Arman, it was an opportunity to make a difference and uphold values that define a good society. Their story became a beacon of hope, illustrating how small acts of honesty can leave a lasting impact on people’s lives.
          </p>
        </div>
        <MoreStories />
      </div>
    </div>
  );
};

export default Rahim;
