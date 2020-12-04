# Topics
- S3 Static Hosting
- Cloudfront

## Exercise 1
Create two S3 buckets to statically host two separate HTML pages.
- HTML A: `<html><h1>Hello A</h1></html>`
- HTML B: `<html><h1>Hello B</h1></html>`

**Verify:** 
- Access both buckets via HTTP and observe the page.

---

## Exercise 2

- 




https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html


R53 (DEPENDENT ON DOMAIN)
2x EC2 + httpd
health check
failover hosted
subdomain?
hosted zone query logging?

CFN (DEPENDENT ON DOMAIN)
cloudfront distribution
origin access identity 
failover with two origins?
WAF? (very maybe)
add lambda? (nah)
