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

E09 ADD KMS ALIAS
E12 ECS
E18 R53 (DEPENDENT ON DOMAIN)
E19 CFN (DEPENDENT ON DOMAIN)
E20 KEYNAME PARAMETER KeyName
E21 
  

Kinesis
Step functions
Event bridge

==================== BACKLOG
Global accelerator
Lambda@Edge
IOPS
"Spot" instances (https://docs.aws.amazon.com/autoscaling/ec2/userguide/capacity-rebalance.html, )
rename with numbers but more specific topic names?