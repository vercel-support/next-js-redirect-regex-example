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
        destination: '/new/:a/:b/:c', // Matched parameters can be used in the destination
        permanent: false,
      }
    ]
  },
}