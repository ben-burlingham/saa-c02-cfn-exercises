# Welcome 

Cloud Lab
Goal: Dependency-free implementations. Pattern reuse in further evolutions. Intentionally vague to encourage research.
complete in serial

Part of the "Hello Cloudformation" series (tags? markup?)

Prereqs:  `iamadmin-general` account

Mappings used for settings. Occasional parameter.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/create-stack.html
https://docs.aws.amazon.com/cli/latest/reference/cloudformation/update-stack.html
  aws cloudformation create-stack 
    --profile iamadmin-general 
    --capabilities CAPABILITY_NAMED_IAM 
    --template-body file://eX/eX.yml 
    --stack-name helloY

Study topics:
- Which services are region/ha resilient
- Adrian's templates
- https://github.com/alozano-77/AWS-SAA-C02-Course/tree/master/Learning-Aids
- Use LucidChart diagrams? UML?

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


E12 ECS
E18

Cloudfront + origin access identity + static hosting + R53 "Hosted Zones" and "Health Check"
VPC ENDPOINTS + VPC PEERING
Kinesis

==================== BACKLOG
Global accelerator
Lambda@Edge
IOPS
"Spot" instances (https://docs.aws.amazon.com/autoscaling/ec2/userguide/capacity-rebalance.html, https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-launchconfig.html#cfn-as-launchconfig-spotprice)
Step functions
Event bridge
