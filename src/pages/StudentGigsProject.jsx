import ProjectCaseStudy from "../components/ProjectCaseStudy";

// Add imports later when screenshots are ready.

function StudentGigsProject() {
  return (
    <ProjectCaseStudy
      number="PROJECT 02"
      title="Student Gigs Application"
      subtitle="FLUTTER • SUPABASE • MOBILE DEVELOPMENT"
      description="A mobile application designed to connect students with flexible gig and part-time work opportunities while providing a simple platform for employers to publish available jobs."
      role="Flutter Development • UI Development • Supabase Integration • Database Integration"
      technologies={[
        "Flutter",
        "Dart",
        "Supabase",
        "PostgreSQL",
        "GitHub",
      ]}
      problem={[
        "Students often need flexible work opportunities that can fit around their academic schedules, while finding relevant short-term or part-time jobs may involve searching across different platforms and informal channels.",
        "At the same time, employers offering smaller gigs may need a straightforward way to reach students who are actively looking for flexible work.",
      ]}
      solution={[
        "Student Gigs is designed as a mobile platform where students can discover gig opportunities and employers can publish available work.",
        "The application uses Flutter for the mobile interface and Supabase for backend functionality such as authentication and database management.",
      ]}
      features={[
        {
          title: "Authentication",
          description:
            "Supports account creation and login for application users.",
        },
        {
          title: "Gig Listings",
          description:
            "Allows available opportunities to be displayed and discovered through the application.",
        },
        {
          title: "User Profiles",
          description:
            "Provides profile information for users within the platform.",
        },
        {
          title: "Backend Integration",
          description:
            "Uses Supabase services for authentication and database functionality.",
        },
        {
          title: "Location Functionality",
          description:
            "Explores location-aware functionality to help connect users with relevant opportunities.",
        },
        {
          title: "Mobile-First Interface",
          description:
            "Built using Flutter with a focus on a practical mobile user experience.",
        },
      ]}
      lessons={[
        "This project has strengthened my understanding of Flutter application structure, authentication flows, backend integration, and database security.",
        "Working with Supabase has also helped me better understand user authentication, database policies, relational data, and the interaction between frontend applications and backend services.",
        "Because the application is still being developed, it also reflects my current learning process and the way I troubleshoot and improve a system iteratively.",
      ]}
      images={[]}
      github=""
    />
  );
}

export default StudentGigsProject;