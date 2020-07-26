/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createModel = /* GraphQL */ `
  mutation CreateModel(
    $input: CreateModelInput!
    $condition: ModelModelConditionInput
  ) {
    createModel(input: $input, condition: $condition) {
      id
      FPS
      description
      image
      mAP
      name
      notes
      rating
      type
      video
      ami
      directory
      virtualenv
      command
      class {
        id
        modelID
        name
        number
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      modelConfig {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateModel = /* GraphQL */ `
  mutation UpdateModel(
    $input: UpdateModelInput!
    $condition: ModelModelConditionInput
  ) {
    updateModel(input: $input, condition: $condition) {
      id
      FPS
      description
      image
      mAP
      name
      notes
      rating
      type
      video
      ami
      directory
      virtualenv
      command
      class {
        id
        modelID
        name
        number
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      modelConfig {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteModel = /* GraphQL */ `
  mutation DeleteModel(
    $input: DeleteModelInput!
    $condition: ModelModelConditionInput
  ) {
    deleteModel(input: $input, condition: $condition) {
      id
      FPS
      description
      image
      mAP
      name
      notes
      rating
      type
      video
      ami
      directory
      virtualenv
      command
      class {
        id
        modelID
        name
        number
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      modelConfig {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      modelID
      name
      number
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      modelID
      name
      number
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      modelID
      name
      number
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createModelConfig = /* GraphQL */ `
  mutation CreateModelConfig(
    $input: CreateModelConfigInput!
    $condition: ModelmodelConfigConditionInput
  ) {
    createModelConfig(input: $input, condition: $condition) {
      id
      userID
      modelID
      instanceName
      instanceLocation
      instancePod
      count
      notify
      countClasses
      notifyClasses
      line
      fromFile
      fileUrl
      publicIP
      privateIP
      port
      EC2instanceID
      instanceState
      ModelResultsID
      ModelResults {
        id
        modelID
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        classID
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        insertedAt
        count
        detected
        _version
        _deleted
        _lastChangedAt
      }
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateModelConfig = /* GraphQL */ `
  mutation UpdateModelConfig(
    $input: UpdateModelConfigInput!
    $condition: ModelmodelConfigConditionInput
  ) {
    updateModelConfig(input: $input, condition: $condition) {
      id
      userID
      modelID
      instanceName
      instanceLocation
      instancePod
      count
      notify
      countClasses
      notifyClasses
      line
      fromFile
      fileUrl
      publicIP
      privateIP
      port
      EC2instanceID
      instanceState
      ModelResultsID
      ModelResults {
        id
        modelID
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        classID
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        insertedAt
        count
        detected
        _version
        _deleted
        _lastChangedAt
      }
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteModelConfig = /* GraphQL */ `
  mutation DeleteModelConfig(
    $input: DeleteModelConfigInput!
    $condition: ModelmodelConfigConditionInput
  ) {
    deleteModelConfig(input: $input, condition: $condition) {
      id
      userID
      modelID
      instanceName
      instanceLocation
      instancePod
      count
      notify
      countClasses
      notifyClasses
      line
      fromFile
      fileUrl
      publicIP
      privateIP
      port
      EC2instanceID
      instanceState
      ModelResultsID
      ModelResults {
        id
        modelID
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        classID
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        insertedAt
        count
        detected
        _version
        _deleted
        _lastChangedAt
      }
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createModelUsage = /* GraphQL */ `
  mutation CreateModelUsage(
    $input: CreateModelUsageInput!
    $condition: ModelmodelUsageConditionInput
  ) {
    createModelUsage(input: $input, condition: $condition) {
      id
      modelID
      userID
      modelConfigID
      startTime
      stopTime
      usage
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateModelUsage = /* GraphQL */ `
  mutation UpdateModelUsage(
    $input: UpdateModelUsageInput!
    $condition: ModelmodelUsageConditionInput
  ) {
    updateModelUsage(input: $input, condition: $condition) {
      id
      modelID
      userID
      modelConfigID
      startTime
      stopTime
      usage
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteModelUsage = /* GraphQL */ `
  mutation DeleteModelUsage(
    $input: DeleteModelUsageInput!
    $condition: ModelmodelUsageConditionInput
  ) {
    deleteModelUsage(input: $input, condition: $condition) {
      id
      modelID
      userID
      modelConfigID
      startTime
      stopTime
      usage
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createModelResults = /* GraphQL */ `
  mutation CreateModelResults(
    $input: CreateModelResultsInput!
    $condition: ModelModelResultsConditionInput
  ) {
    createModelResults(input: $input, condition: $condition) {
      id
      modelID
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      classID
      class {
        id
        modelID
        name
        number
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      insertedAt
      count
      detected
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateModelResults = /* GraphQL */ `
  mutation UpdateModelResults(
    $input: UpdateModelResultsInput!
    $condition: ModelModelResultsConditionInput
  ) {
    updateModelResults(input: $input, condition: $condition) {
      id
      modelID
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      classID
      class {
        id
        modelID
        name
        number
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      insertedAt
      count
      detected
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteModelResults = /* GraphQL */ `
  mutation DeleteModelResults(
    $input: DeleteModelResultsInput!
    $condition: ModelModelResultsConditionInput
  ) {
    deleteModelResults(input: $input, condition: $condition) {
      id
      modelID
      model {
        id
        FPS
        description
        image
        mAP
        name
        notes
        rating
        type
        video
        ami
        directory
        virtualenv
        command
        class {
          id
          modelID
          name
          number
          _version
          _deleted
          _lastChangedAt
        }
        modelConfig {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      classID
      class {
        id
        modelID
        name
        number
        model {
          id
          FPS
          description
          image
          mAP
          name
          notes
          rating
          type
          video
          ami
          directory
          virtualenv
          command
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      insertedAt
      count
      detected
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
