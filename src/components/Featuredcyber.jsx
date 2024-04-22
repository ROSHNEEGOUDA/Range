import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import course1 from "/src/assets/course1.png";
import course2 from "/src/assets/course2.png";
import course3 from "/src/assets/course3.png";
import Course4 from "/src/assets/course4.png";
import course5 from "/src/assets/course5.png";
import course6 from "/src/assets/course6.png";
import '../index.css';

function Featured() {
  useEffect(() => {
    document.title = 'Cyber Fundamentals';
    const originalBackground = document.body.className;
    document.body.className = 'bg-gradient-animation';
    return () => {
      document.body.className = originalBackground;
    };
  }, []);

  return (
    <div>
      {/* Main Content */}
      <div>
        <center>
          <h1 
            className="text-5xl mt-10 font-Helvetica font-bold text-gray-800"
            style={{ textShadow: '0 0 10px #FFF, 0 0 20px #FFF, 0 0 30px #FFF, 0 0 40px #FFF' }}
          >
            Cybersecurity Fundamentals
          </h1>
          <h2 
            className="text-2xl mt-5 font-Helvetica text-gray-800"
            style={{ textShadow: '0 0 8px #FFF, 0 0 16px #FFF' }}
          >
            Featured Courses
          </h2>
        </center>
      </div>

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/cm1">
            <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
              <img src={course1} alt="Course1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Foundations in CyberSecurity</h2>
                <p className="text-gray-700">This is the First course that we want to sell to you</p>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/cm2">
            <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
              <img src={course2} alt="Course2" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Understanding Basics</h2>
                <p className="text-gray-700">The fundamentals of security and networking</p>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/cm1">
            <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
              <img src={course3} alt="Course3" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Course 3</h2>
                <p className="text-gray-700">This is the Third course that we want to sell to you</p>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to="/cm1">
            <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
              <img src={Course4} alt="Course4" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Course 4</h2>
                <p className="text-gray-700">This is the Fourth course that we want to sell to you</p>
              </div>
            </div>
          </Link>

          {/* Card 5 */}
          <Link to="/cm1">
            <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
              <img src={course5} alt="Course5" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Course 5</h2>
                <p className="text-gray-700">This is the Fifth course that we want to sell to you</p>
              </div>
            </div>
          </Link>

          {/* Card 6 */}
          <Link to="/cm1">
            <div className="max-w-md bg-white shadow-md rounded-md mb-20 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105">
              <img src={course6} alt="Course6" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Course 6</h2>
                <p className="text-gray-700">This is the Sixth course that we want to sell to you</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
