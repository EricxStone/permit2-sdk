import { MaxUint48, MaxUint160, MaxUint256, InstantExpiration } from './constants'

describe('Constants', () => {
  it('MaxUint256', () => {
    expect(MaxUint256).toEqual(BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'))
  })

  it('MaxUint160', () => {
    expect(MaxUint160).toEqual(BigInt('0xffffffffffffffffffffffffffffffffffffffff'))
  })

  it('MaxUint48', () => {
    expect(MaxUint48).toEqual(BigInt('0xffffffffffff'))
  })

  it('InstantExpiration', () => {
    expect(InstantExpiration).toEqual(0n)
  })
})
