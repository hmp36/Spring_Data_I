const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/notes', { useMongoClient: true }, () => console.log('Connected to notes. Well done.'));
mongoose.Promise = global.Promise;

const models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach((file) => {
    if (file.includes('.js')) {
        console.log(`Loading ${file}...`);
        require(`${models_path}/${file}`);
    }
})