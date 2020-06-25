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
