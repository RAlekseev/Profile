import TechnologyVersion from '@/models/TechnologyVersionModel'

export default interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  github: string;
  technologies: Array<TechnologyVersion>;
  features: Array<Object>|null,
  statistic_cards: Array<Object>|null,
  full_description: string|null,
  materials: Array<Object>|null,
}
