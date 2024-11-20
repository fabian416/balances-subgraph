// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class DepositMade extends ethereum.Event {
  get params(): DepositMade__Params {
    return new DepositMade__Params(this);
  }
}

export class DepositMade__Params {
  _event: DepositMade;

  constructor(event: DepositMade) {
    this._event = event;
  }

  get groupId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get member(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class GroupCreated extends ethereum.Event {
  get params(): GroupCreated__Params {
    return new GroupCreated__Params(this);
  }
}

export class GroupCreated__Params {
  _event: GroupCreated;

  constructor(event: GroupCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get members(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class SettleCompleted extends ethereum.Event {
  get params(): SettleCompleted__Params {
    return new SettleCompleted__Params(this);
  }
}

export class SettleCompleted__Params {
  _event: SettleCompleted;

  constructor(event: SettleCompleted) {
    this._event = event;
  }

  get groupId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get debtor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get creditor(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ThresholdChanged extends ethereum.Event {
  get params(): ThresholdChanged__Params {
    return new ThresholdChanged__Params(this);
  }
}

export class ThresholdChanged__Params {
  _event: ThresholdChanged;

  constructor(event: ThresholdChanged) {
    this._event = event;
  }

  get groupId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get newThreshold(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class WithdrawalMade extends ethereum.Event {
  get params(): WithdrawalMade__Params {
    return new WithdrawalMade__Params(this);
  }
}

export class WithdrawalMade__Params {
  _event: WithdrawalMade;

  constructor(event: WithdrawalMade) {
    this._event = event;
  }

  get groupId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get member(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SquaryBaseTest__calculateActionHashInputDebtsStruct extends ethereum.Tuple {
  get debtor(): Address {
    return this[0].toAddress();
  }

  get creditor(): Address {
    return this[1].toAddress();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }
}

export class SquaryBaseTest__getGroupDetailsResult {
  value0: string;
  value1: Array<Address>;
  value2: BigInt;

  constructor(value0: string, value1: Array<Address>, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromAddressArray(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getMembers(): Array<Address> {
    return this.value1;
  }

  getNonce(): BigInt {
    return this.value2;
  }
}

export class SquaryBaseTest__groupsResult {
  value0: Bytes;
  value1: BigInt;
  value2: BigInt;
  value3: Address;
  value4: string;

  constructor(
    value0: Bytes,
    value1: BigInt,
    value2: BigInt,
    value3: Address,
    value4: string,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }

  getId(): Bytes {
    return this.value0;
  }

  getSignatureThreshold(): BigInt {
    return this.value1;
  }

  getNonce(): BigInt {
    return this.value2;
  }

  getTokenAddress(): Address {
    return this.value3;
  }

  getName(): string {
    return this.value4;
  }
}

export class SquaryBaseTest extends ethereum.SmartContract {
  static bind(address: Address): SquaryBaseTest {
    return new SquaryBaseTest("SquaryBaseTest", address);
  }

  calculateActionHash(
    groupId: Bytes,
    debts: Array<SquaryBaseTest__calculateActionHashInputDebtsStruct>,
    nonce: BigInt,
  ): Bytes {
    let result = super.call(
      "calculateActionHash",
      "calculateActionHash(bytes32,(address,address,uint256)[],uint256):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromTupleArray(debts),
        ethereum.Value.fromUnsignedBigInt(nonce),
      ],
    );

    return result[0].toBytes();
  }

  try_calculateActionHash(
    groupId: Bytes,
    debts: Array<SquaryBaseTest__calculateActionHashInputDebtsStruct>,
    nonce: BigInt,
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "calculateActionHash",
      "calculateActionHash(bytes32,(address,address,uint256)[],uint256):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromTupleArray(debts),
        ethereum.Value.fromUnsignedBigInt(nonce),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  calculateSuggestedPayment(groupId: Bytes, member: Address): BigInt {
    let result = super.call(
      "calculateSuggestedPayment",
      "calculateSuggestedPayment(bytes32,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromAddress(member),
      ],
    );

    return result[0].toBigInt();
  }

  try_calculateSuggestedPayment(
    groupId: Bytes,
    member: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateSuggestedPayment",
      "calculateSuggestedPayment(bytes32,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromAddress(member),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  daiToken(): Address {
    let result = super.call("daiToken", "daiToken():(address)", []);

    return result[0].toAddress();
  }

  try_daiToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("daiToken", "daiToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getGroupDetails(groupId: Bytes): SquaryBaseTest__getGroupDetailsResult {
    let result = super.call(
      "getGroupDetails",
      "getGroupDetails(bytes32):(string,address[],uint256)",
      [ethereum.Value.fromFixedBytes(groupId)],
    );

    return new SquaryBaseTest__getGroupDetailsResult(
      result[0].toString(),
      result[1].toAddressArray(),
      result[2].toBigInt(),
    );
  }

  try_getGroupDetails(
    groupId: Bytes,
  ): ethereum.CallResult<SquaryBaseTest__getGroupDetailsResult> {
    let result = super.tryCall(
      "getGroupDetails",
      "getGroupDetails(bytes32):(string,address[],uint256)",
      [ethereum.Value.fromFixedBytes(groupId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SquaryBaseTest__getGroupDetailsResult(
        value[0].toString(),
        value[1].toAddressArray(),
        value[2].toBigInt(),
      ),
    );
  }

  getMemberBalance(groupId: Bytes, member: Address): BigInt {
    let result = super.call(
      "getMemberBalance",
      "getMemberBalance(bytes32,address):(int256)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromAddress(member),
      ],
    );

    return result[0].toBigInt();
  }

  try_getMemberBalance(
    groupId: Bytes,
    member: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMemberBalance",
      "getMemberBalance(bytes32,address):(int256)",
      [
        ethereum.Value.fromFixedBytes(groupId),
        ethereum.Value.fromAddress(member),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSigner(actionHash: Bytes, signature: Bytes): Address {
    let result = super.call("getSigner", "getSigner(bytes32,bytes):(address)", [
      ethereum.Value.fromFixedBytes(actionHash),
      ethereum.Value.fromBytes(signature),
    ]);

    return result[0].toAddress();
  }

  try_getSigner(
    actionHash: Bytes,
    signature: Bytes,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSigner",
      "getSigner(bytes32,bytes):(address)",
      [
        ethereum.Value.fromFixedBytes(actionHash),
        ethereum.Value.fromBytes(signature),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUserGroups(user: Address): Array<Bytes> {
    let result = super.call(
      "getUserGroups",
      "getUserGroups(address):(bytes32[])",
      [ethereum.Value.fromAddress(user)],
    );

    return result[0].toBytesArray();
  }

  try_getUserGroups(user: Address): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getUserGroups",
      "getUserGroups(address):(bytes32[])",
      [ethereum.Value.fromAddress(user)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  groupCounter(): BigInt {
    let result = super.call("groupCounter", "groupCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_groupCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("groupCounter", "groupCounter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  groupIds(param0: BigInt): Bytes {
    let result = super.call("groupIds", "groupIds(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toBytes();
  }

  try_groupIds(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("groupIds", "groupIds(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  groups(param0: Bytes): SquaryBaseTest__groupsResult {
    let result = super.call(
      "groups",
      "groups(bytes32):(bytes32,uint256,uint256,address,string)",
      [ethereum.Value.fromFixedBytes(param0)],
    );

    return new SquaryBaseTest__groupsResult(
      result[0].toBytes(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toString(),
    );
  }

  try_groups(param0: Bytes): ethereum.CallResult<SquaryBaseTest__groupsResult> {
    let result = super.tryCall(
      "groups",
      "groups(bytes32):(bytes32,uint256,uint256,address,string)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SquaryBaseTest__groupsResult(
        value[0].toBytes(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toString(),
      ),
    );
  }

  isMember(groupId: Bytes, member: Address): boolean {
    let result = super.call("isMember", "isMember(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(groupId),
      ethereum.Value.fromAddress(member),
    ]);

    return result[0].toBoolean();
  }

  try_isMember(groupId: Bytes, member: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMember", "isMember(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(groupId),
      ethereum.Value.fromAddress(member),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  usdcToken(): Address {
    let result = super.call("usdcToken", "usdcToken():(address)", []);

    return result[0].toAddress();
  }

  try_usdcToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdcToken", "usdcToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usdtToken(): Address {
    let result = super.call("usdtToken", "usdtToken():(address)", []);

    return result[0].toAddress();
  }

  try_usdtToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdtToken", "usdtToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _usdcTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _usdtTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _daitokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeGroupThresholdCall extends ethereum.Call {
  get inputs(): ChangeGroupThresholdCall__Inputs {
    return new ChangeGroupThresholdCall__Inputs(this);
  }

  get outputs(): ChangeGroupThresholdCall__Outputs {
    return new ChangeGroupThresholdCall__Outputs(this);
  }
}

export class ChangeGroupThresholdCall__Inputs {
  _call: ChangeGroupThresholdCall;

  constructor(call: ChangeGroupThresholdCall) {
    this._call = call;
  }

  get groupId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get newThreshold(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signatures(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class ChangeGroupThresholdCall__Outputs {
  _call: ChangeGroupThresholdCall;

  constructor(call: ChangeGroupThresholdCall) {
    this._call = call;
  }
}

export class CreateGroupCall extends ethereum.Call {
  get inputs(): CreateGroupCall__Inputs {
    return new CreateGroupCall__Inputs(this);
  }

  get outputs(): CreateGroupCall__Outputs {
    return new CreateGroupCall__Outputs(this);
  }
}

export class CreateGroupCall__Inputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _members(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _signatureThreshold(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateGroupCall__Outputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }
}

export class DepositFundsCall extends ethereum.Call {
  get inputs(): DepositFundsCall__Inputs {
    return new DepositFundsCall__Inputs(this);
  }

  get outputs(): DepositFundsCall__Outputs {
    return new DepositFundsCall__Outputs(this);
  }
}

export class DepositFundsCall__Inputs {
  _call: DepositFundsCall;

  constructor(call: DepositFundsCall) {
    this._call = call;
  }

  get groupId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositFundsCall__Outputs {
  _call: DepositFundsCall;

  constructor(call: DepositFundsCall) {
    this._call = call;
  }
}

export class SettleDebtsWithSignaturesCall extends ethereum.Call {
  get inputs(): SettleDebtsWithSignaturesCall__Inputs {
    return new SettleDebtsWithSignaturesCall__Inputs(this);
  }

  get outputs(): SettleDebtsWithSignaturesCall__Outputs {
    return new SettleDebtsWithSignaturesCall__Outputs(this);
  }
}

export class SettleDebtsWithSignaturesCall__Inputs {
  _call: SettleDebtsWithSignaturesCall;

  constructor(call: SettleDebtsWithSignaturesCall) {
    this._call = call;
  }

  get groupId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get debts(): Array<SettleDebtsWithSignaturesCallDebtsStruct> {
    return this._call.inputValues[1].value.toTupleArray<SettleDebtsWithSignaturesCallDebtsStruct>();
  }

  get signatures(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class SettleDebtsWithSignaturesCall__Outputs {
  _call: SettleDebtsWithSignaturesCall;

  constructor(call: SettleDebtsWithSignaturesCall) {
    this._call = call;
  }
}

export class SettleDebtsWithSignaturesCallDebtsStruct extends ethereum.Tuple {
  get debtor(): Address {
    return this[0].toAddress();
  }

  get creditor(): Address {
    return this[1].toAddress();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }
}

export class WithdrawFundsCall extends ethereum.Call {
  get inputs(): WithdrawFundsCall__Inputs {
    return new WithdrawFundsCall__Inputs(this);
  }

  get outputs(): WithdrawFundsCall__Outputs {
    return new WithdrawFundsCall__Outputs(this);
  }
}

export class WithdrawFundsCall__Inputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }

  get groupId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawFundsCall__Outputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }
}
