const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const feedbacksFilePath = path.join(__dirname, 'feedbacks.json');

app.use(cors());
app.use(express.json());

// Endpoint pour obtenir tous les feedbacks
app.get('/api/feedbacks', (req, res) => {
  fs.readFile(feedbacksFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erreur lors de la lecture du fichier');
      return;
    }
    res.send(JSON.parse(data));
  });
});

// Endpoint pour ajouter un feedback
app.post('/api/feedbacks', (req, res) => {
  const newFeedback = req.body;
  
  fs.readFile(feedbacksFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erreur lors de la lecture du fichier');
      return;
    }
    
    const feedbacks = JSON.parse(data);
    feedbacks.push(newFeedback);
    
    fs.writeFile(feedbacksFilePath, JSON.stringify(feedbacks, null, 2), (err) => {
      if (err) {
        res.status(500).send('Erreur lors de l\'écriture du fichier');
        return;
      }
      res.status(201).send(newFeedback);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
