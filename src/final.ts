import {
  Approval as ApprovalEvent,
  DepartmentRegistered as DepartmentRegisteredEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  MerchantRegistered as MerchantRegisteredEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  TokensIssued as TokensIssuedEvent,
  Transfer as TransferEvent,
  UserAuthenticated as UserAuthenticatedEvent,
  UserRegistered as UserRegisteredEvent
} from "../generated/Final/Final"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepartmentRegistered(
  event: DepartmentRegisteredEvent
): void {
  let entity = new DepartmentRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.departmentAddress = event.params.departmentAddress
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerchantRegistered(event: MerchantRegisteredEvent): void {
  let entity = new MerchantRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.merchantAddress = event.params.merchantAddress
  entity.name = event.params.name
  entity.merchantIdentifier = event.params.merchantIdentifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensIssued(event: TokensIssuedEvent): void {
  let entity = new TokensIssued(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserAuthenticated(event: UserAuthenticatedEvent): void {
  let entity = new UserAuthenticated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserRegistered(event: UserRegisteredEvent): void {
  let entity = new UserRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.name = event.params.name
  entity.aadharQRCode = event.params.aadharQRCode

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
