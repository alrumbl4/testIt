import { faker } from '@faker-js/faker'

interface User {
  email: string;
  password: string;
}

export class UserBuilder {
  private user: User = {
    email: '',
    password: ''
  };

  static create(): UserBuilder {
    return new UserBuilder();
  }

  withRandomEmail(): UserBuilder {
    this.user.email = faker.internet.email()
    return this;
  }

  withRandomPassword(): UserBuilder {
    this.user.password = faker.internet.password()
    return this;
  }

  build(): User {
    if (!this.user.email || !this.user.password) {
      throw new Error('Email and password must be specified');
    }
    return { ...this.user };
  }
}