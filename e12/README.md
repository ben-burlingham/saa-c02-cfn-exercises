# Topics

ECS
ECR
ALB


## Exercise 1
Create ECR with the `httpd` official image.

PUSHING DOCKER IMAGE: MAY HAVE TO ADD `--profile` IF AWS FAILING

## Exercise 2
Create an autoscaling group
- Refer to previous evolution(s) if necessary. 

aws cloudformation update-stack --profile iamadmin-general --capabilities CAPABILITY_NAMED_IAM --template-body file://e12/e12.yml --stack-name bb12

docker push ACCOUNT_NUMBER.dkr.ecr.us-east-1.amazonaws.com/hello-ecr-httpd:latest



- [CapacityProvider](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html)

## Exercise 
Create cluster in EC2 mode with uniqueness on HTTPD response??

Create cluster, capacity provider

Create task and execution role.

- [Task vs Service](https://stackoverflow.com/questions/42960678/)

## Exercise 4  
ECS with scaling policy monitoring requests? 

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-autoscaling-targettracking.html