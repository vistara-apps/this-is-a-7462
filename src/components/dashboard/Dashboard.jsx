import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Smartphone, 
  Globe, 
  Users, 
  Settings,
  Bell,
  TrendingUp,
  Zap,
  Lock
} from 'lucide-react';

const Dashboard = ({ user }) => {
  const [securityStatus, setSecurityStatus] = useState('protected');
  const [threats, setThreats] = useState([]);
  const [devices, setDevices] = useState([]);
  const [stats, setStats] = useState({
    threatsBlocked: 1247,
    devicesProtected: 5,
    uptime: 99.9,
    lastScan: '2 minutes ago'
  });

  useEffect(() => {
    // Simulate loading dashboard data
    const loadDashboardData = async () => {
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setThreats([
        {
          id: 1,
          type: 'Malware',
          severity: 'high',
          description: 'Suspicious file blocked from download',
          timestamp: '5 minutes ago',
          status: 'blocked'
        },
        {
          id: 2,
          type: 'Phishing',
          severity: 'medium',
          description: 'Suspicious email link detected',
          timestamp: '1 hour ago',
          status: 'blocked'
        },
        {
          id: 3,
          type: 'Network',
          severity: 'low',
          description: 'Unusual network activity monitored',
          timestamp: '3 hours ago',
          status: 'monitored'
        }
      ]);

      setDevices([
        {
          id: 1,
          name: 'MacBook Pro',
          type: 'laptop',
          status: 'protected',
          lastSeen: '2 minutes ago',
          threats: 0
        },
        {
          id: 2,
          name: 'iPhone 15',
          type: 'mobile',
          status: 'protected',
          lastSeen: '5 minutes ago',
          threats: 0
        },
        {
          id: 3,
          name: 'iPad Air',
          type: 'tablet',
          status: 'protected',
          lastSeen: '1 hour ago',
          threats: 0
        }
      ]);
    };

    loadDashboardData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'protected': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'danger': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'protected': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'danger': return AlertTriangle;
      default: return Shield;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const StatusIcon = getStatusIcon(securityStatus);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="glass-effect border-b border-purple-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-purple-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Security Dashboard</h1>
                <p className="text-sm text-purple-200">Welcome back, {user?.firstName || 'User'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 glass-effect rounded-lg hover:bg-purple-500/20 transition-all duration-200">
                <Bell className="h-5 w-5 text-purple-400" />
              </button>
              <button className="p-2 glass-effect rounded-lg hover:bg-purple-500/20 transition-all duration-200">
                <Settings className="h-5 w-5 text-purple-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Status Card */}
        <div className="mb-8">
          <div className="card-gradient rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${
                  securityStatus === 'protected' ? 'from-green-500 to-emerald-500' :
                  securityStatus === 'warning' ? 'from-yellow-500 to-orange-500' :
                  'from-red-500 to-pink-500'
                }`}>
                  <StatusIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white capitalize">{securityStatus}</h2>
                  <p className="text-purple-200">Your devices are secure and monitored</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{stats.uptime}%</div>
                <div className="text-purple-200">Uptime</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stats.threatsBlocked.toLocaleString()}</div>
                <div className="text-purple-300">Threats Blocked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stats.devicesProtected}</div>
                <div className="text-purple-300">Devices Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stats.lastScan}</div>
                <div className="text-purple-300">Last Security Scan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Threats */}
          <div className="card-gradient rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-2" />
                Recent Threats
              </h3>
              <button className="text-purple-300 hover:text-purple-200 text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {threats.map((threat) => (
                <div key={threat.id} className="glass-effect rounded-2xl p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}>
                          {threat.severity.toUpperCase()}
                        </span>
                        <span className="text-white font-medium">{threat.type}</span>
                      </div>
                      <p className="text-purple-200 text-sm mb-2">{threat.description}</p>
                      <p className="text-purple-300 text-xs">{threat.timestamp}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      threat.status === 'blocked' ? 'bg-green-500/20 text-green-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {threat.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protected Devices */}
          <div className="card-gradient rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Smartphone className="h-6 w-6 text-blue-400 mr-2" />
                Protected Devices
              </h3>
              <button className="text-purple-300 hover:text-purple-200 text-sm font-medium">
                Manage
              </button>
            </div>
            
            <div className="space-y-4">
              {devices.map((device) => (
                <div key={device.id} className="glass-effect rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        {device.type === 'laptop' && <Globe className="h-5 w-5 text-white" />}
                        {device.type === 'mobile' && <Smartphone className="h-5 w-5 text-white" />}
                        {device.type === 'tablet' && <Smartphone className="h-5 w-5 text-white" />}
                      </div>
                      <div>
                        <div className="text-white font-medium">{device.name}</div>
                        <div className="text-purple-300 text-sm">Last seen: {device.lastSeen}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        device.status === 'protected' ? 'bg-green-400' : 'bg-red-400'
                      }`}></div>
                      <span className={`text-sm font-medium ${getStatusColor(device.status)}`}>
                        {device.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="card-gradient rounded-2xl p-6 hover:scale-105 transition-all duration-200 text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Run Security Scan</h4>
              <p className="text-purple-200 text-sm">Perform a comprehensive security check</p>
            </button>

            <button className="card-gradient rounded-2xl p-6 hover:scale-105 transition-all duration-200 text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Update Passwords</h4>
              <p className="text-purple-200 text-sm">Review and update your passwords</p>
            </button>

            <button className="card-gradient rounded-2xl p-6 hover:scale-105 transition-all duration-200 text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">View Reports</h4>
              <p className="text-purple-200 text-sm">Access detailed security reports</p>
            </button>

            <button className="card-gradient rounded-2xl p-6 hover:scale-105 transition-all duration-200 text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 mb-4 group-hover:scale-110 transition-transform duration-200">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Manage Team</h4>
              <p className="text-purple-200 text-sm">Add or remove team members</p>
            </button>
          </div>
        </div>

        {/* Security Tips */}
        <div className="mt-8">
          <div className="card-gradient rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
              Security Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-4">
                <h4 className="text-white font-semibold mb-2">Enable Two-Factor Authentication</h4>
                <p className="text-purple-200 text-sm">Add an extra layer of security to your accounts with 2FA.</p>
              </div>
              <div className="glass-effect rounded-2xl p-4">
                <h4 className="text-white font-semibold mb-2">Keep Software Updated</h4>
                <p className="text-purple-200 text-sm">Regular updates patch security vulnerabilities.</p>
              </div>
              <div className="glass-effect rounded-2xl p-4">
                <h4 className="text-white font-semibold mb-2">Use Strong Passwords</h4>
                <p className="text-purple-200 text-sm">Create unique, complex passwords for each account.</p>
              </div>
              <div className="glass-effect rounded-2xl p-4">
                <h4 className="text-white font-semibold mb-2">Be Cautious with Links</h4>
                <p className="text-purple-200 text-sm">Verify links before clicking, especially in emails.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
