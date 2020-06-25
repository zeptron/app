/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createModel = /* GraphQL */ `
  mutation CreateModel(
    $input: CreateModelInput!
    $condition: ModelModelConditionInput
  ) {
    createModel(input: $input, condition: $condition) {
      id
      name
      image
      description
      FPS
      mAP
      notes
      type
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
      name
      image
      description
      FPS
      mAP
      notes
      type
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
      name
      image
      description
      FPS
      mAP
      notes
      type
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
      name
      number
      modelID
      model {
        id
        name
        image
        description
        FPS
        mAP
        notes
        type
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
      name
      number
      modelID
      model {
        id
        name
        image
        description
        FPS
        mAP
        notes
        type
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
      name
      number
      modelID
      model {
        id
        name
        image
        description
        FPS
        mAP
        notes
        type
      }
    }
  }
`;
export const createStream = /* GraphQL */ `
  mutation CreateStream(
    $input: CreateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    createStream(input: $input, condition: $condition) {
      id
      userID
      name
      location
      url
      createdAt
    }
  }
`;
export const updateStream = /* GraphQL */ `
  mutation UpdateStream(
    $input: UpdateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    updateStream(input: $input, condition: $condition) {
      id
      userID
      name
      location
      url
      createdAt
    }
  }
`;
export const deleteStream = /* GraphQL */ `
  mutation DeleteStream(
    $input: DeleteStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    deleteStream(input: $input, condition: $condition) {
      id
      userID
      name
      location
      url
      createdAt
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
        name
        image
        description
        FPS
        mAP
        notes
        type
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
        name
        number
        modelID
        model {
          id
          name
          image
          description
          FPS
          mAP
          notes
          type
        }
      }
      insertedAt
      count
      detected
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
        name
        image
        description
        FPS
        mAP
        notes
        type
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
        name
        number
        modelID
        model {
          id
          name
          image
          description
          FPS
          mAP
          notes
          type
        }
      }
      insertedAt
      count
      detected
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
        name
        image
        description
        FPS
        mAP
        notes
        type
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
        name
        number
        modelID
        model {
          id
          name
          image
          description
          FPS
          mAP
          notes
          type
        }
      }
      insertedAt
      count
      detected
    }
  }
`;
