# Topics
- HTTPD
- Network Load Balancers

## Exercise 1
Create two EC2 instances, A and B, on a subnet.

**Verify:** 
- Refer to previous evolution(s) if necessary. 

---

## Exercise 2
Install HTTPD and serve a simple and unique `index.html` from each instance.

Simple HTML: `<h1>Hello Instance A</h1>`
Install command: `sudo yum -y install httpd`
Run command: `sudo service httpd start`
Document root: `/var/www/html`

**Verify:** 
- Access both instances via HTTP and observe the page.

---

## Exercise 3
Create a Network Load Balancer, a Listener, and a Target Group.

- [Overview](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html)
- [Load Balancer](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html)
- [Listener](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html)
- [Target Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html)

**Verify:**
- Access the NLB via HTTP on its public IPv4 address. Observe the unique page served from either instance.

## Exercise 4
Add another NLB Listener for port 3000.  

**Verify:**
- Access the NLB via HTTP on `:3000`
- Confirm HTTP access to each instance is unavailable.