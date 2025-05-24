
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
 * Model UserCredential
 * 
 */
export type UserCredential = $Result.DefaultSelection<Prisma.$UserCredentialPayload>
/**
 * Model UserLink
 * 
 */
export type UserLink = $Result.DefaultSelection<Prisma.$UserLinkPayload>
/**
 * Model Convertation
 * 
 */
export type Convertation = $Result.DefaultSelection<Prisma.$ConvertationPayload>
/**
 * Model ConvertationSchema
 * 
 */
export type ConvertationSchema = $Result.DefaultSelection<Prisma.$ConvertationSchemaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserLinkProvider: {
  GOOGLE: 'GOOGLE'
};

export type UserLinkProvider = (typeof UserLinkProvider)[keyof typeof UserLinkProvider]


export const ConvertationState: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type ConvertationState = (typeof ConvertationState)[keyof typeof ConvertationState]


export const ConvertationFormat: {
  PDF: 'PDF',
  JPG: 'JPG'
};

export type ConvertationFormat = (typeof ConvertationFormat)[keyof typeof ConvertationFormat]

}

export type UserLinkProvider = $Enums.UserLinkProvider

export const UserLinkProvider: typeof $Enums.UserLinkProvider

export type ConvertationState = $Enums.ConvertationState

export const ConvertationState: typeof $Enums.ConvertationState

export type ConvertationFormat = $Enums.ConvertationFormat

export const ConvertationFormat: typeof $Enums.ConvertationFormat

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
   * `prisma.userCredential`: Exposes CRUD operations for the **UserCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCredentials
    * const userCredentials = await prisma.userCredential.findMany()
    * ```
    */
  get userCredential(): Prisma.UserCredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLink`: Exposes CRUD operations for the **UserLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLinks
    * const userLinks = await prisma.userLink.findMany()
    * ```
    */
  get userLink(): Prisma.UserLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.convertation`: Exposes CRUD operations for the **Convertation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Convertations
    * const convertations = await prisma.convertation.findMany()
    * ```
    */
  get convertation(): Prisma.ConvertationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.convertationSchema`: Exposes CRUD operations for the **ConvertationSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConvertationSchemas
    * const convertationSchemas = await prisma.convertationSchema.findMany()
    * ```
    */
  get convertationSchema(): Prisma.ConvertationSchemaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    UserCredential: 'UserCredential',
    UserLink: 'UserLink',
    Convertation: 'Convertation',
    ConvertationSchema: 'ConvertationSchema'
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
      modelProps: "user" | "userCredential" | "userLink" | "convertation" | "convertationSchema"
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
      UserCredential: {
        payload: Prisma.$UserCredentialPayload<ExtArgs>
        fields: Prisma.UserCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          findFirst: {
            args: Prisma.UserCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          findMany: {
            args: Prisma.UserCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>[]
          }
          create: {
            args: Prisma.UserCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          createMany: {
            args: Prisma.UserCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>[]
          }
          delete: {
            args: Prisma.UserCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          update: {
            args: Prisma.UserCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          deleteMany: {
            args: Prisma.UserCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>[]
          }
          upsert: {
            args: Prisma.UserCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCredentialPayload>
          }
          aggregate: {
            args: Prisma.UserCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCredential>
          }
          groupBy: {
            args: Prisma.UserCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<UserCredentialCountAggregateOutputType> | number
          }
        }
      }
      UserLink: {
        payload: Prisma.$UserLinkPayload<ExtArgs>
        fields: Prisma.UserLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>
          }
          findFirst: {
            args: Prisma.UserLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>
          }
          findMany: {
            args: Prisma.UserLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>[]
          }
          create: {
            args: Prisma.UserLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>
          }
          createMany: {
            args: Prisma.UserLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>[]
          }
          delete: {
            args: Prisma.UserLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>
          }
          update: {
            args: Prisma.UserLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>
          }
          deleteMany: {
            args: Prisma.UserLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>[]
          }
          upsert: {
            args: Prisma.UserLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLinkPayload>
          }
          aggregate: {
            args: Prisma.UserLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLink>
          }
          groupBy: {
            args: Prisma.UserLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLinkCountArgs<ExtArgs>
            result: $Utils.Optional<UserLinkCountAggregateOutputType> | number
          }
        }
      }
      Convertation: {
        payload: Prisma.$ConvertationPayload<ExtArgs>
        fields: Prisma.ConvertationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConvertationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConvertationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>
          }
          findFirst: {
            args: Prisma.ConvertationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConvertationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>
          }
          findMany: {
            args: Prisma.ConvertationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>[]
          }
          create: {
            args: Prisma.ConvertationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>
          }
          createMany: {
            args: Prisma.ConvertationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConvertationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>[]
          }
          delete: {
            args: Prisma.ConvertationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>
          }
          update: {
            args: Prisma.ConvertationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>
          }
          deleteMany: {
            args: Prisma.ConvertationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConvertationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConvertationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>[]
          }
          upsert: {
            args: Prisma.ConvertationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationPayload>
          }
          aggregate: {
            args: Prisma.ConvertationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvertation>
          }
          groupBy: {
            args: Prisma.ConvertationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConvertationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConvertationCountArgs<ExtArgs>
            result: $Utils.Optional<ConvertationCountAggregateOutputType> | number
          }
        }
      }
      ConvertationSchema: {
        payload: Prisma.$ConvertationSchemaPayload<ExtArgs>
        fields: Prisma.ConvertationSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConvertationSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConvertationSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>
          }
          findFirst: {
            args: Prisma.ConvertationSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConvertationSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>
          }
          findMany: {
            args: Prisma.ConvertationSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>[]
          }
          create: {
            args: Prisma.ConvertationSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>
          }
          createMany: {
            args: Prisma.ConvertationSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConvertationSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>[]
          }
          delete: {
            args: Prisma.ConvertationSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>
          }
          update: {
            args: Prisma.ConvertationSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>
          }
          deleteMany: {
            args: Prisma.ConvertationSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConvertationSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConvertationSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>[]
          }
          upsert: {
            args: Prisma.ConvertationSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvertationSchemaPayload>
          }
          aggregate: {
            args: Prisma.ConvertationSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvertationSchema>
          }
          groupBy: {
            args: Prisma.ConvertationSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConvertationSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConvertationSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<ConvertationSchemaCountAggregateOutputType> | number
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
    userCredential?: UserCredentialOmit
    userLink?: UserLinkOmit
    convertation?: ConvertationOmit
    convertationSchema?: ConvertationSchemaOmit
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
    convertations: number
    links: number
    credentials: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convertations?: boolean | UserCountOutputTypeCountConvertationsArgs
    links?: boolean | UserCountOutputTypeCountLinksArgs
    credentials?: boolean | UserCountOutputTypeCountCredentialsArgs
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
  export type UserCountOutputTypeCountConvertationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvertationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCredentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCredentialWhereInput
  }


  /**
   * Count Type ConvertationSchemaCountOutputType
   */

  export type ConvertationSchemaCountOutputType = {
    convertations: number
  }

  export type ConvertationSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convertations?: boolean | ConvertationSchemaCountOutputTypeCountConvertationsArgs
  }

  // Custom InputTypes
  /**
   * ConvertationSchemaCountOutputType without action
   */
  export type ConvertationSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchemaCountOutputType
     */
    select?: ConvertationSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConvertationSchemaCountOutputType without action
   */
  export type ConvertationSchemaCountOutputTypeCountConvertationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvertationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    displayName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    displayName: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    displayName: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    avatarUrl?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    displayName: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    convertations?: boolean | User$convertationsArgs<ExtArgs>
    links?: boolean | User$linksArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "displayName" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convertations?: boolean | User$convertationsArgs<ExtArgs>
    links?: boolean | User$linksArgs<ExtArgs>
    credentials?: boolean | User$credentialsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      convertations: Prisma.$ConvertationPayload<ExtArgs>[]
      links: Prisma.$UserLinkPayload<ExtArgs>[]
      credentials: Prisma.$UserCredentialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      displayName: string
      avatarUrl: string | null
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
    convertations<T extends User$convertationsArgs<ExtArgs> = {}>(args?: Subset<T, User$convertationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    links<T extends User$linksArgs<ExtArgs> = {}>(args?: Subset<T, User$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    credentials<T extends User$credentialsArgs<ExtArgs> = {}>(args?: Subset<T, User$credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
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
   * User.convertations
   */
  export type User$convertationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    where?: ConvertationWhereInput
    orderBy?: ConvertationOrderByWithRelationInput | ConvertationOrderByWithRelationInput[]
    cursor?: ConvertationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConvertationScalarFieldEnum | ConvertationScalarFieldEnum[]
  }

  /**
   * User.links
   */
  export type User$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    where?: UserLinkWhereInput
    orderBy?: UserLinkOrderByWithRelationInput | UserLinkOrderByWithRelationInput[]
    cursor?: UserLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLinkScalarFieldEnum | UserLinkScalarFieldEnum[]
  }

  /**
   * User.credentials
   */
  export type User$credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    where?: UserCredentialWhereInput
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    cursor?: UserCredentialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCredentialScalarFieldEnum | UserCredentialScalarFieldEnum[]
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
   * Model UserCredential
   */

  export type AggregateUserCredential = {
    _count: UserCredentialCountAggregateOutputType | null
    _min: UserCredentialMinAggregateOutputType | null
    _max: UserCredentialMaxAggregateOutputType | null
  }

  export type UserCredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCredentialCountAggregateOutputType = {
    id: number
    userId: number
    passwordHash: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCredentialMinAggregateInputType = {
    id?: true
    userId?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCredentialCountAggregateInputType = {
    id?: true
    userId?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCredential to aggregate.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCredentials
    **/
    _count?: true | UserCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCredentialMaxAggregateInputType
  }

  export type GetUserCredentialAggregateType<T extends UserCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCredential[P]>
      : GetScalarType<T[P], AggregateUserCredential[P]>
  }




  export type UserCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCredentialWhereInput
    orderBy?: UserCredentialOrderByWithAggregationInput | UserCredentialOrderByWithAggregationInput[]
    by: UserCredentialScalarFieldEnum[] | UserCredentialScalarFieldEnum
    having?: UserCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCredentialCountAggregateInputType | true
    _min?: UserCredentialMinAggregateInputType
    _max?: UserCredentialMaxAggregateInputType
  }

  export type UserCredentialGroupByOutputType = {
    id: string
    userId: string
    passwordHash: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCredentialCountAggregateOutputType | null
    _min: UserCredentialMinAggregateOutputType | null
    _max: UserCredentialMaxAggregateOutputType | null
  }

  type GetUserCredentialGroupByPayload<T extends UserCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], UserCredentialGroupByOutputType[P]>
        }
      >
    >


  export type UserCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCredential"]>

  export type UserCredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCredential"]>

  export type UserCredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCredential"]>

  export type UserCredentialSelectScalar = {
    id?: boolean
    userId?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "passwordHash" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["userCredential"]>
  export type UserCredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCredential"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      passwordHash: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userCredential"]>
    composites: {}
  }

  type UserCredentialGetPayload<S extends boolean | null | undefined | UserCredentialDefaultArgs> = $Result.GetResult<Prisma.$UserCredentialPayload, S>

  type UserCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCredentialCountAggregateInputType | true
    }

  export interface UserCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCredential'], meta: { name: 'UserCredential' } }
    /**
     * Find zero or one UserCredential that matches the filter.
     * @param {UserCredentialFindUniqueArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCredentialFindUniqueArgs>(args: SelectSubset<T, UserCredentialFindUniqueArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCredentialFindUniqueOrThrowArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialFindFirstArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCredentialFindFirstArgs>(args?: SelectSubset<T, UserCredentialFindFirstArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialFindFirstOrThrowArgs} args - Arguments to find a UserCredential
     * @example
     * // Get one UserCredential
     * const userCredential = await prisma.userCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCredentials
     * const userCredentials = await prisma.userCredential.findMany()
     * 
     * // Get first 10 UserCredentials
     * const userCredentials = await prisma.userCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCredentialWithIdOnly = await prisma.userCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCredentialFindManyArgs>(args?: SelectSubset<T, UserCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCredential.
     * @param {UserCredentialCreateArgs} args - Arguments to create a UserCredential.
     * @example
     * // Create one UserCredential
     * const UserCredential = await prisma.userCredential.create({
     *   data: {
     *     // ... data to create a UserCredential
     *   }
     * })
     * 
     */
    create<T extends UserCredentialCreateArgs>(args: SelectSubset<T, UserCredentialCreateArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCredentials.
     * @param {UserCredentialCreateManyArgs} args - Arguments to create many UserCredentials.
     * @example
     * // Create many UserCredentials
     * const userCredential = await prisma.userCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCredentialCreateManyArgs>(args?: SelectSubset<T, UserCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCredentials and returns the data saved in the database.
     * @param {UserCredentialCreateManyAndReturnArgs} args - Arguments to create many UserCredentials.
     * @example
     * // Create many UserCredentials
     * const userCredential = await prisma.userCredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCredentials and only return the `id`
     * const userCredentialWithIdOnly = await prisma.userCredential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCredential.
     * @param {UserCredentialDeleteArgs} args - Arguments to delete one UserCredential.
     * @example
     * // Delete one UserCredential
     * const UserCredential = await prisma.userCredential.delete({
     *   where: {
     *     // ... filter to delete one UserCredential
     *   }
     * })
     * 
     */
    delete<T extends UserCredentialDeleteArgs>(args: SelectSubset<T, UserCredentialDeleteArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCredential.
     * @param {UserCredentialUpdateArgs} args - Arguments to update one UserCredential.
     * @example
     * // Update one UserCredential
     * const userCredential = await prisma.userCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCredentialUpdateArgs>(args: SelectSubset<T, UserCredentialUpdateArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCredentials.
     * @param {UserCredentialDeleteManyArgs} args - Arguments to filter UserCredentials to delete.
     * @example
     * // Delete a few UserCredentials
     * const { count } = await prisma.userCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCredentialDeleteManyArgs>(args?: SelectSubset<T, UserCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCredentials
     * const userCredential = await prisma.userCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCredentialUpdateManyArgs>(args: SelectSubset<T, UserCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCredentials and returns the data updated in the database.
     * @param {UserCredentialUpdateManyAndReturnArgs} args - Arguments to update many UserCredentials.
     * @example
     * // Update many UserCredentials
     * const userCredential = await prisma.userCredential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCredentials and only return the `id`
     * const userCredentialWithIdOnly = await prisma.userCredential.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserCredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCredential.
     * @param {UserCredentialUpsertArgs} args - Arguments to update or create a UserCredential.
     * @example
     * // Update or create a UserCredential
     * const userCredential = await prisma.userCredential.upsert({
     *   create: {
     *     // ... data to create a UserCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCredential we want to update
     *   }
     * })
     */
    upsert<T extends UserCredentialUpsertArgs>(args: SelectSubset<T, UserCredentialUpsertArgs<ExtArgs>>): Prisma__UserCredentialClient<$Result.GetResult<Prisma.$UserCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialCountArgs} args - Arguments to filter UserCredentials to count.
     * @example
     * // Count the number of UserCredentials
     * const count = await prisma.userCredential.count({
     *   where: {
     *     // ... the filter for the UserCredentials we want to count
     *   }
     * })
    **/
    count<T extends UserCredentialCountArgs>(
      args?: Subset<T, UserCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCredentialAggregateArgs>(args: Subset<T, UserCredentialAggregateArgs>): Prisma.PrismaPromise<GetUserCredentialAggregateType<T>>

    /**
     * Group by UserCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCredentialGroupByArgs} args - Group by arguments.
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
      T extends UserCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCredentialGroupByArgs['orderBy'] }
        : { orderBy?: UserCredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCredential model
   */
  readonly fields: UserCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserCredential model
   */
  interface UserCredentialFieldRefs {
    readonly id: FieldRef<"UserCredential", 'String'>
    readonly userId: FieldRef<"UserCredential", 'String'>
    readonly passwordHash: FieldRef<"UserCredential", 'String'>
    readonly isActive: FieldRef<"UserCredential", 'Boolean'>
    readonly createdAt: FieldRef<"UserCredential", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCredential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCredential findUnique
   */
  export type UserCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential findUniqueOrThrow
   */
  export type UserCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential findFirst
   */
  export type UserCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCredentials.
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCredentials.
     */
    distinct?: UserCredentialScalarFieldEnum | UserCredentialScalarFieldEnum[]
  }

  /**
   * UserCredential findFirstOrThrow
   */
  export type UserCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredential to fetch.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCredentials.
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCredentials.
     */
    distinct?: UserCredentialScalarFieldEnum | UserCredentialScalarFieldEnum[]
  }

  /**
   * UserCredential findMany
   */
  export type UserCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter, which UserCredentials to fetch.
     */
    where?: UserCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCredentials to fetch.
     */
    orderBy?: UserCredentialOrderByWithRelationInput | UserCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCredentials.
     */
    cursor?: UserCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCredentials.
     */
    skip?: number
    distinct?: UserCredentialScalarFieldEnum | UserCredentialScalarFieldEnum[]
  }

  /**
   * UserCredential create
   */
  export type UserCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCredential.
     */
    data: XOR<UserCredentialCreateInput, UserCredentialUncheckedCreateInput>
  }

  /**
   * UserCredential createMany
   */
  export type UserCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCredentials.
     */
    data: UserCredentialCreateManyInput | UserCredentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCredential createManyAndReturn
   */
  export type UserCredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * The data used to create many UserCredentials.
     */
    data: UserCredentialCreateManyInput | UserCredentialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCredential update
   */
  export type UserCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCredential.
     */
    data: XOR<UserCredentialUpdateInput, UserCredentialUncheckedUpdateInput>
    /**
     * Choose, which UserCredential to update.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential updateMany
   */
  export type UserCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCredentials.
     */
    data: XOR<UserCredentialUpdateManyMutationInput, UserCredentialUncheckedUpdateManyInput>
    /**
     * Filter which UserCredentials to update
     */
    where?: UserCredentialWhereInput
    /**
     * Limit how many UserCredentials to update.
     */
    limit?: number
  }

  /**
   * UserCredential updateManyAndReturn
   */
  export type UserCredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * The data used to update UserCredentials.
     */
    data: XOR<UserCredentialUpdateManyMutationInput, UserCredentialUncheckedUpdateManyInput>
    /**
     * Filter which UserCredentials to update
     */
    where?: UserCredentialWhereInput
    /**
     * Limit how many UserCredentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCredential upsert
   */
  export type UserCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCredential to update in case it exists.
     */
    where: UserCredentialWhereUniqueInput
    /**
     * In case the UserCredential found by the `where` argument doesn't exist, create a new UserCredential with this data.
     */
    create: XOR<UserCredentialCreateInput, UserCredentialUncheckedCreateInput>
    /**
     * In case the UserCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCredentialUpdateInput, UserCredentialUncheckedUpdateInput>
  }

  /**
   * UserCredential delete
   */
  export type UserCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
    /**
     * Filter which UserCredential to delete.
     */
    where: UserCredentialWhereUniqueInput
  }

  /**
   * UserCredential deleteMany
   */
  export type UserCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCredentials to delete
     */
    where?: UserCredentialWhereInput
    /**
     * Limit how many UserCredentials to delete.
     */
    limit?: number
  }

  /**
   * UserCredential without action
   */
  export type UserCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCredential
     */
    select?: UserCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCredential
     */
    omit?: UserCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCredentialInclude<ExtArgs> | null
  }


  /**
   * Model UserLink
   */

  export type AggregateUserLink = {
    _count: UserLinkCountAggregateOutputType | null
    _min: UserLinkMinAggregateOutputType | null
    _max: UserLinkMaxAggregateOutputType | null
  }

  export type UserLinkMinAggregateOutputType = {
    userId: string | null
    provider: $Enums.UserLinkProvider | null
    providerUserId: string | null
    accessKey: string | null
    refreshKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLinkMaxAggregateOutputType = {
    userId: string | null
    provider: $Enums.UserLinkProvider | null
    providerUserId: string | null
    accessKey: string | null
    refreshKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLinkCountAggregateOutputType = {
    userId: number
    provider: number
    providerUserId: number
    accessKey: number
    refreshKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserLinkMinAggregateInputType = {
    userId?: true
    provider?: true
    providerUserId?: true
    accessKey?: true
    refreshKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLinkMaxAggregateInputType = {
    userId?: true
    provider?: true
    providerUserId?: true
    accessKey?: true
    refreshKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLinkCountAggregateInputType = {
    userId?: true
    provider?: true
    providerUserId?: true
    accessKey?: true
    refreshKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLink to aggregate.
     */
    where?: UserLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLinks to fetch.
     */
    orderBy?: UserLinkOrderByWithRelationInput | UserLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLinks
    **/
    _count?: true | UserLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLinkMaxAggregateInputType
  }

  export type GetUserLinkAggregateType<T extends UserLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLink[P]>
      : GetScalarType<T[P], AggregateUserLink[P]>
  }




  export type UserLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLinkWhereInput
    orderBy?: UserLinkOrderByWithAggregationInput | UserLinkOrderByWithAggregationInput[]
    by: UserLinkScalarFieldEnum[] | UserLinkScalarFieldEnum
    having?: UserLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLinkCountAggregateInputType | true
    _min?: UserLinkMinAggregateInputType
    _max?: UserLinkMaxAggregateInputType
  }

  export type UserLinkGroupByOutputType = {
    userId: string
    provider: $Enums.UserLinkProvider
    providerUserId: string
    accessKey: string | null
    refreshKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserLinkCountAggregateOutputType | null
    _min: UserLinkMinAggregateOutputType | null
    _max: UserLinkMaxAggregateOutputType | null
  }

  type GetUserLinkGroupByPayload<T extends UserLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLinkGroupByOutputType[P]>
            : GetScalarType<T[P], UserLinkGroupByOutputType[P]>
        }
      >
    >


  export type UserLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    accessKey?: boolean
    refreshKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLink"]>

  export type UserLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    accessKey?: boolean
    refreshKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLink"]>

  export type UserLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    accessKey?: boolean
    refreshKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLink"]>

  export type UserLinkSelectScalar = {
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    accessKey?: boolean
    refreshKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "provider" | "providerUserId" | "accessKey" | "refreshKey" | "createdAt" | "updatedAt", ExtArgs["result"]["userLink"]>
  export type UserLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLink"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      provider: $Enums.UserLinkProvider
      providerUserId: string
      accessKey: string | null
      refreshKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userLink"]>
    composites: {}
  }

  type UserLinkGetPayload<S extends boolean | null | undefined | UserLinkDefaultArgs> = $Result.GetResult<Prisma.$UserLinkPayload, S>

  type UserLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLinkCountAggregateInputType | true
    }

  export interface UserLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLink'], meta: { name: 'UserLink' } }
    /**
     * Find zero or one UserLink that matches the filter.
     * @param {UserLinkFindUniqueArgs} args - Arguments to find a UserLink
     * @example
     * // Get one UserLink
     * const userLink = await prisma.userLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLinkFindUniqueArgs>(args: SelectSubset<T, UserLinkFindUniqueArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLinkFindUniqueOrThrowArgs} args - Arguments to find a UserLink
     * @example
     * // Get one UserLink
     * const userLink = await prisma.userLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLinkFindFirstArgs} args - Arguments to find a UserLink
     * @example
     * // Get one UserLink
     * const userLink = await prisma.userLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLinkFindFirstArgs>(args?: SelectSubset<T, UserLinkFindFirstArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLinkFindFirstOrThrowArgs} args - Arguments to find a UserLink
     * @example
     * // Get one UserLink
     * const userLink = await prisma.userLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLinks
     * const userLinks = await prisma.userLink.findMany()
     * 
     * // Get first 10 UserLinks
     * const userLinks = await prisma.userLink.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userLinkWithUserIdOnly = await prisma.userLink.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserLinkFindManyArgs>(args?: SelectSubset<T, UserLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLink.
     * @param {UserLinkCreateArgs} args - Arguments to create a UserLink.
     * @example
     * // Create one UserLink
     * const UserLink = await prisma.userLink.create({
     *   data: {
     *     // ... data to create a UserLink
     *   }
     * })
     * 
     */
    create<T extends UserLinkCreateArgs>(args: SelectSubset<T, UserLinkCreateArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLinks.
     * @param {UserLinkCreateManyArgs} args - Arguments to create many UserLinks.
     * @example
     * // Create many UserLinks
     * const userLink = await prisma.userLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLinkCreateManyArgs>(args?: SelectSubset<T, UserLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLinks and returns the data saved in the database.
     * @param {UserLinkCreateManyAndReturnArgs} args - Arguments to create many UserLinks.
     * @example
     * // Create many UserLinks
     * const userLink = await prisma.userLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLinks and only return the `userId`
     * const userLinkWithUserIdOnly = await prisma.userLink.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLink.
     * @param {UserLinkDeleteArgs} args - Arguments to delete one UserLink.
     * @example
     * // Delete one UserLink
     * const UserLink = await prisma.userLink.delete({
     *   where: {
     *     // ... filter to delete one UserLink
     *   }
     * })
     * 
     */
    delete<T extends UserLinkDeleteArgs>(args: SelectSubset<T, UserLinkDeleteArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLink.
     * @param {UserLinkUpdateArgs} args - Arguments to update one UserLink.
     * @example
     * // Update one UserLink
     * const userLink = await prisma.userLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLinkUpdateArgs>(args: SelectSubset<T, UserLinkUpdateArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLinks.
     * @param {UserLinkDeleteManyArgs} args - Arguments to filter UserLinks to delete.
     * @example
     * // Delete a few UserLinks
     * const { count } = await prisma.userLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLinkDeleteManyArgs>(args?: SelectSubset<T, UserLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLinks
     * const userLink = await prisma.userLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLinkUpdateManyArgs>(args: SelectSubset<T, UserLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLinks and returns the data updated in the database.
     * @param {UserLinkUpdateManyAndReturnArgs} args - Arguments to update many UserLinks.
     * @example
     * // Update many UserLinks
     * const userLink = await prisma.userLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLinks and only return the `userId`
     * const userLinkWithUserIdOnly = await prisma.userLink.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLink.
     * @param {UserLinkUpsertArgs} args - Arguments to update or create a UserLink.
     * @example
     * // Update or create a UserLink
     * const userLink = await prisma.userLink.upsert({
     *   create: {
     *     // ... data to create a UserLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLink we want to update
     *   }
     * })
     */
    upsert<T extends UserLinkUpsertArgs>(args: SelectSubset<T, UserLinkUpsertArgs<ExtArgs>>): Prisma__UserLinkClient<$Result.GetResult<Prisma.$UserLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLinkCountArgs} args - Arguments to filter UserLinks to count.
     * @example
     * // Count the number of UserLinks
     * const count = await prisma.userLink.count({
     *   where: {
     *     // ... the filter for the UserLinks we want to count
     *   }
     * })
    **/
    count<T extends UserLinkCountArgs>(
      args?: Subset<T, UserLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLinkAggregateArgs>(args: Subset<T, UserLinkAggregateArgs>): Prisma.PrismaPromise<GetUserLinkAggregateType<T>>

    /**
     * Group by UserLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLinkGroupByArgs} args - Group by arguments.
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
      T extends UserLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLinkGroupByArgs['orderBy'] }
        : { orderBy?: UserLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLink model
   */
  readonly fields: UserLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserLink model
   */
  interface UserLinkFieldRefs {
    readonly userId: FieldRef<"UserLink", 'String'>
    readonly provider: FieldRef<"UserLink", 'UserLinkProvider'>
    readonly providerUserId: FieldRef<"UserLink", 'String'>
    readonly accessKey: FieldRef<"UserLink", 'String'>
    readonly refreshKey: FieldRef<"UserLink", 'String'>
    readonly createdAt: FieldRef<"UserLink", 'DateTime'>
    readonly updatedAt: FieldRef<"UserLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLink findUnique
   */
  export type UserLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserLink to fetch.
     */
    where: UserLinkWhereUniqueInput
  }

  /**
   * UserLink findUniqueOrThrow
   */
  export type UserLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserLink to fetch.
     */
    where: UserLinkWhereUniqueInput
  }

  /**
   * UserLink findFirst
   */
  export type UserLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserLink to fetch.
     */
    where?: UserLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLinks to fetch.
     */
    orderBy?: UserLinkOrderByWithRelationInput | UserLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLinks.
     */
    cursor?: UserLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLinks.
     */
    distinct?: UserLinkScalarFieldEnum | UserLinkScalarFieldEnum[]
  }

  /**
   * UserLink findFirstOrThrow
   */
  export type UserLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserLink to fetch.
     */
    where?: UserLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLinks to fetch.
     */
    orderBy?: UserLinkOrderByWithRelationInput | UserLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLinks.
     */
    cursor?: UserLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLinks.
     */
    distinct?: UserLinkScalarFieldEnum | UserLinkScalarFieldEnum[]
  }

  /**
   * UserLink findMany
   */
  export type UserLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * Filter, which UserLinks to fetch.
     */
    where?: UserLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLinks to fetch.
     */
    orderBy?: UserLinkOrderByWithRelationInput | UserLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLinks.
     */
    cursor?: UserLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLinks.
     */
    skip?: number
    distinct?: UserLinkScalarFieldEnum | UserLinkScalarFieldEnum[]
  }

  /**
   * UserLink create
   */
  export type UserLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLink.
     */
    data: XOR<UserLinkCreateInput, UserLinkUncheckedCreateInput>
  }

  /**
   * UserLink createMany
   */
  export type UserLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLinks.
     */
    data: UserLinkCreateManyInput | UserLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLink createManyAndReturn
   */
  export type UserLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * The data used to create many UserLinks.
     */
    data: UserLinkCreateManyInput | UserLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLink update
   */
  export type UserLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLink.
     */
    data: XOR<UserLinkUpdateInput, UserLinkUncheckedUpdateInput>
    /**
     * Choose, which UserLink to update.
     */
    where: UserLinkWhereUniqueInput
  }

  /**
   * UserLink updateMany
   */
  export type UserLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLinks.
     */
    data: XOR<UserLinkUpdateManyMutationInput, UserLinkUncheckedUpdateManyInput>
    /**
     * Filter which UserLinks to update
     */
    where?: UserLinkWhereInput
    /**
     * Limit how many UserLinks to update.
     */
    limit?: number
  }

  /**
   * UserLink updateManyAndReturn
   */
  export type UserLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * The data used to update UserLinks.
     */
    data: XOR<UserLinkUpdateManyMutationInput, UserLinkUncheckedUpdateManyInput>
    /**
     * Filter which UserLinks to update
     */
    where?: UserLinkWhereInput
    /**
     * Limit how many UserLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLink upsert
   */
  export type UserLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLink to update in case it exists.
     */
    where: UserLinkWhereUniqueInput
    /**
     * In case the UserLink found by the `where` argument doesn't exist, create a new UserLink with this data.
     */
    create: XOR<UserLinkCreateInput, UserLinkUncheckedCreateInput>
    /**
     * In case the UserLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLinkUpdateInput, UserLinkUncheckedUpdateInput>
  }

  /**
   * UserLink delete
   */
  export type UserLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
    /**
     * Filter which UserLink to delete.
     */
    where: UserLinkWhereUniqueInput
  }

  /**
   * UserLink deleteMany
   */
  export type UserLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLinks to delete
     */
    where?: UserLinkWhereInput
    /**
     * Limit how many UserLinks to delete.
     */
    limit?: number
  }

  /**
   * UserLink without action
   */
  export type UserLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLink
     */
    select?: UserLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLink
     */
    omit?: UserLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLinkInclude<ExtArgs> | null
  }


  /**
   * Model Convertation
   */

  export type AggregateConvertation = {
    _count: ConvertationCountAggregateOutputType | null
    _avg: ConvertationAvgAggregateOutputType | null
    _sum: ConvertationSumAggregateOutputType | null
    _min: ConvertationMinAggregateOutputType | null
    _max: ConvertationMaxAggregateOutputType | null
  }

  export type ConvertationAvgAggregateOutputType = {
    schemaId: number | null
  }

  export type ConvertationSumAggregateOutputType = {
    schemaId: number | null
  }

  export type ConvertationMinAggregateOutputType = {
    id: string | null
    state: $Enums.ConvertationState | null
    fileFromUrl: string | null
    fileToUrl: string | null
    schemaId: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvertationMaxAggregateOutputType = {
    id: string | null
    state: $Enums.ConvertationState | null
    fileFromUrl: string | null
    fileToUrl: string | null
    schemaId: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvertationCountAggregateOutputType = {
    id: number
    state: number
    fileFromUrl: number
    fileToUrl: number
    schemaId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConvertationAvgAggregateInputType = {
    schemaId?: true
  }

  export type ConvertationSumAggregateInputType = {
    schemaId?: true
  }

  export type ConvertationMinAggregateInputType = {
    id?: true
    state?: true
    fileFromUrl?: true
    fileToUrl?: true
    schemaId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvertationMaxAggregateInputType = {
    id?: true
    state?: true
    fileFromUrl?: true
    fileToUrl?: true
    schemaId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvertationCountAggregateInputType = {
    id?: true
    state?: true
    fileFromUrl?: true
    fileToUrl?: true
    schemaId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConvertationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convertation to aggregate.
     */
    where?: ConvertationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convertations to fetch.
     */
    orderBy?: ConvertationOrderByWithRelationInput | ConvertationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConvertationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convertations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convertations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Convertations
    **/
    _count?: true | ConvertationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConvertationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConvertationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConvertationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConvertationMaxAggregateInputType
  }

  export type GetConvertationAggregateType<T extends ConvertationAggregateArgs> = {
        [P in keyof T & keyof AggregateConvertation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvertation[P]>
      : GetScalarType<T[P], AggregateConvertation[P]>
  }




  export type ConvertationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvertationWhereInput
    orderBy?: ConvertationOrderByWithAggregationInput | ConvertationOrderByWithAggregationInput[]
    by: ConvertationScalarFieldEnum[] | ConvertationScalarFieldEnum
    having?: ConvertationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConvertationCountAggregateInputType | true
    _avg?: ConvertationAvgAggregateInputType
    _sum?: ConvertationSumAggregateInputType
    _min?: ConvertationMinAggregateInputType
    _max?: ConvertationMaxAggregateInputType
  }

  export type ConvertationGroupByOutputType = {
    id: string
    state: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl: string | null
    schemaId: number
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConvertationCountAggregateOutputType | null
    _avg: ConvertationAvgAggregateOutputType | null
    _sum: ConvertationSumAggregateOutputType | null
    _min: ConvertationMinAggregateOutputType | null
    _max: ConvertationMaxAggregateOutputType | null
  }

  type GetConvertationGroupByPayload<T extends ConvertationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConvertationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConvertationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConvertationGroupByOutputType[P]>
            : GetScalarType<T[P], ConvertationGroupByOutputType[P]>
        }
      >
    >


  export type ConvertationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    fileFromUrl?: boolean
    fileToUrl?: boolean
    schemaId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schema?: boolean | ConvertationSchemaDefaultArgs<ExtArgs>
    user?: boolean | Convertation$userArgs<ExtArgs>
  }, ExtArgs["result"]["convertation"]>

  export type ConvertationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    fileFromUrl?: boolean
    fileToUrl?: boolean
    schemaId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schema?: boolean | ConvertationSchemaDefaultArgs<ExtArgs>
    user?: boolean | Convertation$userArgs<ExtArgs>
  }, ExtArgs["result"]["convertation"]>

  export type ConvertationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    fileFromUrl?: boolean
    fileToUrl?: boolean
    schemaId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schema?: boolean | ConvertationSchemaDefaultArgs<ExtArgs>
    user?: boolean | Convertation$userArgs<ExtArgs>
  }, ExtArgs["result"]["convertation"]>

  export type ConvertationSelectScalar = {
    id?: boolean
    state?: boolean
    fileFromUrl?: boolean
    fileToUrl?: boolean
    schemaId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConvertationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state" | "fileFromUrl" | "fileToUrl" | "schemaId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["convertation"]>
  export type ConvertationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schema?: boolean | ConvertationSchemaDefaultArgs<ExtArgs>
    user?: boolean | Convertation$userArgs<ExtArgs>
  }
  export type ConvertationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schema?: boolean | ConvertationSchemaDefaultArgs<ExtArgs>
    user?: boolean | Convertation$userArgs<ExtArgs>
  }
  export type ConvertationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schema?: boolean | ConvertationSchemaDefaultArgs<ExtArgs>
    user?: boolean | Convertation$userArgs<ExtArgs>
  }

  export type $ConvertationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Convertation"
    objects: {
      schema: Prisma.$ConvertationSchemaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      state: $Enums.ConvertationState
      fileFromUrl: string
      fileToUrl: string | null
      schemaId: number
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["convertation"]>
    composites: {}
  }

  type ConvertationGetPayload<S extends boolean | null | undefined | ConvertationDefaultArgs> = $Result.GetResult<Prisma.$ConvertationPayload, S>

  type ConvertationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConvertationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConvertationCountAggregateInputType | true
    }

  export interface ConvertationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Convertation'], meta: { name: 'Convertation' } }
    /**
     * Find zero or one Convertation that matches the filter.
     * @param {ConvertationFindUniqueArgs} args - Arguments to find a Convertation
     * @example
     * // Get one Convertation
     * const convertation = await prisma.convertation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConvertationFindUniqueArgs>(args: SelectSubset<T, ConvertationFindUniqueArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Convertation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConvertationFindUniqueOrThrowArgs} args - Arguments to find a Convertation
     * @example
     * // Get one Convertation
     * const convertation = await prisma.convertation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConvertationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConvertationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convertation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationFindFirstArgs} args - Arguments to find a Convertation
     * @example
     * // Get one Convertation
     * const convertation = await prisma.convertation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConvertationFindFirstArgs>(args?: SelectSubset<T, ConvertationFindFirstArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convertation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationFindFirstOrThrowArgs} args - Arguments to find a Convertation
     * @example
     * // Get one Convertation
     * const convertation = await prisma.convertation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConvertationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConvertationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Convertations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Convertations
     * const convertations = await prisma.convertation.findMany()
     * 
     * // Get first 10 Convertations
     * const convertations = await prisma.convertation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const convertationWithIdOnly = await prisma.convertation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConvertationFindManyArgs>(args?: SelectSubset<T, ConvertationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Convertation.
     * @param {ConvertationCreateArgs} args - Arguments to create a Convertation.
     * @example
     * // Create one Convertation
     * const Convertation = await prisma.convertation.create({
     *   data: {
     *     // ... data to create a Convertation
     *   }
     * })
     * 
     */
    create<T extends ConvertationCreateArgs>(args: SelectSubset<T, ConvertationCreateArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Convertations.
     * @param {ConvertationCreateManyArgs} args - Arguments to create many Convertations.
     * @example
     * // Create many Convertations
     * const convertation = await prisma.convertation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConvertationCreateManyArgs>(args?: SelectSubset<T, ConvertationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Convertations and returns the data saved in the database.
     * @param {ConvertationCreateManyAndReturnArgs} args - Arguments to create many Convertations.
     * @example
     * // Create many Convertations
     * const convertation = await prisma.convertation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Convertations and only return the `id`
     * const convertationWithIdOnly = await prisma.convertation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConvertationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConvertationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Convertation.
     * @param {ConvertationDeleteArgs} args - Arguments to delete one Convertation.
     * @example
     * // Delete one Convertation
     * const Convertation = await prisma.convertation.delete({
     *   where: {
     *     // ... filter to delete one Convertation
     *   }
     * })
     * 
     */
    delete<T extends ConvertationDeleteArgs>(args: SelectSubset<T, ConvertationDeleteArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Convertation.
     * @param {ConvertationUpdateArgs} args - Arguments to update one Convertation.
     * @example
     * // Update one Convertation
     * const convertation = await prisma.convertation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConvertationUpdateArgs>(args: SelectSubset<T, ConvertationUpdateArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Convertations.
     * @param {ConvertationDeleteManyArgs} args - Arguments to filter Convertations to delete.
     * @example
     * // Delete a few Convertations
     * const { count } = await prisma.convertation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConvertationDeleteManyArgs>(args?: SelectSubset<T, ConvertationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convertations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Convertations
     * const convertation = await prisma.convertation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConvertationUpdateManyArgs>(args: SelectSubset<T, ConvertationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convertations and returns the data updated in the database.
     * @param {ConvertationUpdateManyAndReturnArgs} args - Arguments to update many Convertations.
     * @example
     * // Update many Convertations
     * const convertation = await prisma.convertation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Convertations and only return the `id`
     * const convertationWithIdOnly = await prisma.convertation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConvertationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConvertationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Convertation.
     * @param {ConvertationUpsertArgs} args - Arguments to update or create a Convertation.
     * @example
     * // Update or create a Convertation
     * const convertation = await prisma.convertation.upsert({
     *   create: {
     *     // ... data to create a Convertation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Convertation we want to update
     *   }
     * })
     */
    upsert<T extends ConvertationUpsertArgs>(args: SelectSubset<T, ConvertationUpsertArgs<ExtArgs>>): Prisma__ConvertationClient<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Convertations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationCountArgs} args - Arguments to filter Convertations to count.
     * @example
     * // Count the number of Convertations
     * const count = await prisma.convertation.count({
     *   where: {
     *     // ... the filter for the Convertations we want to count
     *   }
     * })
    **/
    count<T extends ConvertationCountArgs>(
      args?: Subset<T, ConvertationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConvertationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Convertation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConvertationAggregateArgs>(args: Subset<T, ConvertationAggregateArgs>): Prisma.PrismaPromise<GetConvertationAggregateType<T>>

    /**
     * Group by Convertation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationGroupByArgs} args - Group by arguments.
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
      T extends ConvertationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConvertationGroupByArgs['orderBy'] }
        : { orderBy?: ConvertationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConvertationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvertationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Convertation model
   */
  readonly fields: ConvertationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Convertation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConvertationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schema<T extends ConvertationSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConvertationSchemaDefaultArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Convertation$userArgs<ExtArgs> = {}>(args?: Subset<T, Convertation$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Convertation model
   */
  interface ConvertationFieldRefs {
    readonly id: FieldRef<"Convertation", 'String'>
    readonly state: FieldRef<"Convertation", 'ConvertationState'>
    readonly fileFromUrl: FieldRef<"Convertation", 'String'>
    readonly fileToUrl: FieldRef<"Convertation", 'String'>
    readonly schemaId: FieldRef<"Convertation", 'Int'>
    readonly userId: FieldRef<"Convertation", 'String'>
    readonly createdAt: FieldRef<"Convertation", 'DateTime'>
    readonly updatedAt: FieldRef<"Convertation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Convertation findUnique
   */
  export type ConvertationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * Filter, which Convertation to fetch.
     */
    where: ConvertationWhereUniqueInput
  }

  /**
   * Convertation findUniqueOrThrow
   */
  export type ConvertationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * Filter, which Convertation to fetch.
     */
    where: ConvertationWhereUniqueInput
  }

  /**
   * Convertation findFirst
   */
  export type ConvertationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * Filter, which Convertation to fetch.
     */
    where?: ConvertationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convertations to fetch.
     */
    orderBy?: ConvertationOrderByWithRelationInput | ConvertationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convertations.
     */
    cursor?: ConvertationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convertations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convertations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convertations.
     */
    distinct?: ConvertationScalarFieldEnum | ConvertationScalarFieldEnum[]
  }

  /**
   * Convertation findFirstOrThrow
   */
  export type ConvertationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * Filter, which Convertation to fetch.
     */
    where?: ConvertationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convertations to fetch.
     */
    orderBy?: ConvertationOrderByWithRelationInput | ConvertationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convertations.
     */
    cursor?: ConvertationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convertations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convertations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convertations.
     */
    distinct?: ConvertationScalarFieldEnum | ConvertationScalarFieldEnum[]
  }

  /**
   * Convertation findMany
   */
  export type ConvertationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * Filter, which Convertations to fetch.
     */
    where?: ConvertationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convertations to fetch.
     */
    orderBy?: ConvertationOrderByWithRelationInput | ConvertationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Convertations.
     */
    cursor?: ConvertationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convertations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convertations.
     */
    skip?: number
    distinct?: ConvertationScalarFieldEnum | ConvertationScalarFieldEnum[]
  }

  /**
   * Convertation create
   */
  export type ConvertationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * The data needed to create a Convertation.
     */
    data: XOR<ConvertationCreateInput, ConvertationUncheckedCreateInput>
  }

  /**
   * Convertation createMany
   */
  export type ConvertationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Convertations.
     */
    data: ConvertationCreateManyInput | ConvertationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convertation createManyAndReturn
   */
  export type ConvertationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * The data used to create many Convertations.
     */
    data: ConvertationCreateManyInput | ConvertationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convertation update
   */
  export type ConvertationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * The data needed to update a Convertation.
     */
    data: XOR<ConvertationUpdateInput, ConvertationUncheckedUpdateInput>
    /**
     * Choose, which Convertation to update.
     */
    where: ConvertationWhereUniqueInput
  }

  /**
   * Convertation updateMany
   */
  export type ConvertationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Convertations.
     */
    data: XOR<ConvertationUpdateManyMutationInput, ConvertationUncheckedUpdateManyInput>
    /**
     * Filter which Convertations to update
     */
    where?: ConvertationWhereInput
    /**
     * Limit how many Convertations to update.
     */
    limit?: number
  }

  /**
   * Convertation updateManyAndReturn
   */
  export type ConvertationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * The data used to update Convertations.
     */
    data: XOR<ConvertationUpdateManyMutationInput, ConvertationUncheckedUpdateManyInput>
    /**
     * Filter which Convertations to update
     */
    where?: ConvertationWhereInput
    /**
     * Limit how many Convertations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Convertation upsert
   */
  export type ConvertationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * The filter to search for the Convertation to update in case it exists.
     */
    where: ConvertationWhereUniqueInput
    /**
     * In case the Convertation found by the `where` argument doesn't exist, create a new Convertation with this data.
     */
    create: XOR<ConvertationCreateInput, ConvertationUncheckedCreateInput>
    /**
     * In case the Convertation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConvertationUpdateInput, ConvertationUncheckedUpdateInput>
  }

  /**
   * Convertation delete
   */
  export type ConvertationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    /**
     * Filter which Convertation to delete.
     */
    where: ConvertationWhereUniqueInput
  }

  /**
   * Convertation deleteMany
   */
  export type ConvertationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convertations to delete
     */
    where?: ConvertationWhereInput
    /**
     * Limit how many Convertations to delete.
     */
    limit?: number
  }

  /**
   * Convertation.user
   */
  export type Convertation$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Convertation without action
   */
  export type ConvertationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
  }


  /**
   * Model ConvertationSchema
   */

  export type AggregateConvertationSchema = {
    _count: ConvertationSchemaCountAggregateOutputType | null
    _avg: ConvertationSchemaAvgAggregateOutputType | null
    _sum: ConvertationSchemaSumAggregateOutputType | null
    _min: ConvertationSchemaMinAggregateOutputType | null
    _max: ConvertationSchemaMaxAggregateOutputType | null
  }

  export type ConvertationSchemaAvgAggregateOutputType = {
    id: number | null
  }

  export type ConvertationSchemaSumAggregateOutputType = {
    id: number | null
  }

  export type ConvertationSchemaMinAggregateOutputType = {
    id: number | null
    fileFromFormat: $Enums.ConvertationFormat | null
    fileToFormat: $Enums.ConvertationFormat | null
    convertationEndpoint: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvertationSchemaMaxAggregateOutputType = {
    id: number | null
    fileFromFormat: $Enums.ConvertationFormat | null
    fileToFormat: $Enums.ConvertationFormat | null
    convertationEndpoint: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvertationSchemaCountAggregateOutputType = {
    id: number
    fileFromFormat: number
    fileToFormat: number
    convertationEndpoint: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConvertationSchemaAvgAggregateInputType = {
    id?: true
  }

  export type ConvertationSchemaSumAggregateInputType = {
    id?: true
  }

  export type ConvertationSchemaMinAggregateInputType = {
    id?: true
    fileFromFormat?: true
    fileToFormat?: true
    convertationEndpoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvertationSchemaMaxAggregateInputType = {
    id?: true
    fileFromFormat?: true
    fileToFormat?: true
    convertationEndpoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvertationSchemaCountAggregateInputType = {
    id?: true
    fileFromFormat?: true
    fileToFormat?: true
    convertationEndpoint?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConvertationSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConvertationSchema to aggregate.
     */
    where?: ConvertationSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConvertationSchemas to fetch.
     */
    orderBy?: ConvertationSchemaOrderByWithRelationInput | ConvertationSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConvertationSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConvertationSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConvertationSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConvertationSchemas
    **/
    _count?: true | ConvertationSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConvertationSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConvertationSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConvertationSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConvertationSchemaMaxAggregateInputType
  }

  export type GetConvertationSchemaAggregateType<T extends ConvertationSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateConvertationSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvertationSchema[P]>
      : GetScalarType<T[P], AggregateConvertationSchema[P]>
  }




  export type ConvertationSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvertationSchemaWhereInput
    orderBy?: ConvertationSchemaOrderByWithAggregationInput | ConvertationSchemaOrderByWithAggregationInput[]
    by: ConvertationSchemaScalarFieldEnum[] | ConvertationSchemaScalarFieldEnum
    having?: ConvertationSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConvertationSchemaCountAggregateInputType | true
    _avg?: ConvertationSchemaAvgAggregateInputType
    _sum?: ConvertationSchemaSumAggregateInputType
    _min?: ConvertationSchemaMinAggregateInputType
    _max?: ConvertationSchemaMaxAggregateInputType
  }

  export type ConvertationSchemaGroupByOutputType = {
    id: number
    fileFromFormat: $Enums.ConvertationFormat
    fileToFormat: $Enums.ConvertationFormat
    convertationEndpoint: string
    createdAt: Date
    updatedAt: Date
    _count: ConvertationSchemaCountAggregateOutputType | null
    _avg: ConvertationSchemaAvgAggregateOutputType | null
    _sum: ConvertationSchemaSumAggregateOutputType | null
    _min: ConvertationSchemaMinAggregateOutputType | null
    _max: ConvertationSchemaMaxAggregateOutputType | null
  }

  type GetConvertationSchemaGroupByPayload<T extends ConvertationSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConvertationSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConvertationSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConvertationSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], ConvertationSchemaGroupByOutputType[P]>
        }
      >
    >


  export type ConvertationSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileFromFormat?: boolean
    fileToFormat?: boolean
    convertationEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    convertations?: boolean | ConvertationSchema$convertationsArgs<ExtArgs>
    _count?: boolean | ConvertationSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convertationSchema"]>

  export type ConvertationSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileFromFormat?: boolean
    fileToFormat?: boolean
    convertationEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["convertationSchema"]>

  export type ConvertationSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileFromFormat?: boolean
    fileToFormat?: boolean
    convertationEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["convertationSchema"]>

  export type ConvertationSchemaSelectScalar = {
    id?: boolean
    fileFromFormat?: boolean
    fileToFormat?: boolean
    convertationEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConvertationSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileFromFormat" | "fileToFormat" | "convertationEndpoint" | "createdAt" | "updatedAt", ExtArgs["result"]["convertationSchema"]>
  export type ConvertationSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convertations?: boolean | ConvertationSchema$convertationsArgs<ExtArgs>
    _count?: boolean | ConvertationSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConvertationSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConvertationSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConvertationSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConvertationSchema"
    objects: {
      convertations: Prisma.$ConvertationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileFromFormat: $Enums.ConvertationFormat
      fileToFormat: $Enums.ConvertationFormat
      convertationEndpoint: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["convertationSchema"]>
    composites: {}
  }

  type ConvertationSchemaGetPayload<S extends boolean | null | undefined | ConvertationSchemaDefaultArgs> = $Result.GetResult<Prisma.$ConvertationSchemaPayload, S>

  type ConvertationSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConvertationSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConvertationSchemaCountAggregateInputType | true
    }

  export interface ConvertationSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConvertationSchema'], meta: { name: 'ConvertationSchema' } }
    /**
     * Find zero or one ConvertationSchema that matches the filter.
     * @param {ConvertationSchemaFindUniqueArgs} args - Arguments to find a ConvertationSchema
     * @example
     * // Get one ConvertationSchema
     * const convertationSchema = await prisma.convertationSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConvertationSchemaFindUniqueArgs>(args: SelectSubset<T, ConvertationSchemaFindUniqueArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConvertationSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConvertationSchemaFindUniqueOrThrowArgs} args - Arguments to find a ConvertationSchema
     * @example
     * // Get one ConvertationSchema
     * const convertationSchema = await prisma.convertationSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConvertationSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConvertationSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConvertationSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationSchemaFindFirstArgs} args - Arguments to find a ConvertationSchema
     * @example
     * // Get one ConvertationSchema
     * const convertationSchema = await prisma.convertationSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConvertationSchemaFindFirstArgs>(args?: SelectSubset<T, ConvertationSchemaFindFirstArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConvertationSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationSchemaFindFirstOrThrowArgs} args - Arguments to find a ConvertationSchema
     * @example
     * // Get one ConvertationSchema
     * const convertationSchema = await prisma.convertationSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConvertationSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConvertationSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConvertationSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConvertationSchemas
     * const convertationSchemas = await prisma.convertationSchema.findMany()
     * 
     * // Get first 10 ConvertationSchemas
     * const convertationSchemas = await prisma.convertationSchema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const convertationSchemaWithIdOnly = await prisma.convertationSchema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConvertationSchemaFindManyArgs>(args?: SelectSubset<T, ConvertationSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConvertationSchema.
     * @param {ConvertationSchemaCreateArgs} args - Arguments to create a ConvertationSchema.
     * @example
     * // Create one ConvertationSchema
     * const ConvertationSchema = await prisma.convertationSchema.create({
     *   data: {
     *     // ... data to create a ConvertationSchema
     *   }
     * })
     * 
     */
    create<T extends ConvertationSchemaCreateArgs>(args: SelectSubset<T, ConvertationSchemaCreateArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConvertationSchemas.
     * @param {ConvertationSchemaCreateManyArgs} args - Arguments to create many ConvertationSchemas.
     * @example
     * // Create many ConvertationSchemas
     * const convertationSchema = await prisma.convertationSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConvertationSchemaCreateManyArgs>(args?: SelectSubset<T, ConvertationSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConvertationSchemas and returns the data saved in the database.
     * @param {ConvertationSchemaCreateManyAndReturnArgs} args - Arguments to create many ConvertationSchemas.
     * @example
     * // Create many ConvertationSchemas
     * const convertationSchema = await prisma.convertationSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConvertationSchemas and only return the `id`
     * const convertationSchemaWithIdOnly = await prisma.convertationSchema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConvertationSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConvertationSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConvertationSchema.
     * @param {ConvertationSchemaDeleteArgs} args - Arguments to delete one ConvertationSchema.
     * @example
     * // Delete one ConvertationSchema
     * const ConvertationSchema = await prisma.convertationSchema.delete({
     *   where: {
     *     // ... filter to delete one ConvertationSchema
     *   }
     * })
     * 
     */
    delete<T extends ConvertationSchemaDeleteArgs>(args: SelectSubset<T, ConvertationSchemaDeleteArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConvertationSchema.
     * @param {ConvertationSchemaUpdateArgs} args - Arguments to update one ConvertationSchema.
     * @example
     * // Update one ConvertationSchema
     * const convertationSchema = await prisma.convertationSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConvertationSchemaUpdateArgs>(args: SelectSubset<T, ConvertationSchemaUpdateArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConvertationSchemas.
     * @param {ConvertationSchemaDeleteManyArgs} args - Arguments to filter ConvertationSchemas to delete.
     * @example
     * // Delete a few ConvertationSchemas
     * const { count } = await prisma.convertationSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConvertationSchemaDeleteManyArgs>(args?: SelectSubset<T, ConvertationSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConvertationSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConvertationSchemas
     * const convertationSchema = await prisma.convertationSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConvertationSchemaUpdateManyArgs>(args: SelectSubset<T, ConvertationSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConvertationSchemas and returns the data updated in the database.
     * @param {ConvertationSchemaUpdateManyAndReturnArgs} args - Arguments to update many ConvertationSchemas.
     * @example
     * // Update many ConvertationSchemas
     * const convertationSchema = await prisma.convertationSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConvertationSchemas and only return the `id`
     * const convertationSchemaWithIdOnly = await prisma.convertationSchema.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConvertationSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConvertationSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConvertationSchema.
     * @param {ConvertationSchemaUpsertArgs} args - Arguments to update or create a ConvertationSchema.
     * @example
     * // Update or create a ConvertationSchema
     * const convertationSchema = await prisma.convertationSchema.upsert({
     *   create: {
     *     // ... data to create a ConvertationSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConvertationSchema we want to update
     *   }
     * })
     */
    upsert<T extends ConvertationSchemaUpsertArgs>(args: SelectSubset<T, ConvertationSchemaUpsertArgs<ExtArgs>>): Prisma__ConvertationSchemaClient<$Result.GetResult<Prisma.$ConvertationSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConvertationSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationSchemaCountArgs} args - Arguments to filter ConvertationSchemas to count.
     * @example
     * // Count the number of ConvertationSchemas
     * const count = await prisma.convertationSchema.count({
     *   where: {
     *     // ... the filter for the ConvertationSchemas we want to count
     *   }
     * })
    **/
    count<T extends ConvertationSchemaCountArgs>(
      args?: Subset<T, ConvertationSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConvertationSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConvertationSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConvertationSchemaAggregateArgs>(args: Subset<T, ConvertationSchemaAggregateArgs>): Prisma.PrismaPromise<GetConvertationSchemaAggregateType<T>>

    /**
     * Group by ConvertationSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvertationSchemaGroupByArgs} args - Group by arguments.
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
      T extends ConvertationSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConvertationSchemaGroupByArgs['orderBy'] }
        : { orderBy?: ConvertationSchemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConvertationSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvertationSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConvertationSchema model
   */
  readonly fields: ConvertationSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConvertationSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConvertationSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    convertations<T extends ConvertationSchema$convertationsArgs<ExtArgs> = {}>(args?: Subset<T, ConvertationSchema$convertationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvertationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ConvertationSchema model
   */
  interface ConvertationSchemaFieldRefs {
    readonly id: FieldRef<"ConvertationSchema", 'Int'>
    readonly fileFromFormat: FieldRef<"ConvertationSchema", 'ConvertationFormat'>
    readonly fileToFormat: FieldRef<"ConvertationSchema", 'ConvertationFormat'>
    readonly convertationEndpoint: FieldRef<"ConvertationSchema", 'String'>
    readonly createdAt: FieldRef<"ConvertationSchema", 'DateTime'>
    readonly updatedAt: FieldRef<"ConvertationSchema", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConvertationSchema findUnique
   */
  export type ConvertationSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ConvertationSchema to fetch.
     */
    where: ConvertationSchemaWhereUniqueInput
  }

  /**
   * ConvertationSchema findUniqueOrThrow
   */
  export type ConvertationSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ConvertationSchema to fetch.
     */
    where: ConvertationSchemaWhereUniqueInput
  }

  /**
   * ConvertationSchema findFirst
   */
  export type ConvertationSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ConvertationSchema to fetch.
     */
    where?: ConvertationSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConvertationSchemas to fetch.
     */
    orderBy?: ConvertationSchemaOrderByWithRelationInput | ConvertationSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConvertationSchemas.
     */
    cursor?: ConvertationSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConvertationSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConvertationSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConvertationSchemas.
     */
    distinct?: ConvertationSchemaScalarFieldEnum | ConvertationSchemaScalarFieldEnum[]
  }

  /**
   * ConvertationSchema findFirstOrThrow
   */
  export type ConvertationSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ConvertationSchema to fetch.
     */
    where?: ConvertationSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConvertationSchemas to fetch.
     */
    orderBy?: ConvertationSchemaOrderByWithRelationInput | ConvertationSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConvertationSchemas.
     */
    cursor?: ConvertationSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConvertationSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConvertationSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConvertationSchemas.
     */
    distinct?: ConvertationSchemaScalarFieldEnum | ConvertationSchemaScalarFieldEnum[]
  }

  /**
   * ConvertationSchema findMany
   */
  export type ConvertationSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * Filter, which ConvertationSchemas to fetch.
     */
    where?: ConvertationSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConvertationSchemas to fetch.
     */
    orderBy?: ConvertationSchemaOrderByWithRelationInput | ConvertationSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConvertationSchemas.
     */
    cursor?: ConvertationSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConvertationSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConvertationSchemas.
     */
    skip?: number
    distinct?: ConvertationSchemaScalarFieldEnum | ConvertationSchemaScalarFieldEnum[]
  }

  /**
   * ConvertationSchema create
   */
  export type ConvertationSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a ConvertationSchema.
     */
    data: XOR<ConvertationSchemaCreateInput, ConvertationSchemaUncheckedCreateInput>
  }

  /**
   * ConvertationSchema createMany
   */
  export type ConvertationSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConvertationSchemas.
     */
    data: ConvertationSchemaCreateManyInput | ConvertationSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConvertationSchema createManyAndReturn
   */
  export type ConvertationSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many ConvertationSchemas.
     */
    data: ConvertationSchemaCreateManyInput | ConvertationSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConvertationSchema update
   */
  export type ConvertationSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a ConvertationSchema.
     */
    data: XOR<ConvertationSchemaUpdateInput, ConvertationSchemaUncheckedUpdateInput>
    /**
     * Choose, which ConvertationSchema to update.
     */
    where: ConvertationSchemaWhereUniqueInput
  }

  /**
   * ConvertationSchema updateMany
   */
  export type ConvertationSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConvertationSchemas.
     */
    data: XOR<ConvertationSchemaUpdateManyMutationInput, ConvertationSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ConvertationSchemas to update
     */
    where?: ConvertationSchemaWhereInput
    /**
     * Limit how many ConvertationSchemas to update.
     */
    limit?: number
  }

  /**
   * ConvertationSchema updateManyAndReturn
   */
  export type ConvertationSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * The data used to update ConvertationSchemas.
     */
    data: XOR<ConvertationSchemaUpdateManyMutationInput, ConvertationSchemaUncheckedUpdateManyInput>
    /**
     * Filter which ConvertationSchemas to update
     */
    where?: ConvertationSchemaWhereInput
    /**
     * Limit how many ConvertationSchemas to update.
     */
    limit?: number
  }

  /**
   * ConvertationSchema upsert
   */
  export type ConvertationSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the ConvertationSchema to update in case it exists.
     */
    where: ConvertationSchemaWhereUniqueInput
    /**
     * In case the ConvertationSchema found by the `where` argument doesn't exist, create a new ConvertationSchema with this data.
     */
    create: XOR<ConvertationSchemaCreateInput, ConvertationSchemaUncheckedCreateInput>
    /**
     * In case the ConvertationSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConvertationSchemaUpdateInput, ConvertationSchemaUncheckedUpdateInput>
  }

  /**
   * ConvertationSchema delete
   */
  export type ConvertationSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
    /**
     * Filter which ConvertationSchema to delete.
     */
    where: ConvertationSchemaWhereUniqueInput
  }

  /**
   * ConvertationSchema deleteMany
   */
  export type ConvertationSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConvertationSchemas to delete
     */
    where?: ConvertationSchemaWhereInput
    /**
     * Limit how many ConvertationSchemas to delete.
     */
    limit?: number
  }

  /**
   * ConvertationSchema.convertations
   */
  export type ConvertationSchema$convertationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convertation
     */
    select?: ConvertationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convertation
     */
    omit?: ConvertationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationInclude<ExtArgs> | null
    where?: ConvertationWhereInput
    orderBy?: ConvertationOrderByWithRelationInput | ConvertationOrderByWithRelationInput[]
    cursor?: ConvertationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConvertationScalarFieldEnum | ConvertationScalarFieldEnum[]
  }

  /**
   * ConvertationSchema without action
   */
  export type ConvertationSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvertationSchema
     */
    select?: ConvertationSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConvertationSchema
     */
    omit?: ConvertationSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvertationSchemaInclude<ExtArgs> | null
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
    username: 'username',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserCredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCredentialScalarFieldEnum = (typeof UserCredentialScalarFieldEnum)[keyof typeof UserCredentialScalarFieldEnum]


  export const UserLinkScalarFieldEnum: {
    userId: 'userId',
    provider: 'provider',
    providerUserId: 'providerUserId',
    accessKey: 'accessKey',
    refreshKey: 'refreshKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserLinkScalarFieldEnum = (typeof UserLinkScalarFieldEnum)[keyof typeof UserLinkScalarFieldEnum]


  export const ConvertationScalarFieldEnum: {
    id: 'id',
    state: 'state',
    fileFromUrl: 'fileFromUrl',
    fileToUrl: 'fileToUrl',
    schemaId: 'schemaId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConvertationScalarFieldEnum = (typeof ConvertationScalarFieldEnum)[keyof typeof ConvertationScalarFieldEnum]


  export const ConvertationSchemaScalarFieldEnum: {
    id: 'id',
    fileFromFormat: 'fileFromFormat',
    fileToFormat: 'fileToFormat',
    convertationEndpoint: 'convertationEndpoint',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConvertationSchemaScalarFieldEnum = (typeof ConvertationSchemaScalarFieldEnum)[keyof typeof ConvertationSchemaScalarFieldEnum]


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
   * Reference to a field of type 'UserLinkProvider'
   */
  export type EnumUserLinkProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLinkProvider'>
    


  /**
   * Reference to a field of type 'UserLinkProvider[]'
   */
  export type ListEnumUserLinkProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserLinkProvider[]'>
    


  /**
   * Reference to a field of type 'ConvertationState'
   */
  export type EnumConvertationStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConvertationState'>
    


  /**
   * Reference to a field of type 'ConvertationState[]'
   */
  export type ListEnumConvertationStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConvertationState[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ConvertationFormat'
   */
  export type EnumConvertationFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConvertationFormat'>
    


  /**
   * Reference to a field of type 'ConvertationFormat[]'
   */
  export type ListEnumConvertationFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConvertationFormat[]'>
    


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
    username?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    convertations?: ConvertationListRelationFilter
    links?: UserLinkListRelationFilter
    credentials?: UserCredentialListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    convertations?: ConvertationOrderByRelationAggregateInput
    links?: UserLinkOrderByRelationAggregateInput
    credentials?: UserCredentialOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    convertations?: ConvertationListRelationFilter
    links?: UserLinkListRelationFilter
    credentials?: UserCredentialListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserCredentialWhereInput = {
    AND?: UserCredentialWhereInput | UserCredentialWhereInput[]
    OR?: UserCredentialWhereInput[]
    NOT?: UserCredentialWhereInput | UserCredentialWhereInput[]
    id?: StringFilter<"UserCredential"> | string
    userId?: StringFilter<"UserCredential"> | string
    passwordHash?: StringFilter<"UserCredential"> | string
    isActive?: BoolFilter<"UserCredential"> | boolean
    createdAt?: DateTimeFilter<"UserCredential"> | Date | string
    updatedAt?: DateTimeFilter<"UserCredential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserCredentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCredentialWhereInput | UserCredentialWhereInput[]
    OR?: UserCredentialWhereInput[]
    NOT?: UserCredentialWhereInput | UserCredentialWhereInput[]
    userId?: StringFilter<"UserCredential"> | string
    passwordHash?: StringFilter<"UserCredential"> | string
    isActive?: BoolFilter<"UserCredential"> | boolean
    createdAt?: DateTimeFilter<"UserCredential"> | Date | string
    updatedAt?: DateTimeFilter<"UserCredential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCredentialCountOrderByAggregateInput
    _max?: UserCredentialMaxOrderByAggregateInput
    _min?: UserCredentialMinOrderByAggregateInput
  }

  export type UserCredentialScalarWhereWithAggregatesInput = {
    AND?: UserCredentialScalarWhereWithAggregatesInput | UserCredentialScalarWhereWithAggregatesInput[]
    OR?: UserCredentialScalarWhereWithAggregatesInput[]
    NOT?: UserCredentialScalarWhereWithAggregatesInput | UserCredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCredential"> | string
    userId?: StringWithAggregatesFilter<"UserCredential"> | string
    passwordHash?: StringWithAggregatesFilter<"UserCredential"> | string
    isActive?: BoolWithAggregatesFilter<"UserCredential"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserCredential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCredential"> | Date | string
  }

  export type UserLinkWhereInput = {
    AND?: UserLinkWhereInput | UserLinkWhereInput[]
    OR?: UserLinkWhereInput[]
    NOT?: UserLinkWhereInput | UserLinkWhereInput[]
    userId?: StringFilter<"UserLink"> | string
    provider?: EnumUserLinkProviderFilter<"UserLink"> | $Enums.UserLinkProvider
    providerUserId?: StringFilter<"UserLink"> | string
    accessKey?: StringNullableFilter<"UserLink"> | string | null
    refreshKey?: StringNullableFilter<"UserLink"> | string | null
    createdAt?: DateTimeFilter<"UserLink"> | Date | string
    updatedAt?: DateTimeFilter<"UserLink"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserLinkOrderByWithRelationInput = {
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessKey?: SortOrderInput | SortOrder
    refreshKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserLinkWhereUniqueInput = Prisma.AtLeast<{
    userId_provider?: UserLinkUserIdProviderCompoundUniqueInput
    providerUserId_provider?: UserLinkProviderUserIdProviderCompoundUniqueInput
    AND?: UserLinkWhereInput | UserLinkWhereInput[]
    OR?: UserLinkWhereInput[]
    NOT?: UserLinkWhereInput | UserLinkWhereInput[]
    userId?: StringFilter<"UserLink"> | string
    provider?: EnumUserLinkProviderFilter<"UserLink"> | $Enums.UserLinkProvider
    providerUserId?: StringFilter<"UserLink"> | string
    accessKey?: StringNullableFilter<"UserLink"> | string | null
    refreshKey?: StringNullableFilter<"UserLink"> | string | null
    createdAt?: DateTimeFilter<"UserLink"> | Date | string
    updatedAt?: DateTimeFilter<"UserLink"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "providerUserId_provider" | "userId_provider">

  export type UserLinkOrderByWithAggregationInput = {
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessKey?: SortOrderInput | SortOrder
    refreshKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserLinkCountOrderByAggregateInput
    _max?: UserLinkMaxOrderByAggregateInput
    _min?: UserLinkMinOrderByAggregateInput
  }

  export type UserLinkScalarWhereWithAggregatesInput = {
    AND?: UserLinkScalarWhereWithAggregatesInput | UserLinkScalarWhereWithAggregatesInput[]
    OR?: UserLinkScalarWhereWithAggregatesInput[]
    NOT?: UserLinkScalarWhereWithAggregatesInput | UserLinkScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserLink"> | string
    provider?: EnumUserLinkProviderWithAggregatesFilter<"UserLink"> | $Enums.UserLinkProvider
    providerUserId?: StringWithAggregatesFilter<"UserLink"> | string
    accessKey?: StringNullableWithAggregatesFilter<"UserLink"> | string | null
    refreshKey?: StringNullableWithAggregatesFilter<"UserLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserLink"> | Date | string
  }

  export type ConvertationWhereInput = {
    AND?: ConvertationWhereInput | ConvertationWhereInput[]
    OR?: ConvertationWhereInput[]
    NOT?: ConvertationWhereInput | ConvertationWhereInput[]
    id?: StringFilter<"Convertation"> | string
    state?: EnumConvertationStateFilter<"Convertation"> | $Enums.ConvertationState
    fileFromUrl?: StringFilter<"Convertation"> | string
    fileToUrl?: StringNullableFilter<"Convertation"> | string | null
    schemaId?: IntFilter<"Convertation"> | number
    userId?: StringNullableFilter<"Convertation"> | string | null
    createdAt?: DateTimeFilter<"Convertation"> | Date | string
    updatedAt?: DateTimeFilter<"Convertation"> | Date | string
    schema?: XOR<ConvertationSchemaScalarRelationFilter, ConvertationSchemaWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ConvertationOrderByWithRelationInput = {
    id?: SortOrder
    state?: SortOrder
    fileFromUrl?: SortOrder
    fileToUrl?: SortOrderInput | SortOrder
    schemaId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schema?: ConvertationSchemaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ConvertationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConvertationWhereInput | ConvertationWhereInput[]
    OR?: ConvertationWhereInput[]
    NOT?: ConvertationWhereInput | ConvertationWhereInput[]
    state?: EnumConvertationStateFilter<"Convertation"> | $Enums.ConvertationState
    fileFromUrl?: StringFilter<"Convertation"> | string
    fileToUrl?: StringNullableFilter<"Convertation"> | string | null
    schemaId?: IntFilter<"Convertation"> | number
    userId?: StringNullableFilter<"Convertation"> | string | null
    createdAt?: DateTimeFilter<"Convertation"> | Date | string
    updatedAt?: DateTimeFilter<"Convertation"> | Date | string
    schema?: XOR<ConvertationSchemaScalarRelationFilter, ConvertationSchemaWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ConvertationOrderByWithAggregationInput = {
    id?: SortOrder
    state?: SortOrder
    fileFromUrl?: SortOrder
    fileToUrl?: SortOrderInput | SortOrder
    schemaId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConvertationCountOrderByAggregateInput
    _avg?: ConvertationAvgOrderByAggregateInput
    _max?: ConvertationMaxOrderByAggregateInput
    _min?: ConvertationMinOrderByAggregateInput
    _sum?: ConvertationSumOrderByAggregateInput
  }

  export type ConvertationScalarWhereWithAggregatesInput = {
    AND?: ConvertationScalarWhereWithAggregatesInput | ConvertationScalarWhereWithAggregatesInput[]
    OR?: ConvertationScalarWhereWithAggregatesInput[]
    NOT?: ConvertationScalarWhereWithAggregatesInput | ConvertationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Convertation"> | string
    state?: EnumConvertationStateWithAggregatesFilter<"Convertation"> | $Enums.ConvertationState
    fileFromUrl?: StringWithAggregatesFilter<"Convertation"> | string
    fileToUrl?: StringNullableWithAggregatesFilter<"Convertation"> | string | null
    schemaId?: IntWithAggregatesFilter<"Convertation"> | number
    userId?: StringNullableWithAggregatesFilter<"Convertation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Convertation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Convertation"> | Date | string
  }

  export type ConvertationSchemaWhereInput = {
    AND?: ConvertationSchemaWhereInput | ConvertationSchemaWhereInput[]
    OR?: ConvertationSchemaWhereInput[]
    NOT?: ConvertationSchemaWhereInput | ConvertationSchemaWhereInput[]
    id?: IntFilter<"ConvertationSchema"> | number
    fileFromFormat?: EnumConvertationFormatFilter<"ConvertationSchema"> | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFilter<"ConvertationSchema"> | $Enums.ConvertationFormat
    convertationEndpoint?: StringFilter<"ConvertationSchema"> | string
    createdAt?: DateTimeFilter<"ConvertationSchema"> | Date | string
    updatedAt?: DateTimeFilter<"ConvertationSchema"> | Date | string
    convertations?: ConvertationListRelationFilter
  }

  export type ConvertationSchemaOrderByWithRelationInput = {
    id?: SortOrder
    fileFromFormat?: SortOrder
    fileToFormat?: SortOrder
    convertationEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    convertations?: ConvertationOrderByRelationAggregateInput
  }

  export type ConvertationSchemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConvertationSchemaWhereInput | ConvertationSchemaWhereInput[]
    OR?: ConvertationSchemaWhereInput[]
    NOT?: ConvertationSchemaWhereInput | ConvertationSchemaWhereInput[]
    fileFromFormat?: EnumConvertationFormatFilter<"ConvertationSchema"> | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFilter<"ConvertationSchema"> | $Enums.ConvertationFormat
    convertationEndpoint?: StringFilter<"ConvertationSchema"> | string
    createdAt?: DateTimeFilter<"ConvertationSchema"> | Date | string
    updatedAt?: DateTimeFilter<"ConvertationSchema"> | Date | string
    convertations?: ConvertationListRelationFilter
  }, "id">

  export type ConvertationSchemaOrderByWithAggregationInput = {
    id?: SortOrder
    fileFromFormat?: SortOrder
    fileToFormat?: SortOrder
    convertationEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConvertationSchemaCountOrderByAggregateInput
    _avg?: ConvertationSchemaAvgOrderByAggregateInput
    _max?: ConvertationSchemaMaxOrderByAggregateInput
    _min?: ConvertationSchemaMinOrderByAggregateInput
    _sum?: ConvertationSchemaSumOrderByAggregateInput
  }

  export type ConvertationSchemaScalarWhereWithAggregatesInput = {
    AND?: ConvertationSchemaScalarWhereWithAggregatesInput | ConvertationSchemaScalarWhereWithAggregatesInput[]
    OR?: ConvertationSchemaScalarWhereWithAggregatesInput[]
    NOT?: ConvertationSchemaScalarWhereWithAggregatesInput | ConvertationSchemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConvertationSchema"> | number
    fileFromFormat?: EnumConvertationFormatWithAggregatesFilter<"ConvertationSchema"> | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatWithAggregatesFilter<"ConvertationSchema"> | $Enums.ConvertationFormat
    convertationEndpoint?: StringWithAggregatesFilter<"ConvertationSchema"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConvertationSchema"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConvertationSchema"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationCreateNestedManyWithoutUserInput
    links?: UserLinkCreateNestedManyWithoutUserInput
    credentials?: UserCredentialCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationUncheckedCreateNestedManyWithoutUserInput
    links?: UserLinkUncheckedCreateNestedManyWithoutUserInput
    credentials?: UserCredentialUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUpdateManyWithoutUserNestedInput
    links?: UserLinkUpdateManyWithoutUserNestedInput
    credentials?: UserCredentialUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUncheckedUpdateManyWithoutUserNestedInput
    links?: UserLinkUncheckedUpdateManyWithoutUserNestedInput
    credentials?: UserCredentialUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialCreateInput = {
    id?: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCredentialsInput
  }

  export type UserCredentialUncheckedCreateInput = {
    id?: string
    userId: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCredentialsNestedInput
  }

  export type UserCredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialCreateManyInput = {
    id?: string
    userId: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLinkCreateInput = {
    provider: $Enums.UserLinkProvider
    providerUserId: string
    accessKey?: string | null
    refreshKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLinksInput
  }

  export type UserLinkUncheckedCreateInput = {
    userId: string
    provider: $Enums.UserLinkProvider
    providerUserId: string
    accessKey?: string | null
    refreshKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLinkUpdateInput = {
    provider?: EnumUserLinkProviderFieldUpdateOperationsInput | $Enums.UserLinkProvider
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    refreshKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLinksNestedInput
  }

  export type UserLinkUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumUserLinkProviderFieldUpdateOperationsInput | $Enums.UserLinkProvider
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    refreshKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLinkCreateManyInput = {
    userId: string
    provider: $Enums.UserLinkProvider
    providerUserId: string
    accessKey?: string | null
    refreshKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLinkUpdateManyMutationInput = {
    provider?: EnumUserLinkProviderFieldUpdateOperationsInput | $Enums.UserLinkProvider
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    refreshKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLinkUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumUserLinkProviderFieldUpdateOperationsInput | $Enums.UserLinkProvider
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    refreshKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationCreateInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schema: ConvertationSchemaCreateNestedOneWithoutConvertationsInput
    user?: UserCreateNestedOneWithoutConvertationsInput
  }

  export type ConvertationUncheckedCreateInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    schemaId: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schema?: ConvertationSchemaUpdateOneRequiredWithoutConvertationsNestedInput
    user?: UserUpdateOneWithoutConvertationsNestedInput
  }

  export type ConvertationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    schemaId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationCreateManyInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    schemaId: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    schemaId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationSchemaCreateInput = {
    fileFromFormat: $Enums.ConvertationFormat
    fileToFormat: $Enums.ConvertationFormat
    convertationEndpoint: string
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationCreateNestedManyWithoutSchemaInput
  }

  export type ConvertationSchemaUncheckedCreateInput = {
    id?: number
    fileFromFormat: $Enums.ConvertationFormat
    fileToFormat: $Enums.ConvertationFormat
    convertationEndpoint: string
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationUncheckedCreateNestedManyWithoutSchemaInput
  }

  export type ConvertationSchemaUpdateInput = {
    fileFromFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    convertationEndpoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUpdateManyWithoutSchemaNestedInput
  }

  export type ConvertationSchemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileFromFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    convertationEndpoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUncheckedUpdateManyWithoutSchemaNestedInput
  }

  export type ConvertationSchemaCreateManyInput = {
    id?: number
    fileFromFormat: $Enums.ConvertationFormat
    fileToFormat: $Enums.ConvertationFormat
    convertationEndpoint: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationSchemaUpdateManyMutationInput = {
    fileFromFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    convertationEndpoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationSchemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileFromFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    convertationEndpoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ConvertationListRelationFilter = {
    every?: ConvertationWhereInput
    some?: ConvertationWhereInput
    none?: ConvertationWhereInput
  }

  export type UserLinkListRelationFilter = {
    every?: UserLinkWhereInput
    some?: UserLinkWhereInput
    none?: UserLinkWhereInput
  }

  export type UserCredentialListRelationFilter = {
    every?: UserCredentialWhereInput
    some?: UserCredentialWhereInput
    none?: UserCredentialWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConvertationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCredentialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserLinkProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLinkProvider | EnumUserLinkProviderFieldRefInput<$PrismaModel>
    in?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLinkProviderFilter<$PrismaModel> | $Enums.UserLinkProvider
  }

  export type UserLinkUserIdProviderCompoundUniqueInput = {
    userId: string
    provider: $Enums.UserLinkProvider
  }

  export type UserLinkProviderUserIdProviderCompoundUniqueInput = {
    providerUserId: string
    provider: $Enums.UserLinkProvider
  }

  export type UserLinkCountOrderByAggregateInput = {
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessKey?: SortOrder
    refreshKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLinkMaxOrderByAggregateInput = {
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessKey?: SortOrder
    refreshKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLinkMinOrderByAggregateInput = {
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessKey?: SortOrder
    refreshKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserLinkProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLinkProvider | EnumUserLinkProviderFieldRefInput<$PrismaModel>
    in?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLinkProviderWithAggregatesFilter<$PrismaModel> | $Enums.UserLinkProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLinkProviderFilter<$PrismaModel>
    _max?: NestedEnumUserLinkProviderFilter<$PrismaModel>
  }

  export type EnumConvertationStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationState | EnumConvertationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationStateFilter<$PrismaModel> | $Enums.ConvertationState
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

  export type ConvertationSchemaScalarRelationFilter = {
    is?: ConvertationSchemaWhereInput
    isNot?: ConvertationSchemaWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ConvertationCountOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    fileFromUrl?: SortOrder
    fileToUrl?: SortOrder
    schemaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvertationAvgOrderByAggregateInput = {
    schemaId?: SortOrder
  }

  export type ConvertationMaxOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    fileFromUrl?: SortOrder
    fileToUrl?: SortOrder
    schemaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvertationMinOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    fileFromUrl?: SortOrder
    fileToUrl?: SortOrder
    schemaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvertationSumOrderByAggregateInput = {
    schemaId?: SortOrder
  }

  export type EnumConvertationStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationState | EnumConvertationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationStateWithAggregatesFilter<$PrismaModel> | $Enums.ConvertationState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConvertationStateFilter<$PrismaModel>
    _max?: NestedEnumConvertationStateFilter<$PrismaModel>
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

  export type EnumConvertationFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationFormat | EnumConvertationFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationFormatFilter<$PrismaModel> | $Enums.ConvertationFormat
  }

  export type ConvertationSchemaCountOrderByAggregateInput = {
    id?: SortOrder
    fileFromFormat?: SortOrder
    fileToFormat?: SortOrder
    convertationEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvertationSchemaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConvertationSchemaMaxOrderByAggregateInput = {
    id?: SortOrder
    fileFromFormat?: SortOrder
    fileToFormat?: SortOrder
    convertationEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvertationSchemaMinOrderByAggregateInput = {
    id?: SortOrder
    fileFromFormat?: SortOrder
    fileToFormat?: SortOrder
    convertationEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvertationSchemaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumConvertationFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationFormat | EnumConvertationFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationFormatWithAggregatesFilter<$PrismaModel> | $Enums.ConvertationFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConvertationFormatFilter<$PrismaModel>
    _max?: NestedEnumConvertationFormatFilter<$PrismaModel>
  }

  export type ConvertationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConvertationCreateWithoutUserInput, ConvertationUncheckedCreateWithoutUserInput> | ConvertationCreateWithoutUserInput[] | ConvertationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutUserInput | ConvertationCreateOrConnectWithoutUserInput[]
    createMany?: ConvertationCreateManyUserInputEnvelope
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
  }

  export type UserLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLinkCreateWithoutUserInput, UserLinkUncheckedCreateWithoutUserInput> | UserLinkCreateWithoutUserInput[] | UserLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLinkCreateOrConnectWithoutUserInput | UserLinkCreateOrConnectWithoutUserInput[]
    createMany?: UserLinkCreateManyUserInputEnvelope
    connect?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
  }

  export type UserCredentialCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput> | UserCredentialCreateWithoutUserInput[] | UserCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput | UserCredentialCreateOrConnectWithoutUserInput[]
    createMany?: UserCredentialCreateManyUserInputEnvelope
    connect?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
  }

  export type ConvertationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConvertationCreateWithoutUserInput, ConvertationUncheckedCreateWithoutUserInput> | ConvertationCreateWithoutUserInput[] | ConvertationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutUserInput | ConvertationCreateOrConnectWithoutUserInput[]
    createMany?: ConvertationCreateManyUserInputEnvelope
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
  }

  export type UserLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLinkCreateWithoutUserInput, UserLinkUncheckedCreateWithoutUserInput> | UserLinkCreateWithoutUserInput[] | UserLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLinkCreateOrConnectWithoutUserInput | UserLinkCreateOrConnectWithoutUserInput[]
    createMany?: UserLinkCreateManyUserInputEnvelope
    connect?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
  }

  export type UserCredentialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput> | UserCredentialCreateWithoutUserInput[] | UserCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput | UserCredentialCreateOrConnectWithoutUserInput[]
    createMany?: UserCredentialCreateManyUserInputEnvelope
    connect?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConvertationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConvertationCreateWithoutUserInput, ConvertationUncheckedCreateWithoutUserInput> | ConvertationCreateWithoutUserInput[] | ConvertationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutUserInput | ConvertationCreateOrConnectWithoutUserInput[]
    upsert?: ConvertationUpsertWithWhereUniqueWithoutUserInput | ConvertationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConvertationCreateManyUserInputEnvelope
    set?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    disconnect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    delete?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    update?: ConvertationUpdateWithWhereUniqueWithoutUserInput | ConvertationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConvertationUpdateManyWithWhereWithoutUserInput | ConvertationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConvertationScalarWhereInput | ConvertationScalarWhereInput[]
  }

  export type UserLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLinkCreateWithoutUserInput, UserLinkUncheckedCreateWithoutUserInput> | UserLinkCreateWithoutUserInput[] | UserLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLinkCreateOrConnectWithoutUserInput | UserLinkCreateOrConnectWithoutUserInput[]
    upsert?: UserLinkUpsertWithWhereUniqueWithoutUserInput | UserLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLinkCreateManyUserInputEnvelope
    set?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    disconnect?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    delete?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    connect?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    update?: UserLinkUpdateWithWhereUniqueWithoutUserInput | UserLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLinkUpdateManyWithWhereWithoutUserInput | UserLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLinkScalarWhereInput | UserLinkScalarWhereInput[]
  }

  export type UserCredentialUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput> | UserCredentialCreateWithoutUserInput[] | UserCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput | UserCredentialCreateOrConnectWithoutUserInput[]
    upsert?: UserCredentialUpsertWithWhereUniqueWithoutUserInput | UserCredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCredentialCreateManyUserInputEnvelope
    set?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    disconnect?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    delete?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    connect?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    update?: UserCredentialUpdateWithWhereUniqueWithoutUserInput | UserCredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCredentialUpdateManyWithWhereWithoutUserInput | UserCredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCredentialScalarWhereInput | UserCredentialScalarWhereInput[]
  }

  export type ConvertationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConvertationCreateWithoutUserInput, ConvertationUncheckedCreateWithoutUserInput> | ConvertationCreateWithoutUserInput[] | ConvertationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutUserInput | ConvertationCreateOrConnectWithoutUserInput[]
    upsert?: ConvertationUpsertWithWhereUniqueWithoutUserInput | ConvertationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConvertationCreateManyUserInputEnvelope
    set?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    disconnect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    delete?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    update?: ConvertationUpdateWithWhereUniqueWithoutUserInput | ConvertationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConvertationUpdateManyWithWhereWithoutUserInput | ConvertationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConvertationScalarWhereInput | ConvertationScalarWhereInput[]
  }

  export type UserLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLinkCreateWithoutUserInput, UserLinkUncheckedCreateWithoutUserInput> | UserLinkCreateWithoutUserInput[] | UserLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLinkCreateOrConnectWithoutUserInput | UserLinkCreateOrConnectWithoutUserInput[]
    upsert?: UserLinkUpsertWithWhereUniqueWithoutUserInput | UserLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLinkCreateManyUserInputEnvelope
    set?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    disconnect?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    delete?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    connect?: UserLinkWhereUniqueInput | UserLinkWhereUniqueInput[]
    update?: UserLinkUpdateWithWhereUniqueWithoutUserInput | UserLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLinkUpdateManyWithWhereWithoutUserInput | UserLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLinkScalarWhereInput | UserLinkScalarWhereInput[]
  }

  export type UserCredentialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput> | UserCredentialCreateWithoutUserInput[] | UserCredentialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCredentialCreateOrConnectWithoutUserInput | UserCredentialCreateOrConnectWithoutUserInput[]
    upsert?: UserCredentialUpsertWithWhereUniqueWithoutUserInput | UserCredentialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCredentialCreateManyUserInputEnvelope
    set?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    disconnect?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    delete?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    connect?: UserCredentialWhereUniqueInput | UserCredentialWhereUniqueInput[]
    update?: UserCredentialUpdateWithWhereUniqueWithoutUserInput | UserCredentialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCredentialUpdateManyWithWhereWithoutUserInput | UserCredentialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCredentialScalarWhereInput | UserCredentialScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCredentialsInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCredentialsInput
    upsert?: UserUpsertWithoutCredentialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCredentialsInput, UserUpdateWithoutCredentialsInput>, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserCreateNestedOneWithoutLinksInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    connect?: UserWhereUniqueInput
  }

  export type EnumUserLinkProviderFieldUpdateOperationsInput = {
    set?: $Enums.UserLinkProvider
  }

  export type UserUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    upsert?: UserUpsertWithoutLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinksInput, UserUpdateWithoutLinksInput>, UserUncheckedUpdateWithoutLinksInput>
  }

  export type ConvertationSchemaCreateNestedOneWithoutConvertationsInput = {
    create?: XOR<ConvertationSchemaCreateWithoutConvertationsInput, ConvertationSchemaUncheckedCreateWithoutConvertationsInput>
    connectOrCreate?: ConvertationSchemaCreateOrConnectWithoutConvertationsInput
    connect?: ConvertationSchemaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConvertationsInput = {
    create?: XOR<UserCreateWithoutConvertationsInput, UserUncheckedCreateWithoutConvertationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConvertationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumConvertationStateFieldUpdateOperationsInput = {
    set?: $Enums.ConvertationState
  }

  export type ConvertationSchemaUpdateOneRequiredWithoutConvertationsNestedInput = {
    create?: XOR<ConvertationSchemaCreateWithoutConvertationsInput, ConvertationSchemaUncheckedCreateWithoutConvertationsInput>
    connectOrCreate?: ConvertationSchemaCreateOrConnectWithoutConvertationsInput
    upsert?: ConvertationSchemaUpsertWithoutConvertationsInput
    connect?: ConvertationSchemaWhereUniqueInput
    update?: XOR<XOR<ConvertationSchemaUpdateToOneWithWhereWithoutConvertationsInput, ConvertationSchemaUpdateWithoutConvertationsInput>, ConvertationSchemaUncheckedUpdateWithoutConvertationsInput>
  }

  export type UserUpdateOneWithoutConvertationsNestedInput = {
    create?: XOR<UserCreateWithoutConvertationsInput, UserUncheckedCreateWithoutConvertationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConvertationsInput
    upsert?: UserUpsertWithoutConvertationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConvertationsInput, UserUpdateWithoutConvertationsInput>, UserUncheckedUpdateWithoutConvertationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConvertationCreateNestedManyWithoutSchemaInput = {
    create?: XOR<ConvertationCreateWithoutSchemaInput, ConvertationUncheckedCreateWithoutSchemaInput> | ConvertationCreateWithoutSchemaInput[] | ConvertationUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutSchemaInput | ConvertationCreateOrConnectWithoutSchemaInput[]
    createMany?: ConvertationCreateManySchemaInputEnvelope
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
  }

  export type ConvertationUncheckedCreateNestedManyWithoutSchemaInput = {
    create?: XOR<ConvertationCreateWithoutSchemaInput, ConvertationUncheckedCreateWithoutSchemaInput> | ConvertationCreateWithoutSchemaInput[] | ConvertationUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutSchemaInput | ConvertationCreateOrConnectWithoutSchemaInput[]
    createMany?: ConvertationCreateManySchemaInputEnvelope
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
  }

  export type EnumConvertationFormatFieldUpdateOperationsInput = {
    set?: $Enums.ConvertationFormat
  }

  export type ConvertationUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<ConvertationCreateWithoutSchemaInput, ConvertationUncheckedCreateWithoutSchemaInput> | ConvertationCreateWithoutSchemaInput[] | ConvertationUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutSchemaInput | ConvertationCreateOrConnectWithoutSchemaInput[]
    upsert?: ConvertationUpsertWithWhereUniqueWithoutSchemaInput | ConvertationUpsertWithWhereUniqueWithoutSchemaInput[]
    createMany?: ConvertationCreateManySchemaInputEnvelope
    set?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    disconnect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    delete?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    update?: ConvertationUpdateWithWhereUniqueWithoutSchemaInput | ConvertationUpdateWithWhereUniqueWithoutSchemaInput[]
    updateMany?: ConvertationUpdateManyWithWhereWithoutSchemaInput | ConvertationUpdateManyWithWhereWithoutSchemaInput[]
    deleteMany?: ConvertationScalarWhereInput | ConvertationScalarWhereInput[]
  }

  export type ConvertationUncheckedUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<ConvertationCreateWithoutSchemaInput, ConvertationUncheckedCreateWithoutSchemaInput> | ConvertationCreateWithoutSchemaInput[] | ConvertationUncheckedCreateWithoutSchemaInput[]
    connectOrCreate?: ConvertationCreateOrConnectWithoutSchemaInput | ConvertationCreateOrConnectWithoutSchemaInput[]
    upsert?: ConvertationUpsertWithWhereUniqueWithoutSchemaInput | ConvertationUpsertWithWhereUniqueWithoutSchemaInput[]
    createMany?: ConvertationCreateManySchemaInputEnvelope
    set?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    disconnect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    delete?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    connect?: ConvertationWhereUniqueInput | ConvertationWhereUniqueInput[]
    update?: ConvertationUpdateWithWhereUniqueWithoutSchemaInput | ConvertationUpdateWithWhereUniqueWithoutSchemaInput[]
    updateMany?: ConvertationUpdateManyWithWhereWithoutSchemaInput | ConvertationUpdateManyWithWhereWithoutSchemaInput[]
    deleteMany?: ConvertationScalarWhereInput | ConvertationScalarWhereInput[]
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

  export type NestedEnumUserLinkProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLinkProvider | EnumUserLinkProviderFieldRefInput<$PrismaModel>
    in?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLinkProviderFilter<$PrismaModel> | $Enums.UserLinkProvider
  }

  export type NestedEnumUserLinkProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserLinkProvider | EnumUserLinkProviderFieldRefInput<$PrismaModel>
    in?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserLinkProvider[] | ListEnumUserLinkProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumUserLinkProviderWithAggregatesFilter<$PrismaModel> | $Enums.UserLinkProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserLinkProviderFilter<$PrismaModel>
    _max?: NestedEnumUserLinkProviderFilter<$PrismaModel>
  }

  export type NestedEnumConvertationStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationState | EnumConvertationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationStateFilter<$PrismaModel> | $Enums.ConvertationState
  }

  export type NestedEnumConvertationStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationState | EnumConvertationStateFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationState[] | ListEnumConvertationStateFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationStateWithAggregatesFilter<$PrismaModel> | $Enums.ConvertationState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConvertationStateFilter<$PrismaModel>
    _max?: NestedEnumConvertationStateFilter<$PrismaModel>
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

  export type NestedEnumConvertationFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationFormat | EnumConvertationFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationFormatFilter<$PrismaModel> | $Enums.ConvertationFormat
  }

  export type NestedEnumConvertationFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConvertationFormat | EnumConvertationFormatFieldRefInput<$PrismaModel>
    in?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConvertationFormat[] | ListEnumConvertationFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumConvertationFormatWithAggregatesFilter<$PrismaModel> | $Enums.ConvertationFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConvertationFormatFilter<$PrismaModel>
    _max?: NestedEnumConvertationFormatFilter<$PrismaModel>
  }

  export type ConvertationCreateWithoutUserInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schema: ConvertationSchemaCreateNestedOneWithoutConvertationsInput
  }

  export type ConvertationUncheckedCreateWithoutUserInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    schemaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationCreateOrConnectWithoutUserInput = {
    where: ConvertationWhereUniqueInput
    create: XOR<ConvertationCreateWithoutUserInput, ConvertationUncheckedCreateWithoutUserInput>
  }

  export type ConvertationCreateManyUserInputEnvelope = {
    data: ConvertationCreateManyUserInput | ConvertationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLinkCreateWithoutUserInput = {
    provider: $Enums.UserLinkProvider
    providerUserId: string
    accessKey?: string | null
    refreshKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLinkUncheckedCreateWithoutUserInput = {
    provider: $Enums.UserLinkProvider
    providerUserId: string
    accessKey?: string | null
    refreshKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLinkCreateOrConnectWithoutUserInput = {
    where: UserLinkWhereUniqueInput
    create: XOR<UserLinkCreateWithoutUserInput, UserLinkUncheckedCreateWithoutUserInput>
  }

  export type UserLinkCreateManyUserInputEnvelope = {
    data: UserLinkCreateManyUserInput | UserLinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCredentialCreateWithoutUserInput = {
    id?: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialUncheckedCreateWithoutUserInput = {
    id?: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialCreateOrConnectWithoutUserInput = {
    where: UserCredentialWhereUniqueInput
    create: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
  }

  export type UserCredentialCreateManyUserInputEnvelope = {
    data: UserCredentialCreateManyUserInput | UserCredentialCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConvertationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConvertationWhereUniqueInput
    update: XOR<ConvertationUpdateWithoutUserInput, ConvertationUncheckedUpdateWithoutUserInput>
    create: XOR<ConvertationCreateWithoutUserInput, ConvertationUncheckedCreateWithoutUserInput>
  }

  export type ConvertationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConvertationWhereUniqueInput
    data: XOR<ConvertationUpdateWithoutUserInput, ConvertationUncheckedUpdateWithoutUserInput>
  }

  export type ConvertationUpdateManyWithWhereWithoutUserInput = {
    where: ConvertationScalarWhereInput
    data: XOR<ConvertationUpdateManyMutationInput, ConvertationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConvertationScalarWhereInput = {
    AND?: ConvertationScalarWhereInput | ConvertationScalarWhereInput[]
    OR?: ConvertationScalarWhereInput[]
    NOT?: ConvertationScalarWhereInput | ConvertationScalarWhereInput[]
    id?: StringFilter<"Convertation"> | string
    state?: EnumConvertationStateFilter<"Convertation"> | $Enums.ConvertationState
    fileFromUrl?: StringFilter<"Convertation"> | string
    fileToUrl?: StringNullableFilter<"Convertation"> | string | null
    schemaId?: IntFilter<"Convertation"> | number
    userId?: StringNullableFilter<"Convertation"> | string | null
    createdAt?: DateTimeFilter<"Convertation"> | Date | string
    updatedAt?: DateTimeFilter<"Convertation"> | Date | string
  }

  export type UserLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLinkWhereUniqueInput
    update: XOR<UserLinkUpdateWithoutUserInput, UserLinkUncheckedUpdateWithoutUserInput>
    create: XOR<UserLinkCreateWithoutUserInput, UserLinkUncheckedCreateWithoutUserInput>
  }

  export type UserLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLinkWhereUniqueInput
    data: XOR<UserLinkUpdateWithoutUserInput, UserLinkUncheckedUpdateWithoutUserInput>
  }

  export type UserLinkUpdateManyWithWhereWithoutUserInput = {
    where: UserLinkScalarWhereInput
    data: XOR<UserLinkUpdateManyMutationInput, UserLinkUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLinkScalarWhereInput = {
    AND?: UserLinkScalarWhereInput | UserLinkScalarWhereInput[]
    OR?: UserLinkScalarWhereInput[]
    NOT?: UserLinkScalarWhereInput | UserLinkScalarWhereInput[]
    userId?: StringFilter<"UserLink"> | string
    provider?: EnumUserLinkProviderFilter<"UserLink"> | $Enums.UserLinkProvider
    providerUserId?: StringFilter<"UserLink"> | string
    accessKey?: StringNullableFilter<"UserLink"> | string | null
    refreshKey?: StringNullableFilter<"UserLink"> | string | null
    createdAt?: DateTimeFilter<"UserLink"> | Date | string
    updatedAt?: DateTimeFilter<"UserLink"> | Date | string
  }

  export type UserCredentialUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCredentialWhereUniqueInput
    update: XOR<UserCredentialUpdateWithoutUserInput, UserCredentialUncheckedUpdateWithoutUserInput>
    create: XOR<UserCredentialCreateWithoutUserInput, UserCredentialUncheckedCreateWithoutUserInput>
  }

  export type UserCredentialUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCredentialWhereUniqueInput
    data: XOR<UserCredentialUpdateWithoutUserInput, UserCredentialUncheckedUpdateWithoutUserInput>
  }

  export type UserCredentialUpdateManyWithWhereWithoutUserInput = {
    where: UserCredentialScalarWhereInput
    data: XOR<UserCredentialUpdateManyMutationInput, UserCredentialUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCredentialScalarWhereInput = {
    AND?: UserCredentialScalarWhereInput | UserCredentialScalarWhereInput[]
    OR?: UserCredentialScalarWhereInput[]
    NOT?: UserCredentialScalarWhereInput | UserCredentialScalarWhereInput[]
    id?: StringFilter<"UserCredential"> | string
    userId?: StringFilter<"UserCredential"> | string
    passwordHash?: StringFilter<"UserCredential"> | string
    isActive?: BoolFilter<"UserCredential"> | boolean
    createdAt?: DateTimeFilter<"UserCredential"> | Date | string
    updatedAt?: DateTimeFilter<"UserCredential"> | Date | string
  }

  export type UserCreateWithoutCredentialsInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationCreateNestedManyWithoutUserInput
    links?: UserLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCredentialsInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationUncheckedCreateNestedManyWithoutUserInput
    links?: UserLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCredentialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
  }

  export type UserUpsertWithoutCredentialsInput = {
    update: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
    create: XOR<UserCreateWithoutCredentialsInput, UserUncheckedCreateWithoutCredentialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCredentialsInput, UserUncheckedUpdateWithoutCredentialsInput>
  }

  export type UserUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUpdateManyWithoutUserNestedInput
    links?: UserLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCredentialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUncheckedUpdateManyWithoutUserNestedInput
    links?: UserLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLinksInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationCreateNestedManyWithoutUserInput
    credentials?: UserCredentialCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinksInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    convertations?: ConvertationUncheckedCreateNestedManyWithoutUserInput
    credentials?: UserCredentialUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
  }

  export type UserUpsertWithoutLinksInput = {
    update: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
  }

  export type UserUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUpdateManyWithoutUserNestedInput
    credentials?: UserCredentialUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convertations?: ConvertationUncheckedUpdateManyWithoutUserNestedInput
    credentials?: UserCredentialUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConvertationSchemaCreateWithoutConvertationsInput = {
    fileFromFormat: $Enums.ConvertationFormat
    fileToFormat: $Enums.ConvertationFormat
    convertationEndpoint: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationSchemaUncheckedCreateWithoutConvertationsInput = {
    id?: number
    fileFromFormat: $Enums.ConvertationFormat
    fileToFormat: $Enums.ConvertationFormat
    convertationEndpoint: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationSchemaCreateOrConnectWithoutConvertationsInput = {
    where: ConvertationSchemaWhereUniqueInput
    create: XOR<ConvertationSchemaCreateWithoutConvertationsInput, ConvertationSchemaUncheckedCreateWithoutConvertationsInput>
  }

  export type UserCreateWithoutConvertationsInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: UserLinkCreateNestedManyWithoutUserInput
    credentials?: UserCredentialCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConvertationsInput = {
    id?: string
    username: string
    displayName: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: UserLinkUncheckedCreateNestedManyWithoutUserInput
    credentials?: UserCredentialUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConvertationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConvertationsInput, UserUncheckedCreateWithoutConvertationsInput>
  }

  export type ConvertationSchemaUpsertWithoutConvertationsInput = {
    update: XOR<ConvertationSchemaUpdateWithoutConvertationsInput, ConvertationSchemaUncheckedUpdateWithoutConvertationsInput>
    create: XOR<ConvertationSchemaCreateWithoutConvertationsInput, ConvertationSchemaUncheckedCreateWithoutConvertationsInput>
    where?: ConvertationSchemaWhereInput
  }

  export type ConvertationSchemaUpdateToOneWithWhereWithoutConvertationsInput = {
    where?: ConvertationSchemaWhereInput
    data: XOR<ConvertationSchemaUpdateWithoutConvertationsInput, ConvertationSchemaUncheckedUpdateWithoutConvertationsInput>
  }

  export type ConvertationSchemaUpdateWithoutConvertationsInput = {
    fileFromFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    convertationEndpoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationSchemaUncheckedUpdateWithoutConvertationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileFromFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    fileToFormat?: EnumConvertationFormatFieldUpdateOperationsInput | $Enums.ConvertationFormat
    convertationEndpoint?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutConvertationsInput = {
    update: XOR<UserUpdateWithoutConvertationsInput, UserUncheckedUpdateWithoutConvertationsInput>
    create: XOR<UserCreateWithoutConvertationsInput, UserUncheckedCreateWithoutConvertationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConvertationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConvertationsInput, UserUncheckedUpdateWithoutConvertationsInput>
  }

  export type UserUpdateWithoutConvertationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: UserLinkUpdateManyWithoutUserNestedInput
    credentials?: UserCredentialUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConvertationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: UserLinkUncheckedUpdateManyWithoutUserNestedInput
    credentials?: UserCredentialUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConvertationCreateWithoutSchemaInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutConvertationsInput
  }

  export type ConvertationUncheckedCreateWithoutSchemaInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationCreateOrConnectWithoutSchemaInput = {
    where: ConvertationWhereUniqueInput
    create: XOR<ConvertationCreateWithoutSchemaInput, ConvertationUncheckedCreateWithoutSchemaInput>
  }

  export type ConvertationCreateManySchemaInputEnvelope = {
    data: ConvertationCreateManySchemaInput | ConvertationCreateManySchemaInput[]
    skipDuplicates?: boolean
  }

  export type ConvertationUpsertWithWhereUniqueWithoutSchemaInput = {
    where: ConvertationWhereUniqueInput
    update: XOR<ConvertationUpdateWithoutSchemaInput, ConvertationUncheckedUpdateWithoutSchemaInput>
    create: XOR<ConvertationCreateWithoutSchemaInput, ConvertationUncheckedCreateWithoutSchemaInput>
  }

  export type ConvertationUpdateWithWhereUniqueWithoutSchemaInput = {
    where: ConvertationWhereUniqueInput
    data: XOR<ConvertationUpdateWithoutSchemaInput, ConvertationUncheckedUpdateWithoutSchemaInput>
  }

  export type ConvertationUpdateManyWithWhereWithoutSchemaInput = {
    where: ConvertationScalarWhereInput
    data: XOR<ConvertationUpdateManyMutationInput, ConvertationUncheckedUpdateManyWithoutSchemaInput>
  }

  export type ConvertationCreateManyUserInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    schemaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLinkCreateManyUserInput = {
    provider: $Enums.UserLinkProvider
    providerUserId: string
    accessKey?: string | null
    refreshKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCredentialCreateManyUserInput = {
    id?: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schema?: ConvertationSchemaUpdateOneRequiredWithoutConvertationsNestedInput
  }

  export type ConvertationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    schemaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    schemaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLinkUpdateWithoutUserInput = {
    provider?: EnumUserLinkProviderFieldUpdateOperationsInput | $Enums.UserLinkProvider
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    refreshKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLinkUncheckedUpdateWithoutUserInput = {
    provider?: EnumUserLinkProviderFieldUpdateOperationsInput | $Enums.UserLinkProvider
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    refreshKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLinkUncheckedUpdateManyWithoutUserInput = {
    provider?: EnumUserLinkProviderFieldUpdateOperationsInput | $Enums.UserLinkProvider
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    refreshKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCredentialUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationCreateManySchemaInput = {
    id?: string
    state?: $Enums.ConvertationState
    fileFromUrl: string
    fileToUrl?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvertationUpdateWithoutSchemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutConvertationsNestedInput
  }

  export type ConvertationUncheckedUpdateWithoutSchemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvertationUncheckedUpdateManyWithoutSchemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumConvertationStateFieldUpdateOperationsInput | $Enums.ConvertationState
    fileFromUrl?: StringFieldUpdateOperationsInput | string
    fileToUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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