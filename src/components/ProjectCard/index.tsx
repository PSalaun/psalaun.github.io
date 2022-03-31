import {FunctionComponent} from 'preact';
import Button from '@components/Button';

type Project = {
  client: string;
  tag: string;
  title: string;
  description: string;
  url?: string;
}

const ProjectCard: FunctionComponent<{ project: Project}> = ({project}) => {
  return (
    <div class="flex flex-col border p-6">
      <div className="flex justify-between items-center font-ui">
        <div class="font-bold text-lg text-gray">{project.client}</div>
        <div class="uppercase text-sm">{project.tag}</div>
      </div>
      <div class="text-2xl mt-2">{project.title}</div>
      <div class="mt-6">{project.description}</div>
      {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer" class="mt-2" aria-label={`Visiter le site du projet ${project.title} pour ${project.client}`}><Button type="secondary" icon="external">Visiter le site</Button></a> : null}
    </div>
  )
};

export default ProjectCard;