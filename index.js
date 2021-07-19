const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${'\033[35m'}http://127.0.0.1:${port}${'\033[0m'}`);
});

