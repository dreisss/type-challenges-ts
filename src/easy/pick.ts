import type { Equal, Expect } from '@type-challenges/utils'

type MyPick<T, K extends keyof T> = { [Ki in K]: T[Ki] }

// test
type Test<T, K extends keyof T> = Expect<Equal<MyPick<T, K>, Pick<T, K>>>
