# Topics
- `httpd` server
- R53 health checks
- R53 public hosted zones
- Failover record sets

### Prerequisite
This exercise requires a domain registered with Route53, which can cost about 10-15 USD.
Transferring a domain from another registrar takes 7-10 days and incurs a similar cost.

### Additional command line parameter: 
```--parameters ParameterKey=DomainName,ParameterValue=foo```

## Exercise 1
Create two public EC2 instances. Install the `httpd` server on them with a unique index document per server.
- Refer to previous exercise(s) if necessary. 

**Verify:** 
- Access each instance via HTTP and confirm that each serves a unique page.

---

## Exercise 2
Create a health check for each instance.
- [Health check configuration](https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html)
- [How health is determined](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html)

**Verify:** 
- Confirm health checks are updating when servers are stopped and started using `sudo systemctl stop httpd` and `sudo systemctl start httpd`.

---

## Exercise 3
Create a Route53 Public Hosted Zone. Use its nameservers for the domain (see "Prerequisites" above). 
- [DNS traversal checker](http://dns.squish.net/)

**Verify:** 
- Using the traversal checker, confirm a `NODATA` response. An `NXDOMAIN` response is unacceptable.

---

## Exercise 4
Create two `A` `RecordSet` resources pointing to the apex domain in a `Failover` configuration.
- [AWS::Route53::RecordSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset.html#cfn-route53-recordset-failover)

**Verify:** 
- Confirm traffic is served from the primary instance from the domain.
- Stop the server on the primary instance. After a while, confirm secondary instance is now serving traffic.
