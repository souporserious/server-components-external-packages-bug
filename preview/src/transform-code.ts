import type { Options } from '@swc/core'
import { transform } from '@swc/core'

export const options = {
  jsc: {
    target: 'es2020',
    parser: {
      syntax: 'typescript',
      tsx: true,
    },
    transform: {
      react: {
        runtime: 'automatic',
      },
    },
  },
  module: {
    type: 'commonjs',
  },
} as Options

/** Transform code using SWC. */
export async function transformCode(codeString) {
  const result = await transform(codeString, options)
  return result.code
}
