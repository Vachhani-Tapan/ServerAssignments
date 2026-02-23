const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        branch: "CSE",
        semester: 8,
        cgpa: 9.3
    },
    {
        id: 2,
        name: "Ishita Verma",
        branch: "IT",
        semester: 7,
        cgpa: 8.9
    },
    {
        id: 3,
        name: "Rohan Kulkarni",
        branch: "ECE",
        semester: 6,
        cgpa: 8.4
    },
    {
        id: 4,
        name: "Meera Iyer",
        branch: "CSE",
        semester: 8,
        cgpa: 9.1
    },
    {
        id: 5,
        name: "Kunal Deshmukh",
        branch: "IT",
        semester: 5,
        cgpa: 7.8
    },
    {
        id: 6,
        name: "Ananya Reddy",
        branch: "CSE",
        semester: 6,
        cgpa: 8.7
    },
    {
        id: 7,
        name: "Vikram Patil",
        branch: "ECE",
        semester: 7,
        cgpa: 8.2
    },
    {
        id: 8,
        name: "Priyanka Nair",
        branch: "AI",
        semester: 4,
        cgpa: 8.8
    },
    {
        id: 9,
        name: "Harsh Mehta",
        branch: "Data Science",
        semester: 5,
        cgpa: 8.0
    },
    {
        id: 10,
        name: "Neha Gupta",
        branch: "CSE",
        semester: 6,
        cgpa: 7.9
    }
];

const topper = students.reduce((max, student) => {
    return student.cgpa > max.cgpa ? student : max;
}, students[0]);

let sum = 0;
let count = 0;
for (let i = 0; i < students.length; i++) {
    sum += Number(students[i].cgpa);
    count++;
}


app.get("/", (req, res) => {
    res.status(200).send("Hello Student");
});
app.get("/students", (req, res) => {
    res.status(200).json(students);
});
app.get("/students/topper", (req, res) => {
    res.status(200).json(topper);
});
app.get("/students/average", (req, res) => {
    res.status(200).json({ 'averageCGPA': sum / count });
});
app.get("/students/count", (req, res) => {
    res.status(200).json({ 'totalStudents': count });
});
app.get("/students/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = students.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
});
app.get("/students/branch/:branch", (req, res) => {
    const userId = req.params.branch.toLowerCase();
    const user = students.filter(u => u.branch.toLowerCase() === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});