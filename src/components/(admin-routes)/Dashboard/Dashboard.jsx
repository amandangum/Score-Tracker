// components/Dashboard.jsx
import React from 'react';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    { title: 'Total Students', value: '1,248', icon: UserGroupIcon, color: 'bg-blue-500', change: '+12%' },
    { title: 'Active Courses', value: '24', icon: AcademicCapIcon, color: 'bg-green-500', change: '+3' },
    { title: 'Average Score', value: '87.5%', icon: ChartBarIcon, color: 'bg-purple-500', change: '+2.3%' },
    { title: 'Completion Rate', value: '94%', icon: ArrowTrendingUpIcon, color: 'bg-orange-500', change: '+5%' },
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'completed Math 101', score: '95%', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'submitted Physics assignment', score: '88%', time: '4 hours ago' },
    { user: 'Mike Johnson', action: 'achieved high score in Chemistry', score: '98%', time: '6 hours ago' },
    { user: 'Sarah Wilson', action: 'completed final exam', score: '91%', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-600 mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Charts & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Score Distribution Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Score Distribution</h2>
          <div className="space-y-4">
            {[
              { label: '90-100%', value: 35, color: 'bg-green-500' },
              { label: '80-89%', value: 45, color: 'bg-blue-500' },
              { label: '70-79%', value: 15, color: 'bg-yellow-500' },
              { label: 'Below 70%', value: 5, color: 'bg-red-500' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{activity.score}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;