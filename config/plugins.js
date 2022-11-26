module.exports = ({ env }) => ({
    // ...
    'import-export-entries': {
      enabled: true,
      config: {
        /**
         * Public hostname of the server.
         *
         * If you use the local provider to persist medias,
         * `serverPublicHostname` should be set to properly export media urls.
         */
        serverPublicHostname: 'http://localhost:1337/', // default: "".
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });