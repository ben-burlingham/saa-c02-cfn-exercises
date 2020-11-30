# Topics
- HTTPD
- Application Load Balancers
- 'Forward' load balancing action
- 'FixedResponse' load balancing action
- Session stickiness

## Exercise 1
Create two subnets and two EC2 instances, A and B, serving simple and unique `index.html`.
- Refer to previous evolution(s) if necessary. 

**Verify:** 
- Access both instances via HTTP and observe the page.

---

## Exercise 2
Apply an ALB. More additional attributes will be required than the NLB.
- Refer to previous evolution(s) if necessary. 
- [LoadBalancer](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html)

**Verify:** 
- Access the public IPv4 of the ALB. Observe response coming from different instances.

---

## Exercise 3
Add a `fixed-response` listener on port 3000.
- [FixedResponseConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html)

**Verify:**
- Access the ALB via HTTP on `:3000`.

---

## Exercise 4
Enable session stickiness on the ALB target group.

**Verify:**
- Check the HTTP response for a `Set-Cookie` header, which sets the `AWSALB` cookie.

