// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FEEDBACKS_FILE = './feedbacks.json';

// Lecture des feedbacks depuis le fichier JSON
app.get('/api/feedbacks', (req, res) => {
  fs.readFile(FEEDBACKS_FILE, (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier de feedbacks:', err);
      res.status(500).send('Erreur serveur');
      return;
    }
    res.send(JSON.parse(data));
  });
});

// Ajout d'un nouveau feedback
app.post('/api/feedbacks', (req, res) => {
  const newFeedback = req.body;
  fs.readFile(FEEDBACKS_FILE, (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier de feedbacks:', err);
      res.status(500).send('Erreur serveur');
      return;
    }
    const feedbacks = JSON.parse(data);
    feedbacks.push(newFeedback);
    fs.writeFile(FEEDBACKS_FILE, JSON.stringify(feedbacks, null, 2), (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture du fichier de feedbacks:', err);
        res.status(500).send('Erreur serveur');
        return;
      }
      res.status(201).send('Feedback ajouté');
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
