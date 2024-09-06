import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../components/Dashboard/Dashboard';
import LeftSidebar from '../../components/Dashboard/LeftSidebar';
import CourseTable from '../../components/Dashboard/CourseTable';
import { useAppContext } from '../../contexts/AppContext';

const DashboardPage: React.FC = () => {
  const { state } = useAppContext();
  const userRole = state.user?.role;
  const userId = state.user?.id;
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!userRole) {
      navigate('/'); 
    }
  }, [userRole, navigate]);

  if (!userRole) {
    return null; 
  }
  
  const handleClick = () => {
      navigate('/createcourse');
  }

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 p-6">
        <Dashboard />
        <CourseTable role={userRole} id={userId} />
        
        
        <div className="text-right mt-4">
          <button 
            onClick={handleClick} 
            className="px-5 py-2 bg-sky-600 text-white rounded hover:bg-blue-700"
          >
            Create Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
