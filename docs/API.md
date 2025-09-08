# RightGuards Cards API Documentation

## Overview

The RightGuards Cards API provides comprehensive endpoints for managing digital security cards, user authentication, device monitoring, and security analytics. This RESTful API uses JSON for data exchange and JWT tokens for authentication.

**Base URL**: `https://api.rightguards.com`  
**API Version**: v1  
**Authentication**: Bearer Token (JWT)

## Authentication

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "rememberMe": true
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "refresh_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "plan": "pro"
  },
  "expiresIn": "7d"
}
```

### Register
```http
POST /auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "user@example.com",
  "password": "securepassword",
  "agreeToTerms": true,
  "subscribeNewsletter": false
}
```

### Refresh Token
```http
POST /auth/refresh
Authorization: Bearer {refresh_token}
```

### Logout
```http
POST /auth/logout
Authorization: Bearer {token}
```

### Password Reset
```http
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

```http
POST /auth/reset-password
Content-Type: application/json

{
  "token": "reset_token_from_email",
  "password": "newpassword"
}
```

## User Management

### Get User Profile
```http
GET /user/profile
Authorization: Bearer {token}
```

**Response:**
```json
{
  "id": "user_id",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "plan": "pro",
  "createdAt": "2024-01-01T00:00:00Z",
  "lastLogin": "2024-09-08T15:30:00Z",
  "emailVerified": true,
  "mfaEnabled": true
}
```

### Update User Profile
```http
PUT /user/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Smith",
  "phone": "+1234567890",
  "timezone": "America/New_York"
}
```

### Change Password
```http
PUT /user/change-password
Authorization: Bearer {token}
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword"
}
```

## Security Cards

### Get All Cards
```http
GET /cards
Authorization: Bearer {token}
```

**Response:**
```json
{
  "cards": [
    {
      "id": "card_id",
      "name": "Personal Security Card",
      "type": "basic",
      "status": "active",
      "devicesProtected": 3,
      "threatsBlocked": 127,
      "createdAt": "2024-01-01T00:00:00Z",
      "expiresAt": "2025-01-01T00:00:00Z"
    }
  ],
  "total": 1
}
```

### Get Card Details
```http
GET /cards/{cardId}
Authorization: Bearer {token}
```

### Create New Card
```http
POST /cards
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Business Security Card",
  "type": "pro",
  "deviceLimit": 10
}
```

### Update Card
```http
PUT /cards/{cardId}
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Updated Card Name",
  "deviceLimit": 15
}
```

### Delete Card
```http
DELETE /cards/{cardId}
Authorization: Bearer {token}
```

## Security Monitoring

### Get Security Status
```http
GET /security/status
Authorization: Bearer {token}
```

**Response:**
```json
{
  "status": "protected",
  "uptime": 99.9,
  "threatsBlocked": 1247,
  "devicesProtected": 5,
  "lastScan": "2024-09-08T15:28:00Z",
  "riskLevel": "low"
}
```

### Get Threats
```http
GET /security/threats?limit=10&offset=0&severity=high
Authorization: Bearer {token}
```

**Response:**
```json
{
  "threats": [
    {
      "id": "threat_id",
      "type": "malware",
      "severity": "high",
      "description": "Suspicious file blocked from download",
      "source": "web_browser",
      "timestamp": "2024-09-08T15:25:00Z",
      "status": "blocked",
      "deviceId": "device_id"
    }
  ],
  "total": 156,
  "pagination": {
    "limit": 10,
    "offset": 0,
    "hasMore": true
  }
}
```

### Get Threat Details
```http
GET /security/threats/{threatId}
Authorization: Bearer {token}
```

### Run Security Scan
```http
POST /security/scan
Authorization: Bearer {token}
Content-Type: application/json

{
  "deviceIds": ["device1", "device2"],
  "scanType": "full"
}
```

### Get Security Analytics
```http
GET /security/analytics?period=7d&type=threats
Authorization: Bearer {token}
```

**Response:**
```json
{
  "period": "7d",
  "data": [
    {
      "date": "2024-09-01",
      "threatsBlocked": 23,
      "scansPerformed": 5,
      "riskScore": 2.1
    }
  ],
  "summary": {
    "totalThreats": 156,
    "averageRiskScore": 2.3,
    "trendDirection": "decreasing"
  }
}
```

## Device Management

### Get Devices
```http
GET /devices
Authorization: Bearer {token}
```

**Response:**
```json
{
  "devices": [
    {
      "id": "device_id",
      "name": "MacBook Pro",
      "type": "laptop",
      "os": "macOS",
      "status": "protected",
      "lastSeen": "2024-09-08T15:28:00Z",
      "ipAddress": "192.168.1.100",
      "location": "San Francisco, CA",
      "threatsBlocked": 12
    }
  ],
  "total": 3
}
```

### Add Device
```http
POST /devices
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "iPhone 15",
  "type": "mobile",
  "os": "iOS",
  "deviceToken": "device_registration_token"
}
```

### Update Device
```http
PUT /devices/{deviceId}
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Updated Device Name",
  "notificationsEnabled": true
}
```

### Remove Device
```http
DELETE /devices/{deviceId}
Authorization: Bearer {token}
```

## Billing & Subscriptions

### Get Subscription
```http
GET /billing/subscription
Authorization: Bearer {token}
```

**Response:**
```json
{
  "id": "sub_id",
  "plan": "pro",
  "status": "active",
  "currentPeriodStart": "2024-09-01T00:00:00Z",
  "currentPeriodEnd": "2024-10-01T00:00:00Z",
  "cancelAtPeriodEnd": false,
  "amount": 19900,
  "currency": "usd",
  "interval": "month"
}
```

### Update Subscription
```http
PUT /billing/subscription
Authorization: Bearer {token}
Content-Type: application/json

{
  "planId": "plan_elite"
}
```

### Cancel Subscription
```http
DELETE /billing/subscription
Authorization: Bearer {token}
```

### Get Invoices
```http
GET /billing/invoices?limit=10
Authorization: Bearer {token}
```

### Get Payment Methods
```http
GET /billing/payment-methods
Authorization: Bearer {token}
```

### Add Payment Method
```http
POST /billing/payment-methods
Authorization: Bearer {token}
Content-Type: application/json

{
  "type": "card",
  "stripePaymentMethodId": "pm_stripe_id"
}
```

## Team Management (Enterprise)

### Get Team Members
```http
GET /team/members
Authorization: Bearer {token}
```

**Response:**
```json
{
  "members": [
    {
      "id": "member_id",
      "email": "member@company.com",
      "firstName": "Jane",
      "lastName": "Smith",
      "role": "admin",
      "status": "active",
      "invitedAt": "2024-08-01T00:00:00Z",
      "lastActive": "2024-09-08T14:30:00Z"
    }
  ],
  "total": 5
}
```

### Invite Team Member
```http
POST /team/invite
Authorization: Bearer {token}
Content-Type: application/json

{
  "email": "newmember@company.com",
  "role": "user",
  "message": "Welcome to our security team!"
}
```

### Update Team Member Role
```http
PUT /team/members/{memberId}/role
Authorization: Bearer {token}
Content-Type: application/json

{
  "role": "manager"
}
```

### Remove Team Member
```http
DELETE /team/members/{memberId}
Authorization: Bearer {token}
```

## Reports & Analytics

### Get Security Report
```http
GET /reports/security?period=30d&format=json
Authorization: Bearer {token}
```

### Get Usage Report
```http
GET /reports/usage?period=30d
Authorization: Bearer {token}
```

### Export Report
```http
GET /reports/security/export?format=pdf&period=30d
Authorization: Bearer {token}
```

## Notifications

### Get Notifications
```http
GET /notifications?limit=20&unreadOnly=true
Authorization: Bearer {token}
```

**Response:**
```json
{
  "notifications": [
    {
      "id": "notif_id",
      "type": "security_alert",
      "title": "Threat Detected",
      "message": "Malware blocked on MacBook Pro",
      "read": false,
      "createdAt": "2024-09-08T15:25:00Z",
      "data": {
        "threatId": "threat_id",
        "deviceId": "device_id"
      }
    }
  ],
  "unreadCount": 3
}
```

### Mark Notification as Read
```http
PUT /notifications/{notificationId}/read
Authorization: Bearer {token}
```

### Update Notification Settings
```http
PUT /notifications/settings
Authorization: Bearer {token}
Content-Type: application/json

{
  "emailNotifications": true,
  "pushNotifications": true,
  "securityAlerts": true,
  "weeklyReports": false
}
```

## Error Responses

All API endpoints return consistent error responses:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid email or password",
    "details": "The provided credentials do not match our records"
  },
  "timestamp": "2024-09-08T15:30:00Z"
}
```

### Common Error Codes

- `INVALID_CREDENTIALS` - Authentication failed
- `TOKEN_EXPIRED` - JWT token has expired
- `INSUFFICIENT_PERMISSIONS` - User lacks required permissions
- `RESOURCE_NOT_FOUND` - Requested resource doesn't exist
- `VALIDATION_ERROR` - Request data validation failed
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `SUBSCRIPTION_REQUIRED` - Feature requires active subscription
- `DEVICE_LIMIT_REACHED` - Maximum devices for plan reached

## Rate Limiting

API requests are rate limited per user:

- **Free Plan**: 100 requests/hour
- **Basic Plan**: 500 requests/hour  
- **Pro Plan**: 2,000 requests/hour
- **Elite Plan**: 10,000 requests/hour

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 2000
X-RateLimit-Remaining: 1999
X-RateLimit-Reset: 1694188800
```

## Webhooks

RightGuards supports webhooks for real-time event notifications:

### Supported Events
- `security.threat_detected`
- `security.scan_completed`
- `device.added`
- `device.removed`
- `subscription.updated`
- `subscription.cancelled`

### Webhook Payload Example
```json
{
  "id": "evt_id",
  "type": "security.threat_detected",
  "created": "2024-09-08T15:25:00Z",
  "data": {
    "threat": {
      "id": "threat_id",
      "type": "malware",
      "severity": "high",
      "deviceId": "device_id"
    }
  }
}
```

## SDKs & Libraries

Official SDKs are available for:
- **JavaScript/Node.js**: `npm install @rightguards/sdk`
- **Python**: `pip install rightguards-sdk`
- **PHP**: `composer require rightguards/sdk`
- **Go**: `go get github.com/rightguards/go-sdk`

## Support

- **API Documentation**: [docs.rightguards.com](https://docs.rightguards.com)
- **Support Email**: api-support@rightguards.com
- **Status Page**: [status.rightguards.com](https://status.rightguards.com)
- **Developer Portal**: [developers.rightguards.com](https://developers.rightguards.com)
