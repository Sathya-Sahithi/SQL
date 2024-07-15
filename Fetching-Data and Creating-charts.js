document.addEventListener('DOMContentLoaded', () => {
    fetch('api.php')
        .then(response => response.json())
        .then(data => {
            createCharts(data);
        });

    function createCharts(data) {
        // Example of creating a chart using Chart.js
        const ctx = document.getElementById('intensityChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.year),
                datasets: [{
                    label: 'Intensity',
                    data: data.map(d => d.intensity),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
