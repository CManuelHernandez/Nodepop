const jimp = require('jimp');

async function resize(imgName) {
    try {
        const img = await jimp.read(`../../public/images/ads/${imgName}`);

        await img.resize(100, 100);

        await img.writeAsync(`../../public/images/ads/tn-${imgName}`);
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = resize;