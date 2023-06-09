const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
          secondary:{
            100: '#E2E2D5',
            200: '#888885',
          }
      },
      fontFamily :{
        body: ['Nunito']
      },
    }
  },

  plugins: []
};

module.exports = config;
