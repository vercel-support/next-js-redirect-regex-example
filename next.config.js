module.exports = {
  async redirects() {
    return [
      {
        source: '/redirect',
        has: [
          {
            type: 'host',
            value: '(?<host_a>.*)\.(?<host_b>.*)\.(?<host_c>.*)',
          },
        ],
        destination: '/new/:host_a/:host_b/:host_c', // Matched parameters can be used in the destination
        permanent: false,
      }
    ]
  },
}