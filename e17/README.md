# Topics
- Lambda (NodeJS)
- SQS EventSourceMapping (lambda trigger)
- SNS

## Exercise 1
Create an SQS queue.

**Verify:** 
- Use the SQS console to send and receive messages.

---

## Exercise 2
Create a lambda that reads events from the queue, and logs to Cloudwatch.
-[EventSourceMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html)
-[Lambda Timeout](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-timeout)

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sqs-examples-using-queues.html

**Verify:**
- Send messages from the SQS console, and observe them in Cloudwatch.

---

## Exercise 3
Subscribe to SNS topic with SQS.
- [Example](https://docs.aws.amazon.com/sns/latest/dg/SendMessageToSQS.cloudformation.html)
- [Subscription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html)
- [Subscribe format](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)

**Verify:**
- Publish a message to the topic from the SNS console. Observe the published message in Cloudwatch.

---

## Exercise 4
Create a lambda that subscribes to the SNS topic, and logs published messages to Cloudwatch.

**Verify:**
- Publish a message to the topic from the SNS console. Observe the published message in Cloudwatch.