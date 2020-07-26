export const template = `
AWSTemplateFormatVersion: 2010-09-09
Metadata:
  'AWS::CloudFormation::Designer':
    d0fea2e2-2dc2-4ad0-8167-f6778963aaad:
      size:
        width: 60
        height: 60
      position:
        x: 170
        'y': 70
      z: 0
Parameters:
  tableName:
    Type: String
  ami:
    Type: String
Resources:
  EC2I2VQQ4:
    Type: 'AWS::EC2::Instance'
    Properties:
      IamInstanceProfile: "AmazonSSMRoleForInstancesQuickSetup"
      ImageId: 
        Ref: ami
      InstanceType: t2.micro
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash -xe
          sudo apt-get upgrade
          sudo apt-get update
    Metadata:
      'AWS::CloudFormation::Designer':
        id: d0fea2e2-2dc2-4ad0-8167-f6778963aaad
  EC2I2VQK4:
    Type: AWS::DynamoDB::Table
    Properties:
      AttributeDefinitions:
        - AttributeName: timestamp
          AttributeType: S
      BillingMode: PAY_PER_REQUEST
      KeySchema:
        - AttributeName: timestamp
          KeyType: HASH
      TableName:
        Ref: tableName
Outputs:
  EC2I2VQQ4PublicIP:
    Value: !GetAtt EC2I2VQQ4.PublicIp
  EC2I2VQQ4PrivateIP:
    Value: !GetAtt EC2I2VQQ4.PrivateIp
  EC2I2VQQ4ID:
    Value: !Ref EC2I2VQQ4
`;
