/**
 * API Service for RightGuards Cards
 * Handles all API communications with the backend
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.rightguards.com';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('auth_token');
  }

  /**
   * Set authentication token
   * @param {string} token - JWT token
   */
  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  /**
   * Get authentication token
   * @returns {string|null} JWT token
   */
  getToken() {
    return this.token || localStorage.getItem('auth_token');
  }

  /**
   * Make HTTP request with proper headers
   * @param {string} endpoint - API endpoint
   * @param {object} options - Fetch options
   * @returns {Promise<any>} Response data
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getToken();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      // Handle different response types
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        throw new ApiError(
          data.message || `HTTP error! status: ${response.status}`,
          response.status,
          data
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network error occurred', 0, error);
    }
  }

  /**
   * GET request
   * @param {string} endpoint - API endpoint
   * @param {object} params - Query parameters
   * @returns {Promise<any>} Response data
   */
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request(url, { method: 'GET' });
  }

  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @returns {Promise<any>} Response data
   */
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {object} data - Request body
   * @returns {Promise<any>} Response data
   */
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @returns {Promise<any>} Response data
   */
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // Authentication endpoints
  async login(credentials) {
    const response = await this.post('/auth/login', credentials);
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  async register(userData) {
    const response = await this.post('/auth/register', userData);
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  async logout() {
    try {
      await this.post('/auth/logout');
    } finally {
      this.setToken(null);
    }
  }

  async refreshToken() {
    const response = await this.post('/auth/refresh');
    if (response.token) {
      this.setToken(response.token);
    }
    return response;
  }

  async forgotPassword(email) {
    return this.post('/auth/forgot-password', { email });
  }

  async resetPassword(token, password) {
    return this.post('/auth/reset-password', { token, password });
  }

  // User profile endpoints
  async getProfile() {
    return this.get('/user/profile');
  }

  async updateProfile(profileData) {
    return this.put('/user/profile', profileData);
  }

  async changePassword(passwordData) {
    return this.put('/user/change-password', passwordData);
  }

  // Security card endpoints
  async getCards() {
    return this.get('/cards');
  }

  async getCard(cardId) {
    return this.get(`/cards/${cardId}`);
  }

  async createCard(cardData) {
    return this.post('/cards', cardData);
  }

  async updateCard(cardId, cardData) {
    return this.put(`/cards/${cardId}`, cardData);
  }

  async deleteCard(cardId) {
    return this.delete(`/cards/${cardId}`);
  }

  // Security monitoring endpoints
  async getSecurityStatus() {
    return this.get('/security/status');
  }

  async getThreats(params = {}) {
    return this.get('/security/threats', params);
  }

  async getThreatDetails(threatId) {
    return this.get(`/security/threats/${threatId}`);
  }

  async getSecurityAnalytics(params = {}) {
    return this.get('/security/analytics', params);
  }

  async runSecurityScan() {
    return this.post('/security/scan');
  }

  // Device management endpoints
  async getDevices() {
    return this.get('/devices');
  }

  async addDevice(deviceData) {
    return this.post('/devices', deviceData);
  }

  async updateDevice(deviceId, deviceData) {
    return this.put(`/devices/${deviceId}`, deviceData);
  }

  async removeDevice(deviceId) {
    return this.delete(`/devices/${deviceId}`);
  }

  // Subscription and billing endpoints
  async getSubscription() {
    return this.get('/billing/subscription');
  }

  async updateSubscription(planId) {
    return this.put('/billing/subscription', { planId });
  }

  async cancelSubscription() {
    return this.delete('/billing/subscription');
  }

  async getInvoices() {
    return this.get('/billing/invoices');
  }

  async getPaymentMethods() {
    return this.get('/billing/payment-methods');
  }

  async addPaymentMethod(paymentMethodData) {
    return this.post('/billing/payment-methods', paymentMethodData);
  }

  async removePaymentMethod(paymentMethodId) {
    return this.delete(`/billing/payment-methods/${paymentMethodId}`);
  }

  // Team management endpoints (Enterprise)
  async getTeamMembers() {
    return this.get('/team/members');
  }

  async inviteTeamMember(inviteData) {
    return this.post('/team/invite', inviteData);
  }

  async removeTeamMember(memberId) {
    return this.delete(`/team/members/${memberId}`);
  }

  async updateTeamMemberRole(memberId, role) {
    return this.put(`/team/members/${memberId}/role`, { role });
  }

  // Reports and analytics endpoints
  async getSecurityReport(params = {}) {
    return this.get('/reports/security', params);
  }

  async getUsageReport(params = {}) {
    return this.get('/reports/usage', params);
  }

  async exportReport(reportType, format = 'pdf') {
    return this.get(`/reports/${reportType}/export`, { format });
  }

  // Notification endpoints
  async getNotifications() {
    return this.get('/notifications');
  }

  async markNotificationRead(notificationId) {
    return this.put(`/notifications/${notificationId}/read`);
  }

  async updateNotificationSettings(settings) {
    return this.put('/notifications/settings', settings);
  }
}

/**
 * Custom API Error class
 */
class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Create and export singleton instance
const apiService = new ApiService();

export default apiService;
export { ApiError };
