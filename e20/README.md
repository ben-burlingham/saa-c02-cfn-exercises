create a vpc, subnet, ec2, iam, s3
verify: connect to ec2
aws ec2 describe-subnets --region us-east-1

gateway endpoint to s3
verify: hit s3 object

another vpc, subnet, ec2, iam
verify: hit s3 object fails?

vpc peer
verify: ping ec2 B from A, A from B
 

---

Create an EC2 instance and an S3 bucket in each of the two VPCs.

**Verify:**
privately access bucket from same VPC
can't access bucket in other VPC

---

2x gateway endpoints + interface endpoints


Peer the vpcs