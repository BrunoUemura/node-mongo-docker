const express = require("express");

const app = express();
const PORT = 3000;

require("./database");

app.use(require("./routes/index.routes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
