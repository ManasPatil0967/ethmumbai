import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  DepartmentRegistered,
  EIP712DomainChanged,
  MerchantRegistered,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokensIssued,
  Transfer,
  UserAuthenticated,
  UserRegistered
} from "../generated/Final/Final"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createDepartmentRegisteredEvent(
  departmentAddress: Address,
  name: string
): DepartmentRegistered {
  let departmentRegisteredEvent = changetype<DepartmentRegistered>(
    newMockEvent()
  )

  departmentRegisteredEvent.parameters = new Array()

  departmentRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "departmentAddress",
      ethereum.Value.fromAddress(departmentAddress)
    )
  )
  departmentRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return departmentRegisteredEvent
}

export function createEIP712DomainChangedEvent(): EIP712DomainChanged {
  let eip712DomainChangedEvent = changetype<EIP712DomainChanged>(newMockEvent())

  eip712DomainChangedEvent.parameters = new Array()

  return eip712DomainChangedEvent
}

export function createMerchantRegisteredEvent(
  merchantAddress: Address,
  name: string,
  merchantIdentifier: string
): MerchantRegistered {
  let merchantRegisteredEvent = changetype<MerchantRegistered>(newMockEvent())

  merchantRegisteredEvent.parameters = new Array()

  merchantRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "merchantAddress",
      ethereum.Value.fromAddress(merchantAddress)
    )
  )
  merchantRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  merchantRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "merchantIdentifier",
      ethereum.Value.fromString(merchantIdentifier)
    )
  )

  return merchantRegisteredEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTokensIssuedEvent(
  userAddress: Address,
  amount: BigInt
): TokensIssued {
  let tokensIssuedEvent = changetype<TokensIssued>(newMockEvent())

  tokensIssuedEvent.parameters = new Array()

  tokensIssuedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  tokensIssuedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokensIssuedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUserAuthenticatedEvent(
  userAddress: Address
): UserAuthenticated {
  let userAuthenticatedEvent = changetype<UserAuthenticated>(newMockEvent())

  userAuthenticatedEvent.parameters = new Array()

  userAuthenticatedEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )

  return userAuthenticatedEvent
}

export function createUserRegisteredEvent(
  userAddress: Address,
  name: string,
  aadharQRCode: string
): UserRegistered {
  let userRegisteredEvent = changetype<UserRegistered>(newMockEvent())

  userRegisteredEvent.parameters = new Array()

  userRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "aadharQRCode",
      ethereum.Value.fromString(aadharQRCode)
    )
  )

  return userRegisteredEvent
}
