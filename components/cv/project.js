import BulletPoint from '../decorations/bulletPoint'

const Project = ({ projects }) => (
  <section className="project">
    <ul>
      {projects.map(project => (
        <li key={project.url}>
          <BulletPoint />
          <a 
            className="body1"
            target="_blank" 
            href={project.url}>
            {project.name}  
          </a>
        </li>
      ))}
    </ul>
  </section>
)

export default Project
