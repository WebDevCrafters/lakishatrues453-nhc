const navbar = document.getElementsByTagName("nav")[0];


fetch('./navbar.html')
    .then(response => response.text())
    .then(data => {
        navbar.innerHTML = data;
    })
    .catch(error => console.error('Error fetching navbar:', error));