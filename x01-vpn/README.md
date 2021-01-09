# Topics
- VPC peering

customer gateway + vpcA + ec2, us-west-1
transit gateway + vpcB + ec2, us-east-1
vpn endpoint + private ec2
peered vpcC to vpcB


---

VPN + Transit gateway to A
Peering to B

1 VPC A + SUBNET
2 VPN TRANSIT GATEWAY INTO A  TransitGatewayId
- [Transit gateway information](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-transit-gateway-vpn.html)
- [Route](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html)

4 VPC B + PEERING

- [VpnConnection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection.html)
- [CustomerGateway](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html)

## Exercise 1
EDIT THIS
1 create two vpcs, two subnets. verify no connectivity

**Verify:**

---

## Exercise 2
add vpc peering update and two route tables. 
- [PeeringConnection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html)
- [VpcPeeringConnectionId Route](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html)

**Verify:**
- Each instance can ping the private IP of the other instance.


## Exercise 3
Transit gateway
VPN


https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/transit-gateway-vs-vpc-peering.html