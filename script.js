document.addEventListener("DOMContentLoaded", function () {
    // URL of your JSON file hosted on GitHub Pages
    const jsonUrl = "https://megkayla-lage.github.io/megkayla.github.io/courses.json";
    let allCourses = [];

    // Fetch JSON data from the URL with debugging
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data:", data); // Debugging log
            allCourses = data.courses;
            displayCourses(allCourses);
        })
        .catch(error => console.error("Error fetching the courses JSON:", error));

    // Function to display courses in the table efficiently
    function displayCourses(courses) {
        const tableBody = document.querySelector("#courses-table tbody");
        tableBody.innerHTML = courses.map(course => `
            <tr>
                <td>${course.year_level}</td>
                <td>${course.sem}</td>
                <td>${course.code}</td>
                <td>${course.description}</td>
                <td>${course.credit}</td>
            </tr>
        `).join('');
    }

    // Function to filter courses based on search input across all columns
    window.searchSubjects = function () {
        let query = document.getElementById("search-bar").value.toLowerCase();
        let filteredCourses = allCourses.filter(course =>
            Object.values(course).some(value =>
                value.toString().toLowerCase().includes(query)
            )
        );
        displayCourses(filteredCourses);
    };
});
