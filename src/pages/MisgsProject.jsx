import ProjectCaseStudy from "../components/ProjectCaseStudy";

import misgsHome from "../assets/projects/misgs-home.png";
import misgsLoginPage from "../assets/projects/misgs-login-page.png";
import misgsOutreachDashboard from "../assets/projects/misgs-outreach-dashboard.png";
import misgsOutreachMap from "../assets/projects/misgs-outreach-map.png";
// import misgOutreach from "./assets/projects/misgs-outreach.png";
// import misgsPenjadualanKelas from "./assets/projects/misgs-penjadualan-kelas.png";
import misgsProfilMuallaf from "../assets/projects/misgs-profil-muallaf.png";
import misgsClass from "../assets/projects/misgs-penjadualan-kelas.png";

function MisgsProject() {
  return (
    <ProjectCaseStudy
      number="PROJECT 01"
      title="MISGS — Muallaf Integrated Support and Guidance System"
      subtitle="MACHINE LEARNING • DATA • WEB DEVELOPMENT"
      description="A digital outreach, welfare, education, and management system designed to support Muallaf-related activities while using K-Means Clustering to assist with strategic outreach analysis."
      role="System Development • Database Design • Data Analysis • Machine Learning Integration"
      technologies={[
        "Python",
        "K-Means",
        "Machine Learning",
        "MySQL",
        "Data Visualization",
        "Web Development",
      ]}
      snapshot={[
        {
          label: "TYPE",
          value: "Final Year Project",
        },
        {
          label: "FOCUS",
          value: "Data + Web + Machine Learning",
        },
        {
          label: "ML METHOD",
          value: "K-Means Clustering",
        },
        {
          label: "STATUS",
          value: "Completed",
        },
      ]}
      problem={[
        "Managing Muallaf information, welfare cases, educational activities, attendance, and outreach initiatives across separate processes can make it difficult for administrators to obtain a complete view of their operations.",

        "Another challenge is deciding where outreach efforts should be focused. Geographical data may already exist, but without analytical techniques it can be difficult to identify meaningful patterns or areas that could potentially benefit from additional outreach activities.",
      ]}
      solution={[
        "I developed MISGS as an integrated digital system that centralizes several important management functions, including Muallaf records, welfare cases, classes, attendance, and outreach-related information.",

        "The system also incorporates K-Means Clustering to analyse geographical data and group locations into clusters. These clustering results can then be visualized geographically to support administrators in identifying potential strategic outreach areas.",

        "Rather than treating the machine-learning component as a separate experiment, the clustering analysis was designed as part of the wider system workflow so that analytical results could support practical decision-making.",
      ]}
      process={[
        {
          number: "01",
          title: "Understand the Problem",
          description:
            "Identify the operational challenges, required modules, and how geographical information could support outreach planning.",
        },
        {
          number: "02",
          title: "Design the System",
          description:
            "Structure the database, define the system modules, and plan how administrative and analytical components would work together.",
        },
        {
          number: "03",
          title: "Prepare the Data",
          description:
            "Organize relevant geographical information and prepare the data so it can be used for clustering and visualization.",
        },
        {
          number: "04",
          title: "Apply K-Means",
          description:
            "Use K-Means clustering to group geographical points and identify patterns within the available location data.",
        },
        {
          number: "05",
          title: "Visualize the Results",
          description:
            "Present the clustering output geographically so that the resulting patterns are easier for users to understand.",
        },
        {
          number: "06",
          title: "Integrate the Analysis",
          description:
            "Combine the analytical component with the wider MISGS management workflow instead of keeping it as a standalone experiment.",
        },
      ]}
      features={[
        {
          title: "Centralized Muallaf Management",
          description:
            "Stores and organizes Muallaf information within a structured digital system for easier administrative access.",
        },
        {
          title: "K-Means Clustering",
          description:
            "Applies a machine-learning clustering technique to geographical data in order to identify location patterns.",
        },
        {
          title: "Outreach Visualization",
          description:
            "Displays clustering results geographically to support the identification of potential strategic outreach locations.",
        },
        {
          title: "Class & Attendance Management",
          description:
            "Supports the organization of educational activities and the recording of attendance information.",
        },
        {
          title: "Welfare & Case Records",
          description:
            "Provides structured records for welfare assistance, cases, and support-related activities.",
        },
        {
          title: "Administrative Reporting",
          description:
            "Organizes system information so that administrators can review operational, welfare, educational, and outreach-related data.",
        },
      ]}
      images={[
        {
          src: misgsHome,
          title: "System Overview",
          description:
            "The main MISGS interface provides centralized access to the system's management and administrative functions.",
        },
        {
          src: misgsOutreachDashboard,
          title: "Outreach Analytics Dashboard",
          description:
            "An analytics dashboard featuring district-level macro breakdowns and zone allocation charts to visualize community outreach data.",
        },
        {
          src: misgsOutreachMap,
          title: "Outreach Cluster Map",
          description:
            "K-Means clustering results are visualized geographically to help identify patterns that may support outreach planning.",
        },
        {
          src: misgsProfilMuallaf,
          title: "Muallaf Management",
          description:
            "Structured records allow administrators to manage Muallaf information and related support activities.",
        },
        {
          src: misgsClass,
          title: "Scheduling Class/Event",
          description:
            "An administrative scheduling module that allows coordinators to set up class titles, assign instructors, specify dates, times, and locations, while filtering and assigning Muallaf participants from a structured database.",
        },
        // {
        //   src: misgsAttendance,
        //   title: "Class & Attendance",
        //   description:
        //     "Educational activities and attendance records can be managed within the same integrated system.",
        // },
        {
          src: misgsLoginPage,
          title: "System Authentication",
          description:
            "The login interface provides controlled access to the MISGS administrative environment.",
        },
      ]}
      lessons={[
        "This project helped me understand how machine-learning techniques can be integrated into a practical software system rather than treated only as a separate academic exercise.",

        "I gained more experience in database design, system development, geographical data processing, clustering, and presenting analytical results in a way that can be interpreted by end users.",

        "The project also taught me that the effectiveness of a system depends on understanding the actual workflow and problem being addressed, not simply on the technologies used.",

        "Working on MISGS strengthened my ability to combine software development, data analysis, and machine learning within one complete project.",
      ]}
      github=""
    />
  );
}

export default MisgsProject;
