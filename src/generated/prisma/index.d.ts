
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
 * Model POAudit
 * 
 */
export type POAudit = $Result.DefaultSelection<Prisma.$POAuditPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const POStatus: {
  SUBMITTED: 'SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  ARCHIVED: 'ARCHIVED'
};

export type POStatus = (typeof POStatus)[keyof typeof POStatus]


export const POAction: {
  VIEW: 'VIEW',
  EDIT: 'EDIT',
  ACCEPT: 'ACCEPT',
  REJECT: 'REJECT',
  SUBMIT: 'SUBMIT'
};

export type POAction = (typeof POAction)[keyof typeof POAction]


export const NotificationType: {
  NEW_REVIEW: 'NEW_REVIEW',
  REJECTED: 'REJECTED',
  APPROVED: 'APPROVED',
  EDITED: 'EDITED'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type POStatus = $Enums.POStatus

export const POStatus: typeof $Enums.POStatus

export type POAction = $Enums.POAction

export const POAction: typeof $Enums.POAction

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

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

  /**
   * `prisma.pOAudit`: Exposes CRUD operations for the **POAudit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more POAudits
    * const pOAudits = await prisma.pOAudit.findMany()
    * ```
    */
  get pOAudit(): Prisma.POAuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
    PurchaseOrder: 'PurchaseOrder',
    POAudit: 'POAudit',
    Notification: 'Notification'
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
      modelProps: "user" | "purchaseOrder" | "pOAudit" | "notification"
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
      POAudit: {
        payload: Prisma.$POAuditPayload<ExtArgs>
        fields: Prisma.POAuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.POAuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.POAuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>
          }
          findFirst: {
            args: Prisma.POAuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.POAuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>
          }
          findMany: {
            args: Prisma.POAuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>[]
          }
          create: {
            args: Prisma.POAuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>
          }
          createMany: {
            args: Prisma.POAuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.POAuditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>[]
          }
          delete: {
            args: Prisma.POAuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>
          }
          update: {
            args: Prisma.POAuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>
          }
          deleteMany: {
            args: Prisma.POAuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.POAuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.POAuditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>[]
          }
          upsert: {
            args: Prisma.POAuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POAuditPayload>
          }
          aggregate: {
            args: Prisma.POAuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePOAudit>
          }
          groupBy: {
            args: Prisma.POAuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<POAuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.POAuditCountArgs<ExtArgs>
            result: $Utils.Optional<POAuditCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    pOAudit?: POAuditOmit
    notification?: NotificationOmit
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
    children: number
    purchaseOrders: number
    poAudits: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | UserCountOutputTypeCountChildrenArgs
    purchaseOrders?: boolean | UserCountOutputTypeCountPurchaseOrdersArgs
    poAudits?: boolean | UserCountOutputTypeCountPoAuditsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchaseOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPoAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POAuditWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PurchaseOrderCountOutputType
   */

  export type PurchaseOrderCountOutputType = {
    poAudits: number
    notifications: number
  }

  export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poAudits?: boolean | PurchaseOrderCountOutputTypeCountPoAuditsArgs
    notifications?: boolean | PurchaseOrderCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderCountOutputType
     */
    select?: PurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountPoAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POAuditWhereInput
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
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
    isAdmin: boolean | null
    pfpUrl: string | null
    password: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phoneNumber: bigint | null
    empId: string | null
    isAdmin: boolean | null
    pfpUrl: string | null
    password: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phoneNumber: number
    empId: number
    isAdmin: number
    pfpUrl: number
    password: number
    parentId: number
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
    isAdmin?: true
    pfpUrl?: true
    password?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    empId?: true
    isAdmin?: true
    pfpUrl?: true
    password?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    empId?: true
    isAdmin?: true
    pfpUrl?: true
    password?: true
    parentId?: true
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
    isAdmin: boolean
    pfpUrl: string | null
    password: string
    parentId: string | null
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
    isAdmin?: boolean
    pfpUrl?: boolean
    password?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    purchaseOrders?: boolean | User$purchaseOrdersArgs<ExtArgs>
    poAudits?: boolean | User$poAuditsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    empId?: boolean
    isAdmin?: boolean
    pfpUrl?: boolean
    password?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    empId?: boolean
    isAdmin?: boolean
    pfpUrl?: boolean
    password?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    empId?: boolean
    isAdmin?: boolean
    pfpUrl?: boolean
    password?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phoneNumber" | "empId" | "isAdmin" | "pfpUrl" | "password" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    purchaseOrders?: boolean | User$purchaseOrdersArgs<ExtArgs>
    poAudits?: boolean | User$poAuditsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | User$parentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parent: Prisma.$UserPayload<ExtArgs> | null
      children: Prisma.$UserPayload<ExtArgs>[]
      purchaseOrders: Prisma.$PurchaseOrderPayload<ExtArgs>[]
      poAudits: Prisma.$POAuditPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      phoneNumber: bigint
      empId: string
      isAdmin: boolean
      pfpUrl: string | null
      password: string
      parentId: string | null
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
    parent<T extends User$parentArgs<ExtArgs> = {}>(args?: Subset<T, User$parentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends User$childrenArgs<ExtArgs> = {}>(args?: Subset<T, User$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseOrders<T extends User$purchaseOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$purchaseOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    poAudits<T extends User$poAuditsArgs<ExtArgs> = {}>(args?: Subset<T, User$poAuditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly pfpUrl: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly parentId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.parent
   */
  export type User$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.children
   */
  export type User$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.purchaseOrders
   */
  export type User$purchaseOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.poAudits
   */
  export type User$poAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    where?: POAuditWhereInput
    orderBy?: POAuditOrderByWithRelationInput | POAuditOrderByWithRelationInput[]
    cursor?: POAuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POAuditScalarFieldEnum | POAuditScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
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
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    currentLevel: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    currentLevel: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentLevel: number | null
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
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentLevel: number | null
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
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    userId: number
    currentLevel: number
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
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    currentLevel?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    currentLevel?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
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
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
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
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    userId?: true
    currentLevel?: true
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
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
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
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: string
    userId: string
    currentLevel: number
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
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
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
    userId?: boolean
    currentLevel?: boolean
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
    user?: boolean | UserDefaultArgs<ExtArgs>
    poAudits?: boolean | PurchaseOrder$poAuditsArgs<ExtArgs>
    notifications?: boolean | PurchaseOrder$notificationsArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentLevel?: boolean
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
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentLevel?: boolean
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
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    userId?: boolean
    currentLevel?: boolean
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
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "currentLevel" | "masterPO" | "PO" | "date" | "vendor" | "address1" | "attention" | "tel" | "ext" | "email" | "holdToShipYes" | "holdToShipNo" | "pickUp" | "shipTo" | "driverContact" | "driverTel" | "siteContact" | "siteTel" | "address2" | "deliveryNotes" | "date1" | "time1" | "date2" | "time2" | "date3" | "time3" | "date4" | "time4" | "jobNumber" | "jobName" | "jobTask" | "officeContact" | "officeTel" | "requestedBy" | "orderedBy" | "rightDate" | "rightTime" | "coCe" | "rightNotes" | "approxCost" | "amex" | "amexText" | "cod" | "onAccount" | "other" | "otherText" | "taxExemptYes" | "taxExemptNo" | "vendorQuoteYes" | "vendorQuoteNo" | "ccPo" | "author" | "authorSignature" | "pmName" | "pmSignature" | "approvedBy" | "approvedDate" | "rightBottomNotes" | "description" | "quantity" | "um" | "unitCost" | "total" | "jobEquipNotes" | "costCode" | "payItem" | "subtotal" | "delivery" | "salesTax" | "bottomOther" | "grandTotal" | "sign" | "signDate" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    poAudits?: boolean | PurchaseOrder$poAuditsArgs<ExtArgs>
    notifications?: boolean | PurchaseOrder$notificationsArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      poAudits: Prisma.$POAuditPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentLevel: number
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    poAudits<T extends PurchaseOrder$poAuditsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$poAuditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends PurchaseOrder$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"PurchaseOrder", 'String'>
    readonly currentLevel: FieldRef<"PurchaseOrder", 'Int'>
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
   * PurchaseOrder.poAudits
   */
  export type PurchaseOrder$poAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    where?: POAuditWhereInput
    orderBy?: POAuditOrderByWithRelationInput | POAuditOrderByWithRelationInput[]
    cursor?: POAuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POAuditScalarFieldEnum | POAuditScalarFieldEnum[]
  }

  /**
   * PurchaseOrder.notifications
   */
  export type PurchaseOrder$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
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
   * Model POAudit
   */

  export type AggregatePOAudit = {
    _count: POAuditCountAggregateOutputType | null
    _min: POAuditMinAggregateOutputType | null
    _max: POAuditMaxAggregateOutputType | null
  }

  export type POAuditMinAggregateOutputType = {
    id: string | null
    poId: string | null
    userId: string | null
    action: $Enums.POAction | null
    comment: string | null
    timestamp: Date | null
    status: $Enums.POStatus | null
  }

  export type POAuditMaxAggregateOutputType = {
    id: string | null
    poId: string | null
    userId: string | null
    action: $Enums.POAction | null
    comment: string | null
    timestamp: Date | null
    status: $Enums.POStatus | null
  }

  export type POAuditCountAggregateOutputType = {
    id: number
    poId: number
    userId: number
    action: number
    comment: number
    timestamp: number
    status: number
    _all: number
  }


  export type POAuditMinAggregateInputType = {
    id?: true
    poId?: true
    userId?: true
    action?: true
    comment?: true
    timestamp?: true
    status?: true
  }

  export type POAuditMaxAggregateInputType = {
    id?: true
    poId?: true
    userId?: true
    action?: true
    comment?: true
    timestamp?: true
    status?: true
  }

  export type POAuditCountAggregateInputType = {
    id?: true
    poId?: true
    userId?: true
    action?: true
    comment?: true
    timestamp?: true
    status?: true
    _all?: true
  }

  export type POAuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POAudit to aggregate.
     */
    where?: POAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POAudits to fetch.
     */
    orderBy?: POAuditOrderByWithRelationInput | POAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: POAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned POAudits
    **/
    _count?: true | POAuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: POAuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: POAuditMaxAggregateInputType
  }

  export type GetPOAuditAggregateType<T extends POAuditAggregateArgs> = {
        [P in keyof T & keyof AggregatePOAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePOAudit[P]>
      : GetScalarType<T[P], AggregatePOAudit[P]>
  }




  export type POAuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POAuditWhereInput
    orderBy?: POAuditOrderByWithAggregationInput | POAuditOrderByWithAggregationInput[]
    by: POAuditScalarFieldEnum[] | POAuditScalarFieldEnum
    having?: POAuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: POAuditCountAggregateInputType | true
    _min?: POAuditMinAggregateInputType
    _max?: POAuditMaxAggregateInputType
  }

  export type POAuditGroupByOutputType = {
    id: string
    poId: string
    userId: string
    action: $Enums.POAction
    comment: string | null
    timestamp: Date
    status: $Enums.POStatus
    _count: POAuditCountAggregateOutputType | null
    _min: POAuditMinAggregateOutputType | null
    _max: POAuditMaxAggregateOutputType | null
  }

  type GetPOAuditGroupByPayload<T extends POAuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<POAuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof POAuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], POAuditGroupByOutputType[P]>
            : GetScalarType<T[P], POAuditGroupByOutputType[P]>
        }
      >
    >


  export type POAuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    timestamp?: boolean
    status?: boolean
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOAudit"]>

  export type POAuditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    timestamp?: boolean
    status?: boolean
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOAudit"]>

  export type POAuditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    timestamp?: boolean
    status?: boolean
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOAudit"]>

  export type POAuditSelectScalar = {
    id?: boolean
    poId?: boolean
    userId?: boolean
    action?: boolean
    comment?: boolean
    timestamp?: boolean
    status?: boolean
  }

  export type POAuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poId" | "userId" | "action" | "comment" | "timestamp" | "status", ExtArgs["result"]["pOAudit"]>
  export type POAuditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type POAuditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type POAuditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $POAuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "POAudit"
    objects: {
      po: Prisma.$PurchaseOrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poId: string
      userId: string
      action: $Enums.POAction
      comment: string | null
      timestamp: Date
      status: $Enums.POStatus
    }, ExtArgs["result"]["pOAudit"]>
    composites: {}
  }

  type POAuditGetPayload<S extends boolean | null | undefined | POAuditDefaultArgs> = $Result.GetResult<Prisma.$POAuditPayload, S>

  type POAuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<POAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: POAuditCountAggregateInputType | true
    }

  export interface POAuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['POAudit'], meta: { name: 'POAudit' } }
    /**
     * Find zero or one POAudit that matches the filter.
     * @param {POAuditFindUniqueArgs} args - Arguments to find a POAudit
     * @example
     * // Get one POAudit
     * const pOAudit = await prisma.pOAudit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends POAuditFindUniqueArgs>(args: SelectSubset<T, POAuditFindUniqueArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one POAudit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {POAuditFindUniqueOrThrowArgs} args - Arguments to find a POAudit
     * @example
     * // Get one POAudit
     * const pOAudit = await prisma.pOAudit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends POAuditFindUniqueOrThrowArgs>(args: SelectSubset<T, POAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POAudit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POAuditFindFirstArgs} args - Arguments to find a POAudit
     * @example
     * // Get one POAudit
     * const pOAudit = await prisma.pOAudit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends POAuditFindFirstArgs>(args?: SelectSubset<T, POAuditFindFirstArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POAudit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POAuditFindFirstOrThrowArgs} args - Arguments to find a POAudit
     * @example
     * // Get one POAudit
     * const pOAudit = await prisma.pOAudit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends POAuditFindFirstOrThrowArgs>(args?: SelectSubset<T, POAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more POAudits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POAuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all POAudits
     * const pOAudits = await prisma.pOAudit.findMany()
     * 
     * // Get first 10 POAudits
     * const pOAudits = await prisma.pOAudit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pOAuditWithIdOnly = await prisma.pOAudit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends POAuditFindManyArgs>(args?: SelectSubset<T, POAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a POAudit.
     * @param {POAuditCreateArgs} args - Arguments to create a POAudit.
     * @example
     * // Create one POAudit
     * const POAudit = await prisma.pOAudit.create({
     *   data: {
     *     // ... data to create a POAudit
     *   }
     * })
     * 
     */
    create<T extends POAuditCreateArgs>(args: SelectSubset<T, POAuditCreateArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many POAudits.
     * @param {POAuditCreateManyArgs} args - Arguments to create many POAudits.
     * @example
     * // Create many POAudits
     * const pOAudit = await prisma.pOAudit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends POAuditCreateManyArgs>(args?: SelectSubset<T, POAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many POAudits and returns the data saved in the database.
     * @param {POAuditCreateManyAndReturnArgs} args - Arguments to create many POAudits.
     * @example
     * // Create many POAudits
     * const pOAudit = await prisma.pOAudit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many POAudits and only return the `id`
     * const pOAuditWithIdOnly = await prisma.pOAudit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends POAuditCreateManyAndReturnArgs>(args?: SelectSubset<T, POAuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a POAudit.
     * @param {POAuditDeleteArgs} args - Arguments to delete one POAudit.
     * @example
     * // Delete one POAudit
     * const POAudit = await prisma.pOAudit.delete({
     *   where: {
     *     // ... filter to delete one POAudit
     *   }
     * })
     * 
     */
    delete<T extends POAuditDeleteArgs>(args: SelectSubset<T, POAuditDeleteArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one POAudit.
     * @param {POAuditUpdateArgs} args - Arguments to update one POAudit.
     * @example
     * // Update one POAudit
     * const pOAudit = await prisma.pOAudit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends POAuditUpdateArgs>(args: SelectSubset<T, POAuditUpdateArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more POAudits.
     * @param {POAuditDeleteManyArgs} args - Arguments to filter POAudits to delete.
     * @example
     * // Delete a few POAudits
     * const { count } = await prisma.pOAudit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends POAuditDeleteManyArgs>(args?: SelectSubset<T, POAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POAuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many POAudits
     * const pOAudit = await prisma.pOAudit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends POAuditUpdateManyArgs>(args: SelectSubset<T, POAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POAudits and returns the data updated in the database.
     * @param {POAuditUpdateManyAndReturnArgs} args - Arguments to update many POAudits.
     * @example
     * // Update many POAudits
     * const pOAudit = await prisma.pOAudit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more POAudits and only return the `id`
     * const pOAuditWithIdOnly = await prisma.pOAudit.updateManyAndReturn({
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
    updateManyAndReturn<T extends POAuditUpdateManyAndReturnArgs>(args: SelectSubset<T, POAuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one POAudit.
     * @param {POAuditUpsertArgs} args - Arguments to update or create a POAudit.
     * @example
     * // Update or create a POAudit
     * const pOAudit = await prisma.pOAudit.upsert({
     *   create: {
     *     // ... data to create a POAudit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the POAudit we want to update
     *   }
     * })
     */
    upsert<T extends POAuditUpsertArgs>(args: SelectSubset<T, POAuditUpsertArgs<ExtArgs>>): Prisma__POAuditClient<$Result.GetResult<Prisma.$POAuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of POAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POAuditCountArgs} args - Arguments to filter POAudits to count.
     * @example
     * // Count the number of POAudits
     * const count = await prisma.pOAudit.count({
     *   where: {
     *     // ... the filter for the POAudits we want to count
     *   }
     * })
    **/
    count<T extends POAuditCountArgs>(
      args?: Subset<T, POAuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], POAuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a POAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POAuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends POAuditAggregateArgs>(args: Subset<T, POAuditAggregateArgs>): Prisma.PrismaPromise<GetPOAuditAggregateType<T>>

    /**
     * Group by POAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POAuditGroupByArgs} args - Group by arguments.
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
      T extends POAuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: POAuditGroupByArgs['orderBy'] }
        : { orderBy?: POAuditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, POAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPOAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the POAudit model
   */
  readonly fields: POAuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for POAudit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__POAuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    po<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the POAudit model
   */
  interface POAuditFieldRefs {
    readonly id: FieldRef<"POAudit", 'String'>
    readonly poId: FieldRef<"POAudit", 'String'>
    readonly userId: FieldRef<"POAudit", 'String'>
    readonly action: FieldRef<"POAudit", 'POAction'>
    readonly comment: FieldRef<"POAudit", 'String'>
    readonly timestamp: FieldRef<"POAudit", 'DateTime'>
    readonly status: FieldRef<"POAudit", 'POStatus'>
  }
    

  // Custom InputTypes
  /**
   * POAudit findUnique
   */
  export type POAuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * Filter, which POAudit to fetch.
     */
    where: POAuditWhereUniqueInput
  }

  /**
   * POAudit findUniqueOrThrow
   */
  export type POAuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * Filter, which POAudit to fetch.
     */
    where: POAuditWhereUniqueInput
  }

  /**
   * POAudit findFirst
   */
  export type POAuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * Filter, which POAudit to fetch.
     */
    where?: POAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POAudits to fetch.
     */
    orderBy?: POAuditOrderByWithRelationInput | POAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POAudits.
     */
    cursor?: POAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POAudits.
     */
    distinct?: POAuditScalarFieldEnum | POAuditScalarFieldEnum[]
  }

  /**
   * POAudit findFirstOrThrow
   */
  export type POAuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * Filter, which POAudit to fetch.
     */
    where?: POAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POAudits to fetch.
     */
    orderBy?: POAuditOrderByWithRelationInput | POAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POAudits.
     */
    cursor?: POAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POAudits.
     */
    distinct?: POAuditScalarFieldEnum | POAuditScalarFieldEnum[]
  }

  /**
   * POAudit findMany
   */
  export type POAuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * Filter, which POAudits to fetch.
     */
    where?: POAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POAudits to fetch.
     */
    orderBy?: POAuditOrderByWithRelationInput | POAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing POAudits.
     */
    cursor?: POAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POAudits.
     */
    skip?: number
    distinct?: POAuditScalarFieldEnum | POAuditScalarFieldEnum[]
  }

  /**
   * POAudit create
   */
  export type POAuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * The data needed to create a POAudit.
     */
    data: XOR<POAuditCreateInput, POAuditUncheckedCreateInput>
  }

  /**
   * POAudit createMany
   */
  export type POAuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many POAudits.
     */
    data: POAuditCreateManyInput | POAuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * POAudit createManyAndReturn
   */
  export type POAuditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * The data used to create many POAudits.
     */
    data: POAuditCreateManyInput | POAuditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * POAudit update
   */
  export type POAuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * The data needed to update a POAudit.
     */
    data: XOR<POAuditUpdateInput, POAuditUncheckedUpdateInput>
    /**
     * Choose, which POAudit to update.
     */
    where: POAuditWhereUniqueInput
  }

  /**
   * POAudit updateMany
   */
  export type POAuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update POAudits.
     */
    data: XOR<POAuditUpdateManyMutationInput, POAuditUncheckedUpdateManyInput>
    /**
     * Filter which POAudits to update
     */
    where?: POAuditWhereInput
    /**
     * Limit how many POAudits to update.
     */
    limit?: number
  }

  /**
   * POAudit updateManyAndReturn
   */
  export type POAuditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * The data used to update POAudits.
     */
    data: XOR<POAuditUpdateManyMutationInput, POAuditUncheckedUpdateManyInput>
    /**
     * Filter which POAudits to update
     */
    where?: POAuditWhereInput
    /**
     * Limit how many POAudits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * POAudit upsert
   */
  export type POAuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * The filter to search for the POAudit to update in case it exists.
     */
    where: POAuditWhereUniqueInput
    /**
     * In case the POAudit found by the `where` argument doesn't exist, create a new POAudit with this data.
     */
    create: XOR<POAuditCreateInput, POAuditUncheckedCreateInput>
    /**
     * In case the POAudit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<POAuditUpdateInput, POAuditUncheckedUpdateInput>
  }

  /**
   * POAudit delete
   */
  export type POAuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
    /**
     * Filter which POAudit to delete.
     */
    where: POAuditWhereUniqueInput
  }

  /**
   * POAudit deleteMany
   */
  export type POAuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POAudits to delete
     */
    where?: POAuditWhereInput
    /**
     * Limit how many POAudits to delete.
     */
    limit?: number
  }

  /**
   * POAudit without action
   */
  export type POAuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POAudit
     */
    select?: POAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POAudit
     */
    omit?: POAuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POAuditInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    poId: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    poId: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    poId: number
    userId: number
    type: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    poId?: true
    userId?: true
    type?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    poId?: true
    userId?: true
    type?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    poId?: true
    userId?: true
    type?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    poId: string
    userId: string
    type: $Enums.NotificationType
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poId?: boolean
    userId?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poId?: boolean
    userId?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poId?: boolean
    userId?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    poId?: boolean
    userId?: boolean
    type?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poId" | "userId" | "type" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    po?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      po: Prisma.$PurchaseOrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poId: string
      userId: string
      type: $Enums.NotificationType
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    po<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly poId: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    isAdmin: 'isAdmin',
    pfpUrl: 'pfpUrl',
    password: 'password',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentLevel: 'currentLevel',
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
    updatedAt: 'updatedAt'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const POAuditScalarFieldEnum: {
    id: 'id',
    poId: 'poId',
    userId: 'userId',
    action: 'action',
    comment: 'comment',
    timestamp: 'timestamp',
    status: 'status'
  };

  export type POAuditScalarFieldEnum = (typeof POAuditScalarFieldEnum)[keyof typeof POAuditScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    poId: 'poId',
    userId: 'userId',
    type: 'type',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'POAction'
   */
  export type EnumPOActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'POAction'>
    


  /**
   * Reference to a field of type 'POAction[]'
   */
  export type ListEnumPOActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'POAction[]'>
    


  /**
   * Reference to a field of type 'POStatus'
   */
  export type EnumPOStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'POStatus'>
    


  /**
   * Reference to a field of type 'POStatus[]'
   */
  export type ListEnumPOStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'POStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


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
    isAdmin?: BoolFilter<"User"> | boolean
    pfpUrl?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    parentId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    purchaseOrders?: PurchaseOrderListRelationFilter
    poAudits?: POAuditListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    isAdmin?: SortOrder
    pfpUrl?: SortOrderInput | SortOrder
    password?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: UserOrderByWithRelationInput
    children?: UserOrderByRelationAggregateInput
    purchaseOrders?: PurchaseOrderOrderByRelationAggregateInput
    poAudits?: POAuditOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
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
    isAdmin?: BoolFilter<"User"> | boolean
    pfpUrl?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    parentId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    purchaseOrders?: PurchaseOrderListRelationFilter
    poAudits?: POAuditListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    isAdmin?: SortOrder
    pfpUrl?: SortOrderInput | SortOrder
    password?: SortOrder
    parentId?: SortOrderInput | SortOrder
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
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    pfpUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    parentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: StringFilter<"PurchaseOrder"> | string
    userId?: StringFilter<"PurchaseOrder"> | string
    currentLevel?: IntFilter<"PurchaseOrder"> | number
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
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    poAudits?: POAuditListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
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
    user?: UserOrderByWithRelationInput
    poAudits?: POAuditOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    userId?: StringFilter<"PurchaseOrder"> | string
    currentLevel?: IntFilter<"PurchaseOrder"> | number
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
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    poAudits?: POAuditListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
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
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    userId?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    currentLevel?: IntWithAggregatesFilter<"PurchaseOrder"> | number
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
  }

  export type POAuditWhereInput = {
    AND?: POAuditWhereInput | POAuditWhereInput[]
    OR?: POAuditWhereInput[]
    NOT?: POAuditWhereInput | POAuditWhereInput[]
    id?: StringFilter<"POAudit"> | string
    poId?: StringFilter<"POAudit"> | string
    userId?: StringFilter<"POAudit"> | string
    action?: EnumPOActionFilter<"POAudit"> | $Enums.POAction
    comment?: StringNullableFilter<"POAudit"> | string | null
    timestamp?: DateTimeFilter<"POAudit"> | Date | string
    status?: EnumPOStatusFilter<"POAudit"> | $Enums.POStatus
    po?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type POAuditOrderByWithRelationInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    po?: PurchaseOrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type POAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: POAuditWhereInput | POAuditWhereInput[]
    OR?: POAuditWhereInput[]
    NOT?: POAuditWhereInput | POAuditWhereInput[]
    poId?: StringFilter<"POAudit"> | string
    userId?: StringFilter<"POAudit"> | string
    action?: EnumPOActionFilter<"POAudit"> | $Enums.POAction
    comment?: StringNullableFilter<"POAudit"> | string | null
    timestamp?: DateTimeFilter<"POAudit"> | Date | string
    status?: EnumPOStatusFilter<"POAudit"> | $Enums.POStatus
    po?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type POAuditOrderByWithAggregationInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    _count?: POAuditCountOrderByAggregateInput
    _max?: POAuditMaxOrderByAggregateInput
    _min?: POAuditMinOrderByAggregateInput
  }

  export type POAuditScalarWhereWithAggregatesInput = {
    AND?: POAuditScalarWhereWithAggregatesInput | POAuditScalarWhereWithAggregatesInput[]
    OR?: POAuditScalarWhereWithAggregatesInput[]
    NOT?: POAuditScalarWhereWithAggregatesInput | POAuditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"POAudit"> | string
    poId?: StringWithAggregatesFilter<"POAudit"> | string
    userId?: StringWithAggregatesFilter<"POAudit"> | string
    action?: EnumPOActionWithAggregatesFilter<"POAudit"> | $Enums.POAction
    comment?: StringNullableWithAggregatesFilter<"POAudit"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"POAudit"> | Date | string
    status?: EnumPOStatusWithAggregatesFilter<"POAudit"> | $Enums.POStatus
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    poId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    po?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    po?: PurchaseOrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    poId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    po?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    poId?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutUserInput
    poAudits?: POAuditCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
    poAudits?: POAuditUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
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
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderCreateInput = {
    id?: string
    currentLevel: number
    masterPO?: boolean
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
    user: UserCreateNestedOneWithoutPurchaseOrdersInput
    poAudits?: POAuditCreateNestedManyWithoutPoInput
    notifications?: NotificationCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: string
    userId: string
    currentLevel: number
    masterPO?: boolean
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
    poAudits?: POAuditUncheckedCreateNestedManyWithoutPoInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    user?: UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput
    poAudits?: POAuditUpdateManyWithoutPoNestedInput
    notifications?: NotificationUpdateManyWithoutPoNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    poAudits?: POAuditUncheckedUpdateManyWithoutPoNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPoNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: string
    userId: string
    currentLevel: number
    masterPO?: boolean
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

  export type PurchaseOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    userId?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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

  export type POAuditCreateInput = {
    id?: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
    po: PurchaseOrderCreateNestedOneWithoutPoAuditsInput
    user: UserCreateNestedOneWithoutPoAuditsInput
  }

  export type POAuditUncheckedCreateInput = {
    id?: string
    poId: string
    userId: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
  }

  export type POAuditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
    po?: PurchaseOrderUpdateOneRequiredWithoutPoAuditsNestedInput
    user?: UserUpdateOneRequiredWithoutPoAuditsNestedInput
  }

  export type POAuditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
  }

  export type POAuditCreateManyInput = {
    id?: string
    poId: string
    userId: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
  }

  export type POAuditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
  }

  export type POAuditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    po: PurchaseOrderCreateNestedOneWithoutNotificationsInput
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    poId: string
    userId: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    po?: PurchaseOrderUpdateOneRequiredWithoutNotificationsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    poId: string
    userId: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PurchaseOrderListRelationFilter = {
    every?: PurchaseOrderWhereInput
    some?: PurchaseOrderWhereInput
    none?: PurchaseOrderWhereInput
  }

  export type POAuditListRelationFilter = {
    every?: POAuditWhereInput
    some?: POAuditWhereInput
    none?: POAuditWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type POAuditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    isAdmin?: SortOrder
    pfpUrl?: SortOrder
    password?: SortOrder
    parentId?: SortOrder
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
    isAdmin?: SortOrder
    pfpUrl?: SortOrder
    password?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    empId?: SortOrder
    isAdmin?: SortOrder
    pfpUrl?: SortOrder
    password?: SortOrder
    parentId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
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
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    currentLevel?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
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
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentLevel?: SortOrder
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
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    currentLevel?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPOActionFilter<$PrismaModel = never> = {
    equals?: $Enums.POAction | EnumPOActionFieldRefInput<$PrismaModel>
    in?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPOActionFilter<$PrismaModel> | $Enums.POAction
  }

  export type EnumPOStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.POStatus | EnumPOStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPOStatusFilter<$PrismaModel> | $Enums.POStatus
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type POAuditCountOrderByAggregateInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type POAuditMaxOrderByAggregateInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type POAuditMinOrderByAggregateInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type EnumPOActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.POAction | EnumPOActionFieldRefInput<$PrismaModel>
    in?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPOActionWithAggregatesFilter<$PrismaModel> | $Enums.POAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPOActionFilter<$PrismaModel>
    _max?: NestedEnumPOActionFilter<$PrismaModel>
  }

  export type EnumPOStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.POStatus | EnumPOStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPOStatusWithAggregatesFilter<$PrismaModel> | $Enums.POStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPOStatusFilter<$PrismaModel>
    _max?: NestedEnumPOStatusFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    poId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutChildrenInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PurchaseOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type POAuditCreateNestedManyWithoutUserInput = {
    create?: XOR<POAuditCreateWithoutUserInput, POAuditUncheckedCreateWithoutUserInput> | POAuditCreateWithoutUserInput[] | POAuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutUserInput | POAuditCreateOrConnectWithoutUserInput[]
    createMany?: POAuditCreateManyUserInputEnvelope
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput> | PurchaseOrderCreateWithoutUserInput[] | PurchaseOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutUserInput | PurchaseOrderCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseOrderCreateManyUserInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type POAuditUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<POAuditCreateWithoutUserInput, POAuditUncheckedCreateWithoutUserInput> | POAuditCreateWithoutUserInput[] | POAuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutUserInput | POAuditCreateOrConnectWithoutUserInput[]
    createMany?: POAuditCreateManyUserInputEnvelope
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    upsert?: UserUpsertWithoutChildrenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildrenInput, UserUpdateWithoutChildrenInput>, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type POAuditUpdateManyWithoutUserNestedInput = {
    create?: XOR<POAuditCreateWithoutUserInput, POAuditUncheckedCreateWithoutUserInput> | POAuditCreateWithoutUserInput[] | POAuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutUserInput | POAuditCreateOrConnectWithoutUserInput[]
    upsert?: POAuditUpsertWithWhereUniqueWithoutUserInput | POAuditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: POAuditCreateManyUserInputEnvelope
    set?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    disconnect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    delete?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    update?: POAuditUpdateWithWhereUniqueWithoutUserInput | POAuditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: POAuditUpdateManyWithWhereWithoutUserInput | POAuditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: POAuditScalarWhereInput | POAuditScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type POAuditUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<POAuditCreateWithoutUserInput, POAuditUncheckedCreateWithoutUserInput> | POAuditCreateWithoutUserInput[] | POAuditUncheckedCreateWithoutUserInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutUserInput | POAuditCreateOrConnectWithoutUserInput[]
    upsert?: POAuditUpsertWithWhereUniqueWithoutUserInput | POAuditUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: POAuditCreateManyUserInputEnvelope
    set?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    disconnect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    delete?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    update?: POAuditUpdateWithWhereUniqueWithoutUserInput | POAuditUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: POAuditUpdateManyWithWhereWithoutUserInput | POAuditUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: POAuditScalarWhereInput | POAuditScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchaseOrdersInput = {
    create?: XOR<UserCreateWithoutPurchaseOrdersInput, UserUncheckedCreateWithoutPurchaseOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type POAuditCreateNestedManyWithoutPoInput = {
    create?: XOR<POAuditCreateWithoutPoInput, POAuditUncheckedCreateWithoutPoInput> | POAuditCreateWithoutPoInput[] | POAuditUncheckedCreateWithoutPoInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutPoInput | POAuditCreateOrConnectWithoutPoInput[]
    createMany?: POAuditCreateManyPoInputEnvelope
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutPoInput = {
    create?: XOR<NotificationCreateWithoutPoInput, NotificationUncheckedCreateWithoutPoInput> | NotificationCreateWithoutPoInput[] | NotificationUncheckedCreateWithoutPoInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoInput | NotificationCreateOrConnectWithoutPoInput[]
    createMany?: NotificationCreateManyPoInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type POAuditUncheckedCreateNestedManyWithoutPoInput = {
    create?: XOR<POAuditCreateWithoutPoInput, POAuditUncheckedCreateWithoutPoInput> | POAuditCreateWithoutPoInput[] | POAuditUncheckedCreateWithoutPoInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutPoInput | POAuditCreateOrConnectWithoutPoInput[]
    createMany?: POAuditCreateManyPoInputEnvelope
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPoInput = {
    create?: XOR<NotificationCreateWithoutPoInput, NotificationUncheckedCreateWithoutPoInput> | NotificationCreateWithoutPoInput[] | NotificationUncheckedCreateWithoutPoInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoInput | NotificationCreateOrConnectWithoutPoInput[]
    createMany?: NotificationCreateManyPoInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput = {
    create?: XOR<UserCreateWithoutPurchaseOrdersInput, UserUncheckedCreateWithoutPurchaseOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchaseOrdersInput
    upsert?: UserUpsertWithoutPurchaseOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchaseOrdersInput, UserUpdateWithoutPurchaseOrdersInput>, UserUncheckedUpdateWithoutPurchaseOrdersInput>
  }

  export type POAuditUpdateManyWithoutPoNestedInput = {
    create?: XOR<POAuditCreateWithoutPoInput, POAuditUncheckedCreateWithoutPoInput> | POAuditCreateWithoutPoInput[] | POAuditUncheckedCreateWithoutPoInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutPoInput | POAuditCreateOrConnectWithoutPoInput[]
    upsert?: POAuditUpsertWithWhereUniqueWithoutPoInput | POAuditUpsertWithWhereUniqueWithoutPoInput[]
    createMany?: POAuditCreateManyPoInputEnvelope
    set?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    disconnect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    delete?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    update?: POAuditUpdateWithWhereUniqueWithoutPoInput | POAuditUpdateWithWhereUniqueWithoutPoInput[]
    updateMany?: POAuditUpdateManyWithWhereWithoutPoInput | POAuditUpdateManyWithWhereWithoutPoInput[]
    deleteMany?: POAuditScalarWhereInput | POAuditScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutPoNestedInput = {
    create?: XOR<NotificationCreateWithoutPoInput, NotificationUncheckedCreateWithoutPoInput> | NotificationCreateWithoutPoInput[] | NotificationUncheckedCreateWithoutPoInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoInput | NotificationCreateOrConnectWithoutPoInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPoInput | NotificationUpsertWithWhereUniqueWithoutPoInput[]
    createMany?: NotificationCreateManyPoInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPoInput | NotificationUpdateWithWhereUniqueWithoutPoInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPoInput | NotificationUpdateManyWithWhereWithoutPoInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type POAuditUncheckedUpdateManyWithoutPoNestedInput = {
    create?: XOR<POAuditCreateWithoutPoInput, POAuditUncheckedCreateWithoutPoInput> | POAuditCreateWithoutPoInput[] | POAuditUncheckedCreateWithoutPoInput[]
    connectOrCreate?: POAuditCreateOrConnectWithoutPoInput | POAuditCreateOrConnectWithoutPoInput[]
    upsert?: POAuditUpsertWithWhereUniqueWithoutPoInput | POAuditUpsertWithWhereUniqueWithoutPoInput[]
    createMany?: POAuditCreateManyPoInputEnvelope
    set?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    disconnect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    delete?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    connect?: POAuditWhereUniqueInput | POAuditWhereUniqueInput[]
    update?: POAuditUpdateWithWhereUniqueWithoutPoInput | POAuditUpdateWithWhereUniqueWithoutPoInput[]
    updateMany?: POAuditUpdateManyWithWhereWithoutPoInput | POAuditUpdateManyWithWhereWithoutPoInput[]
    deleteMany?: POAuditScalarWhereInput | POAuditScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutPoNestedInput = {
    create?: XOR<NotificationCreateWithoutPoInput, NotificationUncheckedCreateWithoutPoInput> | NotificationCreateWithoutPoInput[] | NotificationUncheckedCreateWithoutPoInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoInput | NotificationCreateOrConnectWithoutPoInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPoInput | NotificationUpsertWithWhereUniqueWithoutPoInput[]
    createMany?: NotificationCreateManyPoInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPoInput | NotificationUpdateWithWhereUniqueWithoutPoInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPoInput | NotificationUpdateManyWithWhereWithoutPoInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PurchaseOrderCreateNestedOneWithoutPoAuditsInput = {
    create?: XOR<PurchaseOrderCreateWithoutPoAuditsInput, PurchaseOrderUncheckedCreateWithoutPoAuditsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPoAuditsInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPoAuditsInput = {
    create?: XOR<UserCreateWithoutPoAuditsInput, UserUncheckedCreateWithoutPoAuditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoAuditsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPOActionFieldUpdateOperationsInput = {
    set?: $Enums.POAction
  }

  export type EnumPOStatusFieldUpdateOperationsInput = {
    set?: $Enums.POStatus
  }

  export type PurchaseOrderUpdateOneRequiredWithoutPoAuditsNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutPoAuditsInput, PurchaseOrderUncheckedCreateWithoutPoAuditsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPoAuditsInput
    upsert?: PurchaseOrderUpsertWithoutPoAuditsInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutPoAuditsInput, PurchaseOrderUpdateWithoutPoAuditsInput>, PurchaseOrderUncheckedUpdateWithoutPoAuditsInput>
  }

  export type UserUpdateOneRequiredWithoutPoAuditsNestedInput = {
    create?: XOR<UserCreateWithoutPoAuditsInput, UserUncheckedCreateWithoutPoAuditsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoAuditsInput
    upsert?: UserUpsertWithoutPoAuditsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPoAuditsInput, UserUpdateWithoutPoAuditsInput>, UserUncheckedUpdateWithoutPoAuditsInput>
  }

  export type PurchaseOrderCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PurchaseOrderCreateWithoutNotificationsInput, PurchaseOrderUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutNotificationsInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type PurchaseOrderUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutNotificationsInput, PurchaseOrderUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutNotificationsInput
    upsert?: PurchaseOrderUpsertWithoutNotificationsInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutNotificationsInput, PurchaseOrderUpdateWithoutNotificationsInput>, PurchaseOrderUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumPOActionFilter<$PrismaModel = never> = {
    equals?: $Enums.POAction | EnumPOActionFieldRefInput<$PrismaModel>
    in?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPOActionFilter<$PrismaModel> | $Enums.POAction
  }

  export type NestedEnumPOStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.POStatus | EnumPOStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPOStatusFilter<$PrismaModel> | $Enums.POStatus
  }

  export type NestedEnumPOActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.POAction | EnumPOActionFieldRefInput<$PrismaModel>
    in?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.POAction[] | ListEnumPOActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPOActionWithAggregatesFilter<$PrismaModel> | $Enums.POAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPOActionFilter<$PrismaModel>
    _max?: NestedEnumPOActionFilter<$PrismaModel>
  }

  export type NestedEnumPOStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.POStatus | EnumPOStatusFieldRefInput<$PrismaModel>
    in?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.POStatus[] | ListEnumPOStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPOStatusWithAggregatesFilter<$PrismaModel> | $Enums.POStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPOStatusFilter<$PrismaModel>
    _max?: NestedEnumPOStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutChildrenInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutUserInput
    poAudits?: POAuditCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChildrenInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
    poAudits?: POAuditUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChildrenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutUserInput
    poAudits?: POAuditCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
    poAudits?: POAuditUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserCreateManyParentInputEnvelope = {
    data: UserCreateManyParentInput | UserCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderCreateWithoutUserInput = {
    id?: string
    currentLevel: number
    masterPO?: boolean
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
    poAudits?: POAuditCreateNestedManyWithoutPoInput
    notifications?: NotificationCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderUncheckedCreateWithoutUserInput = {
    id?: string
    currentLevel: number
    masterPO?: boolean
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
    poAudits?: POAuditUncheckedCreateNestedManyWithoutPoInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderCreateOrConnectWithoutUserInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutUserInput, PurchaseOrderUncheckedCreateWithoutUserInput>
  }

  export type PurchaseOrderCreateManyUserInputEnvelope = {
    data: PurchaseOrderCreateManyUserInput | PurchaseOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type POAuditCreateWithoutUserInput = {
    id?: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
    po: PurchaseOrderCreateNestedOneWithoutPoAuditsInput
  }

  export type POAuditUncheckedCreateWithoutUserInput = {
    id?: string
    poId: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
  }

  export type POAuditCreateOrConnectWithoutUserInput = {
    where: POAuditWhereUniqueInput
    create: XOR<POAuditCreateWithoutUserInput, POAuditUncheckedCreateWithoutUserInput>
  }

  export type POAuditCreateManyUserInputEnvelope = {
    data: POAuditCreateManyUserInput | POAuditCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    po: PurchaseOrderCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    poId: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChildrenInput = {
    update: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildrenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateManyWithWhereWithoutParentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutParentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phoneNumber?: BigIntFilter<"User"> | bigint | number
    empId?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    pfpUrl?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    parentId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
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
    userId?: StringFilter<"PurchaseOrder"> | string
    currentLevel?: IntFilter<"PurchaseOrder"> | number
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
  }

  export type POAuditUpsertWithWhereUniqueWithoutUserInput = {
    where: POAuditWhereUniqueInput
    update: XOR<POAuditUpdateWithoutUserInput, POAuditUncheckedUpdateWithoutUserInput>
    create: XOR<POAuditCreateWithoutUserInput, POAuditUncheckedCreateWithoutUserInput>
  }

  export type POAuditUpdateWithWhereUniqueWithoutUserInput = {
    where: POAuditWhereUniqueInput
    data: XOR<POAuditUpdateWithoutUserInput, POAuditUncheckedUpdateWithoutUserInput>
  }

  export type POAuditUpdateManyWithWhereWithoutUserInput = {
    where: POAuditScalarWhereInput
    data: XOR<POAuditUpdateManyMutationInput, POAuditUncheckedUpdateManyWithoutUserInput>
  }

  export type POAuditScalarWhereInput = {
    AND?: POAuditScalarWhereInput | POAuditScalarWhereInput[]
    OR?: POAuditScalarWhereInput[]
    NOT?: POAuditScalarWhereInput | POAuditScalarWhereInput[]
    id?: StringFilter<"POAudit"> | string
    poId?: StringFilter<"POAudit"> | string
    userId?: StringFilter<"POAudit"> | string
    action?: EnumPOActionFilter<"POAudit"> | $Enums.POAction
    comment?: StringNullableFilter<"POAudit"> | string | null
    timestamp?: DateTimeFilter<"POAudit"> | Date | string
    status?: EnumPOStatusFilter<"POAudit"> | $Enums.POStatus
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    poId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutPurchaseOrdersInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    poAudits?: POAuditCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchaseOrdersInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    poAudits?: POAuditUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchaseOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchaseOrdersInput, UserUncheckedCreateWithoutPurchaseOrdersInput>
  }

  export type POAuditCreateWithoutPoInput = {
    id?: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
    user: UserCreateNestedOneWithoutPoAuditsInput
  }

  export type POAuditUncheckedCreateWithoutPoInput = {
    id?: string
    userId: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
  }

  export type POAuditCreateOrConnectWithoutPoInput = {
    where: POAuditWhereUniqueInput
    create: XOR<POAuditCreateWithoutPoInput, POAuditUncheckedCreateWithoutPoInput>
  }

  export type POAuditCreateManyPoInputEnvelope = {
    data: POAuditCreateManyPoInput | POAuditCreateManyPoInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutPoInput = {
    id?: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutPoInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutPoInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPoInput, NotificationUncheckedCreateWithoutPoInput>
  }

  export type NotificationCreateManyPoInputEnvelope = {
    data: NotificationCreateManyPoInput | NotificationCreateManyPoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPurchaseOrdersInput = {
    update: XOR<UserUpdateWithoutPurchaseOrdersInput, UserUncheckedUpdateWithoutPurchaseOrdersInput>
    create: XOR<UserCreateWithoutPurchaseOrdersInput, UserUncheckedCreateWithoutPurchaseOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchaseOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchaseOrdersInput, UserUncheckedUpdateWithoutPurchaseOrdersInput>
  }

  export type UserUpdateWithoutPurchaseOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    poAudits?: POAuditUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchaseOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    poAudits?: POAuditUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type POAuditUpsertWithWhereUniqueWithoutPoInput = {
    where: POAuditWhereUniqueInput
    update: XOR<POAuditUpdateWithoutPoInput, POAuditUncheckedUpdateWithoutPoInput>
    create: XOR<POAuditCreateWithoutPoInput, POAuditUncheckedCreateWithoutPoInput>
  }

  export type POAuditUpdateWithWhereUniqueWithoutPoInput = {
    where: POAuditWhereUniqueInput
    data: XOR<POAuditUpdateWithoutPoInput, POAuditUncheckedUpdateWithoutPoInput>
  }

  export type POAuditUpdateManyWithWhereWithoutPoInput = {
    where: POAuditScalarWhereInput
    data: XOR<POAuditUpdateManyMutationInput, POAuditUncheckedUpdateManyWithoutPoInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutPoInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPoInput, NotificationUncheckedUpdateWithoutPoInput>
    create: XOR<NotificationCreateWithoutPoInput, NotificationUncheckedCreateWithoutPoInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPoInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPoInput, NotificationUncheckedUpdateWithoutPoInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPoInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPoInput>
  }

  export type PurchaseOrderCreateWithoutPoAuditsInput = {
    id?: string
    currentLevel: number
    masterPO?: boolean
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
    user: UserCreateNestedOneWithoutPurchaseOrdersInput
    notifications?: NotificationCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderUncheckedCreateWithoutPoAuditsInput = {
    id?: string
    userId: string
    currentLevel: number
    masterPO?: boolean
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
    notifications?: NotificationUncheckedCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderCreateOrConnectWithoutPoAuditsInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutPoAuditsInput, PurchaseOrderUncheckedCreateWithoutPoAuditsInput>
  }

  export type UserCreateWithoutPoAuditsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPoAuditsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPoAuditsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPoAuditsInput, UserUncheckedCreateWithoutPoAuditsInput>
  }

  export type PurchaseOrderUpsertWithoutPoAuditsInput = {
    update: XOR<PurchaseOrderUpdateWithoutPoAuditsInput, PurchaseOrderUncheckedUpdateWithoutPoAuditsInput>
    create: XOR<PurchaseOrderCreateWithoutPoAuditsInput, PurchaseOrderUncheckedCreateWithoutPoAuditsInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutPoAuditsInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutPoAuditsInput, PurchaseOrderUncheckedUpdateWithoutPoAuditsInput>
  }

  export type PurchaseOrderUpdateWithoutPoAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    user?: UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput
    notifications?: NotificationUpdateManyWithoutPoNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutPoAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    notifications?: NotificationUncheckedUpdateManyWithoutPoNestedInput
  }

  export type UserUpsertWithoutPoAuditsInput = {
    update: XOR<UserUpdateWithoutPoAuditsInput, UserUncheckedUpdateWithoutPoAuditsInput>
    create: XOR<UserCreateWithoutPoAuditsInput, UserUncheckedCreateWithoutPoAuditsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPoAuditsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPoAuditsInput, UserUncheckedUpdateWithoutPoAuditsInput>
  }

  export type UserUpdateWithoutPoAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPoAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurchaseOrderCreateWithoutNotificationsInput = {
    id?: string
    currentLevel: number
    masterPO?: boolean
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
    user: UserCreateNestedOneWithoutPurchaseOrdersInput
    poAudits?: POAuditCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderUncheckedCreateWithoutNotificationsInput = {
    id?: string
    userId: string
    currentLevel: number
    masterPO?: boolean
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
    poAudits?: POAuditUncheckedCreateNestedManyWithoutPoInput
  }

  export type PurchaseOrderCreateOrConnectWithoutNotificationsInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutNotificationsInput, PurchaseOrderUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderCreateNestedManyWithoutUserInput
    poAudits?: POAuditCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    purchaseOrders?: PurchaseOrderUncheckedCreateNestedManyWithoutUserInput
    poAudits?: POAuditUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type PurchaseOrderUpsertWithoutNotificationsInput = {
    update: XOR<PurchaseOrderUpdateWithoutNotificationsInput, PurchaseOrderUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PurchaseOrderCreateWithoutNotificationsInput, PurchaseOrderUncheckedCreateWithoutNotificationsInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutNotificationsInput, PurchaseOrderUncheckedUpdateWithoutNotificationsInput>
  }

  export type PurchaseOrderUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    user?: UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput
    poAudits?: POAuditUpdateManyWithoutPoNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    poAudits?: POAuditUncheckedUpdateManyWithoutPoNestedInput
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyParentInput = {
    id?: string
    email: string
    name?: string | null
    phoneNumber: bigint | number
    empId: string
    isAdmin?: boolean
    pfpUrl?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderCreateManyUserInput = {
    id?: string
    currentLevel: number
    masterPO?: boolean
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

  export type POAuditCreateManyUserInput = {
    id?: string
    poId: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    poId: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    purchaseOrders?: PurchaseOrderUncheckedUpdateManyWithoutUserNestedInput
    poAudits?: POAuditUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    empId?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    pfpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    poAudits?: POAuditUpdateManyWithoutPoNestedInput
    notifications?: NotificationUpdateManyWithoutPoNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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
    poAudits?: POAuditUncheckedUpdateManyWithoutPoNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPoNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLevel?: IntFieldUpdateOperationsInput | number
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

  export type POAuditUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
    po?: PurchaseOrderUpdateOneRequiredWithoutPoAuditsNestedInput
  }

  export type POAuditUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
  }

  export type POAuditUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    po?: PurchaseOrderUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type POAuditCreateManyPoInput = {
    id?: string
    userId: string
    action: $Enums.POAction
    comment?: string | null
    timestamp?: Date | string
    status: $Enums.POStatus
  }

  export type NotificationCreateManyPoInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    read?: boolean
    createdAt?: Date | string
  }

  export type POAuditUpdateWithoutPoInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
    user?: UserUpdateOneRequiredWithoutPoAuditsNestedInput
  }

  export type POAuditUncheckedUpdateWithoutPoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
  }

  export type POAuditUncheckedUpdateManyWithoutPoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: EnumPOActionFieldUpdateOperationsInput | $Enums.POAction
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPOStatusFieldUpdateOperationsInput | $Enums.POStatus
  }

  export type NotificationUpdateWithoutPoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutPoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutPoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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