# Topics
- S3 static hosting
- Cloudformation origin groups
- WAF / Web ACL
- Lambda@Edge
- Lambda Versions

## Exercise 1
Create two S3 buckets to statically host two separate HTML pages. 
- HTML A: `<html><h1>Hello A</h1></html>`
- HTML B: `<html><h1>Hello B</h1></html>`

Although they have different content, they should both be named `index.html`.

**Verify:** 
- Access both buckets via HTTP and observe the page.

---

## Exercise 2
Create a Cloudformation distribution with an origin group using the two buckets.
- [Managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html#attaching-managed-cache-policies)
- [Invalidating objects](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)

**Verify:** 
- From the Cloudfront URL, confirm a successful response from the primary origin.
- Rename `/index.html` on the primary origin. Confirm a successful response from the secondary origin. 

---

## Exercise 3
Create a WAF that blocks requests which have a `User-Agent: BadBot` header.
- [WAF example](https://docs.aws.amazon.com/waf/latest/developerguide/getting-started.html)

**Verify:**
- Confirm a 403 response from `cURL -H 'User-Agent: BadBot' <cloudfront distribution url>`  

---

## Exercise 4
Create a Lambda to insert a `x-hello: GoodBot` header on responses.
- Lambda@Edge may create its Cloudwatch log group in an unexpected region.
- [AWS::Lambda::Version](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html)
- [Lambda@Edge examples](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html)
- [Lambda@Edge debugging](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-testing-debugging.html)

**Verify:**
- Confirm the Cloudfront endpoint response contains the header.
