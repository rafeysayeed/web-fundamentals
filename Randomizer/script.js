const activity = ['observe', 'analysis', 'knowledge', 'skill'];
let lastActivity = null;
document.getElementById('b').style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('activityData');
    if (storedData) {
        const tableBody = document.querySelector('tbody');
        JSON.parse(storedData).forEach(entry => {
            const newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = entry.dateTime;
            newRow.insertCell(1).textContent = entry.activity;
            newRow.insertCell(2).textContent = entry.status;
        });
    }
});

function generate() {   
    const filteredActivities = activity.filter(act => act !== lastActivity);
    const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];
    lastActivity = randomActivity;

    document.getElementById('x').innerHTML = randomActivity;
    document.getElementById('b').style.display = 'inline';
}

function get() {
    const generatedValue = document.getElementById('x').innerText;
    return generatedValue;
}

function completed() {
    const tableBody = document.querySelector('tbody');
    const newRow = tableBody.insertRow();

    const dateTimeCell = newRow.insertCell(0);
    const activityCell = newRow.insertCell(1);
    const statusCell = newRow.insertCell(2);

    const currentDateTime = new Date().toLocaleString();
    const activityValue = get();

    dateTimeCell.textContent = currentDateTime;
    activityCell.textContent = activityValue;
    statusCell.textContent = 'Completed';

    const newEntry = {
        dateTime: currentDateTime,
        activity: activityValue,
        status: 'Completed'
    };

    let storedData = localStorage.getItem('activityData');
    storedData = storedData ? JSON.parse(storedData) : [];
    storedData.push(newEntry);
    localStorage.setItem('activityData', JSON.stringify(storedData));

    document.getElementById('b').style.display = 'none';
    document.getElementById('x').innerHTML = null;
}