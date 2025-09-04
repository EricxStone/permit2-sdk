import { BigNumberish } from "ethers"

// @deprecated please use permit2Address(chainId: number)
export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export function permit2Address(chainId?: number): string {
  switch (chainId) {
    case 324:
      return '0x0000000000225e31D15943971F47aD3022F714Fa'
    default:
      return PERMIT2_ADDRESS
  }
}

export const MaxUint48 = BigInt('0xffffffffffff')
export const MaxUint160 = BigInt('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumberish = 0n
