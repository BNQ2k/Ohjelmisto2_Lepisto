document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("query").value;
    const url = "https://api.tvmaze.com/search/shows?q=" + name;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("Tulokset:", data);
            if (data.length > 0) {
                console.log("Sarja:", data[0].show.name);
            }
        });
});
