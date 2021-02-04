# Topics
- DynamoDB tables
- DynamoDB Accelerator
- DynamoDB streams and triggers
- DynamoDB GSI
- DynamoDB LSI

## Exercise 1
Create a DynamoDB table.
- [AWS::DynamoDB::Table](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)

**Verify:**
- Put an item in the table: 
  ```
  aws dynamodb put-item \
    --table-name hello-ddb-e22 \
    --item '{ "id": { "N": "999" }, "guid": { "S": "1234-5678" }, "title": { "S": "Hi"}, "content": { "S": "Hello DynamoDB 999"}, "author": { "S": "Jane" }, "date": { "S": "December" } }' 
  ```

- Retrieve the item: 
  ```
  aws dynamodb get-item \
    --table-name hello-ddb-e22 \
    --key '{ "id": { "N": "999" }, "guid": { "S": "1234-5678" } }'
  ```

## Exercise 2
Create a DAX cluster, a subnet, and an EC2 instance with Session Connect enabled. 
- [AWS::DAX::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html)
- [Role](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.create-cluster.cli.create-service-role.html)

**Verify:**
- From the EC2 instance, execute `nc -z DAX_ENDPOINT_URL` without an error response.

## Exercise 3
Add a `StreamSpecification` to the table. Map this event source to a lambda.
- [Lambda + DDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html)

**Verify:**
- Confirm CW has created a log stream when `put-item` is called on the DynamoDB table.

## Exercise 4
Create a Global Secondary Index. Create a Local Secondary Index.
- [AWS::DynamoDB::Table GlobalSecondaryIndex](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-gsi.html)
- [Query the secondary index](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-7.html)
- [Projection](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Projection.html)

**Verify:**
- Query the LSI: 
  ```
  aws dynamodb query 
    --table-name hello-ddb-e22 
    --index-name hello-lsi-e22 
    --key-condition-expression "id = :id" 
    --expression-attribute-values '{ ":id": { "N": "999"} }'
  ```

- Query the GSI: 
  ```
  aws dynamodb query 
    --table-name hello-ddb-e22 
    --index-name hello-gsi-e22 
    --key-condition-expression "author = :author" 
    --expression-attribute-values '{ ":author": { "S": "Jane"} }'
  ```