Topics:
- SSH forwarding
- VPC interface endpoint
- VPC gateway endpoint

### Additional command line parameter: 
```--parameters ParameterKey=BucketSuffix,ParameterValue=foo ParameterKey=KeyPairName,ParameterValue=bar```

---

## Exercise 1
Create a public and private subnet, an EC2 instance on each subnet, and a public S3 bucket.
- [SSH forwarding with -A](https://yakking.branchable.com/posts/ssh-A/)
- [ssh-agent on Git Bash for Windows](https://stackoverflow.com/questions/18404272)

**Verify:**
- `ssh -A ec2-user@publicip` to access public EC2 instance, then `ssh ec2-user@privateip` to access private instance
- Confirm no public internet connectivity in private EC2 instance: `ping www.google.com`
- Confirm bucket access from public EC2 instance: `wget hello-s3-object-url`
- Confirm no bucket access from private EC2 instance: `wget hello-s3-object-url`

---

## Exercise 2
Add an instance profile to each EC2 instance enabling `arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess`.
- [describe-vpcs](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpcs.html)

**Verify:**
- Confirm access to EC2 service in public EC2 instance: `aws ec2 describe-vpcs --region us-east-1` 
- Confirm no access to EC2 service in private EC2 instance

---

## Exercise 3
Add a VPC interface endpoint and apply a security group for it.
- [VPCEndpoint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html)
- [Example usage](https://www.youtube.com/watch?v=caJ7zh9qzmw&t=2s)

**Verify:**
- Confirm no public internet connectivity in private EC2 instance: `ping www.google.com`
- Confirm access to EC2 service in private EC2 isntance: `aws ec2 describe-vpcs --region us-east-1 --endpoint-url https://regional-endpoint-url` 

---

## Exercise 4
Add a VPC gateway endpoint and a route table for it.
- [Example usage](https://www.youtube.com/watch?v=He1DL3WiL_E)
- [Automatic Route creation](https://docs.aws.amazon.com/vpc/latest/userguide/vpce-gateway.html#vpc-endpoints-routing)

**Verify:**
- Confirm no public internet connectivity in private EC2 instance: `ping www.google.com`
- Confirm bucket access from private EC2 instance: `wget hello-s3-object-url`