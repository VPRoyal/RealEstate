module.exports = {
  async rewrites() {
    return [
      {
        source: '/home/dashboard',
        destination: '/home/',
      },
      {
        source: '/home/listings',
        destination: '/home/',
      },
      {
        source: '/home/analytics',
        destination: '/home/',
      },
      {
        source: '/home/profiles',
        destination: '/home/',
      },
      {
        source: '/account/signin',
        destination: '/account',
      },
      {
        source: '/account/signup',
        destination: '/account',
      },
    ];
  },
};