
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PurchaseOrder: 'PurchaseOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "purchaseOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    purchaseOrder?: PurchaseOrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    PurchaseOrder: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrder?: boolean | UserCountOutputTypeCountPurchaseOrderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    phoneNumber: number | null
  }

  export type UserSumAggregateOutputType = {
    phoneNumber: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phoneNumber: bigint | null
    empId: string | null
    role: string | null
    pfpUrl: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phoneNumber: bigint | null
    empId: string | null
    role: string | null
    pfpUrl: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phoneNumber: number
    empId: number
    role: number
    pfpUrl: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    phoneNumber?: true
  }

  export type UserSumAggregateInputType = {
    phoneNumber?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    empId?: true
    role?: true
    pfpUrl?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    empId?: true
    role?: true
    pfpUrl?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    empId?: true
    role?: true
    pfpUrl?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    phoneNumber: bigint
    empId: string
    role: string
    pfpUrl: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    empId?: boolean
    role?: boolean
    pfpUrl?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PurchaseOrder?: boolean | User$PurchaseOrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    empId?: boolean
    role?: boolean
    pfpUrl?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    empId?: boolean
    role?: boolean
    pfpUrl?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    empId?: boolean
    role?: boolean
    pfpUrl?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phoneNumber" | "empId" | "role" | "pfpUrl" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrder?: boolean | User$PurchaseOrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      PurchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      phoneNumber: bigint
      empId: string
      role: string
      pfpUrl: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PurchaseOrder<T extends User$PurchaseOrderArgs<ExtArgs> = {}>(args?: Subset<T, User$PurchaseOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'BigInt'>
    readonly empId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly pfpUrl: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.PurchaseOrder
   */
  export type User$PurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: string | null
    masterPO: boolean | null
    PO: string | null
    date: string | null
    vendor: string | null
    address1: string | null
    attention: string | null
    tel: string | null
    ext: string | null
    email: string | null
    holdToShipYes: boolean | null
    holdToShipNo: boolean | null
    pickUp: boolean | null
    shipTo: boolean | null
    driverContact: string | null
    driverTel: string | null
    siteContact: string | null
    siteTel: string | null
    address2: string | null
    deliveryNotes: string | null
    date1: string | null
    time1: string | null
    date2: string | null
    time2: string | null
    date3: string | null
    time3: string | null
    date4: string | null
    time4: string | null
    jobNumber: string | null
    jobName: string | null
    jobTask: string | null
    officeContact: string | null
    officeTel: string | null
    requestedBy: string | null
    orderedBy: string | null
    rightDate: string | null
    rightTime: string | null
    coCe: string | null
    rightNotes: string | null
    approxCost: string | null
    amex: boolean | null
    amexText: string | null
    cod: boolean | null
    onAccount: boolean | null
    other: boolean | null
    otherText: string | null
    taxExemptYes: boolean | null
    taxExemptNo: boolean | null
    vendorQuoteYes: boolean | null
    vendorQuoteNo: boolean | null
    ccPo: string | null
    author: string | null
    authorSignature: string | null
    pmName: string | null
    pmSignature: string | null
    approvedBy: string | null
    approvedDate: string | null
    rightBottomNotes: string | null
    description: string | null
    quantity: string | null
    um: string | null
    unitCost: string | null
    total: string | null
    jobEquipNotes: string | null
    costCode: string | null
    payItem: string | null
    subtotal: string | null
    delivery: string | null
    salesTax: string | null
    bottomOther: string | null
    grandTotal: string | null
    sign: string | null
    signDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: string | null
    masterPO: boolean | null
    PO: string | null
    date: string | null
    vendor: string | null
    address1: string | null
    attention: string | null
    tel: string | null
    ext: string | null
    email: string | null
    holdToShipYes: boolean | null
    holdToShipNo: boolean | null
    pickUp: boolean | null
    shipTo: boolean | null
    driverContact: string | null
    driverTel: string | null
    siteContact: string | null
    siteTel: string | null
    address2: string | null
    deliveryNotes: string | null
    date1: string | null
    time1: string | null
    date2: string | null
    time2: string | null
    date3: string | null
    time3: string | null
    date4: string | null
    time4: string | null
    jobNumber: string | null
    jobName: string | null
    jobTask: string | null
    officeContact: string | null
    officeTel: string | null
    requestedBy: string | null
    orderedBy: string | null
    rightDate: string | null
    rightTime: string | null
    coCe: string | null
    rightNotes: string | null
    approxCost: string | null
    amex: boolean | null
    amexText: string | null
    cod: boolean | null
    onAccount: boolean | null
    other: boolean | null
    otherText: string | null
    taxExemptYes: boolean | null
    taxExemptNo: boolean | null
    vendorQuoteYes: boolean | null
    vendorQuoteNo: boolean | null
    ccPo: string | null
    author: string | null
    authorSignature: string | null
    pmName: string | null
    pmSignature: string | null
    approvedBy: string | null
    approvedDate: string | null
    rightBottomNotes: string | null
    description: string | null
    quantity: string | null
    um: string | null
    unitCost: string | null
    total: string | null
    jobEquipNotes: string | null
    costCode: string | null
    payItem: string | null
    subtotal: string | null
    delivery: string | null
    salesTax: string | null
    bottomOther: string | null
    grandTotal: string | null
    sign: string | null
    signDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    masterPO: number
    PO: number
    date: number
    vendor: number
    address1: number
    attention: number
    tel: number
    ext: number
    email: number
    holdToShipYes: number
    holdToShipNo: number
    pickUp: number
    shipTo: number
    driverContact: number
    driverTel: number
    siteContact: number
    siteTel: number
    address2: number
    deliveryNotes: number
    date1: number
    time1: number
    date2: number
    time2: number
    date3: number
    time3: number
    date4: number
    time4: number
    jobNumber: number
    jobName: number
    jobTask: number
    officeContact: number
    officeTel: number
    requestedBy: number
    orderedBy: number
    rightDate: number
    rightTime: number
    coCe: number
    rightNotes: number
    approxCost: number
    amex: number
    amexText: number
    cod: number
    onAccount: number
    other: number
    otherText: number
    taxExemptYes: number
    taxExemptNo: number
    vendorQuoteYes: number
    vendorQuoteNo: number
    ccPo: number
    author: number
    authorSignature: number
    pmName: number
    pmSignature: number
    approvedBy: number
    approvedDate: number
    rightBottomNotes: number
    description: number
    quantity: number
    um: number
    unitCost: number
    total: number
    jobEquipNotes: number
    costCode: number
    payItem: number
    subtotal: number
    delivery: number
    salesTax: number
    bottomOther: number
    grandTotal: number
    sign: number
    signDate: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    masterPO?: true
    PO?: true
    date?: true
    vendor?: true
    address1?: true
    attention?: true
    tel?: true
    ext?: true
    email?: true
    holdToShipYes?: true
    holdToShipNo?: true
    pickUp?: true
    shipTo?: true
    driverContact?: true
    driverTel?: true
    siteContact?: true
    siteTel?: true
    address2?: true
    deliveryNotes?: true
    date1?: true
    time1?: true
    date2?: true
    time2?: true
    date3?: true
    time3?: true
    date4?: true
    time4?: true
    jobNumber?: true
    jobName?: true
    jobTask?: true
    officeContact?: true
    officeTel?: true
    requestedBy?: true
    orderedBy?: true
    rightDate?: true
    rightTime?: true
    coCe?: true
    rightNotes?: true
    approxCost?: true
    amex?: true
    amexText?: true
    cod?: true
    onAccount?: true
    other?: true
    otherText?: true
    taxExemptYes?: true
    taxExemptNo?: true
    vendorQuoteYes?: true
    vendorQuoteNo?: true
    ccPo?: true
    author?: true
    authorSignature?: true
    pmName?: true
    pmSignature?: true
    approvedBy?: true
    approvedDate?: true
    rightBottomNotes?: true
    description?: true
    quantity?: true
    um?: true
    unitCost?: true
    total?: true
    jobEquipNotes?: true
    costCode?: true
    payItem?: true
    subtotal?: true
    delivery?: true
    salesTax?: true
    bottomOther?: true
    grandTotal?: true
    sign?: true
    signDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    masterPO?: true
    PO?: true
    date?: true
    vendor?: true
    address1?: true
    attention?: true
    tel?: true
    ext?: true
    email?: true
    holdToShipYes?: true
    holdToShipNo?: true
    pickUp?: true
    shipTo?: true
    driverContact?: true
    driverTel?: true
    siteContact?: true
    siteTel?: true
    address2?: true
    deliveryNotes?: true
    date1?: true
    time1?: true
    date2?: true
    time2?: true
    date3?: true
    time3?: true
    date4?: true
    time4?: true
    jobNumber?: true
    jobName?: true
    jobTask?: true
    officeContact?: true
    officeTel?: true
    requestedBy?: true
    orderedBy?: true
    rightDate?: true
    rightTime?: true
    coCe?: true
    rightNotes?: true
    approxCost?: true
    amex?: true
    amexText?: true
    cod?: true
    onAccount?: true
    other?: true
    otherText?: true
    taxExemptYes?: true
    taxExemptNo?: true
    vendorQuoteYes?: true
    vendorQuoteNo?: true
    ccPo?: true
    author?: true
    authorSignature?: true
    pmName?: true
    pmSignature?: true
    approvedBy?: true
    approvedDate?: true
    rightBottomNotes?: true
    description?: true
    quantity?: true
    um?: true
    unitCost?: true
    total?: true
    jobEquipNotes?: true
    costCode?: true
    payItem?: true
    subtotal?: true
    delivery?: true
    salesTax?: true
    bottomOther?: true
    grandTotal?: true
    sign?: true
    signDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    masterPO?: true
    PO?: true
    date?: true
    vendor?: true
    address1?: true
    attention?: true
    tel?: true
    ext?: true
    email?: true
    holdToShipYes?: true
    holdToShipNo?: true
    pickUp?: true
    shipTo?: true
    driverContact?: true
    driverTel?: true
    siteContact?: true
    siteTel?: true
    address2?: true
    deliveryNotes?: true
    date1?: true
    time1?: true
    date2?: true
    time2?: true
    date3?: true
    time3?: true
    date4?: true
    time4?: true
    jobNumber?: true
    jobName?: true
    jobTask?: true
    officeContact?: true
    officeTel?: true
    requestedBy?: true
    orderedBy?: true
    rightDate?: true
    rightTime?: true
    coCe?: true
    rightNotes?: true
    approxCost?: true
    amex?: true
    amexText?: true
    cod?: true
    onAccount?: true
    other?: true
    otherText?: true
    taxExemptYes?: true
    taxExemptNo?: true
    vendorQuoteYes?: true
    vendorQuoteNo?: true
    ccPo?: true
    author?: true
    authorSignature?: true
    pmName?: true
    pmSignature?: true
    approvedBy?: true
    approvedDate?: true
    rightBottomNotes?: true
    description?: true
    quantity?: true
    um?: true
    unitCost?: true
    total?: true
    jobEquipNotes?: true
    costCode?: true
    payItem?: true
    subtotal?: true
    delivery?: true
    salesTax?: true
    bottomOther?: true
    grandTotal?: true
    sign?: true
    signDate?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: string
    masterPO: boolean
    PO: string
    date: string
    vendor: string
    address1: string
    attention: string
    tel: string
    ext: string
    email: string
    holdToShipYes: boolean
    holdToShipNo: boolean
    pickUp: boolean
    shipTo: boolean
    driverContact: string
    driverTel: string
    siteContact: string
    siteTel: string
    address2: string
    deliveryNotes: string
    date1: string
    time1: string
    date2: string
    time2: string
    date3: string
    time3: string
    date4: string
    time4: string
    jobNumber: string
    jobName: string
    jobTask: string
    officeContact: string
    officeTel: string
    requestedBy: string
    orderedBy: string
    rightDate: string
    rightTime: string
    coCe: string
    rightNotes: string
    approxCost: string
    amex: boolean
    amexText: string
    cod: boolean
    onAccount: boolean
    other: boolean
    otherText: string
    taxExemptYes: boolean
    taxExemptNo: boolean
    vendorQuoteYes: boolean
    vendorQuoteNo: boolean
    ccPo: string
    author: string
    authorSignature: string
    pmName: string
    pmSignature: string
    approvedBy: string
    approvedDate: string
    rightBottomNotes: string
    description: string
    quantity: string
    um: string
    unitCost: string
    total: string
    jobEquipNotes: string
    costCode: string
    payItem: string
    subtotal: string
    delivery: string
    salesTax: string
    bottomOther: string
    grandTotal: string
    sign: string
    signDate: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PurchaseOrderCountAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    masterPO?: boolean
    PO?: boolean
    date?: boolean
    vendor?: boolean
    address1?: boolean
    attention?: boolean
    tel?: boolean
    ext?: boolean
    email?: boolean
    holdToShipYes?: boolean
    holdToShipNo?: boolean
    pickUp?: boolean
    shipTo?: boolean
    driverContact?: boolean
    driverTel?: boolean
    siteContact?: boolean
    siteTel?: boolean
    address2?: boolean
    deliveryNotes?: boolean
    date1?: boolean
    time1?: boolean
    date2?: boolean
    time2?: boolean
    date3?: boolean
    time3?: boolean
    date4?: boolean
    time4?: boolean
    jobNumber?: boolean
    jobName?: boolean
    jobTask?: boolean
    officeContact?: boolean
    officeTel?: boolean
    requestedBy?: boolean
    orderedBy?: boolean
    rightDate?: boolean
    rightTime?: boolean
    coCe?: boolean
    rightNotes?: boolean
    approxCost?: boolean
    amex?: boolean
    amexText?: boolean
    cod?: boolean
    onAccount?: boolean
    other?: boolean
    otherText?: boolean
    taxExemptYes?: boolean
    taxExemptNo?: boolean
    vendorQuoteYes?: boolean
    vendorQuoteNo?: boolean
    ccPo?: boolean
    author?: boolean
    authorSignature?: boolean
    pmName?: boolean
    pmSignature?: boolean
    approvedBy?: boolean
    approvedDate?: boolean
    rightBottomNotes?: boolean
    description?: boolean
    quantity?: boolean
    um?: boolean
    unitCost?: boolean
    total?: boolean
    jobEquipNotes?: boolean
    costCode?: boolean
    payItem?: boolean
    subtotal?: boolean
    delivery?: boolean
    salesTax?: boolean
    bottomOther?: boolean
    grandTotal?: boolean
    sign?: boolean
    signDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    masterPO?: boolean
    PO?: boolean
    date?: boolean
    vendor?: boolean
    address1?: boolean
    attention?: boolean
    tel?: boolean
    ext?: boolean
    email?: boolean
    holdToShipYes?: boolean
    holdToShipNo?: boolean
    pickUp?: boolean
    shipTo?: boolean
    driverContact?: boolean
    driverTel?: boolean
    siteContact?: boolean
    siteTel?: boolean
    address2?: boolean
    deliveryNotes?: boolean
    date1?: boolean
    time1?: boolean
    date2?: boolean
    time2?: boolean
    date3?: boolean
    time3?: boolean
    date4?: boolean
    time4?: boolean
    jobNumber?: boolean
    jobName?: boolean
    jobTask?: boolean
    officeContact?: boolean
    officeTel?: boolean
    requestedBy?: boolean
    orderedBy?: boolean
    rightDate?: boolean
    rightTime?: boolean
    coCe?: boolean
    rightNotes?: boolean
    approxCost?: boolean
    amex?: boolean
    amexText?: boolean
    cod?: boolean
    onAccount?: boolean
    other?: boolean
    otherText?: boolean
    taxExemptYes?: boolean
    taxExemptNo?: boolean
    vendorQuoteYes?: boolean
    vendorQuoteNo?: boolean
    ccPo?: boolean
    author?: boolean
    authorSignature?: boolean
    pmName?: boolean
    pmSignature?: boolean
    approvedBy?: boolean
    approvedDate?: boolean
    rightBottomNotes?: boolean
    description?: boolean
    quantity?: boolean
    um?: boolean
    unitCost?: boolean
    total?: boolean
    jobEquipNotes?: boolean
    costCode?: boolean
    payItem?: boolean
    subtotal?: boolean
    delivery?: boolean
    salesTax?: boolean
    bottomOther?: boolean
    grandTotal?: boolean
    sign?: boolean
    signDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    masterPO?: boolean
    PO?: boolean
    date?: boolean
    vendor?: boolean
    address1?: boolean
    attention?: boolean
    tel?: boolean
    ext?: boolean
    email?: boolean
    holdToShipYes?: boolean
    holdToShipNo?: boolean
    pickUp?: boolean
    shipTo?: boolean
    driverContact?: boolean
    driverTel?: boolean
    siteContact?: boolean
    siteTel?: boolean
    address2?: boolean
    deliveryNotes?: boolean
    date1?: boolean
    time1?: boolean
    date2?: boolean
    time2?: boolean
    date3?: boolean
    time3?: boolean
    date4?: boolean
    time4?: boolean
    jobNumber?: boolean
    jobName?: boolean
    jobTask?: boolean
    officeContact?: boolean
    officeTel?: boolean
    requestedBy?: boolean
    orderedBy?: boolean
    rightDate?: boolean
    rightTime?: boolean
    coCe?: boolean
    rightNotes?: boolean
    approxCost?: boolean
    amex?: boolean
    amexText?: boolean
    cod?: boolean
    onAccount?: boolean
    other?: boolean
    otherText?: boolean
    taxExemptYes?: boolean
    taxExemptNo?: boolean
    vendorQuoteYes?: boolean
    vendorQuoteNo?: boolean
    ccPo?: boolean
    author?: boolean
    authorSignature?: boolean
    pmName?: boolean
    pmSignature?: boolean
    approvedBy?: boolean
    approvedDate?: boolean
    rightBottomNotes?: boolean
    description?: boolean
    quantity?: boolean
    um?: boolean
    unitCost?: boolean
    total?: boolean
    jobEquipNotes?: boolean
    costCode?: boolean
    payItem?: boolean
    subtotal?: boolean
    delivery?: boolean
    salesTax?: boolean
    bottomOther?: boolean
    grandTotal?: boolean
    sign?: boolean
    signDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    masterPO?: boolean
    PO?: boolean
    date?: boolean
    vendor?: boolean
    address1?: boolean
    attention?: boolean
    tel?: boolean
    ext?: boolean
    email?: boolean
    holdToShipYes?: boolean
    holdToShipNo?: boolean
    pickUp?: boolean
    shipTo?: boolean
    driverContact?: boolean
    driverTel?: boolean
    siteContact?: boolean
    siteTel?: boolean
    address2?: boolean
    deliveryNotes?: boolean
    date1?: boolean
    time1?: boolean
    date2?: boolean
    time2?: boolean
    date3?: boolean
    time3?: boolean
    date4?: boolean
    time4?: boolean
    jobNumber?: boolean
    jobName?: boolean
    jobTask?: boolean
    officeContact?: boolean
    officeTel?: boolean
    requestedBy?: boolean
    orderedBy?: boolean
    rightDate?: boolean
    rightTime?: boolean
    coCe?: boolean
    rightNotes?: boolean
    approxCost?: boolean
    amex?: boolean
    amexText?: boolean
    cod?: boolean
    onAccount?: boolean
    other?: boolean
    otherText?: boolean
    taxExemptYes?: boolean
    taxExemptNo?: boolean
    vendorQuoteYes?: boolean
    vendorQuoteNo?: boolean
    ccPo?: boolean
    author?: boolean
    authorSignature?: boolean
    pmName?: boolean
    pmSignature?: boolean
    approvedBy?: boolean
    approvedDate?: boolean
    rightBottomNotes?: boolean
    description?: boolean
    quantity?: boolean
    um?: boolean
    unitCost?: boolean
    total?: boolean
    jobEquipNotes?: boolean
    costCode?: boolean
    payItem?: boolean
    subtotal?: boolean
    delivery?: boolean
    salesTax?: boolean
    bottomOther?: boolean
    grandTotal?: boolean
    sign?: boolean
    signDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "masterPO" | "PO" | "date" | "vendor" | "address1" | "attention" | "tel" | "ext" | "email" | "holdToShipYes" | "holdToShipNo" | "pickUp" | "shipTo" | "driverContact" | "driverTel" | "siteContact" | "siteTel" | "address2" | "deliveryNotes" | "date1" | "time1" | "date2" | "time2" | "date3" | "time3" | "date4" | "time4" | "jobNumber" | "jobName" | "jobTask" | "officeContact" | "officeTel" | "requestedBy" | "orderedBy" | "rightDate" | "rightTime" | "coCe" | "rightNotes" | "approxCost" | "amex" | "amexText" | "cod" | "onAccount" | "other" | "otherText" | "taxExemptYes" | "taxExemptNo" | "vendorQuoteYes" | "vendorQuoteNo" | "ccPo" | "author" | "authorSignature" | "pmName" | "pmSignature" | "approvedBy" | "approvedDate" | "rightBottomNotes" | "description" | "quantity" | "um" | "unitCost" | "total" | "jobEquipNotes" | "costCode" | "payItem" | "subtotal" | "delivery" | "salesTax" | "bottomOther" | "grandTotal" | "sign" | "signDate" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      masterPO: boolean
      PO: string
      date: string
      vendor: string
      address1: string
      attention: string
      tel: string
      ext: string
      email: string
      holdToShipYes: boolean
      holdToShipNo: boolean
      pickUp: boolean
      shipTo: boolean
      driverContact: string
      driverTel: string
      siteContact: string
      siteTel: string
      address2: string
      deliveryNotes: string
      date1: string
      time1: string
      date2: string
      time2: string
      date3: string
      time3: string
      date4: string
      time4: string
      jobNumber: string
      jobName: string
      jobTask: string
      officeContact: string
      officeTel: string
      requestedBy: string
      orderedBy: string
      rightDate: string
      rightTime: string
      coCe: string
      rightNotes: string
      approxCost: string
      amex: boolean
      amexText: string
      cod: boolean
      onAccount: boolean
      other: boolean
      otherText: string
      taxExemptYes: boolean
      taxExemptNo: boolean
      vendorQuoteYes: boolean
      vendorQuoteNo: boolean
      ccPo: string
      author: string
      authorSignature: string
      pmName: string
      pmSignature: string
      approvedBy: string
      approvedDate: string
      rightBottomNotes: string
      description: string
      quantity: string
      um: string
      unitCost: string
      total: string
      jobEquipNotes: string
      costCode: string
      payItem: string
      subtotal: string
      delivery: string
      salesTax: string
      bottomOther: string
      grandTotal: string
      sign: string
      signDate: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'String'>
    readonly masterPO: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly PO: FieldRef<"PurchaseOrder", 'String'>
    readonly date: FieldRef<"PurchaseOrder", 'String'>
    readonly vendor: FieldRef<"PurchaseOrder", 'String'>
    readonly address1: FieldRef<"PurchaseOrder", 'String'>
    readonly attention: FieldRef<"PurchaseOrder", 'String'>
    readonly tel: FieldRef<"PurchaseOrder", 'String'>
    readonly ext: FieldRef<"PurchaseOrder", 'String'>
    readonly email: FieldRef<"PurchaseOrder", 'String'>
    readonly holdToShipYes: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly holdToShipNo: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly pickUp: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly shipTo: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly driverContact: FieldRef<"PurchaseOrder", 'String'>
    readonly driverTel: FieldRef<"PurchaseOrder", 'String'>
    readonly siteContact: FieldRef<"PurchaseOrder", 'String'>
    readonly siteTel: FieldRef<"PurchaseOrder", 'String'>
    readonly address2: FieldRef<"PurchaseOrder", 'String'>
    readonly deliveryNotes: FieldRef<"PurchaseOrder", 'String'>
    readonly date1: FieldRef<"PurchaseOrder", 'String'>
    readonly time1: FieldRef<"PurchaseOrder", 'String'>
    readonly date2: FieldRef<"PurchaseOrder", 'String'>
    readonly time2: FieldRef<"PurchaseOrder", 'String'>
    readonly date3: FieldRef<"PurchaseOrder", 'String'>
    readonly time3: FieldRef<"PurchaseOrder", 'String'>
    readonly date4: FieldRef<"PurchaseOrder", 'String'>
    readonly time4: FieldRef<"PurchaseOrder", 'String'>
    readonly jobNumber: FieldRef<"PurchaseOrder", 'String'>
    readonly jobName: FieldRef<"PurchaseOrder", 'String'>
    readonly jobTask: FieldRef<"PurchaseOrder", 'String'>
    readonly officeContact: FieldRef<"PurchaseOrder", 'String'>
    readonly officeTel: FieldRef<"PurchaseOrder", 'String'>
    readonly requestedBy: FieldRef<"PurchaseOrder", 'String'>
    readonly orderedBy: FieldRef<"PurchaseOrder", 'String'>
    readonly rightDate: FieldRef<"PurchaseOrder", 'String'>
    readonly rightTime: FieldRef<"PurchaseOrder", 'String'>
    readonly coCe: FieldRef<"PurchaseOrder", 'String'>
    readonly rightNotes: FieldRef<"PurchaseOrder", 'String'>
    readonly approxCost: FieldRef<"PurchaseOrder", 'String'>
    readonly amex: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly amexText: FieldRef<"PurchaseOrder", 'String'>
    readonly cod: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly onAccount: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly other: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly otherText: FieldRef<"PurchaseOrder", 'String'>
    readonly taxExemptYes: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly taxExemptNo: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly vendorQuoteYes: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly vendorQuoteNo: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly ccPo: FieldRef<"PurchaseOrder", 'String'>
    readonly author: FieldRef<"PurchaseOrder", 'String'>
    readonly authorSignature: FieldRef<"PurchaseOrder", 'String'>
    readonly pmName: FieldRef<"PurchaseOrder", 'String'>
    readonly pmSignature: FieldRef<"PurchaseOrder", 'String'>
    readonly approvedBy: FieldRef<"PurchaseOrder", 'String'>
    readonly approvedDate: FieldRef<"PurchaseOrder", 'String'>
    readonly rightBottomNotes: FieldRef<"PurchaseOrder", 'String'>
    readonly description: FieldRef<"PurchaseOrder", 'String'>
    readonly quantity: FieldRef<"PurchaseOrder", 'String'>
    readonly um: FieldRef<"PurchaseOrder", 'String'>
    readonly unitCost: FieldRef<"PurchaseOrder", 'String'>
    readonly total: FieldRef<"PurchaseOrder", 'String'>
    readonly jobEquipNotes: FieldRef<"PurchaseOrder", 'String'>
    readonly costCode: FieldRef<"PurchaseOrder", 'String'>
    readonly payItem: FieldRef<"PurchaseOrder", 'String'>
    readonly subtotal: FieldRef<"PurchaseOrder", 'String'>
    readonly delivery: FieldRef<"PurchaseOrder", 'String'>
    readonly salesTax: FieldRef<"PurchaseOrder", 'String'>
    readonly bottomOther: FieldRef<"PurchaseOrder", 'String'>
    readonly grandTotal: FieldRef<"PurchaseOrder", 'String'>
    readonly sign: FieldRef<"PurchaseOrder", 'String'>
    readonly signDate: FieldRef<"PurchaseOrder", 'String'>
    readonly createdAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly userId: FieldRef<"PurchaseOrder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phoneNumber: 'phoneNumber',
    empId: 'empId',
    role: 'role',
    pfpUrl: 'pfpUrl',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    masterPO: 'masterPO',
    PO: 'PO',
    date: 'date',
    vendor: 'vendor',
    address1: 'address1',
    attention: 'attention',
    tel: 'tel',
    ext: 'ext',
    email: 'email',
    holdToShipYes: 'holdToShipYes',
    holdToShipNo: 'holdToShipNo',
    pickUp: 'pickUp',
    shipTo: 'shipTo',
    driverContact: 'driverContact',
    driverTel: 'driverTel',
    siteContact: 'siteContact',
    siteTel: 'siteTel',
    address2: 'address2',
    deliveryNotes: 'deliveryNotes',
    date1: 'date1',
    time1: 'time1',
    date2: 'date2',
    time2: 'time2',
    date3: 'date3',
    time3: 'time3',
    date4: 'date4',
    time4: 'time4',
    jobNumber: 'jobNumber',
    jobName: 'jobName',
    jobTask: 'jobTask',
    officeContact: 'officeContact',
    officeTel: 'officeTel',
    requestedBy: 'requestedBy',
    orderedBy: 'orderedBy',
    rightDate: 'rightDate',
    rightTime: 'rightTime',
    coCe: 'coCe',
    rightNotes: 'rightNotes',
    approxCost: 'approxCost',
    amex: 'amex',
    amexText: 'amexText',
    cod: 'cod',
    onAccount: 'onAccount',
    other: 'other',
    otherText: 'otherText',
    taxExemptYes: 'taxExemptYes',
    taxExemptNo: 'taxExemptNo',
    vendorQuoteYes: 'vendorQuoteYes',
    vendorQuoteNo: 'vendorQuoteNo',
    ccPo: 'ccPo',
    author: 'author',
    authorSignature: 'authorSignature',
    pmName: 'pmName',
    pmSignature: 'pmSignature',
    approvedBy: 'approvedBy',
    approvedDate: 'approvedDate',
    rightBottomNotes: 'rightBottomNotes',
    description: 'description',
    quantity: 'quantity',
    um: 'um',
    unitCost: 'unitCost',
    total: 'total',
    jobEquipNotes: 'jobEquipNotes',
    costCode: 'costCode',
    payItem: 'payItem',
    subtotal: 'subtotal',
    delivery: 'delivery',
    salesTax: 'salesTax',
    bottomOther: 'bottomOther',
    grandTotal: 'grandTotal',
    sign: 'sign',
    signDate: 'signDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phoneNumber?: BigIntFilter<"User"> | bigint | number
    empId?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    pfpUrl?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    PurchaseOrder?: PurchaseOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    role?: SortOrder
    pfpUrl?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PurchaseOrder?: PurchaseOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    phoneNumber?: BigIntFilter<"User"> | bigint | number
    empId?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    pfpUrl?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    PurchaseOrder?: PurchaseOrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    role?: SortOrder
    pfpUrl?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: BigIntWithAggregatesFilter<"User"> | bigint | number
    empId?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    pfpUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: StringFilter<"PurchaseOrder"> | string
    masterPO?: BoolFilter<"PurchaseOrder"> | boolean
    PO?: StringFilter<"PurchaseOrder"> | string
    date?: StringFilter<"PurchaseOrder"> | string
    vendor?: StringFilter<"PurchaseOrder"> | string
    address1?: StringFilter<"PurchaseOrder"> | string
    attention?: StringFilter<"PurchaseOrder"> | string
    tel?: StringFilter<"PurchaseOrder"> | string
    ext?: StringFilter<"PurchaseOrder"> | string
    email?: StringFilter<"PurchaseOrder"> | string
    holdToShipYes?: BoolFilter<"PurchaseOrder"> | boolean
    holdToShipNo?: BoolFilter<"PurchaseOrder"> | boolean
    pickUp?: BoolFilter<"PurchaseOrder"> | boolean
    shipTo?: BoolFilter<"PurchaseOrder"> | boolean
    driverContact?: StringFilter<"PurchaseOrder"> | string
    driverTel?: StringFilter<"PurchaseOrder"> | string
    siteContact?: StringFilter<"PurchaseOrder"> | string
    siteTel?: StringFilter<"PurchaseOrder"> | string
    address2?: StringFilter<"PurchaseOrder"> | string
    deliveryNotes?: StringFilter<"PurchaseOrder"> | string
    date1?: StringFilter<"PurchaseOrder"> | string
    time1?: StringFilter<"PurchaseOrder"> | string
    date2?: StringFilter<"PurchaseOrder"> | string
    time2?: StringFilter<"PurchaseOrder"> | string
    date3?: StringFilter<"PurchaseOrder"> | string
    time3?: StringFilter<"PurchaseOrder"> | string
    date4?: StringFilter<"PurchaseOrder"> | string
    time4?: StringFilter<"PurchaseOrder"> | string
    jobNumber?: StringFilter<"PurchaseOrder"> | string
    jobName?: StringFilter<"PurchaseOrder"> | string
    jobTask?: StringFilter<"PurchaseOrder"> | string
    officeContact?: StringFilter<"PurchaseOrder"> | string
    officeTel?: StringFilter<"PurchaseOrder"> | string
    requestedBy?: StringFilter<"PurchaseOrder"> | string
    orderedBy?: StringFilter<"PurchaseOrder"> | string
    rightDate?: StringFilter<"PurchaseOrder"> | string
    rightTime?: StringFilter<"PurchaseOrder"> | string
    coCe?: StringFilter<"PurchaseOrder"> | string
    rightNotes?: StringFilter<"PurchaseOrder"> | string
    approxCost?: StringFilter<"PurchaseOrder"> | string
    amex?: BoolFilter<"PurchaseOrder"> | boolean
    amexText?: StringFilter<"PurchaseOrder"> | string
    cod?: BoolFilter<"PurchaseOrder"> | boolean
    onAccount?: BoolFilter<"PurchaseOrder"> | boolean
    other?: BoolFilter<"PurchaseOrder"> | boolean
    otherText?: StringFilter<"PurchaseOrder"> | string
    taxExemptYes?: BoolFilter<"PurchaseOrder"> | boolean
    taxExemptNo?: BoolFilter<"PurchaseOrder"> | boolean
    vendorQuoteYes?: BoolFilter<"PurchaseOrder"> | boolean
    vendorQuoteNo?: BoolFilter<"PurchaseOrder"> | boolean
    ccPo?: StringFilter<"PurchaseOrder"> | string
    author?: StringFilter<"PurchaseOrder"> | string
    authorSignature?: StringFilter<"PurchaseOrder"> | string
    pmName?: StringFilter<"PurchaseOrder"> | string
    pmSignature?: StringFilter<"PurchaseOrder"> | string
    approvedBy?: StringFilter<"PurchaseOrder"> | string
    approvedDate?: StringFilter<"PurchaseOrder"> | string
    rightBottomNotes?: StringFilter<"PurchaseOrder"> | string
    description?: StringFilter<"PurchaseOrder"> | string
    quantity?: StringFilter<"PurchaseOrder"> | string
    um?: StringFilter<"PurchaseOrder"> | string
    unitCost?: StringFilter<"PurchaseOrder"> | string
    total?: StringFilter<"PurchaseOrder"> | string
    jobEquipNotes?: StringFilter<"PurchaseOrder"> | string
    costCode?: StringFilter<"PurchaseOrder"> | string
    payItem?: StringFilter<"PurchaseOrder"> | string
    subtotal?: StringFilter<"PurchaseOrder"> | string
    delivery?: StringFilter<"PurchaseOrder"> | string
    salesTax?: StringFilter<"PurchaseOrder"> | string
    bottomOther?: StringFilter<"PurchaseOrder"> | string
    grandTotal?: StringFilter<"PurchaseOrder"> | string
    sign?: StringFilter<"PurchaseOrder"> | string
    signDate?: StringFilter<"PurchaseOrder"> | string
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    userId?: StringFilter<"PurchaseOrder"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    masterPO?: SortOrder
    PO?: SortOrder
    date?: SortOrder
    vendor?: SortOrder
    address1?: SortOrder
    attention?: SortOrder
    tel?: SortOrder
    ext?: SortOrder
    email?: SortOrder
    holdToShipYes?: SortOrder
    holdToShipNo?: SortOrder
    pickUp?: SortOrder
    shipTo?: SortOrder
    driverContact?: SortOrder
    driverTel?: SortOrder
    siteContact?: SortOrder
    siteTel?: SortOrder
    address2?: SortOrder
    deliveryNotes?: SortOrder
    date1?: SortOrder
    time1?: SortOrder
    date2?: SortOrder
    time2?: SortOrder
    date3?: SortOrder
    time3?: SortOrder
    date4?: SortOrder
    time4?: SortOrder
    jobNumber?: SortOrder
    jobName?: SortOrder
    jobTask?: SortOrder
    officeContact?: SortOrder
    officeTel?: SortOrder
    requestedBy?: SortOrder
    orderedBy?: SortOrder
    rightDate?: SortOrder
    rightTime?: SortOrder
    coCe?: SortOrder
    rightNotes?: SortOrder
    approxCost?: SortOrder
    amex?: SortOrder
    amexText?: SortOrder
    cod?: SortOrder
    onAccount?: SortOrder
    other?: SortOrder
    otherText?: SortOrder
    taxExemptYes?: SortOrder
    taxExemptNo?: SortOrder
    vendorQuoteYes?: SortOrder
    vendorQuoteNo?: SortOrder
    ccPo?: SortOrder
    author?: SortOrder
    authorSignature?: SortOrder
    pmName?: SortOrder
    pmSignature?: SortOrder
    approvedBy?: SortOrder
    approvedDate?: SortOrder
    rightBottomNotes?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    um?: SortOrder
    unitCost?: SortOrder
    total?: SortOrder
    jobEquipNotes?: SortOrder
    costCode?: SortOrder
    payItem?: SortOrder
    subtotal?: SortOrder
    delivery?: SortOrder
    salesTax?: SortOrder
    bottomOther?: SortOrder
    grandTotal?: SortOrder
    sign?: SortOrder
    signDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    masterPO?: BoolFilter<"PurchaseOrder"> | boolean
    PO?: StringFilter<"PurchaseOrder"> | string
    date?: StringFilter<"PurchaseOrder"> | string
    vendor?: StringFilter<"PurchaseOrder"> | string
    address1?: StringFilter<"PurchaseOrder"> | string
    attention?: StringFilter<"PurchaseOrder"> | string
    tel?: StringFilter<"PurchaseOrder"> | string
    ext?: StringFilter<"PurchaseOrder"> | string
    email?: StringFilter<"PurchaseOrder"> | string
    holdToShipYes?: BoolFilter<"PurchaseOrder"> | boolean
    holdToShipNo?: BoolFilter<"PurchaseOrder"> | boolean
    pickUp?: BoolFilter<"PurchaseOrder"> | boolean
    shipTo?: BoolFilter<"PurchaseOrder"> | boolean
    driverContact?: StringFilter<"PurchaseOrder"> | string
    driverTel?: StringFilter<"PurchaseOrder"> | string
    siteContact?: StringFilter<"PurchaseOrder"> | string
    siteTel?: StringFilter<"PurchaseOrder"> | string
    address2?: StringFilter<"PurchaseOrder"> | string
    deliveryNotes?: StringFilter<"PurchaseOrder"> | string
    date1?: StringFilter<"PurchaseOrder"> | string
    time1?: StringFilter<"PurchaseOrder"> | string
    date2?: StringFilter<"PurchaseOrder"> | string
    time2?: StringFilter<"PurchaseOrder"> | string
    date3?: StringFilter<"PurchaseOrder"> | string
    time3?: StringFilter<"PurchaseOrder"> | string
    date4?: StringFilter<"PurchaseOrder"> | string
    time4?: StringFilter<"PurchaseOrder"> | string
    jobNumber?: StringFilter<"PurchaseOrder"> | string
    jobName?: StringFilter<"PurchaseOrder"> | string
    jobTask?: StringFilter<"PurchaseOrder"> | string
    officeContact?: StringFilter<"PurchaseOrder"> | string
    officeTel?: StringFilter<"PurchaseOrder"> | string
    requestedBy?: StringFilter<"PurchaseOrder"> | string
    orderedBy?: StringFilter<"PurchaseOrder"> | string
    rightDate?: StringFilter<"PurchaseOrder"> | string
    rightTime?: StringFilter<"PurchaseOrder"> | string
    coCe?: StringFilter<"PurchaseOrder"> | string
    rightNotes?: StringFilter<"PurchaseOrder"> | string
    approxCost?: StringFilter<"PurchaseOrder"> | string
    amex?: BoolFilter<"PurchaseOrder"> | boolean
    amexText?: StringFilter<"PurchaseOrder"> | string
    cod?: BoolFilter<"PurchaseOrder"> | boolean
    onAccount?: BoolFilter<"PurchaseOrder"> | boolean
    other?: BoolFilter<"PurchaseOrder"> | boolean
    otherText?: StringFilter<"PurchaseOrder"> | string
    taxExemptYes?: BoolFilter<"PurchaseOrder"> | boolean
    taxExemptNo?: BoolFilter<"PurchaseOrder"> | boolean
    vendorQuoteYes?: BoolFilter<"PurchaseOrder"> | boolean
    vendorQuoteNo?: BoolFilter<"PurchaseOrder"> | boolean
    ccPo?: StringFilter<"PurchaseOrder"> | string
    author?: StringFilter<"PurchaseOrder"> | string
    authorSignature?: StringFilter<"PurchaseOrder"> | string
    pmName?: StringFilter<"PurchaseOrder"> | string
    pmSignature?: StringFilter<"PurchaseOrder"> | string
    approvedBy?: StringFilter<"PurchaseOrder"> | string
    approvedDate?: StringFilter<"PurchaseOrder"> | string
    rightBottomNotes?: StringFilter<"PurchaseOrder"> | string
    description?: StringFilter<"PurchaseOrder"> | string
    quantity?: StringFilter<"PurchaseOrder"> | string
    um?: StringFilter<"PurchaseOrder"> | string
    unitCost?: StringFilter<"PurchaseOrder"> | string
    total?: StringFilter<"PurchaseOrder"> | string
    jobEquipNotes?: StringFilter<"PurchaseOrder"> | string
    costCode?: StringFilter<"PurchaseOrder"> | string
    payItem?: StringFilter<"PurchaseOrder"> | string
    subtotal?: StringFilter<"PurchaseOrder"> | string
    delivery?: StringFilter<"PurchaseOrder"> | string
    salesTax?: StringFilter<"PurchaseOrder"> | string
    bottomOther?: StringFilter<"PurchaseOrder"> | string
    grandTotal?: StringFilter<"PurchaseOrder"> | string
    sign?: StringFilter<"PurchaseOrder"> | string
    signDate?: StringFilter<"PurchaseOrder"> | string
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    userId?: StringFilter<"PurchaseOrder"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    masterPO?: SortOrder
    PO?: SortOrder
    date?: SortOrder
    vendor?: SortOrder
    address1?: SortOrder
    attention?: SortOrder
    tel?: SortOrder
    ext?: SortOrder
    email?: SortOrder
    holdToShipYes?: SortOrder
    holdToShipNo?: SortOrder
    pickUp?: SortOrder
    shipTo?: SortOrder
    driverContact?: SortOrder
    driverTel?: SortOrder
    siteContact?: SortOrder
    siteTel?: SortOrder
    address2?: SortOrder
    deliveryNotes?: SortOrder
    date1?: SortOrder
    time1?: SortOrder
    date2?: SortOrder
    time2?: SortOrder
    date3?: SortOrder
    time3?: SortOrder
    date4?: SortOrder
    time4?: SortOrder
    jobNumber?: SortOrder
    jobName?: SortOrder
    jobTask?: SortOrder
    officeContact?: SortOrder
    officeTel?: SortOrder
    requestedBy?: SortOrder
    orderedBy?: SortOrder
    rightDate?: SortOrder
    rightTime?: SortOrder
    coCe?: SortOrder
    rightNotes?: SortOrder
    approxCost?: SortOrder
    amex?: SortOrder
    amexText?: SortOrder
    cod?: SortOrder
    onAccount?: SortOrder
    other?: SortOrder
    otherText?: SortOrder
    taxExemptYes?: SortOrder
    taxExemptNo?: SortOrder
    vendorQuoteYes?: SortOrder
    vendorQuoteNo?: SortOrder
    ccPo?: SortOrder
    author?: SortOrder
    authorSignature?: SortOrder
    pmName?: SortOrder
    pmSignature?: SortOrder
    approvedBy?: SortOrder
    approvedDate?: SortOrder
    rightBottomNotes?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    um?: SortOrder
    unitCost?: SortOrder
    total?: SortOrder
    jobEquipNotes?: SortOrder
    costCode?: SortOrder
    payItem?: SortOrder
    subtotal?: SortOrder
    delivery?: SortOrder
    salesTax?: SortOrder
    bottomOther?: SortOrder
    grandTotal?: SortOrder
    sign?: SortOrder
    signDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    masterPO?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    PO?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    date?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    vendor?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    address1?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    attention?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    tel?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    ext?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    email?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    holdToShipYes?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    holdToShipNo?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    pickUp?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    shipTo?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    driverContact?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    driverTel?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    siteContact?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    siteTel?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    address2?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    deliveryNotes?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    date1?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    time1?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    date2?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    time2?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    date3?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    time3?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    date4?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    time4?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    jobNumber?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    jobName?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    jobTask?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    officeContact?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    officeTel?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    requestedBy?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    orderedBy?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    rightDate?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    rightTime?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    coCe?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    rightNotes?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    approxCost?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    amex?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    amexText?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    cod?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    onAccount?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    other?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    otherText?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    taxExemptYes?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    taxExemptNo?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    vendorQuoteYes?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    vendorQuoteNo?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    ccPo?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    author?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    authorSignature?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    pmName?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    pmSignature?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    approvedBy?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    approvedDate?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    rightBottomNotes?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    description?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    quantity?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    um?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    unitCost?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    total?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    jobEquipNotes?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    costCode?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    payItem?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    subtotal?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    delivery?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    salesTax?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    bottomOther?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    grandTotal?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    sign?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    signDate?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    userId?: StringWithAggregatesFilter<"PurchaseOrder"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    role: string
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    role: string
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    role: string
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateInput = {
    id?: string
    masterPO: boolean
    PO: string
    date: string
    vendor: string
    address1: string
    attention: string
    tel: string
    ext: string
    email: string
    holdToShipYes: boolean
    holdToShipNo: boolean
    pickUp: boolean
    shipTo: boolean
    driverContact: string
    driverTel: string
    siteContact: string
    siteTel: string
    address2: string
    deliveryNotes: string
    date1: string
    time1: string
    date2: string
    time2: string
    date3: string
    time3: string
    date4: string
    time4: string
    jobNumber: string
    jobName: string
    jobTask: string
    officeContact: string
    officeTel: string
    requestedBy: string
    orderedBy: string
    rightDate: string
    rightTime: string
    coCe: string
    rightNotes: string
    approxCost: string
    amex: boolean
    amexText: string
    cod: boolean
    onAccount: boolean
    other: boolean
    otherText: string
    taxExemptYes: boolean
    taxExemptNo: boolean
    vendorQuoteYes: boolean
    vendorQuoteNo: boolean
    ccPo: string
    author: string
    authorSignature: string
    pmName: string
    pmSignature: string
    approvedBy: string
    approvedDate: string
    rightBottomNotes: string
    description: string
    quantity: string
    um: string
    unitCost: string
    total: string
    jobEquipNotes: string
    costCode: string
    payItem: string
    subtotal: string
    delivery: string
    salesTax: string
    bottomOther: string
    grandTotal: string
    sign: string
    signDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: string
    masterPO: boolean
    PO: string
    date: string
    vendor: string
    address1: string
    attention: string
    tel: string
    ext: string
    email: string
    holdToShipYes: boolean
    holdToShipNo: boolean
    pickUp: boolean
    shipTo: boolean
    driverContact: string
    driverTel: string
    siteContact: string
    siteTel: string
    address2: string
    deliveryNotes: string
    date1: string
    time1: string
    date2: string
    time2: string
    date3: string
    time3: string
    date4: string
    time4: string
    jobNumber: string
    jobName: string
    jobTask: string
    officeContact: string
    officeTel: string
    requestedBy: string
    orderedBy: string
    rightDate: string
    rightTime: string
    coCe: string
    rightNotes: string
    approxCost: string
    amex: boolean
    amexText: string
    cod: boolean
    onAccount: boolean
    other: boolean
    otherText: string
    taxExemptYes: boolean
    taxExemptNo: boolean
    vendorQuoteYes: boolean
    vendorQuoteNo: boolean
    ccPo: string
    author: string
    authorSignature: string
    pmName: string
    pmSignature: string
    approvedBy: string
    approvedDate: string
    rightBottomNotes: string
    description: string
    quantity: string
    um: string
    unitCost: string
    total: string
    jobEquipNotes: string
    costCode: string
    payItem: string
    subtotal: string
    delivery: string
    salesTax: string
    bottomOther: string
    grandTotal: string
    sign: string
    signDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PurchaseOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPO?: BoolFieldUpdateOperationsInput | boolean
    PO?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    attention?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    holdToShipYes?: BoolFieldUpdateOperationsInput | boolean
    holdToShipNo?: BoolFieldUpdateOperationsInput | boolean
    pickUp?: BoolFieldUpdateOperationsInput | boolean
    shipTo?: BoolFieldUpdateOperationsInput | boolean
    driverContact?: StringFieldUpdateOperationsInput | string
    driverTel?: StringFieldUpdateOperationsInput | string
    siteContact?: StringFieldUpdateOperationsInput | string
    siteTel?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    deliveryNotes?: StringFieldUpdateOperationsInput | string
    date1?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
    date2?: StringFieldUpdateOperationsInput | string
    time2?: StringFieldUpdateOperationsInput | string
    date3?: StringFieldUpdateOperationsInput | string
    time3?: StringFieldUpdateOperationsInput | string
    date4?: StringFieldUpdateOperationsInput | string
    time4?: StringFieldUpdateOperationsInput | string
    jobNumber?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    jobTask?: StringFieldUpdateOperationsInput | string
    officeContact?: StringFieldUpdateOperationsInput | string
    officeTel?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    orderedBy?: StringFieldUpdateOperationsInput | string
    rightDate?: StringFieldUpdateOperationsInput | string
    rightTime?: StringFieldUpdateOperationsInput | string
    coCe?: StringFieldUpdateOperationsInput | string
    rightNotes?: StringFieldUpdateOperationsInput | string
    approxCost?: StringFieldUpdateOperationsInput | string
    amex?: BoolFieldUpdateOperationsInput | boolean
    amexText?: StringFieldUpdateOperationsInput | string
    cod?: BoolFieldUpdateOperationsInput | boolean
    onAccount?: BoolFieldUpdateOperationsInput | boolean
    other?: BoolFieldUpdateOperationsInput | boolean
    otherText?: StringFieldUpdateOperationsInput | string
    taxExemptYes?: BoolFieldUpdateOperationsInput | boolean
    taxExemptNo?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteYes?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteNo?: BoolFieldUpdateOperationsInput | boolean
    ccPo?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorSignature?: StringFieldUpdateOperationsInput | string
    pmName?: StringFieldUpdateOperationsInput | string
    pmSignature?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedDate?: StringFieldUpdateOperationsInput | string
    rightBottomNotes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    um?: StringFieldUpdateOperationsInput | string
    unitCost?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    jobEquipNotes?: StringFieldUpdateOperationsInput | string
    costCode?: StringFieldUpdateOperationsInput | string
    payItem?: StringFieldUpdateOperationsInput | string
    subtotal?: StringFieldUpdateOperationsInput | string
    delivery?: StringFieldUpdateOperationsInput | string
    salesTax?: StringFieldUpdateOperationsInput | string
    bottomOther?: StringFieldUpdateOperationsInput | string
    grandTotal?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    signDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPO?: BoolFieldUpdateOperationsInput | boolean
    PO?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    attention?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    holdToShipYes?: BoolFieldUpdateOperationsInput | boolean
    holdToShipNo?: BoolFieldUpdateOperationsInput | boolean
    pickUp?: BoolFieldUpdateOperationsInput | boolean
    shipTo?: BoolFieldUpdateOperationsInput | boolean
    driverContact?: StringFieldUpdateOperationsInput | string
    driverTel?: StringFieldUpdateOperationsInput | string
    siteContact?: StringFieldUpdateOperationsInput | string
    siteTel?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    deliveryNotes?: StringFieldUpdateOperationsInput | string
    date1?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
    date2?: StringFieldUpdateOperationsInput | string
    time2?: StringFieldUpdateOperationsInput | string
    date3?: StringFieldUpdateOperationsInput | string
    time3?: StringFieldUpdateOperationsInput | string
    date4?: StringFieldUpdateOperationsInput | string
    time4?: StringFieldUpdateOperationsInput | string
    jobNumber?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    jobTask?: StringFieldUpdateOperationsInput | string
    officeContact?: StringFieldUpdateOperationsInput | string
    officeTel?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    orderedBy?: StringFieldUpdateOperationsInput | string
    rightDate?: StringFieldUpdateOperationsInput | string
    rightTime?: StringFieldUpdateOperationsInput | string
    coCe?: StringFieldUpdateOperationsInput | string
    rightNotes?: StringFieldUpdateOperationsInput | string
    approxCost?: StringFieldUpdateOperationsInput | string
    amex?: BoolFieldUpdateOperationsInput | boolean
    amexText?: StringFieldUpdateOperationsInput | string
    cod?: BoolFieldUpdateOperationsInput | boolean
    onAccount?: BoolFieldUpdateOperationsInput | boolean
    other?: BoolFieldUpdateOperationsInput | boolean
    otherText?: StringFieldUpdateOperationsInput | string
    taxExemptYes?: BoolFieldUpdateOperationsInput | boolean
    taxExemptNo?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteYes?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteNo?: BoolFieldUpdateOperationsInput | boolean
    ccPo?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorSignature?: StringFieldUpdateOperationsInput | string
    pmName?: StringFieldUpdateOperationsInput | string
    pmSignature?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedDate?: StringFieldUpdateOperationsInput | string
    rightBottomNotes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    um?: StringFieldUpdateOperationsInput | string
    unitCost?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    jobEquipNotes?: StringFieldUpdateOperationsInput | string
    costCode?: StringFieldUpdateOperationsInput | string
    payItem?: StringFieldUpdateOperationsInput | string
    subtotal?: StringFieldUpdateOperationsInput | string
    delivery?: StringFieldUpdateOperationsInput | string
    salesTax?: StringFieldUpdateOperationsInput | string
    bottomOther?: StringFieldUpdateOperationsInput | string
    grandTotal?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    signDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseOrderCreateManyInput = {
    id?: string
    masterPO: boolean
    PO: string
    date: string
    vendor: string
    address1: string
    attention: string
    tel: string
    ext: string
    email: string
    holdToShipYes: boolean
    holdToShipNo: boolean
    pickUp: boolean
    shipTo: boolean
    driverContact: string
    driverTel: string
    siteContact: string
    siteTel: string
    address2: string
    deliveryNotes: string
    date1: string
    time1: string
    date2: string
    time2: string
    date3: string
    time3: string
    date4: string
    time4: string
    jobNumber: string
    jobName: string
    jobTask: string
    officeContact: string
    officeTel: string
    requestedBy: string
    orderedBy: string
    rightDate: string
    rightTime: string
    coCe: string
    rightNotes: string
    approxCost: string
    amex: boolean
    amexText: string
    cod: boolean
    onAccount: boolean
    other: boolean
    otherText: string
    taxExemptYes: boolean
    taxExemptNo: boolean
    vendorQuoteYes: boolean
    vendorQuoteNo: boolean
    ccPo: string
    author: string
    authorSignature: string
    pmName: string
    pmSignature: string
    approvedBy: string
    approvedDate: string
    rightBottomNotes: string
    description: string
    quantity: string
    um: string
    unitCost: string
    total: string
    jobEquipNotes: string
    costCode: string
    payItem: string
    subtotal: string
    delivery: string
    salesTax: string
    bottomOther: string
    grandTotal: string
    sign: string
    signDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPO?: BoolFieldUpdateOperationsInput | boolean
    PO?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    attention?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    holdToShipYes?: BoolFieldUpdateOperationsInput | boolean
    holdToShipNo?: BoolFieldUpdateOperationsInput | boolean
    pickUp?: BoolFieldUpdateOperationsInput | boolean
    shipTo?: BoolFieldUpdateOperationsInput | boolean
    driverContact?: StringFieldUpdateOperationsInput | string
    driverTel?: StringFieldUpdateOperationsInput | string
    siteContact?: StringFieldUpdateOperationsInput | string
    siteTel?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    deliveryNotes?: StringFieldUpdateOperationsInput | string
    date1?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
    date2?: StringFieldUpdateOperationsInput | string
    time2?: StringFieldUpdateOperationsInput | string
    date3?: StringFieldUpdateOperationsInput | string
    time3?: StringFieldUpdateOperationsInput | string
    date4?: StringFieldUpdateOperationsInput | string
    time4?: StringFieldUpdateOperationsInput | string
    jobNumber?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    jobTask?: StringFieldUpdateOperationsInput | string
    officeContact?: StringFieldUpdateOperationsInput | string
    officeTel?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    orderedBy?: StringFieldUpdateOperationsInput | string
    rightDate?: StringFieldUpdateOperationsInput | string
    rightTime?: StringFieldUpdateOperationsInput | string
    coCe?: StringFieldUpdateOperationsInput | string
    rightNotes?: StringFieldUpdateOperationsInput | string
    approxCost?: StringFieldUpdateOperationsInput | string
    amex?: BoolFieldUpdateOperationsInput | boolean
    amexText?: StringFieldUpdateOperationsInput | string
    cod?: BoolFieldUpdateOperationsInput | boolean
    onAccount?: BoolFieldUpdateOperationsInput | boolean
    other?: BoolFieldUpdateOperationsInput | boolean
    otherText?: StringFieldUpdateOperationsInput | string
    taxExemptYes?: BoolFieldUpdateOperationsInput | boolean
    taxExemptNo?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteYes?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteNo?: BoolFieldUpdateOperationsInput | boolean
    ccPo?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorSignature?: StringFieldUpdateOperationsInput | string
    pmName?: StringFieldUpdateOperationsInput | string
    pmSignature?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedDate?: StringFieldUpdateOperationsInput | string
    rightBottomNotes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    um?: StringFieldUpdateOperationsInput | string
    unitCost?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    jobEquipNotes?: StringFieldUpdateOperationsInput | string
    costCode?: StringFieldUpdateOperationsInput | string
    payItem?: StringFieldUpdateOperationsInput | string
    subtotal?: StringFieldUpdateOperationsInput | string
    delivery?: StringFieldUpdateOperationsInput | string
    salesTax?: StringFieldUpdateOperationsInput | string
    bottomOther?: StringFieldUpdateOperationsInput | string
    grandTotal?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    signDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPO?: BoolFieldUpdateOperationsInput | boolean
    PO?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    attention?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    holdToShipYes?: BoolFieldUpdateOperationsInput | boolean
    holdToShipNo?: BoolFieldUpdateOperationsInput | boolean
    pickUp?: BoolFieldUpdateOperationsInput | boolean
    shipTo?: BoolFieldUpdateOperationsInput | boolean
    driverContact?: StringFieldUpdateOperationsInput | string
    driverTel?: StringFieldUpdateOperationsInput | string
    siteContact?: StringFieldUpdateOperationsInput | string
    siteTel?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    deliveryNotes?: StringFieldUpdateOperationsInput | string
    date1?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
    date2?: StringFieldUpdateOperationsInput | string
    time2?: StringFieldUpdateOperationsInput | string
    date3?: StringFieldUpdateOperationsInput | string
    time3?: StringFieldUpdateOperationsInput | string
    date4?: StringFieldUpdateOperationsInput | string
    time4?: StringFieldUpdateOperationsInput | string
    jobNumber?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    jobTask?: StringFieldUpdateOperationsInput | string
    officeContact?: StringFieldUpdateOperationsInput | string
    officeTel?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    orderedBy?: StringFieldUpdateOperationsInput | string
    rightDate?: StringFieldUpdateOperationsInput | string
    rightTime?: StringFieldUpdateOperationsInput | string
    coCe?: StringFieldUpdateOperationsInput | string
    rightNotes?: StringFieldUpdateOperationsInput | string
    approxCost?: StringFieldUpdateOperationsInput | string
    amex?: BoolFieldUpdateOperationsInput | boolean
    amexText?: StringFieldUpdateOperationsInput | string
    cod?: BoolFieldUpdateOperationsInput | boolean
    onAccount?: BoolFieldUpdateOperationsInput | boolean
    other?: BoolFieldUpdateOperationsInput | boolean
    otherText?: StringFieldUpdateOperationsInput | string
    taxExemptYes?: BoolFieldUpdateOperationsInput | boolean
    taxExemptNo?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteYes?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteNo?: BoolFieldUpdateOperationsInput | boolean
    ccPo?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorSignature?: StringFieldUpdateOperationsInput | string
    pmName?: StringFieldUpdateOperationsInput | string
    pmSignature?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedDate?: StringFieldUpdateOperationsInput | string
    rightBottomNotes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    um?: StringFieldUpdateOperationsInput | string
    unitCost?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    jobEquipNotes?: StringFieldUpdateOperationsInput | string
    costCode?: StringFieldUpdateOperationsInput | string
    payItem?: StringFieldUpdateOperationsInput | string
    subtotal?: StringFieldUpdateOperationsInput | string
    delivery?: StringFieldUpdateOperationsInput | string
    salesTax?: StringFieldUpdateOperationsInput | string
    bottomOther?: StringFieldUpdateOperationsInput | string
    grandTotal?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    signDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PurchaseOrderListRelationFilter = {
    every?: PurchaseOrderWhereInput
    some?: PurchaseOrderWhereInput
    none?: PurchaseOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    role?: SortOrder
    pfpUrl?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    phoneNumber?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    role?: SortOrder
    pfpUrl?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    role?: SortOrder
    pfpUrl?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    phoneNumber?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    masterPO?: SortOrder
    PO?: SortOrder
    date?: SortOrder
    vendor?: SortOrder
    address1?: SortOrder
    attention?: SortOrder
    tel?: SortOrder
    ext?: SortOrder
    email?: SortOrder
    holdToShipYes?: SortOrder
    holdToShipNo?: SortOrder
    pickUp?: SortOrder
    shipTo?: SortOrder
    driverContact?: SortOrder
    driverTel?: SortOrder
    siteContact?: SortOrder
    siteTel?: SortOrder
    address2?: SortOrder
    deliveryNotes?: SortOrder
    date1?: SortOrder
    time1?: SortOrder
    date2?: SortOrder
    time2?: SortOrder
    date3?: SortOrder
    time3?: SortOrder
    date4?: SortOrder
    time4?: SortOrder
    jobNumber?: SortOrder
    jobName?: SortOrder
    jobTask?: SortOrder
    officeContact?: SortOrder
    officeTel?: SortOrder
    requestedBy?: SortOrder
    orderedBy?: SortOrder
    rightDate?: SortOrder
    rightTime?: SortOrder
    coCe?: SortOrder
    rightNotes?: SortOrder
    approxCost?: SortOrder
    amex?: SortOrder
    amexText?: SortOrder
    cod?: SortOrder
    onAccount?: SortOrder
    other?: SortOrder
    otherText?: SortOrder
    taxExemptYes?: SortOrder
    taxExemptNo?: SortOrder
    vendorQuoteYes?: SortOrder
    vendorQuoteNo?: SortOrder
    ccPo?: SortOrder
    author?: SortOrder
    authorSignature?: SortOrder
    pmName?: SortOrder
    pmSignature?: SortOrder
    approvedBy?: SortOrder
    approvedDate?: SortOrder
    rightBottomNotes?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    um?: SortOrder
    unitCost?: SortOrder
    total?: SortOrder
    jobEquipNotes?: SortOrder
    costCode?: SortOrder
    payItem?: SortOrder
    subtotal?: SortOrder
    delivery?: SortOrder
    salesTax?: SortOrder
    bottomOther?: SortOrder
    grandTotal?: SortOrder
    sign?: SortOrder
    signDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    masterPO?: SortOrder
    PO?: SortOrder
    date?: SortOrder
    vendor?: SortOrder
    address1?: SortOrder
    attention?: SortOrder
    tel?: SortOrder
    ext?: SortOrder
    email?: SortOrder
    holdToShipYes?: SortOrder
    holdToShipNo?: SortOrder
    pickUp?: SortOrder
    shipTo?: SortOrder
    driverContact?: SortOrder
    driverTel?: SortOrder
    siteContact?: SortOrder
    siteTel?: SortOrder
    address2?: SortOrder
    deliveryNotes?: SortOrder
    date1?: SortOrder
    time1?: SortOrder
    date2?: SortOrder
    time2?: SortOrder
    date3?: SortOrder
    time3?: SortOrder
    date4?: SortOrder
    time4?: SortOrder
    jobNumber?: SortOrder
    jobName?: SortOrder
    jobTask?: SortOrder
    officeContact?: SortOrder
    officeTel?: SortOrder
    requestedBy?: SortOrder
    orderedBy?: SortOrder
    rightDate?: SortOrder
    rightTime?: SortOrder
    coCe?: SortOrder
    rightNotes?: SortOrder
    approxCost?: SortOrder
    amex?: SortOrder
    amexText?: SortOrder
    cod?: SortOrder
    onAccount?: SortOrder
    other?: SortOrder
    otherText?: SortOrder
    taxExemptYes?: SortOrder
    taxExemptNo?: SortOrder
    vendorQuoteYes?: SortOrder
    vendorQuoteNo?: SortOrder
    ccPo?: SortOrder
    author?: SortOrder
    authorSignature?: SortOrder
    pmName?: SortOrder
    pmSignature?: SortOrder
    approvedBy?: SortOrder
    approvedDate?: SortOrder
    rightBottomNotes?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    um?: SortOrder
    unitCost?: SortOrder
    total?: SortOrder
    jobEquipNotes?: SortOrder
    costCode?: SortOrder
    payItem?: SortOrder
    subtotal?: SortOrder
    delivery?: SortOrder
    salesTax?: SortOrder
    bottomOther?: SortOrder
    grandTotal?: SortOrder
    sign?: SortOrder
    signDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    masterPO?: SortOrder
    PO?: SortOrder
    date?: SortOrder
    vendor?: SortOrder
    address1?: SortOrder
    attention?: SortOrder
    tel?: SortOrder
    ext?: SortOrder
    email?: SortOrder
    holdToShipYes?: SortOrder
    holdToShipNo?: SortOrder
    pickUp?: SortOrder
    shipTo?: SortOrder
    driverContact?: SortOrder
    driverTel?: SortOrder
    siteContact?: SortOrder
    siteTel?: SortOrder
    address2?: SortOrder
    deliveryNotes?: SortOrder
    date1?: SortOrder
    time1?: SortOrder
    date2?: SortOrder
    time2?: SortOrder
    date3?: SortOrder
    time3?: SortOrder
    date4?: SortOrder
    time4?: SortOrder
    jobNumber?: SortOrder
    jobName?: SortOrder
    jobTask?: SortOrder
    officeContact?: SortOrder
    officeTel?: SortOrder
    requestedBy?: SortOrder
    orderedBy?: SortOrder
    rightDate?: SortOrder
    rightTime?: SortOrder
    coCe?: SortOrder
    rightNotes?: SortOrder
    approxCost?: SortOrder
    amex?: SortOrder
    amexText?: SortOrder
    cod?: SortOrder
    onAccount?: SortOrder
    other?: SortOrder
    otherText?: SortOrder
    taxExemptYes?: SortOrder
    taxExemptNo?: SortOrder
    vendorQuoteYes?: SortOrder
    vendorQuoteNo?: SortOrder
    ccPo?: SortOrder
    author?: SortOrder
    authorSignature?: SortOrder
    pmName?: SortOrder
    pmSignature?: SortOrder
    approvedBy?: SortOrder
    approvedDate?: SortOrder
    rightBottomNotes?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    um?: SortOrder
    unitCost?: SortOrder
    total?: SortOrder
    jobEquipNotes?: SortOrder
    costCode?: SortOrder
    payItem?: SortOrder
    subtotal?: SortOrder
    delivery?: SortOrder
    salesTax?: SortOrder
    bottomOther?: SortOrder
    grandTotal?: SortOrder
    sign?: SortOrder
    signDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PurchaseOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurchaseOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutUserInput | PurchaseOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutUserInput | PurchaseOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutUserInput | PurchaseOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutUserInput | PurchaseOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutUserInput | PurchaseOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutUserInput | PurchaseOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrderInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPurchaseOrderNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrderInput
    upsert?: UserUpsertWithoutPurchaseOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseOrderInput, UserUpdateWithoutPurchaseOrderInput>, UserUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PurchaseOrderCreateWithoutUserInput = {
    id?: string
    masterPO: boolean
    PO: string
    date: string
    vendor: string
    address1: string
    attention: string
    tel: string
    ext: string
    email: string
    holdToShipYes: boolean
    holdToShipNo: boolean
    pickUp: boolean
    shipTo: boolean
    driverContact: string
    driverTel: string
    siteContact: string
    siteTel: string
    address2: string
    deliveryNotes: string
    date1: string
    time1: string
    date2: string
    time2: string
    date3: string
    time3: string
    date4: string
    time4: string
    jobNumber: string
    jobName: string
    jobTask: string
    officeContact: string
    officeTel: string
    requestedBy: string
    orderedBy: string
    rightDate: string
    rightTime: string
    coCe: string
    rightNotes: string
    approxCost: string
    amex: boolean
    amexText: string
    cod: boolean
    onAccount: boolean
    other: boolean
    otherText: string
    taxExemptYes: boolean
    taxExemptNo: boolean
    vendorQuoteYes: boolean
    vendorQuoteNo: boolean
    ccPo: string
    author: string
    authorSignature: string
    pmName: string
    pmSignature: string
    approvedBy: string
    approvedDate: string
    rightBottomNotes: string
    description: string
    quantity: string
    um: string
    unitCost: string
    total: string
    jobEquipNotes: string
    costCode: string
    payItem: string
    subtotal: string
    delivery: string
    salesTax: string
    bottomOther: string
    grandTotal: string
    sign: string
    signDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderUncheckedCreateWithoutUserInput = {
    id?: string
    masterPO: boolean
    PO: string
    date: string
    vendor: string
    address1: string
    attention: string
    tel: string
    ext: string
    email: string
    holdToShipYes: boolean
    holdToShipNo: boolean
    pickUp: boolean
    shipTo: boolean
    driverContact: string
    driverTel: string
    siteContact: string
    siteTel: string
    address2: string
    deliveryNotes: string
    date1: string
    time1: string
    date2: string
    time2: string
    date3: string
    time3: string
    date4: string
    time4: string
    jobNumber: string
    jobName: string
    jobTask: string
    officeContact: string
    officeTel: string
    requestedBy: string
    orderedBy: string
    rightDate: string
    rightTime: string
    coCe: string
    rightNotes: string
    approxCost: string
    amex: boolean
    amexText: string
    cod: boolean
    onAccount: boolean
    other: boolean
    otherText: string
    taxExemptYes: boolean
    taxExemptNo: boolean
    vendorQuoteYes: boolean
    vendorQuoteNo: boolean
    ccPo: string
    author: string
    authorSignature: string
    pmName: string
    pmSignature: string
    approvedBy: string
    approvedDate: string
    rightBottomNotes: string
    description: string
    quantity: string
    um: string
    unitCost: string
    total: string
    jobEquipNotes: string
    costCode: string
    payItem: string
    subtotal: string
    delivery: string
    salesTax: string
    bottomOther: string
    grandTotal: string
    sign: string
    signDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderCreateOrConnectWithoutUserInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput>
  }

  export type PurchaseOrderCreateManyUserInputEnvelope = {
    data: PurchaseOrderCreateManyUserInput | PurchaseOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutUserInput, PurchaseOrderUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutUserInput, PurchaseOrderUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseOrderScalarWhereInput = {
    AND?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    OR?: PurchaseOrderScalarWhereInput[]
    NOT?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    id?: StringFilter<"PurchaseOrder"> | string
    masterPO?: BoolFilter<"PurchaseOrder"> | boolean
    PO?: StringFilter<"PurchaseOrder"> | string
    date?: StringFilter<"PurchaseOrder"> | string
    vendor?: StringFilter<"PurchaseOrder"> | string
    address1?: StringFilter<"PurchaseOrder"> | string
    attention?: StringFilter<"PurchaseOrder"> | string
    tel?: StringFilter<"PurchaseOrder"> | string
    ext?: StringFilter<"PurchaseOrder"> | string
    email?: StringFilter<"PurchaseOrder"> | string
    holdToShipYes?: BoolFilter<"PurchaseOrder"> | boolean
    holdToShipNo?: BoolFilter<"PurchaseOrder"> | boolean
    pickUp?: BoolFilter<"PurchaseOrder"> | boolean
    shipTo?: BoolFilter<"PurchaseOrder"> | boolean
    driverContact?: StringFilter<"PurchaseOrder"> | string
    driverTel?: StringFilter<"PurchaseOrder"> | string
    siteContact?: StringFilter<"PurchaseOrder"> | string
    siteTel?: StringFilter<"PurchaseOrder"> | string
    address2?: StringFilter<"PurchaseOrder"> | string
    deliveryNotes?: StringFilter<"PurchaseOrder"> | string
    date1?: StringFilter<"PurchaseOrder"> | string
    time1?: StringFilter<"PurchaseOrder"> | string
    date2?: StringFilter<"PurchaseOrder"> | string
    time2?: StringFilter<"PurchaseOrder"> | string
    date3?: StringFilter<"PurchaseOrder"> | string
    time3?: StringFilter<"PurchaseOrder"> | string
    date4?: StringFilter<"PurchaseOrder"> | string
    time4?: StringFilter<"PurchaseOrder"> | string
    jobNumber?: StringFilter<"PurchaseOrder"> | string
    jobName?: StringFilter<"PurchaseOrder"> | string
    jobTask?: StringFilter<"PurchaseOrder"> | string
    officeContact?: StringFilter<"PurchaseOrder"> | string
    officeTel?: StringFilter<"PurchaseOrder"> | string
    requestedBy?: StringFilter<"PurchaseOrder"> | string
    orderedBy?: StringFilter<"PurchaseOrder"> | string
    rightDate?: StringFilter<"PurchaseOrder"> | string
    rightTime?: StringFilter<"PurchaseOrder"> | string
    coCe?: StringFilter<"PurchaseOrder"> | string
    rightNotes?: StringFilter<"PurchaseOrder"> | string
    approxCost?: StringFilter<"PurchaseOrder"> | string
    amex?: BoolFilter<"PurchaseOrder"> | boolean
    amexText?: StringFilter<"PurchaseOrder"> | string
    cod?: BoolFilter<"PurchaseOrder"> | boolean
    onAccount?: BoolFilter<"PurchaseOrder"> | boolean
    other?: BoolFilter<"PurchaseOrder"> | boolean
    otherText?: StringFilter<"PurchaseOrder"> | string
    taxExemptYes?: BoolFilter<"PurchaseOrder"> | boolean
    taxExemptNo?: BoolFilter<"PurchaseOrder"> | boolean
    vendorQuoteYes?: BoolFilter<"PurchaseOrder"> | boolean
    vendorQuoteNo?: BoolFilter<"PurchaseOrder"> | boolean
    ccPo?: StringFilter<"PurchaseOrder"> | string
    author?: StringFilter<"PurchaseOrder"> | string
    authorSignature?: StringFilter<"PurchaseOrder"> | string
    pmName?: StringFilter<"PurchaseOrder"> | string
    pmSignature?: StringFilter<"PurchaseOrder"> | string
    approvedBy?: StringFilter<"PurchaseOrder"> | string
    approvedDate?: StringFilter<"PurchaseOrder"> | string
    rightBottomNotes?: StringFilter<"PurchaseOrder"> | string
    description?: StringFilter<"PurchaseOrder"> | string
    quantity?: StringFilter<"PurchaseOrder"> | string
    um?: StringFilter<"PurchaseOrder"> | string
    unitCost?: StringFilter<"PurchaseOrder"> | string
    total?: StringFilter<"PurchaseOrder"> | string
    jobEquipNotes?: StringFilter<"PurchaseOrder"> | string
    costCode?: StringFilter<"PurchaseOrder"> | string
    payItem?: StringFilter<"PurchaseOrder"> | string
    subtotal?: StringFilter<"PurchaseOrder"> | string
    delivery?: StringFilter<"PurchaseOrder"> | string
    salesTax?: StringFilter<"PurchaseOrder"> | string
    bottomOther?: StringFilter<"PurchaseOrder"> | string
    grandTotal?: StringFilter<"PurchaseOrder"> | string
    sign?: StringFilter<"PurchaseOrder"> | string
    signDate?: StringFilter<"PurchaseOrder"> | string
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    userId?: StringFilter<"PurchaseOrder"> | string
  }

  export type UserCreateWithoutPurchaseOrderInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    role: string
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    role: string
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPurchaseOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type UserUpsertWithoutPurchaseOrderInput = {
    update: XOR<UserUpdateWithoutPurchaseOrderInput, UserUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<UserCreateWithoutPurchaseOrderInput, UserUncheckedCreateWithoutPurchaseOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseOrderInput, UserUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type UserUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateManyUserInput = {
    id?: string
    masterPO: boolean
    PO: string
    date: string
    vendor: string
    address1: string
    attention: string
    tel: string
    ext: string
    email: string
    holdToShipYes: boolean
    holdToShipNo: boolean
    pickUp: boolean
    shipTo: boolean
    driverContact: string
    driverTel: string
    siteContact: string
    siteTel: string
    address2: string
    deliveryNotes: string
    date1: string
    time1: string
    date2: string
    time2: string
    date3: string
    time3: string
    date4: string
    time4: string
    jobNumber: string
    jobName: string
    jobTask: string
    officeContact: string
    officeTel: string
    requestedBy: string
    orderedBy: string
    rightDate: string
    rightTime: string
    coCe: string
    rightNotes: string
    approxCost: string
    amex: boolean
    amexText: string
    cod: boolean
    onAccount: boolean
    other: boolean
    otherText: string
    taxExemptYes: boolean
    taxExemptNo: boolean
    vendorQuoteYes: boolean
    vendorQuoteNo: boolean
    ccPo: string
    author: string
    authorSignature: string
    pmName: string
    pmSignature: string
    approvedBy: string
    approvedDate: string
    rightBottomNotes: string
    description: string
    quantity: string
    um: string
    unitCost: string
    total: string
    jobEquipNotes: string
    costCode: string
    payItem: string
    subtotal: string
    delivery: string
    salesTax: string
    bottomOther: string
    grandTotal: string
    sign: string
    signDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPO?: BoolFieldUpdateOperationsInput | boolean
    PO?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    attention?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    holdToShipYes?: BoolFieldUpdateOperationsInput | boolean
    holdToShipNo?: BoolFieldUpdateOperationsInput | boolean
    pickUp?: BoolFieldUpdateOperationsInput | boolean
    shipTo?: BoolFieldUpdateOperationsInput | boolean
    driverContact?: StringFieldUpdateOperationsInput | string
    driverTel?: StringFieldUpdateOperationsInput | string
    siteContact?: StringFieldUpdateOperationsInput | string
    siteTel?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    deliveryNotes?: StringFieldUpdateOperationsInput | string
    date1?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
    date2?: StringFieldUpdateOperationsInput | string
    time2?: StringFieldUpdateOperationsInput | string
    date3?: StringFieldUpdateOperationsInput | string
    time3?: StringFieldUpdateOperationsInput | string
    date4?: StringFieldUpdateOperationsInput | string
    time4?: StringFieldUpdateOperationsInput | string
    jobNumber?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    jobTask?: StringFieldUpdateOperationsInput | string
    officeContact?: StringFieldUpdateOperationsInput | string
    officeTel?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    orderedBy?: StringFieldUpdateOperationsInput | string
    rightDate?: StringFieldUpdateOperationsInput | string
    rightTime?: StringFieldUpdateOperationsInput | string
    coCe?: StringFieldUpdateOperationsInput | string
    rightNotes?: StringFieldUpdateOperationsInput | string
    approxCost?: StringFieldUpdateOperationsInput | string
    amex?: BoolFieldUpdateOperationsInput | boolean
    amexText?: StringFieldUpdateOperationsInput | string
    cod?: BoolFieldUpdateOperationsInput | boolean
    onAccount?: BoolFieldUpdateOperationsInput | boolean
    other?: BoolFieldUpdateOperationsInput | boolean
    otherText?: StringFieldUpdateOperationsInput | string
    taxExemptYes?: BoolFieldUpdateOperationsInput | boolean
    taxExemptNo?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteYes?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteNo?: BoolFieldUpdateOperationsInput | boolean
    ccPo?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorSignature?: StringFieldUpdateOperationsInput | string
    pmName?: StringFieldUpdateOperationsInput | string
    pmSignature?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedDate?: StringFieldUpdateOperationsInput | string
    rightBottomNotes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    um?: StringFieldUpdateOperationsInput | string
    unitCost?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    jobEquipNotes?: StringFieldUpdateOperationsInput | string
    costCode?: StringFieldUpdateOperationsInput | string
    payItem?: StringFieldUpdateOperationsInput | string
    subtotal?: StringFieldUpdateOperationsInput | string
    delivery?: StringFieldUpdateOperationsInput | string
    salesTax?: StringFieldUpdateOperationsInput | string
    bottomOther?: StringFieldUpdateOperationsInput | string
    grandTotal?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    signDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPO?: BoolFieldUpdateOperationsInput | boolean
    PO?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    attention?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    holdToShipYes?: BoolFieldUpdateOperationsInput | boolean
    holdToShipNo?: BoolFieldUpdateOperationsInput | boolean
    pickUp?: BoolFieldUpdateOperationsInput | boolean
    shipTo?: BoolFieldUpdateOperationsInput | boolean
    driverContact?: StringFieldUpdateOperationsInput | string
    driverTel?: StringFieldUpdateOperationsInput | string
    siteContact?: StringFieldUpdateOperationsInput | string
    siteTel?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    deliveryNotes?: StringFieldUpdateOperationsInput | string
    date1?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
    date2?: StringFieldUpdateOperationsInput | string
    time2?: StringFieldUpdateOperationsInput | string
    date3?: StringFieldUpdateOperationsInput | string
    time3?: StringFieldUpdateOperationsInput | string
    date4?: StringFieldUpdateOperationsInput | string
    time4?: StringFieldUpdateOperationsInput | string
    jobNumber?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    jobTask?: StringFieldUpdateOperationsInput | string
    officeContact?: StringFieldUpdateOperationsInput | string
    officeTel?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    orderedBy?: StringFieldUpdateOperationsInput | string
    rightDate?: StringFieldUpdateOperationsInput | string
    rightTime?: StringFieldUpdateOperationsInput | string
    coCe?: StringFieldUpdateOperationsInput | string
    rightNotes?: StringFieldUpdateOperationsInput | string
    approxCost?: StringFieldUpdateOperationsInput | string
    amex?: BoolFieldUpdateOperationsInput | boolean
    amexText?: StringFieldUpdateOperationsInput | string
    cod?: BoolFieldUpdateOperationsInput | boolean
    onAccount?: BoolFieldUpdateOperationsInput | boolean
    other?: BoolFieldUpdateOperationsInput | boolean
    otherText?: StringFieldUpdateOperationsInput | string
    taxExemptYes?: BoolFieldUpdateOperationsInput | boolean
    taxExemptNo?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteYes?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteNo?: BoolFieldUpdateOperationsInput | boolean
    ccPo?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorSignature?: StringFieldUpdateOperationsInput | string
    pmName?: StringFieldUpdateOperationsInput | string
    pmSignature?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedDate?: StringFieldUpdateOperationsInput | string
    rightBottomNotes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    um?: StringFieldUpdateOperationsInput | string
    unitCost?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    jobEquipNotes?: StringFieldUpdateOperationsInput | string
    costCode?: StringFieldUpdateOperationsInput | string
    payItem?: StringFieldUpdateOperationsInput | string
    subtotal?: StringFieldUpdateOperationsInput | string
    delivery?: StringFieldUpdateOperationsInput | string
    salesTax?: StringFieldUpdateOperationsInput | string
    bottomOther?: StringFieldUpdateOperationsInput | string
    grandTotal?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    signDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPO?: BoolFieldUpdateOperationsInput | boolean
    PO?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    attention?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    ext?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    holdToShipYes?: BoolFieldUpdateOperationsInput | boolean
    holdToShipNo?: BoolFieldUpdateOperationsInput | boolean
    pickUp?: BoolFieldUpdateOperationsInput | boolean
    shipTo?: BoolFieldUpdateOperationsInput | boolean
    driverContact?: StringFieldUpdateOperationsInput | string
    driverTel?: StringFieldUpdateOperationsInput | string
    siteContact?: StringFieldUpdateOperationsInput | string
    siteTel?: StringFieldUpdateOperationsInput | string
    address2?: StringFieldUpdateOperationsInput | string
    deliveryNotes?: StringFieldUpdateOperationsInput | string
    date1?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
    date2?: StringFieldUpdateOperationsInput | string
    time2?: StringFieldUpdateOperationsInput | string
    date3?: StringFieldUpdateOperationsInput | string
    time3?: StringFieldUpdateOperationsInput | string
    date4?: StringFieldUpdateOperationsInput | string
    time4?: StringFieldUpdateOperationsInput | string
    jobNumber?: StringFieldUpdateOperationsInput | string
    jobName?: StringFieldUpdateOperationsInput | string
    jobTask?: StringFieldUpdateOperationsInput | string
    officeContact?: StringFieldUpdateOperationsInput | string
    officeTel?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    orderedBy?: StringFieldUpdateOperationsInput | string
    rightDate?: StringFieldUpdateOperationsInput | string
    rightTime?: StringFieldUpdateOperationsInput | string
    coCe?: StringFieldUpdateOperationsInput | string
    rightNotes?: StringFieldUpdateOperationsInput | string
    approxCost?: StringFieldUpdateOperationsInput | string
    amex?: BoolFieldUpdateOperationsInput | boolean
    amexText?: StringFieldUpdateOperationsInput | string
    cod?: BoolFieldUpdateOperationsInput | boolean
    onAccount?: BoolFieldUpdateOperationsInput | boolean
    other?: BoolFieldUpdateOperationsInput | boolean
    otherText?: StringFieldUpdateOperationsInput | string
    taxExemptYes?: BoolFieldUpdateOperationsInput | boolean
    taxExemptNo?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteYes?: BoolFieldUpdateOperationsInput | boolean
    vendorQuoteNo?: BoolFieldUpdateOperationsInput | boolean
    ccPo?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    authorSignature?: StringFieldUpdateOperationsInput | string
    pmName?: StringFieldUpdateOperationsInput | string
    pmSignature?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    approvedDate?: StringFieldUpdateOperationsInput | string
    rightBottomNotes?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    um?: StringFieldUpdateOperationsInput | string
    unitCost?: StringFieldUpdateOperationsInput | string
    total?: StringFieldUpdateOperationsInput | string
    jobEquipNotes?: StringFieldUpdateOperationsInput | string
    costCode?: StringFieldUpdateOperationsInput | string
    payItem?: StringFieldUpdateOperationsInput | string
    subtotal?: StringFieldUpdateOperationsInput | string
    delivery?: StringFieldUpdateOperationsInput | string
    salesTax?: StringFieldUpdateOperationsInput | string
    bottomOther?: StringFieldUpdateOperationsInput | string
    grandTotal?: StringFieldUpdateOperationsInput | string
    sign?: StringFieldUpdateOperationsInput | string
    signDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}