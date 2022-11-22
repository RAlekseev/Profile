import TechnologyVersion from '@/models/TechnologyVersionModel'

export default interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  github: string;
  component: string|null;
  technologies: Array<TechnologyVersion>;
}
