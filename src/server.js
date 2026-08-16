import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/notes', (req, res) => {
  res.status(200).json({
    message: "Retrieved all notes"
  });
});

app.get('/notes/:noteId', (req, res) => {
  res.status(200).json({
    message: `Retrieved note with ID: ${req.params.noteId}`
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});
