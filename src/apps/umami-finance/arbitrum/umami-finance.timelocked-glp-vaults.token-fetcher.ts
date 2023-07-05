import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import {
  GetAddressesParams,
  DefaultAppTokenDefinition,
  GetUnderlyingTokensParams,
  UnderlyingTokenDefinition,
  GetPricePerShareParams,
  DefaultAppTokenDataProps,
  GetDisplayPropsParams,
} from '~position/template/app-token.template.types';

import { UmamiFinanceTimelockedGlpVaultAddress } from '../common/umami-finance.constants';
import { UmamiFinanceContractFactory } from '../contracts';
import { UmamiFinanceTimelockedGlpVault } from '../contracts/ethers/UmamiFinanceTimelockedGlpVault';

@PositionTemplate()
export class ArbitrumUmamiFinanceTimelockedGlpVaultsTokenFetcher extends AppTokenTemplatePositionFetcher<UmamiFinanceTimelockedGlpVault> {
  groupLabel: string;

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(UmamiFinanceContractFactory) private readonly umamiFinanceContractFactory: UmamiFinanceContractFactory,
  ) {
    super(appToolkit);
    this.groupLabel = 'Timelocked GLP Vaults';
  }

  getContract(_address: string): UmamiFinanceTimelockedGlpVault {
    return this.umamiFinanceContractFactory.umamiFinanceTimelockedGlpVault({
      address: _address,
      network: this.network,
    });
  }

  async getAddresses(_params: GetAddressesParams<DefaultAppTokenDefinition>): Promise<string[]> {
    return [
      UmamiFinanceTimelockedGlpVaultAddress.TL_GLP_USDC,
      UmamiFinanceTimelockedGlpVaultAddress.TL_GLP_WETH,
      UmamiFinanceTimelockedGlpVaultAddress.TL_GLP_WBTC,
      UmamiFinanceTimelockedGlpVaultAddress.TL_GLP_LINK,
      UmamiFinanceTimelockedGlpVaultAddress.TL_GLP_UNI,
    ];
  }

  async getUnderlyingTokenDefinitions({
    contract,
  }: GetUnderlyingTokensParams<UmamiFinanceTimelockedGlpVault, DefaultAppTokenDefinition>): Promise<
    UnderlyingTokenDefinition[]
  > {
    const underlyingToken = await contract.asset();
    return [{ address: underlyingToken, network: this.network }];
  }

  async getPricePerShare({
    contract,
    appToken,
  }: GetPricePerShareParams<
    UmamiFinanceTimelockedGlpVault,
    DefaultAppTokenDataProps,
    DefaultAppTokenDefinition
  >): Promise<number[]> {
    const pricePerShareRaw = await contract.pps();
    const pricePerShare = Number(pricePerShareRaw) / 10 ** appToken.decimals;

    return [pricePerShare];
  }

  async getLabel({ appToken }: GetDisplayPropsParams<UmamiFinanceTimelockedGlpVault>): Promise<string> {
    return `Timelocked GLP ${appToken.tokens[0].symbol}`;
  }
}