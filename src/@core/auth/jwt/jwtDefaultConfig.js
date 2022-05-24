export default {
  // Endpoints
  loginEndpoint: '/login',
  registerEndpoint: '/register',
  refreshEndpoint: '/refresh-token',
  logoutEndpoint: '/logout',
  forgotPasswordEndpoint: '/forgot-password',
  resetPasswordEndpoint: '/reset-password',
  verifyTwoFaEndpoint: '/verify-2fa',
  emailVerificationEndpoint: '/email-verification-notification',
  aclGetAblilitesEndPoint: 'get-permission',

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
