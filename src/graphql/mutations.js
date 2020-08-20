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
      instance
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
          instance
        }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
      instance
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
          instance
        }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
      instance
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
          instance
        }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
      tableName
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
      tableName
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
      tableName
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
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
        instance
        class {
          id
          modelID
          name
          number
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
          instance
        }
      }
    }
  }
`;
