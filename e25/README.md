# Topics
- Elastic Beanstalk application
- Elastic Beanstalk environment
- Elastic Beanstalk versions
- Elastic Beanstalk extensions
- Elastic Beanstalk configurations

---

## Exercise 1 
Create an S3 bucket. Create a simple Node server and a simple `package.json`, and put them in an `application.zip` archive.
- [Hello World server](https://nodejs.org/en/docs/guides/getting-started-guide/)

**Verify:** 
- Locally, confirm that the server works as expected.
- Upload the `application.zip` archive to the bucket.

---

## Exercise 2
Create an Elastic Beanstalk application, environment, version, and role. Add a ConfigurationTemplate which sets the instance profile and enables Cloudwatch logging.
- [AWS::ElasticBeanstalk::ConfigurationTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html)
- [Logging configuration](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.cloudwatchlogs.html#AWSHowTo.cloudwatchlogs.files)
- [InstanceProfile](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-instanceprofile.html)
- [Proxy port is 8080](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-platform-proxy.html)
- `aws elasticbeanstalk list-available-solution-stacks`

**Verify:**
- Confirm a successful HTTP response from the environment URL.
- Confirm existence of Cloudwatch logs.

---

## Exercise 3
Create an .ebextensions directory to application bundle. Inside of it, create a .config and add any additional configuration.
- [.ebextensions](https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-configuration-files/)

**Verify:**
- Confirm configurations in the Elastic Beanstalk console, under "Environment > Configuration Overview".

---

## Exercise 4
Create a second ConfigurationTemplate, using the SourceConfiguration property to refer to the original ConfigurationTemplate. Change the proxy `PORT` to `3000`.

**Verify:**
- Confirm a successful HTTP response from the environment URL.
- Confirm configurations in the Elastic Beanstalk console, under "Environment > Configuration Overview".

