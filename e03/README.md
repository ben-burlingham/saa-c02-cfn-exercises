# Topics
- EC2 (Elastic Compute Cloud)
- EBS (Elastic Block Store)
- EFS (Elastic File System)

---

## Exercise 1
Create two EC2 instances, A and B, and the role to connect to them.
- Refer to previous exercise(s) if necessary. 

**Verify:** 
- Use Session Manager to connect to each instance.

---

## Exercise 2
Create a VPC, subnet, and security group.
- Refer to previous exercise(s) if necessary. 

**Verify:** 
- Confirm instance A and B have IPs in the subnet block.
- Use Session Manager to connect to each instance.

---

## Exercise 3
Create a file inside an encrypted EBS volume attached to instance A.
- [EBS volumes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html)
- [EBS volume attachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volumeattachment.html)
- [Linux block devices / file system commands](https://github.com/acantril/aws-sa-associate-saac02/blob/master/08-EC2-Basics/01_ebs_demo/commands.txt)

**Verify:**
- Use the AWS EC2 console to re-attach the volume to instance B, and confirm the file exists.

---

## Exercise 4
Create an EFS instance and mount it to both instances.

Simplest commands to mount. Substitute the private IP address of the EFS.
- `sudo mkdir /hello-efs`
- `sudo mount -t nfs4 __IP_HERE__:/ /hello-efs`

**Verify:**
- Observe changes to files in the EFS are visible on both EC2 instances.
