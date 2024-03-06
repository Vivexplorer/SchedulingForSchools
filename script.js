document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fieldOfStudy = document.getElementById('fieldOfStudy').value;

    let schedule = 'No schedule recommendation available';
    switch (fieldOfStudy) {
        case 'science':
            schedule = 'Science schedule recommendation goes here...';
            break;
        case 'engineering':
            schedule = 'Engineering schedule recommendation goes here...';
            break;
        // Add more cases for different fields
    }

    // Display schedule recommendation
    document.getElementById('scheduleResult').innerHTML = `
        <h2>Suggested Schedule for ${fieldOfStudy}</h2>
        <p>${schedule}</p>
    `;
});
