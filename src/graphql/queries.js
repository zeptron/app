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
          
          
          
        }
        
        
        
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
          
          
          
        }
        
        
        
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
          
          
          
        }
        
        
        
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
          
          
          
        }
        
        
        
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
          
          
          
        }
        
        
        
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
          
          
          
        }
        
        
        
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
          
          
          
        }
        
        
        
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
          
          
          
        }
        
        
        
      }
      nextToken
      startedAt
    }
  }
`;
