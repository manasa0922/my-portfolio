function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Career Hub</h3>

          <p>
            Online job portal developed using Django for job seekers and recruiters.
          </p>

          <p>
            <strong>Tech:</strong> Django, Python, HTML, CSS, JavaScript, SQL
          </p>
        </div>

        <div className="project-card">
          <h3>Employee Attendance Tracking System</h3>

          <p>
            Attendance management application with employee login,
            attendance tracking, and reporting.
          </p>

          <p>
            <strong>Tech:</strong> ASP.NET, MySQL, Telerik UI
          </p>
        </div>

        <div className="project-card">
          <h3>JavaScript Calculator</h3>

          <p>
            Responsive calculator with keyboard support.
          </p>

          <p>
            <strong>Tech:</strong> HTML, CSS, JavaScript
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;