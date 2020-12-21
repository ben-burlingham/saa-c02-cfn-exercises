# Topics
- Bastion pattern
- NAT gateway pattern

### Additional command line parameter: 
```--parameters ParameterKey=BucketSuffix,ParameterValue=foo ParameterKey=KeyPairName,ParameterValue=bar```

---

## Exercise 1
Create a VPC, IGW, RT, and public + private subnets
- Refer to previous exercise(s) if necessary. 

**Verify:** 
- Observe network components in VPC console.

---

## Exercise 2
Create a public EC2 instance and a keypair parameter to SSH to it. Apply a SecurityGroup to allow public SSH access. This is the bastion instance.
- [AWS::EC2::SecurityGroup Ingress](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-rule-1.html)

**Verify:** 
- SSH into the instance.

---

## Exercise 3
Create a private EC2 instance that uses the same keypair parameter. Apply a security group to only allow SSH access from the bastion instance. Locally, enable SSH forwarding. 
- [AWS::EC2::SecurityGroup Egress](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-rule.html)
- [SSH forwarding with -A](https://yakking.branchable.com/posts/ssh-A/)
- [ssh-agent on Git Bash for Windows](https://stackoverflow.com/questions/18404272)

**Verify:** 
- `ssh -i mykey.pem -A ec2-user@bastion.ip` then `ssh privateip`
- Confirm failed (100% packet loss) ping to `1.1.1.1` from private instance.
  
---

## Exercise 4
Add an ElasticIP and a NAT Gateway to the private subnet. Add a route table for the NAT Gateway.
- [AWS::EC2::EIP](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-eip.html)
- [AWS::EC2::NatGateway](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html)

**Verify:**
- Confirm successful (0% packet loss) ping to `1.1.1.1` from private instance.