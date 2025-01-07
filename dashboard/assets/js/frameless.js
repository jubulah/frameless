function loadComponent(componentName, displayLocationID) {
    fetch(`../../components/${componentName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(displayLocationID).innerHTML = data;

            const scripts = document.getElementById(displayLocationID).getElementsByTagName('script');
            Array.from(scripts).forEach(script => {
                const newScript = document.createElement('script');
                newScript.text = script.innerHTML;
                document.body.appendChild(newScript);
            });
        })
        .catch(error => {
            console.error("Error loading component:", error);
        });
}
