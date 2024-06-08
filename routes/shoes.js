const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/szafa', function(req, res, next) {
    const filePath = path.resolve(__dirname, '..', 'databases', 'buciki.json');
    console.log('Ścieżka do pliku:', filePath);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Coś zepsułam sorki');
        }

        const shoes = JSON.parse(data); // Parsowanie danych JSON

        // Zakładając, że dane zawierają tablicę obiektów butów, możemy je wysłać jako odpowiedź
        res.status(200).json(shoes);
    });
});

module.exports = router;
