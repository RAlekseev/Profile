import { createStore } from 'vuex'
import Project from '@/models/ProjectModel'
import Technology from '@/models/TechnologyModel'
import TechnologyVersion from '@/models/TechnologyVersionModel'

export default createStore({
  state: {
    /* eslint-disable @typescript-eslint/no-var-requires */
    projects: require('@/assets/projects.json') as Array<Project>,
    technologies: require('@/assets/technologies.json') as Array<Technology>
  },
  getters: {
    projects: state => state.projects,
    technologies: state => state.technologies,
    technology: state => (id: string) => state.technologies.find(technology => technology.id === id)
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
