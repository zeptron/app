/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getModel = /* GraphQL */ `
  query GetModel($id: ID!) {
    getModel(id: $id) {
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
export const listModels = /* GraphQL */ `
  query ListModels(
    $filter: ModelModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getModelConfig = /* GraphQL */ `
  query GetModelConfig($id: ID!) {
    getModelConfig(id: $id) {
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
export const listModelConfigs = /* GraphQL */ `
  query ListModelConfigs(
    $filter: ModelmodelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModelConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          classID
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
        }
      }
      nextToken
    }
  }
`;
export const getModelUsage = /* GraphQL */ `
  query GetModelUsage($id: ID!) {
    getModelUsage(id: $id) {
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
export const listModelUsages = /* GraphQL */ `
  query ListModelUsages(
    $filter: ModelmodelUsageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModelUsages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
      }
      nextToken
    }
  }
`;
export const getModelResults = /* GraphQL */ `
  query GetModelResults($id: ID!) {
    getModelResults(id: $id) {
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
export const listModelResultss = /* GraphQL */ `
  query ListModelResultss(
    $filter: ModelModelResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModelResultss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
