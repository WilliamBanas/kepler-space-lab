
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
 * Model CelestialBody
 * 
 */
export type CelestialBody = $Result.DefaultSelection<Prisma.$CelestialBodyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CelestialBodies
 * const celestialBodies = await prisma.celestialBody.findMany()
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
   * // Fetch zero or more CelestialBodies
   * const celestialBodies = await prisma.celestialBody.findMany()
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
   * `prisma.celestialBody`: Exposes CRUD operations for the **CelestialBody** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CelestialBodies
    * const celestialBodies = await prisma.celestialBody.findMany()
    * ```
    */
  get celestialBody(): Prisma.CelestialBodyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    CelestialBody: 'CelestialBody'
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
      modelProps: "celestialBody"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CelestialBody: {
        payload: Prisma.$CelestialBodyPayload<ExtArgs>
        fields: Prisma.CelestialBodyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CelestialBodyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CelestialBodyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>
          }
          findFirst: {
            args: Prisma.CelestialBodyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CelestialBodyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>
          }
          findMany: {
            args: Prisma.CelestialBodyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>[]
          }
          create: {
            args: Prisma.CelestialBodyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>
          }
          createMany: {
            args: Prisma.CelestialBodyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CelestialBodyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>[]
          }
          delete: {
            args: Prisma.CelestialBodyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>
          }
          update: {
            args: Prisma.CelestialBodyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>
          }
          deleteMany: {
            args: Prisma.CelestialBodyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CelestialBodyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CelestialBodyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>[]
          }
          upsert: {
            args: Prisma.CelestialBodyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelestialBodyPayload>
          }
          aggregate: {
            args: Prisma.CelestialBodyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCelestialBody>
          }
          groupBy: {
            args: Prisma.CelestialBodyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CelestialBodyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CelestialBodyCountArgs<ExtArgs>
            result: $Utils.Optional<CelestialBodyCountAggregateOutputType> | number
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
    celestialBody?: CelestialBodyOmit
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
   * Count Type CelestialBodyCountOutputType
   */

  export type CelestialBodyCountOutputType = {
    celestialBodies: number
  }

  export type CelestialBodyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    celestialBodies?: boolean | CelestialBodyCountOutputTypeCountCelestialBodiesArgs
  }

  // Custom InputTypes
  /**
   * CelestialBodyCountOutputType without action
   */
  export type CelestialBodyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBodyCountOutputType
     */
    select?: CelestialBodyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CelestialBodyCountOutputType without action
   */
  export type CelestialBodyCountOutputTypeCountCelestialBodiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CelestialBodyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CelestialBody
   */

  export type AggregateCelestialBody = {
    _count: CelestialBodyCountAggregateOutputType | null
    _avg: CelestialBodyAvgAggregateOutputType | null
    _sum: CelestialBodySumAggregateOutputType | null
    _min: CelestialBodyMinAggregateOutputType | null
    _max: CelestialBodyMaxAggregateOutputType | null
  }

  export type CelestialBodyAvgAggregateOutputType = {
    id: number | null
    equatorialRadius: number | null
    mass: number | null
    volume: number | null
    distanceFromSun: number | null
    orbitalPeriod: number | null
    rotationPeriod: number | null
    axialTilt: number | null
    numberOfMoons: number | null
    semiMajorAxis: number | null
    eccentricity: number | null
    orbitalInclination: number | null
    argumentOfPeriapsis: number | null
    longitudeOfAscendingNode: number | null
    meanAnomaly: number | null
    parentId: number | null
  }

  export type CelestialBodySumAggregateOutputType = {
    id: number | null
    equatorialRadius: number | null
    mass: number | null
    volume: number | null
    distanceFromSun: number | null
    orbitalPeriod: number | null
    rotationPeriod: number | null
    axialTilt: number | null
    numberOfMoons: number | null
    semiMajorAxis: number | null
    eccentricity: number | null
    orbitalInclination: number | null
    argumentOfPeriapsis: number | null
    longitudeOfAscendingNode: number | null
    meanAnomaly: number | null
    parentId: number | null
  }

  export type CelestialBodyMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    equatorialRadius: number | null
    mass: number | null
    volume: number | null
    distanceFromSun: number | null
    orbitalPeriod: number | null
    rotationPeriod: number | null
    axialTilt: number | null
    numberOfMoons: number | null
    hasRings: boolean | null
    atmosphereComposition: string | null
    semiMajorAxis: number | null
    eccentricity: number | null
    orbitalInclination: number | null
    argumentOfPeriapsis: number | null
    longitudeOfAscendingNode: number | null
    meanAnomaly: number | null
    parentId: number | null
  }

  export type CelestialBodyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    equatorialRadius: number | null
    mass: number | null
    volume: number | null
    distanceFromSun: number | null
    orbitalPeriod: number | null
    rotationPeriod: number | null
    axialTilt: number | null
    numberOfMoons: number | null
    hasRings: boolean | null
    atmosphereComposition: string | null
    semiMajorAxis: number | null
    eccentricity: number | null
    orbitalInclination: number | null
    argumentOfPeriapsis: number | null
    longitudeOfAscendingNode: number | null
    meanAnomaly: number | null
    parentId: number | null
  }

  export type CelestialBodyCountAggregateOutputType = {
    id: number
    name: number
    type: number
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: number
    atmosphereComposition: number
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    parentId: number
    _all: number
  }


  export type CelestialBodyAvgAggregateInputType = {
    id?: true
    equatorialRadius?: true
    mass?: true
    volume?: true
    distanceFromSun?: true
    orbitalPeriod?: true
    rotationPeriod?: true
    axialTilt?: true
    numberOfMoons?: true
    semiMajorAxis?: true
    eccentricity?: true
    orbitalInclination?: true
    argumentOfPeriapsis?: true
    longitudeOfAscendingNode?: true
    meanAnomaly?: true
    parentId?: true
  }

  export type CelestialBodySumAggregateInputType = {
    id?: true
    equatorialRadius?: true
    mass?: true
    volume?: true
    distanceFromSun?: true
    orbitalPeriod?: true
    rotationPeriod?: true
    axialTilt?: true
    numberOfMoons?: true
    semiMajorAxis?: true
    eccentricity?: true
    orbitalInclination?: true
    argumentOfPeriapsis?: true
    longitudeOfAscendingNode?: true
    meanAnomaly?: true
    parentId?: true
  }

  export type CelestialBodyMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    equatorialRadius?: true
    mass?: true
    volume?: true
    distanceFromSun?: true
    orbitalPeriod?: true
    rotationPeriod?: true
    axialTilt?: true
    numberOfMoons?: true
    hasRings?: true
    atmosphereComposition?: true
    semiMajorAxis?: true
    eccentricity?: true
    orbitalInclination?: true
    argumentOfPeriapsis?: true
    longitudeOfAscendingNode?: true
    meanAnomaly?: true
    parentId?: true
  }

  export type CelestialBodyMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    equatorialRadius?: true
    mass?: true
    volume?: true
    distanceFromSun?: true
    orbitalPeriod?: true
    rotationPeriod?: true
    axialTilt?: true
    numberOfMoons?: true
    hasRings?: true
    atmosphereComposition?: true
    semiMajorAxis?: true
    eccentricity?: true
    orbitalInclination?: true
    argumentOfPeriapsis?: true
    longitudeOfAscendingNode?: true
    meanAnomaly?: true
    parentId?: true
  }

  export type CelestialBodyCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    equatorialRadius?: true
    mass?: true
    volume?: true
    distanceFromSun?: true
    orbitalPeriod?: true
    rotationPeriod?: true
    axialTilt?: true
    numberOfMoons?: true
    hasRings?: true
    atmosphereComposition?: true
    semiMajorAxis?: true
    eccentricity?: true
    orbitalInclination?: true
    argumentOfPeriapsis?: true
    longitudeOfAscendingNode?: true
    meanAnomaly?: true
    parentId?: true
    _all?: true
  }

  export type CelestialBodyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CelestialBody to aggregate.
     */
    where?: CelestialBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelestialBodies to fetch.
     */
    orderBy?: CelestialBodyOrderByWithRelationInput | CelestialBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CelestialBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelestialBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelestialBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CelestialBodies
    **/
    _count?: true | CelestialBodyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CelestialBodyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CelestialBodySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CelestialBodyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CelestialBodyMaxAggregateInputType
  }

  export type GetCelestialBodyAggregateType<T extends CelestialBodyAggregateArgs> = {
        [P in keyof T & keyof AggregateCelestialBody]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCelestialBody[P]>
      : GetScalarType<T[P], AggregateCelestialBody[P]>
  }




  export type CelestialBodyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CelestialBodyWhereInput
    orderBy?: CelestialBodyOrderByWithAggregationInput | CelestialBodyOrderByWithAggregationInput[]
    by: CelestialBodyScalarFieldEnum[] | CelestialBodyScalarFieldEnum
    having?: CelestialBodyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CelestialBodyCountAggregateInputType | true
    _avg?: CelestialBodyAvgAggregateInputType
    _sum?: CelestialBodySumAggregateInputType
    _min?: CelestialBodyMinAggregateInputType
    _max?: CelestialBodyMaxAggregateInputType
  }

  export type CelestialBodyGroupByOutputType = {
    id: number
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    parentId: number | null
    _count: CelestialBodyCountAggregateOutputType | null
    _avg: CelestialBodyAvgAggregateOutputType | null
    _sum: CelestialBodySumAggregateOutputType | null
    _min: CelestialBodyMinAggregateOutputType | null
    _max: CelestialBodyMaxAggregateOutputType | null
  }

  type GetCelestialBodyGroupByPayload<T extends CelestialBodyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CelestialBodyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CelestialBodyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CelestialBodyGroupByOutputType[P]>
            : GetScalarType<T[P], CelestialBodyGroupByOutputType[P]>
        }
      >
    >


  export type CelestialBodySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    equatorialRadius?: boolean
    mass?: boolean
    volume?: boolean
    distanceFromSun?: boolean
    orbitalPeriod?: boolean
    rotationPeriod?: boolean
    axialTilt?: boolean
    numberOfMoons?: boolean
    hasRings?: boolean
    atmosphereComposition?: boolean
    semiMajorAxis?: boolean
    eccentricity?: boolean
    orbitalInclination?: boolean
    argumentOfPeriapsis?: boolean
    longitudeOfAscendingNode?: boolean
    meanAnomaly?: boolean
    parentId?: boolean
    parent?: boolean | CelestialBody$parentArgs<ExtArgs>
    celestialBodies?: boolean | CelestialBody$celestialBodiesArgs<ExtArgs>
    _count?: boolean | CelestialBodyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celestialBody"]>

  export type CelestialBodySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    equatorialRadius?: boolean
    mass?: boolean
    volume?: boolean
    distanceFromSun?: boolean
    orbitalPeriod?: boolean
    rotationPeriod?: boolean
    axialTilt?: boolean
    numberOfMoons?: boolean
    hasRings?: boolean
    atmosphereComposition?: boolean
    semiMajorAxis?: boolean
    eccentricity?: boolean
    orbitalInclination?: boolean
    argumentOfPeriapsis?: boolean
    longitudeOfAscendingNode?: boolean
    meanAnomaly?: boolean
    parentId?: boolean
    parent?: boolean | CelestialBody$parentArgs<ExtArgs>
  }, ExtArgs["result"]["celestialBody"]>

  export type CelestialBodySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    equatorialRadius?: boolean
    mass?: boolean
    volume?: boolean
    distanceFromSun?: boolean
    orbitalPeriod?: boolean
    rotationPeriod?: boolean
    axialTilt?: boolean
    numberOfMoons?: boolean
    hasRings?: boolean
    atmosphereComposition?: boolean
    semiMajorAxis?: boolean
    eccentricity?: boolean
    orbitalInclination?: boolean
    argumentOfPeriapsis?: boolean
    longitudeOfAscendingNode?: boolean
    meanAnomaly?: boolean
    parentId?: boolean
    parent?: boolean | CelestialBody$parentArgs<ExtArgs>
  }, ExtArgs["result"]["celestialBody"]>

  export type CelestialBodySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    equatorialRadius?: boolean
    mass?: boolean
    volume?: boolean
    distanceFromSun?: boolean
    orbitalPeriod?: boolean
    rotationPeriod?: boolean
    axialTilt?: boolean
    numberOfMoons?: boolean
    hasRings?: boolean
    atmosphereComposition?: boolean
    semiMajorAxis?: boolean
    eccentricity?: boolean
    orbitalInclination?: boolean
    argumentOfPeriapsis?: boolean
    longitudeOfAscendingNode?: boolean
    meanAnomaly?: boolean
    parentId?: boolean
  }

  export type CelestialBodyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "equatorialRadius" | "mass" | "volume" | "distanceFromSun" | "orbitalPeriod" | "rotationPeriod" | "axialTilt" | "numberOfMoons" | "hasRings" | "atmosphereComposition" | "semiMajorAxis" | "eccentricity" | "orbitalInclination" | "argumentOfPeriapsis" | "longitudeOfAscendingNode" | "meanAnomaly" | "parentId", ExtArgs["result"]["celestialBody"]>
  export type CelestialBodyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | CelestialBody$parentArgs<ExtArgs>
    celestialBodies?: boolean | CelestialBody$celestialBodiesArgs<ExtArgs>
    _count?: boolean | CelestialBodyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CelestialBodyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | CelestialBody$parentArgs<ExtArgs>
  }
  export type CelestialBodyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | CelestialBody$parentArgs<ExtArgs>
  }

  export type $CelestialBodyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CelestialBody"
    objects: {
      parent: Prisma.$CelestialBodyPayload<ExtArgs> | null
      celestialBodies: Prisma.$CelestialBodyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      equatorialRadius: number
      mass: number
      volume: number
      distanceFromSun: number
      orbitalPeriod: number
      rotationPeriod: number
      axialTilt: number
      numberOfMoons: number
      hasRings: boolean
      atmosphereComposition: string
      semiMajorAxis: number
      eccentricity: number
      orbitalInclination: number
      argumentOfPeriapsis: number
      longitudeOfAscendingNode: number
      meanAnomaly: number
      parentId: number | null
    }, ExtArgs["result"]["celestialBody"]>
    composites: {}
  }

  type CelestialBodyGetPayload<S extends boolean | null | undefined | CelestialBodyDefaultArgs> = $Result.GetResult<Prisma.$CelestialBodyPayload, S>

  type CelestialBodyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CelestialBodyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CelestialBodyCountAggregateInputType | true
    }

  export interface CelestialBodyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CelestialBody'], meta: { name: 'CelestialBody' } }
    /**
     * Find zero or one CelestialBody that matches the filter.
     * @param {CelestialBodyFindUniqueArgs} args - Arguments to find a CelestialBody
     * @example
     * // Get one CelestialBody
     * const celestialBody = await prisma.celestialBody.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CelestialBodyFindUniqueArgs>(args: SelectSubset<T, CelestialBodyFindUniqueArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CelestialBody that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CelestialBodyFindUniqueOrThrowArgs} args - Arguments to find a CelestialBody
     * @example
     * // Get one CelestialBody
     * const celestialBody = await prisma.celestialBody.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CelestialBodyFindUniqueOrThrowArgs>(args: SelectSubset<T, CelestialBodyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CelestialBody that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelestialBodyFindFirstArgs} args - Arguments to find a CelestialBody
     * @example
     * // Get one CelestialBody
     * const celestialBody = await prisma.celestialBody.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CelestialBodyFindFirstArgs>(args?: SelectSubset<T, CelestialBodyFindFirstArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CelestialBody that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelestialBodyFindFirstOrThrowArgs} args - Arguments to find a CelestialBody
     * @example
     * // Get one CelestialBody
     * const celestialBody = await prisma.celestialBody.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CelestialBodyFindFirstOrThrowArgs>(args?: SelectSubset<T, CelestialBodyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CelestialBodies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelestialBodyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CelestialBodies
     * const celestialBodies = await prisma.celestialBody.findMany()
     * 
     * // Get first 10 CelestialBodies
     * const celestialBodies = await prisma.celestialBody.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const celestialBodyWithIdOnly = await prisma.celestialBody.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CelestialBodyFindManyArgs>(args?: SelectSubset<T, CelestialBodyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CelestialBody.
     * @param {CelestialBodyCreateArgs} args - Arguments to create a CelestialBody.
     * @example
     * // Create one CelestialBody
     * const CelestialBody = await prisma.celestialBody.create({
     *   data: {
     *     // ... data to create a CelestialBody
     *   }
     * })
     * 
     */
    create<T extends CelestialBodyCreateArgs>(args: SelectSubset<T, CelestialBodyCreateArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CelestialBodies.
     * @param {CelestialBodyCreateManyArgs} args - Arguments to create many CelestialBodies.
     * @example
     * // Create many CelestialBodies
     * const celestialBody = await prisma.celestialBody.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CelestialBodyCreateManyArgs>(args?: SelectSubset<T, CelestialBodyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CelestialBodies and returns the data saved in the database.
     * @param {CelestialBodyCreateManyAndReturnArgs} args - Arguments to create many CelestialBodies.
     * @example
     * // Create many CelestialBodies
     * const celestialBody = await prisma.celestialBody.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CelestialBodies and only return the `id`
     * const celestialBodyWithIdOnly = await prisma.celestialBody.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CelestialBodyCreateManyAndReturnArgs>(args?: SelectSubset<T, CelestialBodyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CelestialBody.
     * @param {CelestialBodyDeleteArgs} args - Arguments to delete one CelestialBody.
     * @example
     * // Delete one CelestialBody
     * const CelestialBody = await prisma.celestialBody.delete({
     *   where: {
     *     // ... filter to delete one CelestialBody
     *   }
     * })
     * 
     */
    delete<T extends CelestialBodyDeleteArgs>(args: SelectSubset<T, CelestialBodyDeleteArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CelestialBody.
     * @param {CelestialBodyUpdateArgs} args - Arguments to update one CelestialBody.
     * @example
     * // Update one CelestialBody
     * const celestialBody = await prisma.celestialBody.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CelestialBodyUpdateArgs>(args: SelectSubset<T, CelestialBodyUpdateArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CelestialBodies.
     * @param {CelestialBodyDeleteManyArgs} args - Arguments to filter CelestialBodies to delete.
     * @example
     * // Delete a few CelestialBodies
     * const { count } = await prisma.celestialBody.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CelestialBodyDeleteManyArgs>(args?: SelectSubset<T, CelestialBodyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CelestialBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelestialBodyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CelestialBodies
     * const celestialBody = await prisma.celestialBody.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CelestialBodyUpdateManyArgs>(args: SelectSubset<T, CelestialBodyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CelestialBodies and returns the data updated in the database.
     * @param {CelestialBodyUpdateManyAndReturnArgs} args - Arguments to update many CelestialBodies.
     * @example
     * // Update many CelestialBodies
     * const celestialBody = await prisma.celestialBody.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CelestialBodies and only return the `id`
     * const celestialBodyWithIdOnly = await prisma.celestialBody.updateManyAndReturn({
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
    updateManyAndReturn<T extends CelestialBodyUpdateManyAndReturnArgs>(args: SelectSubset<T, CelestialBodyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CelestialBody.
     * @param {CelestialBodyUpsertArgs} args - Arguments to update or create a CelestialBody.
     * @example
     * // Update or create a CelestialBody
     * const celestialBody = await prisma.celestialBody.upsert({
     *   create: {
     *     // ... data to create a CelestialBody
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CelestialBody we want to update
     *   }
     * })
     */
    upsert<T extends CelestialBodyUpsertArgs>(args: SelectSubset<T, CelestialBodyUpsertArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CelestialBodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelestialBodyCountArgs} args - Arguments to filter CelestialBodies to count.
     * @example
     * // Count the number of CelestialBodies
     * const count = await prisma.celestialBody.count({
     *   where: {
     *     // ... the filter for the CelestialBodies we want to count
     *   }
     * })
    **/
    count<T extends CelestialBodyCountArgs>(
      args?: Subset<T, CelestialBodyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CelestialBodyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CelestialBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelestialBodyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CelestialBodyAggregateArgs>(args: Subset<T, CelestialBodyAggregateArgs>): Prisma.PrismaPromise<GetCelestialBodyAggregateType<T>>

    /**
     * Group by CelestialBody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelestialBodyGroupByArgs} args - Group by arguments.
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
      T extends CelestialBodyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CelestialBodyGroupByArgs['orderBy'] }
        : { orderBy?: CelestialBodyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CelestialBodyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelestialBodyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CelestialBody model
   */
  readonly fields: CelestialBodyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CelestialBody.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CelestialBodyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends CelestialBody$parentArgs<ExtArgs> = {}>(args?: Subset<T, CelestialBody$parentArgs<ExtArgs>>): Prisma__CelestialBodyClient<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    celestialBodies<T extends CelestialBody$celestialBodiesArgs<ExtArgs> = {}>(args?: Subset<T, CelestialBody$celestialBodiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelestialBodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CelestialBody model
   */
  interface CelestialBodyFieldRefs {
    readonly id: FieldRef<"CelestialBody", 'Int'>
    readonly name: FieldRef<"CelestialBody", 'String'>
    readonly type: FieldRef<"CelestialBody", 'String'>
    readonly equatorialRadius: FieldRef<"CelestialBody", 'Float'>
    readonly mass: FieldRef<"CelestialBody", 'Float'>
    readonly volume: FieldRef<"CelestialBody", 'Float'>
    readonly distanceFromSun: FieldRef<"CelestialBody", 'Float'>
    readonly orbitalPeriod: FieldRef<"CelestialBody", 'Float'>
    readonly rotationPeriod: FieldRef<"CelestialBody", 'Float'>
    readonly axialTilt: FieldRef<"CelestialBody", 'Float'>
    readonly numberOfMoons: FieldRef<"CelestialBody", 'Int'>
    readonly hasRings: FieldRef<"CelestialBody", 'Boolean'>
    readonly atmosphereComposition: FieldRef<"CelestialBody", 'String'>
    readonly semiMajorAxis: FieldRef<"CelestialBody", 'Float'>
    readonly eccentricity: FieldRef<"CelestialBody", 'Float'>
    readonly orbitalInclination: FieldRef<"CelestialBody", 'Float'>
    readonly argumentOfPeriapsis: FieldRef<"CelestialBody", 'Float'>
    readonly longitudeOfAscendingNode: FieldRef<"CelestialBody", 'Float'>
    readonly meanAnomaly: FieldRef<"CelestialBody", 'Float'>
    readonly parentId: FieldRef<"CelestialBody", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CelestialBody findUnique
   */
  export type CelestialBodyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * Filter, which CelestialBody to fetch.
     */
    where: CelestialBodyWhereUniqueInput
  }

  /**
   * CelestialBody findUniqueOrThrow
   */
  export type CelestialBodyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * Filter, which CelestialBody to fetch.
     */
    where: CelestialBodyWhereUniqueInput
  }

  /**
   * CelestialBody findFirst
   */
  export type CelestialBodyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * Filter, which CelestialBody to fetch.
     */
    where?: CelestialBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelestialBodies to fetch.
     */
    orderBy?: CelestialBodyOrderByWithRelationInput | CelestialBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CelestialBodies.
     */
    cursor?: CelestialBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelestialBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelestialBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CelestialBodies.
     */
    distinct?: CelestialBodyScalarFieldEnum | CelestialBodyScalarFieldEnum[]
  }

  /**
   * CelestialBody findFirstOrThrow
   */
  export type CelestialBodyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * Filter, which CelestialBody to fetch.
     */
    where?: CelestialBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelestialBodies to fetch.
     */
    orderBy?: CelestialBodyOrderByWithRelationInput | CelestialBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CelestialBodies.
     */
    cursor?: CelestialBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelestialBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelestialBodies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CelestialBodies.
     */
    distinct?: CelestialBodyScalarFieldEnum | CelestialBodyScalarFieldEnum[]
  }

  /**
   * CelestialBody findMany
   */
  export type CelestialBodyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * Filter, which CelestialBodies to fetch.
     */
    where?: CelestialBodyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CelestialBodies to fetch.
     */
    orderBy?: CelestialBodyOrderByWithRelationInput | CelestialBodyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CelestialBodies.
     */
    cursor?: CelestialBodyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CelestialBodies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CelestialBodies.
     */
    skip?: number
    distinct?: CelestialBodyScalarFieldEnum | CelestialBodyScalarFieldEnum[]
  }

  /**
   * CelestialBody create
   */
  export type CelestialBodyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * The data needed to create a CelestialBody.
     */
    data: XOR<CelestialBodyCreateInput, CelestialBodyUncheckedCreateInput>
  }

  /**
   * CelestialBody createMany
   */
  export type CelestialBodyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CelestialBodies.
     */
    data: CelestialBodyCreateManyInput | CelestialBodyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CelestialBody createManyAndReturn
   */
  export type CelestialBodyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * The data used to create many CelestialBodies.
     */
    data: CelestialBodyCreateManyInput | CelestialBodyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CelestialBody update
   */
  export type CelestialBodyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * The data needed to update a CelestialBody.
     */
    data: XOR<CelestialBodyUpdateInput, CelestialBodyUncheckedUpdateInput>
    /**
     * Choose, which CelestialBody to update.
     */
    where: CelestialBodyWhereUniqueInput
  }

  /**
   * CelestialBody updateMany
   */
  export type CelestialBodyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CelestialBodies.
     */
    data: XOR<CelestialBodyUpdateManyMutationInput, CelestialBodyUncheckedUpdateManyInput>
    /**
     * Filter which CelestialBodies to update
     */
    where?: CelestialBodyWhereInput
    /**
     * Limit how many CelestialBodies to update.
     */
    limit?: number
  }

  /**
   * CelestialBody updateManyAndReturn
   */
  export type CelestialBodyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * The data used to update CelestialBodies.
     */
    data: XOR<CelestialBodyUpdateManyMutationInput, CelestialBodyUncheckedUpdateManyInput>
    /**
     * Filter which CelestialBodies to update
     */
    where?: CelestialBodyWhereInput
    /**
     * Limit how many CelestialBodies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CelestialBody upsert
   */
  export type CelestialBodyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * The filter to search for the CelestialBody to update in case it exists.
     */
    where: CelestialBodyWhereUniqueInput
    /**
     * In case the CelestialBody found by the `where` argument doesn't exist, create a new CelestialBody with this data.
     */
    create: XOR<CelestialBodyCreateInput, CelestialBodyUncheckedCreateInput>
    /**
     * In case the CelestialBody was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CelestialBodyUpdateInput, CelestialBodyUncheckedUpdateInput>
  }

  /**
   * CelestialBody delete
   */
  export type CelestialBodyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    /**
     * Filter which CelestialBody to delete.
     */
    where: CelestialBodyWhereUniqueInput
  }

  /**
   * CelestialBody deleteMany
   */
  export type CelestialBodyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CelestialBodies to delete
     */
    where?: CelestialBodyWhereInput
    /**
     * Limit how many CelestialBodies to delete.
     */
    limit?: number
  }

  /**
   * CelestialBody.parent
   */
  export type CelestialBody$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    where?: CelestialBodyWhereInput
  }

  /**
   * CelestialBody.celestialBodies
   */
  export type CelestialBody$celestialBodiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
    where?: CelestialBodyWhereInput
    orderBy?: CelestialBodyOrderByWithRelationInput | CelestialBodyOrderByWithRelationInput[]
    cursor?: CelestialBodyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CelestialBodyScalarFieldEnum | CelestialBodyScalarFieldEnum[]
  }

  /**
   * CelestialBody without action
   */
  export type CelestialBodyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelestialBody
     */
    select?: CelestialBodySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CelestialBody
     */
    omit?: CelestialBodyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelestialBodyInclude<ExtArgs> | null
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


  export const CelestialBodyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    equatorialRadius: 'equatorialRadius',
    mass: 'mass',
    volume: 'volume',
    distanceFromSun: 'distanceFromSun',
    orbitalPeriod: 'orbitalPeriod',
    rotationPeriod: 'rotationPeriod',
    axialTilt: 'axialTilt',
    numberOfMoons: 'numberOfMoons',
    hasRings: 'hasRings',
    atmosphereComposition: 'atmosphereComposition',
    semiMajorAxis: 'semiMajorAxis',
    eccentricity: 'eccentricity',
    orbitalInclination: 'orbitalInclination',
    argumentOfPeriapsis: 'argumentOfPeriapsis',
    longitudeOfAscendingNode: 'longitudeOfAscendingNode',
    meanAnomaly: 'meanAnomaly',
    parentId: 'parentId'
  };

  export type CelestialBodyScalarFieldEnum = (typeof CelestialBodyScalarFieldEnum)[keyof typeof CelestialBodyScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CelestialBodyWhereInput = {
    AND?: CelestialBodyWhereInput | CelestialBodyWhereInput[]
    OR?: CelestialBodyWhereInput[]
    NOT?: CelestialBodyWhereInput | CelestialBodyWhereInput[]
    id?: IntFilter<"CelestialBody"> | number
    name?: StringFilter<"CelestialBody"> | string
    type?: StringFilter<"CelestialBody"> | string
    equatorialRadius?: FloatFilter<"CelestialBody"> | number
    mass?: FloatFilter<"CelestialBody"> | number
    volume?: FloatFilter<"CelestialBody"> | number
    distanceFromSun?: FloatFilter<"CelestialBody"> | number
    orbitalPeriod?: FloatFilter<"CelestialBody"> | number
    rotationPeriod?: FloatFilter<"CelestialBody"> | number
    axialTilt?: FloatFilter<"CelestialBody"> | number
    numberOfMoons?: IntFilter<"CelestialBody"> | number
    hasRings?: BoolFilter<"CelestialBody"> | boolean
    atmosphereComposition?: StringFilter<"CelestialBody"> | string
    semiMajorAxis?: FloatFilter<"CelestialBody"> | number
    eccentricity?: FloatFilter<"CelestialBody"> | number
    orbitalInclination?: FloatFilter<"CelestialBody"> | number
    argumentOfPeriapsis?: FloatFilter<"CelestialBody"> | number
    longitudeOfAscendingNode?: FloatFilter<"CelestialBody"> | number
    meanAnomaly?: FloatFilter<"CelestialBody"> | number
    parentId?: IntNullableFilter<"CelestialBody"> | number | null
    parent?: XOR<CelestialBodyNullableScalarRelationFilter, CelestialBodyWhereInput> | null
    celestialBodies?: CelestialBodyListRelationFilter
  }

  export type CelestialBodyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    equatorialRadius?: SortOrder
    mass?: SortOrder
    volume?: SortOrder
    distanceFromSun?: SortOrder
    orbitalPeriod?: SortOrder
    rotationPeriod?: SortOrder
    axialTilt?: SortOrder
    numberOfMoons?: SortOrder
    hasRings?: SortOrder
    atmosphereComposition?: SortOrder
    semiMajorAxis?: SortOrder
    eccentricity?: SortOrder
    orbitalInclination?: SortOrder
    argumentOfPeriapsis?: SortOrder
    longitudeOfAscendingNode?: SortOrder
    meanAnomaly?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: CelestialBodyOrderByWithRelationInput
    celestialBodies?: CelestialBodyOrderByRelationAggregateInput
  }

  export type CelestialBodyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CelestialBodyWhereInput | CelestialBodyWhereInput[]
    OR?: CelestialBodyWhereInput[]
    NOT?: CelestialBodyWhereInput | CelestialBodyWhereInput[]
    type?: StringFilter<"CelestialBody"> | string
    equatorialRadius?: FloatFilter<"CelestialBody"> | number
    mass?: FloatFilter<"CelestialBody"> | number
    volume?: FloatFilter<"CelestialBody"> | number
    distanceFromSun?: FloatFilter<"CelestialBody"> | number
    orbitalPeriod?: FloatFilter<"CelestialBody"> | number
    rotationPeriod?: FloatFilter<"CelestialBody"> | number
    axialTilt?: FloatFilter<"CelestialBody"> | number
    numberOfMoons?: IntFilter<"CelestialBody"> | number
    hasRings?: BoolFilter<"CelestialBody"> | boolean
    atmosphereComposition?: StringFilter<"CelestialBody"> | string
    semiMajorAxis?: FloatFilter<"CelestialBody"> | number
    eccentricity?: FloatFilter<"CelestialBody"> | number
    orbitalInclination?: FloatFilter<"CelestialBody"> | number
    argumentOfPeriapsis?: FloatFilter<"CelestialBody"> | number
    longitudeOfAscendingNode?: FloatFilter<"CelestialBody"> | number
    meanAnomaly?: FloatFilter<"CelestialBody"> | number
    parentId?: IntNullableFilter<"CelestialBody"> | number | null
    parent?: XOR<CelestialBodyNullableScalarRelationFilter, CelestialBodyWhereInput> | null
    celestialBodies?: CelestialBodyListRelationFilter
  }, "id" | "name">

  export type CelestialBodyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    equatorialRadius?: SortOrder
    mass?: SortOrder
    volume?: SortOrder
    distanceFromSun?: SortOrder
    orbitalPeriod?: SortOrder
    rotationPeriod?: SortOrder
    axialTilt?: SortOrder
    numberOfMoons?: SortOrder
    hasRings?: SortOrder
    atmosphereComposition?: SortOrder
    semiMajorAxis?: SortOrder
    eccentricity?: SortOrder
    orbitalInclination?: SortOrder
    argumentOfPeriapsis?: SortOrder
    longitudeOfAscendingNode?: SortOrder
    meanAnomaly?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CelestialBodyCountOrderByAggregateInput
    _avg?: CelestialBodyAvgOrderByAggregateInput
    _max?: CelestialBodyMaxOrderByAggregateInput
    _min?: CelestialBodyMinOrderByAggregateInput
    _sum?: CelestialBodySumOrderByAggregateInput
  }

  export type CelestialBodyScalarWhereWithAggregatesInput = {
    AND?: CelestialBodyScalarWhereWithAggregatesInput | CelestialBodyScalarWhereWithAggregatesInput[]
    OR?: CelestialBodyScalarWhereWithAggregatesInput[]
    NOT?: CelestialBodyScalarWhereWithAggregatesInput | CelestialBodyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CelestialBody"> | number
    name?: StringWithAggregatesFilter<"CelestialBody"> | string
    type?: StringWithAggregatesFilter<"CelestialBody"> | string
    equatorialRadius?: FloatWithAggregatesFilter<"CelestialBody"> | number
    mass?: FloatWithAggregatesFilter<"CelestialBody"> | number
    volume?: FloatWithAggregatesFilter<"CelestialBody"> | number
    distanceFromSun?: FloatWithAggregatesFilter<"CelestialBody"> | number
    orbitalPeriod?: FloatWithAggregatesFilter<"CelestialBody"> | number
    rotationPeriod?: FloatWithAggregatesFilter<"CelestialBody"> | number
    axialTilt?: FloatWithAggregatesFilter<"CelestialBody"> | number
    numberOfMoons?: IntWithAggregatesFilter<"CelestialBody"> | number
    hasRings?: BoolWithAggregatesFilter<"CelestialBody"> | boolean
    atmosphereComposition?: StringWithAggregatesFilter<"CelestialBody"> | string
    semiMajorAxis?: FloatWithAggregatesFilter<"CelestialBody"> | number
    eccentricity?: FloatWithAggregatesFilter<"CelestialBody"> | number
    orbitalInclination?: FloatWithAggregatesFilter<"CelestialBody"> | number
    argumentOfPeriapsis?: FloatWithAggregatesFilter<"CelestialBody"> | number
    longitudeOfAscendingNode?: FloatWithAggregatesFilter<"CelestialBody"> | number
    meanAnomaly?: FloatWithAggregatesFilter<"CelestialBody"> | number
    parentId?: IntNullableWithAggregatesFilter<"CelestialBody"> | number | null
  }

  export type CelestialBodyCreateInput = {
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    parent?: CelestialBodyCreateNestedOneWithoutCelestialBodiesInput
    celestialBodies?: CelestialBodyCreateNestedManyWithoutParentInput
  }

  export type CelestialBodyUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    parentId?: number | null
    celestialBodies?: CelestialBodyUncheckedCreateNestedManyWithoutParentInput
  }

  export type CelestialBodyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
    parent?: CelestialBodyUpdateOneWithoutCelestialBodiesNestedInput
    celestialBodies?: CelestialBodyUpdateManyWithoutParentNestedInput
  }

  export type CelestialBodyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    celestialBodies?: CelestialBodyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CelestialBodyCreateManyInput = {
    id?: number
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    parentId?: number | null
  }

  export type CelestialBodyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
  }

  export type CelestialBodyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CelestialBodyNullableScalarRelationFilter = {
    is?: CelestialBodyWhereInput | null
    isNot?: CelestialBodyWhereInput | null
  }

  export type CelestialBodyListRelationFilter = {
    every?: CelestialBodyWhereInput
    some?: CelestialBodyWhereInput
    none?: CelestialBodyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CelestialBodyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CelestialBodyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    equatorialRadius?: SortOrder
    mass?: SortOrder
    volume?: SortOrder
    distanceFromSun?: SortOrder
    orbitalPeriod?: SortOrder
    rotationPeriod?: SortOrder
    axialTilt?: SortOrder
    numberOfMoons?: SortOrder
    hasRings?: SortOrder
    atmosphereComposition?: SortOrder
    semiMajorAxis?: SortOrder
    eccentricity?: SortOrder
    orbitalInclination?: SortOrder
    argumentOfPeriapsis?: SortOrder
    longitudeOfAscendingNode?: SortOrder
    meanAnomaly?: SortOrder
    parentId?: SortOrder
  }

  export type CelestialBodyAvgOrderByAggregateInput = {
    id?: SortOrder
    equatorialRadius?: SortOrder
    mass?: SortOrder
    volume?: SortOrder
    distanceFromSun?: SortOrder
    orbitalPeriod?: SortOrder
    rotationPeriod?: SortOrder
    axialTilt?: SortOrder
    numberOfMoons?: SortOrder
    semiMajorAxis?: SortOrder
    eccentricity?: SortOrder
    orbitalInclination?: SortOrder
    argumentOfPeriapsis?: SortOrder
    longitudeOfAscendingNode?: SortOrder
    meanAnomaly?: SortOrder
    parentId?: SortOrder
  }

  export type CelestialBodyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    equatorialRadius?: SortOrder
    mass?: SortOrder
    volume?: SortOrder
    distanceFromSun?: SortOrder
    orbitalPeriod?: SortOrder
    rotationPeriod?: SortOrder
    axialTilt?: SortOrder
    numberOfMoons?: SortOrder
    hasRings?: SortOrder
    atmosphereComposition?: SortOrder
    semiMajorAxis?: SortOrder
    eccentricity?: SortOrder
    orbitalInclination?: SortOrder
    argumentOfPeriapsis?: SortOrder
    longitudeOfAscendingNode?: SortOrder
    meanAnomaly?: SortOrder
    parentId?: SortOrder
  }

  export type CelestialBodyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    equatorialRadius?: SortOrder
    mass?: SortOrder
    volume?: SortOrder
    distanceFromSun?: SortOrder
    orbitalPeriod?: SortOrder
    rotationPeriod?: SortOrder
    axialTilt?: SortOrder
    numberOfMoons?: SortOrder
    hasRings?: SortOrder
    atmosphereComposition?: SortOrder
    semiMajorAxis?: SortOrder
    eccentricity?: SortOrder
    orbitalInclination?: SortOrder
    argumentOfPeriapsis?: SortOrder
    longitudeOfAscendingNode?: SortOrder
    meanAnomaly?: SortOrder
    parentId?: SortOrder
  }

  export type CelestialBodySumOrderByAggregateInput = {
    id?: SortOrder
    equatorialRadius?: SortOrder
    mass?: SortOrder
    volume?: SortOrder
    distanceFromSun?: SortOrder
    orbitalPeriod?: SortOrder
    rotationPeriod?: SortOrder
    axialTilt?: SortOrder
    numberOfMoons?: SortOrder
    semiMajorAxis?: SortOrder
    eccentricity?: SortOrder
    orbitalInclination?: SortOrder
    argumentOfPeriapsis?: SortOrder
    longitudeOfAscendingNode?: SortOrder
    meanAnomaly?: SortOrder
    parentId?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CelestialBodyCreateNestedOneWithoutCelestialBodiesInput = {
    create?: XOR<CelestialBodyCreateWithoutCelestialBodiesInput, CelestialBodyUncheckedCreateWithoutCelestialBodiesInput>
    connectOrCreate?: CelestialBodyCreateOrConnectWithoutCelestialBodiesInput
    connect?: CelestialBodyWhereUniqueInput
  }

  export type CelestialBodyCreateNestedManyWithoutParentInput = {
    create?: XOR<CelestialBodyCreateWithoutParentInput, CelestialBodyUncheckedCreateWithoutParentInput> | CelestialBodyCreateWithoutParentInput[] | CelestialBodyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CelestialBodyCreateOrConnectWithoutParentInput | CelestialBodyCreateOrConnectWithoutParentInput[]
    createMany?: CelestialBodyCreateManyParentInputEnvelope
    connect?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
  }

  export type CelestialBodyUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CelestialBodyCreateWithoutParentInput, CelestialBodyUncheckedCreateWithoutParentInput> | CelestialBodyCreateWithoutParentInput[] | CelestialBodyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CelestialBodyCreateOrConnectWithoutParentInput | CelestialBodyCreateOrConnectWithoutParentInput[]
    createMany?: CelestialBodyCreateManyParentInputEnvelope
    connect?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CelestialBodyUpdateOneWithoutCelestialBodiesNestedInput = {
    create?: XOR<CelestialBodyCreateWithoutCelestialBodiesInput, CelestialBodyUncheckedCreateWithoutCelestialBodiesInput>
    connectOrCreate?: CelestialBodyCreateOrConnectWithoutCelestialBodiesInput
    upsert?: CelestialBodyUpsertWithoutCelestialBodiesInput
    disconnect?: CelestialBodyWhereInput | boolean
    delete?: CelestialBodyWhereInput | boolean
    connect?: CelestialBodyWhereUniqueInput
    update?: XOR<XOR<CelestialBodyUpdateToOneWithWhereWithoutCelestialBodiesInput, CelestialBodyUpdateWithoutCelestialBodiesInput>, CelestialBodyUncheckedUpdateWithoutCelestialBodiesInput>
  }

  export type CelestialBodyUpdateManyWithoutParentNestedInput = {
    create?: XOR<CelestialBodyCreateWithoutParentInput, CelestialBodyUncheckedCreateWithoutParentInput> | CelestialBodyCreateWithoutParentInput[] | CelestialBodyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CelestialBodyCreateOrConnectWithoutParentInput | CelestialBodyCreateOrConnectWithoutParentInput[]
    upsert?: CelestialBodyUpsertWithWhereUniqueWithoutParentInput | CelestialBodyUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CelestialBodyCreateManyParentInputEnvelope
    set?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    disconnect?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    delete?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    connect?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    update?: CelestialBodyUpdateWithWhereUniqueWithoutParentInput | CelestialBodyUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CelestialBodyUpdateManyWithWhereWithoutParentInput | CelestialBodyUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CelestialBodyScalarWhereInput | CelestialBodyScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CelestialBodyUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CelestialBodyCreateWithoutParentInput, CelestialBodyUncheckedCreateWithoutParentInput> | CelestialBodyCreateWithoutParentInput[] | CelestialBodyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CelestialBodyCreateOrConnectWithoutParentInput | CelestialBodyCreateOrConnectWithoutParentInput[]
    upsert?: CelestialBodyUpsertWithWhereUniqueWithoutParentInput | CelestialBodyUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CelestialBodyCreateManyParentInputEnvelope
    set?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    disconnect?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    delete?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    connect?: CelestialBodyWhereUniqueInput | CelestialBodyWhereUniqueInput[]
    update?: CelestialBodyUpdateWithWhereUniqueWithoutParentInput | CelestialBodyUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CelestialBodyUpdateManyWithWhereWithoutParentInput | CelestialBodyUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CelestialBodyScalarWhereInput | CelestialBodyScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CelestialBodyCreateWithoutCelestialBodiesInput = {
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    parent?: CelestialBodyCreateNestedOneWithoutCelestialBodiesInput
  }

  export type CelestialBodyUncheckedCreateWithoutCelestialBodiesInput = {
    id?: number
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    parentId?: number | null
  }

  export type CelestialBodyCreateOrConnectWithoutCelestialBodiesInput = {
    where: CelestialBodyWhereUniqueInput
    create: XOR<CelestialBodyCreateWithoutCelestialBodiesInput, CelestialBodyUncheckedCreateWithoutCelestialBodiesInput>
  }

  export type CelestialBodyCreateWithoutParentInput = {
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    celestialBodies?: CelestialBodyCreateNestedManyWithoutParentInput
  }

  export type CelestialBodyUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
    celestialBodies?: CelestialBodyUncheckedCreateNestedManyWithoutParentInput
  }

  export type CelestialBodyCreateOrConnectWithoutParentInput = {
    where: CelestialBodyWhereUniqueInput
    create: XOR<CelestialBodyCreateWithoutParentInput, CelestialBodyUncheckedCreateWithoutParentInput>
  }

  export type CelestialBodyCreateManyParentInputEnvelope = {
    data: CelestialBodyCreateManyParentInput | CelestialBodyCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CelestialBodyUpsertWithoutCelestialBodiesInput = {
    update: XOR<CelestialBodyUpdateWithoutCelestialBodiesInput, CelestialBodyUncheckedUpdateWithoutCelestialBodiesInput>
    create: XOR<CelestialBodyCreateWithoutCelestialBodiesInput, CelestialBodyUncheckedCreateWithoutCelestialBodiesInput>
    where?: CelestialBodyWhereInput
  }

  export type CelestialBodyUpdateToOneWithWhereWithoutCelestialBodiesInput = {
    where?: CelestialBodyWhereInput
    data: XOR<CelestialBodyUpdateWithoutCelestialBodiesInput, CelestialBodyUncheckedUpdateWithoutCelestialBodiesInput>
  }

  export type CelestialBodyUpdateWithoutCelestialBodiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
    parent?: CelestialBodyUpdateOneWithoutCelestialBodiesNestedInput
  }

  export type CelestialBodyUncheckedUpdateWithoutCelestialBodiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CelestialBodyUpsertWithWhereUniqueWithoutParentInput = {
    where: CelestialBodyWhereUniqueInput
    update: XOR<CelestialBodyUpdateWithoutParentInput, CelestialBodyUncheckedUpdateWithoutParentInput>
    create: XOR<CelestialBodyCreateWithoutParentInput, CelestialBodyUncheckedCreateWithoutParentInput>
  }

  export type CelestialBodyUpdateWithWhereUniqueWithoutParentInput = {
    where: CelestialBodyWhereUniqueInput
    data: XOR<CelestialBodyUpdateWithoutParentInput, CelestialBodyUncheckedUpdateWithoutParentInput>
  }

  export type CelestialBodyUpdateManyWithWhereWithoutParentInput = {
    where: CelestialBodyScalarWhereInput
    data: XOR<CelestialBodyUpdateManyMutationInput, CelestialBodyUncheckedUpdateManyWithoutParentInput>
  }

  export type CelestialBodyScalarWhereInput = {
    AND?: CelestialBodyScalarWhereInput | CelestialBodyScalarWhereInput[]
    OR?: CelestialBodyScalarWhereInput[]
    NOT?: CelestialBodyScalarWhereInput | CelestialBodyScalarWhereInput[]
    id?: IntFilter<"CelestialBody"> | number
    name?: StringFilter<"CelestialBody"> | string
    type?: StringFilter<"CelestialBody"> | string
    equatorialRadius?: FloatFilter<"CelestialBody"> | number
    mass?: FloatFilter<"CelestialBody"> | number
    volume?: FloatFilter<"CelestialBody"> | number
    distanceFromSun?: FloatFilter<"CelestialBody"> | number
    orbitalPeriod?: FloatFilter<"CelestialBody"> | number
    rotationPeriod?: FloatFilter<"CelestialBody"> | number
    axialTilt?: FloatFilter<"CelestialBody"> | number
    numberOfMoons?: IntFilter<"CelestialBody"> | number
    hasRings?: BoolFilter<"CelestialBody"> | boolean
    atmosphereComposition?: StringFilter<"CelestialBody"> | string
    semiMajorAxis?: FloatFilter<"CelestialBody"> | number
    eccentricity?: FloatFilter<"CelestialBody"> | number
    orbitalInclination?: FloatFilter<"CelestialBody"> | number
    argumentOfPeriapsis?: FloatFilter<"CelestialBody"> | number
    longitudeOfAscendingNode?: FloatFilter<"CelestialBody"> | number
    meanAnomaly?: FloatFilter<"CelestialBody"> | number
    parentId?: IntNullableFilter<"CelestialBody"> | number | null
  }

  export type CelestialBodyCreateManyParentInput = {
    id?: number
    name: string
    type: string
    equatorialRadius: number
    mass: number
    volume: number
    distanceFromSun: number
    orbitalPeriod: number
    rotationPeriod: number
    axialTilt: number
    numberOfMoons: number
    hasRings: boolean
    atmosphereComposition: string
    semiMajorAxis: number
    eccentricity: number
    orbitalInclination: number
    argumentOfPeriapsis: number
    longitudeOfAscendingNode: number
    meanAnomaly: number
  }

  export type CelestialBodyUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
    celestialBodies?: CelestialBodyUpdateManyWithoutParentNestedInput
  }

  export type CelestialBodyUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
    celestialBodies?: CelestialBodyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CelestialBodyUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    equatorialRadius?: FloatFieldUpdateOperationsInput | number
    mass?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    distanceFromSun?: FloatFieldUpdateOperationsInput | number
    orbitalPeriod?: FloatFieldUpdateOperationsInput | number
    rotationPeriod?: FloatFieldUpdateOperationsInput | number
    axialTilt?: FloatFieldUpdateOperationsInput | number
    numberOfMoons?: IntFieldUpdateOperationsInput | number
    hasRings?: BoolFieldUpdateOperationsInput | boolean
    atmosphereComposition?: StringFieldUpdateOperationsInput | string
    semiMajorAxis?: FloatFieldUpdateOperationsInput | number
    eccentricity?: FloatFieldUpdateOperationsInput | number
    orbitalInclination?: FloatFieldUpdateOperationsInput | number
    argumentOfPeriapsis?: FloatFieldUpdateOperationsInput | number
    longitudeOfAscendingNode?: FloatFieldUpdateOperationsInput | number
    meanAnomaly?: FloatFieldUpdateOperationsInput | number
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