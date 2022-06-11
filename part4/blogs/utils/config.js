require('dotenv').config();

const PORT = process.env.PORT;
const URL = process.env.URL;
const TEST_URL = process.env.TEST_URL;
const SECRET = process.env.SECRET;
module.exports = {
  PORT, URL, TEST_URL, SECRET
}
