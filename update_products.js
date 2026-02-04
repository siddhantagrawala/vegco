const fs = require('fs');
const path = 'src/data/products.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

data.forEach(product => {
    product.image = '/products/purple_cauliflower.mp4';
});

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Updated ' + data.length + ' products to use cinematic video assets.');
