import type { Expect, Equal } from "@type-challenges/utils";

type HelloWorld = string;

// test
type test = Expect<Equal<HelloWorld, string>>;
