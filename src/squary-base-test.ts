import {
  DepositMade as DepositMadeEvent,
  WithdrawalMade as WithdrawalMadeEvent,
  SettleCompleted as SettleCompletedEvent,
  GroupCreated as GroupCreatedEvent,
  ThresholdChanged as ThresholdChangedEvent
} from "../generated/SquaryBaseTest/SquaryBaseTest"
import {
  Balance,
  DepositMade,
  WithdrawalMade,
  SettleCompleted,
  ThresholdChanged,
  GroupCreated
} from "../generated/schema"
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

function updateBalance(groupId: Bytes, member: Bytes, amount: BigInt, isCredit: boolean): void {
  let id = groupId.toHex() + '-' + member.toHex();
  let balance = Balance.load(id);

  if (balance == null) {
    balance = new Balance(id);
    balance.groupId = groupId;
    balance.member = member;
    balance.balance = BigInt.fromI32(0);
  }

  if (isCredit) {
    balance.balance = balance.balance.plus(amount);
  } else {
    balance.balance = balance.balance.minus(amount);
  }

  balance.save();
}

export function handleGroupCreated(event: GroupCreatedEvent): void {
  let entity = new GroupCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SquaryBaseTest_id = event.params.id
  entity.name = event.params.name
  entity.members = event.params.members.map<Bytes>((member) => member as Bytes)

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

  updateBalance(event.params.groupId, event.params.member, event.params.amount, true);
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

  updateBalance(event.params.groupId, event.params.member, event.params.amount, false);
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

  // Debtor loses the amount
  updateBalance(event.params.groupId, event.params.debtor, event.params.amount, false);

  // Creditor gains the amount
  updateBalance(event.params.groupId, event.params.creditor, event.params.amount, true);
}

