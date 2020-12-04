# Topics
- Cloudwatch Agent
- SSM (Systems Manager)
- `cfn-init`
- `cfn-signal`

---

## Exercise 1 
Create an EC2 instance on a subnet, and an instance profile for access.
- Refer to previous evolution(s) if necessary. 

**Verify:** 
- Use Session Manager to connect to the instance.

---

## Exercise 2
Store a Cloudwatch Agent configuration in an SSM parameter.
- [Cloudwatch Agent config](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html)

**Verify:**
- Observe created paramter in SSM console.

---

## Exercise 3
Using `cfn-init`, install Cloudwatch Agent on instance launch.
- [Cloudwatch Agent role](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/create-iam-roles-for-cloudwatch-agent.html)
- [cfn-init](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-init.html#w2ab1c33c42c29b9b2)
- [cfn-signal](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-signal.html)
- [Cloudwatch Agent install example](https://github.com/awslabs/aws-cloudformation-templates/blob/master/aws/solutions/AmazonCloudWatchAgent/inline/amazon_linux.template)

**Verify:**
- Execute `amazon-cloudwatch-agent-ctl -h` on instance
- Execute `amazon-cloudwatch-agent-ctl -a status` on instance

---

## Exercise 4
Extend the `cfn-init` to start Cloudwatch Agent after it has installed.
- [Installing and running](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html)

**Verify:**
- View logs from Cloudwatch Agent in Cloudwatch
