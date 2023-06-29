export default {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
  ],
  important: true,
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      colors: {
        'psychonaut-green': {
          100: '#1ff6b3',
          200: '#07a876',
          300: '#009974',
          400: '#00997c',
          500: '#045442',
          900: '#003327'
        },
        'psychonaut-gray':{
          500:'#454b4c',
          600:'#2c3334',
        },
        'psychonaut-yellow':'#f1e607',
        'psychonaut-cyan':'#00d6d6',
      },
      backgroundImage: {
        'site-background': "url('/images/background.jpg')"
      }
    },
  },
}