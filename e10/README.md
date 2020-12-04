# Topics
- EC2 Auto Scaling 
- Launch Templates
- Cloudwatch Alarms

---

## Exercise 1 
Create an ASG of EC2 instances with minimum 1, maximum 2.
- [Overview](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)
- [Launch Template properties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html)
- [Auto Scaling Group properties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html)

**Verify:** 
- Terminate the instance and observe ASG eventually re-provision a new one.

---

## Exercise 2
Add a Cloudwatch alarm for > 20% CPU utilization.
- [Cloudwatch Alarm](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html)
- [Stress utility install](https://gist.github.com/mikepfeiffer/d27f5c478bef92e8aff4241154b77e54)
- [ASG alarm example](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-dimension.html)

**Verify:**
- Install `stress` on the EC2 instance (with `amazon-linux-extras`) and breach the alarm with `stress -c 2 -v -t 60`.

---

## Exercise 3

Add a step scaling policy tracking CPU utilization.

- [Autoscaling examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-autoscaling.html)
- [ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-policy.html)

**Verify:**
- Breach the alarm via `stress` and observe ASG create a new instance.