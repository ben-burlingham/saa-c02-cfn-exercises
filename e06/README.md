# Topics
- IPv6 VPC, subnets, route tables
- Egress-only internet gateway
- Elastic IP

### Important note
Connectivity to the IPv6 internet requires router and/or ISP support. See https://ipv6-test.com/ or http://test-ipv6.com/.
You can't SSH directly to IPv6 without this.

---

## Exercise 1
Create a VPC, an IGW, a route table, and a subnet with both IPv4 and IPv6 CIDR blocks.
- [AWS::EC2::VPCCidrBlock](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html)
- [!Cidr](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html)
- [Subnet DependsOn CIDR block](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html)

**Verify:**
- Confirm the VPC has an IPv6 pool from Amazon
- Confirm the subnet has an IPv6 CIDR block

---

## Exercise 2
Create an EC2 instance and an instance profile. Associate an Elastic IP to the instance.
- Refer to previous exercise(s) if necessary. 
- [Why EIP](https://serverfault.com/questions/846387)
- [AWS::EC2::EIPAssociation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip-association.html)

**Verify:**
- Confirm instance has been assigned an IPv6
- Confirm instance has a publicly available IPv4
- Use Session Manager to connect to the instance
- Confirm successful (0% packet loss) of `ping6 ipv6.google.com` from instance
- Confirm successful (0% packet loss) ping to instance using http://ipv6now.com.au/pingme.php

---

## Exercise 3
Attach an egress-only internet gateway to the VPC.

**Verify:**
- Confirm successful (0% packet loss) of `ping6 ipv6.google.com` from instance
- Confirm failed (100% packet loss) ping to instance using http://ipv6now.com.au/pingme.php
