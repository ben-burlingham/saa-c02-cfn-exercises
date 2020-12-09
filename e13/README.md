# Topics
- VPC, subnets, SG, RT
- RDS multi-AZ
- RDS read replicas

Note: Creating RDS instances is time consuming; it can take about 15-30 minutes per instance.

Note: These exercises can create incidental RDS snapshots. *Be sure to destroy the snapshots* to avoid unexpected fees.

## Exercise 1
Create a VPC, a security group, and a route table. Add two subnets, each in a different AZ.
- Refer to previous exercise(s) if necessary. 

**Verify:** 
- Observe network components in VPC console.

---

## Exercise 2
Create a DB subnet group, and a publicly accessible RDS instance.
- [RDS instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html)
- [RDS in VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html)
- [Connecting PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html)
  
**Verify:** 
- Access the RDS instance from the command line. Postgres example: `psql --host=HELLO_HOST --username=postgres --password --port=5432`

---

## Exercise 3
Update the instance to support multi-AZ.
- [Multi-AZ deployment FAQs](https://aws.amazon.com/rds/faqs/#Multi-AZ_Deployments)

**Verify:** 
- Confirm that the `Reboot With Failover?` option is available on a reboot action in the RDS console.
  
---

## Exercise 4
Create a new RDS instance. Point the original instance to use the new one as a read replica.

- Gotcha: User, password, backup retention, and subnet groups are not permitted.
- [Creating a Read Replica](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create)
- [Read Replicas vs Multi-AZ](https://medium.com/awesome-cloud/aws-difference-between-multi-az-and-read-replicas-in-amazon-rds-60fe848ef53a)

**Verify:** 
- Promote the `Replica` to an `Instance` role.
