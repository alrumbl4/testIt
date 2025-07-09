interface Configuration {
  titleConfiguration: string;
  descriptionConfiguration: string;
  keyParametersConfiguration: string;
  valueParametersConfiguration: string;
}

export class ConfigurationBuilder {
  private configuration: Configuration = {
    titleConfiguration: '',
    descriptionConfiguration: '',
    keyParametersConfiguration: '',
    valueParametersConfiguration: ''
  };

  static create(): ConfigurationBuilder {
    return new ConfigurationBuilder();
  }

  withTitleProject(titleConfiguration: string): ConfigurationBuilder {
    this.configuration.titleConfiguration = titleConfiguration;
    return this;
  }

  withDescriptionProject(descriptionConfiguration: string): ConfigurationBuilder {
    this.configuration.descriptionConfiguration = descriptionConfiguration;
    return this;
  }

  withKeyParametrsProject(keyParametersConfiguration: string): ConfigurationBuilder {
    this.configuration.keyParametersConfiguration = keyParametersConfiguration;
    return this;
  }

  withValueParametrsProject(valueParametersConfiguration: string): ConfigurationBuilder {
    this.configuration.valueParametersConfiguration = valueParametersConfiguration;
    return this;
  }


  build(): Configuration {
    if (!this.configuration.titleConfiguration) {
      throw new Error('Title must be specified');
    }
    return { ...this.configuration };
  }
}