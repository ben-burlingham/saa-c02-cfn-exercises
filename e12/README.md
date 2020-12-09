# Topics
- ECR
- ECS (EC2 + Networking mode)
- Autoscaling groups
- LaunchConfiguration

## Exercise 1
Create a VPN, subnet, route table, and a role. Create an ECR with the Docker Official `hello-world` image.
- Refer to previous exercise(s) if necessary. 
- `aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ACCOUNT_NUMBER.dkr.ecr.us-east-1.amazonaws.com`
- `docker push ACCOUNT_NUMBER.dkr.ecr.us-east-1.amazonaws.com/hello-ecr-hello-world:latest`

**Verify:**
- Observe the components are present and configured properly.

## Exercise 2
Create an autoscaling group with a launch configuration.
- [LaunchConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig.html)

**Verify:**
- Using the EC2 console, confirm that the autoscaling group has populated with (at least) 1 instance.

## Exercise 
Create a cluster.
- The ECS console cluster "Create" wizard results in a Cloudformation template that can be used for reference.
- [AmazonEC2ContainerServiceforEC2Role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_managed_policies.html#AmazonEC2ContainerServiceforEC2Role)
- [Task vs Service](https://stackoverflow.com/questions/42960678/)
- [ECS::Service](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html)
- [UserData for config file](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html)

**Verify:**
- Using the cluster list page, confirm there are (at least) 1 container instance in the cluster.
- Confirm that the container instance is visible under the `ECS Instances` tab in Cluster console.

## Exercise 4  
Create a task that outputs to a log group. Create an ECS Service **with a `DesiredCount` of 0**.
- Refer to previous exercise(s) if necessary. 
  
- [ecs-tasks trust policy](https://stackoverflow.com/a/49016565/385273)
- [AmazonECSTaskExecutionRolePolicy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html)
- [Docker image inspect](https://docs.docker.com/engine/reference/commandline/inspect/)

**Verify:**
- Confirm that the service instance is visible under the `Services` tab in Cluster console.
- Change its desired count to 1. Confirm log groups are being created as task exits and starts.