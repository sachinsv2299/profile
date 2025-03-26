document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Data Analysis",
            description: "Transform raw data into actionable insights using advanced statistical methods, data visualization, and predictive modeling."
        },
        {
            title: "Power BI Development",
            description: "Create interactive dashboards and reports to help businesses make data-driven decisions in real time."
        },
        {
            title: "Photography & Editing",
            description: "Capture stunning visuals and edit them professionally to bring out the best in every shot."
        }
    ];

    const container = document.getElementById("services-container");

    services.forEach(service => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");

        serviceCard.innerHTML = `
            <h2>${service.title}</h2>
            <p>${service.description}</p>
        `;

        container.appendChild(serviceCard);
    });
});

// Toggle Menu for Mobile View
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
