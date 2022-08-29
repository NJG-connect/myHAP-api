
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
  idDossier: number
  numero: number
  idRefDossier: number | null
  idSiteGestion: string | null
  idBien: number | null
  idEmployeIntervention: number | null
  idEmployeCommande: number | null
  idEmployeRedaction: number | null
  idEmployerPublication: number | null
  reference: string | null
  referenceExterne: string | null
  dateCommande: Date | null
  dateRapport: Date | null
  datePublication: Date | null
  dateSignatureNotaire: Date | null
  idCadreMission: string | null
  contactPlace: string | null
  accompagnateur: string | null
  verrouille: boolean | null
  idStatut: number | null
  dateDebutMission: Date | null
  dateFinMission: Date | null
  heureRDV: Date | null
  heureFin: Date | null
  idRdv: number | null
  commentaire: string | null
  codeBien: string | null
  discBien: string | null
  typeProprieteBatiment: string | null
  typeProprieteLot: string | null
  usageBien: string | null
  isBati: boolean
  articleNature: string | null
  nature: string | null
  nomBatiment: string | null
  adresse: string | null
  cptAdresse: string | null
  codePostal: string | null
  ville: string | null
  departement: string | null
  pays: string | null
  numeroLot: string | null
  niveau: number | null
  etage: string | null
  sectionCadastrale: string | null
  parcelle: string | null
  anneeConstruction: string | null
  anneePermisConstruire: string | null
  entree: string | null
  escalier: string | null
  porte: string | null
  nbLocaux: number | null
  nbNiveaux: number | null
  quotePart: number | null
  quotePartTotale: number | null
  digicode: string | null
  categorieRAAA: number | null
  isMitoyen: boolean
  isIOP: boolean
  isERP: boolean
  typeERP: string | null
  catERP: number | null
  isIGH: number
  isAlimGazVille: boolean
  isChauffageCollectif: boolean
  isEcsCollectif: boolean
  occupant: number
  dateCre: Date | null
  dateMaj: Date | null
  dateSup: Date | null
  IdUserCre: number | null
  idUserMaj: number | null
  idUserSup: number | null
  dateArchive: Date | null
  idResCroquisBuilder: string | null
  idResMemoVocal: string | null
  idResPhoto: string | null
  previewDataPhoto: Buffer | null
  titrePhoto: string | null
  RefSync: number | null
  guidSdl: string | null
  ChangeTime: Date | null
  LastSyncTime: Date | null
  idPub: number | null
  datePub: Date | null
  statusPub: number
  migratedData: boolean | null
  DateLastRN: Date | null
  DateLastES: Date | null
  idUserLastRN: number | null
  idUserLastES: number | null
  tarifOM: Prisma.Decimal | null
  isExpirationNomade: boolean | null
  DateLastRNdata: Date | null
  DateLastESdata: Date | null
  tempsIntervention: Prisma.Decimal | null
  isReglementSurSite: boolean
  moyenPaiement: string | null
  numeroCheque: string | null
  banqueCheque: string | null
  typeCB: string | null
  numeroCB: string | null
  dateExpCB: Date | null
  cryptoCB: string | null
  numPermisConstruire: string | null
  isPermisGroupe: boolean
  dateArchiveData: Date | null
  isArchivable: boolean | null
  numVoie: string | null
  cptNumVoie: string | null
  typeVoie: string | null
  codeInsee: number | null
  anneeRehabilitation: string | null
  latitude: Prisma.Decimal | null
  longitude: Prisma.Decimal | null
  jeuMatrice: string | null
  nbCles: number | null
  infoCles: string | null
  priorite: number
  isAPO: boolean
  etapeAPO: string | null
  statutAPO: number | null
  dateStartAPO: Date | null
  dateFinAPO: Date | null
  idContrat: number | null
  justifOccupant: string | null
  natureTravaux: string | null
  idSociete: string
  idSocieteIntervention: string
  idSiteGestionIntervention: string
  numeroSociete: number | null
  nbAnxCroquisDynamique: string | null
  idFiscal: string | null
  categorieBien: string | null
  poids: number | null
  largeur: number | null
  longueur: number | null
  hauteur: number | null
  constructeur: string | null
  surface: number | null
  volume: number | null
  uniteVolume: string | null
  commentaireIntervention: string | null
  idMPOM: string | null
  idMPPG: string | null
  idMPNS: string | null
  SiaResultMLAD: string | null
  SiaResultRAA: string | null
  numCopro: string | null
  infoBAN: string | null
}

/**
 * Model StatutDossier
 * 
 */
export type StatutDossier = {
  idStatut: number
  intitule: string | null
  ordre: number
  statutAuto: string | null
  UpdateTime: Date | null
  InsertTime: Date | null
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
   * `prisma.statutDossier`: Exposes CRUD operations for the **StatutDossier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatutDossiers
    * const statutDossiers = await prisma.statutDossier.findMany()
    * ```
    */
  get statutDossier(): Prisma.StatutDossierDelegate<GlobalReject>;
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
    StatutDossier: 'StatutDossier'
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
   * Count Type StatutDossierCountOutputType
   */


  export type StatutDossierCountOutputType = {
    Dossier: number
  }

  export type StatutDossierCountOutputTypeSelect = {
    Dossier?: boolean
  }

  export type StatutDossierCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StatutDossierCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StatutDossierCountOutputType
    : S extends undefined
    ? never
    : S extends StatutDossierCountOutputTypeArgs
    ?'include' extends U
    ? StatutDossierCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof StatutDossierCountOutputType ? StatutDossierCountOutputType[P] : never
  } 
    : StatutDossierCountOutputType
  : StatutDossierCountOutputType




  // Custom InputTypes

  /**
   * StatutDossierCountOutputType without action
   */
  export type StatutDossierCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StatutDossierCountOutputType
     * 
    **/
    select?: StatutDossierCountOutputTypeSelect | null
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
    idDossier: number | null
    numero: number | null
    idRefDossier: number | null
    idBien: number | null
    idEmployeIntervention: number | null
    idEmployeCommande: number | null
    idEmployeRedaction: number | null
    idEmployerPublication: number | null
    idStatut: number | null
    idRdv: number | null
    niveau: number | null
    nbLocaux: number | null
    nbNiveaux: number | null
    quotePart: number | null
    quotePartTotale: number | null
    categorieRAAA: number | null
    catERP: number | null
    isIGH: number | null
    occupant: number | null
    IdUserCre: number | null
    idUserMaj: number | null
    idUserSup: number | null
    RefSync: number | null
    idPub: number | null
    statusPub: number | null
    idUserLastRN: number | null
    idUserLastES: number | null
    tarifOM: Decimal | null
    tempsIntervention: Decimal | null
    codeInsee: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    nbCles: number | null
    priorite: number | null
    statutAPO: number | null
    idContrat: number | null
    numeroSociete: number | null
    poids: number | null
    largeur: number | null
    longueur: number | null
    hauteur: number | null
    surface: number | null
    volume: number | null
  }

  export type DossierSumAggregateOutputType = {
    idDossier: number | null
    numero: number | null
    idRefDossier: number | null
    idBien: number | null
    idEmployeIntervention: number | null
    idEmployeCommande: number | null
    idEmployeRedaction: number | null
    idEmployerPublication: number | null
    idStatut: number | null
    idRdv: number | null
    niveau: number | null
    nbLocaux: number | null
    nbNiveaux: number | null
    quotePart: number | null
    quotePartTotale: number | null
    categorieRAAA: number | null
    catERP: number | null
    isIGH: number | null
    occupant: number | null
    IdUserCre: number | null
    idUserMaj: number | null
    idUserSup: number | null
    RefSync: number | null
    idPub: number | null
    statusPub: number | null
    idUserLastRN: number | null
    idUserLastES: number | null
    tarifOM: Decimal | null
    tempsIntervention: Decimal | null
    codeInsee: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    nbCles: number | null
    priorite: number | null
    statutAPO: number | null
    idContrat: number | null
    numeroSociete: number | null
    poids: number | null
    largeur: number | null
    longueur: number | null
    hauteur: number | null
    surface: number | null
    volume: number | null
  }

  export type DossierMinAggregateOutputType = {
    idDossier: number | null
    numero: number | null
    idRefDossier: number | null
    idSiteGestion: string | null
    idBien: number | null
    idEmployeIntervention: number | null
    idEmployeCommande: number | null
    idEmployeRedaction: number | null
    idEmployerPublication: number | null
    reference: string | null
    referenceExterne: string | null
    dateCommande: Date | null
    dateRapport: Date | null
    datePublication: Date | null
    dateSignatureNotaire: Date | null
    idCadreMission: string | null
    contactPlace: string | null
    accompagnateur: string | null
    verrouille: boolean | null
    idStatut: number | null
    dateDebutMission: Date | null
    dateFinMission: Date | null
    heureRDV: Date | null
    heureFin: Date | null
    idRdv: number | null
    commentaire: string | null
    codeBien: string | null
    discBien: string | null
    typeProprieteBatiment: string | null
    typeProprieteLot: string | null
    usageBien: string | null
    isBati: boolean | null
    articleNature: string | null
    nature: string | null
    nomBatiment: string | null
    adresse: string | null
    cptAdresse: string | null
    codePostal: string | null
    ville: string | null
    departement: string | null
    pays: string | null
    numeroLot: string | null
    niveau: number | null
    etage: string | null
    sectionCadastrale: string | null
    parcelle: string | null
    anneeConstruction: string | null
    anneePermisConstruire: string | null
    entree: string | null
    escalier: string | null
    porte: string | null
    nbLocaux: number | null
    nbNiveaux: number | null
    quotePart: number | null
    quotePartTotale: number | null
    digicode: string | null
    categorieRAAA: number | null
    isMitoyen: boolean | null
    isIOP: boolean | null
    isERP: boolean | null
    typeERP: string | null
    catERP: number | null
    isIGH: number | null
    isAlimGazVille: boolean | null
    isChauffageCollectif: boolean | null
    isEcsCollectif: boolean | null
    occupant: number | null
    dateCre: Date | null
    dateMaj: Date | null
    dateSup: Date | null
    IdUserCre: number | null
    idUserMaj: number | null
    idUserSup: number | null
    dateArchive: Date | null
    idResCroquisBuilder: string | null
    idResMemoVocal: string | null
    idResPhoto: string | null
    previewDataPhoto: Buffer | null
    titrePhoto: string | null
    RefSync: number | null
    guidSdl: string | null
    ChangeTime: Date | null
    LastSyncTime: Date | null
    idPub: number | null
    datePub: Date | null
    statusPub: number | null
    migratedData: boolean | null
    DateLastRN: Date | null
    DateLastES: Date | null
    idUserLastRN: number | null
    idUserLastES: number | null
    tarifOM: Decimal | null
    isExpirationNomade: boolean | null
    DateLastRNdata: Date | null
    DateLastESdata: Date | null
    tempsIntervention: Decimal | null
    isReglementSurSite: boolean | null
    moyenPaiement: string | null
    numeroCheque: string | null
    banqueCheque: string | null
    typeCB: string | null
    numeroCB: string | null
    dateExpCB: Date | null
    cryptoCB: string | null
    numPermisConstruire: string | null
    isPermisGroupe: boolean | null
    dateArchiveData: Date | null
    isArchivable: boolean | null
    numVoie: string | null
    cptNumVoie: string | null
    typeVoie: string | null
    codeInsee: number | null
    anneeRehabilitation: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    jeuMatrice: string | null
    nbCles: number | null
    infoCles: string | null
    priorite: number | null
    isAPO: boolean | null
    etapeAPO: string | null
    statutAPO: number | null
    dateStartAPO: Date | null
    dateFinAPO: Date | null
    idContrat: number | null
    justifOccupant: string | null
    natureTravaux: string | null
    idSociete: string | null
    idSocieteIntervention: string | null
    idSiteGestionIntervention: string | null
    numeroSociete: number | null
    nbAnxCroquisDynamique: string | null
    idFiscal: string | null
    categorieBien: string | null
    poids: number | null
    largeur: number | null
    longueur: number | null
    hauteur: number | null
    constructeur: string | null
    surface: number | null
    volume: number | null
    uniteVolume: string | null
    commentaireIntervention: string | null
    idMPOM: string | null
    idMPPG: string | null
    idMPNS: string | null
    SiaResultMLAD: string | null
    SiaResultRAA: string | null
    numCopro: string | null
    infoBAN: string | null
  }

  export type DossierMaxAggregateOutputType = {
    idDossier: number | null
    numero: number | null
    idRefDossier: number | null
    idSiteGestion: string | null
    idBien: number | null
    idEmployeIntervention: number | null
    idEmployeCommande: number | null
    idEmployeRedaction: number | null
    idEmployerPublication: number | null
    reference: string | null
    referenceExterne: string | null
    dateCommande: Date | null
    dateRapport: Date | null
    datePublication: Date | null
    dateSignatureNotaire: Date | null
    idCadreMission: string | null
    contactPlace: string | null
    accompagnateur: string | null
    verrouille: boolean | null
    idStatut: number | null
    dateDebutMission: Date | null
    dateFinMission: Date | null
    heureRDV: Date | null
    heureFin: Date | null
    idRdv: number | null
    commentaire: string | null
    codeBien: string | null
    discBien: string | null
    typeProprieteBatiment: string | null
    typeProprieteLot: string | null
    usageBien: string | null
    isBati: boolean | null
    articleNature: string | null
    nature: string | null
    nomBatiment: string | null
    adresse: string | null
    cptAdresse: string | null
    codePostal: string | null
    ville: string | null
    departement: string | null
    pays: string | null
    numeroLot: string | null
    niveau: number | null
    etage: string | null
    sectionCadastrale: string | null
    parcelle: string | null
    anneeConstruction: string | null
    anneePermisConstruire: string | null
    entree: string | null
    escalier: string | null
    porte: string | null
    nbLocaux: number | null
    nbNiveaux: number | null
    quotePart: number | null
    quotePartTotale: number | null
    digicode: string | null
    categorieRAAA: number | null
    isMitoyen: boolean | null
    isIOP: boolean | null
    isERP: boolean | null
    typeERP: string | null
    catERP: number | null
    isIGH: number | null
    isAlimGazVille: boolean | null
    isChauffageCollectif: boolean | null
    isEcsCollectif: boolean | null
    occupant: number | null
    dateCre: Date | null
    dateMaj: Date | null
    dateSup: Date | null
    IdUserCre: number | null
    idUserMaj: number | null
    idUserSup: number | null
    dateArchive: Date | null
    idResCroquisBuilder: string | null
    idResMemoVocal: string | null
    idResPhoto: string | null
    previewDataPhoto: Buffer | null
    titrePhoto: string | null
    RefSync: number | null
    guidSdl: string | null
    ChangeTime: Date | null
    LastSyncTime: Date | null
    idPub: number | null
    datePub: Date | null
    statusPub: number | null
    migratedData: boolean | null
    DateLastRN: Date | null
    DateLastES: Date | null
    idUserLastRN: number | null
    idUserLastES: number | null
    tarifOM: Decimal | null
    isExpirationNomade: boolean | null
    DateLastRNdata: Date | null
    DateLastESdata: Date | null
    tempsIntervention: Decimal | null
    isReglementSurSite: boolean | null
    moyenPaiement: string | null
    numeroCheque: string | null
    banqueCheque: string | null
    typeCB: string | null
    numeroCB: string | null
    dateExpCB: Date | null
    cryptoCB: string | null
    numPermisConstruire: string | null
    isPermisGroupe: boolean | null
    dateArchiveData: Date | null
    isArchivable: boolean | null
    numVoie: string | null
    cptNumVoie: string | null
    typeVoie: string | null
    codeInsee: number | null
    anneeRehabilitation: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    jeuMatrice: string | null
    nbCles: number | null
    infoCles: string | null
    priorite: number | null
    isAPO: boolean | null
    etapeAPO: string | null
    statutAPO: number | null
    dateStartAPO: Date | null
    dateFinAPO: Date | null
    idContrat: number | null
    justifOccupant: string | null
    natureTravaux: string | null
    idSociete: string | null
    idSocieteIntervention: string | null
    idSiteGestionIntervention: string | null
    numeroSociete: number | null
    nbAnxCroquisDynamique: string | null
    idFiscal: string | null
    categorieBien: string | null
    poids: number | null
    largeur: number | null
    longueur: number | null
    hauteur: number | null
    constructeur: string | null
    surface: number | null
    volume: number | null
    uniteVolume: string | null
    commentaireIntervention: string | null
    idMPOM: string | null
    idMPPG: string | null
    idMPNS: string | null
    SiaResultMLAD: string | null
    SiaResultRAA: string | null
    numCopro: string | null
    infoBAN: string | null
  }

  export type DossierCountAggregateOutputType = {
    idDossier: number
    numero: number
    idRefDossier: number
    idSiteGestion: number
    idBien: number
    idEmployeIntervention: number
    idEmployeCommande: number
    idEmployeRedaction: number
    idEmployerPublication: number
    reference: number
    referenceExterne: number
    dateCommande: number
    dateRapport: number
    datePublication: number
    dateSignatureNotaire: number
    idCadreMission: number
    contactPlace: number
    accompagnateur: number
    verrouille: number
    idStatut: number
    dateDebutMission: number
    dateFinMission: number
    heureRDV: number
    heureFin: number
    idRdv: number
    commentaire: number
    codeBien: number
    discBien: number
    typeProprieteBatiment: number
    typeProprieteLot: number
    usageBien: number
    isBati: number
    articleNature: number
    nature: number
    nomBatiment: number
    adresse: number
    cptAdresse: number
    codePostal: number
    ville: number
    departement: number
    pays: number
    numeroLot: number
    niveau: number
    etage: number
    sectionCadastrale: number
    parcelle: number
    anneeConstruction: number
    anneePermisConstruire: number
    entree: number
    escalier: number
    porte: number
    nbLocaux: number
    nbNiveaux: number
    quotePart: number
    quotePartTotale: number
    digicode: number
    categorieRAAA: number
    isMitoyen: number
    isIOP: number
    isERP: number
    typeERP: number
    catERP: number
    isIGH: number
    isAlimGazVille: number
    isChauffageCollectif: number
    isEcsCollectif: number
    occupant: number
    dateCre: number
    dateMaj: number
    dateSup: number
    IdUserCre: number
    idUserMaj: number
    idUserSup: number
    dateArchive: number
    idResCroquisBuilder: number
    idResMemoVocal: number
    idResPhoto: number
    previewDataPhoto: number
    titrePhoto: number
    RefSync: number
    guidSdl: number
    ChangeTime: number
    LastSyncTime: number
    idPub: number
    datePub: number
    statusPub: number
    migratedData: number
    DateLastRN: number
    DateLastES: number
    idUserLastRN: number
    idUserLastES: number
    tarifOM: number
    isExpirationNomade: number
    DateLastRNdata: number
    DateLastESdata: number
    tempsIntervention: number
    isReglementSurSite: number
    moyenPaiement: number
    numeroCheque: number
    banqueCheque: number
    typeCB: number
    numeroCB: number
    dateExpCB: number
    cryptoCB: number
    numPermisConstruire: number
    isPermisGroupe: number
    dateArchiveData: number
    isArchivable: number
    numVoie: number
    cptNumVoie: number
    typeVoie: number
    codeInsee: number
    anneeRehabilitation: number
    latitude: number
    longitude: number
    jeuMatrice: number
    nbCles: number
    infoCles: number
    priorite: number
    isAPO: number
    etapeAPO: number
    statutAPO: number
    dateStartAPO: number
    dateFinAPO: number
    idContrat: number
    justifOccupant: number
    natureTravaux: number
    idSociete: number
    idSocieteIntervention: number
    idSiteGestionIntervention: number
    numeroSociete: number
    nbAnxCroquisDynamique: number
    idFiscal: number
    categorieBien: number
    poids: number
    largeur: number
    longueur: number
    hauteur: number
    constructeur: number
    surface: number
    volume: number
    uniteVolume: number
    commentaireIntervention: number
    idMPOM: number
    idMPPG: number
    idMPNS: number
    SiaResultMLAD: number
    SiaResultRAA: number
    numCopro: number
    infoBAN: number
    _all: number
  }


  export type DossierAvgAggregateInputType = {
    idDossier?: true
    numero?: true
    idRefDossier?: true
    idBien?: true
    idEmployeIntervention?: true
    idEmployeCommande?: true
    idEmployeRedaction?: true
    idEmployerPublication?: true
    idStatut?: true
    idRdv?: true
    niveau?: true
    nbLocaux?: true
    nbNiveaux?: true
    quotePart?: true
    quotePartTotale?: true
    categorieRAAA?: true
    catERP?: true
    isIGH?: true
    occupant?: true
    IdUserCre?: true
    idUserMaj?: true
    idUserSup?: true
    RefSync?: true
    idPub?: true
    statusPub?: true
    idUserLastRN?: true
    idUserLastES?: true
    tarifOM?: true
    tempsIntervention?: true
    codeInsee?: true
    latitude?: true
    longitude?: true
    nbCles?: true
    priorite?: true
    statutAPO?: true
    idContrat?: true
    numeroSociete?: true
    poids?: true
    largeur?: true
    longueur?: true
    hauteur?: true
    surface?: true
    volume?: true
  }

  export type DossierSumAggregateInputType = {
    idDossier?: true
    numero?: true
    idRefDossier?: true
    idBien?: true
    idEmployeIntervention?: true
    idEmployeCommande?: true
    idEmployeRedaction?: true
    idEmployerPublication?: true
    idStatut?: true
    idRdv?: true
    niveau?: true
    nbLocaux?: true
    nbNiveaux?: true
    quotePart?: true
    quotePartTotale?: true
    categorieRAAA?: true
    catERP?: true
    isIGH?: true
    occupant?: true
    IdUserCre?: true
    idUserMaj?: true
    idUserSup?: true
    RefSync?: true
    idPub?: true
    statusPub?: true
    idUserLastRN?: true
    idUserLastES?: true
    tarifOM?: true
    tempsIntervention?: true
    codeInsee?: true
    latitude?: true
    longitude?: true
    nbCles?: true
    priorite?: true
    statutAPO?: true
    idContrat?: true
    numeroSociete?: true
    poids?: true
    largeur?: true
    longueur?: true
    hauteur?: true
    surface?: true
    volume?: true
  }

  export type DossierMinAggregateInputType = {
    idDossier?: true
    numero?: true
    idRefDossier?: true
    idSiteGestion?: true
    idBien?: true
    idEmployeIntervention?: true
    idEmployeCommande?: true
    idEmployeRedaction?: true
    idEmployerPublication?: true
    reference?: true
    referenceExterne?: true
    dateCommande?: true
    dateRapport?: true
    datePublication?: true
    dateSignatureNotaire?: true
    idCadreMission?: true
    contactPlace?: true
    accompagnateur?: true
    verrouille?: true
    idStatut?: true
    dateDebutMission?: true
    dateFinMission?: true
    heureRDV?: true
    heureFin?: true
    idRdv?: true
    commentaire?: true
    codeBien?: true
    discBien?: true
    typeProprieteBatiment?: true
    typeProprieteLot?: true
    usageBien?: true
    isBati?: true
    articleNature?: true
    nature?: true
    nomBatiment?: true
    adresse?: true
    cptAdresse?: true
    codePostal?: true
    ville?: true
    departement?: true
    pays?: true
    numeroLot?: true
    niveau?: true
    etage?: true
    sectionCadastrale?: true
    parcelle?: true
    anneeConstruction?: true
    anneePermisConstruire?: true
    entree?: true
    escalier?: true
    porte?: true
    nbLocaux?: true
    nbNiveaux?: true
    quotePart?: true
    quotePartTotale?: true
    digicode?: true
    categorieRAAA?: true
    isMitoyen?: true
    isIOP?: true
    isERP?: true
    typeERP?: true
    catERP?: true
    isIGH?: true
    isAlimGazVille?: true
    isChauffageCollectif?: true
    isEcsCollectif?: true
    occupant?: true
    dateCre?: true
    dateMaj?: true
    dateSup?: true
    IdUserCre?: true
    idUserMaj?: true
    idUserSup?: true
    dateArchive?: true
    idResCroquisBuilder?: true
    idResMemoVocal?: true
    idResPhoto?: true
    previewDataPhoto?: true
    titrePhoto?: true
    RefSync?: true
    guidSdl?: true
    ChangeTime?: true
    LastSyncTime?: true
    idPub?: true
    datePub?: true
    statusPub?: true
    migratedData?: true
    DateLastRN?: true
    DateLastES?: true
    idUserLastRN?: true
    idUserLastES?: true
    tarifOM?: true
    isExpirationNomade?: true
    DateLastRNdata?: true
    DateLastESdata?: true
    tempsIntervention?: true
    isReglementSurSite?: true
    moyenPaiement?: true
    numeroCheque?: true
    banqueCheque?: true
    typeCB?: true
    numeroCB?: true
    dateExpCB?: true
    cryptoCB?: true
    numPermisConstruire?: true
    isPermisGroupe?: true
    dateArchiveData?: true
    isArchivable?: true
    numVoie?: true
    cptNumVoie?: true
    typeVoie?: true
    codeInsee?: true
    anneeRehabilitation?: true
    latitude?: true
    longitude?: true
    jeuMatrice?: true
    nbCles?: true
    infoCles?: true
    priorite?: true
    isAPO?: true
    etapeAPO?: true
    statutAPO?: true
    dateStartAPO?: true
    dateFinAPO?: true
    idContrat?: true
    justifOccupant?: true
    natureTravaux?: true
    idSociete?: true
    idSocieteIntervention?: true
    idSiteGestionIntervention?: true
    numeroSociete?: true
    nbAnxCroquisDynamique?: true
    idFiscal?: true
    categorieBien?: true
    poids?: true
    largeur?: true
    longueur?: true
    hauteur?: true
    constructeur?: true
    surface?: true
    volume?: true
    uniteVolume?: true
    commentaireIntervention?: true
    idMPOM?: true
    idMPPG?: true
    idMPNS?: true
    SiaResultMLAD?: true
    SiaResultRAA?: true
    numCopro?: true
    infoBAN?: true
  }

  export type DossierMaxAggregateInputType = {
    idDossier?: true
    numero?: true
    idRefDossier?: true
    idSiteGestion?: true
    idBien?: true
    idEmployeIntervention?: true
    idEmployeCommande?: true
    idEmployeRedaction?: true
    idEmployerPublication?: true
    reference?: true
    referenceExterne?: true
    dateCommande?: true
    dateRapport?: true
    datePublication?: true
    dateSignatureNotaire?: true
    idCadreMission?: true
    contactPlace?: true
    accompagnateur?: true
    verrouille?: true
    idStatut?: true
    dateDebutMission?: true
    dateFinMission?: true
    heureRDV?: true
    heureFin?: true
    idRdv?: true
    commentaire?: true
    codeBien?: true
    discBien?: true
    typeProprieteBatiment?: true
    typeProprieteLot?: true
    usageBien?: true
    isBati?: true
    articleNature?: true
    nature?: true
    nomBatiment?: true
    adresse?: true
    cptAdresse?: true
    codePostal?: true
    ville?: true
    departement?: true
    pays?: true
    numeroLot?: true
    niveau?: true
    etage?: true
    sectionCadastrale?: true
    parcelle?: true
    anneeConstruction?: true
    anneePermisConstruire?: true
    entree?: true
    escalier?: true
    porte?: true
    nbLocaux?: true
    nbNiveaux?: true
    quotePart?: true
    quotePartTotale?: true
    digicode?: true
    categorieRAAA?: true
    isMitoyen?: true
    isIOP?: true
    isERP?: true
    typeERP?: true
    catERP?: true
    isIGH?: true
    isAlimGazVille?: true
    isChauffageCollectif?: true
    isEcsCollectif?: true
    occupant?: true
    dateCre?: true
    dateMaj?: true
    dateSup?: true
    IdUserCre?: true
    idUserMaj?: true
    idUserSup?: true
    dateArchive?: true
    idResCroquisBuilder?: true
    idResMemoVocal?: true
    idResPhoto?: true
    previewDataPhoto?: true
    titrePhoto?: true
    RefSync?: true
    guidSdl?: true
    ChangeTime?: true
    LastSyncTime?: true
    idPub?: true
    datePub?: true
    statusPub?: true
    migratedData?: true
    DateLastRN?: true
    DateLastES?: true
    idUserLastRN?: true
    idUserLastES?: true
    tarifOM?: true
    isExpirationNomade?: true
    DateLastRNdata?: true
    DateLastESdata?: true
    tempsIntervention?: true
    isReglementSurSite?: true
    moyenPaiement?: true
    numeroCheque?: true
    banqueCheque?: true
    typeCB?: true
    numeroCB?: true
    dateExpCB?: true
    cryptoCB?: true
    numPermisConstruire?: true
    isPermisGroupe?: true
    dateArchiveData?: true
    isArchivable?: true
    numVoie?: true
    cptNumVoie?: true
    typeVoie?: true
    codeInsee?: true
    anneeRehabilitation?: true
    latitude?: true
    longitude?: true
    jeuMatrice?: true
    nbCles?: true
    infoCles?: true
    priorite?: true
    isAPO?: true
    etapeAPO?: true
    statutAPO?: true
    dateStartAPO?: true
    dateFinAPO?: true
    idContrat?: true
    justifOccupant?: true
    natureTravaux?: true
    idSociete?: true
    idSocieteIntervention?: true
    idSiteGestionIntervention?: true
    numeroSociete?: true
    nbAnxCroquisDynamique?: true
    idFiscal?: true
    categorieBien?: true
    poids?: true
    largeur?: true
    longueur?: true
    hauteur?: true
    constructeur?: true
    surface?: true
    volume?: true
    uniteVolume?: true
    commentaireIntervention?: true
    idMPOM?: true
    idMPPG?: true
    idMPNS?: true
    SiaResultMLAD?: true
    SiaResultRAA?: true
    numCopro?: true
    infoBAN?: true
  }

  export type DossierCountAggregateInputType = {
    idDossier?: true
    numero?: true
    idRefDossier?: true
    idSiteGestion?: true
    idBien?: true
    idEmployeIntervention?: true
    idEmployeCommande?: true
    idEmployeRedaction?: true
    idEmployerPublication?: true
    reference?: true
    referenceExterne?: true
    dateCommande?: true
    dateRapport?: true
    datePublication?: true
    dateSignatureNotaire?: true
    idCadreMission?: true
    contactPlace?: true
    accompagnateur?: true
    verrouille?: true
    idStatut?: true
    dateDebutMission?: true
    dateFinMission?: true
    heureRDV?: true
    heureFin?: true
    idRdv?: true
    commentaire?: true
    codeBien?: true
    discBien?: true
    typeProprieteBatiment?: true
    typeProprieteLot?: true
    usageBien?: true
    isBati?: true
    articleNature?: true
    nature?: true
    nomBatiment?: true
    adresse?: true
    cptAdresse?: true
    codePostal?: true
    ville?: true
    departement?: true
    pays?: true
    numeroLot?: true
    niveau?: true
    etage?: true
    sectionCadastrale?: true
    parcelle?: true
    anneeConstruction?: true
    anneePermisConstruire?: true
    entree?: true
    escalier?: true
    porte?: true
    nbLocaux?: true
    nbNiveaux?: true
    quotePart?: true
    quotePartTotale?: true
    digicode?: true
    categorieRAAA?: true
    isMitoyen?: true
    isIOP?: true
    isERP?: true
    typeERP?: true
    catERP?: true
    isIGH?: true
    isAlimGazVille?: true
    isChauffageCollectif?: true
    isEcsCollectif?: true
    occupant?: true
    dateCre?: true
    dateMaj?: true
    dateSup?: true
    IdUserCre?: true
    idUserMaj?: true
    idUserSup?: true
    dateArchive?: true
    idResCroquisBuilder?: true
    idResMemoVocal?: true
    idResPhoto?: true
    previewDataPhoto?: true
    titrePhoto?: true
    RefSync?: true
    guidSdl?: true
    ChangeTime?: true
    LastSyncTime?: true
    idPub?: true
    datePub?: true
    statusPub?: true
    migratedData?: true
    DateLastRN?: true
    DateLastES?: true
    idUserLastRN?: true
    idUserLastES?: true
    tarifOM?: true
    isExpirationNomade?: true
    DateLastRNdata?: true
    DateLastESdata?: true
    tempsIntervention?: true
    isReglementSurSite?: true
    moyenPaiement?: true
    numeroCheque?: true
    banqueCheque?: true
    typeCB?: true
    numeroCB?: true
    dateExpCB?: true
    cryptoCB?: true
    numPermisConstruire?: true
    isPermisGroupe?: true
    dateArchiveData?: true
    isArchivable?: true
    numVoie?: true
    cptNumVoie?: true
    typeVoie?: true
    codeInsee?: true
    anneeRehabilitation?: true
    latitude?: true
    longitude?: true
    jeuMatrice?: true
    nbCles?: true
    infoCles?: true
    priorite?: true
    isAPO?: true
    etapeAPO?: true
    statutAPO?: true
    dateStartAPO?: true
    dateFinAPO?: true
    idContrat?: true
    justifOccupant?: true
    natureTravaux?: true
    idSociete?: true
    idSocieteIntervention?: true
    idSiteGestionIntervention?: true
    numeroSociete?: true
    nbAnxCroquisDynamique?: true
    idFiscal?: true
    categorieBien?: true
    poids?: true
    largeur?: true
    longueur?: true
    hauteur?: true
    constructeur?: true
    surface?: true
    volume?: true
    uniteVolume?: true
    commentaireIntervention?: true
    idMPOM?: true
    idMPPG?: true
    idMPNS?: true
    SiaResultMLAD?: true
    SiaResultRAA?: true
    numCopro?: true
    infoBAN?: true
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
    idDossier: number
    numero: number
    idRefDossier: number | null
    idSiteGestion: string | null
    idBien: number | null
    idEmployeIntervention: number | null
    idEmployeCommande: number | null
    idEmployeRedaction: number | null
    idEmployerPublication: number | null
    reference: string | null
    referenceExterne: string | null
    dateCommande: Date | null
    dateRapport: Date | null
    datePublication: Date | null
    dateSignatureNotaire: Date | null
    idCadreMission: string | null
    contactPlace: string | null
    accompagnateur: string | null
    verrouille: boolean | null
    idStatut: number | null
    dateDebutMission: Date | null
    dateFinMission: Date | null
    heureRDV: Date | null
    heureFin: Date | null
    idRdv: number | null
    commentaire: string | null
    codeBien: string | null
    discBien: string | null
    typeProprieteBatiment: string | null
    typeProprieteLot: string | null
    usageBien: string | null
    isBati: boolean
    articleNature: string | null
    nature: string | null
    nomBatiment: string | null
    adresse: string | null
    cptAdresse: string | null
    codePostal: string | null
    ville: string | null
    departement: string | null
    pays: string | null
    numeroLot: string | null
    niveau: number | null
    etage: string | null
    sectionCadastrale: string | null
    parcelle: string | null
    anneeConstruction: string | null
    anneePermisConstruire: string | null
    entree: string | null
    escalier: string | null
    porte: string | null
    nbLocaux: number | null
    nbNiveaux: number | null
    quotePart: number | null
    quotePartTotale: number | null
    digicode: string | null
    categorieRAAA: number | null
    isMitoyen: boolean
    isIOP: boolean
    isERP: boolean
    typeERP: string | null
    catERP: number | null
    isIGH: number
    isAlimGazVille: boolean
    isChauffageCollectif: boolean
    isEcsCollectif: boolean
    occupant: number
    dateCre: Date | null
    dateMaj: Date | null
    dateSup: Date | null
    IdUserCre: number | null
    idUserMaj: number | null
    idUserSup: number | null
    dateArchive: Date | null
    idResCroquisBuilder: string | null
    idResMemoVocal: string | null
    idResPhoto: string | null
    previewDataPhoto: Buffer | null
    titrePhoto: string | null
    RefSync: number | null
    guidSdl: string | null
    ChangeTime: Date | null
    LastSyncTime: Date | null
    idPub: number | null
    datePub: Date | null
    statusPub: number
    migratedData: boolean | null
    DateLastRN: Date | null
    DateLastES: Date | null
    idUserLastRN: number | null
    idUserLastES: number | null
    tarifOM: Decimal | null
    isExpirationNomade: boolean | null
    DateLastRNdata: Date | null
    DateLastESdata: Date | null
    tempsIntervention: Decimal | null
    isReglementSurSite: boolean
    moyenPaiement: string | null
    numeroCheque: string | null
    banqueCheque: string | null
    typeCB: string | null
    numeroCB: string | null
    dateExpCB: Date | null
    cryptoCB: string | null
    numPermisConstruire: string | null
    isPermisGroupe: boolean
    dateArchiveData: Date | null
    isArchivable: boolean | null
    numVoie: string | null
    cptNumVoie: string | null
    typeVoie: string | null
    codeInsee: number | null
    anneeRehabilitation: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    jeuMatrice: string | null
    nbCles: number | null
    infoCles: string | null
    priorite: number
    isAPO: boolean
    etapeAPO: string | null
    statutAPO: number | null
    dateStartAPO: Date | null
    dateFinAPO: Date | null
    idContrat: number | null
    justifOccupant: string | null
    natureTravaux: string | null
    idSociete: string
    idSocieteIntervention: string
    idSiteGestionIntervention: string
    numeroSociete: number | null
    nbAnxCroquisDynamique: string | null
    idFiscal: string | null
    categorieBien: string | null
    poids: number | null
    largeur: number | null
    longueur: number | null
    hauteur: number | null
    constructeur: string | null
    surface: number | null
    volume: number | null
    uniteVolume: string | null
    commentaireIntervention: string | null
    idMPOM: string | null
    idMPPG: string | null
    idMPNS: string | null
    SiaResultMLAD: string | null
    SiaResultRAA: string | null
    numCopro: string | null
    infoBAN: string | null
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
    idDossier?: boolean
    numero?: boolean
    idRefDossier?: boolean
    idSiteGestion?: boolean
    idBien?: boolean
    idEmployeIntervention?: boolean
    idEmployeCommande?: boolean
    idEmployeRedaction?: boolean
    idEmployerPublication?: boolean
    reference?: boolean
    referenceExterne?: boolean
    dateCommande?: boolean
    dateRapport?: boolean
    datePublication?: boolean
    dateSignatureNotaire?: boolean
    idCadreMission?: boolean
    contactPlace?: boolean
    accompagnateur?: boolean
    verrouille?: boolean
    idStatut?: boolean
    dateDebutMission?: boolean
    dateFinMission?: boolean
    heureRDV?: boolean
    heureFin?: boolean
    idRdv?: boolean
    commentaire?: boolean
    codeBien?: boolean
    discBien?: boolean
    typeProprieteBatiment?: boolean
    typeProprieteLot?: boolean
    usageBien?: boolean
    isBati?: boolean
    articleNature?: boolean
    nature?: boolean
    nomBatiment?: boolean
    adresse?: boolean
    cptAdresse?: boolean
    codePostal?: boolean
    ville?: boolean
    departement?: boolean
    pays?: boolean
    numeroLot?: boolean
    niveau?: boolean
    etage?: boolean
    sectionCadastrale?: boolean
    parcelle?: boolean
    anneeConstruction?: boolean
    anneePermisConstruire?: boolean
    entree?: boolean
    escalier?: boolean
    porte?: boolean
    nbLocaux?: boolean
    nbNiveaux?: boolean
    quotePart?: boolean
    quotePartTotale?: boolean
    digicode?: boolean
    categorieRAAA?: boolean
    isMitoyen?: boolean
    isIOP?: boolean
    isERP?: boolean
    typeERP?: boolean
    catERP?: boolean
    isIGH?: boolean
    isAlimGazVille?: boolean
    isChauffageCollectif?: boolean
    isEcsCollectif?: boolean
    occupant?: boolean
    dateCre?: boolean
    dateMaj?: boolean
    dateSup?: boolean
    IdUserCre?: boolean
    idUserMaj?: boolean
    idUserSup?: boolean
    dateArchive?: boolean
    idResCroquisBuilder?: boolean
    idResMemoVocal?: boolean
    idResPhoto?: boolean
    previewDataPhoto?: boolean
    titrePhoto?: boolean
    RefSync?: boolean
    guidSdl?: boolean
    ChangeTime?: boolean
    LastSyncTime?: boolean
    idPub?: boolean
    datePub?: boolean
    statusPub?: boolean
    migratedData?: boolean
    DateLastRN?: boolean
    DateLastES?: boolean
    idUserLastRN?: boolean
    idUserLastES?: boolean
    tarifOM?: boolean
    isExpirationNomade?: boolean
    DateLastRNdata?: boolean
    DateLastESdata?: boolean
    tempsIntervention?: boolean
    isReglementSurSite?: boolean
    moyenPaiement?: boolean
    numeroCheque?: boolean
    banqueCheque?: boolean
    typeCB?: boolean
    numeroCB?: boolean
    dateExpCB?: boolean
    cryptoCB?: boolean
    numPermisConstruire?: boolean
    isPermisGroupe?: boolean
    dateArchiveData?: boolean
    isArchivable?: boolean
    numVoie?: boolean
    cptNumVoie?: boolean
    typeVoie?: boolean
    codeInsee?: boolean
    anneeRehabilitation?: boolean
    latitude?: boolean
    longitude?: boolean
    jeuMatrice?: boolean
    nbCles?: boolean
    infoCles?: boolean
    priorite?: boolean
    isAPO?: boolean
    etapeAPO?: boolean
    statutAPO?: boolean
    dateStartAPO?: boolean
    dateFinAPO?: boolean
    idContrat?: boolean
    justifOccupant?: boolean
    natureTravaux?: boolean
    idSociete?: boolean
    idSocieteIntervention?: boolean
    idSiteGestionIntervention?: boolean
    numeroSociete?: boolean
    nbAnxCroquisDynamique?: boolean
    idFiscal?: boolean
    categorieBien?: boolean
    poids?: boolean
    largeur?: boolean
    longueur?: boolean
    hauteur?: boolean
    constructeur?: boolean
    surface?: boolean
    volume?: boolean
    uniteVolume?: boolean
    commentaireIntervention?: boolean
    idMPOM?: boolean
    idMPPG?: boolean
    idMPNS?: boolean
    SiaResultMLAD?: boolean
    SiaResultRAA?: boolean
    numCopro?: boolean
    infoBAN?: boolean
    StatutDossier?: boolean | StatutDossierArgs
  }

  export type DossierInclude = {
    StatutDossier?: boolean | StatutDossierArgs
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
        P extends 'StatutDossier' ? StatutDossierGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'StatutDossier' ? StatutDossierGetPayload<S['select'][P]> | null :  P extends keyof Dossier ? Dossier[P] : never
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
     * // Only select the `idDossier`
     * const dossierWithIdDossierOnly = await prisma.dossier.findMany({ select: { idDossier: true } })
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

    StatutDossier<T extends StatutDossierArgs = {}>(args?: Subset<T, StatutDossierArgs>): CheckSelect<T, Prisma__StatutDossierClient<StatutDossier | null >, Prisma__StatutDossierClient<StatutDossierGetPayload<T> | null >>;

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
   * Model StatutDossier
   */


  export type AggregateStatutDossier = {
    _count: StatutDossierCountAggregateOutputType | null
    _avg: StatutDossierAvgAggregateOutputType | null
    _sum: StatutDossierSumAggregateOutputType | null
    _min: StatutDossierMinAggregateOutputType | null
    _max: StatutDossierMaxAggregateOutputType | null
  }

  export type StatutDossierAvgAggregateOutputType = {
    idStatut: number | null
    ordre: number | null
  }

  export type StatutDossierSumAggregateOutputType = {
    idStatut: number | null
    ordre: number | null
  }

  export type StatutDossierMinAggregateOutputType = {
    idStatut: number | null
    intitule: string | null
    ordre: number | null
    statutAuto: string | null
    UpdateTime: Date | null
    InsertTime: Date | null
  }

  export type StatutDossierMaxAggregateOutputType = {
    idStatut: number | null
    intitule: string | null
    ordre: number | null
    statutAuto: string | null
    UpdateTime: Date | null
    InsertTime: Date | null
  }

  export type StatutDossierCountAggregateOutputType = {
    idStatut: number
    intitule: number
    ordre: number
    statutAuto: number
    UpdateTime: number
    InsertTime: number
    _all: number
  }


  export type StatutDossierAvgAggregateInputType = {
    idStatut?: true
    ordre?: true
  }

  export type StatutDossierSumAggregateInputType = {
    idStatut?: true
    ordre?: true
  }

  export type StatutDossierMinAggregateInputType = {
    idStatut?: true
    intitule?: true
    ordre?: true
    statutAuto?: true
    UpdateTime?: true
    InsertTime?: true
  }

  export type StatutDossierMaxAggregateInputType = {
    idStatut?: true
    intitule?: true
    ordre?: true
    statutAuto?: true
    UpdateTime?: true
    InsertTime?: true
  }

  export type StatutDossierCountAggregateInputType = {
    idStatut?: true
    intitule?: true
    ordre?: true
    statutAuto?: true
    UpdateTime?: true
    InsertTime?: true
    _all?: true
  }

  export type StatutDossierAggregateArgs = {
    /**
     * Filter which StatutDossier to aggregate.
     * 
    **/
    where?: StatutDossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatutDossiers to fetch.
     * 
    **/
    orderBy?: Enumerable<StatutDossierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StatutDossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatutDossiers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatutDossiers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatutDossiers
    **/
    _count?: true | StatutDossierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatutDossierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatutDossierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatutDossierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatutDossierMaxAggregateInputType
  }

  export type GetStatutDossierAggregateType<T extends StatutDossierAggregateArgs> = {
        [P in keyof T & keyof AggregateStatutDossier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatutDossier[P]>
      : GetScalarType<T[P], AggregateStatutDossier[P]>
  }




  export type StatutDossierGroupByArgs = {
    where?: StatutDossierWhereInput
    orderBy?: Enumerable<StatutDossierOrderByWithAggregationInput>
    by: Array<StatutDossierScalarFieldEnum>
    having?: StatutDossierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatutDossierCountAggregateInputType | true
    _avg?: StatutDossierAvgAggregateInputType
    _sum?: StatutDossierSumAggregateInputType
    _min?: StatutDossierMinAggregateInputType
    _max?: StatutDossierMaxAggregateInputType
  }


  export type StatutDossierGroupByOutputType = {
    idStatut: number
    intitule: string | null
    ordre: number
    statutAuto: string | null
    UpdateTime: Date | null
    InsertTime: Date | null
    _count: StatutDossierCountAggregateOutputType | null
    _avg: StatutDossierAvgAggregateOutputType | null
    _sum: StatutDossierSumAggregateOutputType | null
    _min: StatutDossierMinAggregateOutputType | null
    _max: StatutDossierMaxAggregateOutputType | null
  }

  type GetStatutDossierGroupByPayload<T extends StatutDossierGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StatutDossierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatutDossierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatutDossierGroupByOutputType[P]>
            : GetScalarType<T[P], StatutDossierGroupByOutputType[P]>
        }
      >
    >


  export type StatutDossierSelect = {
    idStatut?: boolean
    intitule?: boolean
    ordre?: boolean
    statutAuto?: boolean
    UpdateTime?: boolean
    InsertTime?: boolean
    Dossier?: boolean | DossierFindManyArgs
    _count?: boolean | StatutDossierCountOutputTypeArgs
  }

  export type StatutDossierInclude = {
    Dossier?: boolean | DossierFindManyArgs
    _count?: boolean | StatutDossierCountOutputTypeArgs
  }

  export type StatutDossierGetPayload<
    S extends boolean | null | undefined | StatutDossierArgs,
    U = keyof S
      > = S extends true
        ? StatutDossier
    : S extends undefined
    ? never
    : S extends StatutDossierArgs | StatutDossierFindManyArgs
    ?'include' extends U
    ? StatutDossier  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Dossier' ? Array < DossierGetPayload<S['include'][P]>>  :
        P extends '_count' ? StatutDossierCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Dossier' ? Array < DossierGetPayload<S['select'][P]>>  :
        P extends '_count' ? StatutDossierCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof StatutDossier ? StatutDossier[P] : never
  } 
    : StatutDossier
  : StatutDossier


  type StatutDossierCountArgs = Merge<
    Omit<StatutDossierFindManyArgs, 'select' | 'include'> & {
      select?: StatutDossierCountAggregateInputType | true
    }
  >

  export interface StatutDossierDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one StatutDossier that matches the filter.
     * @param {StatutDossierFindUniqueArgs} args - Arguments to find a StatutDossier
     * @example
     * // Get one StatutDossier
     * const statutDossier = await prisma.statutDossier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StatutDossierFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StatutDossierFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StatutDossier'> extends True ? CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>> : CheckSelect<T, Prisma__StatutDossierClient<StatutDossier | null >, Prisma__StatutDossierClient<StatutDossierGetPayload<T> | null >>

    /**
     * Find the first StatutDossier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutDossierFindFirstArgs} args - Arguments to find a StatutDossier
     * @example
     * // Get one StatutDossier
     * const statutDossier = await prisma.statutDossier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StatutDossierFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StatutDossierFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StatutDossier'> extends True ? CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>> : CheckSelect<T, Prisma__StatutDossierClient<StatutDossier | null >, Prisma__StatutDossierClient<StatutDossierGetPayload<T> | null >>

    /**
     * Find zero or more StatutDossiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutDossierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatutDossiers
     * const statutDossiers = await prisma.statutDossier.findMany()
     * 
     * // Get first 10 StatutDossiers
     * const statutDossiers = await prisma.statutDossier.findMany({ take: 10 })
     * 
     * // Only select the `idStatut`
     * const statutDossierWithIdStatutOnly = await prisma.statutDossier.findMany({ select: { idStatut: true } })
     * 
    **/
    findMany<T extends StatutDossierFindManyArgs>(
      args?: SelectSubset<T, StatutDossierFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<StatutDossier>>, PrismaPromise<Array<StatutDossierGetPayload<T>>>>

    /**
     * Create a StatutDossier.
     * @param {StatutDossierCreateArgs} args - Arguments to create a StatutDossier.
     * @example
     * // Create one StatutDossier
     * const StatutDossier = await prisma.statutDossier.create({
     *   data: {
     *     // ... data to create a StatutDossier
     *   }
     * })
     * 
    **/
    create<T extends StatutDossierCreateArgs>(
      args: SelectSubset<T, StatutDossierCreateArgs>
    ): CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>>

    /**
     * Create many StatutDossiers.
     *     @param {StatutDossierCreateManyArgs} args - Arguments to create many StatutDossiers.
     *     @example
     *     // Create many StatutDossiers
     *     const statutDossier = await prisma.statutDossier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StatutDossierCreateManyArgs>(
      args?: SelectSubset<T, StatutDossierCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StatutDossier.
     * @param {StatutDossierDeleteArgs} args - Arguments to delete one StatutDossier.
     * @example
     * // Delete one StatutDossier
     * const StatutDossier = await prisma.statutDossier.delete({
     *   where: {
     *     // ... filter to delete one StatutDossier
     *   }
     * })
     * 
    **/
    delete<T extends StatutDossierDeleteArgs>(
      args: SelectSubset<T, StatutDossierDeleteArgs>
    ): CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>>

    /**
     * Update one StatutDossier.
     * @param {StatutDossierUpdateArgs} args - Arguments to update one StatutDossier.
     * @example
     * // Update one StatutDossier
     * const statutDossier = await prisma.statutDossier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StatutDossierUpdateArgs>(
      args: SelectSubset<T, StatutDossierUpdateArgs>
    ): CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>>

    /**
     * Delete zero or more StatutDossiers.
     * @param {StatutDossierDeleteManyArgs} args - Arguments to filter StatutDossiers to delete.
     * @example
     * // Delete a few StatutDossiers
     * const { count } = await prisma.statutDossier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StatutDossierDeleteManyArgs>(
      args?: SelectSubset<T, StatutDossierDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatutDossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutDossierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatutDossiers
     * const statutDossier = await prisma.statutDossier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StatutDossierUpdateManyArgs>(
      args: SelectSubset<T, StatutDossierUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StatutDossier.
     * @param {StatutDossierUpsertArgs} args - Arguments to update or create a StatutDossier.
     * @example
     * // Update or create a StatutDossier
     * const statutDossier = await prisma.statutDossier.upsert({
     *   create: {
     *     // ... data to create a StatutDossier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatutDossier we want to update
     *   }
     * })
    **/
    upsert<T extends StatutDossierUpsertArgs>(
      args: SelectSubset<T, StatutDossierUpsertArgs>
    ): CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>>

    /**
     * Find one StatutDossier that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StatutDossierFindUniqueOrThrowArgs} args - Arguments to find a StatutDossier
     * @example
     * // Get one StatutDossier
     * const statutDossier = await prisma.statutDossier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StatutDossierFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StatutDossierFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>>

    /**
     * Find the first StatutDossier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutDossierFindFirstOrThrowArgs} args - Arguments to find a StatutDossier
     * @example
     * // Get one StatutDossier
     * const statutDossier = await prisma.statutDossier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StatutDossierFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StatutDossierFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StatutDossierClient<StatutDossier>, Prisma__StatutDossierClient<StatutDossierGetPayload<T>>>

    /**
     * Count the number of StatutDossiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutDossierCountArgs} args - Arguments to filter StatutDossiers to count.
     * @example
     * // Count the number of StatutDossiers
     * const count = await prisma.statutDossier.count({
     *   where: {
     *     // ... the filter for the StatutDossiers we want to count
     *   }
     * })
    **/
    count<T extends StatutDossierCountArgs>(
      args?: Subset<T, StatutDossierCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatutDossierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatutDossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutDossierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatutDossierAggregateArgs>(args: Subset<T, StatutDossierAggregateArgs>): PrismaPromise<GetStatutDossierAggregateType<T>>

    /**
     * Group by StatutDossier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatutDossierGroupByArgs} args - Group by arguments.
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
      T extends StatutDossierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatutDossierGroupByArgs['orderBy'] }
        : { orderBy?: StatutDossierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatutDossierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatutDossierGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatutDossier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StatutDossierClient<T> implements PrismaPromise<T> {
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

    Dossier<T extends DossierFindManyArgs = {}>(args?: Subset<T, DossierFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Dossier>>, PrismaPromise<Array<DossierGetPayload<T>>>>;

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
   * StatutDossier base type for findUnique actions
   */
  export type StatutDossierFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
    /**
     * Filter, which StatutDossier to fetch.
     * 
    **/
    where: StatutDossierWhereUniqueInput
  }

  /**
   * StatutDossier: findUnique
   */
  export interface StatutDossierFindUniqueArgs extends StatutDossierFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StatutDossier base type for findFirst actions
   */
  export type StatutDossierFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
    /**
     * Filter, which StatutDossier to fetch.
     * 
    **/
    where?: StatutDossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatutDossiers to fetch.
     * 
    **/
    orderBy?: Enumerable<StatutDossierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatutDossiers.
     * 
    **/
    cursor?: StatutDossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatutDossiers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatutDossiers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatutDossiers.
     * 
    **/
    distinct?: Enumerable<StatutDossierScalarFieldEnum>
  }

  /**
   * StatutDossier: findFirst
   */
  export interface StatutDossierFindFirstArgs extends StatutDossierFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StatutDossier findMany
   */
  export type StatutDossierFindManyArgs = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
    /**
     * Filter, which StatutDossiers to fetch.
     * 
    **/
    where?: StatutDossierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatutDossiers to fetch.
     * 
    **/
    orderBy?: Enumerable<StatutDossierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatutDossiers.
     * 
    **/
    cursor?: StatutDossierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatutDossiers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatutDossiers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StatutDossierScalarFieldEnum>
  }


  /**
   * StatutDossier create
   */
  export type StatutDossierCreateArgs = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
    /**
     * The data needed to create a StatutDossier.
     * 
    **/
    data: XOR<StatutDossierCreateInput, StatutDossierUncheckedCreateInput>
  }


  /**
   * StatutDossier createMany
   */
  export type StatutDossierCreateManyArgs = {
    /**
     * The data used to create many StatutDossiers.
     * 
    **/
    data: Enumerable<StatutDossierCreateManyInput>
  }


  /**
   * StatutDossier update
   */
  export type StatutDossierUpdateArgs = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
    /**
     * The data needed to update a StatutDossier.
     * 
    **/
    data: XOR<StatutDossierUpdateInput, StatutDossierUncheckedUpdateInput>
    /**
     * Choose, which StatutDossier to update.
     * 
    **/
    where: StatutDossierWhereUniqueInput
  }


  /**
   * StatutDossier updateMany
   */
  export type StatutDossierUpdateManyArgs = {
    /**
     * The data used to update StatutDossiers.
     * 
    **/
    data: XOR<StatutDossierUpdateManyMutationInput, StatutDossierUncheckedUpdateManyInput>
    /**
     * Filter which StatutDossiers to update
     * 
    **/
    where?: StatutDossierWhereInput
  }


  /**
   * StatutDossier upsert
   */
  export type StatutDossierUpsertArgs = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
    /**
     * The filter to search for the StatutDossier to update in case it exists.
     * 
    **/
    where: StatutDossierWhereUniqueInput
    /**
     * In case the StatutDossier found by the `where` argument doesn't exist, create a new StatutDossier with this data.
     * 
    **/
    create: XOR<StatutDossierCreateInput, StatutDossierUncheckedCreateInput>
    /**
     * In case the StatutDossier was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StatutDossierUpdateInput, StatutDossierUncheckedUpdateInput>
  }


  /**
   * StatutDossier delete
   */
  export type StatutDossierDeleteArgs = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
    /**
     * Filter which StatutDossier to delete.
     * 
    **/
    where: StatutDossierWhereUniqueInput
  }


  /**
   * StatutDossier deleteMany
   */
  export type StatutDossierDeleteManyArgs = {
    /**
     * Filter which StatutDossiers to delete
     * 
    **/
    where?: StatutDossierWhereInput
  }


  /**
   * StatutDossier: findUniqueOrThrow
   */
  export type StatutDossierFindUniqueOrThrowArgs = StatutDossierFindUniqueArgsBase
      

  /**
   * StatutDossier: findFirstOrThrow
   */
  export type StatutDossierFindFirstOrThrowArgs = StatutDossierFindFirstArgsBase
      

  /**
   * StatutDossier without action
   */
  export type StatutDossierArgs = {
    /**
     * Select specific fields to fetch from the StatutDossier
     * 
    **/
    select?: StatutDossierSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StatutDossierInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DossierScalarFieldEnum: {
    idDossier: 'idDossier',
    numero: 'numero',
    idRefDossier: 'idRefDossier',
    idSiteGestion: 'idSiteGestion',
    idBien: 'idBien',
    idEmployeIntervention: 'idEmployeIntervention',
    idEmployeCommande: 'idEmployeCommande',
    idEmployeRedaction: 'idEmployeRedaction',
    idEmployerPublication: 'idEmployerPublication',
    reference: 'reference',
    referenceExterne: 'referenceExterne',
    dateCommande: 'dateCommande',
    dateRapport: 'dateRapport',
    datePublication: 'datePublication',
    dateSignatureNotaire: 'dateSignatureNotaire',
    idCadreMission: 'idCadreMission',
    contactPlace: 'contactPlace',
    accompagnateur: 'accompagnateur',
    verrouille: 'verrouille',
    idStatut: 'idStatut',
    dateDebutMission: 'dateDebutMission',
    dateFinMission: 'dateFinMission',
    heureRDV: 'heureRDV',
    heureFin: 'heureFin',
    idRdv: 'idRdv',
    commentaire: 'commentaire',
    codeBien: 'codeBien',
    discBien: 'discBien',
    typeProprieteBatiment: 'typeProprieteBatiment',
    typeProprieteLot: 'typeProprieteLot',
    usageBien: 'usageBien',
    isBati: 'isBati',
    articleNature: 'articleNature',
    nature: 'nature',
    nomBatiment: 'nomBatiment',
    adresse: 'adresse',
    cptAdresse: 'cptAdresse',
    codePostal: 'codePostal',
    ville: 'ville',
    departement: 'departement',
    pays: 'pays',
    numeroLot: 'numeroLot',
    niveau: 'niveau',
    etage: 'etage',
    sectionCadastrale: 'sectionCadastrale',
    parcelle: 'parcelle',
    anneeConstruction: 'anneeConstruction',
    anneePermisConstruire: 'anneePermisConstruire',
    entree: 'entree',
    escalier: 'escalier',
    porte: 'porte',
    nbLocaux: 'nbLocaux',
    nbNiveaux: 'nbNiveaux',
    quotePart: 'quotePart',
    quotePartTotale: 'quotePartTotale',
    digicode: 'digicode',
    categorieRAAA: 'categorieRAAA',
    isMitoyen: 'isMitoyen',
    isIOP: 'isIOP',
    isERP: 'isERP',
    typeERP: 'typeERP',
    catERP: 'catERP',
    isIGH: 'isIGH',
    isAlimGazVille: 'isAlimGazVille',
    isChauffageCollectif: 'isChauffageCollectif',
    isEcsCollectif: 'isEcsCollectif',
    occupant: 'occupant',
    dateCre: 'dateCre',
    dateMaj: 'dateMaj',
    dateSup: 'dateSup',
    IdUserCre: 'IdUserCre',
    idUserMaj: 'idUserMaj',
    idUserSup: 'idUserSup',
    dateArchive: 'dateArchive',
    idResCroquisBuilder: 'idResCroquisBuilder',
    idResMemoVocal: 'idResMemoVocal',
    idResPhoto: 'idResPhoto',
    previewDataPhoto: 'previewDataPhoto',
    titrePhoto: 'titrePhoto',
    RefSync: 'RefSync',
    guidSdl: 'guidSdl',
    ChangeTime: 'ChangeTime',
    LastSyncTime: 'LastSyncTime',
    idPub: 'idPub',
    datePub: 'datePub',
    statusPub: 'statusPub',
    migratedData: 'migratedData',
    DateLastRN: 'DateLastRN',
    DateLastES: 'DateLastES',
    idUserLastRN: 'idUserLastRN',
    idUserLastES: 'idUserLastES',
    tarifOM: 'tarifOM',
    isExpirationNomade: 'isExpirationNomade',
    DateLastRNdata: 'DateLastRNdata',
    DateLastESdata: 'DateLastESdata',
    tempsIntervention: 'tempsIntervention',
    isReglementSurSite: 'isReglementSurSite',
    moyenPaiement: 'moyenPaiement',
    numeroCheque: 'numeroCheque',
    banqueCheque: 'banqueCheque',
    typeCB: 'typeCB',
    numeroCB: 'numeroCB',
    dateExpCB: 'dateExpCB',
    cryptoCB: 'cryptoCB',
    numPermisConstruire: 'numPermisConstruire',
    isPermisGroupe: 'isPermisGroupe',
    dateArchiveData: 'dateArchiveData',
    isArchivable: 'isArchivable',
    numVoie: 'numVoie',
    cptNumVoie: 'cptNumVoie',
    typeVoie: 'typeVoie',
    codeInsee: 'codeInsee',
    anneeRehabilitation: 'anneeRehabilitation',
    latitude: 'latitude',
    longitude: 'longitude',
    jeuMatrice: 'jeuMatrice',
    nbCles: 'nbCles',
    infoCles: 'infoCles',
    priorite: 'priorite',
    isAPO: 'isAPO',
    etapeAPO: 'etapeAPO',
    statutAPO: 'statutAPO',
    dateStartAPO: 'dateStartAPO',
    dateFinAPO: 'dateFinAPO',
    idContrat: 'idContrat',
    justifOccupant: 'justifOccupant',
    natureTravaux: 'natureTravaux',
    idSociete: 'idSociete',
    idSocieteIntervention: 'idSocieteIntervention',
    idSiteGestionIntervention: 'idSiteGestionIntervention',
    numeroSociete: 'numeroSociete',
    nbAnxCroquisDynamique: 'nbAnxCroquisDynamique',
    idFiscal: 'idFiscal',
    categorieBien: 'categorieBien',
    poids: 'poids',
    largeur: 'largeur',
    longueur: 'longueur',
    hauteur: 'hauteur',
    constructeur: 'constructeur',
    surface: 'surface',
    volume: 'volume',
    uniteVolume: 'uniteVolume',
    commentaireIntervention: 'commentaireIntervention',
    idMPOM: 'idMPOM',
    idMPPG: 'idMPPG',
    idMPNS: 'idMPNS',
    SiaResultMLAD: 'SiaResultMLAD',
    SiaResultRAA: 'SiaResultRAA',
    numCopro: 'numCopro',
    infoBAN: 'infoBAN'
  };

  export type DossierScalarFieldEnum = (typeof DossierScalarFieldEnum)[keyof typeof DossierScalarFieldEnum]


  export const StatutDossierScalarFieldEnum: {
    idStatut: 'idStatut',
    intitule: 'intitule',
    ordre: 'ordre',
    statutAuto: 'statutAuto',
    UpdateTime: 'UpdateTime',
    InsertTime: 'InsertTime'
  };

  export type StatutDossierScalarFieldEnum = (typeof StatutDossierScalarFieldEnum)[keyof typeof StatutDossierScalarFieldEnum]


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
    idDossier?: IntFilter | number
    numero?: IntFilter | number
    idRefDossier?: IntNullableFilter | number | null
    idSiteGestion?: StringNullableFilter | string | null
    idBien?: IntNullableFilter | number | null
    idEmployeIntervention?: IntNullableFilter | number | null
    idEmployeCommande?: IntNullableFilter | number | null
    idEmployeRedaction?: IntNullableFilter | number | null
    idEmployerPublication?: IntNullableFilter | number | null
    reference?: StringNullableFilter | string | null
    referenceExterne?: StringNullableFilter | string | null
    dateCommande?: DateTimeNullableFilter | Date | string | null
    dateRapport?: DateTimeNullableFilter | Date | string | null
    datePublication?: DateTimeNullableFilter | Date | string | null
    dateSignatureNotaire?: DateTimeNullableFilter | Date | string | null
    idCadreMission?: StringNullableFilter | string | null
    contactPlace?: StringNullableFilter | string | null
    accompagnateur?: StringNullableFilter | string | null
    verrouille?: BoolNullableFilter | boolean | null
    idStatut?: IntNullableFilter | number | null
    dateDebutMission?: DateTimeNullableFilter | Date | string | null
    dateFinMission?: DateTimeNullableFilter | Date | string | null
    heureRDV?: DateTimeNullableFilter | Date | string | null
    heureFin?: DateTimeNullableFilter | Date | string | null
    idRdv?: IntNullableFilter | number | null
    commentaire?: StringNullableFilter | string | null
    codeBien?: StringNullableFilter | string | null
    discBien?: StringNullableFilter | string | null
    typeProprieteBatiment?: StringNullableFilter | string | null
    typeProprieteLot?: StringNullableFilter | string | null
    usageBien?: StringNullableFilter | string | null
    isBati?: BoolFilter | boolean
    articleNature?: StringNullableFilter | string | null
    nature?: StringNullableFilter | string | null
    nomBatiment?: StringNullableFilter | string | null
    adresse?: StringNullableFilter | string | null
    cptAdresse?: StringNullableFilter | string | null
    codePostal?: StringNullableFilter | string | null
    ville?: StringNullableFilter | string | null
    departement?: StringNullableFilter | string | null
    pays?: StringNullableFilter | string | null
    numeroLot?: StringNullableFilter | string | null
    niveau?: FloatNullableFilter | number | null
    etage?: StringNullableFilter | string | null
    sectionCadastrale?: StringNullableFilter | string | null
    parcelle?: StringNullableFilter | string | null
    anneeConstruction?: StringNullableFilter | string | null
    anneePermisConstruire?: StringNullableFilter | string | null
    entree?: StringNullableFilter | string | null
    escalier?: StringNullableFilter | string | null
    porte?: StringNullableFilter | string | null
    nbLocaux?: IntNullableFilter | number | null
    nbNiveaux?: IntNullableFilter | number | null
    quotePart?: IntNullableFilter | number | null
    quotePartTotale?: IntNullableFilter | number | null
    digicode?: StringNullableFilter | string | null
    categorieRAAA?: IntNullableFilter | number | null
    isMitoyen?: BoolFilter | boolean
    isIOP?: BoolFilter | boolean
    isERP?: BoolFilter | boolean
    typeERP?: StringNullableFilter | string | null
    catERP?: IntNullableFilter | number | null
    isIGH?: IntFilter | number
    isAlimGazVille?: BoolFilter | boolean
    isChauffageCollectif?: BoolFilter | boolean
    isEcsCollectif?: BoolFilter | boolean
    occupant?: IntFilter | number
    dateCre?: DateTimeNullableFilter | Date | string | null
    dateMaj?: DateTimeNullableFilter | Date | string | null
    dateSup?: DateTimeNullableFilter | Date | string | null
    IdUserCre?: IntNullableFilter | number | null
    idUserMaj?: IntNullableFilter | number | null
    idUserSup?: IntNullableFilter | number | null
    dateArchive?: DateTimeNullableFilter | Date | string | null
    idResCroquisBuilder?: StringNullableFilter | string | null
    idResMemoVocal?: StringNullableFilter | string | null
    idResPhoto?: StringNullableFilter | string | null
    previewDataPhoto?: BytesNullableFilter | Buffer | null
    titrePhoto?: StringNullableFilter | string | null
    RefSync?: IntNullableFilter | number | null
    guidSdl?: StringNullableFilter | string | null
    ChangeTime?: DateTimeNullableFilter | Date | string | null
    LastSyncTime?: DateTimeNullableFilter | Date | string | null
    idPub?: IntNullableFilter | number | null
    datePub?: DateTimeNullableFilter | Date | string | null
    statusPub?: IntFilter | number
    migratedData?: BoolNullableFilter | boolean | null
    DateLastRN?: DateTimeNullableFilter | Date | string | null
    DateLastES?: DateTimeNullableFilter | Date | string | null
    idUserLastRN?: IntNullableFilter | number | null
    idUserLastES?: IntNullableFilter | number | null
    tarifOM?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: BoolNullableFilter | boolean | null
    DateLastRNdata?: DateTimeNullableFilter | Date | string | null
    DateLastESdata?: DateTimeNullableFilter | Date | string | null
    tempsIntervention?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFilter | boolean
    moyenPaiement?: StringNullableFilter | string | null
    numeroCheque?: StringNullableFilter | string | null
    banqueCheque?: StringNullableFilter | string | null
    typeCB?: StringNullableFilter | string | null
    numeroCB?: StringNullableFilter | string | null
    dateExpCB?: DateTimeNullableFilter | Date | string | null
    cryptoCB?: StringNullableFilter | string | null
    numPermisConstruire?: StringNullableFilter | string | null
    isPermisGroupe?: BoolFilter | boolean
    dateArchiveData?: DateTimeNullableFilter | Date | string | null
    isArchivable?: BoolNullableFilter | boolean | null
    numVoie?: StringNullableFilter | string | null
    cptNumVoie?: StringNullableFilter | string | null
    typeVoie?: StringNullableFilter | string | null
    codeInsee?: IntNullableFilter | number | null
    anneeRehabilitation?: StringNullableFilter | string | null
    latitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: StringNullableFilter | string | null
    nbCles?: IntNullableFilter | number | null
    infoCles?: StringNullableFilter | string | null
    priorite?: IntFilter | number
    isAPO?: BoolFilter | boolean
    etapeAPO?: StringNullableFilter | string | null
    statutAPO?: IntNullableFilter | number | null
    dateStartAPO?: DateTimeNullableFilter | Date | string | null
    dateFinAPO?: DateTimeNullableFilter | Date | string | null
    idContrat?: IntNullableFilter | number | null
    justifOccupant?: StringNullableFilter | string | null
    natureTravaux?: StringNullableFilter | string | null
    idSociete?: StringFilter | string
    idSocieteIntervention?: StringFilter | string
    idSiteGestionIntervention?: StringFilter | string
    numeroSociete?: IntNullableFilter | number | null
    nbAnxCroquisDynamique?: StringNullableFilter | string | null
    idFiscal?: StringNullableFilter | string | null
    categorieBien?: StringNullableFilter | string | null
    poids?: FloatNullableFilter | number | null
    largeur?: FloatNullableFilter | number | null
    longueur?: FloatNullableFilter | number | null
    hauteur?: FloatNullableFilter | number | null
    constructeur?: StringNullableFilter | string | null
    surface?: FloatNullableFilter | number | null
    volume?: FloatNullableFilter | number | null
    uniteVolume?: StringNullableFilter | string | null
    commentaireIntervention?: StringNullableFilter | string | null
    idMPOM?: StringNullableFilter | string | null
    idMPPG?: StringNullableFilter | string | null
    idMPNS?: StringNullableFilter | string | null
    SiaResultMLAD?: StringNullableFilter | string | null
    SiaResultRAA?: StringNullableFilter | string | null
    numCopro?: StringNullableFilter | string | null
    infoBAN?: StringNullableFilter | string | null
    StatutDossier?: XOR<StatutDossierRelationFilter, StatutDossierWhereInput> | null
  }

  export type DossierOrderByWithRelationInput = {
    idDossier?: SortOrder
    numero?: SortOrder
    idRefDossier?: SortOrder
    idSiteGestion?: SortOrder
    idBien?: SortOrder
    idEmployeIntervention?: SortOrder
    idEmployeCommande?: SortOrder
    idEmployeRedaction?: SortOrder
    idEmployerPublication?: SortOrder
    reference?: SortOrder
    referenceExterne?: SortOrder
    dateCommande?: SortOrder
    dateRapport?: SortOrder
    datePublication?: SortOrder
    dateSignatureNotaire?: SortOrder
    idCadreMission?: SortOrder
    contactPlace?: SortOrder
    accompagnateur?: SortOrder
    verrouille?: SortOrder
    idStatut?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    heureRDV?: SortOrder
    heureFin?: SortOrder
    idRdv?: SortOrder
    commentaire?: SortOrder
    codeBien?: SortOrder
    discBien?: SortOrder
    typeProprieteBatiment?: SortOrder
    typeProprieteLot?: SortOrder
    usageBien?: SortOrder
    isBati?: SortOrder
    articleNature?: SortOrder
    nature?: SortOrder
    nomBatiment?: SortOrder
    adresse?: SortOrder
    cptAdresse?: SortOrder
    codePostal?: SortOrder
    ville?: SortOrder
    departement?: SortOrder
    pays?: SortOrder
    numeroLot?: SortOrder
    niveau?: SortOrder
    etage?: SortOrder
    sectionCadastrale?: SortOrder
    parcelle?: SortOrder
    anneeConstruction?: SortOrder
    anneePermisConstruire?: SortOrder
    entree?: SortOrder
    escalier?: SortOrder
    porte?: SortOrder
    nbLocaux?: SortOrder
    nbNiveaux?: SortOrder
    quotePart?: SortOrder
    quotePartTotale?: SortOrder
    digicode?: SortOrder
    categorieRAAA?: SortOrder
    isMitoyen?: SortOrder
    isIOP?: SortOrder
    isERP?: SortOrder
    typeERP?: SortOrder
    catERP?: SortOrder
    isIGH?: SortOrder
    isAlimGazVille?: SortOrder
    isChauffageCollectif?: SortOrder
    isEcsCollectif?: SortOrder
    occupant?: SortOrder
    dateCre?: SortOrder
    dateMaj?: SortOrder
    dateSup?: SortOrder
    IdUserCre?: SortOrder
    idUserMaj?: SortOrder
    idUserSup?: SortOrder
    dateArchive?: SortOrder
    idResCroquisBuilder?: SortOrder
    idResMemoVocal?: SortOrder
    idResPhoto?: SortOrder
    previewDataPhoto?: SortOrder
    titrePhoto?: SortOrder
    RefSync?: SortOrder
    guidSdl?: SortOrder
    ChangeTime?: SortOrder
    LastSyncTime?: SortOrder
    idPub?: SortOrder
    datePub?: SortOrder
    statusPub?: SortOrder
    migratedData?: SortOrder
    DateLastRN?: SortOrder
    DateLastES?: SortOrder
    idUserLastRN?: SortOrder
    idUserLastES?: SortOrder
    tarifOM?: SortOrder
    isExpirationNomade?: SortOrder
    DateLastRNdata?: SortOrder
    DateLastESdata?: SortOrder
    tempsIntervention?: SortOrder
    isReglementSurSite?: SortOrder
    moyenPaiement?: SortOrder
    numeroCheque?: SortOrder
    banqueCheque?: SortOrder
    typeCB?: SortOrder
    numeroCB?: SortOrder
    dateExpCB?: SortOrder
    cryptoCB?: SortOrder
    numPermisConstruire?: SortOrder
    isPermisGroupe?: SortOrder
    dateArchiveData?: SortOrder
    isArchivable?: SortOrder
    numVoie?: SortOrder
    cptNumVoie?: SortOrder
    typeVoie?: SortOrder
    codeInsee?: SortOrder
    anneeRehabilitation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    jeuMatrice?: SortOrder
    nbCles?: SortOrder
    infoCles?: SortOrder
    priorite?: SortOrder
    isAPO?: SortOrder
    etapeAPO?: SortOrder
    statutAPO?: SortOrder
    dateStartAPO?: SortOrder
    dateFinAPO?: SortOrder
    idContrat?: SortOrder
    justifOccupant?: SortOrder
    natureTravaux?: SortOrder
    idSociete?: SortOrder
    idSocieteIntervention?: SortOrder
    idSiteGestionIntervention?: SortOrder
    numeroSociete?: SortOrder
    nbAnxCroquisDynamique?: SortOrder
    idFiscal?: SortOrder
    categorieBien?: SortOrder
    poids?: SortOrder
    largeur?: SortOrder
    longueur?: SortOrder
    hauteur?: SortOrder
    constructeur?: SortOrder
    surface?: SortOrder
    volume?: SortOrder
    uniteVolume?: SortOrder
    commentaireIntervention?: SortOrder
    idMPOM?: SortOrder
    idMPPG?: SortOrder
    idMPNS?: SortOrder
    SiaResultMLAD?: SortOrder
    SiaResultRAA?: SortOrder
    numCopro?: SortOrder
    infoBAN?: SortOrder
    StatutDossier?: StatutDossierOrderByWithRelationInput
  }

  export type DossierWhereUniqueInput = {
    idDossier?: number
  }

  export type DossierOrderByWithAggregationInput = {
    idDossier?: SortOrder
    numero?: SortOrder
    idRefDossier?: SortOrder
    idSiteGestion?: SortOrder
    idBien?: SortOrder
    idEmployeIntervention?: SortOrder
    idEmployeCommande?: SortOrder
    idEmployeRedaction?: SortOrder
    idEmployerPublication?: SortOrder
    reference?: SortOrder
    referenceExterne?: SortOrder
    dateCommande?: SortOrder
    dateRapport?: SortOrder
    datePublication?: SortOrder
    dateSignatureNotaire?: SortOrder
    idCadreMission?: SortOrder
    contactPlace?: SortOrder
    accompagnateur?: SortOrder
    verrouille?: SortOrder
    idStatut?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    heureRDV?: SortOrder
    heureFin?: SortOrder
    idRdv?: SortOrder
    commentaire?: SortOrder
    codeBien?: SortOrder
    discBien?: SortOrder
    typeProprieteBatiment?: SortOrder
    typeProprieteLot?: SortOrder
    usageBien?: SortOrder
    isBati?: SortOrder
    articleNature?: SortOrder
    nature?: SortOrder
    nomBatiment?: SortOrder
    adresse?: SortOrder
    cptAdresse?: SortOrder
    codePostal?: SortOrder
    ville?: SortOrder
    departement?: SortOrder
    pays?: SortOrder
    numeroLot?: SortOrder
    niveau?: SortOrder
    etage?: SortOrder
    sectionCadastrale?: SortOrder
    parcelle?: SortOrder
    anneeConstruction?: SortOrder
    anneePermisConstruire?: SortOrder
    entree?: SortOrder
    escalier?: SortOrder
    porte?: SortOrder
    nbLocaux?: SortOrder
    nbNiveaux?: SortOrder
    quotePart?: SortOrder
    quotePartTotale?: SortOrder
    digicode?: SortOrder
    categorieRAAA?: SortOrder
    isMitoyen?: SortOrder
    isIOP?: SortOrder
    isERP?: SortOrder
    typeERP?: SortOrder
    catERP?: SortOrder
    isIGH?: SortOrder
    isAlimGazVille?: SortOrder
    isChauffageCollectif?: SortOrder
    isEcsCollectif?: SortOrder
    occupant?: SortOrder
    dateCre?: SortOrder
    dateMaj?: SortOrder
    dateSup?: SortOrder
    IdUserCre?: SortOrder
    idUserMaj?: SortOrder
    idUserSup?: SortOrder
    dateArchive?: SortOrder
    idResCroquisBuilder?: SortOrder
    idResMemoVocal?: SortOrder
    idResPhoto?: SortOrder
    previewDataPhoto?: SortOrder
    titrePhoto?: SortOrder
    RefSync?: SortOrder
    guidSdl?: SortOrder
    ChangeTime?: SortOrder
    LastSyncTime?: SortOrder
    idPub?: SortOrder
    datePub?: SortOrder
    statusPub?: SortOrder
    migratedData?: SortOrder
    DateLastRN?: SortOrder
    DateLastES?: SortOrder
    idUserLastRN?: SortOrder
    idUserLastES?: SortOrder
    tarifOM?: SortOrder
    isExpirationNomade?: SortOrder
    DateLastRNdata?: SortOrder
    DateLastESdata?: SortOrder
    tempsIntervention?: SortOrder
    isReglementSurSite?: SortOrder
    moyenPaiement?: SortOrder
    numeroCheque?: SortOrder
    banqueCheque?: SortOrder
    typeCB?: SortOrder
    numeroCB?: SortOrder
    dateExpCB?: SortOrder
    cryptoCB?: SortOrder
    numPermisConstruire?: SortOrder
    isPermisGroupe?: SortOrder
    dateArchiveData?: SortOrder
    isArchivable?: SortOrder
    numVoie?: SortOrder
    cptNumVoie?: SortOrder
    typeVoie?: SortOrder
    codeInsee?: SortOrder
    anneeRehabilitation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    jeuMatrice?: SortOrder
    nbCles?: SortOrder
    infoCles?: SortOrder
    priorite?: SortOrder
    isAPO?: SortOrder
    etapeAPO?: SortOrder
    statutAPO?: SortOrder
    dateStartAPO?: SortOrder
    dateFinAPO?: SortOrder
    idContrat?: SortOrder
    justifOccupant?: SortOrder
    natureTravaux?: SortOrder
    idSociete?: SortOrder
    idSocieteIntervention?: SortOrder
    idSiteGestionIntervention?: SortOrder
    numeroSociete?: SortOrder
    nbAnxCroquisDynamique?: SortOrder
    idFiscal?: SortOrder
    categorieBien?: SortOrder
    poids?: SortOrder
    largeur?: SortOrder
    longueur?: SortOrder
    hauteur?: SortOrder
    constructeur?: SortOrder
    surface?: SortOrder
    volume?: SortOrder
    uniteVolume?: SortOrder
    commentaireIntervention?: SortOrder
    idMPOM?: SortOrder
    idMPPG?: SortOrder
    idMPNS?: SortOrder
    SiaResultMLAD?: SortOrder
    SiaResultRAA?: SortOrder
    numCopro?: SortOrder
    infoBAN?: SortOrder
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
    idDossier?: IntWithAggregatesFilter | number
    numero?: IntWithAggregatesFilter | number
    idRefDossier?: IntNullableWithAggregatesFilter | number | null
    idSiteGestion?: StringNullableWithAggregatesFilter | string | null
    idBien?: IntNullableWithAggregatesFilter | number | null
    idEmployeIntervention?: IntNullableWithAggregatesFilter | number | null
    idEmployeCommande?: IntNullableWithAggregatesFilter | number | null
    idEmployeRedaction?: IntNullableWithAggregatesFilter | number | null
    idEmployerPublication?: IntNullableWithAggregatesFilter | number | null
    reference?: StringNullableWithAggregatesFilter | string | null
    referenceExterne?: StringNullableWithAggregatesFilter | string | null
    dateCommande?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateRapport?: DateTimeNullableWithAggregatesFilter | Date | string | null
    datePublication?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateSignatureNotaire?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idCadreMission?: StringNullableWithAggregatesFilter | string | null
    contactPlace?: StringNullableWithAggregatesFilter | string | null
    accompagnateur?: StringNullableWithAggregatesFilter | string | null
    verrouille?: BoolNullableWithAggregatesFilter | boolean | null
    idStatut?: IntNullableWithAggregatesFilter | number | null
    dateDebutMission?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateFinMission?: DateTimeNullableWithAggregatesFilter | Date | string | null
    heureRDV?: DateTimeNullableWithAggregatesFilter | Date | string | null
    heureFin?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idRdv?: IntNullableWithAggregatesFilter | number | null
    commentaire?: StringNullableWithAggregatesFilter | string | null
    codeBien?: StringNullableWithAggregatesFilter | string | null
    discBien?: StringNullableWithAggregatesFilter | string | null
    typeProprieteBatiment?: StringNullableWithAggregatesFilter | string | null
    typeProprieteLot?: StringNullableWithAggregatesFilter | string | null
    usageBien?: StringNullableWithAggregatesFilter | string | null
    isBati?: BoolWithAggregatesFilter | boolean
    articleNature?: StringNullableWithAggregatesFilter | string | null
    nature?: StringNullableWithAggregatesFilter | string | null
    nomBatiment?: StringNullableWithAggregatesFilter | string | null
    adresse?: StringNullableWithAggregatesFilter | string | null
    cptAdresse?: StringNullableWithAggregatesFilter | string | null
    codePostal?: StringNullableWithAggregatesFilter | string | null
    ville?: StringNullableWithAggregatesFilter | string | null
    departement?: StringNullableWithAggregatesFilter | string | null
    pays?: StringNullableWithAggregatesFilter | string | null
    numeroLot?: StringNullableWithAggregatesFilter | string | null
    niveau?: FloatNullableWithAggregatesFilter | number | null
    etage?: StringNullableWithAggregatesFilter | string | null
    sectionCadastrale?: StringNullableWithAggregatesFilter | string | null
    parcelle?: StringNullableWithAggregatesFilter | string | null
    anneeConstruction?: StringNullableWithAggregatesFilter | string | null
    anneePermisConstruire?: StringNullableWithAggregatesFilter | string | null
    entree?: StringNullableWithAggregatesFilter | string | null
    escalier?: StringNullableWithAggregatesFilter | string | null
    porte?: StringNullableWithAggregatesFilter | string | null
    nbLocaux?: IntNullableWithAggregatesFilter | number | null
    nbNiveaux?: IntNullableWithAggregatesFilter | number | null
    quotePart?: IntNullableWithAggregatesFilter | number | null
    quotePartTotale?: IntNullableWithAggregatesFilter | number | null
    digicode?: StringNullableWithAggregatesFilter | string | null
    categorieRAAA?: IntNullableWithAggregatesFilter | number | null
    isMitoyen?: BoolWithAggregatesFilter | boolean
    isIOP?: BoolWithAggregatesFilter | boolean
    isERP?: BoolWithAggregatesFilter | boolean
    typeERP?: StringNullableWithAggregatesFilter | string | null
    catERP?: IntNullableWithAggregatesFilter | number | null
    isIGH?: IntWithAggregatesFilter | number
    isAlimGazVille?: BoolWithAggregatesFilter | boolean
    isChauffageCollectif?: BoolWithAggregatesFilter | boolean
    isEcsCollectif?: BoolWithAggregatesFilter | boolean
    occupant?: IntWithAggregatesFilter | number
    dateCre?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateMaj?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateSup?: DateTimeNullableWithAggregatesFilter | Date | string | null
    IdUserCre?: IntNullableWithAggregatesFilter | number | null
    idUserMaj?: IntNullableWithAggregatesFilter | number | null
    idUserSup?: IntNullableWithAggregatesFilter | number | null
    dateArchive?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idResCroquisBuilder?: StringNullableWithAggregatesFilter | string | null
    idResMemoVocal?: StringNullableWithAggregatesFilter | string | null
    idResPhoto?: StringNullableWithAggregatesFilter | string | null
    previewDataPhoto?: BytesNullableWithAggregatesFilter | Buffer | null
    titrePhoto?: StringNullableWithAggregatesFilter | string | null
    RefSync?: IntNullableWithAggregatesFilter | number | null
    guidSdl?: StringNullableWithAggregatesFilter | string | null
    ChangeTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    LastSyncTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idPub?: IntNullableWithAggregatesFilter | number | null
    datePub?: DateTimeNullableWithAggregatesFilter | Date | string | null
    statusPub?: IntWithAggregatesFilter | number
    migratedData?: BoolNullableWithAggregatesFilter | boolean | null
    DateLastRN?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateLastES?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idUserLastRN?: IntNullableWithAggregatesFilter | number | null
    idUserLastES?: IntNullableWithAggregatesFilter | number | null
    tarifOM?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: BoolNullableWithAggregatesFilter | boolean | null
    DateLastRNdata?: DateTimeNullableWithAggregatesFilter | Date | string | null
    DateLastESdata?: DateTimeNullableWithAggregatesFilter | Date | string | null
    tempsIntervention?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolWithAggregatesFilter | boolean
    moyenPaiement?: StringNullableWithAggregatesFilter | string | null
    numeroCheque?: StringNullableWithAggregatesFilter | string | null
    banqueCheque?: StringNullableWithAggregatesFilter | string | null
    typeCB?: StringNullableWithAggregatesFilter | string | null
    numeroCB?: StringNullableWithAggregatesFilter | string | null
    dateExpCB?: DateTimeNullableWithAggregatesFilter | Date | string | null
    cryptoCB?: StringNullableWithAggregatesFilter | string | null
    numPermisConstruire?: StringNullableWithAggregatesFilter | string | null
    isPermisGroupe?: BoolWithAggregatesFilter | boolean
    dateArchiveData?: DateTimeNullableWithAggregatesFilter | Date | string | null
    isArchivable?: BoolNullableWithAggregatesFilter | boolean | null
    numVoie?: StringNullableWithAggregatesFilter | string | null
    cptNumVoie?: StringNullableWithAggregatesFilter | string | null
    typeVoie?: StringNullableWithAggregatesFilter | string | null
    codeInsee?: IntNullableWithAggregatesFilter | number | null
    anneeRehabilitation?: StringNullableWithAggregatesFilter | string | null
    latitude?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: StringNullableWithAggregatesFilter | string | null
    nbCles?: IntNullableWithAggregatesFilter | number | null
    infoCles?: StringNullableWithAggregatesFilter | string | null
    priorite?: IntWithAggregatesFilter | number
    isAPO?: BoolWithAggregatesFilter | boolean
    etapeAPO?: StringNullableWithAggregatesFilter | string | null
    statutAPO?: IntNullableWithAggregatesFilter | number | null
    dateStartAPO?: DateTimeNullableWithAggregatesFilter | Date | string | null
    dateFinAPO?: DateTimeNullableWithAggregatesFilter | Date | string | null
    idContrat?: IntNullableWithAggregatesFilter | number | null
    justifOccupant?: StringNullableWithAggregatesFilter | string | null
    natureTravaux?: StringNullableWithAggregatesFilter | string | null
    idSociete?: StringWithAggregatesFilter | string
    idSocieteIntervention?: StringWithAggregatesFilter | string
    idSiteGestionIntervention?: StringWithAggregatesFilter | string
    numeroSociete?: IntNullableWithAggregatesFilter | number | null
    nbAnxCroquisDynamique?: StringNullableWithAggregatesFilter | string | null
    idFiscal?: StringNullableWithAggregatesFilter | string | null
    categorieBien?: StringNullableWithAggregatesFilter | string | null
    poids?: FloatNullableWithAggregatesFilter | number | null
    largeur?: FloatNullableWithAggregatesFilter | number | null
    longueur?: FloatNullableWithAggregatesFilter | number | null
    hauteur?: FloatNullableWithAggregatesFilter | number | null
    constructeur?: StringNullableWithAggregatesFilter | string | null
    surface?: FloatNullableWithAggregatesFilter | number | null
    volume?: FloatNullableWithAggregatesFilter | number | null
    uniteVolume?: StringNullableWithAggregatesFilter | string | null
    commentaireIntervention?: StringNullableWithAggregatesFilter | string | null
    idMPOM?: StringNullableWithAggregatesFilter | string | null
    idMPPG?: StringNullableWithAggregatesFilter | string | null
    idMPNS?: StringNullableWithAggregatesFilter | string | null
    SiaResultMLAD?: StringNullableWithAggregatesFilter | string | null
    SiaResultRAA?: StringNullableWithAggregatesFilter | string | null
    numCopro?: StringNullableWithAggregatesFilter | string | null
    infoBAN?: StringNullableWithAggregatesFilter | string | null
  }

  export type StatutDossierWhereInput = {
    AND?: Enumerable<StatutDossierWhereInput>
    OR?: Enumerable<StatutDossierWhereInput>
    NOT?: Enumerable<StatutDossierWhereInput>
    idStatut?: IntFilter | number
    intitule?: StringNullableFilter | string | null
    ordre?: IntFilter | number
    statutAuto?: StringNullableFilter | string | null
    UpdateTime?: DateTimeNullableFilter | Date | string | null
    InsertTime?: DateTimeNullableFilter | Date | string | null
    Dossier?: DossierListRelationFilter
  }

  export type StatutDossierOrderByWithRelationInput = {
    idStatut?: SortOrder
    intitule?: SortOrder
    ordre?: SortOrder
    statutAuto?: SortOrder
    UpdateTime?: SortOrder
    InsertTime?: SortOrder
    Dossier?: DossierOrderByRelationAggregateInput
  }

  export type StatutDossierWhereUniqueInput = {
    idStatut?: number
  }

  export type StatutDossierOrderByWithAggregationInput = {
    idStatut?: SortOrder
    intitule?: SortOrder
    ordre?: SortOrder
    statutAuto?: SortOrder
    UpdateTime?: SortOrder
    InsertTime?: SortOrder
    _count?: StatutDossierCountOrderByAggregateInput
    _avg?: StatutDossierAvgOrderByAggregateInput
    _max?: StatutDossierMaxOrderByAggregateInput
    _min?: StatutDossierMinOrderByAggregateInput
    _sum?: StatutDossierSumOrderByAggregateInput
  }

  export type StatutDossierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StatutDossierScalarWhereWithAggregatesInput>
    OR?: Enumerable<StatutDossierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StatutDossierScalarWhereWithAggregatesInput>
    idStatut?: IntWithAggregatesFilter | number
    intitule?: StringNullableWithAggregatesFilter | string | null
    ordre?: IntWithAggregatesFilter | number
    statutAuto?: StringNullableWithAggregatesFilter | string | null
    UpdateTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    InsertTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type DossierCreateInput = {
    numero: number
    idRefDossier?: number | null
    idSiteGestion?: string | null
    idBien?: number | null
    idEmployeIntervention?: number | null
    idEmployeCommande?: number | null
    idEmployeRedaction?: number | null
    idEmployerPublication?: number | null
    reference?: string | null
    referenceExterne?: string | null
    dateCommande?: Date | string | null
    dateRapport?: Date | string | null
    datePublication?: Date | string | null
    dateSignatureNotaire?: Date | string | null
    idCadreMission?: string | null
    contactPlace?: string | null
    accompagnateur?: string | null
    verrouille?: boolean | null
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    heureRDV?: Date | string | null
    heureFin?: Date | string | null
    idRdv?: number | null
    commentaire?: string | null
    codeBien?: string | null
    discBien?: string | null
    typeProprieteBatiment?: string | null
    typeProprieteLot?: string | null
    usageBien?: string | null
    isBati: boolean
    articleNature?: string | null
    nature?: string | null
    nomBatiment?: string | null
    adresse?: string | null
    cptAdresse?: string | null
    codePostal?: string | null
    ville?: string | null
    departement?: string | null
    pays?: string | null
    numeroLot?: string | null
    niveau?: number | null
    etage?: string | null
    sectionCadastrale?: string | null
    parcelle?: string | null
    anneeConstruction?: string | null
    anneePermisConstruire?: string | null
    entree?: string | null
    escalier?: string | null
    porte?: string | null
    nbLocaux?: number | null
    nbNiveaux?: number | null
    quotePart?: number | null
    quotePartTotale?: number | null
    digicode?: string | null
    categorieRAAA?: number | null
    isMitoyen: boolean
    isIOP: boolean
    isERP: boolean
    typeERP?: string | null
    catERP?: number | null
    isIGH: number
    isAlimGazVille: boolean
    isChauffageCollectif: boolean
    isEcsCollectif: boolean
    occupant: number
    dateCre?: Date | string | null
    dateMaj?: Date | string | null
    dateSup?: Date | string | null
    IdUserCre?: number | null
    idUserMaj?: number | null
    idUserSup?: number | null
    dateArchive?: Date | string | null
    idResCroquisBuilder?: string | null
    idResMemoVocal?: string | null
    idResPhoto?: string | null
    previewDataPhoto?: Buffer | null
    titrePhoto?: string | null
    RefSync?: number | null
    guidSdl?: string | null
    ChangeTime?: Date | string | null
    LastSyncTime?: Date | string | null
    idPub?: number | null
    datePub?: Date | string | null
    statusPub: number
    migratedData?: boolean | null
    DateLastRN?: Date | string | null
    DateLastES?: Date | string | null
    idUserLastRN?: number | null
    idUserLastES?: number | null
    tarifOM?: Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: boolean | null
    DateLastRNdata?: Date | string | null
    DateLastESdata?: Date | string | null
    tempsIntervention?: Decimal | DecimalJsLike | number | string | null
    isReglementSurSite: boolean
    moyenPaiement?: string | null
    numeroCheque?: string | null
    banqueCheque?: string | null
    typeCB?: string | null
    numeroCB?: string | null
    dateExpCB?: Date | string | null
    cryptoCB?: string | null
    numPermisConstruire?: string | null
    isPermisGroupe: boolean
    dateArchiveData?: Date | string | null
    isArchivable?: boolean | null
    numVoie?: string | null
    cptNumVoie?: string | null
    typeVoie?: string | null
    codeInsee?: number | null
    anneeRehabilitation?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: string | null
    nbCles?: number | null
    infoCles?: string | null
    priorite: number
    isAPO: boolean
    etapeAPO?: string | null
    statutAPO?: number | null
    dateStartAPO?: Date | string | null
    dateFinAPO?: Date | string | null
    idContrat?: number | null
    justifOccupant?: string | null
    natureTravaux?: string | null
    idSociete: string
    idSocieteIntervention: string
    idSiteGestionIntervention: string
    numeroSociete?: number | null
    nbAnxCroquisDynamique?: string | null
    idFiscal?: string | null
    categorieBien?: string | null
    poids?: number | null
    largeur?: number | null
    longueur?: number | null
    hauteur?: number | null
    constructeur?: string | null
    surface?: number | null
    volume?: number | null
    uniteVolume?: string | null
    commentaireIntervention?: string | null
    idMPOM?: string | null
    idMPPG?: string | null
    idMPNS?: string | null
    SiaResultMLAD?: string | null
    SiaResultRAA?: string | null
    numCopro?: string | null
    infoBAN?: string | null
    StatutDossier?: StatutDossierCreateNestedOneWithoutDossierInput
  }

  export type DossierUncheckedCreateInput = {
    idDossier?: number
    numero: number
    idRefDossier?: number | null
    idSiteGestion?: string | null
    idBien?: number | null
    idEmployeIntervention?: number | null
    idEmployeCommande?: number | null
    idEmployeRedaction?: number | null
    idEmployerPublication?: number | null
    reference?: string | null
    referenceExterne?: string | null
    dateCommande?: Date | string | null
    dateRapport?: Date | string | null
    datePublication?: Date | string | null
    dateSignatureNotaire?: Date | string | null
    idCadreMission?: string | null
    contactPlace?: string | null
    accompagnateur?: string | null
    verrouille?: boolean | null
    idStatut?: number | null
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    heureRDV?: Date | string | null
    heureFin?: Date | string | null
    idRdv?: number | null
    commentaire?: string | null
    codeBien?: string | null
    discBien?: string | null
    typeProprieteBatiment?: string | null
    typeProprieteLot?: string | null
    usageBien?: string | null
    isBati: boolean
    articleNature?: string | null
    nature?: string | null
    nomBatiment?: string | null
    adresse?: string | null
    cptAdresse?: string | null
    codePostal?: string | null
    ville?: string | null
    departement?: string | null
    pays?: string | null
    numeroLot?: string | null
    niveau?: number | null
    etage?: string | null
    sectionCadastrale?: string | null
    parcelle?: string | null
    anneeConstruction?: string | null
    anneePermisConstruire?: string | null
    entree?: string | null
    escalier?: string | null
    porte?: string | null
    nbLocaux?: number | null
    nbNiveaux?: number | null
    quotePart?: number | null
    quotePartTotale?: number | null
    digicode?: string | null
    categorieRAAA?: number | null
    isMitoyen: boolean
    isIOP: boolean
    isERP: boolean
    typeERP?: string | null
    catERP?: number | null
    isIGH: number
    isAlimGazVille: boolean
    isChauffageCollectif: boolean
    isEcsCollectif: boolean
    occupant: number
    dateCre?: Date | string | null
    dateMaj?: Date | string | null
    dateSup?: Date | string | null
    IdUserCre?: number | null
    idUserMaj?: number | null
    idUserSup?: number | null
    dateArchive?: Date | string | null
    idResCroquisBuilder?: string | null
    idResMemoVocal?: string | null
    idResPhoto?: string | null
    previewDataPhoto?: Buffer | null
    titrePhoto?: string | null
    RefSync?: number | null
    guidSdl?: string | null
    ChangeTime?: Date | string | null
    LastSyncTime?: Date | string | null
    idPub?: number | null
    datePub?: Date | string | null
    statusPub: number
    migratedData?: boolean | null
    DateLastRN?: Date | string | null
    DateLastES?: Date | string | null
    idUserLastRN?: number | null
    idUserLastES?: number | null
    tarifOM?: Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: boolean | null
    DateLastRNdata?: Date | string | null
    DateLastESdata?: Date | string | null
    tempsIntervention?: Decimal | DecimalJsLike | number | string | null
    isReglementSurSite: boolean
    moyenPaiement?: string | null
    numeroCheque?: string | null
    banqueCheque?: string | null
    typeCB?: string | null
    numeroCB?: string | null
    dateExpCB?: Date | string | null
    cryptoCB?: string | null
    numPermisConstruire?: string | null
    isPermisGroupe: boolean
    dateArchiveData?: Date | string | null
    isArchivable?: boolean | null
    numVoie?: string | null
    cptNumVoie?: string | null
    typeVoie?: string | null
    codeInsee?: number | null
    anneeRehabilitation?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: string | null
    nbCles?: number | null
    infoCles?: string | null
    priorite: number
    isAPO: boolean
    etapeAPO?: string | null
    statutAPO?: number | null
    dateStartAPO?: Date | string | null
    dateFinAPO?: Date | string | null
    idContrat?: number | null
    justifOccupant?: string | null
    natureTravaux?: string | null
    idSociete: string
    idSocieteIntervention: string
    idSiteGestionIntervention: string
    numeroSociete?: number | null
    nbAnxCroquisDynamique?: string | null
    idFiscal?: string | null
    categorieBien?: string | null
    poids?: number | null
    largeur?: number | null
    longueur?: number | null
    hauteur?: number | null
    constructeur?: string | null
    surface?: number | null
    volume?: number | null
    uniteVolume?: string | null
    commentaireIntervention?: string | null
    idMPOM?: string | null
    idMPPG?: string | null
    idMPNS?: string | null
    SiaResultMLAD?: string | null
    SiaResultRAA?: string | null
    numCopro?: string | null
    infoBAN?: string | null
  }

  export type DossierUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    idRefDossier?: NullableIntFieldUpdateOperationsInput | number | null
    idSiteGestion?: NullableStringFieldUpdateOperationsInput | string | null
    idBien?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeCommande?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeRedaction?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployerPublication?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    referenceExterne?: NullableStringFieldUpdateOperationsInput | string | null
    dateCommande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRapport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureNotaire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCadreMission?: NullableStringFieldUpdateOperationsInput | string | null
    contactPlace?: NullableStringFieldUpdateOperationsInput | string | null
    accompagnateur?: NullableStringFieldUpdateOperationsInput | string | null
    verrouille?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureRDV?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idRdv?: NullableIntFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    codeBien?: NullableStringFieldUpdateOperationsInput | string | null
    discBien?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteLot?: NullableStringFieldUpdateOperationsInput | string | null
    usageBien?: NullableStringFieldUpdateOperationsInput | string | null
    isBati?: BoolFieldUpdateOperationsInput | boolean
    articleNature?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: NullableStringFieldUpdateOperationsInput | string | null
    nomBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    cptAdresse?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    pays?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLot?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableFloatFieldUpdateOperationsInput | number | null
    etage?: NullableStringFieldUpdateOperationsInput | string | null
    sectionCadastrale?: NullableStringFieldUpdateOperationsInput | string | null
    parcelle?: NullableStringFieldUpdateOperationsInput | string | null
    anneeConstruction?: NullableStringFieldUpdateOperationsInput | string | null
    anneePermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: NullableStringFieldUpdateOperationsInput | string | null
    escalier?: NullableStringFieldUpdateOperationsInput | string | null
    porte?: NullableStringFieldUpdateOperationsInput | string | null
    nbLocaux?: NullableIntFieldUpdateOperationsInput | number | null
    nbNiveaux?: NullableIntFieldUpdateOperationsInput | number | null
    quotePart?: NullableIntFieldUpdateOperationsInput | number | null
    quotePartTotale?: NullableIntFieldUpdateOperationsInput | number | null
    digicode?: NullableStringFieldUpdateOperationsInput | string | null
    categorieRAAA?: NullableIntFieldUpdateOperationsInput | number | null
    isMitoyen?: BoolFieldUpdateOperationsInput | boolean
    isIOP?: BoolFieldUpdateOperationsInput | boolean
    isERP?: BoolFieldUpdateOperationsInput | boolean
    typeERP?: NullableStringFieldUpdateOperationsInput | string | null
    catERP?: NullableIntFieldUpdateOperationsInput | number | null
    isIGH?: IntFieldUpdateOperationsInput | number
    isAlimGazVille?: BoolFieldUpdateOperationsInput | boolean
    isChauffageCollectif?: BoolFieldUpdateOperationsInput | boolean
    isEcsCollectif?: BoolFieldUpdateOperationsInput | boolean
    occupant?: IntFieldUpdateOperationsInput | number
    dateCre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateMaj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IdUserCre?: NullableIntFieldUpdateOperationsInput | number | null
    idUserMaj?: NullableIntFieldUpdateOperationsInput | number | null
    idUserSup?: NullableIntFieldUpdateOperationsInput | number | null
    dateArchive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idResCroquisBuilder?: NullableStringFieldUpdateOperationsInput | string | null
    idResMemoVocal?: NullableStringFieldUpdateOperationsInput | string | null
    idResPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    previewDataPhoto?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    titrePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    RefSync?: NullableIntFieldUpdateOperationsInput | number | null
    guidSdl?: NullableStringFieldUpdateOperationsInput | string | null
    ChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastSyncTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPub?: NullableIntFieldUpdateOperationsInput | number | null
    datePub?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusPub?: IntFieldUpdateOperationsInput | number
    migratedData?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastES?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idUserLastRN?: NullableIntFieldUpdateOperationsInput | number | null
    idUserLastES?: NullableIntFieldUpdateOperationsInput | number | null
    tarifOM?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRNdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastESdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsIntervention?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFieldUpdateOperationsInput | boolean
    moyenPaiement?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCheque?: NullableStringFieldUpdateOperationsInput | string | null
    banqueCheque?: NullableStringFieldUpdateOperationsInput | string | null
    typeCB?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCB?: NullableStringFieldUpdateOperationsInput | string | null
    dateExpCB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cryptoCB?: NullableStringFieldUpdateOperationsInput | string | null
    numPermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    isPermisGroupe?: BoolFieldUpdateOperationsInput | boolean
    dateArchiveData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchivable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    numVoie?: NullableStringFieldUpdateOperationsInput | string | null
    cptNumVoie?: NullableStringFieldUpdateOperationsInput | string | null
    typeVoie?: NullableStringFieldUpdateOperationsInput | string | null
    codeInsee?: NullableIntFieldUpdateOperationsInput | number | null
    anneeRehabilitation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: NullableStringFieldUpdateOperationsInput | string | null
    nbCles?: NullableIntFieldUpdateOperationsInput | number | null
    infoCles?: NullableStringFieldUpdateOperationsInput | string | null
    priorite?: IntFieldUpdateOperationsInput | number
    isAPO?: BoolFieldUpdateOperationsInput | boolean
    etapeAPO?: NullableStringFieldUpdateOperationsInput | string | null
    statutAPO?: NullableIntFieldUpdateOperationsInput | number | null
    dateStartAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idContrat?: NullableIntFieldUpdateOperationsInput | number | null
    justifOccupant?: NullableStringFieldUpdateOperationsInput | string | null
    natureTravaux?: NullableStringFieldUpdateOperationsInput | string | null
    idSociete?: StringFieldUpdateOperationsInput | string
    idSocieteIntervention?: StringFieldUpdateOperationsInput | string
    idSiteGestionIntervention?: StringFieldUpdateOperationsInput | string
    numeroSociete?: NullableIntFieldUpdateOperationsInput | number | null
    nbAnxCroquisDynamique?: NullableStringFieldUpdateOperationsInput | string | null
    idFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    categorieBien?: NullableStringFieldUpdateOperationsInput | string | null
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    largeur?: NullableFloatFieldUpdateOperationsInput | number | null
    longueur?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    constructeur?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    uniteVolume?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireIntervention?: NullableStringFieldUpdateOperationsInput | string | null
    idMPOM?: NullableStringFieldUpdateOperationsInput | string | null
    idMPPG?: NullableStringFieldUpdateOperationsInput | string | null
    idMPNS?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultMLAD?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultRAA?: NullableStringFieldUpdateOperationsInput | string | null
    numCopro?: NullableStringFieldUpdateOperationsInput | string | null
    infoBAN?: NullableStringFieldUpdateOperationsInput | string | null
    StatutDossier?: StatutDossierUpdateOneWithoutDossierNestedInput
  }

  export type DossierUncheckedUpdateInput = {
    idDossier?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    idRefDossier?: NullableIntFieldUpdateOperationsInput | number | null
    idSiteGestion?: NullableStringFieldUpdateOperationsInput | string | null
    idBien?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeCommande?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeRedaction?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployerPublication?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    referenceExterne?: NullableStringFieldUpdateOperationsInput | string | null
    dateCommande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRapport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureNotaire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCadreMission?: NullableStringFieldUpdateOperationsInput | string | null
    contactPlace?: NullableStringFieldUpdateOperationsInput | string | null
    accompagnateur?: NullableStringFieldUpdateOperationsInput | string | null
    verrouille?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idStatut?: NullableIntFieldUpdateOperationsInput | number | null
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureRDV?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idRdv?: NullableIntFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    codeBien?: NullableStringFieldUpdateOperationsInput | string | null
    discBien?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteLot?: NullableStringFieldUpdateOperationsInput | string | null
    usageBien?: NullableStringFieldUpdateOperationsInput | string | null
    isBati?: BoolFieldUpdateOperationsInput | boolean
    articleNature?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: NullableStringFieldUpdateOperationsInput | string | null
    nomBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    cptAdresse?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    pays?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLot?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableFloatFieldUpdateOperationsInput | number | null
    etage?: NullableStringFieldUpdateOperationsInput | string | null
    sectionCadastrale?: NullableStringFieldUpdateOperationsInput | string | null
    parcelle?: NullableStringFieldUpdateOperationsInput | string | null
    anneeConstruction?: NullableStringFieldUpdateOperationsInput | string | null
    anneePermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: NullableStringFieldUpdateOperationsInput | string | null
    escalier?: NullableStringFieldUpdateOperationsInput | string | null
    porte?: NullableStringFieldUpdateOperationsInput | string | null
    nbLocaux?: NullableIntFieldUpdateOperationsInput | number | null
    nbNiveaux?: NullableIntFieldUpdateOperationsInput | number | null
    quotePart?: NullableIntFieldUpdateOperationsInput | number | null
    quotePartTotale?: NullableIntFieldUpdateOperationsInput | number | null
    digicode?: NullableStringFieldUpdateOperationsInput | string | null
    categorieRAAA?: NullableIntFieldUpdateOperationsInput | number | null
    isMitoyen?: BoolFieldUpdateOperationsInput | boolean
    isIOP?: BoolFieldUpdateOperationsInput | boolean
    isERP?: BoolFieldUpdateOperationsInput | boolean
    typeERP?: NullableStringFieldUpdateOperationsInput | string | null
    catERP?: NullableIntFieldUpdateOperationsInput | number | null
    isIGH?: IntFieldUpdateOperationsInput | number
    isAlimGazVille?: BoolFieldUpdateOperationsInput | boolean
    isChauffageCollectif?: BoolFieldUpdateOperationsInput | boolean
    isEcsCollectif?: BoolFieldUpdateOperationsInput | boolean
    occupant?: IntFieldUpdateOperationsInput | number
    dateCre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateMaj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IdUserCre?: NullableIntFieldUpdateOperationsInput | number | null
    idUserMaj?: NullableIntFieldUpdateOperationsInput | number | null
    idUserSup?: NullableIntFieldUpdateOperationsInput | number | null
    dateArchive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idResCroquisBuilder?: NullableStringFieldUpdateOperationsInput | string | null
    idResMemoVocal?: NullableStringFieldUpdateOperationsInput | string | null
    idResPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    previewDataPhoto?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    titrePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    RefSync?: NullableIntFieldUpdateOperationsInput | number | null
    guidSdl?: NullableStringFieldUpdateOperationsInput | string | null
    ChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastSyncTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPub?: NullableIntFieldUpdateOperationsInput | number | null
    datePub?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusPub?: IntFieldUpdateOperationsInput | number
    migratedData?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastES?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idUserLastRN?: NullableIntFieldUpdateOperationsInput | number | null
    idUserLastES?: NullableIntFieldUpdateOperationsInput | number | null
    tarifOM?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRNdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastESdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsIntervention?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFieldUpdateOperationsInput | boolean
    moyenPaiement?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCheque?: NullableStringFieldUpdateOperationsInput | string | null
    banqueCheque?: NullableStringFieldUpdateOperationsInput | string | null
    typeCB?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCB?: NullableStringFieldUpdateOperationsInput | string | null
    dateExpCB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cryptoCB?: NullableStringFieldUpdateOperationsInput | string | null
    numPermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    isPermisGroupe?: BoolFieldUpdateOperationsInput | boolean
    dateArchiveData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchivable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    numVoie?: NullableStringFieldUpdateOperationsInput | string | null
    cptNumVoie?: NullableStringFieldUpdateOperationsInput | string | null
    typeVoie?: NullableStringFieldUpdateOperationsInput | string | null
    codeInsee?: NullableIntFieldUpdateOperationsInput | number | null
    anneeRehabilitation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: NullableStringFieldUpdateOperationsInput | string | null
    nbCles?: NullableIntFieldUpdateOperationsInput | number | null
    infoCles?: NullableStringFieldUpdateOperationsInput | string | null
    priorite?: IntFieldUpdateOperationsInput | number
    isAPO?: BoolFieldUpdateOperationsInput | boolean
    etapeAPO?: NullableStringFieldUpdateOperationsInput | string | null
    statutAPO?: NullableIntFieldUpdateOperationsInput | number | null
    dateStartAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idContrat?: NullableIntFieldUpdateOperationsInput | number | null
    justifOccupant?: NullableStringFieldUpdateOperationsInput | string | null
    natureTravaux?: NullableStringFieldUpdateOperationsInput | string | null
    idSociete?: StringFieldUpdateOperationsInput | string
    idSocieteIntervention?: StringFieldUpdateOperationsInput | string
    idSiteGestionIntervention?: StringFieldUpdateOperationsInput | string
    numeroSociete?: NullableIntFieldUpdateOperationsInput | number | null
    nbAnxCroquisDynamique?: NullableStringFieldUpdateOperationsInput | string | null
    idFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    categorieBien?: NullableStringFieldUpdateOperationsInput | string | null
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    largeur?: NullableFloatFieldUpdateOperationsInput | number | null
    longueur?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    constructeur?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    uniteVolume?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireIntervention?: NullableStringFieldUpdateOperationsInput | string | null
    idMPOM?: NullableStringFieldUpdateOperationsInput | string | null
    idMPPG?: NullableStringFieldUpdateOperationsInput | string | null
    idMPNS?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultMLAD?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultRAA?: NullableStringFieldUpdateOperationsInput | string | null
    numCopro?: NullableStringFieldUpdateOperationsInput | string | null
    infoBAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DossierCreateManyInput = {
    numero: number
    idRefDossier?: number | null
    idSiteGestion?: string | null
    idBien?: number | null
    idEmployeIntervention?: number | null
    idEmployeCommande?: number | null
    idEmployeRedaction?: number | null
    idEmployerPublication?: number | null
    reference?: string | null
    referenceExterne?: string | null
    dateCommande?: Date | string | null
    dateRapport?: Date | string | null
    datePublication?: Date | string | null
    dateSignatureNotaire?: Date | string | null
    idCadreMission?: string | null
    contactPlace?: string | null
    accompagnateur?: string | null
    verrouille?: boolean | null
    idStatut?: number | null
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    heureRDV?: Date | string | null
    heureFin?: Date | string | null
    idRdv?: number | null
    commentaire?: string | null
    codeBien?: string | null
    discBien?: string | null
    typeProprieteBatiment?: string | null
    typeProprieteLot?: string | null
    usageBien?: string | null
    isBati: boolean
    articleNature?: string | null
    nature?: string | null
    nomBatiment?: string | null
    adresse?: string | null
    cptAdresse?: string | null
    codePostal?: string | null
    ville?: string | null
    departement?: string | null
    pays?: string | null
    numeroLot?: string | null
    niveau?: number | null
    etage?: string | null
    sectionCadastrale?: string | null
    parcelle?: string | null
    anneeConstruction?: string | null
    anneePermisConstruire?: string | null
    entree?: string | null
    escalier?: string | null
    porte?: string | null
    nbLocaux?: number | null
    nbNiveaux?: number | null
    quotePart?: number | null
    quotePartTotale?: number | null
    digicode?: string | null
    categorieRAAA?: number | null
    isMitoyen: boolean
    isIOP: boolean
    isERP: boolean
    typeERP?: string | null
    catERP?: number | null
    isIGH: number
    isAlimGazVille: boolean
    isChauffageCollectif: boolean
    isEcsCollectif: boolean
    occupant: number
    dateCre?: Date | string | null
    dateMaj?: Date | string | null
    dateSup?: Date | string | null
    IdUserCre?: number | null
    idUserMaj?: number | null
    idUserSup?: number | null
    dateArchive?: Date | string | null
    idResCroquisBuilder?: string | null
    idResMemoVocal?: string | null
    idResPhoto?: string | null
    previewDataPhoto?: Buffer | null
    titrePhoto?: string | null
    RefSync?: number | null
    guidSdl?: string | null
    ChangeTime?: Date | string | null
    LastSyncTime?: Date | string | null
    idPub?: number | null
    datePub?: Date | string | null
    statusPub: number
    migratedData?: boolean | null
    DateLastRN?: Date | string | null
    DateLastES?: Date | string | null
    idUserLastRN?: number | null
    idUserLastES?: number | null
    tarifOM?: Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: boolean | null
    DateLastRNdata?: Date | string | null
    DateLastESdata?: Date | string | null
    tempsIntervention?: Decimal | DecimalJsLike | number | string | null
    isReglementSurSite: boolean
    moyenPaiement?: string | null
    numeroCheque?: string | null
    banqueCheque?: string | null
    typeCB?: string | null
    numeroCB?: string | null
    dateExpCB?: Date | string | null
    cryptoCB?: string | null
    numPermisConstruire?: string | null
    isPermisGroupe: boolean
    dateArchiveData?: Date | string | null
    isArchivable?: boolean | null
    numVoie?: string | null
    cptNumVoie?: string | null
    typeVoie?: string | null
    codeInsee?: number | null
    anneeRehabilitation?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: string | null
    nbCles?: number | null
    infoCles?: string | null
    priorite: number
    isAPO: boolean
    etapeAPO?: string | null
    statutAPO?: number | null
    dateStartAPO?: Date | string | null
    dateFinAPO?: Date | string | null
    idContrat?: number | null
    justifOccupant?: string | null
    natureTravaux?: string | null
    idSociete: string
    idSocieteIntervention: string
    idSiteGestionIntervention: string
    numeroSociete?: number | null
    nbAnxCroquisDynamique?: string | null
    idFiscal?: string | null
    categorieBien?: string | null
    poids?: number | null
    largeur?: number | null
    longueur?: number | null
    hauteur?: number | null
    constructeur?: string | null
    surface?: number | null
    volume?: number | null
    uniteVolume?: string | null
    commentaireIntervention?: string | null
    idMPOM?: string | null
    idMPPG?: string | null
    idMPNS?: string | null
    SiaResultMLAD?: string | null
    SiaResultRAA?: string | null
    numCopro?: string | null
    infoBAN?: string | null
  }

  export type DossierUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    idRefDossier?: NullableIntFieldUpdateOperationsInput | number | null
    idSiteGestion?: NullableStringFieldUpdateOperationsInput | string | null
    idBien?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeCommande?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeRedaction?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployerPublication?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    referenceExterne?: NullableStringFieldUpdateOperationsInput | string | null
    dateCommande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRapport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureNotaire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCadreMission?: NullableStringFieldUpdateOperationsInput | string | null
    contactPlace?: NullableStringFieldUpdateOperationsInput | string | null
    accompagnateur?: NullableStringFieldUpdateOperationsInput | string | null
    verrouille?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureRDV?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idRdv?: NullableIntFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    codeBien?: NullableStringFieldUpdateOperationsInput | string | null
    discBien?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteLot?: NullableStringFieldUpdateOperationsInput | string | null
    usageBien?: NullableStringFieldUpdateOperationsInput | string | null
    isBati?: BoolFieldUpdateOperationsInput | boolean
    articleNature?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: NullableStringFieldUpdateOperationsInput | string | null
    nomBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    cptAdresse?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    pays?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLot?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableFloatFieldUpdateOperationsInput | number | null
    etage?: NullableStringFieldUpdateOperationsInput | string | null
    sectionCadastrale?: NullableStringFieldUpdateOperationsInput | string | null
    parcelle?: NullableStringFieldUpdateOperationsInput | string | null
    anneeConstruction?: NullableStringFieldUpdateOperationsInput | string | null
    anneePermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: NullableStringFieldUpdateOperationsInput | string | null
    escalier?: NullableStringFieldUpdateOperationsInput | string | null
    porte?: NullableStringFieldUpdateOperationsInput | string | null
    nbLocaux?: NullableIntFieldUpdateOperationsInput | number | null
    nbNiveaux?: NullableIntFieldUpdateOperationsInput | number | null
    quotePart?: NullableIntFieldUpdateOperationsInput | number | null
    quotePartTotale?: NullableIntFieldUpdateOperationsInput | number | null
    digicode?: NullableStringFieldUpdateOperationsInput | string | null
    categorieRAAA?: NullableIntFieldUpdateOperationsInput | number | null
    isMitoyen?: BoolFieldUpdateOperationsInput | boolean
    isIOP?: BoolFieldUpdateOperationsInput | boolean
    isERP?: BoolFieldUpdateOperationsInput | boolean
    typeERP?: NullableStringFieldUpdateOperationsInput | string | null
    catERP?: NullableIntFieldUpdateOperationsInput | number | null
    isIGH?: IntFieldUpdateOperationsInput | number
    isAlimGazVille?: BoolFieldUpdateOperationsInput | boolean
    isChauffageCollectif?: BoolFieldUpdateOperationsInput | boolean
    isEcsCollectif?: BoolFieldUpdateOperationsInput | boolean
    occupant?: IntFieldUpdateOperationsInput | number
    dateCre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateMaj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IdUserCre?: NullableIntFieldUpdateOperationsInput | number | null
    idUserMaj?: NullableIntFieldUpdateOperationsInput | number | null
    idUserSup?: NullableIntFieldUpdateOperationsInput | number | null
    dateArchive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idResCroquisBuilder?: NullableStringFieldUpdateOperationsInput | string | null
    idResMemoVocal?: NullableStringFieldUpdateOperationsInput | string | null
    idResPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    previewDataPhoto?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    titrePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    RefSync?: NullableIntFieldUpdateOperationsInput | number | null
    guidSdl?: NullableStringFieldUpdateOperationsInput | string | null
    ChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastSyncTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPub?: NullableIntFieldUpdateOperationsInput | number | null
    datePub?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusPub?: IntFieldUpdateOperationsInput | number
    migratedData?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastES?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idUserLastRN?: NullableIntFieldUpdateOperationsInput | number | null
    idUserLastES?: NullableIntFieldUpdateOperationsInput | number | null
    tarifOM?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRNdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastESdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsIntervention?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFieldUpdateOperationsInput | boolean
    moyenPaiement?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCheque?: NullableStringFieldUpdateOperationsInput | string | null
    banqueCheque?: NullableStringFieldUpdateOperationsInput | string | null
    typeCB?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCB?: NullableStringFieldUpdateOperationsInput | string | null
    dateExpCB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cryptoCB?: NullableStringFieldUpdateOperationsInput | string | null
    numPermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    isPermisGroupe?: BoolFieldUpdateOperationsInput | boolean
    dateArchiveData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchivable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    numVoie?: NullableStringFieldUpdateOperationsInput | string | null
    cptNumVoie?: NullableStringFieldUpdateOperationsInput | string | null
    typeVoie?: NullableStringFieldUpdateOperationsInput | string | null
    codeInsee?: NullableIntFieldUpdateOperationsInput | number | null
    anneeRehabilitation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: NullableStringFieldUpdateOperationsInput | string | null
    nbCles?: NullableIntFieldUpdateOperationsInput | number | null
    infoCles?: NullableStringFieldUpdateOperationsInput | string | null
    priorite?: IntFieldUpdateOperationsInput | number
    isAPO?: BoolFieldUpdateOperationsInput | boolean
    etapeAPO?: NullableStringFieldUpdateOperationsInput | string | null
    statutAPO?: NullableIntFieldUpdateOperationsInput | number | null
    dateStartAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idContrat?: NullableIntFieldUpdateOperationsInput | number | null
    justifOccupant?: NullableStringFieldUpdateOperationsInput | string | null
    natureTravaux?: NullableStringFieldUpdateOperationsInput | string | null
    idSociete?: StringFieldUpdateOperationsInput | string
    idSocieteIntervention?: StringFieldUpdateOperationsInput | string
    idSiteGestionIntervention?: StringFieldUpdateOperationsInput | string
    numeroSociete?: NullableIntFieldUpdateOperationsInput | number | null
    nbAnxCroquisDynamique?: NullableStringFieldUpdateOperationsInput | string | null
    idFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    categorieBien?: NullableStringFieldUpdateOperationsInput | string | null
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    largeur?: NullableFloatFieldUpdateOperationsInput | number | null
    longueur?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    constructeur?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    uniteVolume?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireIntervention?: NullableStringFieldUpdateOperationsInput | string | null
    idMPOM?: NullableStringFieldUpdateOperationsInput | string | null
    idMPPG?: NullableStringFieldUpdateOperationsInput | string | null
    idMPNS?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultMLAD?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultRAA?: NullableStringFieldUpdateOperationsInput | string | null
    numCopro?: NullableStringFieldUpdateOperationsInput | string | null
    infoBAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DossierUncheckedUpdateManyInput = {
    idDossier?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    idRefDossier?: NullableIntFieldUpdateOperationsInput | number | null
    idSiteGestion?: NullableStringFieldUpdateOperationsInput | string | null
    idBien?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeCommande?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeRedaction?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployerPublication?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    referenceExterne?: NullableStringFieldUpdateOperationsInput | string | null
    dateCommande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRapport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureNotaire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCadreMission?: NullableStringFieldUpdateOperationsInput | string | null
    contactPlace?: NullableStringFieldUpdateOperationsInput | string | null
    accompagnateur?: NullableStringFieldUpdateOperationsInput | string | null
    verrouille?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idStatut?: NullableIntFieldUpdateOperationsInput | number | null
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureRDV?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idRdv?: NullableIntFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    codeBien?: NullableStringFieldUpdateOperationsInput | string | null
    discBien?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteLot?: NullableStringFieldUpdateOperationsInput | string | null
    usageBien?: NullableStringFieldUpdateOperationsInput | string | null
    isBati?: BoolFieldUpdateOperationsInput | boolean
    articleNature?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: NullableStringFieldUpdateOperationsInput | string | null
    nomBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    cptAdresse?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    pays?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLot?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableFloatFieldUpdateOperationsInput | number | null
    etage?: NullableStringFieldUpdateOperationsInput | string | null
    sectionCadastrale?: NullableStringFieldUpdateOperationsInput | string | null
    parcelle?: NullableStringFieldUpdateOperationsInput | string | null
    anneeConstruction?: NullableStringFieldUpdateOperationsInput | string | null
    anneePermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: NullableStringFieldUpdateOperationsInput | string | null
    escalier?: NullableStringFieldUpdateOperationsInput | string | null
    porte?: NullableStringFieldUpdateOperationsInput | string | null
    nbLocaux?: NullableIntFieldUpdateOperationsInput | number | null
    nbNiveaux?: NullableIntFieldUpdateOperationsInput | number | null
    quotePart?: NullableIntFieldUpdateOperationsInput | number | null
    quotePartTotale?: NullableIntFieldUpdateOperationsInput | number | null
    digicode?: NullableStringFieldUpdateOperationsInput | string | null
    categorieRAAA?: NullableIntFieldUpdateOperationsInput | number | null
    isMitoyen?: BoolFieldUpdateOperationsInput | boolean
    isIOP?: BoolFieldUpdateOperationsInput | boolean
    isERP?: BoolFieldUpdateOperationsInput | boolean
    typeERP?: NullableStringFieldUpdateOperationsInput | string | null
    catERP?: NullableIntFieldUpdateOperationsInput | number | null
    isIGH?: IntFieldUpdateOperationsInput | number
    isAlimGazVille?: BoolFieldUpdateOperationsInput | boolean
    isChauffageCollectif?: BoolFieldUpdateOperationsInput | boolean
    isEcsCollectif?: BoolFieldUpdateOperationsInput | boolean
    occupant?: IntFieldUpdateOperationsInput | number
    dateCre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateMaj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IdUserCre?: NullableIntFieldUpdateOperationsInput | number | null
    idUserMaj?: NullableIntFieldUpdateOperationsInput | number | null
    idUserSup?: NullableIntFieldUpdateOperationsInput | number | null
    dateArchive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idResCroquisBuilder?: NullableStringFieldUpdateOperationsInput | string | null
    idResMemoVocal?: NullableStringFieldUpdateOperationsInput | string | null
    idResPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    previewDataPhoto?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    titrePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    RefSync?: NullableIntFieldUpdateOperationsInput | number | null
    guidSdl?: NullableStringFieldUpdateOperationsInput | string | null
    ChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastSyncTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPub?: NullableIntFieldUpdateOperationsInput | number | null
    datePub?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusPub?: IntFieldUpdateOperationsInput | number
    migratedData?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastES?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idUserLastRN?: NullableIntFieldUpdateOperationsInput | number | null
    idUserLastES?: NullableIntFieldUpdateOperationsInput | number | null
    tarifOM?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRNdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastESdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsIntervention?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFieldUpdateOperationsInput | boolean
    moyenPaiement?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCheque?: NullableStringFieldUpdateOperationsInput | string | null
    banqueCheque?: NullableStringFieldUpdateOperationsInput | string | null
    typeCB?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCB?: NullableStringFieldUpdateOperationsInput | string | null
    dateExpCB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cryptoCB?: NullableStringFieldUpdateOperationsInput | string | null
    numPermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    isPermisGroupe?: BoolFieldUpdateOperationsInput | boolean
    dateArchiveData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchivable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    numVoie?: NullableStringFieldUpdateOperationsInput | string | null
    cptNumVoie?: NullableStringFieldUpdateOperationsInput | string | null
    typeVoie?: NullableStringFieldUpdateOperationsInput | string | null
    codeInsee?: NullableIntFieldUpdateOperationsInput | number | null
    anneeRehabilitation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: NullableStringFieldUpdateOperationsInput | string | null
    nbCles?: NullableIntFieldUpdateOperationsInput | number | null
    infoCles?: NullableStringFieldUpdateOperationsInput | string | null
    priorite?: IntFieldUpdateOperationsInput | number
    isAPO?: BoolFieldUpdateOperationsInput | boolean
    etapeAPO?: NullableStringFieldUpdateOperationsInput | string | null
    statutAPO?: NullableIntFieldUpdateOperationsInput | number | null
    dateStartAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idContrat?: NullableIntFieldUpdateOperationsInput | number | null
    justifOccupant?: NullableStringFieldUpdateOperationsInput | string | null
    natureTravaux?: NullableStringFieldUpdateOperationsInput | string | null
    idSociete?: StringFieldUpdateOperationsInput | string
    idSocieteIntervention?: StringFieldUpdateOperationsInput | string
    idSiteGestionIntervention?: StringFieldUpdateOperationsInput | string
    numeroSociete?: NullableIntFieldUpdateOperationsInput | number | null
    nbAnxCroquisDynamique?: NullableStringFieldUpdateOperationsInput | string | null
    idFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    categorieBien?: NullableStringFieldUpdateOperationsInput | string | null
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    largeur?: NullableFloatFieldUpdateOperationsInput | number | null
    longueur?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    constructeur?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    uniteVolume?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireIntervention?: NullableStringFieldUpdateOperationsInput | string | null
    idMPOM?: NullableStringFieldUpdateOperationsInput | string | null
    idMPPG?: NullableStringFieldUpdateOperationsInput | string | null
    idMPNS?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultMLAD?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultRAA?: NullableStringFieldUpdateOperationsInput | string | null
    numCopro?: NullableStringFieldUpdateOperationsInput | string | null
    infoBAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatutDossierCreateInput = {
    intitule?: string | null
    ordre: number
    statutAuto?: string | null
    UpdateTime?: Date | string | null
    InsertTime?: Date | string | null
    Dossier?: DossierCreateNestedManyWithoutStatutDossierInput
  }

  export type StatutDossierUncheckedCreateInput = {
    idStatut?: number
    intitule?: string | null
    ordre: number
    statutAuto?: string | null
    UpdateTime?: Date | string | null
    InsertTime?: Date | string | null
    Dossier?: DossierUncheckedCreateNestedManyWithoutStatutDossierInput
  }

  export type StatutDossierUpdateInput = {
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    statutAuto?: NullableStringFieldUpdateOperationsInput | string | null
    UpdateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InsertTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Dossier?: DossierUpdateManyWithoutStatutDossierNestedInput
  }

  export type StatutDossierUncheckedUpdateInput = {
    idStatut?: IntFieldUpdateOperationsInput | number
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    statutAuto?: NullableStringFieldUpdateOperationsInput | string | null
    UpdateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InsertTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Dossier?: DossierUncheckedUpdateManyWithoutStatutDossierNestedInput
  }

  export type StatutDossierCreateManyInput = {
    intitule?: string | null
    ordre: number
    statutAuto?: string | null
    UpdateTime?: Date | string | null
    InsertTime?: Date | string | null
  }

  export type StatutDossierUpdateManyMutationInput = {
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    statutAuto?: NullableStringFieldUpdateOperationsInput | string | null
    UpdateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InsertTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatutDossierUncheckedUpdateManyInput = {
    idStatut?: IntFieldUpdateOperationsInput | number
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    statutAuto?: NullableStringFieldUpdateOperationsInput | string | null
    UpdateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InsertTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StatutDossierRelationFilter = {
    is?: StatutDossierWhereInput | null
    isNot?: StatutDossierWhereInput | null
  }

  export type DossierCountOrderByAggregateInput = {
    idDossier?: SortOrder
    numero?: SortOrder
    idRefDossier?: SortOrder
    idSiteGestion?: SortOrder
    idBien?: SortOrder
    idEmployeIntervention?: SortOrder
    idEmployeCommande?: SortOrder
    idEmployeRedaction?: SortOrder
    idEmployerPublication?: SortOrder
    reference?: SortOrder
    referenceExterne?: SortOrder
    dateCommande?: SortOrder
    dateRapport?: SortOrder
    datePublication?: SortOrder
    dateSignatureNotaire?: SortOrder
    idCadreMission?: SortOrder
    contactPlace?: SortOrder
    accompagnateur?: SortOrder
    verrouille?: SortOrder
    idStatut?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    heureRDV?: SortOrder
    heureFin?: SortOrder
    idRdv?: SortOrder
    commentaire?: SortOrder
    codeBien?: SortOrder
    discBien?: SortOrder
    typeProprieteBatiment?: SortOrder
    typeProprieteLot?: SortOrder
    usageBien?: SortOrder
    isBati?: SortOrder
    articleNature?: SortOrder
    nature?: SortOrder
    nomBatiment?: SortOrder
    adresse?: SortOrder
    cptAdresse?: SortOrder
    codePostal?: SortOrder
    ville?: SortOrder
    departement?: SortOrder
    pays?: SortOrder
    numeroLot?: SortOrder
    niveau?: SortOrder
    etage?: SortOrder
    sectionCadastrale?: SortOrder
    parcelle?: SortOrder
    anneeConstruction?: SortOrder
    anneePermisConstruire?: SortOrder
    entree?: SortOrder
    escalier?: SortOrder
    porte?: SortOrder
    nbLocaux?: SortOrder
    nbNiveaux?: SortOrder
    quotePart?: SortOrder
    quotePartTotale?: SortOrder
    digicode?: SortOrder
    categorieRAAA?: SortOrder
    isMitoyen?: SortOrder
    isIOP?: SortOrder
    isERP?: SortOrder
    typeERP?: SortOrder
    catERP?: SortOrder
    isIGH?: SortOrder
    isAlimGazVille?: SortOrder
    isChauffageCollectif?: SortOrder
    isEcsCollectif?: SortOrder
    occupant?: SortOrder
    dateCre?: SortOrder
    dateMaj?: SortOrder
    dateSup?: SortOrder
    IdUserCre?: SortOrder
    idUserMaj?: SortOrder
    idUserSup?: SortOrder
    dateArchive?: SortOrder
    idResCroquisBuilder?: SortOrder
    idResMemoVocal?: SortOrder
    idResPhoto?: SortOrder
    previewDataPhoto?: SortOrder
    titrePhoto?: SortOrder
    RefSync?: SortOrder
    guidSdl?: SortOrder
    ChangeTime?: SortOrder
    LastSyncTime?: SortOrder
    idPub?: SortOrder
    datePub?: SortOrder
    statusPub?: SortOrder
    migratedData?: SortOrder
    DateLastRN?: SortOrder
    DateLastES?: SortOrder
    idUserLastRN?: SortOrder
    idUserLastES?: SortOrder
    tarifOM?: SortOrder
    isExpirationNomade?: SortOrder
    DateLastRNdata?: SortOrder
    DateLastESdata?: SortOrder
    tempsIntervention?: SortOrder
    isReglementSurSite?: SortOrder
    moyenPaiement?: SortOrder
    numeroCheque?: SortOrder
    banqueCheque?: SortOrder
    typeCB?: SortOrder
    numeroCB?: SortOrder
    dateExpCB?: SortOrder
    cryptoCB?: SortOrder
    numPermisConstruire?: SortOrder
    isPermisGroupe?: SortOrder
    dateArchiveData?: SortOrder
    isArchivable?: SortOrder
    numVoie?: SortOrder
    cptNumVoie?: SortOrder
    typeVoie?: SortOrder
    codeInsee?: SortOrder
    anneeRehabilitation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    jeuMatrice?: SortOrder
    nbCles?: SortOrder
    infoCles?: SortOrder
    priorite?: SortOrder
    isAPO?: SortOrder
    etapeAPO?: SortOrder
    statutAPO?: SortOrder
    dateStartAPO?: SortOrder
    dateFinAPO?: SortOrder
    idContrat?: SortOrder
    justifOccupant?: SortOrder
    natureTravaux?: SortOrder
    idSociete?: SortOrder
    idSocieteIntervention?: SortOrder
    idSiteGestionIntervention?: SortOrder
    numeroSociete?: SortOrder
    nbAnxCroquisDynamique?: SortOrder
    idFiscal?: SortOrder
    categorieBien?: SortOrder
    poids?: SortOrder
    largeur?: SortOrder
    longueur?: SortOrder
    hauteur?: SortOrder
    constructeur?: SortOrder
    surface?: SortOrder
    volume?: SortOrder
    uniteVolume?: SortOrder
    commentaireIntervention?: SortOrder
    idMPOM?: SortOrder
    idMPPG?: SortOrder
    idMPNS?: SortOrder
    SiaResultMLAD?: SortOrder
    SiaResultRAA?: SortOrder
    numCopro?: SortOrder
    infoBAN?: SortOrder
  }

  export type DossierAvgOrderByAggregateInput = {
    idDossier?: SortOrder
    numero?: SortOrder
    idRefDossier?: SortOrder
    idBien?: SortOrder
    idEmployeIntervention?: SortOrder
    idEmployeCommande?: SortOrder
    idEmployeRedaction?: SortOrder
    idEmployerPublication?: SortOrder
    idStatut?: SortOrder
    idRdv?: SortOrder
    niveau?: SortOrder
    nbLocaux?: SortOrder
    nbNiveaux?: SortOrder
    quotePart?: SortOrder
    quotePartTotale?: SortOrder
    categorieRAAA?: SortOrder
    catERP?: SortOrder
    isIGH?: SortOrder
    occupant?: SortOrder
    IdUserCre?: SortOrder
    idUserMaj?: SortOrder
    idUserSup?: SortOrder
    RefSync?: SortOrder
    idPub?: SortOrder
    statusPub?: SortOrder
    idUserLastRN?: SortOrder
    idUserLastES?: SortOrder
    tarifOM?: SortOrder
    tempsIntervention?: SortOrder
    codeInsee?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nbCles?: SortOrder
    priorite?: SortOrder
    statutAPO?: SortOrder
    idContrat?: SortOrder
    numeroSociete?: SortOrder
    poids?: SortOrder
    largeur?: SortOrder
    longueur?: SortOrder
    hauteur?: SortOrder
    surface?: SortOrder
    volume?: SortOrder
  }

  export type DossierMaxOrderByAggregateInput = {
    idDossier?: SortOrder
    numero?: SortOrder
    idRefDossier?: SortOrder
    idSiteGestion?: SortOrder
    idBien?: SortOrder
    idEmployeIntervention?: SortOrder
    idEmployeCommande?: SortOrder
    idEmployeRedaction?: SortOrder
    idEmployerPublication?: SortOrder
    reference?: SortOrder
    referenceExterne?: SortOrder
    dateCommande?: SortOrder
    dateRapport?: SortOrder
    datePublication?: SortOrder
    dateSignatureNotaire?: SortOrder
    idCadreMission?: SortOrder
    contactPlace?: SortOrder
    accompagnateur?: SortOrder
    verrouille?: SortOrder
    idStatut?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    heureRDV?: SortOrder
    heureFin?: SortOrder
    idRdv?: SortOrder
    commentaire?: SortOrder
    codeBien?: SortOrder
    discBien?: SortOrder
    typeProprieteBatiment?: SortOrder
    typeProprieteLot?: SortOrder
    usageBien?: SortOrder
    isBati?: SortOrder
    articleNature?: SortOrder
    nature?: SortOrder
    nomBatiment?: SortOrder
    adresse?: SortOrder
    cptAdresse?: SortOrder
    codePostal?: SortOrder
    ville?: SortOrder
    departement?: SortOrder
    pays?: SortOrder
    numeroLot?: SortOrder
    niveau?: SortOrder
    etage?: SortOrder
    sectionCadastrale?: SortOrder
    parcelle?: SortOrder
    anneeConstruction?: SortOrder
    anneePermisConstruire?: SortOrder
    entree?: SortOrder
    escalier?: SortOrder
    porte?: SortOrder
    nbLocaux?: SortOrder
    nbNiveaux?: SortOrder
    quotePart?: SortOrder
    quotePartTotale?: SortOrder
    digicode?: SortOrder
    categorieRAAA?: SortOrder
    isMitoyen?: SortOrder
    isIOP?: SortOrder
    isERP?: SortOrder
    typeERP?: SortOrder
    catERP?: SortOrder
    isIGH?: SortOrder
    isAlimGazVille?: SortOrder
    isChauffageCollectif?: SortOrder
    isEcsCollectif?: SortOrder
    occupant?: SortOrder
    dateCre?: SortOrder
    dateMaj?: SortOrder
    dateSup?: SortOrder
    IdUserCre?: SortOrder
    idUserMaj?: SortOrder
    idUserSup?: SortOrder
    dateArchive?: SortOrder
    idResCroquisBuilder?: SortOrder
    idResMemoVocal?: SortOrder
    idResPhoto?: SortOrder
    previewDataPhoto?: SortOrder
    titrePhoto?: SortOrder
    RefSync?: SortOrder
    guidSdl?: SortOrder
    ChangeTime?: SortOrder
    LastSyncTime?: SortOrder
    idPub?: SortOrder
    datePub?: SortOrder
    statusPub?: SortOrder
    migratedData?: SortOrder
    DateLastRN?: SortOrder
    DateLastES?: SortOrder
    idUserLastRN?: SortOrder
    idUserLastES?: SortOrder
    tarifOM?: SortOrder
    isExpirationNomade?: SortOrder
    DateLastRNdata?: SortOrder
    DateLastESdata?: SortOrder
    tempsIntervention?: SortOrder
    isReglementSurSite?: SortOrder
    moyenPaiement?: SortOrder
    numeroCheque?: SortOrder
    banqueCheque?: SortOrder
    typeCB?: SortOrder
    numeroCB?: SortOrder
    dateExpCB?: SortOrder
    cryptoCB?: SortOrder
    numPermisConstruire?: SortOrder
    isPermisGroupe?: SortOrder
    dateArchiveData?: SortOrder
    isArchivable?: SortOrder
    numVoie?: SortOrder
    cptNumVoie?: SortOrder
    typeVoie?: SortOrder
    codeInsee?: SortOrder
    anneeRehabilitation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    jeuMatrice?: SortOrder
    nbCles?: SortOrder
    infoCles?: SortOrder
    priorite?: SortOrder
    isAPO?: SortOrder
    etapeAPO?: SortOrder
    statutAPO?: SortOrder
    dateStartAPO?: SortOrder
    dateFinAPO?: SortOrder
    idContrat?: SortOrder
    justifOccupant?: SortOrder
    natureTravaux?: SortOrder
    idSociete?: SortOrder
    idSocieteIntervention?: SortOrder
    idSiteGestionIntervention?: SortOrder
    numeroSociete?: SortOrder
    nbAnxCroquisDynamique?: SortOrder
    idFiscal?: SortOrder
    categorieBien?: SortOrder
    poids?: SortOrder
    largeur?: SortOrder
    longueur?: SortOrder
    hauteur?: SortOrder
    constructeur?: SortOrder
    surface?: SortOrder
    volume?: SortOrder
    uniteVolume?: SortOrder
    commentaireIntervention?: SortOrder
    idMPOM?: SortOrder
    idMPPG?: SortOrder
    idMPNS?: SortOrder
    SiaResultMLAD?: SortOrder
    SiaResultRAA?: SortOrder
    numCopro?: SortOrder
    infoBAN?: SortOrder
  }

  export type DossierMinOrderByAggregateInput = {
    idDossier?: SortOrder
    numero?: SortOrder
    idRefDossier?: SortOrder
    idSiteGestion?: SortOrder
    idBien?: SortOrder
    idEmployeIntervention?: SortOrder
    idEmployeCommande?: SortOrder
    idEmployeRedaction?: SortOrder
    idEmployerPublication?: SortOrder
    reference?: SortOrder
    referenceExterne?: SortOrder
    dateCommande?: SortOrder
    dateRapport?: SortOrder
    datePublication?: SortOrder
    dateSignatureNotaire?: SortOrder
    idCadreMission?: SortOrder
    contactPlace?: SortOrder
    accompagnateur?: SortOrder
    verrouille?: SortOrder
    idStatut?: SortOrder
    dateDebutMission?: SortOrder
    dateFinMission?: SortOrder
    heureRDV?: SortOrder
    heureFin?: SortOrder
    idRdv?: SortOrder
    commentaire?: SortOrder
    codeBien?: SortOrder
    discBien?: SortOrder
    typeProprieteBatiment?: SortOrder
    typeProprieteLot?: SortOrder
    usageBien?: SortOrder
    isBati?: SortOrder
    articleNature?: SortOrder
    nature?: SortOrder
    nomBatiment?: SortOrder
    adresse?: SortOrder
    cptAdresse?: SortOrder
    codePostal?: SortOrder
    ville?: SortOrder
    departement?: SortOrder
    pays?: SortOrder
    numeroLot?: SortOrder
    niveau?: SortOrder
    etage?: SortOrder
    sectionCadastrale?: SortOrder
    parcelle?: SortOrder
    anneeConstruction?: SortOrder
    anneePermisConstruire?: SortOrder
    entree?: SortOrder
    escalier?: SortOrder
    porte?: SortOrder
    nbLocaux?: SortOrder
    nbNiveaux?: SortOrder
    quotePart?: SortOrder
    quotePartTotale?: SortOrder
    digicode?: SortOrder
    categorieRAAA?: SortOrder
    isMitoyen?: SortOrder
    isIOP?: SortOrder
    isERP?: SortOrder
    typeERP?: SortOrder
    catERP?: SortOrder
    isIGH?: SortOrder
    isAlimGazVille?: SortOrder
    isChauffageCollectif?: SortOrder
    isEcsCollectif?: SortOrder
    occupant?: SortOrder
    dateCre?: SortOrder
    dateMaj?: SortOrder
    dateSup?: SortOrder
    IdUserCre?: SortOrder
    idUserMaj?: SortOrder
    idUserSup?: SortOrder
    dateArchive?: SortOrder
    idResCroquisBuilder?: SortOrder
    idResMemoVocal?: SortOrder
    idResPhoto?: SortOrder
    previewDataPhoto?: SortOrder
    titrePhoto?: SortOrder
    RefSync?: SortOrder
    guidSdl?: SortOrder
    ChangeTime?: SortOrder
    LastSyncTime?: SortOrder
    idPub?: SortOrder
    datePub?: SortOrder
    statusPub?: SortOrder
    migratedData?: SortOrder
    DateLastRN?: SortOrder
    DateLastES?: SortOrder
    idUserLastRN?: SortOrder
    idUserLastES?: SortOrder
    tarifOM?: SortOrder
    isExpirationNomade?: SortOrder
    DateLastRNdata?: SortOrder
    DateLastESdata?: SortOrder
    tempsIntervention?: SortOrder
    isReglementSurSite?: SortOrder
    moyenPaiement?: SortOrder
    numeroCheque?: SortOrder
    banqueCheque?: SortOrder
    typeCB?: SortOrder
    numeroCB?: SortOrder
    dateExpCB?: SortOrder
    cryptoCB?: SortOrder
    numPermisConstruire?: SortOrder
    isPermisGroupe?: SortOrder
    dateArchiveData?: SortOrder
    isArchivable?: SortOrder
    numVoie?: SortOrder
    cptNumVoie?: SortOrder
    typeVoie?: SortOrder
    codeInsee?: SortOrder
    anneeRehabilitation?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    jeuMatrice?: SortOrder
    nbCles?: SortOrder
    infoCles?: SortOrder
    priorite?: SortOrder
    isAPO?: SortOrder
    etapeAPO?: SortOrder
    statutAPO?: SortOrder
    dateStartAPO?: SortOrder
    dateFinAPO?: SortOrder
    idContrat?: SortOrder
    justifOccupant?: SortOrder
    natureTravaux?: SortOrder
    idSociete?: SortOrder
    idSocieteIntervention?: SortOrder
    idSiteGestionIntervention?: SortOrder
    numeroSociete?: SortOrder
    nbAnxCroquisDynamique?: SortOrder
    idFiscal?: SortOrder
    categorieBien?: SortOrder
    poids?: SortOrder
    largeur?: SortOrder
    longueur?: SortOrder
    hauteur?: SortOrder
    constructeur?: SortOrder
    surface?: SortOrder
    volume?: SortOrder
    uniteVolume?: SortOrder
    commentaireIntervention?: SortOrder
    idMPOM?: SortOrder
    idMPPG?: SortOrder
    idMPNS?: SortOrder
    SiaResultMLAD?: SortOrder
    SiaResultRAA?: SortOrder
    numCopro?: SortOrder
    infoBAN?: SortOrder
  }

  export type DossierSumOrderByAggregateInput = {
    idDossier?: SortOrder
    numero?: SortOrder
    idRefDossier?: SortOrder
    idBien?: SortOrder
    idEmployeIntervention?: SortOrder
    idEmployeCommande?: SortOrder
    idEmployeRedaction?: SortOrder
    idEmployerPublication?: SortOrder
    idStatut?: SortOrder
    idRdv?: SortOrder
    niveau?: SortOrder
    nbLocaux?: SortOrder
    nbNiveaux?: SortOrder
    quotePart?: SortOrder
    quotePartTotale?: SortOrder
    categorieRAAA?: SortOrder
    catERP?: SortOrder
    isIGH?: SortOrder
    occupant?: SortOrder
    IdUserCre?: SortOrder
    idUserMaj?: SortOrder
    idUserSup?: SortOrder
    RefSync?: SortOrder
    idPub?: SortOrder
    statusPub?: SortOrder
    idUserLastRN?: SortOrder
    idUserLastES?: SortOrder
    tarifOM?: SortOrder
    tempsIntervention?: SortOrder
    codeInsee?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nbCles?: SortOrder
    priorite?: SortOrder
    statutAPO?: SortOrder
    idContrat?: SortOrder
    numeroSociete?: SortOrder
    poids?: SortOrder
    largeur?: SortOrder
    longueur?: SortOrder
    hauteur?: SortOrder
    surface?: SortOrder
    volume?: SortOrder
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

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type DossierListRelationFilter = {
    every?: DossierWhereInput
    some?: DossierWhereInput
    none?: DossierWhereInput
  }

  export type DossierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatutDossierCountOrderByAggregateInput = {
    idStatut?: SortOrder
    intitule?: SortOrder
    ordre?: SortOrder
    statutAuto?: SortOrder
    UpdateTime?: SortOrder
    InsertTime?: SortOrder
  }

  export type StatutDossierAvgOrderByAggregateInput = {
    idStatut?: SortOrder
    ordre?: SortOrder
  }

  export type StatutDossierMaxOrderByAggregateInput = {
    idStatut?: SortOrder
    intitule?: SortOrder
    ordre?: SortOrder
    statutAuto?: SortOrder
    UpdateTime?: SortOrder
    InsertTime?: SortOrder
  }

  export type StatutDossierMinOrderByAggregateInput = {
    idStatut?: SortOrder
    intitule?: SortOrder
    ordre?: SortOrder
    statutAuto?: SortOrder
    UpdateTime?: SortOrder
    InsertTime?: SortOrder
  }

  export type StatutDossierSumOrderByAggregateInput = {
    idStatut?: SortOrder
    ordre?: SortOrder
  }

  export type StatutDossierCreateNestedOneWithoutDossierInput = {
    create?: XOR<StatutDossierCreateWithoutDossierInput, StatutDossierUncheckedCreateWithoutDossierInput>
    connectOrCreate?: StatutDossierCreateOrConnectWithoutDossierInput
    connect?: StatutDossierWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type StatutDossierUpdateOneWithoutDossierNestedInput = {
    create?: XOR<StatutDossierCreateWithoutDossierInput, StatutDossierUncheckedCreateWithoutDossierInput>
    connectOrCreate?: StatutDossierCreateOrConnectWithoutDossierInput
    upsert?: StatutDossierUpsertWithoutDossierInput
    disconnect?: boolean
    delete?: boolean
    connect?: StatutDossierWhereUniqueInput
    update?: XOR<StatutDossierUpdateWithoutDossierInput, StatutDossierUncheckedUpdateWithoutDossierInput>
  }

  export type DossierCreateNestedManyWithoutStatutDossierInput = {
    create?: XOR<Enumerable<DossierCreateWithoutStatutDossierInput>, Enumerable<DossierUncheckedCreateWithoutStatutDossierInput>>
    connectOrCreate?: Enumerable<DossierCreateOrConnectWithoutStatutDossierInput>
    createMany?: DossierCreateManyStatutDossierInputEnvelope
    connect?: Enumerable<DossierWhereUniqueInput>
  }

  export type DossierUncheckedCreateNestedManyWithoutStatutDossierInput = {
    create?: XOR<Enumerable<DossierCreateWithoutStatutDossierInput>, Enumerable<DossierUncheckedCreateWithoutStatutDossierInput>>
    connectOrCreate?: Enumerable<DossierCreateOrConnectWithoutStatutDossierInput>
    createMany?: DossierCreateManyStatutDossierInputEnvelope
    connect?: Enumerable<DossierWhereUniqueInput>
  }

  export type DossierUpdateManyWithoutStatutDossierNestedInput = {
    create?: XOR<Enumerable<DossierCreateWithoutStatutDossierInput>, Enumerable<DossierUncheckedCreateWithoutStatutDossierInput>>
    connectOrCreate?: Enumerable<DossierCreateOrConnectWithoutStatutDossierInput>
    upsert?: Enumerable<DossierUpsertWithWhereUniqueWithoutStatutDossierInput>
    createMany?: DossierCreateManyStatutDossierInputEnvelope
    set?: Enumerable<DossierWhereUniqueInput>
    disconnect?: Enumerable<DossierWhereUniqueInput>
    delete?: Enumerable<DossierWhereUniqueInput>
    connect?: Enumerable<DossierWhereUniqueInput>
    update?: Enumerable<DossierUpdateWithWhereUniqueWithoutStatutDossierInput>
    updateMany?: Enumerable<DossierUpdateManyWithWhereWithoutStatutDossierInput>
    deleteMany?: Enumerable<DossierScalarWhereInput>
  }

  export type DossierUncheckedUpdateManyWithoutStatutDossierNestedInput = {
    create?: XOR<Enumerable<DossierCreateWithoutStatutDossierInput>, Enumerable<DossierUncheckedCreateWithoutStatutDossierInput>>
    connectOrCreate?: Enumerable<DossierCreateOrConnectWithoutStatutDossierInput>
    upsert?: Enumerable<DossierUpsertWithWhereUniqueWithoutStatutDossierInput>
    createMany?: DossierCreateManyStatutDossierInputEnvelope
    set?: Enumerable<DossierWhereUniqueInput>
    disconnect?: Enumerable<DossierWhereUniqueInput>
    delete?: Enumerable<DossierWhereUniqueInput>
    connect?: Enumerable<DossierWhereUniqueInput>
    update?: Enumerable<DossierUpdateWithWhereUniqueWithoutStatutDossierInput>
    updateMany?: Enumerable<DossierUpdateManyWithWhereWithoutStatutDossierInput>
    deleteMany?: Enumerable<DossierScalarWhereInput>
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

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
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

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type StatutDossierCreateWithoutDossierInput = {
    intitule?: string | null
    ordre: number
    statutAuto?: string | null
    UpdateTime?: Date | string | null
    InsertTime?: Date | string | null
  }

  export type StatutDossierUncheckedCreateWithoutDossierInput = {
    idStatut?: number
    intitule?: string | null
    ordre: number
    statutAuto?: string | null
    UpdateTime?: Date | string | null
    InsertTime?: Date | string | null
  }

  export type StatutDossierCreateOrConnectWithoutDossierInput = {
    where: StatutDossierWhereUniqueInput
    create: XOR<StatutDossierCreateWithoutDossierInput, StatutDossierUncheckedCreateWithoutDossierInput>
  }

  export type StatutDossierUpsertWithoutDossierInput = {
    update: XOR<StatutDossierUpdateWithoutDossierInput, StatutDossierUncheckedUpdateWithoutDossierInput>
    create: XOR<StatutDossierCreateWithoutDossierInput, StatutDossierUncheckedCreateWithoutDossierInput>
  }

  export type StatutDossierUpdateWithoutDossierInput = {
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    statutAuto?: NullableStringFieldUpdateOperationsInput | string | null
    UpdateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InsertTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatutDossierUncheckedUpdateWithoutDossierInput = {
    idStatut?: IntFieldUpdateOperationsInput | number
    intitule?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    statutAuto?: NullableStringFieldUpdateOperationsInput | string | null
    UpdateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    InsertTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DossierCreateWithoutStatutDossierInput = {
    numero: number
    idRefDossier?: number | null
    idSiteGestion?: string | null
    idBien?: number | null
    idEmployeIntervention?: number | null
    idEmployeCommande?: number | null
    idEmployeRedaction?: number | null
    idEmployerPublication?: number | null
    reference?: string | null
    referenceExterne?: string | null
    dateCommande?: Date | string | null
    dateRapport?: Date | string | null
    datePublication?: Date | string | null
    dateSignatureNotaire?: Date | string | null
    idCadreMission?: string | null
    contactPlace?: string | null
    accompagnateur?: string | null
    verrouille?: boolean | null
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    heureRDV?: Date | string | null
    heureFin?: Date | string | null
    idRdv?: number | null
    commentaire?: string | null
    codeBien?: string | null
    discBien?: string | null
    typeProprieteBatiment?: string | null
    typeProprieteLot?: string | null
    usageBien?: string | null
    isBati: boolean
    articleNature?: string | null
    nature?: string | null
    nomBatiment?: string | null
    adresse?: string | null
    cptAdresse?: string | null
    codePostal?: string | null
    ville?: string | null
    departement?: string | null
    pays?: string | null
    numeroLot?: string | null
    niveau?: number | null
    etage?: string | null
    sectionCadastrale?: string | null
    parcelle?: string | null
    anneeConstruction?: string | null
    anneePermisConstruire?: string | null
    entree?: string | null
    escalier?: string | null
    porte?: string | null
    nbLocaux?: number | null
    nbNiveaux?: number | null
    quotePart?: number | null
    quotePartTotale?: number | null
    digicode?: string | null
    categorieRAAA?: number | null
    isMitoyen: boolean
    isIOP: boolean
    isERP: boolean
    typeERP?: string | null
    catERP?: number | null
    isIGH: number
    isAlimGazVille: boolean
    isChauffageCollectif: boolean
    isEcsCollectif: boolean
    occupant: number
    dateCre?: Date | string | null
    dateMaj?: Date | string | null
    dateSup?: Date | string | null
    IdUserCre?: number | null
    idUserMaj?: number | null
    idUserSup?: number | null
    dateArchive?: Date | string | null
    idResCroquisBuilder?: string | null
    idResMemoVocal?: string | null
    idResPhoto?: string | null
    previewDataPhoto?: Buffer | null
    titrePhoto?: string | null
    RefSync?: number | null
    guidSdl?: string | null
    ChangeTime?: Date | string | null
    LastSyncTime?: Date | string | null
    idPub?: number | null
    datePub?: Date | string | null
    statusPub: number
    migratedData?: boolean | null
    DateLastRN?: Date | string | null
    DateLastES?: Date | string | null
    idUserLastRN?: number | null
    idUserLastES?: number | null
    tarifOM?: Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: boolean | null
    DateLastRNdata?: Date | string | null
    DateLastESdata?: Date | string | null
    tempsIntervention?: Decimal | DecimalJsLike | number | string | null
    isReglementSurSite: boolean
    moyenPaiement?: string | null
    numeroCheque?: string | null
    banqueCheque?: string | null
    typeCB?: string | null
    numeroCB?: string | null
    dateExpCB?: Date | string | null
    cryptoCB?: string | null
    numPermisConstruire?: string | null
    isPermisGroupe: boolean
    dateArchiveData?: Date | string | null
    isArchivable?: boolean | null
    numVoie?: string | null
    cptNumVoie?: string | null
    typeVoie?: string | null
    codeInsee?: number | null
    anneeRehabilitation?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: string | null
    nbCles?: number | null
    infoCles?: string | null
    priorite: number
    isAPO: boolean
    etapeAPO?: string | null
    statutAPO?: number | null
    dateStartAPO?: Date | string | null
    dateFinAPO?: Date | string | null
    idContrat?: number | null
    justifOccupant?: string | null
    natureTravaux?: string | null
    idSociete: string
    idSocieteIntervention: string
    idSiteGestionIntervention: string
    numeroSociete?: number | null
    nbAnxCroquisDynamique?: string | null
    idFiscal?: string | null
    categorieBien?: string | null
    poids?: number | null
    largeur?: number | null
    longueur?: number | null
    hauteur?: number | null
    constructeur?: string | null
    surface?: number | null
    volume?: number | null
    uniteVolume?: string | null
    commentaireIntervention?: string | null
    idMPOM?: string | null
    idMPPG?: string | null
    idMPNS?: string | null
    SiaResultMLAD?: string | null
    SiaResultRAA?: string | null
    numCopro?: string | null
    infoBAN?: string | null
  }

  export type DossierUncheckedCreateWithoutStatutDossierInput = {
    idDossier?: number
    numero: number
    idRefDossier?: number | null
    idSiteGestion?: string | null
    idBien?: number | null
    idEmployeIntervention?: number | null
    idEmployeCommande?: number | null
    idEmployeRedaction?: number | null
    idEmployerPublication?: number | null
    reference?: string | null
    referenceExterne?: string | null
    dateCommande?: Date | string | null
    dateRapport?: Date | string | null
    datePublication?: Date | string | null
    dateSignatureNotaire?: Date | string | null
    idCadreMission?: string | null
    contactPlace?: string | null
    accompagnateur?: string | null
    verrouille?: boolean | null
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    heureRDV?: Date | string | null
    heureFin?: Date | string | null
    idRdv?: number | null
    commentaire?: string | null
    codeBien?: string | null
    discBien?: string | null
    typeProprieteBatiment?: string | null
    typeProprieteLot?: string | null
    usageBien?: string | null
    isBati: boolean
    articleNature?: string | null
    nature?: string | null
    nomBatiment?: string | null
    adresse?: string | null
    cptAdresse?: string | null
    codePostal?: string | null
    ville?: string | null
    departement?: string | null
    pays?: string | null
    numeroLot?: string | null
    niveau?: number | null
    etage?: string | null
    sectionCadastrale?: string | null
    parcelle?: string | null
    anneeConstruction?: string | null
    anneePermisConstruire?: string | null
    entree?: string | null
    escalier?: string | null
    porte?: string | null
    nbLocaux?: number | null
    nbNiveaux?: number | null
    quotePart?: number | null
    quotePartTotale?: number | null
    digicode?: string | null
    categorieRAAA?: number | null
    isMitoyen: boolean
    isIOP: boolean
    isERP: boolean
    typeERP?: string | null
    catERP?: number | null
    isIGH: number
    isAlimGazVille: boolean
    isChauffageCollectif: boolean
    isEcsCollectif: boolean
    occupant: number
    dateCre?: Date | string | null
    dateMaj?: Date | string | null
    dateSup?: Date | string | null
    IdUserCre?: number | null
    idUserMaj?: number | null
    idUserSup?: number | null
    dateArchive?: Date | string | null
    idResCroquisBuilder?: string | null
    idResMemoVocal?: string | null
    idResPhoto?: string | null
    previewDataPhoto?: Buffer | null
    titrePhoto?: string | null
    RefSync?: number | null
    guidSdl?: string | null
    ChangeTime?: Date | string | null
    LastSyncTime?: Date | string | null
    idPub?: number | null
    datePub?: Date | string | null
    statusPub: number
    migratedData?: boolean | null
    DateLastRN?: Date | string | null
    DateLastES?: Date | string | null
    idUserLastRN?: number | null
    idUserLastES?: number | null
    tarifOM?: Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: boolean | null
    DateLastRNdata?: Date | string | null
    DateLastESdata?: Date | string | null
    tempsIntervention?: Decimal | DecimalJsLike | number | string | null
    isReglementSurSite: boolean
    moyenPaiement?: string | null
    numeroCheque?: string | null
    banqueCheque?: string | null
    typeCB?: string | null
    numeroCB?: string | null
    dateExpCB?: Date | string | null
    cryptoCB?: string | null
    numPermisConstruire?: string | null
    isPermisGroupe: boolean
    dateArchiveData?: Date | string | null
    isArchivable?: boolean | null
    numVoie?: string | null
    cptNumVoie?: string | null
    typeVoie?: string | null
    codeInsee?: number | null
    anneeRehabilitation?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: string | null
    nbCles?: number | null
    infoCles?: string | null
    priorite: number
    isAPO: boolean
    etapeAPO?: string | null
    statutAPO?: number | null
    dateStartAPO?: Date | string | null
    dateFinAPO?: Date | string | null
    idContrat?: number | null
    justifOccupant?: string | null
    natureTravaux?: string | null
    idSociete: string
    idSocieteIntervention: string
    idSiteGestionIntervention: string
    numeroSociete?: number | null
    nbAnxCroquisDynamique?: string | null
    idFiscal?: string | null
    categorieBien?: string | null
    poids?: number | null
    largeur?: number | null
    longueur?: number | null
    hauteur?: number | null
    constructeur?: string | null
    surface?: number | null
    volume?: number | null
    uniteVolume?: string | null
    commentaireIntervention?: string | null
    idMPOM?: string | null
    idMPPG?: string | null
    idMPNS?: string | null
    SiaResultMLAD?: string | null
    SiaResultRAA?: string | null
    numCopro?: string | null
    infoBAN?: string | null
  }

  export type DossierCreateOrConnectWithoutStatutDossierInput = {
    where: DossierWhereUniqueInput
    create: XOR<DossierCreateWithoutStatutDossierInput, DossierUncheckedCreateWithoutStatutDossierInput>
  }

  export type DossierCreateManyStatutDossierInputEnvelope = {
    data: Enumerable<DossierCreateManyStatutDossierInput>
  }

  export type DossierUpsertWithWhereUniqueWithoutStatutDossierInput = {
    where: DossierWhereUniqueInput
    update: XOR<DossierUpdateWithoutStatutDossierInput, DossierUncheckedUpdateWithoutStatutDossierInput>
    create: XOR<DossierCreateWithoutStatutDossierInput, DossierUncheckedCreateWithoutStatutDossierInput>
  }

  export type DossierUpdateWithWhereUniqueWithoutStatutDossierInput = {
    where: DossierWhereUniqueInput
    data: XOR<DossierUpdateWithoutStatutDossierInput, DossierUncheckedUpdateWithoutStatutDossierInput>
  }

  export type DossierUpdateManyWithWhereWithoutStatutDossierInput = {
    where: DossierScalarWhereInput
    data: XOR<DossierUpdateManyMutationInput, DossierUncheckedUpdateManyWithoutDossierInput>
  }

  export type DossierScalarWhereInput = {
    AND?: Enumerable<DossierScalarWhereInput>
    OR?: Enumerable<DossierScalarWhereInput>
    NOT?: Enumerable<DossierScalarWhereInput>
    idDossier?: IntFilter | number
    numero?: IntFilter | number
    idRefDossier?: IntNullableFilter | number | null
    idSiteGestion?: StringNullableFilter | string | null
    idBien?: IntNullableFilter | number | null
    idEmployeIntervention?: IntNullableFilter | number | null
    idEmployeCommande?: IntNullableFilter | number | null
    idEmployeRedaction?: IntNullableFilter | number | null
    idEmployerPublication?: IntNullableFilter | number | null
    reference?: StringNullableFilter | string | null
    referenceExterne?: StringNullableFilter | string | null
    dateCommande?: DateTimeNullableFilter | Date | string | null
    dateRapport?: DateTimeNullableFilter | Date | string | null
    datePublication?: DateTimeNullableFilter | Date | string | null
    dateSignatureNotaire?: DateTimeNullableFilter | Date | string | null
    idCadreMission?: StringNullableFilter | string | null
    contactPlace?: StringNullableFilter | string | null
    accompagnateur?: StringNullableFilter | string | null
    verrouille?: BoolNullableFilter | boolean | null
    idStatut?: IntNullableFilter | number | null
    dateDebutMission?: DateTimeNullableFilter | Date | string | null
    dateFinMission?: DateTimeNullableFilter | Date | string | null
    heureRDV?: DateTimeNullableFilter | Date | string | null
    heureFin?: DateTimeNullableFilter | Date | string | null
    idRdv?: IntNullableFilter | number | null
    commentaire?: StringNullableFilter | string | null
    codeBien?: StringNullableFilter | string | null
    discBien?: StringNullableFilter | string | null
    typeProprieteBatiment?: StringNullableFilter | string | null
    typeProprieteLot?: StringNullableFilter | string | null
    usageBien?: StringNullableFilter | string | null
    isBati?: BoolFilter | boolean
    articleNature?: StringNullableFilter | string | null
    nature?: StringNullableFilter | string | null
    nomBatiment?: StringNullableFilter | string | null
    adresse?: StringNullableFilter | string | null
    cptAdresse?: StringNullableFilter | string | null
    codePostal?: StringNullableFilter | string | null
    ville?: StringNullableFilter | string | null
    departement?: StringNullableFilter | string | null
    pays?: StringNullableFilter | string | null
    numeroLot?: StringNullableFilter | string | null
    niveau?: FloatNullableFilter | number | null
    etage?: StringNullableFilter | string | null
    sectionCadastrale?: StringNullableFilter | string | null
    parcelle?: StringNullableFilter | string | null
    anneeConstruction?: StringNullableFilter | string | null
    anneePermisConstruire?: StringNullableFilter | string | null
    entree?: StringNullableFilter | string | null
    escalier?: StringNullableFilter | string | null
    porte?: StringNullableFilter | string | null
    nbLocaux?: IntNullableFilter | number | null
    nbNiveaux?: IntNullableFilter | number | null
    quotePart?: IntNullableFilter | number | null
    quotePartTotale?: IntNullableFilter | number | null
    digicode?: StringNullableFilter | string | null
    categorieRAAA?: IntNullableFilter | number | null
    isMitoyen?: BoolFilter | boolean
    isIOP?: BoolFilter | boolean
    isERP?: BoolFilter | boolean
    typeERP?: StringNullableFilter | string | null
    catERP?: IntNullableFilter | number | null
    isIGH?: IntFilter | number
    isAlimGazVille?: BoolFilter | boolean
    isChauffageCollectif?: BoolFilter | boolean
    isEcsCollectif?: BoolFilter | boolean
    occupant?: IntFilter | number
    dateCre?: DateTimeNullableFilter | Date | string | null
    dateMaj?: DateTimeNullableFilter | Date | string | null
    dateSup?: DateTimeNullableFilter | Date | string | null
    IdUserCre?: IntNullableFilter | number | null
    idUserMaj?: IntNullableFilter | number | null
    idUserSup?: IntNullableFilter | number | null
    dateArchive?: DateTimeNullableFilter | Date | string | null
    idResCroquisBuilder?: StringNullableFilter | string | null
    idResMemoVocal?: StringNullableFilter | string | null
    idResPhoto?: StringNullableFilter | string | null
    previewDataPhoto?: BytesNullableFilter | Buffer | null
    titrePhoto?: StringNullableFilter | string | null
    RefSync?: IntNullableFilter | number | null
    guidSdl?: StringNullableFilter | string | null
    ChangeTime?: DateTimeNullableFilter | Date | string | null
    LastSyncTime?: DateTimeNullableFilter | Date | string | null
    idPub?: IntNullableFilter | number | null
    datePub?: DateTimeNullableFilter | Date | string | null
    statusPub?: IntFilter | number
    migratedData?: BoolNullableFilter | boolean | null
    DateLastRN?: DateTimeNullableFilter | Date | string | null
    DateLastES?: DateTimeNullableFilter | Date | string | null
    idUserLastRN?: IntNullableFilter | number | null
    idUserLastES?: IntNullableFilter | number | null
    tarifOM?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: BoolNullableFilter | boolean | null
    DateLastRNdata?: DateTimeNullableFilter | Date | string | null
    DateLastESdata?: DateTimeNullableFilter | Date | string | null
    tempsIntervention?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFilter | boolean
    moyenPaiement?: StringNullableFilter | string | null
    numeroCheque?: StringNullableFilter | string | null
    banqueCheque?: StringNullableFilter | string | null
    typeCB?: StringNullableFilter | string | null
    numeroCB?: StringNullableFilter | string | null
    dateExpCB?: DateTimeNullableFilter | Date | string | null
    cryptoCB?: StringNullableFilter | string | null
    numPermisConstruire?: StringNullableFilter | string | null
    isPermisGroupe?: BoolFilter | boolean
    dateArchiveData?: DateTimeNullableFilter | Date | string | null
    isArchivable?: BoolNullableFilter | boolean | null
    numVoie?: StringNullableFilter | string | null
    cptNumVoie?: StringNullableFilter | string | null
    typeVoie?: StringNullableFilter | string | null
    codeInsee?: IntNullableFilter | number | null
    anneeRehabilitation?: StringNullableFilter | string | null
    latitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: StringNullableFilter | string | null
    nbCles?: IntNullableFilter | number | null
    infoCles?: StringNullableFilter | string | null
    priorite?: IntFilter | number
    isAPO?: BoolFilter | boolean
    etapeAPO?: StringNullableFilter | string | null
    statutAPO?: IntNullableFilter | number | null
    dateStartAPO?: DateTimeNullableFilter | Date | string | null
    dateFinAPO?: DateTimeNullableFilter | Date | string | null
    idContrat?: IntNullableFilter | number | null
    justifOccupant?: StringNullableFilter | string | null
    natureTravaux?: StringNullableFilter | string | null
    idSociete?: StringFilter | string
    idSocieteIntervention?: StringFilter | string
    idSiteGestionIntervention?: StringFilter | string
    numeroSociete?: IntNullableFilter | number | null
    nbAnxCroquisDynamique?: StringNullableFilter | string | null
    idFiscal?: StringNullableFilter | string | null
    categorieBien?: StringNullableFilter | string | null
    poids?: FloatNullableFilter | number | null
    largeur?: FloatNullableFilter | number | null
    longueur?: FloatNullableFilter | number | null
    hauteur?: FloatNullableFilter | number | null
    constructeur?: StringNullableFilter | string | null
    surface?: FloatNullableFilter | number | null
    volume?: FloatNullableFilter | number | null
    uniteVolume?: StringNullableFilter | string | null
    commentaireIntervention?: StringNullableFilter | string | null
    idMPOM?: StringNullableFilter | string | null
    idMPPG?: StringNullableFilter | string | null
    idMPNS?: StringNullableFilter | string | null
    SiaResultMLAD?: StringNullableFilter | string | null
    SiaResultRAA?: StringNullableFilter | string | null
    numCopro?: StringNullableFilter | string | null
    infoBAN?: StringNullableFilter | string | null
  }

  export type DossierCreateManyStatutDossierInput = {
    numero: number
    idRefDossier?: number | null
    idSiteGestion?: string | null
    idBien?: number | null
    idEmployeIntervention?: number | null
    idEmployeCommande?: number | null
    idEmployeRedaction?: number | null
    idEmployerPublication?: number | null
    reference?: string | null
    referenceExterne?: string | null
    dateCommande?: Date | string | null
    dateRapport?: Date | string | null
    datePublication?: Date | string | null
    dateSignatureNotaire?: Date | string | null
    idCadreMission?: string | null
    contactPlace?: string | null
    accompagnateur?: string | null
    verrouille?: boolean | null
    dateDebutMission?: Date | string | null
    dateFinMission?: Date | string | null
    heureRDV?: Date | string | null
    heureFin?: Date | string | null
    idRdv?: number | null
    commentaire?: string | null
    codeBien?: string | null
    discBien?: string | null
    typeProprieteBatiment?: string | null
    typeProprieteLot?: string | null
    usageBien?: string | null
    isBati: boolean
    articleNature?: string | null
    nature?: string | null
    nomBatiment?: string | null
    adresse?: string | null
    cptAdresse?: string | null
    codePostal?: string | null
    ville?: string | null
    departement?: string | null
    pays?: string | null
    numeroLot?: string | null
    niveau?: number | null
    etage?: string | null
    sectionCadastrale?: string | null
    parcelle?: string | null
    anneeConstruction?: string | null
    anneePermisConstruire?: string | null
    entree?: string | null
    escalier?: string | null
    porte?: string | null
    nbLocaux?: number | null
    nbNiveaux?: number | null
    quotePart?: number | null
    quotePartTotale?: number | null
    digicode?: string | null
    categorieRAAA?: number | null
    isMitoyen: boolean
    isIOP: boolean
    isERP: boolean
    typeERP?: string | null
    catERP?: number | null
    isIGH: number
    isAlimGazVille: boolean
    isChauffageCollectif: boolean
    isEcsCollectif: boolean
    occupant: number
    dateCre?: Date | string | null
    dateMaj?: Date | string | null
    dateSup?: Date | string | null
    IdUserCre?: number | null
    idUserMaj?: number | null
    idUserSup?: number | null
    dateArchive?: Date | string | null
    idResCroquisBuilder?: string | null
    idResMemoVocal?: string | null
    idResPhoto?: string | null
    previewDataPhoto?: Buffer | null
    titrePhoto?: string | null
    RefSync?: number | null
    guidSdl?: string | null
    ChangeTime?: Date | string | null
    LastSyncTime?: Date | string | null
    idPub?: number | null
    datePub?: Date | string | null
    statusPub: number
    migratedData?: boolean | null
    DateLastRN?: Date | string | null
    DateLastES?: Date | string | null
    idUserLastRN?: number | null
    idUserLastES?: number | null
    tarifOM?: Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: boolean | null
    DateLastRNdata?: Date | string | null
    DateLastESdata?: Date | string | null
    tempsIntervention?: Decimal | DecimalJsLike | number | string | null
    isReglementSurSite: boolean
    moyenPaiement?: string | null
    numeroCheque?: string | null
    banqueCheque?: string | null
    typeCB?: string | null
    numeroCB?: string | null
    dateExpCB?: Date | string | null
    cryptoCB?: string | null
    numPermisConstruire?: string | null
    isPermisGroupe: boolean
    dateArchiveData?: Date | string | null
    isArchivable?: boolean | null
    numVoie?: string | null
    cptNumVoie?: string | null
    typeVoie?: string | null
    codeInsee?: number | null
    anneeRehabilitation?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: string | null
    nbCles?: number | null
    infoCles?: string | null
    priorite: number
    isAPO: boolean
    etapeAPO?: string | null
    statutAPO?: number | null
    dateStartAPO?: Date | string | null
    dateFinAPO?: Date | string | null
    idContrat?: number | null
    justifOccupant?: string | null
    natureTravaux?: string | null
    idSociete: string
    idSocieteIntervention: string
    idSiteGestionIntervention: string
    numeroSociete?: number | null
    nbAnxCroquisDynamique?: string | null
    idFiscal?: string | null
    categorieBien?: string | null
    poids?: number | null
    largeur?: number | null
    longueur?: number | null
    hauteur?: number | null
    constructeur?: string | null
    surface?: number | null
    volume?: number | null
    uniteVolume?: string | null
    commentaireIntervention?: string | null
    idMPOM?: string | null
    idMPPG?: string | null
    idMPNS?: string | null
    SiaResultMLAD?: string | null
    SiaResultRAA?: string | null
    numCopro?: string | null
    infoBAN?: string | null
  }

  export type DossierUpdateWithoutStatutDossierInput = {
    numero?: IntFieldUpdateOperationsInput | number
    idRefDossier?: NullableIntFieldUpdateOperationsInput | number | null
    idSiteGestion?: NullableStringFieldUpdateOperationsInput | string | null
    idBien?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeCommande?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeRedaction?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployerPublication?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    referenceExterne?: NullableStringFieldUpdateOperationsInput | string | null
    dateCommande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRapport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureNotaire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCadreMission?: NullableStringFieldUpdateOperationsInput | string | null
    contactPlace?: NullableStringFieldUpdateOperationsInput | string | null
    accompagnateur?: NullableStringFieldUpdateOperationsInput | string | null
    verrouille?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureRDV?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idRdv?: NullableIntFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    codeBien?: NullableStringFieldUpdateOperationsInput | string | null
    discBien?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteLot?: NullableStringFieldUpdateOperationsInput | string | null
    usageBien?: NullableStringFieldUpdateOperationsInput | string | null
    isBati?: BoolFieldUpdateOperationsInput | boolean
    articleNature?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: NullableStringFieldUpdateOperationsInput | string | null
    nomBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    cptAdresse?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    pays?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLot?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableFloatFieldUpdateOperationsInput | number | null
    etage?: NullableStringFieldUpdateOperationsInput | string | null
    sectionCadastrale?: NullableStringFieldUpdateOperationsInput | string | null
    parcelle?: NullableStringFieldUpdateOperationsInput | string | null
    anneeConstruction?: NullableStringFieldUpdateOperationsInput | string | null
    anneePermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: NullableStringFieldUpdateOperationsInput | string | null
    escalier?: NullableStringFieldUpdateOperationsInput | string | null
    porte?: NullableStringFieldUpdateOperationsInput | string | null
    nbLocaux?: NullableIntFieldUpdateOperationsInput | number | null
    nbNiveaux?: NullableIntFieldUpdateOperationsInput | number | null
    quotePart?: NullableIntFieldUpdateOperationsInput | number | null
    quotePartTotale?: NullableIntFieldUpdateOperationsInput | number | null
    digicode?: NullableStringFieldUpdateOperationsInput | string | null
    categorieRAAA?: NullableIntFieldUpdateOperationsInput | number | null
    isMitoyen?: BoolFieldUpdateOperationsInput | boolean
    isIOP?: BoolFieldUpdateOperationsInput | boolean
    isERP?: BoolFieldUpdateOperationsInput | boolean
    typeERP?: NullableStringFieldUpdateOperationsInput | string | null
    catERP?: NullableIntFieldUpdateOperationsInput | number | null
    isIGH?: IntFieldUpdateOperationsInput | number
    isAlimGazVille?: BoolFieldUpdateOperationsInput | boolean
    isChauffageCollectif?: BoolFieldUpdateOperationsInput | boolean
    isEcsCollectif?: BoolFieldUpdateOperationsInput | boolean
    occupant?: IntFieldUpdateOperationsInput | number
    dateCre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateMaj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IdUserCre?: NullableIntFieldUpdateOperationsInput | number | null
    idUserMaj?: NullableIntFieldUpdateOperationsInput | number | null
    idUserSup?: NullableIntFieldUpdateOperationsInput | number | null
    dateArchive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idResCroquisBuilder?: NullableStringFieldUpdateOperationsInput | string | null
    idResMemoVocal?: NullableStringFieldUpdateOperationsInput | string | null
    idResPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    previewDataPhoto?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    titrePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    RefSync?: NullableIntFieldUpdateOperationsInput | number | null
    guidSdl?: NullableStringFieldUpdateOperationsInput | string | null
    ChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastSyncTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPub?: NullableIntFieldUpdateOperationsInput | number | null
    datePub?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusPub?: IntFieldUpdateOperationsInput | number
    migratedData?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastES?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idUserLastRN?: NullableIntFieldUpdateOperationsInput | number | null
    idUserLastES?: NullableIntFieldUpdateOperationsInput | number | null
    tarifOM?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRNdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastESdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsIntervention?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFieldUpdateOperationsInput | boolean
    moyenPaiement?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCheque?: NullableStringFieldUpdateOperationsInput | string | null
    banqueCheque?: NullableStringFieldUpdateOperationsInput | string | null
    typeCB?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCB?: NullableStringFieldUpdateOperationsInput | string | null
    dateExpCB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cryptoCB?: NullableStringFieldUpdateOperationsInput | string | null
    numPermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    isPermisGroupe?: BoolFieldUpdateOperationsInput | boolean
    dateArchiveData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchivable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    numVoie?: NullableStringFieldUpdateOperationsInput | string | null
    cptNumVoie?: NullableStringFieldUpdateOperationsInput | string | null
    typeVoie?: NullableStringFieldUpdateOperationsInput | string | null
    codeInsee?: NullableIntFieldUpdateOperationsInput | number | null
    anneeRehabilitation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: NullableStringFieldUpdateOperationsInput | string | null
    nbCles?: NullableIntFieldUpdateOperationsInput | number | null
    infoCles?: NullableStringFieldUpdateOperationsInput | string | null
    priorite?: IntFieldUpdateOperationsInput | number
    isAPO?: BoolFieldUpdateOperationsInput | boolean
    etapeAPO?: NullableStringFieldUpdateOperationsInput | string | null
    statutAPO?: NullableIntFieldUpdateOperationsInput | number | null
    dateStartAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idContrat?: NullableIntFieldUpdateOperationsInput | number | null
    justifOccupant?: NullableStringFieldUpdateOperationsInput | string | null
    natureTravaux?: NullableStringFieldUpdateOperationsInput | string | null
    idSociete?: StringFieldUpdateOperationsInput | string
    idSocieteIntervention?: StringFieldUpdateOperationsInput | string
    idSiteGestionIntervention?: StringFieldUpdateOperationsInput | string
    numeroSociete?: NullableIntFieldUpdateOperationsInput | number | null
    nbAnxCroquisDynamique?: NullableStringFieldUpdateOperationsInput | string | null
    idFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    categorieBien?: NullableStringFieldUpdateOperationsInput | string | null
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    largeur?: NullableFloatFieldUpdateOperationsInput | number | null
    longueur?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    constructeur?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    uniteVolume?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireIntervention?: NullableStringFieldUpdateOperationsInput | string | null
    idMPOM?: NullableStringFieldUpdateOperationsInput | string | null
    idMPPG?: NullableStringFieldUpdateOperationsInput | string | null
    idMPNS?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultMLAD?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultRAA?: NullableStringFieldUpdateOperationsInput | string | null
    numCopro?: NullableStringFieldUpdateOperationsInput | string | null
    infoBAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DossierUncheckedUpdateWithoutStatutDossierInput = {
    idDossier?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    idRefDossier?: NullableIntFieldUpdateOperationsInput | number | null
    idSiteGestion?: NullableStringFieldUpdateOperationsInput | string | null
    idBien?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeCommande?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeRedaction?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployerPublication?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    referenceExterne?: NullableStringFieldUpdateOperationsInput | string | null
    dateCommande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRapport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureNotaire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCadreMission?: NullableStringFieldUpdateOperationsInput | string | null
    contactPlace?: NullableStringFieldUpdateOperationsInput | string | null
    accompagnateur?: NullableStringFieldUpdateOperationsInput | string | null
    verrouille?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureRDV?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idRdv?: NullableIntFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    codeBien?: NullableStringFieldUpdateOperationsInput | string | null
    discBien?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteLot?: NullableStringFieldUpdateOperationsInput | string | null
    usageBien?: NullableStringFieldUpdateOperationsInput | string | null
    isBati?: BoolFieldUpdateOperationsInput | boolean
    articleNature?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: NullableStringFieldUpdateOperationsInput | string | null
    nomBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    cptAdresse?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    pays?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLot?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableFloatFieldUpdateOperationsInput | number | null
    etage?: NullableStringFieldUpdateOperationsInput | string | null
    sectionCadastrale?: NullableStringFieldUpdateOperationsInput | string | null
    parcelle?: NullableStringFieldUpdateOperationsInput | string | null
    anneeConstruction?: NullableStringFieldUpdateOperationsInput | string | null
    anneePermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: NullableStringFieldUpdateOperationsInput | string | null
    escalier?: NullableStringFieldUpdateOperationsInput | string | null
    porte?: NullableStringFieldUpdateOperationsInput | string | null
    nbLocaux?: NullableIntFieldUpdateOperationsInput | number | null
    nbNiveaux?: NullableIntFieldUpdateOperationsInput | number | null
    quotePart?: NullableIntFieldUpdateOperationsInput | number | null
    quotePartTotale?: NullableIntFieldUpdateOperationsInput | number | null
    digicode?: NullableStringFieldUpdateOperationsInput | string | null
    categorieRAAA?: NullableIntFieldUpdateOperationsInput | number | null
    isMitoyen?: BoolFieldUpdateOperationsInput | boolean
    isIOP?: BoolFieldUpdateOperationsInput | boolean
    isERP?: BoolFieldUpdateOperationsInput | boolean
    typeERP?: NullableStringFieldUpdateOperationsInput | string | null
    catERP?: NullableIntFieldUpdateOperationsInput | number | null
    isIGH?: IntFieldUpdateOperationsInput | number
    isAlimGazVille?: BoolFieldUpdateOperationsInput | boolean
    isChauffageCollectif?: BoolFieldUpdateOperationsInput | boolean
    isEcsCollectif?: BoolFieldUpdateOperationsInput | boolean
    occupant?: IntFieldUpdateOperationsInput | number
    dateCre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateMaj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IdUserCre?: NullableIntFieldUpdateOperationsInput | number | null
    idUserMaj?: NullableIntFieldUpdateOperationsInput | number | null
    idUserSup?: NullableIntFieldUpdateOperationsInput | number | null
    dateArchive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idResCroquisBuilder?: NullableStringFieldUpdateOperationsInput | string | null
    idResMemoVocal?: NullableStringFieldUpdateOperationsInput | string | null
    idResPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    previewDataPhoto?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    titrePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    RefSync?: NullableIntFieldUpdateOperationsInput | number | null
    guidSdl?: NullableStringFieldUpdateOperationsInput | string | null
    ChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastSyncTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPub?: NullableIntFieldUpdateOperationsInput | number | null
    datePub?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusPub?: IntFieldUpdateOperationsInput | number
    migratedData?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastES?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idUserLastRN?: NullableIntFieldUpdateOperationsInput | number | null
    idUserLastES?: NullableIntFieldUpdateOperationsInput | number | null
    tarifOM?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRNdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastESdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsIntervention?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFieldUpdateOperationsInput | boolean
    moyenPaiement?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCheque?: NullableStringFieldUpdateOperationsInput | string | null
    banqueCheque?: NullableStringFieldUpdateOperationsInput | string | null
    typeCB?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCB?: NullableStringFieldUpdateOperationsInput | string | null
    dateExpCB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cryptoCB?: NullableStringFieldUpdateOperationsInput | string | null
    numPermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    isPermisGroupe?: BoolFieldUpdateOperationsInput | boolean
    dateArchiveData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchivable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    numVoie?: NullableStringFieldUpdateOperationsInput | string | null
    cptNumVoie?: NullableStringFieldUpdateOperationsInput | string | null
    typeVoie?: NullableStringFieldUpdateOperationsInput | string | null
    codeInsee?: NullableIntFieldUpdateOperationsInput | number | null
    anneeRehabilitation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: NullableStringFieldUpdateOperationsInput | string | null
    nbCles?: NullableIntFieldUpdateOperationsInput | number | null
    infoCles?: NullableStringFieldUpdateOperationsInput | string | null
    priorite?: IntFieldUpdateOperationsInput | number
    isAPO?: BoolFieldUpdateOperationsInput | boolean
    etapeAPO?: NullableStringFieldUpdateOperationsInput | string | null
    statutAPO?: NullableIntFieldUpdateOperationsInput | number | null
    dateStartAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idContrat?: NullableIntFieldUpdateOperationsInput | number | null
    justifOccupant?: NullableStringFieldUpdateOperationsInput | string | null
    natureTravaux?: NullableStringFieldUpdateOperationsInput | string | null
    idSociete?: StringFieldUpdateOperationsInput | string
    idSocieteIntervention?: StringFieldUpdateOperationsInput | string
    idSiteGestionIntervention?: StringFieldUpdateOperationsInput | string
    numeroSociete?: NullableIntFieldUpdateOperationsInput | number | null
    nbAnxCroquisDynamique?: NullableStringFieldUpdateOperationsInput | string | null
    idFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    categorieBien?: NullableStringFieldUpdateOperationsInput | string | null
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    largeur?: NullableFloatFieldUpdateOperationsInput | number | null
    longueur?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    constructeur?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    uniteVolume?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireIntervention?: NullableStringFieldUpdateOperationsInput | string | null
    idMPOM?: NullableStringFieldUpdateOperationsInput | string | null
    idMPPG?: NullableStringFieldUpdateOperationsInput | string | null
    idMPNS?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultMLAD?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultRAA?: NullableStringFieldUpdateOperationsInput | string | null
    numCopro?: NullableStringFieldUpdateOperationsInput | string | null
    infoBAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DossierUncheckedUpdateManyWithoutDossierInput = {
    idDossier?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    idRefDossier?: NullableIntFieldUpdateOperationsInput | number | null
    idSiteGestion?: NullableStringFieldUpdateOperationsInput | string | null
    idBien?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeIntervention?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeCommande?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployeRedaction?: NullableIntFieldUpdateOperationsInput | number | null
    idEmployerPublication?: NullableIntFieldUpdateOperationsInput | number | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    referenceExterne?: NullableStringFieldUpdateOperationsInput | string | null
    dateCommande?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateRapport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    datePublication?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSignatureNotaire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCadreMission?: NullableStringFieldUpdateOperationsInput | string | null
    contactPlace?: NullableStringFieldUpdateOperationsInput | string | null
    accompagnateur?: NullableStringFieldUpdateOperationsInput | string | null
    verrouille?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateDebutMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinMission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureRDV?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idRdv?: NullableIntFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    codeBien?: NullableStringFieldUpdateOperationsInput | string | null
    discBien?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    typeProprieteLot?: NullableStringFieldUpdateOperationsInput | string | null
    usageBien?: NullableStringFieldUpdateOperationsInput | string | null
    isBati?: BoolFieldUpdateOperationsInput | boolean
    articleNature?: NullableStringFieldUpdateOperationsInput | string | null
    nature?: NullableStringFieldUpdateOperationsInput | string | null
    nomBatiment?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    cptAdresse?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    pays?: NullableStringFieldUpdateOperationsInput | string | null
    numeroLot?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableFloatFieldUpdateOperationsInput | number | null
    etage?: NullableStringFieldUpdateOperationsInput | string | null
    sectionCadastrale?: NullableStringFieldUpdateOperationsInput | string | null
    parcelle?: NullableStringFieldUpdateOperationsInput | string | null
    anneeConstruction?: NullableStringFieldUpdateOperationsInput | string | null
    anneePermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    entree?: NullableStringFieldUpdateOperationsInput | string | null
    escalier?: NullableStringFieldUpdateOperationsInput | string | null
    porte?: NullableStringFieldUpdateOperationsInput | string | null
    nbLocaux?: NullableIntFieldUpdateOperationsInput | number | null
    nbNiveaux?: NullableIntFieldUpdateOperationsInput | number | null
    quotePart?: NullableIntFieldUpdateOperationsInput | number | null
    quotePartTotale?: NullableIntFieldUpdateOperationsInput | number | null
    digicode?: NullableStringFieldUpdateOperationsInput | string | null
    categorieRAAA?: NullableIntFieldUpdateOperationsInput | number | null
    isMitoyen?: BoolFieldUpdateOperationsInput | boolean
    isIOP?: BoolFieldUpdateOperationsInput | boolean
    isERP?: BoolFieldUpdateOperationsInput | boolean
    typeERP?: NullableStringFieldUpdateOperationsInput | string | null
    catERP?: NullableIntFieldUpdateOperationsInput | number | null
    isIGH?: IntFieldUpdateOperationsInput | number
    isAlimGazVille?: BoolFieldUpdateOperationsInput | boolean
    isChauffageCollectif?: BoolFieldUpdateOperationsInput | boolean
    isEcsCollectif?: BoolFieldUpdateOperationsInput | boolean
    occupant?: IntFieldUpdateOperationsInput | number
    dateCre?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateMaj?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateSup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IdUserCre?: NullableIntFieldUpdateOperationsInput | number | null
    idUserMaj?: NullableIntFieldUpdateOperationsInput | number | null
    idUserSup?: NullableIntFieldUpdateOperationsInput | number | null
    dateArchive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idResCroquisBuilder?: NullableStringFieldUpdateOperationsInput | string | null
    idResMemoVocal?: NullableStringFieldUpdateOperationsInput | string | null
    idResPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    previewDataPhoto?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    titrePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    RefSync?: NullableIntFieldUpdateOperationsInput | number | null
    guidSdl?: NullableStringFieldUpdateOperationsInput | string | null
    ChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastSyncTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idPub?: NullableIntFieldUpdateOperationsInput | number | null
    datePub?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusPub?: IntFieldUpdateOperationsInput | number
    migratedData?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastES?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idUserLastRN?: NullableIntFieldUpdateOperationsInput | number | null
    idUserLastES?: NullableIntFieldUpdateOperationsInput | number | null
    tarifOM?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isExpirationNomade?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DateLastRNdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateLastESdata?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsIntervention?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isReglementSurSite?: BoolFieldUpdateOperationsInput | boolean
    moyenPaiement?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCheque?: NullableStringFieldUpdateOperationsInput | string | null
    banqueCheque?: NullableStringFieldUpdateOperationsInput | string | null
    typeCB?: NullableStringFieldUpdateOperationsInput | string | null
    numeroCB?: NullableStringFieldUpdateOperationsInput | string | null
    dateExpCB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cryptoCB?: NullableStringFieldUpdateOperationsInput | string | null
    numPermisConstruire?: NullableStringFieldUpdateOperationsInput | string | null
    isPermisGroupe?: BoolFieldUpdateOperationsInput | boolean
    dateArchiveData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchivable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    numVoie?: NullableStringFieldUpdateOperationsInput | string | null
    cptNumVoie?: NullableStringFieldUpdateOperationsInput | string | null
    typeVoie?: NullableStringFieldUpdateOperationsInput | string | null
    codeInsee?: NullableIntFieldUpdateOperationsInput | number | null
    anneeRehabilitation?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jeuMatrice?: NullableStringFieldUpdateOperationsInput | string | null
    nbCles?: NullableIntFieldUpdateOperationsInput | number | null
    infoCles?: NullableStringFieldUpdateOperationsInput | string | null
    priorite?: IntFieldUpdateOperationsInput | number
    isAPO?: BoolFieldUpdateOperationsInput | boolean
    etapeAPO?: NullableStringFieldUpdateOperationsInput | string | null
    statutAPO?: NullableIntFieldUpdateOperationsInput | number | null
    dateStartAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateFinAPO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idContrat?: NullableIntFieldUpdateOperationsInput | number | null
    justifOccupant?: NullableStringFieldUpdateOperationsInput | string | null
    natureTravaux?: NullableStringFieldUpdateOperationsInput | string | null
    idSociete?: StringFieldUpdateOperationsInput | string
    idSocieteIntervention?: StringFieldUpdateOperationsInput | string
    idSiteGestionIntervention?: StringFieldUpdateOperationsInput | string
    numeroSociete?: NullableIntFieldUpdateOperationsInput | number | null
    nbAnxCroquisDynamique?: NullableStringFieldUpdateOperationsInput | string | null
    idFiscal?: NullableStringFieldUpdateOperationsInput | string | null
    categorieBien?: NullableStringFieldUpdateOperationsInput | string | null
    poids?: NullableFloatFieldUpdateOperationsInput | number | null
    largeur?: NullableFloatFieldUpdateOperationsInput | number | null
    longueur?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    constructeur?: NullableStringFieldUpdateOperationsInput | string | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    volume?: NullableFloatFieldUpdateOperationsInput | number | null
    uniteVolume?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireIntervention?: NullableStringFieldUpdateOperationsInput | string | null
    idMPOM?: NullableStringFieldUpdateOperationsInput | string | null
    idMPPG?: NullableStringFieldUpdateOperationsInput | string | null
    idMPNS?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultMLAD?: NullableStringFieldUpdateOperationsInput | string | null
    SiaResultRAA?: NullableStringFieldUpdateOperationsInput | string | null
    numCopro?: NullableStringFieldUpdateOperationsInput | string | null
    infoBAN?: NullableStringFieldUpdateOperationsInput | string | null
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