import type { Expect, Equal } from '@type-challenges/utils'

type HelloWorld = string

// test
type Test = Expect<Equal<HelloWorld, string>>
