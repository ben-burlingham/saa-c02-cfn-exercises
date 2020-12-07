# Welcome 

Cloud Lab
Goal: Dependency-free minimalist implementations. Pattern reuse in further evolutions. Intentionally vague to encourage research.
complete in serial
policies often wide-open; refinement left as an exercise for the student.


Prereqs: `iamadmin-general` account

Mappings used for settings. Occasional parameter.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/create-stack.html
https://docs.aws.amazon.com/cli/latest/reference/cloudformation/update-stack.html
  aws cloudformation create-stack 
    --profile iamadmin-general 
    --capabilities CAPABILITY_NAMED_IAM 
    --template-body file://eX/eX.yml 
    --stack-name helloY

Study topics:
- Which services are region/ha resilient
- Adrian's templates
- https://github.com/alozano-77/AWS-SAA-C02-Course/tree/master/Learning-Aids


==================== BACKLOG
E04 MAPPINGS, REWRITE
E05 MAPPINGS, REWRITE
E07 MAPPINGS
E09 ADD KMS ALIAS
E18 R53 (DEPENDENT ON DOMAIN)
E19 CFN (DEPENDENT ON DOMAIN)
E20 KEYNAME PARAMETER KeyName
E21 
E22 VPN
E23 ATHENA
E24 DDB

Global accelerator
Lambda@Edge
IOPS
VPC endpoint services

===================== FINAL BLOG
Use LucidChart diagrams? UML?
rename with numbers but more specific topic names?
Link "create a FOO" to the foo docs in all readme
refine roles and permissions
Part of the "Hello Cloudformation" series (tags? markup?)