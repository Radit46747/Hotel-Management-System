document.getElementById('activity-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const activity = document.getElementById('activity').value;
    const details = document.getElementById('details').value;
    const date = new Date().toLocaleString();
    
    const logEntry = `<tr>
        <td class="border px-4 py-2">${date}</td>
        <td class="border px-4 py-2">${activity}</td>
        <td class="border px-4 py-2">${details}</td>
    </tr>`;
    
    document.getElementById('activity-log').innerHTML += logEntry;

    document.getElementById('activity').value = '';
    document.getElementById('details').value = '';
});
