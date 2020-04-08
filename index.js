const express = require('express');

const app = express();


require('./routes/cityRoutes')(app);

const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
	console.log('Server started on :', PORT)
});