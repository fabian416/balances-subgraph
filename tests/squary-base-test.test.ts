import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { DepositMade } from "../generated/schema"
import { DepositMade as DepositMadeEvent } from "../generated/SquaryBaseTest/SquaryBaseTest"
import { handleDepositMade } from "../src/squary-base-test"
import { createDepositMadeEvent } from "./squary-base-test-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let groupId = Bytes.fromI32(1234567890)
    let member = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let newDepositMadeEvent = createDepositMadeEvent(groupId, member, amount)
    handleDepositMade(newDepositMadeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DepositMade created and stored", () => {
    assert.entityCount("DepositMade", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DepositMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "groupId",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "member",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DepositMade",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
