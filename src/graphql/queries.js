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
      name
      location
      pod
      count
      notify
      countClasses
      notifyClasses
      fromFile
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
        }
        streamID
        stream {
          id
          userID
          name
          location
          url
          createdAt
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
        name
        location
        pod
        count
        notify
        countClasses
        notifyClasses
        fromFile
        publicIP
        privateIP
        port
        EC2instanceID
        instanceState
        ModelResultsID
        ModelResults {
          id
          modelID
          streamID
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
        }
      }
      nextToken
    }
  }
`;
export const getStream = /* GraphQL */ `
  query GetStream($id: ID!) {
    getStream(id: $id) {
      id
      userID
      name
      location
      url
      createdAt
    }
  }
`;
export const listStreams = /* GraphQL */ `
  query ListStreams(
    $filter: ModelStreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        name
        location
        url
        createdAt
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
        }
      }
      streamID
      stream {
        id
        userID
        name
        location
        url
        createdAt
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
        }
        streamID
        stream {
          id
          userID
          name
          location
          url
          createdAt
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
