import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pinoLogger from 'pino-http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(pinoLogger());


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

app.get('/test-error', (req, res) => {
  throw new Error('Simulated server error');
});

app.use((req, res, next) => {
  res.status(404).json({
    "message": "Route not found"
  });

});


app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    message: `${err.message}`,
  });
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});
