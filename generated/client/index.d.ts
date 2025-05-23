
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
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model productos_recibo
 * 
 */
export type productos_recibo = $Result.DefaultSelection<Prisma.$productos_reciboPayload>
/**
 * Model recibos
 * 
 */
export type recibos = $Result.DefaultSelection<Prisma.$recibosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs>;

  /**
   * `prisma.productos_recibo`: Exposes CRUD operations for the **productos_recibo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos_recibos
    * const productos_recibos = await prisma.productos_recibo.findMany()
    * ```
    */
  get productos_recibo(): Prisma.productos_reciboDelegate<ExtArgs>;

  /**
   * `prisma.recibos`: Exposes CRUD operations for the **recibos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recibos
    * const recibos = await prisma.recibos.findMany()
    * ```
    */
  get recibos(): Prisma.recibosDelegate<ExtArgs>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    categorias: 'categorias',
    productos_recibo: 'productos_recibo',
    recibos: 'recibos',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "categorias" | "productos_recibo" | "recibos" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      productos_recibo: {
        payload: Prisma.$productos_reciboPayload<ExtArgs>
        fields: Prisma.productos_reciboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productos_reciboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productos_reciboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>
          }
          findFirst: {
            args: Prisma.productos_reciboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productos_reciboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>
          }
          findMany: {
            args: Prisma.productos_reciboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>[]
          }
          create: {
            args: Prisma.productos_reciboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>
          }
          createMany: {
            args: Prisma.productos_reciboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productos_reciboCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>[]
          }
          delete: {
            args: Prisma.productos_reciboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>
          }
          update: {
            args: Prisma.productos_reciboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>
          }
          deleteMany: {
            args: Prisma.productos_reciboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productos_reciboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productos_reciboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productos_reciboPayload>
          }
          aggregate: {
            args: Prisma.Productos_reciboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos_recibo>
          }
          groupBy: {
            args: Prisma.productos_reciboGroupByArgs<ExtArgs>
            result: $Utils.Optional<Productos_reciboGroupByOutputType>[]
          }
          count: {
            args: Prisma.productos_reciboCountArgs<ExtArgs>
            result: $Utils.Optional<Productos_reciboCountAggregateOutputType> | number
          }
        }
      }
      recibos: {
        payload: Prisma.$recibosPayload<ExtArgs>
        fields: Prisma.recibosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recibosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recibosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          findFirst: {
            args: Prisma.recibosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recibosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          findMany: {
            args: Prisma.recibosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>[]
          }
          create: {
            args: Prisma.recibosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          createMany: {
            args: Prisma.recibosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recibosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>[]
          }
          delete: {
            args: Prisma.recibosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          update: {
            args: Prisma.recibosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          deleteMany: {
            args: Prisma.recibosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recibosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.recibosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recibosPayload>
          }
          aggregate: {
            args: Prisma.RecibosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecibos>
          }
          groupBy: {
            args: Prisma.recibosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecibosGroupByOutputType>[]
          }
          count: {
            args: Prisma.recibosCountArgs<ExtArgs>
            result: $Utils.Optional<RecibosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    productos_recibo: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos_recibo?: boolean | CategoriasCountOutputTypeCountProductos_reciboArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProductos_reciboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productos_reciboWhereInput
  }


  /**
   * Count Type RecibosCountOutputType
   */

  export type RecibosCountOutputType = {
    productos_recibo: number
  }

  export type RecibosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos_recibo?: boolean | RecibosCountOutputTypeCountProductos_reciboArgs
  }

  // Custom InputTypes
  /**
   * RecibosCountOutputType without action
   */
  export type RecibosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecibosCountOutputType
     */
    select?: RecibosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecibosCountOutputType without action
   */
  export type RecibosCountOutputTypeCountProductos_reciboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productos_reciboWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    recibos: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recibos?: boolean | UsuariosCountOutputTypeCountRecibosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountRecibosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recibosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
    co2e_promedio_por_kg: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
    co2e_promedio_por_kg: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    categoria: string | null
    subcategoria: string | null
    supermercado: string | null
    co2e_promedio_por_kg: number | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    categoria: string | null
    subcategoria: string | null
    supermercado: string | null
    co2e_promedio_por_kg: number | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    categoria: number
    subcategoria: number
    supermercado: number
    co2e_promedio_por_kg: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
    co2e_promedio_por_kg?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
    co2e_promedio_por_kg?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    categoria?: true
    subcategoria?: true
    supermercado?: true
    co2e_promedio_por_kg?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    categoria?: true
    subcategoria?: true
    supermercado?: true
    co2e_promedio_por_kg?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    categoria?: true
    subcategoria?: true
    supermercado?: true
    co2e_promedio_por_kg?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: number
    categoria: string
    subcategoria: string | null
    supermercado: string | null
    co2e_promedio_por_kg: number
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria?: boolean
    subcategoria?: boolean
    supermercado?: boolean
    co2e_promedio_por_kg?: boolean
    productos_recibo?: boolean | categorias$productos_reciboArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoria?: boolean
    subcategoria?: boolean
    supermercado?: boolean
    co2e_promedio_por_kg?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectScalar = {
    id?: boolean
    categoria?: boolean
    subcategoria?: boolean
    supermercado?: boolean
    co2e_promedio_por_kg?: boolean
  }

  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos_recibo?: boolean | categorias$productos_reciboArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      productos_recibo: Prisma.$productos_reciboPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoria: string
      subcategoria: string | null
      supermercado: string | null
      co2e_promedio_por_kg: number
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos_recibo<T extends categorias$productos_reciboArgs<ExtArgs> = {}>(args?: Subset<T, categorias$productos_reciboArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the categorias model
   */ 
  interface categoriasFieldRefs {
    readonly id: FieldRef<"categorias", 'Int'>
    readonly categoria: FieldRef<"categorias", 'String'>
    readonly subcategoria: FieldRef<"categorias", 'String'>
    readonly supermercado: FieldRef<"categorias", 'String'>
    readonly co2e_promedio_por_kg: FieldRef<"categorias", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias createManyAndReturn
   */
  export type categoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
  }

  /**
   * categorias.productos_recibo
   */
  export type categorias$productos_reciboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    where?: productos_reciboWhereInput
    orderBy?: productos_reciboOrderByWithRelationInput | productos_reciboOrderByWithRelationInput[]
    cursor?: productos_reciboWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Productos_reciboScalarFieldEnum | Productos_reciboScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model productos_recibo
   */

  export type AggregateProductos_recibo = {
    _count: Productos_reciboCountAggregateOutputType | null
    _avg: Productos_reciboAvgAggregateOutputType | null
    _sum: Productos_reciboSumAggregateOutputType | null
    _min: Productos_reciboMinAggregateOutputType | null
    _max: Productos_reciboMaxAggregateOutputType | null
  }

  export type Productos_reciboAvgAggregateOutputType = {
    id: number | null
    categoria_id: number | null
    cantidad: number | null
    peso_estimado_kg: number | null
    co2e_estimado: number | null
  }

  export type Productos_reciboSumAggregateOutputType = {
    id: number | null
    categoria_id: number | null
    cantidad: number | null
    peso_estimado_kg: number | null
    co2e_estimado: number | null
  }

  export type Productos_reciboMinAggregateOutputType = {
    id: number | null
    recibo_id: string | null
    nombre_detectado: string | null
    productos: string | null
    categoria_id: number | null
    cantidad: number | null
    peso_estimado_kg: number | null
    co2e_estimado: number | null
  }

  export type Productos_reciboMaxAggregateOutputType = {
    id: number | null
    recibo_id: string | null
    nombre_detectado: string | null
    productos: string | null
    categoria_id: number | null
    cantidad: number | null
    peso_estimado_kg: number | null
    co2e_estimado: number | null
  }

  export type Productos_reciboCountAggregateOutputType = {
    id: number
    recibo_id: number
    nombre_detectado: number
    productos: number
    categoria_id: number
    cantidad: number
    peso_estimado_kg: number
    co2e_estimado: number
    _all: number
  }


  export type Productos_reciboAvgAggregateInputType = {
    id?: true
    categoria_id?: true
    cantidad?: true
    peso_estimado_kg?: true
    co2e_estimado?: true
  }

  export type Productos_reciboSumAggregateInputType = {
    id?: true
    categoria_id?: true
    cantidad?: true
    peso_estimado_kg?: true
    co2e_estimado?: true
  }

  export type Productos_reciboMinAggregateInputType = {
    id?: true
    recibo_id?: true
    nombre_detectado?: true
    productos?: true
    categoria_id?: true
    cantidad?: true
    peso_estimado_kg?: true
    co2e_estimado?: true
  }

  export type Productos_reciboMaxAggregateInputType = {
    id?: true
    recibo_id?: true
    nombre_detectado?: true
    productos?: true
    categoria_id?: true
    cantidad?: true
    peso_estimado_kg?: true
    co2e_estimado?: true
  }

  export type Productos_reciboCountAggregateInputType = {
    id?: true
    recibo_id?: true
    nombre_detectado?: true
    productos?: true
    categoria_id?: true
    cantidad?: true
    peso_estimado_kg?: true
    co2e_estimado?: true
    _all?: true
  }

  export type Productos_reciboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos_recibo to aggregate.
     */
    where?: productos_reciboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos_recibos to fetch.
     */
    orderBy?: productos_reciboOrderByWithRelationInput | productos_reciboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productos_reciboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos_recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos_recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos_recibos
    **/
    _count?: true | Productos_reciboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Productos_reciboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Productos_reciboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Productos_reciboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Productos_reciboMaxAggregateInputType
  }

  export type GetProductos_reciboAggregateType<T extends Productos_reciboAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos_recibo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos_recibo[P]>
      : GetScalarType<T[P], AggregateProductos_recibo[P]>
  }




  export type productos_reciboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productos_reciboWhereInput
    orderBy?: productos_reciboOrderByWithAggregationInput | productos_reciboOrderByWithAggregationInput[]
    by: Productos_reciboScalarFieldEnum[] | Productos_reciboScalarFieldEnum
    having?: productos_reciboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Productos_reciboCountAggregateInputType | true
    _avg?: Productos_reciboAvgAggregateInputType
    _sum?: Productos_reciboSumAggregateInputType
    _min?: Productos_reciboMinAggregateInputType
    _max?: Productos_reciboMaxAggregateInputType
  }

  export type Productos_reciboGroupByOutputType = {
    id: number
    recibo_id: string | null
    nombre_detectado: string
    productos: string
    categoria_id: number | null
    cantidad: number | null
    peso_estimado_kg: number | null
    co2e_estimado: number | null
    _count: Productos_reciboCountAggregateOutputType | null
    _avg: Productos_reciboAvgAggregateOutputType | null
    _sum: Productos_reciboSumAggregateOutputType | null
    _min: Productos_reciboMinAggregateOutputType | null
    _max: Productos_reciboMaxAggregateOutputType | null
  }

  type GetProductos_reciboGroupByPayload<T extends productos_reciboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Productos_reciboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Productos_reciboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Productos_reciboGroupByOutputType[P]>
            : GetScalarType<T[P], Productos_reciboGroupByOutputType[P]>
        }
      >
    >


  export type productos_reciboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recibo_id?: boolean
    nombre_detectado?: boolean
    productos?: boolean
    categoria_id?: boolean
    cantidad?: boolean
    peso_estimado_kg?: boolean
    co2e_estimado?: boolean
    categorias?: boolean | productos_recibo$categoriasArgs<ExtArgs>
    recibos?: boolean | productos_recibo$recibosArgs<ExtArgs>
  }, ExtArgs["result"]["productos_recibo"]>

  export type productos_reciboSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recibo_id?: boolean
    nombre_detectado?: boolean
    productos?: boolean
    categoria_id?: boolean
    cantidad?: boolean
    peso_estimado_kg?: boolean
    co2e_estimado?: boolean
    categorias?: boolean | productos_recibo$categoriasArgs<ExtArgs>
    recibos?: boolean | productos_recibo$recibosArgs<ExtArgs>
  }, ExtArgs["result"]["productos_recibo"]>

  export type productos_reciboSelectScalar = {
    id?: boolean
    recibo_id?: boolean
    nombre_detectado?: boolean
    productos?: boolean
    categoria_id?: boolean
    cantidad?: boolean
    peso_estimado_kg?: boolean
    co2e_estimado?: boolean
  }

  export type productos_reciboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | productos_recibo$categoriasArgs<ExtArgs>
    recibos?: boolean | productos_recibo$recibosArgs<ExtArgs>
  }
  export type productos_reciboIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | productos_recibo$categoriasArgs<ExtArgs>
    recibos?: boolean | productos_recibo$recibosArgs<ExtArgs>
  }

  export type $productos_reciboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos_recibo"
    objects: {
      categorias: Prisma.$categoriasPayload<ExtArgs> | null
      recibos: Prisma.$recibosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recibo_id: string | null
      nombre_detectado: string
      productos: string
      categoria_id: number | null
      cantidad: number | null
      peso_estimado_kg: number | null
      co2e_estimado: number | null
    }, ExtArgs["result"]["productos_recibo"]>
    composites: {}
  }

  type productos_reciboGetPayload<S extends boolean | null | undefined | productos_reciboDefaultArgs> = $Result.GetResult<Prisma.$productos_reciboPayload, S>

  type productos_reciboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productos_reciboFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Productos_reciboCountAggregateInputType | true
    }

  export interface productos_reciboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos_recibo'], meta: { name: 'productos_recibo' } }
    /**
     * Find zero or one Productos_recibo that matches the filter.
     * @param {productos_reciboFindUniqueArgs} args - Arguments to find a Productos_recibo
     * @example
     * // Get one Productos_recibo
     * const productos_recibo = await prisma.productos_recibo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productos_reciboFindUniqueArgs>(args: SelectSubset<T, productos_reciboFindUniqueArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Productos_recibo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productos_reciboFindUniqueOrThrowArgs} args - Arguments to find a Productos_recibo
     * @example
     * // Get one Productos_recibo
     * const productos_recibo = await prisma.productos_recibo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productos_reciboFindUniqueOrThrowArgs>(args: SelectSubset<T, productos_reciboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Productos_recibo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productos_reciboFindFirstArgs} args - Arguments to find a Productos_recibo
     * @example
     * // Get one Productos_recibo
     * const productos_recibo = await prisma.productos_recibo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productos_reciboFindFirstArgs>(args?: SelectSubset<T, productos_reciboFindFirstArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Productos_recibo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productos_reciboFindFirstOrThrowArgs} args - Arguments to find a Productos_recibo
     * @example
     * // Get one Productos_recibo
     * const productos_recibo = await prisma.productos_recibo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productos_reciboFindFirstOrThrowArgs>(args?: SelectSubset<T, productos_reciboFindFirstOrThrowArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Productos_recibos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productos_reciboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos_recibos
     * const productos_recibos = await prisma.productos_recibo.findMany()
     * 
     * // Get first 10 Productos_recibos
     * const productos_recibos = await prisma.productos_recibo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productos_reciboWithIdOnly = await prisma.productos_recibo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productos_reciboFindManyArgs>(args?: SelectSubset<T, productos_reciboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Productos_recibo.
     * @param {productos_reciboCreateArgs} args - Arguments to create a Productos_recibo.
     * @example
     * // Create one Productos_recibo
     * const Productos_recibo = await prisma.productos_recibo.create({
     *   data: {
     *     // ... data to create a Productos_recibo
     *   }
     * })
     * 
     */
    create<T extends productos_reciboCreateArgs>(args: SelectSubset<T, productos_reciboCreateArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Productos_recibos.
     * @param {productos_reciboCreateManyArgs} args - Arguments to create many Productos_recibos.
     * @example
     * // Create many Productos_recibos
     * const productos_recibo = await prisma.productos_recibo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productos_reciboCreateManyArgs>(args?: SelectSubset<T, productos_reciboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos_recibos and returns the data saved in the database.
     * @param {productos_reciboCreateManyAndReturnArgs} args - Arguments to create many Productos_recibos.
     * @example
     * // Create many Productos_recibos
     * const productos_recibo = await prisma.productos_recibo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos_recibos and only return the `id`
     * const productos_reciboWithIdOnly = await prisma.productos_recibo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productos_reciboCreateManyAndReturnArgs>(args?: SelectSubset<T, productos_reciboCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Productos_recibo.
     * @param {productos_reciboDeleteArgs} args - Arguments to delete one Productos_recibo.
     * @example
     * // Delete one Productos_recibo
     * const Productos_recibo = await prisma.productos_recibo.delete({
     *   where: {
     *     // ... filter to delete one Productos_recibo
     *   }
     * })
     * 
     */
    delete<T extends productos_reciboDeleteArgs>(args: SelectSubset<T, productos_reciboDeleteArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Productos_recibo.
     * @param {productos_reciboUpdateArgs} args - Arguments to update one Productos_recibo.
     * @example
     * // Update one Productos_recibo
     * const productos_recibo = await prisma.productos_recibo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productos_reciboUpdateArgs>(args: SelectSubset<T, productos_reciboUpdateArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Productos_recibos.
     * @param {productos_reciboDeleteManyArgs} args - Arguments to filter Productos_recibos to delete.
     * @example
     * // Delete a few Productos_recibos
     * const { count } = await prisma.productos_recibo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productos_reciboDeleteManyArgs>(args?: SelectSubset<T, productos_reciboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos_recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productos_reciboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos_recibos
     * const productos_recibo = await prisma.productos_recibo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productos_reciboUpdateManyArgs>(args: SelectSubset<T, productos_reciboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productos_recibo.
     * @param {productos_reciboUpsertArgs} args - Arguments to update or create a Productos_recibo.
     * @example
     * // Update or create a Productos_recibo
     * const productos_recibo = await prisma.productos_recibo.upsert({
     *   create: {
     *     // ... data to create a Productos_recibo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos_recibo we want to update
     *   }
     * })
     */
    upsert<T extends productos_reciboUpsertArgs>(args: SelectSubset<T, productos_reciboUpsertArgs<ExtArgs>>): Prisma__productos_reciboClient<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Productos_recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productos_reciboCountArgs} args - Arguments to filter Productos_recibos to count.
     * @example
     * // Count the number of Productos_recibos
     * const count = await prisma.productos_recibo.count({
     *   where: {
     *     // ... the filter for the Productos_recibos we want to count
     *   }
     * })
    **/
    count<T extends productos_reciboCountArgs>(
      args?: Subset<T, productos_reciboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Productos_reciboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos_recibo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Productos_reciboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Productos_reciboAggregateArgs>(args: Subset<T, Productos_reciboAggregateArgs>): Prisma.PrismaPromise<GetProductos_reciboAggregateType<T>>

    /**
     * Group by Productos_recibo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productos_reciboGroupByArgs} args - Group by arguments.
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
      T extends productos_reciboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productos_reciboGroupByArgs['orderBy'] }
        : { orderBy?: productos_reciboGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productos_reciboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductos_reciboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos_recibo model
   */
  readonly fields: productos_reciboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos_recibo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productos_reciboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias<T extends productos_recibo$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, productos_recibo$categoriasArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    recibos<T extends productos_recibo$recibosArgs<ExtArgs> = {}>(args?: Subset<T, productos_recibo$recibosArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the productos_recibo model
   */ 
  interface productos_reciboFieldRefs {
    readonly id: FieldRef<"productos_recibo", 'Int'>
    readonly recibo_id: FieldRef<"productos_recibo", 'String'>
    readonly nombre_detectado: FieldRef<"productos_recibo", 'String'>
    readonly productos: FieldRef<"productos_recibo", 'String'>
    readonly categoria_id: FieldRef<"productos_recibo", 'Int'>
    readonly cantidad: FieldRef<"productos_recibo", 'Float'>
    readonly peso_estimado_kg: FieldRef<"productos_recibo", 'Float'>
    readonly co2e_estimado: FieldRef<"productos_recibo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * productos_recibo findUnique
   */
  export type productos_reciboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * Filter, which productos_recibo to fetch.
     */
    where: productos_reciboWhereUniqueInput
  }

  /**
   * productos_recibo findUniqueOrThrow
   */
  export type productos_reciboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * Filter, which productos_recibo to fetch.
     */
    where: productos_reciboWhereUniqueInput
  }

  /**
   * productos_recibo findFirst
   */
  export type productos_reciboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * Filter, which productos_recibo to fetch.
     */
    where?: productos_reciboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos_recibos to fetch.
     */
    orderBy?: productos_reciboOrderByWithRelationInput | productos_reciboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos_recibos.
     */
    cursor?: productos_reciboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos_recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos_recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos_recibos.
     */
    distinct?: Productos_reciboScalarFieldEnum | Productos_reciboScalarFieldEnum[]
  }

  /**
   * productos_recibo findFirstOrThrow
   */
  export type productos_reciboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * Filter, which productos_recibo to fetch.
     */
    where?: productos_reciboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos_recibos to fetch.
     */
    orderBy?: productos_reciboOrderByWithRelationInput | productos_reciboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos_recibos.
     */
    cursor?: productos_reciboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos_recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos_recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos_recibos.
     */
    distinct?: Productos_reciboScalarFieldEnum | Productos_reciboScalarFieldEnum[]
  }

  /**
   * productos_recibo findMany
   */
  export type productos_reciboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * Filter, which productos_recibos to fetch.
     */
    where?: productos_reciboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos_recibos to fetch.
     */
    orderBy?: productos_reciboOrderByWithRelationInput | productos_reciboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos_recibos.
     */
    cursor?: productos_reciboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos_recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos_recibos.
     */
    skip?: number
    distinct?: Productos_reciboScalarFieldEnum | Productos_reciboScalarFieldEnum[]
  }

  /**
   * productos_recibo create
   */
  export type productos_reciboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * The data needed to create a productos_recibo.
     */
    data: XOR<productos_reciboCreateInput, productos_reciboUncheckedCreateInput>
  }

  /**
   * productos_recibo createMany
   */
  export type productos_reciboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos_recibos.
     */
    data: productos_reciboCreateManyInput | productos_reciboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos_recibo createManyAndReturn
   */
  export type productos_reciboCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many productos_recibos.
     */
    data: productos_reciboCreateManyInput | productos_reciboCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productos_recibo update
   */
  export type productos_reciboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * The data needed to update a productos_recibo.
     */
    data: XOR<productos_reciboUpdateInput, productos_reciboUncheckedUpdateInput>
    /**
     * Choose, which productos_recibo to update.
     */
    where: productos_reciboWhereUniqueInput
  }

  /**
   * productos_recibo updateMany
   */
  export type productos_reciboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos_recibos.
     */
    data: XOR<productos_reciboUpdateManyMutationInput, productos_reciboUncheckedUpdateManyInput>
    /**
     * Filter which productos_recibos to update
     */
    where?: productos_reciboWhereInput
  }

  /**
   * productos_recibo upsert
   */
  export type productos_reciboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * The filter to search for the productos_recibo to update in case it exists.
     */
    where: productos_reciboWhereUniqueInput
    /**
     * In case the productos_recibo found by the `where` argument doesn't exist, create a new productos_recibo with this data.
     */
    create: XOR<productos_reciboCreateInput, productos_reciboUncheckedCreateInput>
    /**
     * In case the productos_recibo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productos_reciboUpdateInput, productos_reciboUncheckedUpdateInput>
  }

  /**
   * productos_recibo delete
   */
  export type productos_reciboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    /**
     * Filter which productos_recibo to delete.
     */
    where: productos_reciboWhereUniqueInput
  }

  /**
   * productos_recibo deleteMany
   */
  export type productos_reciboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos_recibos to delete
     */
    where?: productos_reciboWhereInput
  }

  /**
   * productos_recibo.categorias
   */
  export type productos_recibo$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    where?: categoriasWhereInput
  }

  /**
   * productos_recibo.recibos
   */
  export type productos_recibo$recibosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    where?: recibosWhereInput
  }

  /**
   * productos_recibo without action
   */
  export type productos_reciboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
  }


  /**
   * Model recibos
   */

  export type AggregateRecibos = {
    _count: RecibosCountAggregateOutputType | null
    _avg: RecibosAvgAggregateOutputType | null
    _sum: RecibosSumAggregateOutputType | null
    _min: RecibosMinAggregateOutputType | null
    _max: RecibosMaxAggregateOutputType | null
  }

  export type RecibosAvgAggregateOutputType = {
    co2e_total: number | null
    puntuacion_impacto: number | null
  }

  export type RecibosSumAggregateOutputType = {
    co2e_total: number | null
    puntuacion_impacto: number | null
  }

  export type RecibosMinAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    fuente: string | null
    texto_original: string | null
    fecha_recibo: Date | null
    co2e_total: number | null
    es_recibo_verde: boolean | null
    puntuacion_impacto: number | null
    evaluacion_huella: string | null
    detalle_evaluacion: string | null
    creado_en: Date | null
  }

  export type RecibosMaxAggregateOutputType = {
    id: string | null
    usuario_id: string | null
    fuente: string | null
    texto_original: string | null
    fecha_recibo: Date | null
    co2e_total: number | null
    es_recibo_verde: boolean | null
    puntuacion_impacto: number | null
    evaluacion_huella: string | null
    detalle_evaluacion: string | null
    creado_en: Date | null
  }

  export type RecibosCountAggregateOutputType = {
    id: number
    usuario_id: number
    fuente: number
    texto_original: number
    fecha_recibo: number
    co2e_total: number
    es_recibo_verde: number
    puntuacion_impacto: number
    evaluacion_huella: number
    detalle_evaluacion: number
    creado_en: number
    _all: number
  }


  export type RecibosAvgAggregateInputType = {
    co2e_total?: true
    puntuacion_impacto?: true
  }

  export type RecibosSumAggregateInputType = {
    co2e_total?: true
    puntuacion_impacto?: true
  }

  export type RecibosMinAggregateInputType = {
    id?: true
    usuario_id?: true
    fuente?: true
    texto_original?: true
    fecha_recibo?: true
    co2e_total?: true
    es_recibo_verde?: true
    puntuacion_impacto?: true
    evaluacion_huella?: true
    detalle_evaluacion?: true
    creado_en?: true
  }

  export type RecibosMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    fuente?: true
    texto_original?: true
    fecha_recibo?: true
    co2e_total?: true
    es_recibo_verde?: true
    puntuacion_impacto?: true
    evaluacion_huella?: true
    detalle_evaluacion?: true
    creado_en?: true
  }

  export type RecibosCountAggregateInputType = {
    id?: true
    usuario_id?: true
    fuente?: true
    texto_original?: true
    fecha_recibo?: true
    co2e_total?: true
    es_recibo_verde?: true
    puntuacion_impacto?: true
    evaluacion_huella?: true
    detalle_evaluacion?: true
    creado_en?: true
    _all?: true
  }

  export type RecibosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recibos to aggregate.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recibos
    **/
    _count?: true | RecibosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecibosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecibosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecibosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecibosMaxAggregateInputType
  }

  export type GetRecibosAggregateType<T extends RecibosAggregateArgs> = {
        [P in keyof T & keyof AggregateRecibos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecibos[P]>
      : GetScalarType<T[P], AggregateRecibos[P]>
  }




  export type recibosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recibosWhereInput
    orderBy?: recibosOrderByWithAggregationInput | recibosOrderByWithAggregationInput[]
    by: RecibosScalarFieldEnum[] | RecibosScalarFieldEnum
    having?: recibosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecibosCountAggregateInputType | true
    _avg?: RecibosAvgAggregateInputType
    _sum?: RecibosSumAggregateInputType
    _min?: RecibosMinAggregateInputType
    _max?: RecibosMaxAggregateInputType
  }

  export type RecibosGroupByOutputType = {
    id: string
    usuario_id: string | null
    fuente: string
    texto_original: string | null
    fecha_recibo: Date | null
    co2e_total: number | null
    es_recibo_verde: boolean | null
    puntuacion_impacto: number | null
    evaluacion_huella: string | null
    detalle_evaluacion: string | null
    creado_en: Date | null
    _count: RecibosCountAggregateOutputType | null
    _avg: RecibosAvgAggregateOutputType | null
    _sum: RecibosSumAggregateOutputType | null
    _min: RecibosMinAggregateOutputType | null
    _max: RecibosMaxAggregateOutputType | null
  }

  type GetRecibosGroupByPayload<T extends recibosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecibosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecibosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecibosGroupByOutputType[P]>
            : GetScalarType<T[P], RecibosGroupByOutputType[P]>
        }
      >
    >


  export type recibosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    fuente?: boolean
    texto_original?: boolean
    fecha_recibo?: boolean
    co2e_total?: boolean
    es_recibo_verde?: boolean
    puntuacion_impacto?: boolean
    evaluacion_huella?: boolean
    detalle_evaluacion?: boolean
    creado_en?: boolean
    productos_recibo?: boolean | recibos$productos_reciboArgs<ExtArgs>
    usuarios?: boolean | recibos$usuariosArgs<ExtArgs>
    _count?: boolean | RecibosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recibos"]>

  export type recibosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    fuente?: boolean
    texto_original?: boolean
    fecha_recibo?: boolean
    co2e_total?: boolean
    es_recibo_verde?: boolean
    puntuacion_impacto?: boolean
    evaluacion_huella?: boolean
    detalle_evaluacion?: boolean
    creado_en?: boolean
    usuarios?: boolean | recibos$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["recibos"]>

  export type recibosSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    fuente?: boolean
    texto_original?: boolean
    fecha_recibo?: boolean
    co2e_total?: boolean
    es_recibo_verde?: boolean
    puntuacion_impacto?: boolean
    evaluacion_huella?: boolean
    detalle_evaluacion?: boolean
    creado_en?: boolean
  }

  export type recibosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos_recibo?: boolean | recibos$productos_reciboArgs<ExtArgs>
    usuarios?: boolean | recibos$usuariosArgs<ExtArgs>
    _count?: boolean | RecibosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recibosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | recibos$usuariosArgs<ExtArgs>
  }

  export type $recibosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recibos"
    objects: {
      productos_recibo: Prisma.$productos_reciboPayload<ExtArgs>[]
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuario_id: string | null
      fuente: string
      texto_original: string | null
      fecha_recibo: Date | null
      co2e_total: number | null
      es_recibo_verde: boolean | null
      puntuacion_impacto: number | null
      evaluacion_huella: string | null
      detalle_evaluacion: string | null
      creado_en: Date | null
    }, ExtArgs["result"]["recibos"]>
    composites: {}
  }

  type recibosGetPayload<S extends boolean | null | undefined | recibosDefaultArgs> = $Result.GetResult<Prisma.$recibosPayload, S>

  type recibosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<recibosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecibosCountAggregateInputType | true
    }

  export interface recibosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recibos'], meta: { name: 'recibos' } }
    /**
     * Find zero or one Recibos that matches the filter.
     * @param {recibosFindUniqueArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recibosFindUniqueArgs>(args: SelectSubset<T, recibosFindUniqueArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recibos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {recibosFindUniqueOrThrowArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recibosFindUniqueOrThrowArgs>(args: SelectSubset<T, recibosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recibos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosFindFirstArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recibosFindFirstArgs>(args?: SelectSubset<T, recibosFindFirstArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recibos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosFindFirstOrThrowArgs} args - Arguments to find a Recibos
     * @example
     * // Get one Recibos
     * const recibos = await prisma.recibos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recibosFindFirstOrThrowArgs>(args?: SelectSubset<T, recibosFindFirstOrThrowArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recibos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recibos
     * const recibos = await prisma.recibos.findMany()
     * 
     * // Get first 10 Recibos
     * const recibos = await prisma.recibos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recibosWithIdOnly = await prisma.recibos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recibosFindManyArgs>(args?: SelectSubset<T, recibosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recibos.
     * @param {recibosCreateArgs} args - Arguments to create a Recibos.
     * @example
     * // Create one Recibos
     * const Recibos = await prisma.recibos.create({
     *   data: {
     *     // ... data to create a Recibos
     *   }
     * })
     * 
     */
    create<T extends recibosCreateArgs>(args: SelectSubset<T, recibosCreateArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recibos.
     * @param {recibosCreateManyArgs} args - Arguments to create many Recibos.
     * @example
     * // Create many Recibos
     * const recibos = await prisma.recibos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recibosCreateManyArgs>(args?: SelectSubset<T, recibosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recibos and returns the data saved in the database.
     * @param {recibosCreateManyAndReturnArgs} args - Arguments to create many Recibos.
     * @example
     * // Create many Recibos
     * const recibos = await prisma.recibos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recibos and only return the `id`
     * const recibosWithIdOnly = await prisma.recibos.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recibosCreateManyAndReturnArgs>(args?: SelectSubset<T, recibosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recibos.
     * @param {recibosDeleteArgs} args - Arguments to delete one Recibos.
     * @example
     * // Delete one Recibos
     * const Recibos = await prisma.recibos.delete({
     *   where: {
     *     // ... filter to delete one Recibos
     *   }
     * })
     * 
     */
    delete<T extends recibosDeleteArgs>(args: SelectSubset<T, recibosDeleteArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recibos.
     * @param {recibosUpdateArgs} args - Arguments to update one Recibos.
     * @example
     * // Update one Recibos
     * const recibos = await prisma.recibos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recibosUpdateArgs>(args: SelectSubset<T, recibosUpdateArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recibos.
     * @param {recibosDeleteManyArgs} args - Arguments to filter Recibos to delete.
     * @example
     * // Delete a few Recibos
     * const { count } = await prisma.recibos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recibosDeleteManyArgs>(args?: SelectSubset<T, recibosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recibos
     * const recibos = await prisma.recibos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recibosUpdateManyArgs>(args: SelectSubset<T, recibosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recibos.
     * @param {recibosUpsertArgs} args - Arguments to update or create a Recibos.
     * @example
     * // Update or create a Recibos
     * const recibos = await prisma.recibos.upsert({
     *   create: {
     *     // ... data to create a Recibos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recibos we want to update
     *   }
     * })
     */
    upsert<T extends recibosUpsertArgs>(args: SelectSubset<T, recibosUpsertArgs<ExtArgs>>): Prisma__recibosClient<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosCountArgs} args - Arguments to filter Recibos to count.
     * @example
     * // Count the number of Recibos
     * const count = await prisma.recibos.count({
     *   where: {
     *     // ... the filter for the Recibos we want to count
     *   }
     * })
    **/
    count<T extends recibosCountArgs>(
      args?: Subset<T, recibosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecibosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecibosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecibosAggregateArgs>(args: Subset<T, RecibosAggregateArgs>): Prisma.PrismaPromise<GetRecibosAggregateType<T>>

    /**
     * Group by Recibos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recibosGroupByArgs} args - Group by arguments.
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
      T extends recibosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recibosGroupByArgs['orderBy'] }
        : { orderBy?: recibosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, recibosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecibosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recibos model
   */
  readonly fields: recibosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recibos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recibosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos_recibo<T extends recibos$productos_reciboArgs<ExtArgs> = {}>(args?: Subset<T, recibos$productos_reciboArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productos_reciboPayload<ExtArgs>, T, "findMany"> | Null>
    usuarios<T extends recibos$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, recibos$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the recibos model
   */ 
  interface recibosFieldRefs {
    readonly id: FieldRef<"recibos", 'String'>
    readonly usuario_id: FieldRef<"recibos", 'String'>
    readonly fuente: FieldRef<"recibos", 'String'>
    readonly texto_original: FieldRef<"recibos", 'String'>
    readonly fecha_recibo: FieldRef<"recibos", 'DateTime'>
    readonly co2e_total: FieldRef<"recibos", 'Float'>
    readonly es_recibo_verde: FieldRef<"recibos", 'Boolean'>
    readonly puntuacion_impacto: FieldRef<"recibos", 'Int'>
    readonly evaluacion_huella: FieldRef<"recibos", 'String'>
    readonly detalle_evaluacion: FieldRef<"recibos", 'String'>
    readonly creado_en: FieldRef<"recibos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recibos findUnique
   */
  export type recibosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos findUniqueOrThrow
   */
  export type recibosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos findFirst
   */
  export type recibosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recibos.
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recibos.
     */
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * recibos findFirstOrThrow
   */
  export type recibosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recibos.
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recibos.
     */
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * recibos findMany
   */
  export type recibosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter, which recibos to fetch.
     */
    where?: recibosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recibos to fetch.
     */
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recibos.
     */
    cursor?: recibosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recibos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recibos.
     */
    skip?: number
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * recibos create
   */
  export type recibosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * The data needed to create a recibos.
     */
    data: XOR<recibosCreateInput, recibosUncheckedCreateInput>
  }

  /**
   * recibos createMany
   */
  export type recibosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recibos.
     */
    data: recibosCreateManyInput | recibosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recibos createManyAndReturn
   */
  export type recibosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many recibos.
     */
    data: recibosCreateManyInput | recibosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recibos update
   */
  export type recibosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * The data needed to update a recibos.
     */
    data: XOR<recibosUpdateInput, recibosUncheckedUpdateInput>
    /**
     * Choose, which recibos to update.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos updateMany
   */
  export type recibosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recibos.
     */
    data: XOR<recibosUpdateManyMutationInput, recibosUncheckedUpdateManyInput>
    /**
     * Filter which recibos to update
     */
    where?: recibosWhereInput
  }

  /**
   * recibos upsert
   */
  export type recibosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * The filter to search for the recibos to update in case it exists.
     */
    where: recibosWhereUniqueInput
    /**
     * In case the recibos found by the `where` argument doesn't exist, create a new recibos with this data.
     */
    create: XOR<recibosCreateInput, recibosUncheckedCreateInput>
    /**
     * In case the recibos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recibosUpdateInput, recibosUncheckedUpdateInput>
  }

  /**
   * recibos delete
   */
  export type recibosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    /**
     * Filter which recibos to delete.
     */
    where: recibosWhereUniqueInput
  }

  /**
   * recibos deleteMany
   */
  export type recibosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recibos to delete
     */
    where?: recibosWhereInput
  }

  /**
   * recibos.productos_recibo
   */
  export type recibos$productos_reciboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos_recibo
     */
    select?: productos_reciboSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productos_reciboInclude<ExtArgs> | null
    where?: productos_reciboWhereInput
    orderBy?: productos_reciboOrderByWithRelationInput | productos_reciboOrderByWithRelationInput[]
    cursor?: productos_reciboWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Productos_reciboScalarFieldEnum | Productos_reciboScalarFieldEnum[]
  }

  /**
   * recibos.usuarios
   */
  export type recibos$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * recibos without action
   */
  export type recibosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
    objetivo_consumo: string | null
    estilo_vida: string | null
    prefiere_supermercado: string | null
    precio_prioridad: boolean | null
    empaques_sostenibles: boolean | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    contrasena: string | null
    objetivo_consumo: string | null
    estilo_vida: string | null
    prefiere_supermercado: string | null
    precio_prioridad: boolean | null
    empaques_sostenibles: boolean | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    contrasena: number
    objetivo_consumo: number
    estilo_vida: number
    evita_ingredientes: number
    prefiere_supermercado: number
    precio_prioridad: number
    empaques_sostenibles: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    objetivo_consumo?: true
    estilo_vida?: true
    prefiere_supermercado?: true
    precio_prioridad?: true
    empaques_sostenibles?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    objetivo_consumo?: true
    estilo_vida?: true
    prefiere_supermercado?: true
    precio_prioridad?: true
    empaques_sostenibles?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    contrasena?: true
    objetivo_consumo?: true
    estilo_vida?: true
    evita_ingredientes?: true
    prefiere_supermercado?: true
    precio_prioridad?: true
    empaques_sostenibles?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    nombre: string | null
    correo: string | null
    contrasena: string | null
    objetivo_consumo: string | null
    estilo_vida: string | null
    evita_ingredientes: string[]
    prefiere_supermercado: string | null
    precio_prioridad: boolean | null
    empaques_sostenibles: boolean | null
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    objetivo_consumo?: boolean
    estilo_vida?: boolean
    evita_ingredientes?: boolean
    prefiere_supermercado?: boolean
    precio_prioridad?: boolean
    empaques_sostenibles?: boolean
    recibos?: boolean | usuarios$recibosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    objetivo_consumo?: boolean
    estilo_vida?: boolean
    evita_ingredientes?: boolean
    prefiere_supermercado?: boolean
    precio_prioridad?: boolean
    empaques_sostenibles?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    contrasena?: boolean
    objetivo_consumo?: boolean
    estilo_vida?: boolean
    evita_ingredientes?: boolean
    prefiere_supermercado?: boolean
    precio_prioridad?: boolean
    empaques_sostenibles?: boolean
  }

  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recibos?: boolean | usuarios$recibosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      recibos: Prisma.$recibosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string | null
      correo: string | null
      contrasena: string | null
      objetivo_consumo: string | null
      estilo_vida: string | null
      evita_ingredientes: string[]
      prefiere_supermercado: string | null
      precio_prioridad: boolean | null
      empaques_sostenibles: boolean | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recibos<T extends usuarios$recibosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$recibosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recibosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the usuarios model
   */ 
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'String'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly correo: FieldRef<"usuarios", 'String'>
    readonly contrasena: FieldRef<"usuarios", 'String'>
    readonly objetivo_consumo: FieldRef<"usuarios", 'String'>
    readonly estilo_vida: FieldRef<"usuarios", 'String'>
    readonly evita_ingredientes: FieldRef<"usuarios", 'String[]'>
    readonly prefiere_supermercado: FieldRef<"usuarios", 'String'>
    readonly precio_prioridad: FieldRef<"usuarios", 'Boolean'>
    readonly empaques_sostenibles: FieldRef<"usuarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
  }

  /**
   * usuarios.recibos
   */
  export type usuarios$recibosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recibos
     */
    select?: recibosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recibosInclude<ExtArgs> | null
    where?: recibosWhereInput
    orderBy?: recibosOrderByWithRelationInput | recibosOrderByWithRelationInput[]
    cursor?: recibosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecibosScalarFieldEnum | RecibosScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    categoria: 'categoria',
    subcategoria: 'subcategoria',
    supermercado: 'supermercado',
    co2e_promedio_por_kg: 'co2e_promedio_por_kg'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const Productos_reciboScalarFieldEnum: {
    id: 'id',
    recibo_id: 'recibo_id',
    nombre_detectado: 'nombre_detectado',
    productos: 'productos',
    categoria_id: 'categoria_id',
    cantidad: 'cantidad',
    peso_estimado_kg: 'peso_estimado_kg',
    co2e_estimado: 'co2e_estimado'
  };

  export type Productos_reciboScalarFieldEnum = (typeof Productos_reciboScalarFieldEnum)[keyof typeof Productos_reciboScalarFieldEnum]


  export const RecibosScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    fuente: 'fuente',
    texto_original: 'texto_original',
    fecha_recibo: 'fecha_recibo',
    co2e_total: 'co2e_total',
    es_recibo_verde: 'es_recibo_verde',
    puntuacion_impacto: 'puntuacion_impacto',
    evaluacion_huella: 'evaluacion_huella',
    detalle_evaluacion: 'detalle_evaluacion',
    creado_en: 'creado_en'
  };

  export type RecibosScalarFieldEnum = (typeof RecibosScalarFieldEnum)[keyof typeof RecibosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    contrasena: 'contrasena',
    objetivo_consumo: 'objetivo_consumo',
    estilo_vida: 'estilo_vida',
    evita_ingredientes: 'evita_ingredientes',
    prefiere_supermercado: 'prefiere_supermercado',
    precio_prioridad: 'precio_prioridad',
    empaques_sostenibles: 'empaques_sostenibles'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


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
   * Deep Input Types
   */


  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id?: IntFilter<"categorias"> | number
    categoria?: StringFilter<"categorias"> | string
    subcategoria?: StringNullableFilter<"categorias"> | string | null
    supermercado?: StringNullableFilter<"categorias"> | string | null
    co2e_promedio_por_kg?: FloatFilter<"categorias"> | number
    productos_recibo?: Productos_reciboListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrderInput | SortOrder
    supermercado?: SortOrderInput | SortOrder
    co2e_promedio_por_kg?: SortOrder
    productos_recibo?: productos_reciboOrderByRelationAggregateInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    categoria?: StringFilter<"categorias"> | string
    subcategoria?: StringNullableFilter<"categorias"> | string | null
    supermercado?: StringNullableFilter<"categorias"> | string | null
    co2e_promedio_por_kg?: FloatFilter<"categorias"> | number
    productos_recibo?: Productos_reciboListRelationFilter
  }, "id">

  export type categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrderInput | SortOrder
    supermercado?: SortOrderInput | SortOrder
    co2e_promedio_por_kg?: SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorias"> | number
    categoria?: StringWithAggregatesFilter<"categorias"> | string
    subcategoria?: StringNullableWithAggregatesFilter<"categorias"> | string | null
    supermercado?: StringNullableWithAggregatesFilter<"categorias"> | string | null
    co2e_promedio_por_kg?: FloatWithAggregatesFilter<"categorias"> | number
  }

  export type productos_reciboWhereInput = {
    AND?: productos_reciboWhereInput | productos_reciboWhereInput[]
    OR?: productos_reciboWhereInput[]
    NOT?: productos_reciboWhereInput | productos_reciboWhereInput[]
    id?: IntFilter<"productos_recibo"> | number
    recibo_id?: UuidNullableFilter<"productos_recibo"> | string | null
    nombre_detectado?: StringFilter<"productos_recibo"> | string
    productos?: StringFilter<"productos_recibo"> | string
    categoria_id?: IntNullableFilter<"productos_recibo"> | number | null
    cantidad?: FloatNullableFilter<"productos_recibo"> | number | null
    peso_estimado_kg?: FloatNullableFilter<"productos_recibo"> | number | null
    co2e_estimado?: FloatNullableFilter<"productos_recibo"> | number | null
    categorias?: XOR<CategoriasNullableRelationFilter, categoriasWhereInput> | null
    recibos?: XOR<RecibosNullableRelationFilter, recibosWhereInput> | null
  }

  export type productos_reciboOrderByWithRelationInput = {
    id?: SortOrder
    recibo_id?: SortOrderInput | SortOrder
    nombre_detectado?: SortOrder
    productos?: SortOrder
    categoria_id?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    peso_estimado_kg?: SortOrderInput | SortOrder
    co2e_estimado?: SortOrderInput | SortOrder
    categorias?: categoriasOrderByWithRelationInput
    recibos?: recibosOrderByWithRelationInput
  }

  export type productos_reciboWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productos_reciboWhereInput | productos_reciboWhereInput[]
    OR?: productos_reciboWhereInput[]
    NOT?: productos_reciboWhereInput | productos_reciboWhereInput[]
    recibo_id?: UuidNullableFilter<"productos_recibo"> | string | null
    nombre_detectado?: StringFilter<"productos_recibo"> | string
    productos?: StringFilter<"productos_recibo"> | string
    categoria_id?: IntNullableFilter<"productos_recibo"> | number | null
    cantidad?: FloatNullableFilter<"productos_recibo"> | number | null
    peso_estimado_kg?: FloatNullableFilter<"productos_recibo"> | number | null
    co2e_estimado?: FloatNullableFilter<"productos_recibo"> | number | null
    categorias?: XOR<CategoriasNullableRelationFilter, categoriasWhereInput> | null
    recibos?: XOR<RecibosNullableRelationFilter, recibosWhereInput> | null
  }, "id">

  export type productos_reciboOrderByWithAggregationInput = {
    id?: SortOrder
    recibo_id?: SortOrderInput | SortOrder
    nombre_detectado?: SortOrder
    productos?: SortOrder
    categoria_id?: SortOrderInput | SortOrder
    cantidad?: SortOrderInput | SortOrder
    peso_estimado_kg?: SortOrderInput | SortOrder
    co2e_estimado?: SortOrderInput | SortOrder
    _count?: productos_reciboCountOrderByAggregateInput
    _avg?: productos_reciboAvgOrderByAggregateInput
    _max?: productos_reciboMaxOrderByAggregateInput
    _min?: productos_reciboMinOrderByAggregateInput
    _sum?: productos_reciboSumOrderByAggregateInput
  }

  export type productos_reciboScalarWhereWithAggregatesInput = {
    AND?: productos_reciboScalarWhereWithAggregatesInput | productos_reciboScalarWhereWithAggregatesInput[]
    OR?: productos_reciboScalarWhereWithAggregatesInput[]
    NOT?: productos_reciboScalarWhereWithAggregatesInput | productos_reciboScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productos_recibo"> | number
    recibo_id?: UuidNullableWithAggregatesFilter<"productos_recibo"> | string | null
    nombre_detectado?: StringWithAggregatesFilter<"productos_recibo"> | string
    productos?: StringWithAggregatesFilter<"productos_recibo"> | string
    categoria_id?: IntNullableWithAggregatesFilter<"productos_recibo"> | number | null
    cantidad?: FloatNullableWithAggregatesFilter<"productos_recibo"> | number | null
    peso_estimado_kg?: FloatNullableWithAggregatesFilter<"productos_recibo"> | number | null
    co2e_estimado?: FloatNullableWithAggregatesFilter<"productos_recibo"> | number | null
  }

  export type recibosWhereInput = {
    AND?: recibosWhereInput | recibosWhereInput[]
    OR?: recibosWhereInput[]
    NOT?: recibosWhereInput | recibosWhereInput[]
    id?: UuidFilter<"recibos"> | string
    usuario_id?: UuidNullableFilter<"recibos"> | string | null
    fuente?: StringFilter<"recibos"> | string
    texto_original?: StringNullableFilter<"recibos"> | string | null
    fecha_recibo?: DateTimeNullableFilter<"recibos"> | Date | string | null
    co2e_total?: FloatNullableFilter<"recibos"> | number | null
    es_recibo_verde?: BoolNullableFilter<"recibos"> | boolean | null
    puntuacion_impacto?: IntNullableFilter<"recibos"> | number | null
    evaluacion_huella?: StringNullableFilter<"recibos"> | string | null
    detalle_evaluacion?: StringNullableFilter<"recibos"> | string | null
    creado_en?: DateTimeNullableFilter<"recibos"> | Date | string | null
    productos_recibo?: Productos_reciboListRelationFilter
    usuarios?: XOR<UsuariosNullableRelationFilter, usuariosWhereInput> | null
  }

  export type recibosOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    fuente?: SortOrder
    texto_original?: SortOrderInput | SortOrder
    fecha_recibo?: SortOrderInput | SortOrder
    co2e_total?: SortOrderInput | SortOrder
    es_recibo_verde?: SortOrderInput | SortOrder
    puntuacion_impacto?: SortOrderInput | SortOrder
    evaluacion_huella?: SortOrderInput | SortOrder
    detalle_evaluacion?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    productos_recibo?: productos_reciboOrderByRelationAggregateInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type recibosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: recibosWhereInput | recibosWhereInput[]
    OR?: recibosWhereInput[]
    NOT?: recibosWhereInput | recibosWhereInput[]
    usuario_id?: UuidNullableFilter<"recibos"> | string | null
    fuente?: StringFilter<"recibos"> | string
    texto_original?: StringNullableFilter<"recibos"> | string | null
    fecha_recibo?: DateTimeNullableFilter<"recibos"> | Date | string | null
    co2e_total?: FloatNullableFilter<"recibos"> | number | null
    es_recibo_verde?: BoolNullableFilter<"recibos"> | boolean | null
    puntuacion_impacto?: IntNullableFilter<"recibos"> | number | null
    evaluacion_huella?: StringNullableFilter<"recibos"> | string | null
    detalle_evaluacion?: StringNullableFilter<"recibos"> | string | null
    creado_en?: DateTimeNullableFilter<"recibos"> | Date | string | null
    productos_recibo?: Productos_reciboListRelationFilter
    usuarios?: XOR<UsuariosNullableRelationFilter, usuariosWhereInput> | null
  }, "id">

  export type recibosOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    fuente?: SortOrder
    texto_original?: SortOrderInput | SortOrder
    fecha_recibo?: SortOrderInput | SortOrder
    co2e_total?: SortOrderInput | SortOrder
    es_recibo_verde?: SortOrderInput | SortOrder
    puntuacion_impacto?: SortOrderInput | SortOrder
    evaluacion_huella?: SortOrderInput | SortOrder
    detalle_evaluacion?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: recibosCountOrderByAggregateInput
    _avg?: recibosAvgOrderByAggregateInput
    _max?: recibosMaxOrderByAggregateInput
    _min?: recibosMinOrderByAggregateInput
    _sum?: recibosSumOrderByAggregateInput
  }

  export type recibosScalarWhereWithAggregatesInput = {
    AND?: recibosScalarWhereWithAggregatesInput | recibosScalarWhereWithAggregatesInput[]
    OR?: recibosScalarWhereWithAggregatesInput[]
    NOT?: recibosScalarWhereWithAggregatesInput | recibosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"recibos"> | string
    usuario_id?: UuidNullableWithAggregatesFilter<"recibos"> | string | null
    fuente?: StringWithAggregatesFilter<"recibos"> | string
    texto_original?: StringNullableWithAggregatesFilter<"recibos"> | string | null
    fecha_recibo?: DateTimeNullableWithAggregatesFilter<"recibos"> | Date | string | null
    co2e_total?: FloatNullableWithAggregatesFilter<"recibos"> | number | null
    es_recibo_verde?: BoolNullableWithAggregatesFilter<"recibos"> | boolean | null
    puntuacion_impacto?: IntNullableWithAggregatesFilter<"recibos"> | number | null
    evaluacion_huella?: StringNullableWithAggregatesFilter<"recibos"> | string | null
    detalle_evaluacion?: StringNullableWithAggregatesFilter<"recibos"> | string | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"recibos"> | Date | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: UuidFilter<"usuarios"> | string
    nombre?: StringNullableFilter<"usuarios"> | string | null
    correo?: StringNullableFilter<"usuarios"> | string | null
    contrasena?: StringNullableFilter<"usuarios"> | string | null
    objetivo_consumo?: StringNullableFilter<"usuarios"> | string | null
    estilo_vida?: StringNullableFilter<"usuarios"> | string | null
    evita_ingredientes?: StringNullableListFilter<"usuarios">
    prefiere_supermercado?: StringNullableFilter<"usuarios"> | string | null
    precio_prioridad?: BoolNullableFilter<"usuarios"> | boolean | null
    empaques_sostenibles?: BoolNullableFilter<"usuarios"> | boolean | null
    recibos?: RecibosListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    objetivo_consumo?: SortOrderInput | SortOrder
    estilo_vida?: SortOrderInput | SortOrder
    evita_ingredientes?: SortOrder
    prefiere_supermercado?: SortOrderInput | SortOrder
    precio_prioridad?: SortOrderInput | SortOrder
    empaques_sostenibles?: SortOrderInput | SortOrder
    recibos?: recibosOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringNullableFilter<"usuarios"> | string | null
    correo?: StringNullableFilter<"usuarios"> | string | null
    contrasena?: StringNullableFilter<"usuarios"> | string | null
    objetivo_consumo?: StringNullableFilter<"usuarios"> | string | null
    estilo_vida?: StringNullableFilter<"usuarios"> | string | null
    evita_ingredientes?: StringNullableListFilter<"usuarios">
    prefiere_supermercado?: StringNullableFilter<"usuarios"> | string | null
    precio_prioridad?: BoolNullableFilter<"usuarios"> | boolean | null
    empaques_sostenibles?: BoolNullableFilter<"usuarios"> | boolean | null
    recibos?: RecibosListRelationFilter
  }, "id">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    objetivo_consumo?: SortOrderInput | SortOrder
    estilo_vida?: SortOrderInput | SortOrder
    evita_ingredientes?: SortOrder
    prefiere_supermercado?: SortOrderInput | SortOrder
    precio_prioridad?: SortOrderInput | SortOrder
    empaques_sostenibles?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"usuarios"> | string
    nombre?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    correo?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    contrasena?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    objetivo_consumo?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    estilo_vida?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    evita_ingredientes?: StringNullableListFilter<"usuarios">
    prefiere_supermercado?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    precio_prioridad?: BoolNullableWithAggregatesFilter<"usuarios"> | boolean | null
    empaques_sostenibles?: BoolNullableWithAggregatesFilter<"usuarios"> | boolean | null
  }

  export type categoriasCreateInput = {
    categoria: string
    subcategoria?: string | null
    supermercado?: string | null
    co2e_promedio_por_kg: number
    productos_recibo?: productos_reciboCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    id?: number
    categoria: string
    subcategoria?: string | null
    supermercado?: string | null
    co2e_promedio_por_kg: number
    productos_recibo?: productos_reciboUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    co2e_promedio_por_kg?: FloatFieldUpdateOperationsInput | number
    productos_recibo?: productos_reciboUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    co2e_promedio_por_kg?: FloatFieldUpdateOperationsInput | number
    productos_recibo?: productos_reciboUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    id?: number
    categoria: string
    subcategoria?: string | null
    supermercado?: string | null
    co2e_promedio_por_kg: number
  }

  export type categoriasUpdateManyMutationInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    co2e_promedio_por_kg?: FloatFieldUpdateOperationsInput | number
  }

  export type categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    co2e_promedio_por_kg?: FloatFieldUpdateOperationsInput | number
  }

  export type productos_reciboCreateInput = {
    nombre_detectado: string
    productos: string
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
    categorias?: categoriasCreateNestedOneWithoutProductos_reciboInput
    recibos?: recibosCreateNestedOneWithoutProductos_reciboInput
  }

  export type productos_reciboUncheckedCreateInput = {
    id?: number
    recibo_id?: string | null
    nombre_detectado: string
    productos: string
    categoria_id?: number | null
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
  }

  export type productos_reciboUpdateInput = {
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
    categorias?: categoriasUpdateOneWithoutProductos_reciboNestedInput
    recibos?: recibosUpdateOneWithoutProductos_reciboNestedInput
  }

  export type productos_reciboUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recibo_id?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productos_reciboCreateManyInput = {
    id?: number
    recibo_id?: string | null
    nombre_detectado: string
    productos: string
    categoria_id?: number | null
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
  }

  export type productos_reciboUpdateManyMutationInput = {
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productos_reciboUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recibo_id?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type recibosCreateInput = {
    id: string
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
    productos_recibo?: productos_reciboCreateNestedManyWithoutRecibosInput
    usuarios?: usuariosCreateNestedOneWithoutRecibosInput
  }

  export type recibosUncheckedCreateInput = {
    id: string
    usuario_id?: string | null
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
    productos_recibo?: productos_reciboUncheckedCreateNestedManyWithoutRecibosInput
  }

  export type recibosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos_recibo?: productos_reciboUpdateManyWithoutRecibosNestedInput
    usuarios?: usuariosUpdateOneWithoutRecibosNestedInput
  }

  export type recibosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos_recibo?: productos_reciboUncheckedUpdateManyWithoutRecibosNestedInput
  }

  export type recibosCreateManyInput = {
    id: string
    usuario_id?: string | null
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
  }

  export type recibosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recibosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateInput = {
    id: string
    nombre?: string | null
    correo?: string | null
    contrasena?: string | null
    objetivo_consumo?: string | null
    estilo_vida?: string | null
    evita_ingredientes?: usuariosCreateevita_ingredientesInput | string[]
    prefiere_supermercado?: string | null
    precio_prioridad?: boolean | null
    empaques_sostenibles?: boolean | null
    recibos?: recibosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id: string
    nombre?: string | null
    correo?: string | null
    contrasena?: string | null
    objetivo_consumo?: string | null
    estilo_vida?: string | null
    evita_ingredientes?: usuariosCreateevita_ingredientesInput | string[]
    prefiere_supermercado?: string | null
    precio_prioridad?: boolean | null
    empaques_sostenibles?: boolean | null
    recibos?: recibosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo_consumo?: NullableStringFieldUpdateOperationsInput | string | null
    estilo_vida?: NullableStringFieldUpdateOperationsInput | string | null
    evita_ingredientes?: usuariosUpdateevita_ingredientesInput | string[]
    prefiere_supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    precio_prioridad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    empaques_sostenibles?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recibos?: recibosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo_consumo?: NullableStringFieldUpdateOperationsInput | string | null
    estilo_vida?: NullableStringFieldUpdateOperationsInput | string | null
    evita_ingredientes?: usuariosUpdateevita_ingredientesInput | string[]
    prefiere_supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    precio_prioridad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    empaques_sostenibles?: NullableBoolFieldUpdateOperationsInput | boolean | null
    recibos?: recibosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id: string
    nombre?: string | null
    correo?: string | null
    contrasena?: string | null
    objetivo_consumo?: string | null
    estilo_vida?: string | null
    evita_ingredientes?: usuariosCreateevita_ingredientesInput | string[]
    prefiere_supermercado?: string | null
    precio_prioridad?: boolean | null
    empaques_sostenibles?: boolean | null
  }

  export type usuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo_consumo?: NullableStringFieldUpdateOperationsInput | string | null
    estilo_vida?: NullableStringFieldUpdateOperationsInput | string | null
    evita_ingredientes?: usuariosUpdateevita_ingredientesInput | string[]
    prefiere_supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    precio_prioridad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    empaques_sostenibles?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo_consumo?: NullableStringFieldUpdateOperationsInput | string | null
    estilo_vida?: NullableStringFieldUpdateOperationsInput | string | null
    evita_ingredientes?: usuariosUpdateevita_ingredientesInput | string[]
    prefiere_supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    precio_prioridad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    empaques_sostenibles?: NullableBoolFieldUpdateOperationsInput | boolean | null
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

  export type Productos_reciboListRelationFilter = {
    every?: productos_reciboWhereInput
    some?: productos_reciboWhereInput
    none?: productos_reciboWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productos_reciboOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    supermercado?: SortOrder
    co2e_promedio_por_kg?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
    co2e_promedio_por_kg?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    supermercado?: SortOrder
    co2e_promedio_por_kg?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    categoria?: SortOrder
    subcategoria?: SortOrder
    supermercado?: SortOrder
    co2e_promedio_por_kg?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id?: SortOrder
    co2e_promedio_por_kg?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriasNullableRelationFilter = {
    is?: categoriasWhereInput | null
    isNot?: categoriasWhereInput | null
  }

  export type RecibosNullableRelationFilter = {
    is?: recibosWhereInput | null
    isNot?: recibosWhereInput | null
  }

  export type productos_reciboCountOrderByAggregateInput = {
    id?: SortOrder
    recibo_id?: SortOrder
    nombre_detectado?: SortOrder
    productos?: SortOrder
    categoria_id?: SortOrder
    cantidad?: SortOrder
    peso_estimado_kg?: SortOrder
    co2e_estimado?: SortOrder
  }

  export type productos_reciboAvgOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    cantidad?: SortOrder
    peso_estimado_kg?: SortOrder
    co2e_estimado?: SortOrder
  }

  export type productos_reciboMaxOrderByAggregateInput = {
    id?: SortOrder
    recibo_id?: SortOrder
    nombre_detectado?: SortOrder
    productos?: SortOrder
    categoria_id?: SortOrder
    cantidad?: SortOrder
    peso_estimado_kg?: SortOrder
    co2e_estimado?: SortOrder
  }

  export type productos_reciboMinOrderByAggregateInput = {
    id?: SortOrder
    recibo_id?: SortOrder
    nombre_detectado?: SortOrder
    productos?: SortOrder
    categoria_id?: SortOrder
    cantidad?: SortOrder
    peso_estimado_kg?: SortOrder
    co2e_estimado?: SortOrder
  }

  export type productos_reciboSumOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    cantidad?: SortOrder
    peso_estimado_kg?: SortOrder
    co2e_estimado?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsuariosNullableRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type recibosCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    fuente?: SortOrder
    texto_original?: SortOrder
    fecha_recibo?: SortOrder
    co2e_total?: SortOrder
    es_recibo_verde?: SortOrder
    puntuacion_impacto?: SortOrder
    evaluacion_huella?: SortOrder
    detalle_evaluacion?: SortOrder
    creado_en?: SortOrder
  }

  export type recibosAvgOrderByAggregateInput = {
    co2e_total?: SortOrder
    puntuacion_impacto?: SortOrder
  }

  export type recibosMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    fuente?: SortOrder
    texto_original?: SortOrder
    fecha_recibo?: SortOrder
    co2e_total?: SortOrder
    es_recibo_verde?: SortOrder
    puntuacion_impacto?: SortOrder
    evaluacion_huella?: SortOrder
    detalle_evaluacion?: SortOrder
    creado_en?: SortOrder
  }

  export type recibosMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    fuente?: SortOrder
    texto_original?: SortOrder
    fecha_recibo?: SortOrder
    co2e_total?: SortOrder
    es_recibo_verde?: SortOrder
    puntuacion_impacto?: SortOrder
    evaluacion_huella?: SortOrder
    detalle_evaluacion?: SortOrder
    creado_en?: SortOrder
  }

  export type recibosSumOrderByAggregateInput = {
    co2e_total?: SortOrder
    puntuacion_impacto?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RecibosListRelationFilter = {
    every?: recibosWhereInput
    some?: recibosWhereInput
    none?: recibosWhereInput
  }

  export type recibosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    objetivo_consumo?: SortOrder
    estilo_vida?: SortOrder
    evita_ingredientes?: SortOrder
    prefiere_supermercado?: SortOrder
    precio_prioridad?: SortOrder
    empaques_sostenibles?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    objetivo_consumo?: SortOrder
    estilo_vida?: SortOrder
    prefiere_supermercado?: SortOrder
    precio_prioridad?: SortOrder
    empaques_sostenibles?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    objetivo_consumo?: SortOrder
    estilo_vida?: SortOrder
    prefiere_supermercado?: SortOrder
    precio_prioridad?: SortOrder
    empaques_sostenibles?: SortOrder
  }

  export type productos_reciboCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productos_reciboCreateWithoutCategoriasInput, productos_reciboUncheckedCreateWithoutCategoriasInput> | productos_reciboCreateWithoutCategoriasInput[] | productos_reciboUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutCategoriasInput | productos_reciboCreateOrConnectWithoutCategoriasInput[]
    createMany?: productos_reciboCreateManyCategoriasInputEnvelope
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
  }

  export type productos_reciboUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productos_reciboCreateWithoutCategoriasInput, productos_reciboUncheckedCreateWithoutCategoriasInput> | productos_reciboCreateWithoutCategoriasInput[] | productos_reciboUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutCategoriasInput | productos_reciboCreateOrConnectWithoutCategoriasInput[]
    createMany?: productos_reciboCreateManyCategoriasInputEnvelope
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productos_reciboUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productos_reciboCreateWithoutCategoriasInput, productos_reciboUncheckedCreateWithoutCategoriasInput> | productos_reciboCreateWithoutCategoriasInput[] | productos_reciboUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutCategoriasInput | productos_reciboCreateOrConnectWithoutCategoriasInput[]
    upsert?: productos_reciboUpsertWithWhereUniqueWithoutCategoriasInput | productos_reciboUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productos_reciboCreateManyCategoriasInputEnvelope
    set?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    disconnect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    delete?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    update?: productos_reciboUpdateWithWhereUniqueWithoutCategoriasInput | productos_reciboUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productos_reciboUpdateManyWithWhereWithoutCategoriasInput | productos_reciboUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productos_reciboScalarWhereInput | productos_reciboScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productos_reciboUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productos_reciboCreateWithoutCategoriasInput, productos_reciboUncheckedCreateWithoutCategoriasInput> | productos_reciboCreateWithoutCategoriasInput[] | productos_reciboUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutCategoriasInput | productos_reciboCreateOrConnectWithoutCategoriasInput[]
    upsert?: productos_reciboUpsertWithWhereUniqueWithoutCategoriasInput | productos_reciboUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productos_reciboCreateManyCategoriasInputEnvelope
    set?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    disconnect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    delete?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    update?: productos_reciboUpdateWithWhereUniqueWithoutCategoriasInput | productos_reciboUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productos_reciboUpdateManyWithWhereWithoutCategoriasInput | productos_reciboUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productos_reciboScalarWhereInput | productos_reciboScalarWhereInput[]
  }

  export type categoriasCreateNestedOneWithoutProductos_reciboInput = {
    create?: XOR<categoriasCreateWithoutProductos_reciboInput, categoriasUncheckedCreateWithoutProductos_reciboInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductos_reciboInput
    connect?: categoriasWhereUniqueInput
  }

  export type recibosCreateNestedOneWithoutProductos_reciboInput = {
    create?: XOR<recibosCreateWithoutProductos_reciboInput, recibosUncheckedCreateWithoutProductos_reciboInput>
    connectOrCreate?: recibosCreateOrConnectWithoutProductos_reciboInput
    connect?: recibosWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoriasUpdateOneWithoutProductos_reciboNestedInput = {
    create?: XOR<categoriasCreateWithoutProductos_reciboInput, categoriasUncheckedCreateWithoutProductos_reciboInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductos_reciboInput
    upsert?: categoriasUpsertWithoutProductos_reciboInput
    disconnect?: categoriasWhereInput | boolean
    delete?: categoriasWhereInput | boolean
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutProductos_reciboInput, categoriasUpdateWithoutProductos_reciboInput>, categoriasUncheckedUpdateWithoutProductos_reciboInput>
  }

  export type recibosUpdateOneWithoutProductos_reciboNestedInput = {
    create?: XOR<recibosCreateWithoutProductos_reciboInput, recibosUncheckedCreateWithoutProductos_reciboInput>
    connectOrCreate?: recibosCreateOrConnectWithoutProductos_reciboInput
    upsert?: recibosUpsertWithoutProductos_reciboInput
    disconnect?: recibosWhereInput | boolean
    delete?: recibosWhereInput | boolean
    connect?: recibosWhereUniqueInput
    update?: XOR<XOR<recibosUpdateToOneWithWhereWithoutProductos_reciboInput, recibosUpdateWithoutProductos_reciboInput>, recibosUncheckedUpdateWithoutProductos_reciboInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productos_reciboCreateNestedManyWithoutRecibosInput = {
    create?: XOR<productos_reciboCreateWithoutRecibosInput, productos_reciboUncheckedCreateWithoutRecibosInput> | productos_reciboCreateWithoutRecibosInput[] | productos_reciboUncheckedCreateWithoutRecibosInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutRecibosInput | productos_reciboCreateOrConnectWithoutRecibosInput[]
    createMany?: productos_reciboCreateManyRecibosInputEnvelope
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
  }

  export type usuariosCreateNestedOneWithoutRecibosInput = {
    create?: XOR<usuariosCreateWithoutRecibosInput, usuariosUncheckedCreateWithoutRecibosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutRecibosInput
    connect?: usuariosWhereUniqueInput
  }

  export type productos_reciboUncheckedCreateNestedManyWithoutRecibosInput = {
    create?: XOR<productos_reciboCreateWithoutRecibosInput, productos_reciboUncheckedCreateWithoutRecibosInput> | productos_reciboCreateWithoutRecibosInput[] | productos_reciboUncheckedCreateWithoutRecibosInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutRecibosInput | productos_reciboCreateOrConnectWithoutRecibosInput[]
    createMany?: productos_reciboCreateManyRecibosInputEnvelope
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type productos_reciboUpdateManyWithoutRecibosNestedInput = {
    create?: XOR<productos_reciboCreateWithoutRecibosInput, productos_reciboUncheckedCreateWithoutRecibosInput> | productos_reciboCreateWithoutRecibosInput[] | productos_reciboUncheckedCreateWithoutRecibosInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutRecibosInput | productos_reciboCreateOrConnectWithoutRecibosInput[]
    upsert?: productos_reciboUpsertWithWhereUniqueWithoutRecibosInput | productos_reciboUpsertWithWhereUniqueWithoutRecibosInput[]
    createMany?: productos_reciboCreateManyRecibosInputEnvelope
    set?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    disconnect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    delete?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    update?: productos_reciboUpdateWithWhereUniqueWithoutRecibosInput | productos_reciboUpdateWithWhereUniqueWithoutRecibosInput[]
    updateMany?: productos_reciboUpdateManyWithWhereWithoutRecibosInput | productos_reciboUpdateManyWithWhereWithoutRecibosInput[]
    deleteMany?: productos_reciboScalarWhereInput | productos_reciboScalarWhereInput[]
  }

  export type usuariosUpdateOneWithoutRecibosNestedInput = {
    create?: XOR<usuariosCreateWithoutRecibosInput, usuariosUncheckedCreateWithoutRecibosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutRecibosInput
    upsert?: usuariosUpsertWithoutRecibosInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutRecibosInput, usuariosUpdateWithoutRecibosInput>, usuariosUncheckedUpdateWithoutRecibosInput>
  }

  export type productos_reciboUncheckedUpdateManyWithoutRecibosNestedInput = {
    create?: XOR<productos_reciboCreateWithoutRecibosInput, productos_reciboUncheckedCreateWithoutRecibosInput> | productos_reciboCreateWithoutRecibosInput[] | productos_reciboUncheckedCreateWithoutRecibosInput[]
    connectOrCreate?: productos_reciboCreateOrConnectWithoutRecibosInput | productos_reciboCreateOrConnectWithoutRecibosInput[]
    upsert?: productos_reciboUpsertWithWhereUniqueWithoutRecibosInput | productos_reciboUpsertWithWhereUniqueWithoutRecibosInput[]
    createMany?: productos_reciboCreateManyRecibosInputEnvelope
    set?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    disconnect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    delete?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    connect?: productos_reciboWhereUniqueInput | productos_reciboWhereUniqueInput[]
    update?: productos_reciboUpdateWithWhereUniqueWithoutRecibosInput | productos_reciboUpdateWithWhereUniqueWithoutRecibosInput[]
    updateMany?: productos_reciboUpdateManyWithWhereWithoutRecibosInput | productos_reciboUpdateManyWithWhereWithoutRecibosInput[]
    deleteMany?: productos_reciboScalarWhereInput | productos_reciboScalarWhereInput[]
  }

  export type usuariosCreateevita_ingredientesInput = {
    set: string[]
  }

  export type recibosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<recibosCreateWithoutUsuariosInput, recibosUncheckedCreateWithoutUsuariosInput> | recibosCreateWithoutUsuariosInput[] | recibosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutUsuariosInput | recibosCreateOrConnectWithoutUsuariosInput[]
    createMany?: recibosCreateManyUsuariosInputEnvelope
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
  }

  export type recibosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<recibosCreateWithoutUsuariosInput, recibosUncheckedCreateWithoutUsuariosInput> | recibosCreateWithoutUsuariosInput[] | recibosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutUsuariosInput | recibosCreateOrConnectWithoutUsuariosInput[]
    createMany?: recibosCreateManyUsuariosInputEnvelope
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
  }

  export type usuariosUpdateevita_ingredientesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type recibosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<recibosCreateWithoutUsuariosInput, recibosUncheckedCreateWithoutUsuariosInput> | recibosCreateWithoutUsuariosInput[] | recibosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutUsuariosInput | recibosCreateOrConnectWithoutUsuariosInput[]
    upsert?: recibosUpsertWithWhereUniqueWithoutUsuariosInput | recibosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: recibosCreateManyUsuariosInputEnvelope
    set?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    disconnect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    delete?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    update?: recibosUpdateWithWhereUniqueWithoutUsuariosInput | recibosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: recibosUpdateManyWithWhereWithoutUsuariosInput | recibosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: recibosScalarWhereInput | recibosScalarWhereInput[]
  }

  export type recibosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<recibosCreateWithoutUsuariosInput, recibosUncheckedCreateWithoutUsuariosInput> | recibosCreateWithoutUsuariosInput[] | recibosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recibosCreateOrConnectWithoutUsuariosInput | recibosCreateOrConnectWithoutUsuariosInput[]
    upsert?: recibosUpsertWithWhereUniqueWithoutUsuariosInput | recibosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: recibosCreateManyUsuariosInputEnvelope
    set?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    disconnect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    delete?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    connect?: recibosWhereUniqueInput | recibosWhereUniqueInput[]
    update?: recibosUpdateWithWhereUniqueWithoutUsuariosInput | recibosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: recibosUpdateManyWithWhereWithoutUsuariosInput | recibosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: recibosScalarWhereInput | recibosScalarWhereInput[]
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type productos_reciboCreateWithoutCategoriasInput = {
    nombre_detectado: string
    productos: string
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
    recibos?: recibosCreateNestedOneWithoutProductos_reciboInput
  }

  export type productos_reciboUncheckedCreateWithoutCategoriasInput = {
    id?: number
    recibo_id?: string | null
    nombre_detectado: string
    productos: string
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
  }

  export type productos_reciboCreateOrConnectWithoutCategoriasInput = {
    where: productos_reciboWhereUniqueInput
    create: XOR<productos_reciboCreateWithoutCategoriasInput, productos_reciboUncheckedCreateWithoutCategoriasInput>
  }

  export type productos_reciboCreateManyCategoriasInputEnvelope = {
    data: productos_reciboCreateManyCategoriasInput | productos_reciboCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type productos_reciboUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: productos_reciboWhereUniqueInput
    update: XOR<productos_reciboUpdateWithoutCategoriasInput, productos_reciboUncheckedUpdateWithoutCategoriasInput>
    create: XOR<productos_reciboCreateWithoutCategoriasInput, productos_reciboUncheckedCreateWithoutCategoriasInput>
  }

  export type productos_reciboUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: productos_reciboWhereUniqueInput
    data: XOR<productos_reciboUpdateWithoutCategoriasInput, productos_reciboUncheckedUpdateWithoutCategoriasInput>
  }

  export type productos_reciboUpdateManyWithWhereWithoutCategoriasInput = {
    where: productos_reciboScalarWhereInput
    data: XOR<productos_reciboUpdateManyMutationInput, productos_reciboUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type productos_reciboScalarWhereInput = {
    AND?: productos_reciboScalarWhereInput | productos_reciboScalarWhereInput[]
    OR?: productos_reciboScalarWhereInput[]
    NOT?: productos_reciboScalarWhereInput | productos_reciboScalarWhereInput[]
    id?: IntFilter<"productos_recibo"> | number
    recibo_id?: UuidNullableFilter<"productos_recibo"> | string | null
    nombre_detectado?: StringFilter<"productos_recibo"> | string
    productos?: StringFilter<"productos_recibo"> | string
    categoria_id?: IntNullableFilter<"productos_recibo"> | number | null
    cantidad?: FloatNullableFilter<"productos_recibo"> | number | null
    peso_estimado_kg?: FloatNullableFilter<"productos_recibo"> | number | null
    co2e_estimado?: FloatNullableFilter<"productos_recibo"> | number | null
  }

  export type categoriasCreateWithoutProductos_reciboInput = {
    categoria: string
    subcategoria?: string | null
    supermercado?: string | null
    co2e_promedio_por_kg: number
  }

  export type categoriasUncheckedCreateWithoutProductos_reciboInput = {
    id?: number
    categoria: string
    subcategoria?: string | null
    supermercado?: string | null
    co2e_promedio_por_kg: number
  }

  export type categoriasCreateOrConnectWithoutProductos_reciboInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutProductos_reciboInput, categoriasUncheckedCreateWithoutProductos_reciboInput>
  }

  export type recibosCreateWithoutProductos_reciboInput = {
    id: string
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutRecibosInput
  }

  export type recibosUncheckedCreateWithoutProductos_reciboInput = {
    id: string
    usuario_id?: string | null
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
  }

  export type recibosCreateOrConnectWithoutProductos_reciboInput = {
    where: recibosWhereUniqueInput
    create: XOR<recibosCreateWithoutProductos_reciboInput, recibosUncheckedCreateWithoutProductos_reciboInput>
  }

  export type categoriasUpsertWithoutProductos_reciboInput = {
    update: XOR<categoriasUpdateWithoutProductos_reciboInput, categoriasUncheckedUpdateWithoutProductos_reciboInput>
    create: XOR<categoriasCreateWithoutProductos_reciboInput, categoriasUncheckedCreateWithoutProductos_reciboInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutProductos_reciboInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutProductos_reciboInput, categoriasUncheckedUpdateWithoutProductos_reciboInput>
  }

  export type categoriasUpdateWithoutProductos_reciboInput = {
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    co2e_promedio_por_kg?: FloatFieldUpdateOperationsInput | number
  }

  export type categoriasUncheckedUpdateWithoutProductos_reciboInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    subcategoria?: NullableStringFieldUpdateOperationsInput | string | null
    supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    co2e_promedio_por_kg?: FloatFieldUpdateOperationsInput | number
  }

  export type recibosUpsertWithoutProductos_reciboInput = {
    update: XOR<recibosUpdateWithoutProductos_reciboInput, recibosUncheckedUpdateWithoutProductos_reciboInput>
    create: XOR<recibosCreateWithoutProductos_reciboInput, recibosUncheckedCreateWithoutProductos_reciboInput>
    where?: recibosWhereInput
  }

  export type recibosUpdateToOneWithWhereWithoutProductos_reciboInput = {
    where?: recibosWhereInput
    data: XOR<recibosUpdateWithoutProductos_reciboInput, recibosUncheckedUpdateWithoutProductos_reciboInput>
  }

  export type recibosUpdateWithoutProductos_reciboInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutRecibosNestedInput
  }

  export type recibosUncheckedUpdateWithoutProductos_reciboInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productos_reciboCreateWithoutRecibosInput = {
    nombre_detectado: string
    productos: string
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
    categorias?: categoriasCreateNestedOneWithoutProductos_reciboInput
  }

  export type productos_reciboUncheckedCreateWithoutRecibosInput = {
    id?: number
    nombre_detectado: string
    productos: string
    categoria_id?: number | null
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
  }

  export type productos_reciboCreateOrConnectWithoutRecibosInput = {
    where: productos_reciboWhereUniqueInput
    create: XOR<productos_reciboCreateWithoutRecibosInput, productos_reciboUncheckedCreateWithoutRecibosInput>
  }

  export type productos_reciboCreateManyRecibosInputEnvelope = {
    data: productos_reciboCreateManyRecibosInput | productos_reciboCreateManyRecibosInput[]
    skipDuplicates?: boolean
  }

  export type usuariosCreateWithoutRecibosInput = {
    id: string
    nombre?: string | null
    correo?: string | null
    contrasena?: string | null
    objetivo_consumo?: string | null
    estilo_vida?: string | null
    evita_ingredientes?: usuariosCreateevita_ingredientesInput | string[]
    prefiere_supermercado?: string | null
    precio_prioridad?: boolean | null
    empaques_sostenibles?: boolean | null
  }

  export type usuariosUncheckedCreateWithoutRecibosInput = {
    id: string
    nombre?: string | null
    correo?: string | null
    contrasena?: string | null
    objetivo_consumo?: string | null
    estilo_vida?: string | null
    evita_ingredientes?: usuariosCreateevita_ingredientesInput | string[]
    prefiere_supermercado?: string | null
    precio_prioridad?: boolean | null
    empaques_sostenibles?: boolean | null
  }

  export type usuariosCreateOrConnectWithoutRecibosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutRecibosInput, usuariosUncheckedCreateWithoutRecibosInput>
  }

  export type productos_reciboUpsertWithWhereUniqueWithoutRecibosInput = {
    where: productos_reciboWhereUniqueInput
    update: XOR<productos_reciboUpdateWithoutRecibosInput, productos_reciboUncheckedUpdateWithoutRecibosInput>
    create: XOR<productos_reciboCreateWithoutRecibosInput, productos_reciboUncheckedCreateWithoutRecibosInput>
  }

  export type productos_reciboUpdateWithWhereUniqueWithoutRecibosInput = {
    where: productos_reciboWhereUniqueInput
    data: XOR<productos_reciboUpdateWithoutRecibosInput, productos_reciboUncheckedUpdateWithoutRecibosInput>
  }

  export type productos_reciboUpdateManyWithWhereWithoutRecibosInput = {
    where: productos_reciboScalarWhereInput
    data: XOR<productos_reciboUpdateManyMutationInput, productos_reciboUncheckedUpdateManyWithoutRecibosInput>
  }

  export type usuariosUpsertWithoutRecibosInput = {
    update: XOR<usuariosUpdateWithoutRecibosInput, usuariosUncheckedUpdateWithoutRecibosInput>
    create: XOR<usuariosCreateWithoutRecibosInput, usuariosUncheckedCreateWithoutRecibosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutRecibosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutRecibosInput, usuariosUncheckedUpdateWithoutRecibosInput>
  }

  export type usuariosUpdateWithoutRecibosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo_consumo?: NullableStringFieldUpdateOperationsInput | string | null
    estilo_vida?: NullableStringFieldUpdateOperationsInput | string | null
    evita_ingredientes?: usuariosUpdateevita_ingredientesInput | string[]
    prefiere_supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    precio_prioridad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    empaques_sostenibles?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usuariosUncheckedUpdateWithoutRecibosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    objetivo_consumo?: NullableStringFieldUpdateOperationsInput | string | null
    estilo_vida?: NullableStringFieldUpdateOperationsInput | string | null
    evita_ingredientes?: usuariosUpdateevita_ingredientesInput | string[]
    prefiere_supermercado?: NullableStringFieldUpdateOperationsInput | string | null
    precio_prioridad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    empaques_sostenibles?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type recibosCreateWithoutUsuariosInput = {
    id: string
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
    productos_recibo?: productos_reciboCreateNestedManyWithoutRecibosInput
  }

  export type recibosUncheckedCreateWithoutUsuariosInput = {
    id: string
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
    productos_recibo?: productos_reciboUncheckedCreateNestedManyWithoutRecibosInput
  }

  export type recibosCreateOrConnectWithoutUsuariosInput = {
    where: recibosWhereUniqueInput
    create: XOR<recibosCreateWithoutUsuariosInput, recibosUncheckedCreateWithoutUsuariosInput>
  }

  export type recibosCreateManyUsuariosInputEnvelope = {
    data: recibosCreateManyUsuariosInput | recibosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type recibosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: recibosWhereUniqueInput
    update: XOR<recibosUpdateWithoutUsuariosInput, recibosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<recibosCreateWithoutUsuariosInput, recibosUncheckedCreateWithoutUsuariosInput>
  }

  export type recibosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: recibosWhereUniqueInput
    data: XOR<recibosUpdateWithoutUsuariosInput, recibosUncheckedUpdateWithoutUsuariosInput>
  }

  export type recibosUpdateManyWithWhereWithoutUsuariosInput = {
    where: recibosScalarWhereInput
    data: XOR<recibosUpdateManyMutationInput, recibosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type recibosScalarWhereInput = {
    AND?: recibosScalarWhereInput | recibosScalarWhereInput[]
    OR?: recibosScalarWhereInput[]
    NOT?: recibosScalarWhereInput | recibosScalarWhereInput[]
    id?: UuidFilter<"recibos"> | string
    usuario_id?: UuidNullableFilter<"recibos"> | string | null
    fuente?: StringFilter<"recibos"> | string
    texto_original?: StringNullableFilter<"recibos"> | string | null
    fecha_recibo?: DateTimeNullableFilter<"recibos"> | Date | string | null
    co2e_total?: FloatNullableFilter<"recibos"> | number | null
    es_recibo_verde?: BoolNullableFilter<"recibos"> | boolean | null
    puntuacion_impacto?: IntNullableFilter<"recibos"> | number | null
    evaluacion_huella?: StringNullableFilter<"recibos"> | string | null
    detalle_evaluacion?: StringNullableFilter<"recibos"> | string | null
    creado_en?: DateTimeNullableFilter<"recibos"> | Date | string | null
  }

  export type productos_reciboCreateManyCategoriasInput = {
    id?: number
    recibo_id?: string | null
    nombre_detectado: string
    productos: string
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
  }

  export type productos_reciboUpdateWithoutCategoriasInput = {
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
    recibos?: recibosUpdateOneWithoutProductos_reciboNestedInput
  }

  export type productos_reciboUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    recibo_id?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productos_reciboUncheckedUpdateManyWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    recibo_id?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productos_reciboCreateManyRecibosInput = {
    id?: number
    nombre_detectado: string
    productos: string
    categoria_id?: number | null
    cantidad?: number | null
    peso_estimado_kg?: number | null
    co2e_estimado?: number | null
  }

  export type productos_reciboUpdateWithoutRecibosInput = {
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
    categorias?: categoriasUpdateOneWithoutProductos_reciboNestedInput
  }

  export type productos_reciboUncheckedUpdateWithoutRecibosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type productos_reciboUncheckedUpdateManyWithoutRecibosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_detectado?: StringFieldUpdateOperationsInput | string
    productos?: StringFieldUpdateOperationsInput | string
    categoria_id?: NullableIntFieldUpdateOperationsInput | number | null
    cantidad?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_estimado_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    co2e_estimado?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type recibosCreateManyUsuariosInput = {
    id: string
    fuente: string
    texto_original?: string | null
    fecha_recibo?: Date | string | null
    co2e_total?: number | null
    es_recibo_verde?: boolean | null
    puntuacion_impacto?: number | null
    evaluacion_huella?: string | null
    detalle_evaluacion?: string | null
    creado_en?: Date | string | null
  }

  export type recibosUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos_recibo?: productos_reciboUpdateManyWithoutRecibosNestedInput
  }

  export type recibosUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos_recibo?: productos_reciboUncheckedUpdateManyWithoutRecibosNestedInput
  }

  export type recibosUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuente?: StringFieldUpdateOperationsInput | string
    texto_original?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_recibo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    co2e_total?: NullableFloatFieldUpdateOperationsInput | number | null
    es_recibo_verde?: NullableBoolFieldUpdateOperationsInput | boolean | null
    puntuacion_impacto?: NullableIntFieldUpdateOperationsInput | number | null
    evaluacion_huella?: NullableStringFieldUpdateOperationsInput | string | null
    detalle_evaluacion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoriasCountOutputTypeDefaultArgs instead
     */
    export type CategoriasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecibosCountOutputTypeDefaultArgs instead
     */
    export type RecibosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecibosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariosCountOutputTypeDefaultArgs instead
     */
    export type UsuariosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoriasDefaultArgs instead
     */
    export type categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoriasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productos_reciboDefaultArgs instead
     */
    export type productos_reciboArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productos_reciboDefaultArgs<ExtArgs>
    /**
     * @deprecated Use recibosDefaultArgs instead
     */
    export type recibosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = recibosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuariosDefaultArgs instead
     */
    export type usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuariosDefaultArgs<ExtArgs>

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