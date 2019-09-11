import BulletPoint from '../decorations/BulletPoint'

const Project = ({ projects }) => (
  <ul>
    {projects.map(project => (
      <li key={project.url}>
        <BulletPoint />
        <a
          className='body1'
          target='_blank'
          href={project.url}
          rel='noopener noreferrer'
        >
          {project.name}
        </a>
      </li>
    ))}
  </ul>
)

export default Project
