import React, { useState } from "react";

const HistoryContentPage1 = () => {
  return (
    <div className="text-gray-800">
      <h2 className="text-[25px] font-bold mb-4 text-center text-purple-700">
        3. History – How different technologies and new threats emerged and
        affected
      </h2>
      <p className="mb-4 text-black text-left font-[500] text-[17px]">
        The history of cybersecurity is a story of constant evolution. As new
        technologies emerged, offering groundbreaking possibilities for
        connection and progress, clever and malicious individuals inevitably
        found ways to exploit them. Early on, cyber threats were more like
        pranks, but they laid the groundwork for the organized cybercrime and
        potentially devastating attacks that plague our modern world. Let's take
        a journey through time and see how this battle between innovation and
        exploitation unfolded.
      </p>
      <div className="mb-6 ">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                The Early Days (1970s-1980s)
              </h3>
              <ul className="list-disc ml-6 text-[16px] font-normal">
                <li>The birth of the internet (ARPANET)</li>
                <li>
                  The Creeper Virus: A mostly harmless, but groundbreaking
                  experiment
                </li>
                <li>
                  Focus: Vulnerabilities of a new technology, early antivirus
                  concepts
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                The Rise of Personal Computers & Hacking (1990s)
              </h3>
              <ul className="list-disc ml-6">
                <li>Home computers = more targets</li>
                <li>Early hacking groups, driven by curiosity and mischief</li>
                <li>
                  High-profile hacks begin to expose data security weaknesses
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                Cybercrime Explodes (2000s)
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  Internet shopping & banking make data theft highly profitable
                </li>
                <li>Malware gets sophisticated: worms, ransomware, etc.</li>
                <li>Attacks turn political, with state-sponsored hacking</li>
              </ul>
            </div>
      {/* Additional content for page 1 goes here */}
    </div>
  );
};

const HistoryContentPage2 = () => {
  return (
    <div className="text-gray-800">
      <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                The Mobile and Cloud Era (2010s - Present)
              </h3>
              <ul className="list-disc ml-6">
                <li>Smartphones = a wealth of personal data</li>
                <li>
                  Cloud storage offers huge targets, attacks on services we rely
                  on
                </li>
                <li>
                  Social engineering attacks become common (phishing gets
                  clever)
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 text-[20px]">
                Recent Developments (2020s - Present)
              </h3>
              <ul className="list-disc ml-6">
                <li>
                  The Pandemic Shift:
                  <ul className="list-disc ml-6 ">
                    <li>Remote work = more attack points</li>
                    <li>Increased targeting of healthcare data</li>
                  </ul>
                </li>
                <li>
                  Ransomware as a Service:
                  <ul className="list-disc ml-6">
                    <li>
                      Sophisticated attack tools become easily accessible to
                      less-skilled criminals
                    </li>
                    <li>
                      Deepfakes & AI-Powered Threats: Manipulated videos and
                      audio create new avenues for misinformation and fraud
                    </li>
                    <li>
                      Supply Chain Attacks: Targeting a single company/software
                      can impact thousands downstream
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <p className="mb-4 text-black text-left font-[500] text-[17px]">
              New technologies continue to revolutionize how we live, work, and
              communicate. From artificial intelligence to the Internet of
              Things (IoT), each breakthrough brings both promise and new risks.
              Understanding the past patterns of cyberattacks helps us
              anticipate and protect against future threats. While cybersecurity
              will always be an ongoing challenge, learning about its history
              empowers us to build a more secure digital future, ensuring
              technology remains a force for good.
            </p>
    </div>
  );
};

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Total number of pages

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {currentPage === 1 && <HistoryContentPage1 />}
      {currentPage === 2 && <HistoryContentPage2 />}
      <div className="flex justify-between mt-4">
        {currentPage > 1 && (
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrevPage}
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextPage}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default History;
