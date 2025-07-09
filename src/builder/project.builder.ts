import { faker } from '@faker-js/faker'

interface Project {
  titleProject: string;
  descriptionProject: string;
}

export class ProjectBuilder {
  private project: Project = {
    titleProject: '',
    descriptionProject: ''
  };

  static create(): ProjectBuilder {
    return new ProjectBuilder();
  }

  withRandomTitleProject(): ProjectBuilder {
    this.project.titleProject = faker.book.title()
    return this;
  }

  withRandomDescriptionProject(): ProjectBuilder {
    this.project.descriptionProject = faker.lorem.paragraph()
    return this;
  }

  build(): Project {
    if (!this.project.titleProject) {
      throw new Error('Title must be specified');
    }
    return { ...this.project };
  }
}