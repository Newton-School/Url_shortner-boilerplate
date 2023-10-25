const shortid = require('shortid');
const Url = require('../models/urlModel');

const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();

  try {
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
    console.log(error);
  }
};

const expandUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await Url.findOne({ shortUrl });
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

module.exports = {
  shortenUrl,
  expandUrl,
};
