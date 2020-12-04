VPC peering + kinesis or event bridge or step function

1 create two vpcs, two subnets. verify no connectivity
2 create two lambdas on each one (four total)
3 create step functions
4 add vpc peering. 
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html
vvvvv  VpcPeeringConnectionId ^^^^
"You must specify one of the following targets: EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId, NetworkInterfaceId, TransitGatewayId, or VpcPeeringConnectionId."
verify:  run each lambda from the other network