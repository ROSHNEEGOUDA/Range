import React, { useState } from "react";

const CommonAttacksContentPage1 = () => {
  return (
    <div className="py-8">
      <h1 className="text-[35px] text-center font-bold mb-4 text-blue-600">
        Common Attacks
      </h1><br />
      <div>
        <h3 className="text-[20px] font-bold mb-2 text-purple-800">
          I. Malware, Phishing, and Social Engineering
        </h3>
        <p className="text-gray-600 mb-4 text-[20px]">
          <span className="font-bold">Malware</span>
          <br />
          Definition: Malware, short for malicious software, is any
          harmful program or code designed to damage, disrupt, or gain
          unauthorized access to computer systems. Malware is one of the
          most common cybersecurity threats, and it's constantly evolving
          to find new ways to attack.
        </p><br />
        <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Types of Malware</span>
                <br />
                • Virus: A virus attaches itself to files or programs and
                requires human action to activate (like opening an infected
                attachment). It can then spread to other files on your computer.
                <br />
                • Worms: Worms exploit vulnerabilities in networks and can
                spread rapidly without any human interaction needed. This makes
                them particularly dangerous for networks of connected computers.
                <br />
                • Ransomware: This type of malware encrypts your files,
                rendering them inaccessible. The attackers demand a ransom
                payment, usually in cryptocurrency, in exchange for the
                decryption key.
                <br />
                • Spyware: Spyware operates stealthily, hiding in the background
                to monitor your online activity, log your keystrokes, and steal
                your personal information such as passwords and credit card
                data.
                <br />• Trojans: Trojans masquerade as legitimate software to
                trick you into downloading and installing them. Once on your
                system, they can create backdoors for attackers to gain access,
                steal data, or install other malware.
              </p>
        {/* Add more content for page 1 here */}
      </div>
    </div>
  );
};

const CommonAttacksContentPage2 = () => {
  return (
    <div className="py-8">
      <div>
      <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">How Malware Spreads</span>
                <br />
                • Email attachments: Opening infected attachments is a classic
                way malware spreads.
                <br />
                • Malicious links: Clicking on links in emails, social media
                posts, or even on compromised websites can redirect you to
                malicious sites or trigger automatic downloads.
                <br />
                • Drive-by downloads: Simply visiting a compromised website,
                even a normally reputable one, can trigger a drive-by download.
                Your system gets infected without you even clicking anything.
                <br />
                • Malvertising: Malicious advertisements, even on legitimate
                websites, can contain malware that infects your system when you
                interact with the ad or visit the linked site.
                <br />
                • Software vulnerabilities: Outdated software often contains
                security holes that malware can exploit to infiltrate a system.
                <br />• USB drives and other devices: Plugging in an infected
                device can spread malware to your computer.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Phishing</span>
                <br />
                Definition: Phishing is a type of cyberattack where criminals
                try to trick you into giving up sensitive information like login
                credentials, credit card numbers, or personal details. They do
                this by impersonating legitimate entities, such as your bank, a
                streaming service, or even a government agency.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Beyond Emails</span>
                <br />
                While email is a classic phishing delivery method, it's
                important to understand that phishing attacks can happen through
                various channels:
                <br />
                • Smishing (SMS Phishing): Phishing attacks delivered through
                text messages. These often pretend to be from your bank,
                delivery companies, or contain links to fake contests.
                <br />
                • Vishing (Voice Phishing): Criminals call you, impersonating a
                trusted organization, trying to extract information or get you
                to install malware through a link they send or a website they
                direct you to.
                <br />• Social Media Phishing: Fake profiles, direct messages,
                or ads on social media platforms can be used to phish. These
                might mimic a friend in need, a brand running a fake contest, or
                offer tech support scams.
              </p>
        {/* Add content for page 2 here */}
      </div>
    </div>
  );
};

const CommonAttacksContentPage3 = () => {
  return (
    <div className="py-8">
      <div>
      <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">
                  Red Flags of Phishing Attempts
                </span>
                <br />
                • Spelling and grammar errors: While some phishing attempts are
                sophisticated, many contain typos or awkward phrasing.
                <br />
                • Strange URLs: Hover your mouse (don't click!) over links in
                emails or messages. The real destination may be different from
                what's displayed, or have slight misspellings of legitimate
                websites.
                <br />
                • Sense of urgency: Phishing often tries to scare you ("Your
                account is suspended!") or excite you ("You won a prize!") to
                make you act quickly without thinking critically.
                <br />• Requests for unusual information: A legitimate website
                or company will rarely ask you to provide your password or full
                Social Security number via email or text.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                Remember: Phishing preys on trust and urgency. Always slow down,
                verify independently (go to the official website yourself), and
                report suspicious attempts.
              </p>
              <h3 className="text-[20px] font-bold mb-2 text-purple-800">
                II. Password Attacks
              </h3><br />
              <p className="text-gray-600 mb-4 text-[19px]">
                Beyond Just Bad Passwords
                <br />
                • You might be doing everything right, using strong, complex
                passwords...but that's not enough protection if:
                <br />
                • You reuse the same password across different websites: If one
                of those sites suffers a data breach, your other accounts become
                easy targets.
                <br />• You use weak security questions: Many sites use things
                like your mother's maiden name or your first pet for password
                recovery. That info can often be found on social media or public
                records!
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Password Best Practices</span>
                <br />
                • Length beats complexity: A long passphrase (like a full
                sentence) is often easier to remember than a short, complex
                password, AND more difficult for hacking tools to crack.
                <br />• Unique Passwords Matter: Treat each online account like
                it has a separate key. Breaches happen, it minimizes the damage
                if one password doesn't unlock everything.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Password Managers:</span>
                <br />
                • These tools securely generate and store complex, unique
                passwords for each of your accounts.
                <br />• You only need to remember one master password to access
                them all.
              </p>
        {/* Add content for page 3 here */}
      </div>
    </div>
  );
};
const CommonAttacksContentPage4 = () => {
  return (
    <div className="py-8">
      <div>
      <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">
                  Activity: Password Strength Test
                </span>
                <br />
                Use this website:{" "}
                <a
                  href="https://www.security.org/how-secure-is-my-password/"
                  className="text-blue-600 hover:underline"
                >
                  https://howsecureismypassword.net/
                </a>
                <br />
                Instructions for Students:
                <br />
                Try a password you currently use. Does the site say it would be
                easy to crack?
                <br />
                Now try a longer passphrase (think silly sentence with odd
                capitalization). See how much more secure that is!
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Important Reminders</span>
                <br />
                • Change compromised passwords immediately: If you hear about a
                data breach at a site you use, change your password there (and
                on any site where you reused that password!)
                <br />• Two-Factor Authentication (2FA): When available, enable
                2FA on your accounts. This adds an extra layer of security,
                usually a code sent to your phone, along with your password.
              </p>
              <h3 className="text-[20px] font-bold mb-2 text-purple-800">
                III. Basic Defense Mechanisms
              </h3>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Layered Security</span>
                <br />
                • Think of your online security like your home. You wouldn't
                just rely on a door lock, you'd also have windows with secure
                latches, maybe an alarm system - each adds another layer.
                <br />
                • Cybersecurity is the same! Antivirus is important, but so are
                strong passwords, smart browsing habits, and keeping software
                updated.
                <br />• Why it matters: Even the best tools can sometimes fail.
                A layered approach gives you multiple lines of defense, making
                it much harder for a cybercriminal to succeed.
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">
                  Beyond Software: Smart Online Habits
                </span>
                <br />
                • Treat links and attachments with suspicion: Before clicking,
                ask yourself: Do I trust the sender? Was I expecting this? Even
                if it seems to be from someone you know, their account could be
                hacked. If in doubt, don't click!
                <br />
                • Verify independently: Got a text from your bank about a login
                issue? Don't click the link in the text. Go to your bank's
                website directly or call a verified number from their official
                website.
                <br />
                • TMI on Social Media: The less you share about yourself online,
                the less ammunition scammers have to impersonate you or trick
                you.
                <br />
                • Avoid posting about when you're on vacation (empty house =
                target).
                <br />• Be careful with quizzes that ask for personal
                information (mother's maiden name, first pet, etc.). Those are
                often also security question answers!
              </p>
              <p className="text-gray-600 mb-4 text-[19px]">
                <span className="font-bold">Key Takeaway:</span> Technology is a
                powerful tool in cybersecurity, but YOU are the most important
                line of defense. Developing good cybersecurity habits makes you
                a much harder target for attackers.
              </p>
        {/* Add content for page 3 here */}
      </div>
    </div>
  );
};

const CommonAttacks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Total number of pages

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
      {currentPage === 1 && <CommonAttacksContentPage1 />}
      {currentPage === 2 && <CommonAttacksContentPage2 />}
      {currentPage === 3 && <CommonAttacksContentPage3 />}
      {currentPage === 4 && <CommonAttacksContentPage4 />}
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

export default CommonAttacks;
