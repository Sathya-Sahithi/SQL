document.getElementById('endYear').addEventListener('change', function() {
    const endYear = this.value;
    fetch(`api.php?end_year=${endYear}`)
        .then(response => response.json())
        .then(data => {
            createCharts(data);
        });
});

// Add similar event listeners for other filters
