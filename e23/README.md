## Exercise 1
Create a CodeCommit repository. Use the IAM console to generate credentials for it.

- [AWS::CodeCommit::Repository](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html)
- [Generating CodeCommit credentials](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html)

VERIFY
commit empty build.sh to the repo root

---

## Exercise 2
CodeBuild

- [AWS::CodeBuild::Project Source](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codebuild-project-source.html)
- [buildspec.yml examples](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-example)

VERIFY
echo pwd from buildspec
output successful commands from buildspec and build.sh

---

## Exercise 3
CodeDeploy + lambda + SNS + SES

allatonce
SES LAMBDA ON DEPLOY?


- [AWS::CodeDeploy::DeploymentGroup Deployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html)
- [AppSpec file for Lambdas](https://docs.aws.amazon.com/codedeploy/latest/userguide/application-revisions-appspec-file.html#add-appspec-file-lambda)

---

## Exercise 4

add secondarysource codepipeline

commit repo trigger?

UPDATE HELLOROLE to HELLOROLEcb