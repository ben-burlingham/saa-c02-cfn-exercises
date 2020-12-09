# Topics
- HTTPD
- Network Load Balancers
- 'Forward' load balancing action
- Multiple load balancer listeners

## Exercise 1
Create two EC2 instances, A and B, on a subnet.
- Refer to previous exercise(s) if necessary. 

**Verify:** 
- Use Session Manager to connect to each instance.

---

## Exercise 2
Install HTTPD and serve a simple and unique `index.html` from each instance.
- Install command: `sudo yum -y install httpd`
- Run command: `sudo service httpd start`
- Document root: `/var/www/html`
- Simple HTML: `<h1>Hello Instance A</h1>`

**Verify:** 
- Access both instances via HTTP and observe the page.

---

## Exercise 3
Create a Network Load Balancer, a Target Group, and a `forward` Listener.
- [Overview](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html)
- [Load Balancer](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html)
- [Target Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html)
- [Listener](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html)

**Verify:**
- Access the NLB via HTTP on its public IPv4 address. Observe the unique page served from either instance.

## Exercise 4
Add another `forward` Listener on port 3000.  

**Verify:**
- Access the NLB via HTTP on `:3000`.