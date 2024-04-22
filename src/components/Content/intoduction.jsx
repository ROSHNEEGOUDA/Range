import React, { useState } from "react";

const IntroductionContent = () => {
  return (
    <div>
      <h2 className="text-[23px] font-semibold mb-4 text-blue-600 hover:text-blue-900 text-center">
        I. Overview of Cybersecurity
      </h2>
      <p className="text-black text-left font-[500] text-[17px]">
              What is Cybersecurity? Imagine your home is filled with your most
              important things: photos, keepsakes, financial documents, and
              things you use every day. You wouldn't leave your doors and
              windows wide open, would you? You'd want them locked to keep the
              wrong people out!
            </p>
            <br />
            <p className="text-black text-left font-[500] text-[17px]">
              In the digital world: Your data is your treasure: This includes
              your personal information, photos, banking details, basically
              everything stored on your computer or that you share online.
              Computers and networks are the doors and windows: Your computer,
              phone, and the internet connection are how you access this digital
              world, and also how others might try to get in. Cybersecurity is
              your protection: It's like the locks, the alarm system, and all
              the ways you keep your home (and valuable stuff) safe.
              Cybersecurity tools and practices protect your digital treasures
              from being stolen, damaged, or used by those who shouldn't have
              access.
            </p>
            <br />
            <p className="text-black text-left font-[500] text-[17px]">
              So, in real context… Cybersecurity is the practice of protecting
              systems, networks, and data from digital attacks. These
              cyberattacks are constantly evolving, but some of the most common
              goals include: Unauthorized access: When someone gains access to a
              system or data they shouldn't have. This is like someone breaking
              into your home. Theft: Stealing sensitive information, such as
              financial data, personal details, or company secrets. Damage:
              Intentionally harming or deleting data, or disrupting the
              operations of computer systems. Imagine a burglar smashing things
              in your home for no reason. Disruption: Preventing businesses,
              services, or even governments from functioning properly through
              attacks on their digital infrastructure.
            </p>
            <br />
            <p className="text-black text-left font-[500] text-[17px]">
              Key Points to Remember Cybersecurity is similar to protecting your
              physical belongings, but in the digital world. It utilizes a
              combination of technologies, processes, and good practices to
              defend against cyber threats. Due to our increasing reliance on
              technology, cybersecurity is more important than ever for
              individuals, businesses, and entire nations.np
            </p><br />
      {/* Additional content goes here */}
    </div>
  );
};

const ImportanceContent = () => {
  return (
    <div>
      <h2 className="text-[23px] font-semibold mb-4 text-center text-blue-600 hover:text-blue-900">
        II. Importance of Cybersecurity in the Digital Age
      </h2>
      <p className="text-black text-left font-[500] text-[17px]">
        Why Cybersecurity Matters? We live in a world where almost everything
        important to us has a digital version. We shop online, bank online,
        even connect with our friends and doctors through computers and the
        internet. Cybercriminals, just like burglars, want to exploit this for
        their own gain. Cybersecurity is the way we defend ourselves against:
        Identity theft: When someone steals your details (like your name and
        bank information) to pretend to be you. Viruses and malware: Nasty
        programs that can mess up your computer, steal your information, or
        even spy on you. Hackers: People who try to break into computer systems
        to steal information or cause trouble.
      </p>
      {/* Additional content goes here */}
    </div>
  );
};

const Introduction = () => {
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
      {currentPage === 1 && <IntroductionContent />}
      {currentPage === 2 && <ImportanceContent />}
      <div className="flex justify-between mt-4">
        {currentPage > 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrevPage}
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextPage}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Introduction;
