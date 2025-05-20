// script.js 
document.addEventListener('DOMContentLoaded', () => {     
        // Get user data from localStorage (simulating login)     
const user = JSON.parse(localStorage.getItem('user')) || { name: 'Guest', role: '' };  
    // Update learner dashboard     
    if (document.getElementById('learner-name')) {         
        document.getElementById('learner-name').textContent = user.name;     
       }  
    // Update instructor dashboard     
    if (document.getElementById('instructor-name')) {         
        document.getElementById('instructor-name').textContent = user.name;     
       }  
    // Handle course detail page     
    const urlParams = new URLSearchParams(window.location.search);     
    const courseId = urlParams.get('course');     
    if (document.getElementById('course-title')) {         
        const courses = {             
                comp222: {                 
                        title: 'COMP 222: Intro to AI',                 
                        instructor: 'Instructor A',                 
                        description: 'Learn the fundamentals of Artificial Intelligence, including machine learning basics.',                 
                        outline: '1. Introduction to AI\n2. Machine Learning Basics\n3. Neural Networks'             
                         },             
                comp223: {                 
                        title: 'COMP 223: Internet Programming',                 
                        instructor: 'Instructor B',                 
                        description: 'Explore web development technologies like HTML, CSS, and JavaScript.',                 
                        outline: '1. HTML & CSS\n2. JavaScript Basics\n3. Backend Development'             
                        },             
                chem221: {                 
                        title: 'CHEM 221: Physical Chemistry',                 
                        instructor: 'Instructor C',                 
                        description: 'Study the principles of physical chemistry, including thermodynamics.',                 
                        outline: '1. Thermodynamics\n2. Quantum Chemistry\n3. Kinetics'             
                        },             
                chem222: {                 
                        title: 'CHEM 222: Chemistry of Aromatic Compounds',                 
                        instructor: 'Instructor D',                 
                        description: 'Understand the structure and reactions of aromatic compounds.', 
                        outline: '1. Aromaticity\n2. Electrophilic Substitution\n3. Synthesis'             
                        }         
                  };  
        if (courses[courseId]) {             
                document.getElementById('course-title').textContent = courses[courseId].title;             
                document.getElementById('course-instructor').textContent = courses[courseId].instructor;             
                document.getElementById('course-description').textContent = courses[courseId].description;             
                document.getElementById('course-outline').textContent = courses[courseId].outline;             
                const learningLink = document.getElementById('start-learning');             
                learningLink.href = `learning-interface.html?course=${courseId}`;         
                }     
             }  
    // Progress bar simulation     
    if (document.getElementById('progress')) {         
        let progress = 0;         
        const progressBar = document.getElementById('progress');         
        const interval = setInterval(() => {             
                progress += 10;             
                progressBar.style.width = `${progress}%`;             
                if (progress >= 70) clearInterval(interval); // Simulate 70% completion         
                }, 500);     
                }  
    // Certificate generation     
    if (document.getElementById('certificate')) {         
        document.getElementById('certificate-learner').textContent = user.name;         
        document.getElementById('certificate-course').textContent = courses[courseId]?.title || 'Course';         
        document.getElementById('certificate-instructor').textContent = courses[courseId]?.instructor || 'Instructor';     
        }  
    // Login form submission     
    const loginForm = document.getElementById('login-form');     
    if (loginForm) {         
        loginForm.addEventListener('submit', (e) => {             
                e.preventDefault();             
                const name = document.getElementById('name').value;             
                const role = document.getElementById('role').value;             
                localStorage.setItem('user', JSON.stringify({ name, role })); 
            window.location.href = 'dashboard.html';         
            });     }  
    // Payment form submission     
    const paymentForm = document.getElementById('payment-form');     
    if (paymentForm) {         
        paymentForm.addEventListener('submit', (e) => {             
                e.preventDefault();             
                alert('Payment submitted successfully!');         
                });     
                }  
    // Assessment form submission     
    const assessmentForm = document.getElementById('assessment-form');     
    if (assessmentForm) {         
        assessmentForm.addEventListener('submit', (e) => {             
                e.preventDefault();             
                window.location.href = `certification.html?course=${courseId}`;         
                });     
                } 
                }); 