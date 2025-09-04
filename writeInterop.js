const fs = require('fs')
const { AllowanceTransfer, SignatureTransfer } = require('./dist/cjs/src')

const PERMIT2_ADDRESS = '0x220222d69e6D5C257F466B5f367A173e8cD9885f'
const TOKEN_ADDRESS = '0x31B1843d2a0760044242F304c9FadC06A5EbD1e9'
const SPENDER_ADDRESS = '0x0000000000000000000000000000000000000001'
const EXPIRATION = '10000000000000'
const AMOUNT = '1000000000000000000'
const chainId = 31337

const interop = {
  _PERMIT_HASH: AllowanceTransfer.hash(
    {
      details: {
        token: TOKEN_ADDRESS,
        amount: AMOUNT,
        expiration: EXPIRATION,
        nonce: 0,
      },
      spender: SPENDER_ADDRESS,
      sigDeadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_BATCH_HASH: AllowanceTransfer.hash(
    {
      details: [
        {
          token: TOKEN_ADDRESS,
          amount: AMOUNT,
          expiration: EXPIRATION,
          nonce: 0,
        },
      ],
      spender: SPENDER_ADDRESS,
      sigDeadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_TRANSFER: SignatureTransfer.hash(
    {
      permitted: {
        token: TOKEN_ADDRESS,
        amount: AMOUNT,
      },
      spender: SPENDER_ADDRESS,
      nonce: '0',
      deadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_TRANSFER_BATCH: SignatureTransfer.hash(
    {
      permitted: [
        {
          token: TOKEN_ADDRESS,
          amount: AMOUNT,
        },
      ],
      spender: SPENDER_ADDRESS,
      nonce: '0',
      deadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId
  ),

  _PERMIT_TRANSFER_WITNESS: SignatureTransfer.hash(
    {
      permitted: {
        token: TOKEN_ADDRESS,
        amount: AMOUNT,
      },
      spender: SPENDER_ADDRESS,
      nonce: '0',
      deadline: EXPIRATION,
    },
    PERMIT2_ADDRESS,
    chainId,
    {
      witnessTypeName: 'MockWitness',
      witnessType: { MockWitness: [{ name: 'mock', type: 'uint256' }] },
      witness: { mock: '0' },
    }
  ),
}

fs.writeFileSync('./test/interop.json', JSON.stringify(interop))
