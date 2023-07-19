const path = require('path');
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const port = process.env.PORT || 9000;

// Path to dist directory
const clientDirPath = path.resolve(__dirname, 'dist');

// Path to index.html file
const clientIndexHtml = path.join(clientDirPath, 'index.html');

// Init express
const app = express();
const serveRouter = express.Router();

// Enable cors
serveRouter.use(cors());

app.get('*.js', (req, res, next) => {
    const pathToGzipFile = `${req.url}.gz`;
    try {
        // Check if .gz file exists
        if (fs.existsSync(path.join(clientDirPath, pathToGzipFile))) {
        // Change the requested .js to return
        // the compressed version - filename.js.gz
            req.url += '.gz';
            // Tell the browser the file is compressed and it should decompress it.
            // You will get a blank screen without this header because it will try to parse
            // the compressed file.
            res.set('Content-Encoding', 'gzip');
            res.set('Content-Type', 'text/javascript');
        }
    } catch (err) {
        console.error(err);
    }

    next();
});

// Set the static files root directory
// from which it should serve the files from.
console.log('clientDirPath', clientDirPath);
app.use(express.static(clientDirPath));

app.get('*', (req, res) => {
    res.sendFile(clientIndexHtml);
});

console.log('Starting server');
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
