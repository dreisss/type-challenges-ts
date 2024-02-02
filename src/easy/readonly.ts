import type { Equal, Expect } from '@type-challenges/utils'

type MyReadonly<T> = { readonly [K in keyof T]: T[K] }

// test
type Test<T> = Expect<Equal<MyReadonly<T>, Readonly<T>>>
