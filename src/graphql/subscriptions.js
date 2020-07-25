/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateModel = /* GraphQL */ `
  subscription OnCreateModel {
    onCreateModel {
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
      instanceSize
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
          instanceSize
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onUpdateModel = /* GraphQL */ `
  subscription OnUpdateModel {
    onUpdateModel {
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
      instanceSize
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
          instanceSize
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onDeleteModel = /* GraphQL */ `
  subscription OnDeleteModel {
    onDeleteModel {
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
      instanceSize
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
          instanceSize
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onCreateModelConfig = /* GraphQL */ `
  subscription OnCreateModelConfig {
    onCreateModelConfig {
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
      image
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
          instanceSize
        }
        classID
        class {
          id
          modelID
          name
          number
        }
        insertedAt
        count
        detected
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onUpdateModelConfig = /* GraphQL */ `
  subscription OnUpdateModelConfig {
    onUpdateModelConfig {
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
      image
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
          instanceSize
        }
        classID
        class {
          id
          modelID
          name
          number
        }
        insertedAt
        count
        detected
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onDeleteModelConfig = /* GraphQL */ `
  subscription OnDeleteModelConfig {
    onDeleteModelConfig {
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
      image
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
          instanceSize
        }
        classID
        class {
          id
          modelID
          name
          number
        }
        insertedAt
        count
        detected
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onCreateModelUsage = /* GraphQL */ `
  subscription OnCreateModelUsage {
    onCreateModelUsage {
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onUpdateModelUsage = /* GraphQL */ `
  subscription OnUpdateModelUsage {
    onUpdateModelUsage {
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onDeleteModelUsage = /* GraphQL */ `
  subscription OnDeleteModelUsage {
    onDeleteModelUsage {
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
        instanceSize
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
          instanceSize
        }
      }
    }
  }
`;
export const onCreateModelResults = /* GraphQL */ `
  subscription OnCreateModelResults {
    onCreateModelResults {
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
        instanceSize
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
          instanceSize
        }
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
          instanceSize
        }
      }
      insertedAt
      count
      detected
    }
  }
`;
export const onUpdateModelResults = /* GraphQL */ `
  subscription OnUpdateModelResults {
    onUpdateModelResults {
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
        instanceSize
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
          instanceSize
        }
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
          instanceSize
        }
      }
      insertedAt
      count
      detected
    }
  }
`;
export const onDeleteModelResults = /* GraphQL */ `
  subscription OnDeleteModelResults {
    onDeleteModelResults {
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
        instanceSize
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
          instanceSize
        }
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
          instanceSize
        }
      }
      insertedAt
      count
      detected
    }
  }
`;
