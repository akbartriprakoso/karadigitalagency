const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./routes/posts');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsRouter);

app.get('/', (req, res) => res.json({status:'kara-api', version:'0.1.0'}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Kara API running on http://localhost:${PORT}`));
