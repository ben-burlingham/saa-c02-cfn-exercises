# Hello Cloud Lab

Welcome! 

This repository is a collection of "Hello World" CloudFormation templates with self-perform exercises.

To start, create an IAM administrative user named `iamadmin-general`.

## The templates...
- have no dependencies
- are often very simplistic
- increase in complexity
- reuse patterns from earlier exercises

## The exercises...
- are intentionally vague to encourage research
- are intentionally unrefined to encourage experimentation

## Disclaimers
- Most of these can be done on free tier. They are very lightweight and should incur very little billing, but please keep an eye on it.
- These are not production ready.
- These are not production ready.

## Getting started

Create an IAM administrative user named `iamadmin-general`.

- [Template Anatomy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html)
- [CLI create-stack](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/create-stack.html)
- [CLI update-stack](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/update-stack.html)

An example of a common CLI call:
  ```
  aws cloudformation create-stack 
    --profile iamadmin-general 
    --capabilities CAPABILITY_NAMED_IAM 
    --template-body file://eX/eX.yml 
    --stack-name helloY
  ```



==================== BACKLOG
E04 MAPPINGS, REWRITE
E05 MAPPINGS, REWRITE
E07 MAPPINGS
E09 ADD KMS ALIAS
E18 R53 (DEPENDENT ON DOMAIN)
E19 CFN (DEPENDENT ON DOMAIN)
E20 KEYNAME PARAMETER KeyName
E22 DDB
E23 ATHENA + ELASTICACHE

CFN global accelerator
Lambda@Edge
IOPS
VPC endpoint services
Elastic beanstalk
Directory service
FSx for Lustre
WAF

===================== FINAL BLOG
Host site in S3 + CF, host site on Amplify
Use LucidChart diagrams? UML?
rename with numbers but more specific topic names?
Link "create a FOO" to the foo docs in all readme
refine roles and permissions
Part of the "Hello Cloudformation" series (tags? markup?)