module.exports = ({ env }) => ({
  url: env('HEROKU_URL'),
  host: env('HEROKU_URL')
});