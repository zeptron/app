/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncModels = /* GraphQL */ `
  query SyncModels(
    $filter: ModelModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
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
      nextToken
      startedAt
    }
  }
`;
export const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncModelConfigs = /* GraphQL */ `
  query SyncModelConfigs(
    $filter: ModelmodelConfigFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModelConfigs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        ModelResultsID
        ModelResults {
          id
          modelID
          classID
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
        ModelResultsID
        ModelResults {
          id
          modelID
          classID
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncModelUsages = /* GraphQL */ `
  query SyncModelUsages(
    $filter: ModelmodelUsageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModelUsages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncModelResults = /* GraphQL */ `
  query SyncModelResults(
    $filter: ModelModelResultsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModelResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
