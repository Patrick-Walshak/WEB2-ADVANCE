// 1️⃣ Load Movie Data
fetch("data/movies.json")
    .then(response => response.json())
    .then(movies => renderMovies(movies))
    .catch(error => console.error("Error loading movies:", error));

// 2️⃣ Render Movie Cards
function renderMovies(movies) {
    const grid = document.getElementById("moviesGrid");

    movies.forEach(movie => {
        // Create card container
        const card = document.createElement("div");
        card.className = "bg-[#383a3c] text-white rounded-lg shadow hover:shadow-lg transition cursor-pointer";

        // Navigate to movie details on click
        card.onclick = () => {
            window.location.href = `movie.html?id=${movie.id}`;
        };

        // Movie Poster
        const img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.title;
        img.className = "rounded-t-lg w-full h-64 object-cover";

        // Movie Title
        const title = document.createElement("h2");
        title.textContent = movie.title;
        title.className = "text-center p-4 font-semibold text-lg";

        // Append elements
        card.appendChild(img);
        card.appendChild(title);
        grid.appendChild(card);
    });
}