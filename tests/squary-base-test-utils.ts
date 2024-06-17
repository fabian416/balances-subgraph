import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DepositMade,
  GroupCreated,
  MemberAdded,
  MemberRemoved,
  SettleCompleted,
  ThresholdChanged,
  WithdrawalMade
} from "../generated/SquaryBaseTest/SquaryBaseTest"

export function createDepositMadeEvent(
  groupId: Bytes,
  member: Address,
  amount: BigInt
): DepositMade {
  let depositMadeEvent = changetype<DepositMade>(newMockEvent())

  depositMadeEvent.parameters = new Array()

  depositMadeEvent.parameters.push(
    new ethereum.EventParam("groupId", ethereum.Value.fromFixedBytes(groupId))
  )
  depositMadeEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  depositMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositMadeEvent
}

export function createGroupCreatedEvent(
  id: Bytes,
  name: string,
  members: Array<Address>
): GroupCreated {
  let groupCreatedEvent = changetype<GroupCreated>(newMockEvent())

  groupCreatedEvent.parameters = new Array()

  groupCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )
  groupCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  groupCreatedEvent.parameters.push(
    new ethereum.EventParam("members", ethereum.Value.fromAddressArray(members))
  )

  return groupCreatedEvent
}

export function createMemberAddedEvent(
  groupId: Bytes,
  newMember: Address
): MemberAdded {
  let memberAddedEvent = changetype<MemberAdded>(newMockEvent())

  memberAddedEvent.parameters = new Array()

  memberAddedEvent.parameters.push(
    new ethereum.EventParam("groupId", ethereum.Value.fromFixedBytes(groupId))
  )
  memberAddedEvent.parameters.push(
    new ethereum.EventParam("newMember", ethereum.Value.fromAddress(newMember))
  )

  return memberAddedEvent
}

export function createMemberRemovedEvent(
  groupId: Bytes,
  member: Address
): MemberRemoved {
  let memberRemovedEvent = changetype<MemberRemoved>(newMockEvent())

  memberRemovedEvent.parameters = new Array()

  memberRemovedEvent.parameters.push(
    new ethereum.EventParam("groupId", ethereum.Value.fromFixedBytes(groupId))
  )
  memberRemovedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )

  return memberRemovedEvent
}

export function createSettleCompletedEvent(
  groupId: Bytes,
  debtor: Address,
  creditor: Address,
  amount: BigInt
): SettleCompleted {
  let settleCompletedEvent = changetype<SettleCompleted>(newMockEvent())

  settleCompletedEvent.parameters = new Array()

  settleCompletedEvent.parameters.push(
    new ethereum.EventParam("groupId", ethereum.Value.fromFixedBytes(groupId))
  )
  settleCompletedEvent.parameters.push(
    new ethereum.EventParam("debtor", ethereum.Value.fromAddress(debtor))
  )
  settleCompletedEvent.parameters.push(
    new ethereum.EventParam("creditor", ethereum.Value.fromAddress(creditor))
  )
  settleCompletedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return settleCompletedEvent
}

export function createThresholdChangedEvent(
  groupId: Bytes,
  newThreshold: BigInt
): ThresholdChanged {
  let thresholdChangedEvent = changetype<ThresholdChanged>(newMockEvent())

  thresholdChangedEvent.parameters = new Array()

  thresholdChangedEvent.parameters.push(
    new ethereum.EventParam("groupId", ethereum.Value.fromFixedBytes(groupId))
  )
  thresholdChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newThreshold",
      ethereum.Value.fromUnsignedBigInt(newThreshold)
    )
  )

  return thresholdChangedEvent
}

export function createWithdrawalMadeEvent(
  groupId: Bytes,
  member: Address,
  amount: BigInt
): WithdrawalMade {
  let withdrawalMadeEvent = changetype<WithdrawalMade>(newMockEvent())

  withdrawalMadeEvent.parameters = new Array()

  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam("groupId", ethereum.Value.fromFixedBytes(groupId))
  )
  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  withdrawalMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawalMadeEvent
}
