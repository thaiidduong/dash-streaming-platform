const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    console.log(`[LOG] ${req.method} ${req.url}`);
    next();
});

// Serve thư mục giao diện
app.use(express.static(path.join(__dirname, 'htdocs')));

// Serve video DASH
app.use('/video', express.static(path.join(__dirname, 'video_input')));

// Route mặc định
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'htdocs', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});