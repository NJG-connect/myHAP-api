
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Dossier
 * 
 */
export type Dossier = {
  id: number
  isParkMarker: boolean | null
  typologie: string | null
  docs: string | null
}

/**
 * Model Intervention
 * 
 */
export type Intervention = {
  id: number
  dateDebutMission: Date | null
  dateFinMission: Date | null
  idEmployeIntervention: number | null
  zones: string | null
  isFirstIntervention: boolean | null
  idDossier: number
}

/**
 * Model Prelevement
 * 
 */
export type Prelevement = {
  id: number
  date: Date | null
  emplacement: string | null
  latitude: string | null
  longitude: string | null
  altitude: string | null
  adresse: string | null
  materiaux: string | null
  taille: number | null
  couleur: string | null
  images: string | null
  laboratoire: string | null
  zone: string | null
  resultat: string | null
  PrelevementPossible: boolean | null
  choixPrelevementImPossible: string | null
  idIntervention: number | null
  numero: number | null
}

/**
 * Model Couche
 * 
 */
export type Couche = {
  id: number
  taille: string | null
  couleur: string | null
  amiante: boolean | null
  materiaux: string | null
  HAP: string | null
  idPrelevement: number | null
  numero: number | null
  laboratoire: string | null
  bonCommandeLabo: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dossiers
 * const dossiers = await prisma.dossier.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dossiers
   * const dossiers = await prisma.dossier.findMany()
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.dossier`: Exposes CRUD operations for the **Dossier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dossiers
    * const dossiers = await prisma.dossier.findMany()
    * ```
    */
  get dossier(): Prisma.DossierDelegate<GlobalReject>;

  /**
   * `prisma.intervention`: Exposes CRUD operations for the **Intervention** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interventions
    * const interventions = await prisma.intervention.findMany()
    * ```
    */
  get intervention(): Prisma.InterventionDelegate<GlobalReject>;

  /**
   * `prisma.prelevement`: Exposes CRUD operations for the **Prelevement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prelevements
    * const prelevements = await prisma.prelevement.findMany()
    * ```
    */
  get prelevement(): Prisma.PrelevementDelegate<GlobalReject>;

  /**
   * `prisma.couche`: Exposes CRUD operations for the **Couche** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couches
    * const couches = await prisma.couche.findMany()
    * ```
    */
  get couche(): Prisma.CoucheDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.0.0
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Dossier: 'Dossier',
    Intervention: 'Intervention',
    Prelevement: 'Prelevement',
    Couche: 'Couche'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

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
     * Overwrites the datasource url from your prisma.schema file
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

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
   * These options are being passed in to the middleware as "params"
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

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DossierCountOutputType
   */


  export type DossierCountOutputType = {
    interventions: number
  }

  export type DossierCountOutputTypeSelect = {
    interventions?: boolean
  }

  export type DossierCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DossierCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DossierCountOutputType
    : S extends undefined
    ? never
    : S extends DossierCountOutputTypeArgs
    ?'include' extends U
    ? DossierCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DossierCountOutputType ? DossierCountOutputType[P] : never
  } 
    : DossierCountOutputType
  : DossierCountOutputType




  // Custom InputTypes

  /**
   * DossierCountOutputType without action
   */
  export type DossierCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DossierCountOutputType
     * 
    **/
    select?: DossierCountOutputTypeSelect | null
  }



  /**
   * Count Type InterventionCountOutputType
   */


  export type InterventionCountOutputType = {
    prelevements: number
  }

  export type InterventionCountOutputTypeSelect = {
    prelevements?: boolean
  }

  export type InterventionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | InterventionCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? InterventionCountOutputType
    : S extends undefined
    ? never
    : S extends InterventionCountOutputTypeArgs
    ?'include' extends U
    ? InterventionCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof InterventionCountOutputType ? InterventionCountOutputType[P] : never
  } 
    : InterventionCountOutputType
  : InterventionCountOutputType




  // Custom InputTypes

  /**
   * InterventionCountOutputType without action
   */
  export type InterventionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the InterventionCountOutputType
     * 
    **/
    select?: InterventionCountOutputTypeSelect | null
  }



  /**
   * Count Type PrelevementCountOutputType
   */


  export type PrelevementCountOutputType = {
    couches: number
  }

  export type PrelevementCountOutputTypeSelect = {
    couches?: boolean
  }

  export type PrelevementCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PrelevementCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PrelevementCountOutputType
    : S extends undefined
    ? never
    : S extends PrelevementCountOutputTypeArgs
    ?'include' extends U
    ? PrelevementCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PrelevementCountOutputType ? PrelevementCountOutputType[P] : never
  } 
    : PrelevementCountOutputType
  : PrelevementCountOutputType




  // Custom InputTypes

  /**
   * PrelevementCountOutputType without action
   */
  export type PrelevementCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PrelevementCountOutputType
     * 
    **/
    select?: PrelevementCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Dossier
   */


  export type AggregateDossier = {
    _count: DossierCountAggregateOutputType | null
    _avg: DossierAvgAggregateOutputType | null
    _sum: DossierSumAggregateOutputType | null
    _min: DossierMinAggregateOutputType | null
    _max: DossierMaxAggregateOutputType | null
  }

  export type DossierAvgAggregateOutputType = {
    id: number | null
  }

  export type DossierSumAggregateOutputType = {
    id: number | null
  }

  export type DossierMinAggregateOutputType = {
    id: number | null
    isParkMarker: boolean | null
    typologie: string | null
    docs: string | null
  }

  export type DossierMaxAggregateOutputType = {
    id: number | null
    isParkMarker: boolean | null
    typologie: string | null
    docs: string | null
  }

  export type DossierCountAggregateOutputType = {
    id: number
    isParkMarker: number
    typologie: number
    docs: number
    _all: number
  }


  export type DossierAvgAggregateInputType = {
    id?: true
  }

  export type DossierSumAggregateInputType = {
    id?: true
  }

  export type DossierMinAggregateInputType = {
    id?: true
    isParkMarker?: true
    typologie?: true
    docs?: true
  }

  export type DossierMaxAggregateInputType = {
    id?: true
    isParkMarker?: true
    typologie?: true
    docs?: true
  }

  export type DossierCountAggregateInputType = {
    id?: true
    isParkMarker?: true
    typologie?: true
    docs?: true
    _all?: true
  }

  export type DossierAggregateArgs = {
    /**
     * Filter which Dossier to aggregate.
     * 
    **/
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     * 
    **/
    orderBy?: Enumerable<DossierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dossiers
    **/
    _count?: true | DossierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DossierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DossierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DossierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DossierMaxAggregateInputType
  }

  export type GetDossierAggregateType<T extends DossierAggregateArgs> = {
        [P in keyof T & keyof AggregateDossier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDossier[P]>
      : GetScalarType<T[P], AggregateDossier[P]>
  }




  export type DossierGroupByArgs = {
    where?: DossierWhereInput
    orderBy?: Enumerable<DossierOrderByWithAggregationInput>
    by: Array<DossierScalarFieldEnum>
    having?: DossierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DossierCountAggregateInputType | true
    _avg?: DossierAvgAggregateInputType
    _sum?: DossierSumAggregateInputType
    _min?: DossierMinAggregateInputType
    _max?: DossierMaxAggregateInputType
  }


  export type DossierGroupByOutputType = {
    id: number
    isParkMarker: boolean | null
    typologie: string | null
    docs: string | null
    _count: DossierCountAggregateOutputType | null
    _avg: DossierAvgAggregateOutputType | null
    _sum: DossierSumAggregateOutputType | null
    _min: DossierMinAggregateOutputType | null
    _max: DossierMaxAggregateOutputType | null
  }

  type GetDossierGroupByPayload<T extends DossierGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DossierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DossierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DossierGroupByOutputType[P]>
            : GetScalarType<T[P], DossierGroupByOutputType[P]>
        }
      >
    >


  export type DossierSelect = {
    id?: boolean
    isParkMarker?: boolean
    typologie?: boolean
    docs?: boolean
    interventions?: boolean | InterventionFindManyArgs
    _count?: boolean | DossierCountOutputTypeArgs
  }

  export type DossierInclude = {
    interventions?: boolean | InterventionFindManyArgs
    _count?: boolean | DossierCountOutputTypeArgs
  }

  export type DossierGetPayload<
    S extends boolean | null | undefined | DossierArgs,
    U = keyof S
      > = S extends true
        ? Dossier
    : S extends undefined
    ? never
    : S extends DossierArgs | DossierFindManyArgs
    ?'include' extends U
    ? Dossier  & {
    [P in TrueKeys<S['include']>]:
        P extends 'interventions' ? Array < InterventionGetPayload<S['include'][P]>>  :
        P extends '_count' ? DossierCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'interventions' ? Array < InterventionGetPayload<S['select'][P]>>  :
        P extends '_count' ? DossierCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Dossier ? Dossier[P] : never
  } 
    : Dossier
  : Dossier


  type DossierCountArgs = Merge<
    Omit<DossierFindManyArgs, 'select' | 'include'> & {
      select?: DossierCountAggregateInputType | true
    }
  >

  export interface DossierDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dossier that matches the filter.
     * @param {DossierFindUniqueArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DossierFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DossierFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dossier'> extends True ? CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>> : CheckSelect<T, Prisma__DossierClient<Dossier | null >, Prisma__DossierClient<DossierGetPayload<T> | null >>

    /**
     * Find the first Dossier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindFirstArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DossierFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DossierFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dossier'> extends True ? CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>> : CheckSelect<T, Prisma__DossierClient<Dossier | null >, Prisma__DossierClient<DossierGetPayload<T> | null >>

    /**
     * Find zero or more Dossiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dossiers
     * const dossiers = await prisma.dossier.findMany()
     * 
     * // Get first 10 Dossiers
     * const dossiers = await prisma.dossier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dossierWithIdOnly = await prisma.dossier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DossierFindManyArgs>(
      args?: SelectSubset<T, DossierFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dossier>>, PrismaPromise<Array<DossierGetPayload<T>>>>

    /**
     * Create a Dossier.
     * @param {DossierCreateArgs} args - Arguments to create a Dossier.
     * @example
     * // Create one Dossier
     * const Dossier = await prisma.dossier.create({
     *   data: {
     *     // ... data to create a Dossier
     *   }
     * })
     * 
    **/
    create<T extends DossierCreateArgs>(
      args: SelectSubset<T, DossierCreateArgs>
    ): CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>>

    /**
     * Create many Dossiers.
     *     @param {DossierCreateManyArgs} args - Arguments to create many Dossiers.
     *     @example
     *     // Create many Dossiers
     *     const dossier = await prisma.dossier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DossierCreateManyArgs>(
      args?: SelectSubset<T, DossierCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dossier.
     * @param {DossierDeleteArgs} args - Arguments to delete one Dossier.
     * @example
     * // Delete one Dossier
     * const Dossier = await prisma.dossier.delete({
     *   where: {
     *     // ... filter to delete one Dossier
     *   }
     * })
     * 
    **/
    delete<T extends DossierDeleteArgs>(
      args: SelectSubset<T, DossierDeleteArgs>
    ): CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>>

    /**
     * Update one Dossier.
     * @param {DossierUpdateArgs} args - Arguments to update one Dossier.
     * @example
     * // Update one Dossier
     * const dossier = await prisma.dossier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DossierUpdateArgs>(
      args: SelectSubset<T, DossierUpdateArgs>
    ): CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>>

    /**
     * Delete zero or more Dossiers.
     * @param {DossierDeleteManyArgs} args - Arguments to filter Dossiers to delete.
     * @example
     * // Delete a few Dossiers
     * const { count } = await prisma.dossier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DossierDeleteManyArgs>(
      args?: SelectSubset<T, DossierDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dossiers
     * const dossier = await prisma.dossier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DossierUpdateManyArgs>(
      args: SelectSubset<T, DossierUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dossier.
     * @param {DossierUpsertArgs} args - Arguments to update or create a Dossier.
     * @example
     * // Update or create a Dossier
     * const dossier = await prisma.dossier.upsert({
     *   create: {
     *     // ... data to create a Dossier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dossier we want to update
     *   }
     * })
    **/
    upsert<T extends DossierUpsertArgs>(
      args: SelectSubset<T, DossierUpsertArgs>
    ): CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>>

    /**
     * Find one Dossier that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DossierFindUniqueOrThrowArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DossierFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DossierFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>>

    /**
     * Find the first Dossier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierFindFirstOrThrowArgs} args - Arguments to find a Dossier
     * @example
     * // Get one Dossier
     * const dossier = await prisma.dossier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DossierFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DossierFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DossierClient<Dossier>, Prisma__DossierClient<DossierGetPayload<T>>>

    /**
     * Count the number of Dossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierCountArgs} args - Arguments to filter Dossiers to count.
     * @example
     * // Count the number of Dossiers
     * const count = await prisma.dossier.count({
     *   where: {
     *     // ... the filter for the Dossiers we want to count
     *   }
     * })
    **/
    count<T extends DossierCountArgs>(
      args?: Subset<T, DossierCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DossierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DossierAggregateArgs>(args: Subset<T, DossierAggregateArgs>): PrismaPromise<GetDossierAggregateType<T>>

    /**
     * Group by Dossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DossierGroupByArgs} args - Group by arguments.
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
      T extends DossierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DossierGroupByArgs['orderBy'] }
        : { orderBy?: DossierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DossierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDossierGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dossier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DossierClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    interventions<T extends InterventionFindManyArgs = {}>(args?: Subset<T, InterventionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Intervention>>, PrismaPromise<Array<InterventionGetPayload<T>>>>;

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
   * Dossier base type for findUnique actions
   */
  export type DossierFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
    /**
     * Filter, which Dossier to fetch.
     * 
    **/
    where: DossierWhereUniqueInput
  }

  /**
   * Dossier: findUnique
   */
  export interface DossierFindUniqueArgs extends DossierFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dossier base type for findFirst actions
   */
  export type DossierFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
    /**
     * Filter, which Dossier to fetch.
     * 
    **/
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     * 
    **/
    orderBy?: Enumerable<DossierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dossiers.
     * 
    **/
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dossiers.
     * 
    **/
    distinct?: Enumerable<DossierScalarFieldEnum>
  }

  /**
   * Dossier: findFirst
   */
  export interface DossierFindFirstArgs extends DossierFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dossier findMany
   */
  export type DossierFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
    /**
     * Filter, which Dossiers to fetch.
     * 
    **/
    where?: DossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dossiers to fetch.
     * 
    **/
    orderBy?: Enumerable<DossierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dossiers.
     * 
    **/
    cursor?: DossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dossiers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dossiers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DossierScalarFieldEnum>
  }


  /**
   * Dossier create
   */
  export type DossierCreateArgs = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
    /**
     * The data needed to create a Dossier.
     * 
    **/
    data: XOR<DossierCreateInput, DossierUncheckedCreateInput>
  }


  /**
   * Dossier createMany
   */
  export type DossierCreateManyArgs = {
    /**
     * The data used to create many Dossiers.
     * 
    **/
    data: Enumerable<DossierCreateManyInput>
  }


  /**
   * Dossier update
   */
  export type DossierUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
    /**
     * The data needed to update a Dossier.
     * 
    **/
    data: XOR<DossierUpdateInput, DossierUncheckedUpdateInput>
    /**
     * Choose, which Dossier to update.
     * 
    **/
    where: DossierWhereUniqueInput
  }


  /**
   * Dossier updateMany
   */
  export type DossierUpdateManyArgs = {
    /**
     * The data used to update Dossiers.
     * 
    **/
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyInput>
    /**
     * Filter which Dossiers to update
     * 
    **/
    where?: DossierWhereInput
  }


  /**
   * Dossier upsert
   */
  export type DossierUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
    /**
     * The filter to search for the Dossier to update in case it exists.
     * 
    **/
    where: DossierWhereUniqueInput
    /**
     * In case the Dossier found by the `where` argument doesn't exist, create a new Dossier with this data.
     * 
    **/
    create: XOR<DossierCreateInput, DossierUncheckedCreateInput>
    /**
     * In case the Dossier was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DossierUpdateInput, DossierUncheckedUpdateInput>
  }


  /**
   * Dossier delete
   */
  export type DossierDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
    /**
     * Filter which Dossier to delete.
     * 
    **/
    where: DossierWhereUniqueInput
  }


  /**
   * Dossier deleteMany
   */
  export type DossierDeleteManyArgs = {
    /**
     * Filter which Dossiers to delete
     * 
    **/
    where?: DossierWhereInput
  }


  /**
   * Dossier: findUniqueOrThrow
   */
  export type DossierFindUniqueOrThrowArgs = DossierFindUniqueArgsBase
      

  /**
   * Dossier: findFirstOrThrow
   */
  export type DossierFindFirstOrThrowArgs = DossierFindFirstArgsBase
      

  /**
   * Dossier without action
   */
  export type DossierArgs = {
    /**
     * Select specific fields to fetch from the Dossier
     * 
    **/
    select?: DossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DossierInclude | null
  }



  /**
   * Model Intervention
   */


  export type AggregateIntervention = {
    _count: InterventionCountAggregateOutputType | null
    _avg: InterventionAvgAggregateOutputType | null
    _sum: InterventionSumAggregateOutputType | null
    _min: InterventionMinAggregateOutputType | null
    _max: InterventionMaxAggregateOutputType | null
  }

  export type InterventionAvgAggregateOutputType = {
    id: number | null
    idEmployeIntervention: number | null
    idDossier: number | null
  }

  export type InterventionSumAggregateOutputType = {
    id: number | null
    idEmployeIntervention: number | null
    idDossier: number | null
  }

  export type InterventionMinAggregateOutputType = {
    id: number | null
    dateDebutMission: Date | null
    dateFinMission: Date | null
    idEmployeIntervention: number | null
    zones: string | null
    isFirstIntervention: boolean | null
    idDossier: number | null
  }

  export type InterventionMaxAggregateOutputType = {
    id: number | null
    dateDebutMission: Date | null
    dateFinMission: Date | null
    idEmployeIntervention: number | null
    zones: string | null
    isFirstIntervention: boolean | null
    idDossier: number | null
  }

  export type InterventionCountAggregateOutputType = {
    id: number
    dateDebutMission: number
    dateFinMission: number
    idEmployeIntervention: number
    zones: number
    isFirstIntervention: number
    idDossier: number
    _all: number
  }


  export type InterventionAvgAggregateInputType = {
    id?: true
    idEmployeIntervention?: true
    idDossier?: true
  }

  export type InterventionSumAggregateInputType = {
    id?: true
    idEmployeIntervention?: true
    idDossier?: true
  }

  export type InterventionMinAggregateInputType = {
    id?: true
    dateDebutMission?: true
    dateFinMission?: true
    idEmployeIntervention?: true
    zones?: true
    isFirstIntervention?: true
    idDossier?: true
  }

  export type InterventionMaxAggregateInputType = {
    id?: true
    dateDebutMission?: true
    dateFinMission?: true
    idEmployeIntervention?: true
    zones?: true
    isFirstIntervention?: true
    idDossier?: true
  }

  export type InterventionCountAggregateInputType = {
    id?: true
    dateDebutMission?: true
    dateFinMission?: true
    idEmployeIntervention?: true
    zones?: true
    isFirstIntervention?: true
    idDossier?: true
    _all?: true
  }

  export type InterventionAggregateArgs = {
    /**
     * Filter which Intervention to aggregate.
     * 
    **/
    where?: InterventionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interventions to fetch.
     * 
    **/
    orderBy?: Enumerable<InterventionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InterventionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interventions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interventions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interventions
    **/
    _count?: true | InterventionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterventionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterventionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterventionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterventionMaxAggregateInputType
  }

  export type GetInterventionAggregateType<T extends InterventionAggregateArgs> = {
        [P in keyof T & keyof AggregateIntervention]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntervention[P]>
      : GetScalarType<T[P], AggregateIntervention[P]>
  }




  export type InterventionGroupByArgs = {
    where?: InterventionWhereInput
    orderBy?: Enumerable<InterventionOrderByWithAggregationInput>
    by: Array<InterventionScalarFieldEnum>
    having?: InterventionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterventionCountAggregateInputType | true
    _avg?: InterventionAvgAggregateInputType
    _sum?: InterventionSumAggregateInputType
    _min?: InterventionMinAggregateInputType
    _max?: InterventionMaxAggregateInputType
  }


  export type InterventionGroupByOutputType = {
    id: number
    dateDebutMission: Date | null
    dateFinMission: Date | null
    idEmployeIntervention: number | null
    zones: string | null
    isFirstIntervention: boolean | null
    idDossier: number
    _count: InterventionCountAggregateOutputType | null
    _avg: InterventionAvgAggregateOutputType | null
    _sum: InterventionSumAggregateOutputType | null
    _min: InterventionMinAggregateOutputType | null
    _max: InterventionMaxAggregateOutputType | null
  }

  type GetInterventionGroupByPayload<T extends InterventionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InterventionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterventionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterventionGroupByOutputType[P]>
            : GetScalarType<T[P], InterventionGroupByOutputType[P]>
        }
      >
    >


  export type InterventionSelect = {
    id?: boolean
    dateDebutMission?: boolean
    dateFinMission?: boolean
    idEmployeIntervention?: boolean
    zones?: boolean
    isFirstIntervention?: boolean
    idDossier?: boolean
    dossier?: boolean | DossierArgs
    prelevements?: boolean | PrelevementFindManyArgs
    _count?: boolean | InterventionCountOutputTypeArgs
  }

  export type InterventionInclude = {
    dossier?: boolean | DossierArgs
    prelevements?: boolean | PrelevementFindManyArgs
    _count?: boolean | InterventionCountOutputTypeArgs
  }

  export type InterventionGetPayload<
    S extends boolean | null | undefined | InterventionArgs,
    U = keyof S
      > = S extends true
        ? Intervention
    : S extends undefined
    ? never
    : S extends InterventionArgs | InterventionFindManyArgs
    ?'include' extends U
    ? Intervention  & {
    [P in TrueKeys<S['include']>]:
        P extends 'dossier' ? DossierGetPayload<S['include'][P]> :
        P extends 'prelevements' ? Array < PrelevementGetPayload<S['include'][P]>>  :
        P extends '_count' ? InterventionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'dossier' ? DossierGetPayload<S['select'][P]> :
        P extends 'prelevements' ? Array < PrelevementGetPayload<S['select'][P]>>  :
        P extends '_count' ? InterventionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Intervention ? Intervention[P] : never
  } 
    : Intervention
  : Intervention


  type InterventionCountArgs = Merge<
    Omit<InterventionFindManyArgs, 'select' | 'include'> & {
      select?: InterventionCountAggregateInputType | true
    }
  >

  export interface InterventionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Intervention that matches the filter.
     * @param {InterventionFindUniqueArgs} args - Arguments to find a Intervention
     * @example
     * // Get one Intervention
     * const intervention = await prisma.intervention.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InterventionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InterventionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Intervention'> extends True ? CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>> : CheckSelect<T, Prisma__InterventionClient<Intervention | null >, Prisma__InterventionClient<InterventionGetPayload<T> | null >>

    /**
     * Find the first Intervention that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionFindFirstArgs} args - Arguments to find a Intervention
     * @example
     * // Get one Intervention
     * const intervention = await prisma.intervention.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InterventionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InterventionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Intervention'> extends True ? CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>> : CheckSelect<T, Prisma__InterventionClient<Intervention | null >, Prisma__InterventionClient<InterventionGetPayload<T> | null >>

    /**
     * Find zero or more Interventions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interventions
     * const interventions = await prisma.intervention.findMany()
     * 
     * // Get first 10 Interventions
     * const interventions = await prisma.intervention.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interventionWithIdOnly = await prisma.intervention.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InterventionFindManyArgs>(
      args?: SelectSubset<T, InterventionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Intervention>>, PrismaPromise<Array<InterventionGetPayload<T>>>>

    /**
     * Create a Intervention.
     * @param {InterventionCreateArgs} args - Arguments to create a Intervention.
     * @example
     * // Create one Intervention
     * const Intervention = await prisma.intervention.create({
     *   data: {
     *     // ... data to create a Intervention
     *   }
     * })
     * 
    **/
    create<T extends InterventionCreateArgs>(
      args: SelectSubset<T, InterventionCreateArgs>
    ): CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>>

    /**
     * Create many Interventions.
     *     @param {InterventionCreateManyArgs} args - Arguments to create many Interventions.
     *     @example
     *     // Create many Interventions
     *     const intervention = await prisma.intervention.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InterventionCreateManyArgs>(
      args?: SelectSubset<T, InterventionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Intervention.
     * @param {InterventionDeleteArgs} args - Arguments to delete one Intervention.
     * @example
     * // Delete one Intervention
     * const Intervention = await prisma.intervention.delete({
     *   where: {
     *     // ... filter to delete one Intervention
     *   }
     * })
     * 
    **/
    delete<T extends InterventionDeleteArgs>(
      args: SelectSubset<T, InterventionDeleteArgs>
    ): CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>>

    /**
     * Update one Intervention.
     * @param {InterventionUpdateArgs} args - Arguments to update one Intervention.
     * @example
     * // Update one Intervention
     * const intervention = await prisma.intervention.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InterventionUpdateArgs>(
      args: SelectSubset<T, InterventionUpdateArgs>
    ): CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>>

    /**
     * Delete zero or more Interventions.
     * @param {InterventionDeleteManyArgs} args - Arguments to filter Interventions to delete.
     * @example
     * // Delete a few Interventions
     * const { count } = await prisma.intervention.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InterventionDeleteManyArgs>(
      args?: SelectSubset<T, InterventionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interventions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interventions
     * const intervention = await prisma.intervention.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InterventionUpdateManyArgs>(
      args: SelectSubset<T, InterventionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Intervention.
     * @param {InterventionUpsertArgs} args - Arguments to update or create a Intervention.
     * @example
     * // Update or create a Intervention
     * const intervention = await prisma.intervention.upsert({
     *   create: {
     *     // ... data to create a Intervention
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intervention we want to update
     *   }
     * })
    **/
    upsert<T extends InterventionUpsertArgs>(
      args: SelectSubset<T, InterventionUpsertArgs>
    ): CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>>

    /**
     * Find one Intervention that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {InterventionFindUniqueOrThrowArgs} args - Arguments to find a Intervention
     * @example
     * // Get one Intervention
     * const intervention = await prisma.intervention.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InterventionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, InterventionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>>

    /**
     * Find the first Intervention that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionFindFirstOrThrowArgs} args - Arguments to find a Intervention
     * @example
     * // Get one Intervention
     * const intervention = await prisma.intervention.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InterventionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InterventionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__InterventionClient<Intervention>, Prisma__InterventionClient<InterventionGetPayload<T>>>

    /**
     * Count the number of Interventions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionCountArgs} args - Arguments to filter Interventions to count.
     * @example
     * // Count the number of Interventions
     * const count = await prisma.intervention.count({
     *   where: {
     *     // ... the filter for the Interventions we want to count
     *   }
     * })
    **/
    count<T extends InterventionCountArgs>(
      args?: Subset<T, InterventionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterventionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intervention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterventionAggregateArgs>(args: Subset<T, InterventionAggregateArgs>): PrismaPromise<GetInterventionAggregateType<T>>

    /**
     * Group by Intervention.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionGroupByArgs} args - Group by arguments.
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
      T extends InterventionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterventionGroupByArgs['orderBy'] }
        : { orderBy?: InterventionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterventionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterventionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Intervention.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InterventionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    dossier<T extends DossierArgs = {}>(args?: Subset<T, DossierArgs>): CheckSelect<T, Prisma__DossierClient<Dossier | null >, Prisma__DossierClient<DossierGetPayload<T> | null >>;

    prelevements<T extends PrelevementFindManyArgs = {}>(args?: Subset<T, PrelevementFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Prelevement>>, PrismaPromise<Array<PrelevementGetPayload<T>>>>;

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
   * Intervention base type for findUnique actions
   */
  export type InterventionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
    /**
     * Filter, which Intervention to fetch.
     * 
    **/
    where: InterventionWhereUniqueInput
  }

  /**
   * Intervention: findUnique
   */
  export interface InterventionFindUniqueArgs extends InterventionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Intervention base type for findFirst actions
   */
  export type InterventionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
    /**
     * Filter, which Intervention to fetch.
     * 
    **/
    where?: InterventionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interventions to fetch.
     * 
    **/
    orderBy?: Enumerable<InterventionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interventions.
     * 
    **/
    cursor?: InterventionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interventions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interventions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interventions.
     * 
    **/
    distinct?: Enumerable<InterventionScalarFieldEnum>
  }

  /**
   * Intervention: findFirst
   */
  export interface InterventionFindFirstArgs extends InterventionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Intervention findMany
   */
  export type InterventionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
    /**
     * Filter, which Interventions to fetch.
     * 
    **/
    where?: InterventionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interventions to fetch.
     * 
    **/
    orderBy?: Enumerable<InterventionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interventions.
     * 
    **/
    cursor?: InterventionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interventions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interventions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InterventionScalarFieldEnum>
  }


  /**
   * Intervention create
   */
  export type InterventionCreateArgs = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
    /**
     * The data needed to create a Intervention.
     * 
    **/
    data: XOR<InterventionCreateInput, InterventionUncheckedCreateInput>
  }


  /**
   * Intervention createMany
   */
  export type InterventionCreateManyArgs = {
    /**
     * The data used to create many Interventions.
     * 
    **/
    data: Enumerable<InterventionCreateManyInput>
  }


  /**
   * Intervention update
   */
  export type InterventionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
    /**
     * The data needed to update a Intervention.
     * 
    **/
    data: XOR<InterventionUpdateInput, InterventionUncheckedUpdateInput>
    /**
     * Choose, which Intervention to update.
     * 
    **/
    where: InterventionWhereUniqueInput
  }


  /**
   * Intervention updateMany
   */
  export type InterventionUpdateManyArgs = {
    /**
     * The data used to update Interventions.
     * 
    **/
    data: XOR<InterventionUpdateManyMutationInput, InterventionUncheckedUpdateManyInput>
    /**
     * Filter which Interventions to update
     * 
    **/
    where?: InterventionWhereInput
  }


  /**
   * Intervention upsert
   */
  export type InterventionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
    /**
     * The filter to search for the Intervention to update in case it exists.
     * 
    **/
    where: InterventionWhereUniqueInput
    /**
     * In case the Intervention found by the `where` argument doesn't exist, create a new Intervention with this data.
     * 
    **/
    create: XOR<InterventionCreateInput, InterventionUncheckedCreateInput>
    /**
     * In case the Intervention was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InterventionUpdateInput, InterventionUncheckedUpdateInput>
  }


  /**
   * Intervention delete
   */
  export type InterventionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
    /**
     * Filter which Intervention to delete.
     * 
    **/
    where: InterventionWhereUniqueInput
  }


  /**
   * Intervention deleteMany
   */
  export type InterventionDeleteManyArgs = {
    /**
     * Filter which Interventions to delete
     * 
    **/
    where?: InterventionWhereInput
  }


  /**
   * Intervention: findUniqueOrThrow
   */
  export type InterventionFindUniqueOrThrowArgs = InterventionFindUniqueArgsBase
      

  /**
   * Intervention: findFirstOrThrow
   */
  export type InterventionFindFirstOrThrowArgs = InterventionFindFirstArgsBase
      

  /**
   * Intervention without action
   */
  export type InterventionArgs = {
    /**
     * Select specific fields to fetch from the Intervention
     * 
    **/
    select?: InterventionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InterventionInclude | null
  }



  /**
   * Model Prelevement
   */


  export type AggregatePrelevement = {
    _count: PrelevementCountAggregateOutputType | null
    _avg: PrelevementAvgAggregateOutputType | null
    _sum: PrelevementSumAggregateOutputType | null
    _min: PrelevementMinAggregateOutputType | null
    _max: PrelevementMaxAggregateOutputType | null
  }

  export type PrelevementAvgAggregateOutputType = {
    id: number | null
    taille: number | null
    idIntervention: number | null
    numero: number | null
  }

  export type PrelevementSumAggregateOutputType = {
    id: number | null
    taille: number | null
    idIntervention: number | null
    numero: number | null
  }

  export type PrelevementMinAggregateOutputType = {
    id: number | null
    date: Date | null
    emplacement: string | null
    latitude: string | null
    longitude: string | null
    altitude: string | null
    adresse: string | null
    materiaux: string | null
    taille: number | null
    couleur: string | null
    images: string | null
    laboratoire: string | null
    zone: string | null
    resultat: string | null
    PrelevementPossible: boolean | null
    choixPrelevementImPossible: string | null
    idIntervention: number | null
    numero: number | null
  }

  export type PrelevementMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    emplacement: string | null
    latitude: string | null
    longitude: string | null
    altitude: string | null
    adresse: string | null
    materiaux: string | null
    taille: number | null
    couleur: string | null
    images: string | null
    laboratoire: string | null
    zone: string | null
    resultat: string | null
    PrelevementPossible: boolean | null
    choixPrelevementImPossible: string | null
    idIntervention: number | null
    numero: number | null
  }

  export type PrelevementCountAggregateOutputType = {
    id: number
    date: number
    emplacement: number
    latitude: number
    longitude: number
    altitude: number
    adresse: number
    materiaux: number
    taille: number
    couleur: number
    images: number
    laboratoire: number
    zone: number
    resultat: number
    PrelevementPossible: number
    choixPrelevementImPossible: number
    idIntervention: number
    numero: number
    _all: number
  }


  export type PrelevementAvgAggregateInputType = {
    id?: true
    taille?: true
    idIntervention?: true
    numero?: true
  }

  export type PrelevementSumAggregateInputType = {
    id?: true
    taille?: true
    idIntervention?: true
    numero?: true
  }

  export type PrelevementMinAggregateInputType = {
    id?: true
    date?: true
    emplacement?: true
    latitude?: true
    longitude?: true
    altitude?: true
    adresse?: true
    materiaux?: true
    taille?: true
    couleur?: true
    images?: true
    laboratoire?: true
    zone?: true
    resultat?: true
    PrelevementPossible?: true
    choixPrelevementImPossible?: true
    idIntervention?: true
    numero?: true
  }

  export type PrelevementMaxAggregateInputType = {
    id?: true
    date?: true
    emplacement?: true
    latitude?: true
    longitude?: true
    altitude?: true
    adresse?: true
    materiaux?: true
    taille?: true
    couleur?: true
    images?: true
    laboratoire?: true
    zone?: true
    resultat?: true
    PrelevementPossible?: true
    choixPrelevementImPossible?: true
    idIntervention?: true
    numero?: true
  }

  export type PrelevementCountAggregateInputType = {
    id?: true
    date?: true
    emplacement?: true
    latitude?: true
    longitude?: true
    altitude?: true
    adresse?: true
    materiaux?: true
    taille?: true
    couleur?: true
    images?: true
    laboratoire?: true
    zone?: true
    resultat?: true
    PrelevementPossible?: true
    choixPrelevementImPossible?: true
    idIntervention?: true
    numero?: true
    _all?: true
  }

  export type PrelevementAggregateArgs = {
    /**
     * Filter which Prelevement to aggregate.
     * 
    **/
    where?: PrelevementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prelevements to fetch.
     * 
    **/
    orderBy?: Enumerable<PrelevementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PrelevementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prelevements from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prelevements.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prelevements
    **/
    _count?: true | PrelevementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrelevementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrelevementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrelevementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrelevementMaxAggregateInputType
  }

  export type GetPrelevementAggregateType<T extends PrelevementAggregateArgs> = {
        [P in keyof T & keyof AggregatePrelevement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrelevement[P]>
      : GetScalarType<T[P], AggregatePrelevement[P]>
  }




  export type PrelevementGroupByArgs = {
    where?: PrelevementWhereInput
    orderBy?: Enumerable<PrelevementOrderByWithAggregationInput>
    by: Array<PrelevementScalarFieldEnum>
    having?: PrelevementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrelevementCountAggregateInputType | true
    _avg?: PrelevementAvgAggregateInputType
    _sum?: PrelevementSumAggregateInputType
    _min?: PrelevementMinAggregateInputType
    _max?: PrelevementMaxAggregateInputType
  }


  export type PrelevementGroupByOutputType = {
    id: number
    date: Date | null
    emplacement: string | null
    latitude: string | null
    longitude: string | null
    altitude: string | null
    adresse: string | null
    materiaux: string | null
    taille: number | null
    couleur: string | null
    images: string | null
    laboratoire: string | null
    zone: string | null
    resultat: string | null
    PrelevementPossible: boolean | null
    choixPrelevementImPossible: string | null
    idIntervention: number | null
    numero: number | null
    _count: PrelevementCountAggregateOutputType | null
    _avg: PrelevementAvgAggregateOutputType | null
    _sum: PrelevementSumAggregateOutputType | null
    _min: PrelevementMinAggregateOutputType | null
    _max: PrelevementMaxAggregateOutputType | null
  }

  type GetPrelevementGroupByPayload<T extends PrelevementGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PrelevementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrelevementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrelevementGroupByOutputType[P]>
            : GetScalarType<T[P], PrelevementGroupByOutputType[P]>
        }
      >
    >


  export type PrelevementSelect = {
    id?: boolean
    date?: boolean
    emplacement?: boolean
    latitude?: boolean
    longitude?: boolean
    altitude?: boolean
    adresse?: boolean
    materiaux?: boolean
    taille?: boolean
    couleur?: boolean
    images?: boolean
    laboratoire?: boolean
    zone?: boolean
    resultat?: boolean
    PrelevementPossible?: boolean
    choixPrelevementImPossible?: boolean
    idIntervention?: boolean
    numero?: boolean
    Intervention?: boolean | InterventionArgs
    couches?: boolean | CoucheFindManyArgs
    _count?: boolean | PrelevementCountOutputTypeArgs
  }

  export type PrelevementInclude = {
    Intervention?: boolean | InterventionArgs
    couches?: boolean | CoucheFindManyArgs
    _count?: boolean | PrelevementCountOutputTypeArgs
  }

  export type PrelevementGetPayload<
    S extends boolean | null | undefined | PrelevementArgs,
    U = keyof S
      > = S extends true
        ? Prelevement
    : S extends undefined
    ? never
    : S extends PrelevementArgs | PrelevementFindManyArgs
    ?'include' extends U
    ? Prelevement  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Intervention' ? InterventionGetPayload<S['include'][P]> | null :
        P extends 'couches' ? Array < CoucheGetPayload<S['include'][P]>>  :
        P extends '_count' ? PrelevementCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Intervention' ? InterventionGetPayload<S['select'][P]> | null :
        P extends 'couches' ? Array < CoucheGetPayload<S['select'][P]>>  :
        P extends '_count' ? PrelevementCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Prelevement ? Prelevement[P] : never
  } 
    : Prelevement
  : Prelevement


  type PrelevementCountArgs = Merge<
    Omit<PrelevementFindManyArgs, 'select' | 'include'> & {
      select?: PrelevementCountAggregateInputType | true
    }
  >

  export interface PrelevementDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Prelevement that matches the filter.
     * @param {PrelevementFindUniqueArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrelevementFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PrelevementFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Prelevement'> extends True ? CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>> : CheckSelect<T, Prisma__PrelevementClient<Prelevement | null >, Prisma__PrelevementClient<PrelevementGetPayload<T> | null >>

    /**
     * Find the first Prelevement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementFindFirstArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrelevementFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PrelevementFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Prelevement'> extends True ? CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>> : CheckSelect<T, Prisma__PrelevementClient<Prelevement | null >, Prisma__PrelevementClient<PrelevementGetPayload<T> | null >>

    /**
     * Find zero or more Prelevements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prelevements
     * const prelevements = await prisma.prelevement.findMany()
     * 
     * // Get first 10 Prelevements
     * const prelevements = await prisma.prelevement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prelevementWithIdOnly = await prisma.prelevement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrelevementFindManyArgs>(
      args?: SelectSubset<T, PrelevementFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Prelevement>>, PrismaPromise<Array<PrelevementGetPayload<T>>>>

    /**
     * Create a Prelevement.
     * @param {PrelevementCreateArgs} args - Arguments to create a Prelevement.
     * @example
     * // Create one Prelevement
     * const Prelevement = await prisma.prelevement.create({
     *   data: {
     *     // ... data to create a Prelevement
     *   }
     * })
     * 
    **/
    create<T extends PrelevementCreateArgs>(
      args: SelectSubset<T, PrelevementCreateArgs>
    ): CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>>

    /**
     * Create many Prelevements.
     *     @param {PrelevementCreateManyArgs} args - Arguments to create many Prelevements.
     *     @example
     *     // Create many Prelevements
     *     const prelevement = await prisma.prelevement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrelevementCreateManyArgs>(
      args?: SelectSubset<T, PrelevementCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Prelevement.
     * @param {PrelevementDeleteArgs} args - Arguments to delete one Prelevement.
     * @example
     * // Delete one Prelevement
     * const Prelevement = await prisma.prelevement.delete({
     *   where: {
     *     // ... filter to delete one Prelevement
     *   }
     * })
     * 
    **/
    delete<T extends PrelevementDeleteArgs>(
      args: SelectSubset<T, PrelevementDeleteArgs>
    ): CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>>

    /**
     * Update one Prelevement.
     * @param {PrelevementUpdateArgs} args - Arguments to update one Prelevement.
     * @example
     * // Update one Prelevement
     * const prelevement = await prisma.prelevement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrelevementUpdateArgs>(
      args: SelectSubset<T, PrelevementUpdateArgs>
    ): CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>>

    /**
     * Delete zero or more Prelevements.
     * @param {PrelevementDeleteManyArgs} args - Arguments to filter Prelevements to delete.
     * @example
     * // Delete a few Prelevements
     * const { count } = await prisma.prelevement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrelevementDeleteManyArgs>(
      args?: SelectSubset<T, PrelevementDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prelevements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prelevements
     * const prelevement = await prisma.prelevement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrelevementUpdateManyArgs>(
      args: SelectSubset<T, PrelevementUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Prelevement.
     * @param {PrelevementUpsertArgs} args - Arguments to update or create a Prelevement.
     * @example
     * // Update or create a Prelevement
     * const prelevement = await prisma.prelevement.upsert({
     *   create: {
     *     // ... data to create a Prelevement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prelevement we want to update
     *   }
     * })
    **/
    upsert<T extends PrelevementUpsertArgs>(
      args: SelectSubset<T, PrelevementUpsertArgs>
    ): CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>>

    /**
     * Find one Prelevement that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PrelevementFindUniqueOrThrowArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrelevementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PrelevementFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>>

    /**
     * Find the first Prelevement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementFindFirstOrThrowArgs} args - Arguments to find a Prelevement
     * @example
     * // Get one Prelevement
     * const prelevement = await prisma.prelevement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrelevementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PrelevementFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PrelevementClient<Prelevement>, Prisma__PrelevementClient<PrelevementGetPayload<T>>>

    /**
     * Count the number of Prelevements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementCountArgs} args - Arguments to filter Prelevements to count.
     * @example
     * // Count the number of Prelevements
     * const count = await prisma.prelevement.count({
     *   where: {
     *     // ... the filter for the Prelevements we want to count
     *   }
     * })
    **/
    count<T extends PrelevementCountArgs>(
      args?: Subset<T, PrelevementCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrelevementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prelevement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrelevementAggregateArgs>(args: Subset<T, PrelevementAggregateArgs>): PrismaPromise<GetPrelevementAggregateType<T>>

    /**
     * Group by Prelevement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrelevementGroupByArgs} args - Group by arguments.
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
      T extends PrelevementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrelevementGroupByArgs['orderBy'] }
        : { orderBy?: PrelevementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrelevementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrelevementGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prelevement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PrelevementClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Intervention<T extends InterventionArgs = {}>(args?: Subset<T, InterventionArgs>): CheckSelect<T, Prisma__InterventionClient<Intervention | null >, Prisma__InterventionClient<InterventionGetPayload<T> | null >>;

    couches<T extends CoucheFindManyArgs = {}>(args?: Subset<T, CoucheFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Couche>>, PrismaPromise<Array<CoucheGetPayload<T>>>>;

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
   * Prelevement base type for findUnique actions
   */
  export type PrelevementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
    /**
     * Filter, which Prelevement to fetch.
     * 
    **/
    where: PrelevementWhereUniqueInput
  }

  /**
   * Prelevement: findUnique
   */
  export interface PrelevementFindUniqueArgs extends PrelevementFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prelevement base type for findFirst actions
   */
  export type PrelevementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
    /**
     * Filter, which Prelevement to fetch.
     * 
    **/
    where?: PrelevementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prelevements to fetch.
     * 
    **/
    orderBy?: Enumerable<PrelevementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prelevements.
     * 
    **/
    cursor?: PrelevementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prelevements from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prelevements.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prelevements.
     * 
    **/
    distinct?: Enumerable<PrelevementScalarFieldEnum>
  }

  /**
   * Prelevement: findFirst
   */
  export interface PrelevementFindFirstArgs extends PrelevementFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Prelevement findMany
   */
  export type PrelevementFindManyArgs = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
    /**
     * Filter, which Prelevements to fetch.
     * 
    **/
    where?: PrelevementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prelevements to fetch.
     * 
    **/
    orderBy?: Enumerable<PrelevementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prelevements.
     * 
    **/
    cursor?: PrelevementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prelevements from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prelevements.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PrelevementScalarFieldEnum>
  }


  /**
   * Prelevement create
   */
  export type PrelevementCreateArgs = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
    /**
     * The data needed to create a Prelevement.
     * 
    **/
    data: XOR<PrelevementCreateInput, PrelevementUncheckedCreateInput>
  }


  /**
   * Prelevement createMany
   */
  export type PrelevementCreateManyArgs = {
    /**
     * The data used to create many Prelevements.
     * 
    **/
    data: Enumerable<PrelevementCreateManyInput>
  }


  /**
   * Prelevement update
   */
  export type PrelevementUpdateArgs = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
    /**
     * The data needed to update a Prelevement.
     * 
    **/
    data: XOR<PrelevementUpdateInput, PrelevementUncheckedUpdateInput>
    /**
     * Choose, which Prelevement to update.
     * 
    **/
    where: PrelevementWhereUniqueInput
  }


  /**
   * Prelevement updateMany
   */
  export type PrelevementUpdateManyArgs = {
    /**
     * The data used to update Prelevements.
     * 
    **/
    data: XOR<PrelevementUpdateManyMutationInput, PrelevementUncheckedUpdateManyInput>
    /**
     * Filter which Prelevements to update
     * 
    **/
    where?: PrelevementWhereInput
  }


  /**
   * Prelevement upsert
   */
  export type PrelevementUpsertArgs = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
    /**
     * The filter to search for the Prelevement to update in case it exists.
     * 
    **/
    where: PrelevementWhereUniqueInput
    /**
     * In case the Prelevement found by the `where` argument doesn't exist, create a new Prelevement with this data.
     * 
    **/
    create: XOR<PrelevementCreateInput, PrelevementUncheckedCreateInput>
    /**
     * In case the Prelevement was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PrelevementUpdateInput, PrelevementUncheckedUpdateInput>
  }


  /**
   * Prelevement delete
   */
  export type PrelevementDeleteArgs = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
    /**
     * Filter which Prelevement to delete.
     * 
    **/
    where: PrelevementWhereUniqueInput
  }


  /**
   * Prelevement deleteMany
   */
  export type PrelevementDeleteManyArgs = {
    /**
     * Filter which Prelevements to delete
     * 
    **/
    where?: PrelevementWhereInput
  }


  /**
   * Prelevement: findUniqueOrThrow
   */
  export type PrelevementFindUniqueOrThrowArgs = PrelevementFindUniqueArgsBase
      

  /**
   * Prelevement: findFirstOrThrow
   */
  export type PrelevementFindFirstOrThrowArgs = PrelevementFindFirstArgsBase
      

  /**
   * Prelevement without action
   */
  export type PrelevementArgs = {
    /**
     * Select specific fields to fetch from the Prelevement
     * 
    **/
    select?: PrelevementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PrelevementInclude | null
  }



  /**
   * Model Couche
   */


  export type AggregateCouche = {
    _count: CoucheCountAggregateOutputType | null
    _avg: CoucheAvgAggregateOutputType | null
    _sum: CoucheSumAggregateOutputType | null
    _min: CoucheMinAggregateOutputType | null
    _max: CoucheMaxAggregateOutputType | null
  }

  export type CoucheAvgAggregateOutputType = {
    id: number | null
    idPrelevement: number | null
    numero: number | null
  }

  export type CoucheSumAggregateOutputType = {
    id: number | null
    idPrelevement: number | null
    numero: number | null
  }

  export type CoucheMinAggregateOutputType = {
    id: number | null
    taille: string | null
    couleur: string | null
    amiante: boolean | null
    materiaux: string | null
    HAP: string | null
    idPrelevement: number | null
    numero: number | null
    laboratoire: string | null
    bonCommandeLabo: string | null
  }

  export type CoucheMaxAggregateOutputType = {
    id: number | null
    taille: string | null
    couleur: string | null
    amiante: boolean | null
    materiaux: string | null
    HAP: string | null
    idPrelevement: number | null
    numero: number | null
    laboratoire: string | null
    bonCommandeLabo: string | null
  }

  export type CoucheCountAggregateOutputType = {
    id: number
    taille: number
    couleur: number
    amiante: number
    materiaux: number
    HAP: number
    idPrelevement: number
    numero: number
    laboratoire: number
    bonCommandeLabo: number
    _all: number
  }


  export type CoucheAvgAggregateInputType = {
    id?: true
    idPrelevement?: true
    numero?: true
  }

  export type CoucheSumAggregateInputType = {
    id?: true
    idPrelevement?: true
    numero?: true
  }

  export type CoucheMinAggregateInputType = {
    id?: true
    taille?: true
    couleur?: true
    amiante?: true
    materiaux?: true
    HAP?: true
    idPrelevement?: true
    numero?: true
    laboratoire?: true
    bonCommandeLabo?: true
  }

  export type CoucheMaxAggregateInputType = {
    id?: true
    taille?: true
    couleur?: true
    amiante?: true
    materiaux?: true
    HAP?: true
    idPrelevement?: true
    numero?: true
    laboratoire?: true
    bonCommandeLabo?: true
  }

  export type CoucheCountAggregateInputType = {
    id?: true
    taille?: true
    couleur?: true
    amiante?: true
    materiaux?: true
    HAP?: true
    idPrelevement?: true
    numero?: true
    laboratoire?: true
    bonCommandeLabo?: true
    _all?: true
  }

  export type CoucheAggregateArgs = {
    /**
     * Filter which Couche to aggregate.
     * 
    **/
    where?: CoucheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couches to fetch.
     * 
    **/
    orderBy?: Enumerable<CoucheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CoucheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couches
    **/
    _count?: true | CoucheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoucheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoucheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoucheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoucheMaxAggregateInputType
  }

  export type GetCoucheAggregateType<T extends CoucheAggregateArgs> = {
        [P in keyof T & keyof AggregateCouche]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouche[P]>
      : GetScalarType<T[P], AggregateCouche[P]>
  }




  export type CoucheGroupByArgs = {
    where?: CoucheWhereInput
    orderBy?: Enumerable<CoucheOrderByWithAggregationInput>
    by: Array<CoucheScalarFieldEnum>
    having?: CoucheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoucheCountAggregateInputType | true
    _avg?: CoucheAvgAggregateInputType
    _sum?: CoucheSumAggregateInputType
    _min?: CoucheMinAggregateInputType
    _max?: CoucheMaxAggregateInputType
  }


  export type CoucheGroupByOutputType = {
    id: number
    taille: string | null
    couleur: string | null
    amiante: boolean | null
    materiaux: string | null
    HAP: string | null
    idPrelevement: number | null
    numero: number | null
    laboratoire: string | null
    bonCommandeLabo: string | null
    _count: CoucheCountAggregateOutputType | null
    _avg: CoucheAvgAggregateOutputType | null
    _sum: CoucheSumAggregateOutputType | null
    _min: CoucheMinAggregateOutputType | null
    _max: CoucheMaxAggregateOutputType | null
  }

  type GetCoucheGroupByPayload<T extends CoucheGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CoucheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoucheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoucheGroupByOutputType[P]>
            : GetScalarType<T[P], CoucheGroupByOutputType[P]>
        }
      >
    >


  export type CoucheSelect = {
    id?: boolean
    taille?: boolean
    couleur?: boolean
    amiante?: boolean
    materiaux?: boolean
    HAP?: boolean
    idPrelevement?: boolean
    numero?: boolean
    laboratoire?: boolean
    bonCommandeLabo?: boolean
    Prelevement?: boolean | PrelevementArgs
  }

  export type CoucheInclude = {
    Prelevement?: boolean | PrelevementArgs
  }

  export type CoucheGetPayload<
    S extends boolean | null | undefined | CoucheArgs,
    U = keyof S
      > = S extends true
        ? Couche
    : S extends undefined
    ? never
    : S extends CoucheArgs | CoucheFindManyArgs
    ?'include' extends U
    ? Couche  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Prelevement' ? PrelevementGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Prelevement' ? PrelevementGetPayload<S['select'][P]> | null :  P extends keyof Couche ? Couche[P] : never
  } 
    : Couche
  : Couche


  type CoucheCountArgs = Merge<
    Omit<CoucheFindManyArgs, 'select' | 'include'> & {
      select?: CoucheCountAggregateInputType | true
    }
  >

  export interface CoucheDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Couche that matches the filter.
     * @param {CoucheFindUniqueArgs} args - Arguments to find a Couche
     * @example
     * // Get one Couche
     * const couche = await prisma.couche.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoucheFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CoucheFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Couche'> extends True ? CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>> : CheckSelect<T, Prisma__CoucheClient<Couche | null >, Prisma__CoucheClient<CoucheGetPayload<T> | null >>

    /**
     * Find the first Couche that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoucheFindFirstArgs} args - Arguments to find a Couche
     * @example
     * // Get one Couche
     * const couche = await prisma.couche.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoucheFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CoucheFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Couche'> extends True ? CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>> : CheckSelect<T, Prisma__CoucheClient<Couche | null >, Prisma__CoucheClient<CoucheGetPayload<T> | null >>

    /**
     * Find zero or more Couches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoucheFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couches
     * const couches = await prisma.couche.findMany()
     * 
     * // Get first 10 Couches
     * const couches = await prisma.couche.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coucheWithIdOnly = await prisma.couche.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoucheFindManyArgs>(
      args?: SelectSubset<T, CoucheFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Couche>>, PrismaPromise<Array<CoucheGetPayload<T>>>>

    /**
     * Create a Couche.
     * @param {CoucheCreateArgs} args - Arguments to create a Couche.
     * @example
     * // Create one Couche
     * const Couche = await prisma.couche.create({
     *   data: {
     *     // ... data to create a Couche
     *   }
     * })
     * 
    **/
    create<T extends CoucheCreateArgs>(
      args: SelectSubset<T, CoucheCreateArgs>
    ): CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>>

    /**
     * Create many Couches.
     *     @param {CoucheCreateManyArgs} args - Arguments to create many Couches.
     *     @example
     *     // Create many Couches
     *     const couche = await prisma.couche.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoucheCreateManyArgs>(
      args?: SelectSubset<T, CoucheCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Couche.
     * @param {CoucheDeleteArgs} args - Arguments to delete one Couche.
     * @example
     * // Delete one Couche
     * const Couche = await prisma.couche.delete({
     *   where: {
     *     // ... filter to delete one Couche
     *   }
     * })
     * 
    **/
    delete<T extends CoucheDeleteArgs>(
      args: SelectSubset<T, CoucheDeleteArgs>
    ): CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>>

    /**
     * Update one Couche.
     * @param {CoucheUpdateArgs} args - Arguments to update one Couche.
     * @example
     * // Update one Couche
     * const couche = await prisma.couche.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoucheUpdateArgs>(
      args: SelectSubset<T, CoucheUpdateArgs>
    ): CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>>

    /**
     * Delete zero or more Couches.
     * @param {CoucheDeleteManyArgs} args - Arguments to filter Couches to delete.
     * @example
     * // Delete a few Couches
     * const { count } = await prisma.couche.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoucheDeleteManyArgs>(
      args?: SelectSubset<T, CoucheDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoucheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couches
     * const couche = await prisma.couche.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoucheUpdateManyArgs>(
      args: SelectSubset<T, CoucheUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Couche.
     * @param {CoucheUpsertArgs} args - Arguments to update or create a Couche.
     * @example
     * // Update or create a Couche
     * const couche = await prisma.couche.upsert({
     *   create: {
     *     // ... data to create a Couche
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Couche we want to update
     *   }
     * })
    **/
    upsert<T extends CoucheUpsertArgs>(
      args: SelectSubset<T, CoucheUpsertArgs>
    ): CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>>

    /**
     * Find one Couche that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CoucheFindUniqueOrThrowArgs} args - Arguments to find a Couche
     * @example
     * // Get one Couche
     * const couche = await prisma.couche.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoucheFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CoucheFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>>

    /**
     * Find the first Couche that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoucheFindFirstOrThrowArgs} args - Arguments to find a Couche
     * @example
     * // Get one Couche
     * const couche = await prisma.couche.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoucheFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoucheFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CoucheClient<Couche>, Prisma__CoucheClient<CoucheGetPayload<T>>>

    /**
     * Count the number of Couches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoucheCountArgs} args - Arguments to filter Couches to count.
     * @example
     * // Count the number of Couches
     * const count = await prisma.couche.count({
     *   where: {
     *     // ... the filter for the Couches we want to count
     *   }
     * })
    **/
    count<T extends CoucheCountArgs>(
      args?: Subset<T, CoucheCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoucheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Couche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoucheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoucheAggregateArgs>(args: Subset<T, CoucheAggregateArgs>): PrismaPromise<GetCoucheAggregateType<T>>

    /**
     * Group by Couche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoucheGroupByArgs} args - Group by arguments.
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
      T extends CoucheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoucheGroupByArgs['orderBy'] }
        : { orderBy?: CoucheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoucheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoucheGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Couche.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CoucheClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Prelevement<T extends PrelevementArgs = {}>(args?: Subset<T, PrelevementArgs>): CheckSelect<T, Prisma__PrelevementClient<Prelevement | null >, Prisma__PrelevementClient<PrelevementGetPayload<T> | null >>;

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
   * Couche base type for findUnique actions
   */
  export type CoucheFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
    /**
     * Filter, which Couche to fetch.
     * 
    **/
    where: CoucheWhereUniqueInput
  }

  /**
   * Couche: findUnique
   */
  export interface CoucheFindUniqueArgs extends CoucheFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Couche base type for findFirst actions
   */
  export type CoucheFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
    /**
     * Filter, which Couche to fetch.
     * 
    **/
    where?: CoucheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couches to fetch.
     * 
    **/
    orderBy?: Enumerable<CoucheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couches.
     * 
    **/
    cursor?: CoucheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couches.
     * 
    **/
    distinct?: Enumerable<CoucheScalarFieldEnum>
  }

  /**
   * Couche: findFirst
   */
  export interface CoucheFindFirstArgs extends CoucheFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Couche findMany
   */
  export type CoucheFindManyArgs = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
    /**
     * Filter, which Couches to fetch.
     * 
    **/
    where?: CoucheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couches to fetch.
     * 
    **/
    orderBy?: Enumerable<CoucheOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couches.
     * 
    **/
    cursor?: CoucheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couches.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CoucheScalarFieldEnum>
  }


  /**
   * Couche create
   */
  export type CoucheCreateArgs = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
    /**
     * The data needed to create a Couche.
     * 
    **/
    data: XOR<CoucheCreateInput, CoucheUncheckedCreateInput>
  }


  /**
   * Couche createMany
   */
  export type CoucheCreateManyArgs = {
    /**
     * The data used to create many Couches.
     * 
    **/
    data: Enumerable<CoucheCreateManyInput>
  }


  /**
   * Couche update
   */
  export type CoucheUpdateArgs = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
    /**
     * The data needed to update a Couche.
     * 
    **/
    data: XOR<CoucheUpdateInput, CoucheUncheckedUpdateInput>
    /**
     * Choose, which Couche to update.
     * 
    **/
    where: CoucheWhereUniqueInput
  }


  /**
   * Couche updateMany
   */
  export type CoucheUpdateManyArgs = {
    /**
     * The data used to update Couches.
     * 
    **/
    data: XOR<CoucheUpdateManyMutationInput, CoucheUncheckedUpdateManyInput>
    /**
     * Filter which Couches to update
     * 
    **/
    where?: CoucheWhereInput
  }


  /**
   * Couche upsert
   */
  export type CoucheUpsertArgs = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
    /**
     * The filter to search for the Couche to update in case it exists.
     * 
    **/
    where: CoucheWhereUniqueInput
    /**
     * In case the Couche found by the `where` argument doesn't exist, create a new Couche with this data.
     * 
    **/
    create: XOR<CoucheCreateInput, CoucheUncheckedCreateInput>
    /**
     * In case the Couche was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CoucheUpdateInput, CoucheUncheckedUpdateInput>
  }


  /**
   * Couche delete
   */
  export type CoucheDeleteArgs = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
    /**
     * Filter which Couche to delete.
     * 
    **/
    where: CoucheWhereUniqueInput
  }


  /**
   * Couche deleteMany
   */
  export type CoucheDeleteManyArgs = {
    /**
     * Filter which Couches to delete
     * 
    **/
    where?: CoucheWhereInput
  }


  /**
   * Couche: findUniqueOrThrow
   */
  export type CoucheFindUniqueOrThrowArgs = CoucheFindUniqueArgsBase
      

  /**
   * Couche: findFirstOrThrow
   */
  export type CoucheFindFirstOrThrowArgs = CoucheFindFirstArgsBase
      

  /**
   * Couche without action
   */
  export type CoucheArgs = {
    /**
     * Select specific fields to fetch from the Couche
     * 
    **/
    select?: CoucheSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoucheInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DossierScalarFieldEnum: {
    id: 'id',
    isParkMarker: 'isParkMarker',
    typologie: 'typologie',
    docs: 'docs'
  };

  export type DossierScalarFieldEnum = (typeof DossierScalarFieldEnum)[keyof typeof DossierScalarFieldEnum]


  export const InterventionScalarFieldEnum: {
    id: 'id',
    dateDebutMission: 'dateDebutMission',
    dateFinMission: 'dateFinMission',
    idEmployeIntervention: 'idEmployeIntervention',
    zones: 'zones',
    isFirstIntervention: 'isFirstIntervention',
    idDossier: 'idDossier'
  };

  export type InterventionScalarFieldEnum = (typeof InterventionScalarFieldEnum)[keyof typeof InterventionScalarFieldEnum]


  export const PrelevementScalarFieldEnum: {
    id: 'id',
    date: 'date',
    emplacement: 'emplacement',
    latitude: 'latitude',
    longitude: 'longitude',
    altitude: 'altitude',
    adresse: 'adresse',
    materiaux: 'materiaux',
    taille: 'taille',
    couleur: 'couleur',
    images: 'images',
    laboratoire: 'laboratoire',
    zone: 'zone',
    resultat: 'resultat',
    PrelevementPossible: 'PrelevementPossible',
    choixPrelevementImPossible: 'choixPrelevementImPossible',
    idIntervention: 'idIntervention',
    numero: 'numero'
  };

  export type PrelevementScalarFieldEnum = (typeof PrelevementScalarFieldEnum)[keyof typeof PrelevementScalarFieldEnum]


  export const CoucheScalarFieldEnum: {
    id: 'id',
    taille: 'taille',
    couleur: 'couleur',
    amiante: 'amiante',
    materiaux: 'materiaux',
    HAP: 'HAP',
    idPrelevement: 'idPrelevement',
    numero: 'numero',
    laboratoire: 'laboratoire',
    bonCommandeLabo: 'bonCommandeLabo'
  };

  export type CoucheScalarFieldEnum = (typeof CoucheScalarFieldEnum)[keyof typeof CoucheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type DossierWhereInput = {
    AND?: Enumerable<DossierWhereInput>
    OR?: Enumerable<DossierWhereInput>
    NOT?: Enumerable<DossierWhereInput>
    id?: IntFilter | number
    isParkMarker?: BoolNullableFilter | boolean | null
    typologie?: StringNullableFilter | string | null
    docs?: StringNullableFilter | string | null
    interventions?: InterventionListRelationFilter
  }

  export type DossierOrderByWithRelationInput = {
    id?: SortOrder
    isParkMarker?: SortOrder
    typologie?: SortOrder
    docs?: SortOrder
    interventions?: InterventionOrderByRelationAggregateInput
  }

  export type DossierWhereUniqueInput = {
    id?: number
  }

  export type DossierOrderByWithAggregationInput = {
    id?: SortOrder
    isParkMarker?: SortOrder
    typologie?: SortOrder
    docs?: SortOrder
    _count?: DossierCountOrderByAggregateInput
    _avg?: DossierAvgOrderByAggregateInput
    _max?: DossierMaxOrderByAggregateInput
    _min?: DossierMinOrderByAggregateInput
    _sum?: DossierSumOrderByAggregateInput
  }

  export type DossierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DossierScalarWhereWithAggregatesInput>
    OR?: Enumerable<DossierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DossierScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    isParkMarker?: BoolNullableWithAggregatesFilter | boolean | null
    typologie?: StringNullableWithAggregatesFilter | string | null
    docs?: StringNullableWithAggregatesFilter | string | null
  }

  export type InterventionWhereInput = {
    AND?: Enumerable<InterventionWhereInput>
    OR?: Enumerable<InterventionWhereInput>
    NOT?: Enumerable<InterventionWhereInput>
    id?: IntFilter | number
    dateDebutMission?: DateTimeNullableFilter | Date | string | null
    dateFinMission?: DateTimeNullableFilter | Date | string | null
    idEmployeIntervention?: IntNullableFilter | number | null
    zones?: StringNullableFilter | string | null
    isFirstIntervention?: BoolNullableFilter | boolean | null
    idDossier?: IntFilter | number
    dossier?: XOR<DossierRelationFilter, DossierWhereInput>
    prelevements?: PrelevementListRelationFilter
  }

  export type InterventionOrderByWithRelationInput = {
    id?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    idEmployeIntervention?: SortOrder
    zones?: SortOrder
    isFirstIntervention?: SortOrder
    idDossier?: SortOrder
    dossier?: DossierOrderByWithRelationInput
    prelevements?: PrelevementOrderByRelationAggregateInput
  }

  export type InterventionWhereUniqueInput = {
    id?: number
  }

  export type InterventionOrderByWithAggregationInput = {
    id?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    idEmployeIntervention?: SortOrder
    zones?: SortOrder
    isFirstIntervention?: SortOrder
    idDossier?: SortOrder
    _count?: InterventionCountOrderByAggregateInput
    _avg?: InterventionAvgOrderByAggregateInput
    _max?: InterventionMaxOrderByAggregateInput
    _min?: InterventionMinOrderByAggregateInput
    _sum?: InterventionSumOrderByAggregateInput
  }

  export type InterventionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InterventionScalarWhereWithAggregatesInput>
    OR?: Enumerable<InterventionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InterventionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateDebutMission?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateFinMission?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idEmployeIntervention?: IntNullableWithAggregatesFilter | number | null
    zones?: StringNullableWithAggregatesFilter | string | null
    isFirstIntervention?: BoolNullableWithAggregatesFilter | boolean | null
    idDossier?: IntWithAggregatesFilter | number
  }

  export type PrelevementWhereInput = {
    AND?: Enumerable<PrelevementWhereInput>
    OR?: Enumerable<PrelevementWhereInput>
    NOT?: Enumerable<PrelevementWhereInput>
    id?: IntFilter | number
    date?: DateTimeNullableFilter | Date | string | null
    emplacement?: StringNullableFilter | string | null
    latitude?: StringNullableFilter | string | null
    longitude?: StringNullableFilter | string | null
    altitude?: StringNullableFilter | string | null
    adresse?: StringNullableFilter | string | null
    materiaux?: StringNullableFilter | string | null
    taille?: IntNullableFilter | number | null
    couleur?: StringNullableFilter | string | null
    images?: StringNullableFilter | string | null
    laboratoire?: StringNullableFilter | string | null
    zone?: StringNullableFilter | string | null
    resultat?: StringNullableFilter | string | null
    PrelevementPossible?: BoolNullableFilter | boolean | null
    choixPrelevementImPossible?: StringNullableFilter | string | null
    idIntervention?: IntNullableFilter | number | null
    numero?: IntNullableFilter | number | null
    Intervention?: XOR<InterventionRelationFilter, InterventionWhereInput> | null
    couches?: CoucheListRelationFilter
  }

  export type PrelevementOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    emplacement?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    adresse?: SortOrder
    materiaux?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    images?: SortOrder
    laboratoire?: SortOrder
    zone?: SortOrder
    resultat?: SortOrder
    PrelevementPossible?: SortOrder
    choixPrelevementImPossible?: SortOrder
    idIntervention?: SortOrder
    numero?: SortOrder
    Intervention?: InterventionOrderByWithRelationInput
    couches?: CoucheOrderByRelationAggregateInput
  }

  export type PrelevementWhereUniqueInput = {
    id?: number
  }

  export type PrelevementOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    emplacement?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    adresse?: SortOrder
    materiaux?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    images?: SortOrder
    laboratoire?: SortOrder
    zone?: SortOrder
    resultat?: SortOrder
    PrelevementPossible?: SortOrder
    choixPrelevementImPossible?: SortOrder
    idIntervention?: SortOrder
    numero?: SortOrder
    _count?: PrelevementCountOrderByAggregateInput
    _avg?: PrelevementAvgOrderByAggregateInput
    _max?: PrelevementMaxOrderByAggregateInput
    _min?: PrelevementMinOrderByAggregateInput
    _sum?: PrelevementSumOrderByAggregateInput
  }

  export type PrelevementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PrelevementScalarWhereWithAggregatesInput>
    OR?: Enumerable<PrelevementScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PrelevementScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    emplacement?: StringNullableWithAggregatesFilter | string | null
    latitude?: StringNullableWithAggregatesFilter | string | null
    longitude?: StringNullableWithAggregatesFilter | string | null
    altitude?: StringNullableWithAggregatesFilter | string | null
    adresse?: StringNullableWithAggregatesFilter | string | null
    materiaux?: StringNullableWithAggregatesFilter | string | null
    taille?: IntNullableWithAggregatesFilter | number | null
    couleur?: StringNullableWithAggregatesFilter | string | null
    images?: StringNullableWithAggregatesFilter | string | null
    laboratoire?: StringNullableWithAggregatesFilter | string | null
    zone?: StringNullableWithAggregatesFilter | string | null
    resultat?: StringNullableWithAggregatesFilter | string | null
    PrelevementPossible?: BoolNullableWithAggregatesFilter | boolean | null
    choixPrelevementImPossible?: StringNullableWithAggregatesFilter | string | null
    idIntervention?: IntNullableWithAggregatesFilter | number | null
    numero?: IntNullableWithAggregatesFilter | number | null
  }

  export type CoucheWhereInput = {
    AND?: Enumerable<CoucheWhereInput>
    OR?: Enumerable<CoucheWhereInput>
    NOT?: Enumerable<CoucheWhereInput>
    id?: IntFilter | number
    taille?: StringNullableFilter | string | null
    couleur?: StringNullableFilter | string | null
    amiante?: BoolNullableFilter | boolean | null
    materiaux?: StringNullableFilter | string | null
    HAP?: StringNullableFilter | string | null
    idPrelevement?: IntNullableFilter | number | null
    numero?: IntNullableFilter | number | null
    laboratoire?: StringNullableFilter | string | null
    bonCommandeLabo?: StringNullableFilter | string | null
    Prelevement?: XOR<PrelevementRelationFilter, PrelevementWhereInput> | null
  }

  export type CoucheOrderByWithRelationInput = {
    id?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    amiante?: SortOrder
    materiaux?: SortOrder
    HAP?: SortOrder
    idPrelevement?: SortOrder
    numero?: SortOrder
    laboratoire?: SortOrder
    bonCommandeLabo?: SortOrder
    Prelevement?: PrelevementOrderByWithRelationInput
  }

  export type CoucheWhereUniqueInput = {
    id?: number
  }

  export type CoucheOrderByWithAggregationInput = {
    id?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    amiante?: SortOrder
    materiaux?: SortOrder
    HAP?: SortOrder
    idPrelevement?: SortOrder
    numero?: SortOrder
    laboratoire?: SortOrder
    bonCommandeLabo?: SortOrder
    _count?: CoucheCountOrderByAggregateInput
    _avg?: CoucheAvgOrderByAggregateInput
    _max?: CoucheMaxOrderByAggregateInput
    _min?: CoucheMinOrderByAggregateInput
    _sum?: CoucheSumOrderByAggregateInput
  }

  export type CoucheScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CoucheScalarWhereWithAggregatesInput>
    OR?: Enumerable<CoucheScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CoucheScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    taille?: StringNullableWithAggregatesFilter | string | null
    couleur?: StringNullableWithAggregatesFilter | string | null
    amiante?: BoolNullableWithAggregatesFilter | boolean | null
    materiaux?: StringNullableWithAggregatesFilter | string | null
    HAP?: StringNullableWithAggregatesFilter | string | null
    idPrelevement?: IntNullableWithAggregatesFilter | number | null
    numero?: IntNullableWithAggregatesFilter | number | null
    laboratoire?: StringNullableWithAggregatesFilter | string | null
    bonCommandeLabo?: StringNullableWithAggregatesFilter | string | null
  }

  export type DossierCreateInput = {
    id: number
    isParkMarker?: boolean | null
    typologie?: string | null
    docs?: string | null
    interventions?: InterventionCreateNestedManyWithoutDossierInput
  }

  export type DossierUncheckedCreateInput = {
    id: number
    isParkMarker?: boolean | null
    typologie?: string | null
    docs?: string | null
    interventions?: InterventionUncheckedCreateNestedManyWithoutDossierInput
  }

  export type DossierUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isParkMarker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typologie?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: InterventionUpdateManyWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isParkMarker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typologie?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    interventions?: InterventionUncheckedUpdateManyWithoutDossierNestedInput
  }

  export type DossierCreateManyInput = {
    id: number
    isParkMarker?: boolean | null
    typologie?: string | null
    docs?: string | null
  }

  export type DossierUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    isParkMarker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typologie?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DossierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isParkMarker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typologie?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterventionCreateInput = {
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
    dossier: DossierCreateNestedOneWithoutInterventionsInput
    prelevements?: PrelevementCreateNestedManyWithoutInterventionInput
  }

  export type InterventionUncheckedCreateInput = {
    id?: number
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
    idDossier: number
    prelevements?: PrelevementUncheckedCreateNestedManyWithoutInterventionInput
  }

  export type InterventionUpdateInput = {
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dossier?: DossierUpdateOneRequiredWithoutInterventionsNestedInput
    prelevements?: PrelevementUpdateManyWithoutInterventionNestedInput
  }

  export type InterventionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idDossier?: IntFieldUpdateOperationsInput | number
    prelevements?: PrelevementUncheckedUpdateManyWithoutInterventionNestedInput
  }

  export type InterventionCreateManyInput = {
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
    idDossier: number
  }

  export type InterventionUpdateManyMutationInput = {
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type InterventionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idDossier?: IntFieldUpdateOperationsInput | number
  }

  export type PrelevementCreateInput = {
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    numero?: number | null
    Intervention?: InterventionCreateNestedOneWithoutPrelevementsInput
    couches?: CoucheCreateNestedManyWithoutPrelevementInput
  }

  export type PrelevementUncheckedCreateInput = {
    id?: number
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    idIntervention?: number | null
    numero?: number | null
    couches?: CoucheUncheckedCreateNestedManyWithoutPrelevementInput
  }

  export type PrelevementUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    Intervention?: InterventionUpdateOneWithoutPrelevementsNestedInput
    couches?: CoucheUpdateManyWithoutPrelevementNestedInput
  }

  export type PrelevementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    idIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    couches?: CoucheUncheckedUpdateManyWithoutPrelevementNestedInput
  }

  export type PrelevementCreateManyInput = {
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    idIntervention?: number | null
    numero?: number | null
  }

  export type PrelevementUpdateManyMutationInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PrelevementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    idIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoucheCreateInput = {
    taille?: string | null
    couleur?: string | null
    amiante?: boolean | null
    materiaux?: string | null
    HAP?: string | null
    numero?: number | null
    laboratoire?: string | null
    bonCommandeLabo?: string | null
    Prelevement?: PrelevementCreateNestedOneWithoutCouchesInput
  }

  export type CoucheUncheckedCreateInput = {
    id?: number
    taille?: string | null
    couleur?: string | null
    amiante?: boolean | null
    materiaux?: string | null
    HAP?: string | null
    idPrelevement?: number | null
    numero?: number | null
    laboratoire?: string | null
    bonCommandeLabo?: string | null
  }

  export type CoucheUpdateInput = {
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    amiante?: NullableBoolFieldUpdateOperationsInput | boolean | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    HAP?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    bonCommandeLabo?: NullableStringFieldUpdateOperationsInput | string | null
    Prelevement?: PrelevementUpdateOneWithoutCouchesNestedInput
  }

  export type CoucheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    amiante?: NullableBoolFieldUpdateOperationsInput | boolean | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    HAP?: NullableStringFieldUpdateOperationsInput | string | null
    idPrelevement?: NullableIntFieldUpdateOperationsInput | number | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    bonCommandeLabo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoucheCreateManyInput = {
    taille?: string | null
    couleur?: string | null
    amiante?: boolean | null
    materiaux?: string | null
    HAP?: string | null
    idPrelevement?: number | null
    numero?: number | null
    laboratoire?: string | null
    bonCommandeLabo?: string | null
  }

  export type CoucheUpdateManyMutationInput = {
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    amiante?: NullableBoolFieldUpdateOperationsInput | boolean | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    HAP?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    bonCommandeLabo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoucheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    amiante?: NullableBoolFieldUpdateOperationsInput | boolean | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    HAP?: NullableStringFieldUpdateOperationsInput | string | null
    idPrelevement?: NullableIntFieldUpdateOperationsInput | number | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    bonCommandeLabo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type InterventionListRelationFilter = {
    every?: InterventionWhereInput
    some?: InterventionWhereInput
    none?: InterventionWhereInput
  }

  export type InterventionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DossierCountOrderByAggregateInput = {
    id?: SortOrder
    isParkMarker?: SortOrder
    typologie?: SortOrder
    docs?: SortOrder
  }

  export type DossierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DossierMaxOrderByAggregateInput = {
    id?: SortOrder
    isParkMarker?: SortOrder
    typologie?: SortOrder
    docs?: SortOrder
  }

  export type DossierMinOrderByAggregateInput = {
    id?: SortOrder
    isParkMarker?: SortOrder
    typologie?: SortOrder
    docs?: SortOrder
  }

  export type DossierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DossierRelationFilter = {
    is?: DossierWhereInput
    isNot?: DossierWhereInput
  }

  export type PrelevementListRelationFilter = {
    every?: PrelevementWhereInput
    some?: PrelevementWhereInput
    none?: PrelevementWhereInput
  }

  export type PrelevementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterventionCountOrderByAggregateInput = {
    id?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    idEmployeIntervention?: SortOrder
    zones?: SortOrder
    isFirstIntervention?: SortOrder
    idDossier?: SortOrder
  }

  export type InterventionAvgOrderByAggregateInput = {
    id?: SortOrder
    idEmployeIntervention?: SortOrder
    idDossier?: SortOrder
  }

  export type InterventionMaxOrderByAggregateInput = {
    id?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    idEmployeIntervention?: SortOrder
    zones?: SortOrder
    isFirstIntervention?: SortOrder
    idDossier?: SortOrder
  }

  export type InterventionMinOrderByAggregateInput = {
    id?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    idEmployeIntervention?: SortOrder
    zones?: SortOrder
    isFirstIntervention?: SortOrder
    idDossier?: SortOrder
  }

  export type InterventionSumOrderByAggregateInput = {
    id?: SortOrder
    idEmployeIntervention?: SortOrder
    idDossier?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type InterventionRelationFilter = {
    is?: InterventionWhereInput | null
    isNot?: InterventionWhereInput | null
  }

  export type CoucheListRelationFilter = {
    every?: CoucheWhereInput
    some?: CoucheWhereInput
    none?: CoucheWhereInput
  }

  export type CoucheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrelevementCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    emplacement?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    adresse?: SortOrder
    materiaux?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    images?: SortOrder
    laboratoire?: SortOrder
    zone?: SortOrder
    resultat?: SortOrder
    PrelevementPossible?: SortOrder
    choixPrelevementImPossible?: SortOrder
    idIntervention?: SortOrder
    numero?: SortOrder
  }

  export type PrelevementAvgOrderByAggregateInput = {
    id?: SortOrder
    taille?: SortOrder
    idIntervention?: SortOrder
    numero?: SortOrder
  }

  export type PrelevementMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    emplacement?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    adresse?: SortOrder
    materiaux?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    images?: SortOrder
    laboratoire?: SortOrder
    zone?: SortOrder
    resultat?: SortOrder
    PrelevementPossible?: SortOrder
    choixPrelevementImPossible?: SortOrder
    idIntervention?: SortOrder
    numero?: SortOrder
  }

  export type PrelevementMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    emplacement?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    altitude?: SortOrder
    adresse?: SortOrder
    materiaux?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    images?: SortOrder
    laboratoire?: SortOrder
    zone?: SortOrder
    resultat?: SortOrder
    PrelevementPossible?: SortOrder
    choixPrelevementImPossible?: SortOrder
    idIntervention?: SortOrder
    numero?: SortOrder
  }

  export type PrelevementSumOrderByAggregateInput = {
    id?: SortOrder
    taille?: SortOrder
    idIntervention?: SortOrder
    numero?: SortOrder
  }

  export type PrelevementRelationFilter = {
    is?: PrelevementWhereInput | null
    isNot?: PrelevementWhereInput | null
  }

  export type CoucheCountOrderByAggregateInput = {
    id?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    amiante?: SortOrder
    materiaux?: SortOrder
    HAP?: SortOrder
    idPrelevement?: SortOrder
    numero?: SortOrder
    laboratoire?: SortOrder
    bonCommandeLabo?: SortOrder
  }

  export type CoucheAvgOrderByAggregateInput = {
    id?: SortOrder
    idPrelevement?: SortOrder
    numero?: SortOrder
  }

  export type CoucheMaxOrderByAggregateInput = {
    id?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    amiante?: SortOrder
    materiaux?: SortOrder
    HAP?: SortOrder
    idPrelevement?: SortOrder
    numero?: SortOrder
    laboratoire?: SortOrder
    bonCommandeLabo?: SortOrder
  }

  export type CoucheMinOrderByAggregateInput = {
    id?: SortOrder
    taille?: SortOrder
    couleur?: SortOrder
    amiante?: SortOrder
    materiaux?: SortOrder
    HAP?: SortOrder
    idPrelevement?: SortOrder
    numero?: SortOrder
    laboratoire?: SortOrder
    bonCommandeLabo?: SortOrder
  }

  export type CoucheSumOrderByAggregateInput = {
    id?: SortOrder
    idPrelevement?: SortOrder
    numero?: SortOrder
  }

  export type InterventionCreateNestedManyWithoutDossierInput = {
    create?: XOR<Enumerable<InterventionCreateWithoutDossierInput>, Enumerable<InterventionUncheckedCreateWithoutDossierInput>>
    connectOrCreate?: Enumerable<InterventionCreateOrConnectWithoutDossierInput>
    createMany?: InterventionCreateManyDossierInputEnvelope
    connect?: Enumerable<InterventionWhereUniqueInput>
  }

  export type InterventionUncheckedCreateNestedManyWithoutDossierInput = {
    create?: XOR<Enumerable<InterventionCreateWithoutDossierInput>, Enumerable<InterventionUncheckedCreateWithoutDossierInput>>
    connectOrCreate?: Enumerable<InterventionCreateOrConnectWithoutDossierInput>
    createMany?: InterventionCreateManyDossierInputEnvelope
    connect?: Enumerable<InterventionWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InterventionUpdateManyWithoutDossierNestedInput = {
    create?: XOR<Enumerable<InterventionCreateWithoutDossierInput>, Enumerable<InterventionUncheckedCreateWithoutDossierInput>>
    connectOrCreate?: Enumerable<InterventionCreateOrConnectWithoutDossierInput>
    upsert?: Enumerable<InterventionUpsertWithWhereUniqueWithoutDossierInput>
    createMany?: InterventionCreateManyDossierInputEnvelope
    set?: Enumerable<InterventionWhereUniqueInput>
    disconnect?: Enumerable<InterventionWhereUniqueInput>
    delete?: Enumerable<InterventionWhereUniqueInput>
    connect?: Enumerable<InterventionWhereUniqueInput>
    update?: Enumerable<InterventionUpdateWithWhereUniqueWithoutDossierInput>
    updateMany?: Enumerable<InterventionUpdateManyWithWhereWithoutDossierInput>
    deleteMany?: Enumerable<InterventionScalarWhereInput>
  }

  export type InterventionUncheckedUpdateManyWithoutDossierNestedInput = {
    create?: XOR<Enumerable<InterventionCreateWithoutDossierInput>, Enumerable<InterventionUncheckedCreateWithoutDossierInput>>
    connectOrCreate?: Enumerable<InterventionCreateOrConnectWithoutDossierInput>
    upsert?: Enumerable<InterventionUpsertWithWhereUniqueWithoutDossierInput>
    createMany?: InterventionCreateManyDossierInputEnvelope
    set?: Enumerable<InterventionWhereUniqueInput>
    disconnect?: Enumerable<InterventionWhereUniqueInput>
    delete?: Enumerable<InterventionWhereUniqueInput>
    connect?: Enumerable<InterventionWhereUniqueInput>
    update?: Enumerable<InterventionUpdateWithWhereUniqueWithoutDossierInput>
    updateMany?: Enumerable<InterventionUpdateManyWithWhereWithoutDossierInput>
    deleteMany?: Enumerable<InterventionScalarWhereInput>
  }

  export type DossierCreateNestedOneWithoutInterventionsInput = {
    create?: XOR<DossierCreateWithoutInterventionsInput, DossierUncheckedCreateWithoutInterventionsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutInterventionsInput
    connect?: DossierWhereUniqueInput
  }

  export type PrelevementCreateNestedManyWithoutInterventionInput = {
    create?: XOR<Enumerable<PrelevementCreateWithoutInterventionInput>, Enumerable<PrelevementUncheckedCreateWithoutInterventionInput>>
    connectOrCreate?: Enumerable<PrelevementCreateOrConnectWithoutInterventionInput>
    createMany?: PrelevementCreateManyInterventionInputEnvelope
    connect?: Enumerable<PrelevementWhereUniqueInput>
  }

  export type PrelevementUncheckedCreateNestedManyWithoutInterventionInput = {
    create?: XOR<Enumerable<PrelevementCreateWithoutInterventionInput>, Enumerable<PrelevementUncheckedCreateWithoutInterventionInput>>
    connectOrCreate?: Enumerable<PrelevementCreateOrConnectWithoutInterventionInput>
    createMany?: PrelevementCreateManyInterventionInputEnvelope
    connect?: Enumerable<PrelevementWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DossierUpdateOneRequiredWithoutInterventionsNestedInput = {
    create?: XOR<DossierCreateWithoutInterventionsInput, DossierUncheckedCreateWithoutInterventionsInput>
    connectOrCreate?: DossierCreateOrConnectWithoutInterventionsInput
    upsert?: DossierUpsertWithoutInterventionsInput
    connect?: DossierWhereUniqueInput
    update?: XOR<DossierUpdateWithoutInterventionsInput, DossierUncheckedUpdateWithoutInterventionsInput>
  }

  export type PrelevementUpdateManyWithoutInterventionNestedInput = {
    create?: XOR<Enumerable<PrelevementCreateWithoutInterventionInput>, Enumerable<PrelevementUncheckedCreateWithoutInterventionInput>>
    connectOrCreate?: Enumerable<PrelevementCreateOrConnectWithoutInterventionInput>
    upsert?: Enumerable<PrelevementUpsertWithWhereUniqueWithoutInterventionInput>
    createMany?: PrelevementCreateManyInterventionInputEnvelope
    set?: Enumerable<PrelevementWhereUniqueInput>
    disconnect?: Enumerable<PrelevementWhereUniqueInput>
    delete?: Enumerable<PrelevementWhereUniqueInput>
    connect?: Enumerable<PrelevementWhereUniqueInput>
    update?: Enumerable<PrelevementUpdateWithWhereUniqueWithoutInterventionInput>
    updateMany?: Enumerable<PrelevementUpdateManyWithWhereWithoutInterventionInput>
    deleteMany?: Enumerable<PrelevementScalarWhereInput>
  }

  export type PrelevementUncheckedUpdateManyWithoutInterventionNestedInput = {
    create?: XOR<Enumerable<PrelevementCreateWithoutInterventionInput>, Enumerable<PrelevementUncheckedCreateWithoutInterventionInput>>
    connectOrCreate?: Enumerable<PrelevementCreateOrConnectWithoutInterventionInput>
    upsert?: Enumerable<PrelevementUpsertWithWhereUniqueWithoutInterventionInput>
    createMany?: PrelevementCreateManyInterventionInputEnvelope
    set?: Enumerable<PrelevementWhereUniqueInput>
    disconnect?: Enumerable<PrelevementWhereUniqueInput>
    delete?: Enumerable<PrelevementWhereUniqueInput>
    connect?: Enumerable<PrelevementWhereUniqueInput>
    update?: Enumerable<PrelevementUpdateWithWhereUniqueWithoutInterventionInput>
    updateMany?: Enumerable<PrelevementUpdateManyWithWhereWithoutInterventionInput>
    deleteMany?: Enumerable<PrelevementScalarWhereInput>
  }

  export type InterventionCreateNestedOneWithoutPrelevementsInput = {
    create?: XOR<InterventionCreateWithoutPrelevementsInput, InterventionUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: InterventionCreateOrConnectWithoutPrelevementsInput
    connect?: InterventionWhereUniqueInput
  }

  export type CoucheCreateNestedManyWithoutPrelevementInput = {
    create?: XOR<Enumerable<CoucheCreateWithoutPrelevementInput>, Enumerable<CoucheUncheckedCreateWithoutPrelevementInput>>
    connectOrCreate?: Enumerable<CoucheCreateOrConnectWithoutPrelevementInput>
    createMany?: CoucheCreateManyPrelevementInputEnvelope
    connect?: Enumerable<CoucheWhereUniqueInput>
  }

  export type CoucheUncheckedCreateNestedManyWithoutPrelevementInput = {
    create?: XOR<Enumerable<CoucheCreateWithoutPrelevementInput>, Enumerable<CoucheUncheckedCreateWithoutPrelevementInput>>
    connectOrCreate?: Enumerable<CoucheCreateOrConnectWithoutPrelevementInput>
    createMany?: CoucheCreateManyPrelevementInputEnvelope
    connect?: Enumerable<CoucheWhereUniqueInput>
  }

  export type InterventionUpdateOneWithoutPrelevementsNestedInput = {
    create?: XOR<InterventionCreateWithoutPrelevementsInput, InterventionUncheckedCreateWithoutPrelevementsInput>
    connectOrCreate?: InterventionCreateOrConnectWithoutPrelevementsInput
    upsert?: InterventionUpsertWithoutPrelevementsInput
    disconnect?: boolean
    delete?: boolean
    connect?: InterventionWhereUniqueInput
    update?: XOR<InterventionUpdateWithoutPrelevementsInput, InterventionUncheckedUpdateWithoutPrelevementsInput>
  }

  export type CoucheUpdateManyWithoutPrelevementNestedInput = {
    create?: XOR<Enumerable<CoucheCreateWithoutPrelevementInput>, Enumerable<CoucheUncheckedCreateWithoutPrelevementInput>>
    connectOrCreate?: Enumerable<CoucheCreateOrConnectWithoutPrelevementInput>
    upsert?: Enumerable<CoucheUpsertWithWhereUniqueWithoutPrelevementInput>
    createMany?: CoucheCreateManyPrelevementInputEnvelope
    set?: Enumerable<CoucheWhereUniqueInput>
    disconnect?: Enumerable<CoucheWhereUniqueInput>
    delete?: Enumerable<CoucheWhereUniqueInput>
    connect?: Enumerable<CoucheWhereUniqueInput>
    update?: Enumerable<CoucheUpdateWithWhereUniqueWithoutPrelevementInput>
    updateMany?: Enumerable<CoucheUpdateManyWithWhereWithoutPrelevementInput>
    deleteMany?: Enumerable<CoucheScalarWhereInput>
  }

  export type CoucheUncheckedUpdateManyWithoutPrelevementNestedInput = {
    create?: XOR<Enumerable<CoucheCreateWithoutPrelevementInput>, Enumerable<CoucheUncheckedCreateWithoutPrelevementInput>>
    connectOrCreate?: Enumerable<CoucheCreateOrConnectWithoutPrelevementInput>
    upsert?: Enumerable<CoucheUpsertWithWhereUniqueWithoutPrelevementInput>
    createMany?: CoucheCreateManyPrelevementInputEnvelope
    set?: Enumerable<CoucheWhereUniqueInput>
    disconnect?: Enumerable<CoucheWhereUniqueInput>
    delete?: Enumerable<CoucheWhereUniqueInput>
    connect?: Enumerable<CoucheWhereUniqueInput>
    update?: Enumerable<CoucheUpdateWithWhereUniqueWithoutPrelevementInput>
    updateMany?: Enumerable<CoucheUpdateManyWithWhereWithoutPrelevementInput>
    deleteMany?: Enumerable<CoucheScalarWhereInput>
  }

  export type PrelevementCreateNestedOneWithoutCouchesInput = {
    create?: XOR<PrelevementCreateWithoutCouchesInput, PrelevementUncheckedCreateWithoutCouchesInput>
    connectOrCreate?: PrelevementCreateOrConnectWithoutCouchesInput
    connect?: PrelevementWhereUniqueInput
  }

  export type PrelevementUpdateOneWithoutCouchesNestedInput = {
    create?: XOR<PrelevementCreateWithoutCouchesInput, PrelevementUncheckedCreateWithoutCouchesInput>
    connectOrCreate?: PrelevementCreateOrConnectWithoutCouchesInput
    upsert?: PrelevementUpsertWithoutCouchesInput
    disconnect?: boolean
    delete?: boolean
    connect?: PrelevementWhereUniqueInput
    update?: XOR<PrelevementUpdateWithoutCouchesInput, PrelevementUncheckedUpdateWithoutCouchesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type InterventionCreateWithoutDossierInput = {
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
    prelevements?: PrelevementCreateNestedManyWithoutInterventionInput
  }

  export type InterventionUncheckedCreateWithoutDossierInput = {
    id?: number
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
    prelevements?: PrelevementUncheckedCreateNestedManyWithoutInterventionInput
  }

  export type InterventionCreateOrConnectWithoutDossierInput = {
    where: InterventionWhereUniqueInput
    create: XOR<InterventionCreateWithoutDossierInput, InterventionUncheckedCreateWithoutDossierInput>
  }

  export type InterventionCreateManyDossierInputEnvelope = {
    data: Enumerable<InterventionCreateManyDossierInput>
  }

  export type InterventionUpsertWithWhereUniqueWithoutDossierInput = {
    where: InterventionWhereUniqueInput
    update: XOR<InterventionUpdateWithoutDossierInput, InterventionUncheckedUpdateWithoutDossierInput>
    create: XOR<InterventionCreateWithoutDossierInput, InterventionUncheckedCreateWithoutDossierInput>
  }

  export type InterventionUpdateWithWhereUniqueWithoutDossierInput = {
    where: InterventionWhereUniqueInput
    data: XOR<InterventionUpdateWithoutDossierInput, InterventionUncheckedUpdateWithoutDossierInput>
  }

  export type InterventionUpdateManyWithWhereWithoutDossierInput = {
    where: InterventionScalarWhereInput
    data: XOR<InterventionUpdateManyMutationInput, InterventionUncheckedUpdateManyWithoutInterventionsInput>
  }

  export type InterventionScalarWhereInput = {
    AND?: Enumerable<InterventionScalarWhereInput>
    OR?: Enumerable<InterventionScalarWhereInput>
    NOT?: Enumerable<InterventionScalarWhereInput>
    id?: IntFilter | number
    dateDebutMission?: DateTimeNullableFilter | Date | string | null
    dateFinMission?: DateTimeNullableFilter | Date | string | null
    idEmployeIntervention?: IntNullableFilter | number | null
    zones?: StringNullableFilter | string | null
    isFirstIntervention?: BoolNullableFilter | boolean | null
    idDossier?: IntFilter | number
  }

  export type DossierCreateWithoutInterventionsInput = {
    id: number
    isParkMarker?: boolean | null
    typologie?: string | null
    docs?: string | null
  }

  export type DossierUncheckedCreateWithoutInterventionsInput = {
    id: number
    isParkMarker?: boolean | null
    typologie?: string | null
    docs?: string | null
  }

  export type DossierCreateOrConnectWithoutInterventionsInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutInterventionsInput, DossierUncheckedCreateWithoutInterventionsInput>
  }

  export type PrelevementCreateWithoutInterventionInput = {
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    numero?: number | null
    couches?: CoucheCreateNestedManyWithoutPrelevementInput
  }

  export type PrelevementUncheckedCreateWithoutInterventionInput = {
    id?: number
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    numero?: number | null
    couches?: CoucheUncheckedCreateNestedManyWithoutPrelevementInput
  }

  export type PrelevementCreateOrConnectWithoutInterventionInput = {
    where: PrelevementWhereUniqueInput
    create: XOR<PrelevementCreateWithoutInterventionInput, PrelevementUncheckedCreateWithoutInterventionInput>
  }

  export type PrelevementCreateManyInterventionInputEnvelope = {
    data: Enumerable<PrelevementCreateManyInterventionInput>
  }

  export type DossierUpsertWithoutInterventionsInput = {
    update: XOR<DossierUpdateWithoutInterventionsInput, DossierUncheckedUpdateWithoutInterventionsInput>
    create: XOR<DossierCreateWithoutInterventionsInput, DossierUncheckedCreateWithoutInterventionsInput>
  }

  export type DossierUpdateWithoutInterventionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    isParkMarker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typologie?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DossierUncheckedUpdateWithoutInterventionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    isParkMarker?: NullableBoolFieldUpdateOperationsInput | boolean | null
    typologie?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrelevementUpsertWithWhereUniqueWithoutInterventionInput = {
    where: PrelevementWhereUniqueInput
    update: XOR<PrelevementUpdateWithoutInterventionInput, PrelevementUncheckedUpdateWithoutInterventionInput>
    create: XOR<PrelevementCreateWithoutInterventionInput, PrelevementUncheckedCreateWithoutInterventionInput>
  }

  export type PrelevementUpdateWithWhereUniqueWithoutInterventionInput = {
    where: PrelevementWhereUniqueInput
    data: XOR<PrelevementUpdateWithoutInterventionInput, PrelevementUncheckedUpdateWithoutInterventionInput>
  }

  export type PrelevementUpdateManyWithWhereWithoutInterventionInput = {
    where: PrelevementScalarWhereInput
    data: XOR<PrelevementUpdateManyMutationInput, PrelevementUncheckedUpdateManyWithoutPrelevementsInput>
  }

  export type PrelevementScalarWhereInput = {
    AND?: Enumerable<PrelevementScalarWhereInput>
    OR?: Enumerable<PrelevementScalarWhereInput>
    NOT?: Enumerable<PrelevementScalarWhereInput>
    id?: IntFilter | number
    date?: DateTimeNullableFilter | Date | string | null
    emplacement?: StringNullableFilter | string | null
    latitude?: StringNullableFilter | string | null
    longitude?: StringNullableFilter | string | null
    altitude?: StringNullableFilter | string | null
    adresse?: StringNullableFilter | string | null
    materiaux?: StringNullableFilter | string | null
    taille?: IntNullableFilter | number | null
    couleur?: StringNullableFilter | string | null
    images?: StringNullableFilter | string | null
    laboratoire?: StringNullableFilter | string | null
    zone?: StringNullableFilter | string | null
    resultat?: StringNullableFilter | string | null
    PrelevementPossible?: BoolNullableFilter | boolean | null
    choixPrelevementImPossible?: StringNullableFilter | string | null
    idIntervention?: IntNullableFilter | number | null
    numero?: IntNullableFilter | number | null
  }

  export type InterventionCreateWithoutPrelevementsInput = {
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
    dossier: DossierCreateNestedOneWithoutInterventionsInput
  }

  export type InterventionUncheckedCreateWithoutPrelevementsInput = {
    id?: number
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
    idDossier: number
  }

  export type InterventionCreateOrConnectWithoutPrelevementsInput = {
    where: InterventionWhereUniqueInput
    create: XOR<InterventionCreateWithoutPrelevementsInput, InterventionUncheckedCreateWithoutPrelevementsInput>
  }

  export type CoucheCreateWithoutPrelevementInput = {
    taille?: string | null
    couleur?: string | null
    amiante?: boolean | null
    materiaux?: string | null
    HAP?: string | null
    numero?: number | null
    laboratoire?: string | null
    bonCommandeLabo?: string | null
  }

  export type CoucheUncheckedCreateWithoutPrelevementInput = {
    id?: number
    taille?: string | null
    couleur?: string | null
    amiante?: boolean | null
    materiaux?: string | null
    HAP?: string | null
    numero?: number | null
    laboratoire?: string | null
    bonCommandeLabo?: string | null
  }

  export type CoucheCreateOrConnectWithoutPrelevementInput = {
    where: CoucheWhereUniqueInput
    create: XOR<CoucheCreateWithoutPrelevementInput, CoucheUncheckedCreateWithoutPrelevementInput>
  }

  export type CoucheCreateManyPrelevementInputEnvelope = {
    data: Enumerable<CoucheCreateManyPrelevementInput>
  }

  export type InterventionUpsertWithoutPrelevementsInput = {
    update: XOR<InterventionUpdateWithoutPrelevementsInput, InterventionUncheckedUpdateWithoutPrelevementsInput>
    create: XOR<InterventionCreateWithoutPrelevementsInput, InterventionUncheckedCreateWithoutPrelevementsInput>
  }

  export type InterventionUpdateWithoutPrelevementsInput = {
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dossier?: DossierUpdateOneRequiredWithoutInterventionsNestedInput
  }

  export type InterventionUncheckedUpdateWithoutPrelevementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idDossier?: IntFieldUpdateOperationsInput | number
  }

  export type CoucheUpsertWithWhereUniqueWithoutPrelevementInput = {
    where: CoucheWhereUniqueInput
    update: XOR<CoucheUpdateWithoutPrelevementInput, CoucheUncheckedUpdateWithoutPrelevementInput>
    create: XOR<CoucheCreateWithoutPrelevementInput, CoucheUncheckedCreateWithoutPrelevementInput>
  }

  export type CoucheUpdateWithWhereUniqueWithoutPrelevementInput = {
    where: CoucheWhereUniqueInput
    data: XOR<CoucheUpdateWithoutPrelevementInput, CoucheUncheckedUpdateWithoutPrelevementInput>
  }

  export type CoucheUpdateManyWithWhereWithoutPrelevementInput = {
    where: CoucheScalarWhereInput
    data: XOR<CoucheUpdateManyMutationInput, CoucheUncheckedUpdateManyWithoutCouchesInput>
  }

  export type CoucheScalarWhereInput = {
    AND?: Enumerable<CoucheScalarWhereInput>
    OR?: Enumerable<CoucheScalarWhereInput>
    NOT?: Enumerable<CoucheScalarWhereInput>
    id?: IntFilter | number
    taille?: StringNullableFilter | string | null
    couleur?: StringNullableFilter | string | null
    amiante?: BoolNullableFilter | boolean | null
    materiaux?: StringNullableFilter | string | null
    HAP?: StringNullableFilter | string | null
    idPrelevement?: IntNullableFilter | number | null
    numero?: IntNullableFilter | number | null
    laboratoire?: StringNullableFilter | string | null
    bonCommandeLabo?: StringNullableFilter | string | null
  }

  export type PrelevementCreateWithoutCouchesInput = {
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    numero?: number | null
    Intervention?: InterventionCreateNestedOneWithoutPrelevementsInput
  }

  export type PrelevementUncheckedCreateWithoutCouchesInput = {
    id?: number
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    idIntervention?: number | null
    numero?: number | null
  }

  export type PrelevementCreateOrConnectWithoutCouchesInput = {
    where: PrelevementWhereUniqueInput
    create: XOR<PrelevementCreateWithoutCouchesInput, PrelevementUncheckedCreateWithoutCouchesInput>
  }

  export type PrelevementUpsertWithoutCouchesInput = {
    update: XOR<PrelevementUpdateWithoutCouchesInput, PrelevementUncheckedUpdateWithoutCouchesInput>
    create: XOR<PrelevementCreateWithoutCouchesInput, PrelevementUncheckedCreateWithoutCouchesInput>
  }

  export type PrelevementUpdateWithoutCouchesInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    Intervention?: InterventionUpdateOneWithoutPrelevementsNestedInput
  }

  export type PrelevementUncheckedUpdateWithoutCouchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    idIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InterventionCreateManyDossierInput = {
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    idEmployeIntervention?: number | null
    zones?: string | null
    isFirstIntervention?: boolean | null
  }

  export type InterventionUpdateWithoutDossierInput = {
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prelevements?: PrelevementUpdateManyWithoutInterventionNestedInput
  }

  export type InterventionUncheckedUpdateWithoutDossierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prelevements?: PrelevementUncheckedUpdateManyWithoutInterventionNestedInput
  }

  export type InterventionUncheckedUpdateManyWithoutInterventionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    zones?: NullableStringFieldUpdateOperationsInput | string | null
    isFirstIntervention?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PrelevementCreateManyInterventionInput = {
    date?: Date | string | null
    emplacement?: string | null
    latitude?: string | null
    longitude?: string | null
    altitude?: string | null
    adresse?: string | null
    materiaux?: string | null
    taille?: number | null
    couleur?: string | null
    images?: string | null
    laboratoire?: string | null
    zone?: string | null
    resultat?: string | null
    PrelevementPossible?: boolean | null
    choixPrelevementImPossible?: string | null
    numero?: number | null
  }

  export type PrelevementUpdateWithoutInterventionInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    couches?: CoucheUpdateManyWithoutPrelevementNestedInput
  }

  export type PrelevementUncheckedUpdateWithoutInterventionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    couches?: CoucheUncheckedUpdateManyWithoutPrelevementNestedInput
  }

  export type PrelevementUncheckedUpdateManyWithoutPrelevementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emplacement?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    altitude?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    taille?: NullableIntFieldUpdateOperationsInput | number | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    zone?: NullableStringFieldUpdateOperationsInput | string | null
    resultat?: NullableStringFieldUpdateOperationsInput | string | null
    PrelevementPossible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    choixPrelevementImPossible?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoucheCreateManyPrelevementInput = {
    taille?: string | null
    couleur?: string | null
    amiante?: boolean | null
    materiaux?: string | null
    HAP?: string | null
    numero?: number | null
    laboratoire?: string | null
    bonCommandeLabo?: string | null
  }

  export type CoucheUpdateWithoutPrelevementInput = {
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    amiante?: NullableBoolFieldUpdateOperationsInput | boolean | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    HAP?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    bonCommandeLabo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoucheUncheckedUpdateWithoutPrelevementInput = {
    id?: IntFieldUpdateOperationsInput | number
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    amiante?: NullableBoolFieldUpdateOperationsInput | boolean | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    HAP?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    bonCommandeLabo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoucheUncheckedUpdateManyWithoutCouchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    taille?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    amiante?: NullableBoolFieldUpdateOperationsInput | boolean | null
    materiaux?: NullableStringFieldUpdateOperationsInput | string | null
    HAP?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableIntFieldUpdateOperationsInput | number | null
    laboratoire?: NullableStringFieldUpdateOperationsInput | string | null
    bonCommandeLabo?: NullableStringFieldUpdateOperationsInput | string | null
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