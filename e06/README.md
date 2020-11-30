# Topics
- IPv6 VPC, subnets, route tables
- Egress-only internet gateway
- Elastic IP

### Important notes
Connectivity to the IPv6 internet requires router and/or ISP support. See https://ipv6-test.com/ or http://test-ipv6.com/.
You can't SSH directly to IPv6 without this.


- EC2 Session Manager does not support IPv6.
- An additional command line parameter: `--parameters ParameterKey=KeyPairName,ParameterValue=foo`


CAN'T PING WITH CURRENT ROUTER
HAVE TO RUN FULL TEMPLATE, THEN MAKE EC2 INSTANCE TO IPV4 INTO, THEN SSH IPV6 INTO OTHER INSTANCE?


---

## Exercise 1

INSTANCE 1

aws cloudformation update-stack --profile iamadmin-general --capabilities CAPABILITY_NAMED_IAM --parameters ParameterKey=KeyPairName,ParameterValue=IAMADMIN_GENERAL --template-body file://e06/e06.yml --stack-name bb06

---

## Exercise 2
Create an EC2 instance with IPv6 SSH support.
<!-- https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html -->
- 

**Verify:**
- SSH to instance: `ssh -i myKey.pem ec2-user@ipv6`

---

## Exercise 4
Attach an egress-only internet gateway to the VPC.

**Verify:**
- `ping6 ipv6.google.com` from instance
- 100% packet loss ping from http://ipv6now.com.au/pingme.php

<!--

  
  
v2 IPv6 VPC, IPv6 subnet, IGW, IPv4 RT
  Goal: REDO Attach IGW, enable all IPv4 addresses and protocols

v3 IPv6 VPC, IPv6 subnet, IGW, IPv4 RT, EC2, EIP
  Goal: `ping6 ipv6.google.com` from instance
  Goal: 0% packet loss ping from http://ipv6now.com.au/pingme.php
  Note: Assign EIP to ENI of IPv6 EC2 instance for IPv4 (https://serverfault.com/questions/846387)
  https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html

v4 IPv6 VPC, IPv6 subnet, IGW, IPv4 RT, EC2, EIP, EIGW, IPv6 RT
  
To test manually, must enable port forwarding with "eval `ssh-agent.exe`" and `ssh-add mykey.pem`

-->