const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');

fs.readdirSync(target).forEach((image) => {
    // change image size with: width 800px, with : prefix -large.jpg
    sharp(`${target}/${image}`)
        .resize(800)
        .toFile(path.resolve(__dirname, `${target}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

    // change image size with: width 480px, with : prefix -small.jpg
    sharp(`${target}/${image}`)
        .resize(480)
        .toFile(path.resolve(__dirname, `${target}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});
