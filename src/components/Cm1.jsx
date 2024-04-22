import React, { useState } from "react";
import YouTube from "react-youtube";
import Introduction from "./Content/intoduction";
import History from "./Content/HistoryContent";
import CommonAttacks from "./Content/CommonAtt";
import Assessment from "./Content/Assessment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive';

const Cm1 = () => {
  const [activeModule, setActiveModule] = useState("Introduction");
  const [showToggleSidebar, setShowToggleSidebar] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 538 });
  const isTablet = useMediaQuery({ maxWidth: 1020 });

  const handleModuleClick = (moduleName) => {
    setActiveModule(moduleName);
    if (isMobile && showToggleSidebar) {
      setShowToggleSidebar(false);
    }
    else if(isTablet && showToggleSidebar){
      setShowToggleSidebar(false);
    }
  };

  const toggleSidebar = () => {
    setShowToggleSidebar(!showToggleSidebar);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white">

      {/* Toggle Sidebar */}
      {isMobile && (
        <div className={`lg:hidden absolute transition-all duration-500 overflow-hidden z-30`}>
          <button onClick={toggleSidebar}><FontAwesomeIcon icon={showToggleSidebar ? faTimes : faBars} /></button>
        </div>
      )}
      {isTablet && (
        <div className={`lg:hidden absolute transition-all duration-500 overflow-hidden z-30`}>
          <button onClick={toggleSidebar}><FontAwesomeIcon icon={showToggleSidebar ? faTimes : faBars} /></button>
        </div>
      )}

      {/* Content Dash */}
      <div className={`lg:w-1/4 flex flex-col gap-4 mr-6 items-center h-96 mt-12 rounded-2xl border-gray-200 p-4 bg-blue-100 ${!isMobile || showToggleSidebar ? 'block' : 'hidden'} ${isMobile ? 'absolute top-6 left-0 w-full h-full z-20' : 'relative'} ${!isTablet || showToggleSidebar ? 'block' : 'hidden'} ${isTablet ? 'absolute mb-7 left-0 h-full z-20' : 'relative'}`}>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6 mt-2  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Introduction")}
        >
          Introduction
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Course plan")}
        >
          Course plan
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("History")}
        >
          History
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Common attacks")}
        >
          Common attacks
        </div>
        <div
          className={`bg-white border-blue-500 border-2 w-40 h-10 mb-6  rounded-md justify-center items-center flex font-medium hover:bg-blue-500 hover:text-white hover:transition cursor-pointer transform transition-transform hover:scale-105`}
          onClick={() => handleModuleClick("Assessment")}
        >
          Assessment
        </div>
      </div>

      <div className="w-0 bg-black"></div>

      {/* Main Content */}
      <div className={`lg:w-3/4 p-4 mt-4 mb-4 ${isMobile && showToggleSidebar ? 'hidden' : 'block'} ${isTablet && showToggleSidebar ? 'hidden' : 'block'}`}>
        {activeModule === "Introduction" && (
          <div>
            <Introduction />
          </div>
        )}
        {activeModule === "Course plan" && (
          <div>
            <p className="text-[23px] font-[600] text-purple-600 ">
              This is a video to demonstrate the various capabilities of the
              course plan and the integration of items inside it
            </p>
            <YouTube videoId="L1M7uxZ95t4" />
          </div>
        )}
        {activeModule === "History" && <History />}
        {activeModule === "Common attacks" && <CommonAttacks />}
        {activeModule === "Assessment" && (
          <div>
            <Assessment />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cm1;
