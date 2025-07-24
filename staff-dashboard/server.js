const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for future Google Calendar integration
app.get('/api/staff', (req, res) => {
    // This will be replaced with actual Google Calendar API calls
    const sampleData = [
        {
            id: 1,
            name: "Sarah Johnson",
            email: "sarah.johnson@company.com",
            department: "sales",
            role: "Sales Manager",
            status: "available",
            events: [
                { time: "09:00-10:00", event: "Team Standup" },
                { time: "14:00-15:30", event: "Client Call - ABC Corp" }
            ]
        },
        {
            id: 2,
            name: "Mike Chen",
            email: "mike.chen@company.com",
            department: "development",
            role: "Senior Developer",
            status: "busy",
            events: [
                { time: "09:00-12:00", event: "Code Review Session" },
                { time: "13:00-14:00", event: "Sprint Planning" },
                { time: "15:00-17:00", event: "Development Work" }
            ]
        }
        // Add more sample data as needed
    ];
    
    res.json(sampleData);
});

// API endpoint for adding staff (future enhancement)
app.post('/api/staff', (req, res) => {
    const { name, email, department, role } = req.body;
    
    // Here you would typically save to a database
    // For now, just return success
    res.json({ 
        success: true, 
        message: 'Staff member added successfully',
        data: { name, email, department, role }
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Staff Availability Dashboard running on port ${PORT}`);
    console.log(`📱 Access your app at: http://localhost:${PORT}`);
});