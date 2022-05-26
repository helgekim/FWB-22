require('dotenv').config();

const PORT = process.env.PORT;
const URL = process.env.URL;
const TEST_URL = process.env.TEST_URL;
module.exports = {
  PORT, URL, TEST_URL
}
