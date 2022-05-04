/*
 * @Author: qianzhi
 * @Date: 2022-05-04 18:57:12
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-05 07:51:38
 * @FilePath: /head-first-vite/typescript-challenge/patten-match-extract.ts
 */

export {};

/**
 * 类型说明：通过 extends 对传入的类型参数 P 做模式匹配，其中值的类型是需要提取的，通过 infer 声明
 * 一个局部变量 Value 进行保存。如果匹配就返回匹配到的 Value，否则返回 never 代表没匹配到
 */

/* 类型定义 */
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;

/* 类型测试 */
type GetValueResult = GetValueType<Promise<"lane">>;

/* First 类型定义 */
type GetArrayFirst<Arr extends unknown[]> = Arr extends [
  infer First,
  ...unknown[]
]
  ? First
  : never;

/* 类型测试 */
type GetArrayFirstResult = GetArrayFirst<[1, 2, 3]>;

/* Last 类型定义 */
type GetArrayLast<Arr extends unknown[]> = Arr extends [
  ...unknown[],
  infer Last
]
  ? Last
  : unknown;

/* 类型测试 */
type GetArrayLastResult = GetArrayLast<[1, 2, 3]>;

/**
 * PopArr 类型定义
 * 如果是空数组，就直接返回，否则匹配剩余的元素，
 * 放到 infer 声明的局部变量 Rest 里，返回 Rest
 */
type PopArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
  ? Rest
  : never;

type PopResult1 = PopArr<[1, 2, 3]>;
type PopResult2 = PopArr<[]>;

/**
 * ShiftArr 类型定义
 */
type ShiftArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [unknown, ...infer Rest]
  ? Rest
  : never;

type ShiftResult1 = ShiftArr<[1, 2, 3]>;
type ShiftResult2 = ShiftArr<[]>;

/**
 * StartsWith 类型定义
 * 用 Str 去匹配一个模式类型，模式类型的前缀是 Prefix，后面是任意的 string，
 * 如果匹配返回 true，否则返回 false
 */
type StartsWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

type StartsWithResult1 = StartsWith<"learn lane", "a">;
type StartsWithResult2 = StartsWith<"learn lane", "learn">;

/**
 * Replace 类型定义
 * Str 为要替换的字符串
 * From 为待替换的字符串
 * To 为即将替换成的字符串
 *
 * 用 Str 去匹配模式串，模式串由 From 和之前之后的字符串构成，
 * 把之前之后的字符串放到通过 infer 声明的局部变量 Prefix、Suffix 里
 *
 * 用 Prefix、Suffix 加上替换到的字符串 To 构造成新的字符串类型返回
 */
type Replace<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str;

type ReplaceResult1 = Replace<"Guangguang's best friend is ?", "?", "Dongdong">;
type ReplaceResult2 = Replace<"Guangguang's best friend is", "?", "Dongdong">;

/**
 * TrimRight 类型定义
 * 因为不知道包含多少个空白字符，所以通过递归的方式一个一个去匹配
 * 如果 Str 匹配字符串 + 空白字符 (空格、换行、制表符)，那就把字符串放到 infer 声明的局部变量 Rest 里
 */
type TrimRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\n"
  | "\t"}`
  ? TrimRight<Rest>
  : Str;

type TrimRightResult = TrimRight<"lane   ">;

/**
 * TrimLeft 类型定义
 */
type TrimLeft<Str extends string> = Str extends `${
  | " "
  | "\n"
  | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : Str;

type TrimLeftResult = TrimLeft<"     lane">;

/**
 * Trim 类型定义
 */
type Trim<Str extends string> = TrimLeft<TrimRight<Str>>;
type TrimResult = Trim<"     lane      ">;

/**
 * GetFunctionParams 类型定义
 * Func 和模式类型做匹配，参数类型放到用 infer 声明的局部变量 Args 里，返回值可以是任何类型，用 unknown
 */
type GetFunctionParams<Func extends Function> = Func extends (
  ...args: infer Args
) => unknown
  ? Args
  : never;

type GetFunctionParamsResult = GetFunctionParams<(name: string) => string>;

/**
 * GetFunctionReturnType 类型定义
 */
type GetFunctionReturnType<Func extends Function> = Func extends (
  ...args: any[]
) => infer ReturnType
  ? ReturnType
  : never;

type GetFunctionReturnTypeResult = GetFunctionReturnType<
  (name: string) => string
>;

/**
 * GetThisParameterType 类型定义
 * 用 T 匹配一个模式类型，提取 this 的类型到 infer 声明的局部变量 ThisType 中，
 * 其余的参数是任意类型，也就是 any，返回值也是任意类型
 */
class Dong {
  hello(this: Dong) {}
}

const dong = new Dong();

/**
 * GetThisParameterType 类型定义
 */
type GetThisParameterType<T> = T extends (
  this: infer ThisType,
  ...args: any[]
) => any
  ? ThisType
  : unknown;

type GetThisParameterTypeResult = GetThisParameterType<typeof dong.hello>;

/**
 * GetThisParameterType 类型定义
 * 类型参数 ConstructorType 是待处理的类型，通过 extends 约束为构造器类型
 * 用 ConstructorType 匹配一个模式类型，提取返回的实例类型到 infer 声明的局部变量 InstanceType 里，返回 InstanceType
 */
interface Person {
  name: string;
}

interface PersonConstructor {
  new (name: string): Person;
}

type GetInstanceType<ConstructorType extends new (...args: any[]) => any> =
  ConstructorType extends new (...args: any[]) => infer InstanceType
    ? InstanceType
    : any;

type GetInstanceTypeResult = GetInstanceType<PersonConstructor>;

/**
 * GetConstructorParameters 类型定义
 */
type GetConstructorParameters<
  ConstructorType extends new (...args: any[]) => any
> = ConstructorType extends new (...args: infer ParametersType) => any
  ? ParametersType
  : never;

type GetConstructorParametersResult =
  GetConstructorParameters<PersonConstructor>;
