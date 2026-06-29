import { UserProjects } from './user_projects';
export const UserProfile = ({
  profession,
  Internship,
  showProjects,
  setShowProjects
}) => {
  return (
    <div className="container">

    <div className="stars"></div>
    <div className="stars2"></div>
    <div className="stars3"></div>

    <div className="profile-card">

        {/* Image */}
        <img
            src="/Rohit_tech.jpg"
            alt="Rohit Shetty"
            className="profile-image"
        />

        <h2>Hi, I am Rohit Shetty</h2>

        <p>Aspiring {profession}</p>

        <div className="stats">
            <h3>I did my QA Internship at Sort Solutions</h3>
            <h3>Internship Duration: {Internship} Months</h3>
        </div>

        <button
            className="project-btn"
            onClick={() => setShowProjects(!showProjects)}
        >
            {showProjects
                ? "Hide Learnings"
                : "My Learnings"}
        </button>

        {showProjects && <UserProjects />}

    </div>

</div>
  );
};