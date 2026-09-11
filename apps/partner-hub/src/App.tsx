import React, { useState } from 'react';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardOverview } from './pages/DashboardOverview';
import { MyProfile } from './pages/MyProfile';
import { MyListings } from './pages/MyListings';
import { Campaigns } from './pages/Campaigns';
import { PerformanceAnalytics } from './pages/PerformanceAnalytics';
import { Messages } from './pages/Messages';
import { Resources } from './pages/Resources';
import { Billing } from './pages/Billing';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { partnerApi } from './services/api-client';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!partnerApi.getToken();
  });

  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (currentPath) {
      case '/profile':
        return <MyProfile />;
      case '/listings':
        return <MyListings />;
      case '/campaigns':
        return <Campaigns />;
      case '/analytics':
        return <PerformanceAnalytics />;
      case '/messages':
        return <Messages />;
      case '/resources':
        return <Resources />;
      case '/billing':
        return <Billing />;
      case '/settings':
        return <Settings />;
      case '/':
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout currentPath={currentPath} onNavigate={(path) => setCurrentPath(path)}>
      {renderContent()}
    </DashboardLayout>
  );
};
