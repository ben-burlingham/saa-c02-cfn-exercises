Cloud Lab
Goal: Dependency-free implementations. Pattern reuse in further evolutions.

Hello Automation

Prereqs:  `iamadmin-general` account

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/create-stack.html
https://docs.aws.amazon.com/cli/latest/reference/cloudformation/update-stack.html
  aws cloudformation create-stack 
    --profile iamadmin-general 
    --capabilities CAPABILITY_NAMED_IAM 
    --template-body file://eX-vY.yml 
    --stack-name helloN

Study topics:
- Which services are region/ha resilient
- Adrian's templates
- https://github.com/alozano-77/AWS-SAA-C02-Course/tree/master/Learning-Aids
- Use LucidChart diagrams? UML?

## Evolution 1

Topics: S3 bucket creation, SSE-S3 encryption, S3 bucket policy, S3 bucket replication

Additional command line parameter: 
```--parameters ParameterKey=UniqueSuffix,ParameterValue=foo```

*Task:* Create two SSE-S3 encrypted buckets.
*Verify:* Upload a file to each bucket.
- [S3 Bucket Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html)
- [S3 Encryption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html)

*Task:* Apply bucket policy to Source bucket. Allow any principal to take any action.
*Verify:* Access a file via HTTP in each bucket. Source should allow, Destination should deny.
- [S3 Bucket Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html)
- [Example Bucket Policies](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html)

*Task:* Create trust policy role for replication service to assume.
- [ReplicationConfiguration permissions](https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html)
- [S3 ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)

*Task:* Configure replication and versioning for source and destination.
*Verify:* Watch an uploaded file appear in replicate bucket.
- [ReplicationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html)

================= E2
  Topics: EC2 Session Manager, VPCs, subnets, route tables, NACL

  MAPPINGS FOR COMMON VALUES
  REWRITE VERSIONS/GOALS

  v1 
    Goal: Create network components.

  v2 
    Goal: Create instance profile for upcoming EC2 instance.

  v3 
    Goal: Connect to instance with the role.
    Goal: 0% packet loss ping to 1.1.1.1 

  v4 
    Goal: 100% packet loss ping to 1.1.1.1 
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-acl.html
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html

================ NEW E3: EC2, EBS, EFS
  Task: Create two EC2 instances on the default network.
  Verify: Connect with Session Manager to each instance.
  
  v2 Create EBS volume, attach to both
    Put something in it and see in both
  v3 Create EFS volume attach to both
    Put something in it and see in both

  Goal: Attach encrypted EBS volume using KMS key.
  https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html
  https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html
  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html#available-ec2-device-names  

================ E4: VPC Bastion

  SPLIT UP
  REWRITE VERSIONS/GOALS
  MAPPINGS FOR COMMON VALUES
  OMIT SG?

  v1 VPC, IGW, RT
    Goal:
    Internet gateway: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html
    Internet gateway attach: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html
    VPC: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html
    Route table: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route-table.html
    Route: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html

  v2 VPC, IGW, RT, public + private subnets
    Goal:
    Note: Since private instance has no need to access the internet, it doesn't need an RT association.
    Subnet: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html
    Subnet association: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-route-table-assoc.html

  v3 VPC, IGW, RT, public + private subnets, bastion EC2 + SG
    Goal:
    EC2 https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html
    SG Ingress https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-rule-1.html

  v4 VPC, IGW, RT, public + private subnets, bastion EC2 + SG, private EC2 + SG
    Goal:
    Test: `ssh -i mykey.pem ec2-user@bastion.ip` then `ssh ec2-user@private.ip`
    SG Egress https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-rule.html

================ E5: VPC NAT Gateway
  Two route tables are created for public and private.
  Route tables belong to a VPC, but are attached to subnets.

  MAPPINGS FOR COMMON VALUES
  SPLIT UP
  OMIT SG?

  v1 VPC, IGW, NGW + EIP, public + private subnets
    NAT Gateway https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html
    Elastic IP https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html

  v2 VPC, IGW, NGW + EIP, public + private subnets, IGW RT, NWG RT
    The IGW RT is used on the public subnet.
    The NWG RT is used on the private subnet.

  v3 VPC, IGW, NGW + EIP, public + private subnets, IGW RT, NWG RT, public EC2 + SG
    Goal: ping 1.1.1.1 from public
    
  v4 VPC, IGW, NGW + EIP, public + private subnets, IGW RT, NWG RT, public EC2 + SG, private EC2 + SG
    Goal: ping 1.1.1.1 from private

================ E6: VPC IPv6

  MAPPINGS FOR COMMON VALUES
  SPLIT UP
  REWRITE VERSIONS/GOALS
  POSSIBLE TO SESSION CONNECT TO v1?

  Connectivity to the IPv6 internet requires router and/or ISP support. See https://ipv6-test.com/ or http://test-ipv6.com/.

  To test manually, must enable port forwarding with "eval `ssh-agent.exe`" and `ssh-add mykey.pem`

  v1 
    Goal: REDO Create IPv6 network components
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html
    
  v2 IPv6 VPC, IPv6 subnet, IGW, IPv4 RT
    Goal: REDO Attach IGW, enable all IPv4 addresses and protocols

  v3 IPv6 VPC, IPv6 subnet, IGW, IPv4 RT, EC2, EIP
    Goal: `ping6 ipv6.google.com` from instance
    Goal: 0% packet loss ping from http://ipv6now.com.au/pingme.php
    Note: Assign EIP to ENI of IPv6 EC2 instance for IPv4 (https://serverfault.com/questions/846387)
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html

  v4 IPv6 VPC, IPv6 subnet, IGW, IPv4 RT, EC2, EIP, EIGW, IPv6 RT
    Goal: `ping6 ipv6.google.com` from instance
    Goal: 100% packet loss ping from http://ipv6now.com.au/pingme.php
    
================= E7: Flow Logs

  MAPPINGS FOR COMMON VALUES

  v1 VPC, subnet, IGW, RT
    Goal: Create network components.

  v2 VPC, subnet, IGW, RT, IAM, EC2
    Goal: Connect to EC2 instance.
  
  v3 VPC, subnet, IGW, RT, IAM, EC2, VPC flow log, subnet flow log
    Goal: View Flow Logs on VPC and subnet
    https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html

  v4 VPC, subnet, IGW, RT, IAM, EC2, VPC flow log, subnet flow log, ENI, ENI flow log
    Goal: View Flow Logs on Network Interface
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface.html
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface-attachment.html


================= E8: Cloudwatch Agent
  Difficulty: 4*
  

  v1 VPC, subnet, IGW, RT, IAM
  Goal: Create foundational components.
  https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/create-iam-roles-for-cloudwatch-agent.html

  v2 VPC, subnet, IGW, RT, IAM, SSM
    Goal: 
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-init.html#w2ab1c33c42c29b9b2
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-signal.html
    https://github.com/awslabs/aws-cloudformation-templates/blob/master/aws/solutions/AmazonCloudWatchAgent/inline/amazon_linux.template

  v3 VPC, subnet, IGW, RT, IAM, SSM, EC2
    Goal: `amazon-cloudwatch-agent-ctl -h` on instance
    Goal: `amazon-cloudwatch-agent-ctl -a status` on instance
    https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html

  v4 VPC, subnet, IGW, RT, IAM, SSM, EC2, CW
    Goal: View logs from Cloudwatch Agent in Cloudwatch
    https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html

================= E9: KMS, Cloudtrail

  ADD ALIAS
  PARAMS TO TOP

  Additional command line parameter: 
    --parameters ParameterKey=UniqueSuffix,ParameterValue=foo 

  v1 
    Goal: Create CMK key with only administrative permissions.
    Goal: Create two buckets, encrypt one with CMK.
    Goal: Observe blocked access to encrypted bucket.
    https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-administrators
    https://aws.amazon.com/premiumsupport/knowledge-center/update-key-policy-future/

  v2 
    Goal: Create Cloudtrail that delivers data to unencrypted bucket.
    Verify: Observe Cloudtrail logs in unencrypted bucket.
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html

  v3 
    Goal: Extend CMK with Cloudtrail policies.
    https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create-kms-key-policy-for-cloudtrail.html

  v4 
    Goal: Create Cloudtrail that delivers data to encrypted bucket.
    Verify: Observe Cloudtrail logs in encrypted bucket.

==================== E10: ECR, ECS (Fargate mode)

  v1: 
    Goal: Create an ECR repository with the Docker Official `hello-world` image.
    https://hub.docker.com/_/hello-world
    https://docs.docker.com/docker-hub/download-rate-limit/
    https://docs.docker.com/engine/reference/commandline/inspect/
    https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_on_ECS.html
    https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html

  v2: 
    Goal: Create log group.
    Goal: Create the task execution role.
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html

  v3: 
    Goal: Create Fargate cluster.
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html

  v4: 
    Goal: Run `/hello` command from a task in Fargate mode (without creating a service).
    Goal: See output from `/hello` in Cloudwatch.
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/example_task_definitions.html
    https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-logconfiguration.html
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html

==================== E11: ECS (EC2 mode), ALB, ASG
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html
https://github.com/awslabs/aws-cloudformation-templates/tree/master/aws/services/ECS/FargateLaunchType
https://github.com/1Strategy/fargate-cloudformation-example/blob/master/fargate.yaml
https://hub.docker.com/_/httpd

==================== ZZZ
R53 "Hosted Zones" and "Health Check"
S3 static hosting