/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateModel = /* GraphQL */ `
  subscription OnCreateModel {
    onCreateModel {
      id
      name
      image
      description
      FPS
      mAP
      notes
    }
  }
`;
export const onUpdateModel = /* GraphQL */ `
  subscription OnUpdateModel {
    onUpdateModel {
      id
      name
      image
      description
      FPS
      mAP
      notes
    }
  }
`;
export const onDeleteModel = /* GraphQL */ `
  subscription OnDeleteModel {
    onDeleteModel {
      id
      name
      image
      description
      FPS
      mAP
      notes
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
      }
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
      }
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
      }
    }
  }
`;
export const onCreateStream = /* GraphQL */ `
  subscription OnCreateStream {
    onCreateStream {
      id
      userID
      name
      location
      url
      createdAt
    }
  }
`;
export const onUpdateStream = /* GraphQL */ `
  subscription OnUpdateStream {
    onUpdateStream {
      id
      userID
      name
      location
      url
      createdAt
    }
  }
`;
export const onDeleteStream = /* GraphQL */ `
  subscription OnDeleteStream {
    onDeleteStream {
      id
      userID
      name
      location
      url
      createdAt
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
        name
        image
        description
        FPS
        mAP
        notes
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
        name
        image
        description
        FPS
        mAP
        notes
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
        name
        image
        description
        FPS
        mAP
        notes
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
        }
      }
      insertedAt
      count
      detected
    }
  }
`;
