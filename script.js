document.addEventListener("DOMContentLoaded", function () {
    // URL of your JSON file hosted on GitHub Pages
    const jsonUrl = "https://yourusername.github.io/courses.json";
    let allCourses = [];

    // Fetch JSON data from the URL
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            allCourses = data.courses;
            displayCourses(allCourses);
        })
        .catch(error => console.error("Error fetching the courses JSON:", error));

    // Function to display courses in the table
    function displayCourses(courses) {
        const tableBody = document.querySelector("#courses-table tbody");
        tableBody.innerHTML = "";

        courses.forEach(course => {
            let row = `<tr>
                <td>${course.year_level}</td>
                <td>${course.sem}</td>
                <td>${course.code}</td>
                <td>${course.description}</td>
                <td>${course.credit}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }

    // Function to filter courses based on search input
    window.searchSubjects = function () {
        let query = document.getElementById("search-bar").value.toLowerCase();
        let filteredCourses = allCourses.filter(course =>
            course.description.toLowerCase().includes(query)
        );
        displayCourses(filteredCourses);
    };
});
