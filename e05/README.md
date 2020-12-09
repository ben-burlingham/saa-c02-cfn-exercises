# Topics

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