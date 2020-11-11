const express = require('express');
const router = express();

const PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/', (req, res) => {
  var body = req.body;
  res.send('Hello '+body.name);
});

router.listen(PORT, () =>{
	 console.log(`Server is running on port : ${PORT}`)
})

module.exports = router;