/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface VelodromeV2RewardsInterface extends utils.Interface {
  functions: {
    'checkpointToken()': FunctionFragment;
    'claim(uint256)': FunctionFragment;
    'claimMany(uint256[])': FunctionFragment;
    'claimable(uint256)': FunctionFragment;
    'lastTokenTime()': FunctionFragment;
    'minter()': FunctionFragment;
    'setMinter(address)': FunctionFragment;
    'startTime()': FunctionFragment;
    'timeCursorOf(uint256)': FunctionFragment;
    'token()': FunctionFragment;
    'tokenLastBalance()': FunctionFragment;
    'tokensPerWeek(uint256)': FunctionFragment;
    've()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'checkpointToken'
      | 'claim'
      | 'claimMany'
      | 'claimable'
      | 'lastTokenTime'
      | 'minter'
      | 'setMinter'
      | 'startTime'
      | 'timeCursorOf'
      | 'token'
      | 'tokenLastBalance'
      | 'tokensPerWeek'
      | 've',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'checkpointToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claim', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'claimMany', values: [PromiseOrValue<BigNumberish>[]]): string;
  encodeFunctionData(functionFragment: 'claimable', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'lastTokenTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'minter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setMinter', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'startTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'timeCursorOf', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tokenLastBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tokensPerWeek', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 've', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'checkpointToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimMany', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTokenTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'startTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'timeCursorOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenLastBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokensPerWeek', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 've', data: BytesLike): Result;

  events: {
    'CheckpointToken(uint256,uint256)': EventFragment;
    'Claimed(uint256,uint256,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CheckpointToken'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Claimed'): EventFragment;
}

export interface CheckpointTokenEventObject {
  time: BigNumber;
  tokens: BigNumber;
}
export type CheckpointTokenEvent = TypedEvent<[BigNumber, BigNumber], CheckpointTokenEventObject>;

export type CheckpointTokenEventFilter = TypedEventFilter<CheckpointTokenEvent>;

export interface ClaimedEventObject {
  tokenId: BigNumber;
  epochStart: BigNumber;
  epochEnd: BigNumber;
  amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, BigNumber], ClaimedEventObject>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface VelodromeV2Rewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VelodromeV2RewardsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    checkpointToken(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    claim(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimMany(
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimable(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { claimable_: BigNumber }>;

    lastTokenTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    timeCursorOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenLastBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokensPerWeek(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;

    ve(overrides?: CallOverrides): Promise<[string]>;
  };

  checkpointToken(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  claim(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimMany(
    _tokenIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  lastTokenTime(overrides?: CallOverrides): Promise<BigNumber>;

  minter(overrides?: CallOverrides): Promise<string>;

  setMinter(
    _minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  timeCursorOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenLastBalance(overrides?: CallOverrides): Promise<BigNumber>;

  tokensPerWeek(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

  ve(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    checkpointToken(overrides?: CallOverrides): Promise<void>;

    claim(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    claimMany(_tokenIds: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;

    claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    lastTokenTime(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<string>;

    setMinter(_minter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    timeCursorOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenLastBalance(overrides?: CallOverrides): Promise<BigNumber>;

    tokensPerWeek(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    ve(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'CheckpointToken(uint256,uint256)'(time?: null, tokens?: null): CheckpointTokenEventFilter;
    CheckpointToken(time?: null, tokens?: null): CheckpointTokenEventFilter;

    'Claimed(uint256,uint256,uint256,uint256)'(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      epochStart?: PromiseOrValue<BigNumberish> | null,
      epochEnd?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): ClaimedEventFilter;
    Claimed(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      epochStart?: PromiseOrValue<BigNumberish> | null,
      epochEnd?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
    ): ClaimedEventFilter;
  };

  estimateGas: {
    checkpointToken(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    claim(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimMany(
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    lastTokenTime(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    timeCursorOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenLastBalance(overrides?: CallOverrides): Promise<BigNumber>;

    tokensPerWeek(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    ve(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    checkpointToken(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    claim(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimMany(
      _tokenIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimable(_tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTokenTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinter(
      _minter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeCursorOf(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenLastBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokensPerWeek(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
