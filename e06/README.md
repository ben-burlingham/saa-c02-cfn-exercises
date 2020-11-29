# Topics
- IPv6 VPC, subnets, route tables
- Egress-only internet gateway
- Elastic IP

### Important IPv6 note  
Connectivity to the IPv6 internet requires router and/or ISP support. See https://ipv6-test.com/ or http://test-ipv6.com/.

---

## Exercise 1
Create an EC2 instance, and the role to connect to it.
- Refer to previous evolution(s) if necessary. 

**Verify:**
- Use Session Manager to connect to the instance.

---

HAVE TO SSH?

<!-- ## Exercise 2
Create an IPv4 VPC, subnet, and route table.
- Refer to previous evolution(s) if necessary. 

**Verify:**
-  -->

---

<!--

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
  
  
To test manually, must enable port forwarding with "eval `ssh-agent.exe`" and `ssh-add mykey.pem`

-->