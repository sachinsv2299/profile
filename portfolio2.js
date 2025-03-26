document.addEventListener("DOMContentLoaded", function () {
    const experiences = [
        {
            title: "IIM Kozhikode - IT Engineer (Jul 2019 - Present)",
            description: [
                "Data processing and analysis initiatives, driving insights and informed decision-making.",
                "Designed, developed, and maintained databases, data systems, and data visualizations to support institutional research and operations.",
                "Collaborated with cross-functional teams to integrate data analytics into strategic planning and policy-making.",
                "Implemented data governance and quality control measures to ensure data accuracy, security, and compliance."
            ]
        },
        {
            title: "NIT Calicut - Technical Assistant (Dec 2017 - Jun 2019)",
            description: [
                "Server Management: Administered and maintained servers, ensuring high uptime, security, and performance.",
                "Software Management: Installed, configured, and updated software applications, ensuring compatibility and functionality.",
                "Technical Support: Provided technical assistance and troubleshooting services to students, faculty, and staff.",
                "Infrastructure Maintenance: Performed routine maintenance tasks to ensure optimal functionality of computer laboratories and infrastructure."
            ]
        },
        {
            title: "Bizarre Solutions - System Administrator (Dec 2016 - Dec 2017)",
            description: [
                "Technology Transfer: Worked on transferring technology to improve operational efficiency.",
                "Software Configuration: Configured and managed software applications to ensure compatibility and functionality.",
                "System Assembly: Assembled and configured computer systems to meet organizational requirements.",
                "Hardware Troubleshooting: Troubleshooted and resolved hardware issues to minimize downtime."
            ]
        }
    ];

    const interests = [
        { title: "Data Visualization", description: "Passionate about transforming complex data into visual stories that drive decision-making." },
        { title: "Machine Learning", description: "Exploring predictive modeling and algorithm development to uncover hidden insights." },
        { title: "Dashboard Design", description: "Creating intuitive dashboards that simplify data analysis and reporting." },
        { title: "Storytelling with Data", description: "Conveying insights and trends through compelling data narratives." },
        { title: "Business Intelligence", description: "Integrating data to support strategic decision-making and business growth." }
    ];

    const tools = [
        { title: "Microsoft Excel", description: "Advanced skills in data modeling, pivot tables, charts, and complex formulas." },
        { title: "Power BI", description: "Expertise in creating interactive dashboards and data visualizations." },
        { title: "PostgreSQL", description: "Proficient in design, development, querying, and managing large datasets." },
        { title: "Tableau", description: "Skilled in crafting dynamic and insightful visualizations." },
        { title: "Adobe Photoshop", description: "Experienced in enhancing graphics and data presentations." }
    ];

    const certifications = [
        { title: "Data Analytics Bootcamp", description: "Completed Data Analytics Bootcamp certification, acquiring skills in data analysis, visualization, and interpretation using tools such as Excel, Python, and data visualization software." },
        { title: "Google IT Support Specialization", description: "Completed Google IT Support Specialization certification, demonstrating expertise in IT support fundamentals, networking, operating systems, and troubleshooting." },
        { title: "Embedded Systems & Information Technology", description: "Awarded certification in Embedded Systems & Information Technology, demonstrating proficiency in designing, developing, and integrating embedded systems and IT solutions." },
        { title: "Computer Hardware & Network Engineering", description: "Skilled in Computer Hardware & Network Engineering, with knowledge of computer architecture, networking protocols, and hardware troubleshooting." },
        { title: "Adobe Graphics", description: "Skilled in Adobe suite for graphic and data visualization design with expertise in creating user-centered, intuitive, and visually appealing interfaces." }
    ];

    const academics = [
        { title: "Bachelor of Computer Application (2024 - Ongoing)", description: "Amrita Vishwa Vidyapeetham." },
        { title: "Diploma in Computer Engineering (2013 - 2016)", description: "Model Poly Technic College Vadakara." },
        { title: "HSC-Science (2011 - 2013)", description: "Sree Vasudeva Ashrama HSS Naduvathur." }
    ];

    function renderCards(dataArray, containerId) {
        const container = document.getElementById(containerId);
        dataArray.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            const heading = document.createElement("h4");
            heading.innerText = item.title;
            card.appendChild(heading);

            if (item.description) {
                if (Array.isArray(item.description)) {
                    const descList = document.createElement("ul");
                    item.description.forEach(point => {
                        const li = document.createElement("li");
                        li.innerText = point;
                        li.style.marginBottom = "5px";
                        li.style.paddingLeft = "0"; // Remove unwanted left padding
                        li.style.listStylePosition = "inside"; // Align bullet points properly
                        descList.appendChild(li);
                    });
                    card.appendChild(descList);
                } else {
                    const paragraph = document.createElement("p");
                    paragraph.innerText = item.description;
                    paragraph.style.marginTop = "10px";
                    card.appendChild(paragraph);
                }
            }

            container.appendChild(card);
        });
    }

    renderCards(experiences, "experience-cards");
    renderCards(interests, "interest-cards");
    renderCards(tools, "tools-cards");
    renderCards(certifications, "certifications-cards");
    renderCards(academics, "academics-cards");
});
