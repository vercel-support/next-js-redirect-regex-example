module.exports = {
  async redirects() {
    return [
      {
        source: '/redirect',
        has: [
          {
            type: 'host',
            value: '.*\..*\..*',
          },
        ],
        destination: '/new', // Matched parameters can be used in the destination
        permanent: false,
      }
    ]
  },
}