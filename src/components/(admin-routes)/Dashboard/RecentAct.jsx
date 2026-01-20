import React, { useState } from "react";
import {
  FiClock,
  FiUserPlus,
  FiActivity,
  FiEye,
  FiCheckCircle,
  FiEdit,
  FiShield,
} from "react-icons/fi";

function RecentAct() {
  const [activeTab, setActiveTab] = useState("all");

  const activities = [
    {
      id: 1,
      type: "user",
      title: "New User Registered",
      message: "John Doe registered with email john.doe@example.com",
      time: "10 minutes ago",
      icon: "user",
    },
    {
      id: 2,
      type: "user",
      title: "Profile Updated",
      message: "Jane updated her profile details",
      time: "25 minutes ago",
      icon: "edit",
    },
    {
      id: 3,
      type: "security",
      title: "Password Changed",
      message: "Admin password was updated",
      time: "1 hour ago",
      icon: "security",
    },
  ];

  const filteredActivities =
    activeTab === "all"
      ? activities
      : activities.filter((item) => item.type === activeTab);

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-lg transition ${
      activeTab === tab
        ? "bg-blue-600 text-white"
        : "bg-[#f7fafc] hover:bg-gray-200"
    }`;

  const iconMap = {
    user: <FiUserPlus className="text-blue-600" />,
    edit: <FiEdit className="text-yellow-600" />,
    security: <FiShield className="text-red-600" />,
  };

  return (
    <div className="w-full pb-10">
      <div className="w-[99%] rounded-lg shadow p-4 mt-20 bg-white">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <FiActivity className="text-blue-600 text-xl" />
            <h2 className="font-semibold text-lg">Recent Activities</h2>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setActiveTab("all")} className={tabStyle("all")}>
              All Activities
            </button>
            <button onClick={() => setActiveTab("user")} className={tabStyle("user")}>
              User Actions
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={tabStyle("security")}
            >
              Security
            </button>
          </div>

          <select className="border rounded-lg px-3 py-2 text-sm focus:outline-gray-300">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>

        {/* Notifications */}
        <div className="mt-8 w-[95%] mx-auto rounded-lg shadow bg-[#f7fafc] p-4 space-y-4">
          {filteredActivities.length === 0 ? (
            <p className="text-sm text-gray-500 text-center">
              No activities found
            </p>
          ) : (
            filteredActivities.map((item, index) => (
              <div key={item.id}>
                <div className="flex justify-between items-start cursor-pointer hover:bg-gray-100">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {iconMap[item.icon]}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.message}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                        <FiClock /> {item.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                      <FiEye /> View
                    </button>
                    <button className="flex items-center gap-1 text-sm text-green-600 hover:underline">
                      <FiCheckCircle /> Read
                    </button>
                  </div>
                </div>

                {index !== filteredActivities.length - 1 && (
                  <hr className="border-gray-200 mt-4" />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentAct;
