# Topics
- Lambda (NodeJS)
- API Gateway (v1)

## Exercise 1
Construct a `Lambda` whose outputs are captured in Cloudwatch.
- [Lambda](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html)

**Verify:** 
- Run the Lambda and observe its logs in Cloudwatch.

---

## Exercise 2
Construct an `API Gateway` (v1) with a `MOCK` GET request.
- [API Gateway](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_ApiGateway.html)
- [Method example](https://nickolaskraus.org/articles/creating-an-amazon-api-gateway-with-a-mock-integration-using-cloudformation/)

**Verify:** 
- Receive a 200 response from the GET request.

## Exercise 3
Extend the API Gateway to support a POST request which integrates with the Lambda.
- [Integration docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration.html)
- [Integration example](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#aws-resource-apigateway-method--examples--Lambda_Proxy)
- [Lambda Permission](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html)

**Verify:**
- Receive a 200 response from the POST request.

## Exercise 4
Log parameters from POST inside Lambda.
- [Stringify example](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)

**Verify:**
- Observe logs in either API Gateway console or Cloudwatch logs.