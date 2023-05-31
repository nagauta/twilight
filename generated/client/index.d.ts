
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model TwFileHash
 * 
 */
export type TwFileHash = {
  id: number
  hash: string
  reg_time: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TwFileHashes
 * const twFileHashes = await prisma.twFileHash.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TwFileHashes
   * const twFileHashes = await prisma.twFileHash.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.twFileHash`: Exposes CRUD operations for the **TwFileHash** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwFileHashes
    * const twFileHashes = await prisma.twFileHash.findMany()
    * ```
    */
  get twFileHash(): Prisma.TwFileHashDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.14.1
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TwFileHash: 'TwFileHash'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model TwFileHash
   */


  export type AggregateTwFileHash = {
    _count: TwFileHashCountAggregateOutputType | null
    _avg: TwFileHashAvgAggregateOutputType | null
    _sum: TwFileHashSumAggregateOutputType | null
    _min: TwFileHashMinAggregateOutputType | null
    _max: TwFileHashMaxAggregateOutputType | null
  }

  export type TwFileHashAvgAggregateOutputType = {
    id: number | null
  }

  export type TwFileHashSumAggregateOutputType = {
    id: number | null
  }

  export type TwFileHashMinAggregateOutputType = {
    id: number | null
    hash: string | null
    reg_time: Date | null
  }

  export type TwFileHashMaxAggregateOutputType = {
    id: number | null
    hash: string | null
    reg_time: Date | null
  }

  export type TwFileHashCountAggregateOutputType = {
    id: number
    hash: number
    reg_time: number
    _all: number
  }


  export type TwFileHashAvgAggregateInputType = {
    id?: true
  }

  export type TwFileHashSumAggregateInputType = {
    id?: true
  }

  export type TwFileHashMinAggregateInputType = {
    id?: true
    hash?: true
    reg_time?: true
  }

  export type TwFileHashMaxAggregateInputType = {
    id?: true
    hash?: true
    reg_time?: true
  }

  export type TwFileHashCountAggregateInputType = {
    id?: true
    hash?: true
    reg_time?: true
    _all?: true
  }

  export type TwFileHashAggregateArgs = {
    /**
     * Filter which TwFileHash to aggregate.
     */
    where?: TwFileHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwFileHashes to fetch.
     */
    orderBy?: Enumerable<TwFileHashOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwFileHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwFileHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwFileHashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwFileHashes
    **/
    _count?: true | TwFileHashCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwFileHashAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwFileHashSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwFileHashMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwFileHashMaxAggregateInputType
  }

  export type GetTwFileHashAggregateType<T extends TwFileHashAggregateArgs> = {
        [P in keyof T & keyof AggregateTwFileHash]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwFileHash[P]>
      : GetScalarType<T[P], AggregateTwFileHash[P]>
  }




  export type TwFileHashGroupByArgs = {
    where?: TwFileHashWhereInput
    orderBy?: Enumerable<TwFileHashOrderByWithAggregationInput>
    by: TwFileHashScalarFieldEnum[]
    having?: TwFileHashScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwFileHashCountAggregateInputType | true
    _avg?: TwFileHashAvgAggregateInputType
    _sum?: TwFileHashSumAggregateInputType
    _min?: TwFileHashMinAggregateInputType
    _max?: TwFileHashMaxAggregateInputType
  }


  export type TwFileHashGroupByOutputType = {
    id: number
    hash: string
    reg_time: Date
    _count: TwFileHashCountAggregateOutputType | null
    _avg: TwFileHashAvgAggregateOutputType | null
    _sum: TwFileHashSumAggregateOutputType | null
    _min: TwFileHashMinAggregateOutputType | null
    _max: TwFileHashMaxAggregateOutputType | null
  }

  type GetTwFileHashGroupByPayload<T extends TwFileHashGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwFileHashGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwFileHashGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwFileHashGroupByOutputType[P]>
            : GetScalarType<T[P], TwFileHashGroupByOutputType[P]>
        }
      >
    >


  export type TwFileHashSelect = {
    id?: boolean
    hash?: boolean
    reg_time?: boolean
  }


  export type TwFileHashGetPayload<S extends boolean | null | undefined | TwFileHashArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwFileHash :
    S extends undefined ? never :
    S extends { include: any } & (TwFileHashArgs | TwFileHashFindManyArgs)
    ? TwFileHash 
    : S extends { select: any } & (TwFileHashArgs | TwFileHashFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TwFileHash ? TwFileHash[P] : never
  } 
      : TwFileHash


  type TwFileHashCountArgs = 
    Omit<TwFileHashFindManyArgs, 'select' | 'include'> & {
      select?: TwFileHashCountAggregateInputType | true
    }

  export interface TwFileHashDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwFileHash that matches the filter.
     * @param {TwFileHashFindUniqueArgs} args - Arguments to find a TwFileHash
     * @example
     * // Get one TwFileHash
     * const twFileHash = await prisma.twFileHash.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwFileHashFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwFileHashFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwFileHash'> extends True ? Prisma__TwFileHashClient<TwFileHashGetPayload<T>> : Prisma__TwFileHashClient<TwFileHashGetPayload<T> | null, null>

    /**
     * Find one TwFileHash that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwFileHashFindUniqueOrThrowArgs} args - Arguments to find a TwFileHash
     * @example
     * // Get one TwFileHash
     * const twFileHash = await prisma.twFileHash.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwFileHashFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwFileHashFindUniqueOrThrowArgs>
    ): Prisma__TwFileHashClient<TwFileHashGetPayload<T>>

    /**
     * Find the first TwFileHash that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwFileHashFindFirstArgs} args - Arguments to find a TwFileHash
     * @example
     * // Get one TwFileHash
     * const twFileHash = await prisma.twFileHash.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwFileHashFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwFileHashFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwFileHash'> extends True ? Prisma__TwFileHashClient<TwFileHashGetPayload<T>> : Prisma__TwFileHashClient<TwFileHashGetPayload<T> | null, null>

    /**
     * Find the first TwFileHash that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwFileHashFindFirstOrThrowArgs} args - Arguments to find a TwFileHash
     * @example
     * // Get one TwFileHash
     * const twFileHash = await prisma.twFileHash.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwFileHashFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwFileHashFindFirstOrThrowArgs>
    ): Prisma__TwFileHashClient<TwFileHashGetPayload<T>>

    /**
     * Find zero or more TwFileHashes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwFileHashFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwFileHashes
     * const twFileHashes = await prisma.twFileHash.findMany()
     * 
     * // Get first 10 TwFileHashes
     * const twFileHashes = await prisma.twFileHash.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twFileHashWithIdOnly = await prisma.twFileHash.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwFileHashFindManyArgs>(
      args?: SelectSubset<T, TwFileHashFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwFileHashGetPayload<T>>>

    /**
     * Create a TwFileHash.
     * @param {TwFileHashCreateArgs} args - Arguments to create a TwFileHash.
     * @example
     * // Create one TwFileHash
     * const TwFileHash = await prisma.twFileHash.create({
     *   data: {
     *     // ... data to create a TwFileHash
     *   }
     * })
     * 
    **/
    create<T extends TwFileHashCreateArgs>(
      args: SelectSubset<T, TwFileHashCreateArgs>
    ): Prisma__TwFileHashClient<TwFileHashGetPayload<T>>

    /**
     * Create many TwFileHashes.
     *     @param {TwFileHashCreateManyArgs} args - Arguments to create many TwFileHashes.
     *     @example
     *     // Create many TwFileHashes
     *     const twFileHash = await prisma.twFileHash.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwFileHashCreateManyArgs>(
      args?: SelectSubset<T, TwFileHashCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwFileHash.
     * @param {TwFileHashDeleteArgs} args - Arguments to delete one TwFileHash.
     * @example
     * // Delete one TwFileHash
     * const TwFileHash = await prisma.twFileHash.delete({
     *   where: {
     *     // ... filter to delete one TwFileHash
     *   }
     * })
     * 
    **/
    delete<T extends TwFileHashDeleteArgs>(
      args: SelectSubset<T, TwFileHashDeleteArgs>
    ): Prisma__TwFileHashClient<TwFileHashGetPayload<T>>

    /**
     * Update one TwFileHash.
     * @param {TwFileHashUpdateArgs} args - Arguments to update one TwFileHash.
     * @example
     * // Update one TwFileHash
     * const twFileHash = await prisma.twFileHash.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwFileHashUpdateArgs>(
      args: SelectSubset<T, TwFileHashUpdateArgs>
    ): Prisma__TwFileHashClient<TwFileHashGetPayload<T>>

    /**
     * Delete zero or more TwFileHashes.
     * @param {TwFileHashDeleteManyArgs} args - Arguments to filter TwFileHashes to delete.
     * @example
     * // Delete a few TwFileHashes
     * const { count } = await prisma.twFileHash.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwFileHashDeleteManyArgs>(
      args?: SelectSubset<T, TwFileHashDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwFileHashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwFileHashUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwFileHashes
     * const twFileHash = await prisma.twFileHash.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwFileHashUpdateManyArgs>(
      args: SelectSubset<T, TwFileHashUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwFileHash.
     * @param {TwFileHashUpsertArgs} args - Arguments to update or create a TwFileHash.
     * @example
     * // Update or create a TwFileHash
     * const twFileHash = await prisma.twFileHash.upsert({
     *   create: {
     *     // ... data to create a TwFileHash
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwFileHash we want to update
     *   }
     * })
    **/
    upsert<T extends TwFileHashUpsertArgs>(
      args: SelectSubset<T, TwFileHashUpsertArgs>
    ): Prisma__TwFileHashClient<TwFileHashGetPayload<T>>

    /**
     * Count the number of TwFileHashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwFileHashCountArgs} args - Arguments to filter TwFileHashes to count.
     * @example
     * // Count the number of TwFileHashes
     * const count = await prisma.twFileHash.count({
     *   where: {
     *     // ... the filter for the TwFileHashes we want to count
     *   }
     * })
    **/
    count<T extends TwFileHashCountArgs>(
      args?: Subset<T, TwFileHashCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwFileHashCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwFileHash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwFileHashAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwFileHashAggregateArgs>(args: Subset<T, TwFileHashAggregateArgs>): Prisma.PrismaPromise<GetTwFileHashAggregateType<T>>

    /**
     * Group by TwFileHash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwFileHashGroupByArgs} args - Group by arguments.
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
      T extends TwFileHashGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwFileHashGroupByArgs['orderBy'] }
        : { orderBy?: TwFileHashGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TwFileHashGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwFileHashGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwFileHash.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwFileHashClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TwFileHash base type for findUnique actions
   */
  export type TwFileHashFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * Filter, which TwFileHash to fetch.
     */
    where: TwFileHashWhereUniqueInput
  }

  /**
   * TwFileHash findUnique
   */
  export interface TwFileHashFindUniqueArgs extends TwFileHashFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwFileHash findUniqueOrThrow
   */
  export type TwFileHashFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * Filter, which TwFileHash to fetch.
     */
    where: TwFileHashWhereUniqueInput
  }


  /**
   * TwFileHash base type for findFirst actions
   */
  export type TwFileHashFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * Filter, which TwFileHash to fetch.
     */
    where?: TwFileHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwFileHashes to fetch.
     */
    orderBy?: Enumerable<TwFileHashOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwFileHashes.
     */
    cursor?: TwFileHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwFileHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwFileHashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwFileHashes.
     */
    distinct?: Enumerable<TwFileHashScalarFieldEnum>
  }

  /**
   * TwFileHash findFirst
   */
  export interface TwFileHashFindFirstArgs extends TwFileHashFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwFileHash findFirstOrThrow
   */
  export type TwFileHashFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * Filter, which TwFileHash to fetch.
     */
    where?: TwFileHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwFileHashes to fetch.
     */
    orderBy?: Enumerable<TwFileHashOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwFileHashes.
     */
    cursor?: TwFileHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwFileHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwFileHashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwFileHashes.
     */
    distinct?: Enumerable<TwFileHashScalarFieldEnum>
  }


  /**
   * TwFileHash findMany
   */
  export type TwFileHashFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * Filter, which TwFileHashes to fetch.
     */
    where?: TwFileHashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwFileHashes to fetch.
     */
    orderBy?: Enumerable<TwFileHashOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwFileHashes.
     */
    cursor?: TwFileHashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwFileHashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwFileHashes.
     */
    skip?: number
    distinct?: Enumerable<TwFileHashScalarFieldEnum>
  }


  /**
   * TwFileHash create
   */
  export type TwFileHashCreateArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * The data needed to create a TwFileHash.
     */
    data: XOR<TwFileHashCreateInput, TwFileHashUncheckedCreateInput>
  }


  /**
   * TwFileHash createMany
   */
  export type TwFileHashCreateManyArgs = {
    /**
     * The data used to create many TwFileHashes.
     */
    data: Enumerable<TwFileHashCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwFileHash update
   */
  export type TwFileHashUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * The data needed to update a TwFileHash.
     */
    data: XOR<TwFileHashUpdateInput, TwFileHashUncheckedUpdateInput>
    /**
     * Choose, which TwFileHash to update.
     */
    where: TwFileHashWhereUniqueInput
  }


  /**
   * TwFileHash updateMany
   */
  export type TwFileHashUpdateManyArgs = {
    /**
     * The data used to update TwFileHashes.
     */
    data: XOR<TwFileHashUpdateManyMutationInput, TwFileHashUncheckedUpdateManyInput>
    /**
     * Filter which TwFileHashes to update
     */
    where?: TwFileHashWhereInput
  }


  /**
   * TwFileHash upsert
   */
  export type TwFileHashUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * The filter to search for the TwFileHash to update in case it exists.
     */
    where: TwFileHashWhereUniqueInput
    /**
     * In case the TwFileHash found by the `where` argument doesn't exist, create a new TwFileHash with this data.
     */
    create: XOR<TwFileHashCreateInput, TwFileHashUncheckedCreateInput>
    /**
     * In case the TwFileHash was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwFileHashUpdateInput, TwFileHashUncheckedUpdateInput>
  }


  /**
   * TwFileHash delete
   */
  export type TwFileHashDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
    /**
     * Filter which TwFileHash to delete.
     */
    where: TwFileHashWhereUniqueInput
  }


  /**
   * TwFileHash deleteMany
   */
  export type TwFileHashDeleteManyArgs = {
    /**
     * Filter which TwFileHashes to delete
     */
    where?: TwFileHashWhereInput
  }


  /**
   * TwFileHash without action
   */
  export type TwFileHashArgs = {
    /**
     * Select specific fields to fetch from the TwFileHash
     */
    select?: TwFileHashSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TwFileHashScalarFieldEnum: {
    id: 'id',
    hash: 'hash',
    reg_time: 'reg_time'
  };

  export type TwFileHashScalarFieldEnum = (typeof TwFileHashScalarFieldEnum)[keyof typeof TwFileHashScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type TwFileHashWhereInput = {
    AND?: Enumerable<TwFileHashWhereInput>
    OR?: Enumerable<TwFileHashWhereInput>
    NOT?: Enumerable<TwFileHashWhereInput>
    id?: IntFilter | number
    hash?: StringFilter | string
    reg_time?: DateTimeFilter | Date | string
  }

  export type TwFileHashOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    reg_time?: SortOrder
  }

  export type TwFileHashWhereUniqueInput = {
    id?: number
    hash?: string
  }

  export type TwFileHashOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    reg_time?: SortOrder
    _count?: TwFileHashCountOrderByAggregateInput
    _avg?: TwFileHashAvgOrderByAggregateInput
    _max?: TwFileHashMaxOrderByAggregateInput
    _min?: TwFileHashMinOrderByAggregateInput
    _sum?: TwFileHashSumOrderByAggregateInput
  }

  export type TwFileHashScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwFileHashScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwFileHashScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwFileHashScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    hash?: StringWithAggregatesFilter | string
    reg_time?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwFileHashCreateInput = {
    hash: string
    reg_time?: Date | string
  }

  export type TwFileHashUncheckedCreateInput = {
    id?: number
    hash: string
    reg_time?: Date | string
  }

  export type TwFileHashUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    reg_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwFileHashUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    reg_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwFileHashCreateManyInput = {
    id?: number
    hash: string
    reg_time?: Date | string
  }

  export type TwFileHashUpdateManyMutationInput = {
    hash?: StringFieldUpdateOperationsInput | string
    reg_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwFileHashUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: StringFieldUpdateOperationsInput | string
    reg_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TwFileHashCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    reg_time?: SortOrder
  }

  export type TwFileHashAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwFileHashMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    reg_time?: SortOrder
  }

  export type TwFileHashMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    reg_time?: SortOrder
  }

  export type TwFileHashSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
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