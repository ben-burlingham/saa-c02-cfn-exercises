# Topics
- `httpd` server
- Global Accelerator 
- Global Accelerator listener
- Global Accelerator endpoint group

---

## Exercise 1
Create a VPC, an EC2 instance, and a Session Manager role.
- Refer to previous exercise(s) if necessary.

**Verify:**
- Use Session Manager to connect to the EC2 instance.

---

## Exercise 2
Use `cfn-init` to install the `httpd` server on the instance.
- Refer to previous exercise(s) if necessary. 
- `sudo yum install -y httpd`
- `sudo systemctl start httpd`
- `sudo echo "<html><h1>Hello Instance N</h1></html>" > /var/www/html/index.html`
- [Web server creation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html)

**Verify:** 
- Confirm a successful HTTP response from the instance.

---

## Exercise 3
Create a global accelerator and a listener. Create an endpoint group, configured to use the EC2 instance.
- [AWS::GlobalAccelerator::EndpointGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html)
- [AWS::GlobalAccelerator::Listener](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html)
- [GlobalAccelerator health check details](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-health-check-options.html)

**Verify:**
- Confirm successful health check in endpoint group
- Use each of the endpoints provided by the GlobalAccelerator to confirm a successful HTTP response.
