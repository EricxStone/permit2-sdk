import Permit2Abi from '../../abis/Permit2.json'
import { BigNumberish, Contract, Provider } from 'ethers'

export interface AllowanceData {
  amount: BigNumberish
  nonce: number
  expiration: number
}

export class AllowanceProvider {
  private permit2: Contract

  constructor(private provider: Provider, private permit2Address: string) {
    this.permit2 = new Contract(this.permit2Address, Permit2Abi, this.provider)
  }

  async getAllowanceData(token: string, owner: string, spender: string): Promise<AllowanceData> {
    return await this.permit2.allowance(owner, token, spender)
  }

  async getAllowance(token: string, owner: string, spender: string): Promise<BigNumberish> {
    return (await this.getAllowanceData(token, owner, spender)).amount
  }

  async getNonce(token: string, owner: string, spender: string): Promise<number> {
    return (await this.getAllowanceData(token, owner, spender)).nonce
  }

  async getExpiration(token: string, owner: string, spender: string): Promise<number> {
    return (await this.getAllowanceData(token, owner, spender)).expiration
  }
}
