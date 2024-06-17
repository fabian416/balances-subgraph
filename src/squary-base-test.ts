import {
  DepositMade as DepositMadeEvent,
  GroupCreated as GroupCreatedEvent,
  MemberAdded as MemberAddedEvent,
  MemberRemoved as MemberRemovedEvent,
  SettleCompleted as SettleCompletedEvent,
  ThresholdChanged as ThresholdChangedEvent,
  WithdrawalMade as WithdrawalMadeEvent
} from "../generated/SquaryBaseTest/SquaryBaseTest"
import {
  DepositMade,
  GroupCreated,
  MemberAdded,
  MemberRemoved,
  SettleCompleted,
  ThresholdChanged,
  WithdrawalMade
} from "../generated/schema"

export function handleDepositMade(event: DepositMadeEvent): void {
  let entity = new DepositMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.member = event.params.member
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGroupCreated(event: GroupCreatedEvent): void {
  let entity = new GroupCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SquaryBaseTest_id = event.params.id
  entity.name = event.params.name
  entity.members = event.params.members

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberAdded(event: MemberAddedEvent): void {
  let entity = new MemberAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.newMember = event.params.newMember

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMemberRemoved(event: MemberRemovedEvent): void {
  let entity = new MemberRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.member = event.params.member

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettleCompleted(event: SettleCompletedEvent): void {
  let entity = new SettleCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.debtor = event.params.debtor
  entity.creditor = event.params.creditor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleThresholdChanged(event: ThresholdChangedEvent): void {
  let entity = new ThresholdChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.newThreshold = event.params.newThreshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalMade(event: WithdrawalMadeEvent): void {
  let entity = new WithdrawalMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.groupId = event.params.groupId
  entity.member = event.params.member
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
