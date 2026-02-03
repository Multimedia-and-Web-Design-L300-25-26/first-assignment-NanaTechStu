const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const data = require('./data/data.json');

app.get('/', (req, res) => {
  res.json({ message: 'University API - Nana Adwoa Level 1' });
});

// Students routes
app.get('/api/students', (req, res) => {
  res.json(data.students);
});

app.get('/api/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = data.students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json(student);
});

// Courses routes
app.get('/api/courses', (req, res) => {
  res.json(data.courses);
});

app.get('/api/courses/:id', (req, res) => {
  const id = Number(req.params.id);
  const course = data.courses.find(c => c.id === id);
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  res.json(course);
});

// Instructors routes
app.get('/api/instructors', (req, res) => {
  res.json(data.instructors);
});

app.get('/api/instructors/:id', (req, res) => {
  const id = Number(req.params.id);
  const instructor = data.instructors.find(i => i.id === id);
  if (!instructor) {
    return res.status(404).json({ error: 'Instructor not found' });
  }
  res.json(instructor);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});