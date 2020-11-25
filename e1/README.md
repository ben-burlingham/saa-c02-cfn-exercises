# Evolution 1

### Topics:
- S3 bucket creation
- SSE-S3 encryption
- S3 bucket policy
- S3 bucket replication

### Additional command line parameter: 

```--parameters ParameterKey=UniqueSuffix,ParameterValue=foo```

---

## Exercise 1: 
Create two SSE-S3 encrypted buckets.
- [S3 Bucket Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html)
- [S3 Encryption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html)

**Verify:** Upload a file to each bucket.

---

## Exercise 2: 
Apply bucket policy to Source bucket. Allow any principal to take any action.
- [S3 Bucket Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html)
- [Example Bucket Policies](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html)

**Verify:** Access a file via HTTP in each bucket. Source should allow, Destination should deny.

---

## Exercise 3: 
Create trust policy role for replication service to assume.
- [ReplicationConfiguration permissions](https://docs.aws.amazon.com/AmazonS3/latest/dev/setting-repl-config-perm-overview.html)
- [S3 ARN](https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html)

**Verify:** Observe new role in IAM console.

---

## Exercise 4: 
Configure replication and versioning for source and destination.
- [ReplicationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html)

**Verify:** Watch an uploaded file appear in replicate bucket.