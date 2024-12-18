/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * K-Combo API
 * The K-Combo REST API description
 * OpenAPI spec version: 1.0
 */
import useSwr from 'swr'
import type {
  Arguments,
  Key,
  SWRConfiguration
} from 'swr'
import useSWRMutation from 'swr/mutation'
import type {
  SWRMutationConfiguration
} from 'swr/mutation'
import type {
  AuthDto,
  CreateUserDto,
  GetUsersResponseDto,
  SendNvimDataDto,
  UpdateUserScoreDto,
  User,
  UserResponseSignupOk,
  UserScoreDto
} from './generated.schemas'
import { customInstance } from '../src/axios/index';


  
  type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const appControllerGetHello = (
    
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<void>(
    {url: `/api/v1`, method: 'GET'
    },
    options);
  }



export const getAppControllerGetHelloKey = () => [`/api/v1`] as const;

export type AppControllerGetHelloQueryResult = NonNullable<Awaited<ReturnType<typeof appControllerGetHello>>>
export type AppControllerGetHelloQueryError = unknown

export const useAppControllerGetHello = <TError = unknown>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof appControllerGetHello>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }
) => {
  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getAppControllerGetHelloKey() : null);
  const swrFn = () => appControllerGetHello(requestOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Create a new user
 */
export const usersControllerCreate = (
    createUserDto: CreateUserDto,
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<User>(
    {url: `/api/v1/users`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserDto
    },
    options);
  }



export const getUsersControllerCreateMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, { arg }: { arg: CreateUserDto }): Promise<User> => {
    return usersControllerCreate(arg, options);
  }
}
export const getUsersControllerCreateMutationKey = () => [`/api/v1/users`] as const;

export type UsersControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerCreate>>>
export type UsersControllerCreateMutationError = unknown

/**
 * @summary Create a new user
 */
export const useUsersControllerCreate = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof usersControllerCreate>>, TError, Key, CreateUserDto, Awaited<ReturnType<typeof usersControllerCreate>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUsersControllerCreateMutationKey();
  const swrFn = getUsersControllerCreateMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Get all users
 */
export const usersControllerFindAll = (
    
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<GetUsersResponseDto>(
    {url: `/api/v1/users`, method: 'GET'
    },
    options);
  }



export const getUsersControllerFindAllKey = () => [`/api/v1/users`] as const;

export type UsersControllerFindAllQueryResult = NonNullable<Awaited<ReturnType<typeof usersControllerFindAll>>>
export type UsersControllerFindAllQueryError = unknown

/**
 * @summary Get all users
 */
export const useUsersControllerFindAll = <TError = unknown>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof usersControllerFindAll>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }
) => {
  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUsersControllerFindAllKey() : null);
  const swrFn = () => usersControllerFindAll(requestOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Create a new user
 */
export const usersControllerUpdateUserScore = (
    updateUserScoreDto: UpdateUserScoreDto,
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<User>(
    {url: `/api/v1/users/updateUserScore`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: updateUserScoreDto
    },
    options);
  }



export const getUsersControllerUpdateUserScoreMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, { arg }: { arg: UpdateUserScoreDto }): Promise<User> => {
    return usersControllerUpdateUserScore(arg, options);
  }
}
export const getUsersControllerUpdateUserScoreMutationKey = () => [`/api/v1/users/updateUserScore`] as const;

export type UsersControllerUpdateUserScoreMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerUpdateUserScore>>>
export type UsersControllerUpdateUserScoreMutationError = unknown

/**
 * @summary Create a new user
 */
export const useUsersControllerUpdateUserScore = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof usersControllerUpdateUserScore>>, TError, Key, UpdateUserScoreDto, Awaited<ReturnType<typeof usersControllerUpdateUserScore>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUsersControllerUpdateUserScoreMutationKey();
  const swrFn = getUsersControllerUpdateUserScoreMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Get user by email
 */
export const usersControllerFindByEmail = (
    authDto: AuthDto,
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<GetUsersResponseDto>(
    {url: `/api/v1/users/getUserByEmail`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: authDto
    },
    options);
  }



export const getUsersControllerFindByEmailMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, { arg }: { arg: AuthDto }): Promise<GetUsersResponseDto> => {
    return usersControllerFindByEmail(arg, options);
  }
}
export const getUsersControllerFindByEmailMutationKey = () => [`/api/v1/users/getUserByEmail`] as const;

export type UsersControllerFindByEmailMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerFindByEmail>>>
export type UsersControllerFindByEmailMutationError = unknown

/**
 * @summary Get user by email
 */
export const useUsersControllerFindByEmail = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof usersControllerFindByEmail>>, TError, Key, AuthDto, Awaited<ReturnType<typeof usersControllerFindByEmail>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUsersControllerFindByEmailMutationKey();
  const swrFn = getUsersControllerFindByEmailMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Get user data from token
 */
export const usersControllerGetUserDataFromTokenId = (
    usersControllerGetUserDataFromTokenIdBody: string,
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<void>(
    {url: `/api/v1/users/getUserFromTokenId`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: usersControllerGetUserDataFromTokenIdBody
    },
    options);
  }



export const getUsersControllerGetUserDataFromTokenIdMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, { arg }: { arg: string }): Promise<void> => {
    return usersControllerGetUserDataFromTokenId(arg, options);
  }
}
export const getUsersControllerGetUserDataFromTokenIdMutationKey = () => [`/api/v1/users/getUserFromTokenId`] as const;

export type UsersControllerGetUserDataFromTokenIdMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerGetUserDataFromTokenId>>>
export type UsersControllerGetUserDataFromTokenIdMutationError = unknown

/**
 * @summary Get user data from token
 */
export const useUsersControllerGetUserDataFromTokenId = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof usersControllerGetUserDataFromTokenId>>, TError, Key, string, Awaited<ReturnType<typeof usersControllerGetUserDataFromTokenId>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getUsersControllerGetUserDataFromTokenIdMutationKey();
  const swrFn = getUsersControllerGetUserDataFromTokenIdMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Get all the best scores from all users
 */
export const usersControllerGetAllUserBestScore = (
    
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<UserScoreDto>(
    {url: `/api/v1/users/getAllUsersBestScore`, method: 'GET'
    },
    options);
  }



export const getUsersControllerGetAllUserBestScoreKey = () => [`/api/v1/users/getAllUsersBestScore`] as const;

export type UsersControllerGetAllUserBestScoreQueryResult = NonNullable<Awaited<ReturnType<typeof usersControllerGetAllUserBestScore>>>
export type UsersControllerGetAllUserBestScoreQueryError = unknown

/**
 * @summary Get all the best scores from all users
 */
export const useUsersControllerGetAllUserBestScore = <TError = unknown>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof usersControllerGetAllUserBestScore>>, TError> & { swrKey?: Key, enabled?: boolean }, request?: SecondParameter<typeof customInstance> }
) => {
  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getUsersControllerGetAllUserBestScoreKey() : null);
  const swrFn = () => usersControllerGetAllUserBestScore(requestOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Retrieve nvim score data
 */
export const nvimPluginControllerSendScore = (
    sendNvimDataDto: SendNvimDataDto,
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<void>(
    {url: `/api/v1/nvim-plugin/sendScore`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: sendNvimDataDto
    },
    options);
  }



export const getNvimPluginControllerSendScoreMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, { arg }: { arg: SendNvimDataDto }): Promise<void> => {
    return nvimPluginControllerSendScore(arg, options);
  }
}
export const getNvimPluginControllerSendScoreMutationKey = () => [`/api/v1/nvim-plugin/sendScore`] as const;

export type NvimPluginControllerSendScoreMutationResult = NonNullable<Awaited<ReturnType<typeof nvimPluginControllerSendScore>>>
export type NvimPluginControllerSendScoreMutationError = unknown

/**
 * @summary Retrieve nvim score data
 */
export const useNvimPluginControllerSendScore = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof nvimPluginControllerSendScore>>, TError, Key, SendNvimDataDto, Awaited<ReturnType<typeof nvimPluginControllerSendScore>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getNvimPluginControllerSendScoreMutationKey();
  const swrFn = getNvimPluginControllerSendScoreMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

/**
 * @summary Create a new user with signup
 */
export const authControllerSignupLocal = (
    createUserDto: CreateUserDto,
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<UserResponseSignupOk>(
    {url: `/api/v1/auth/local/signup`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserDto
    },
    options);
  }



export const getAuthControllerSignupLocalMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, { arg }: { arg: CreateUserDto }): Promise<UserResponseSignupOk> => {
    return authControllerSignupLocal(arg, options);
  }
}
export const getAuthControllerSignupLocalMutationKey = () => [`/api/v1/auth/local/signup`] as const;

export type AuthControllerSignupLocalMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerSignupLocal>>>
export type AuthControllerSignupLocalMutationError = unknown

/**
 * @summary Create a new user with signup
 */
export const useAuthControllerSignupLocal = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof authControllerSignupLocal>>, TError, Key, CreateUserDto, Awaited<ReturnType<typeof authControllerSignupLocal>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getAuthControllerSignupLocalMutationKey();
  const swrFn = getAuthControllerSignupLocalMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

export const authControllerSigninLocal = (
    authDto: AuthDto,
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<void>(
    {url: `/api/v1/auth/local/signin`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: authDto
    },
    options);
  }



export const getAuthControllerSigninLocalMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, { arg }: { arg: AuthDto }): Promise<void> => {
    return authControllerSigninLocal(arg, options);
  }
}
export const getAuthControllerSigninLocalMutationKey = () => [`/api/v1/auth/local/signin`] as const;

export type AuthControllerSigninLocalMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerSigninLocal>>>
export type AuthControllerSigninLocalMutationError = unknown

export const useAuthControllerSigninLocal = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof authControllerSigninLocal>>, TError, Key, AuthDto, Awaited<ReturnType<typeof authControllerSigninLocal>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getAuthControllerSigninLocalMutationKey();
  const swrFn = getAuthControllerSigninLocalMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

export const authControllerLogout = (
    
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<void>(
    {url: `/api/v1/auth/logout`, method: 'POST'
    },
    options);
  }



export const getAuthControllerLogoutMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, __: { arg: Arguments }): Promise<void> => {
    return authControllerLogout(options);
  }
}
export const getAuthControllerLogoutMutationKey = () => [`/api/v1/auth/logout`] as const;

export type AuthControllerLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerLogout>>>
export type AuthControllerLogoutMutationError = unknown

export const useAuthControllerLogout = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof authControllerLogout>>, TError, Key, Arguments, Awaited<ReturnType<typeof authControllerLogout>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getAuthControllerLogoutMutationKey();
  const swrFn = getAuthControllerLogoutMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

export const authControllerRefreshTokens = (
    
 options?: SecondParameter<typeof customInstance>) => {
    return customInstance<void>(
    {url: `/api/v1/auth/refresh`, method: 'POST'
    },
    options);
  }



export const getAuthControllerRefreshTokensMutationFetcher = ( options?: SecondParameter<typeof customInstance>) => {
  return (_: Key, __: { arg: Arguments }): Promise<void> => {
    return authControllerRefreshTokens(options);
  }
}
export const getAuthControllerRefreshTokensMutationKey = () => [`/api/v1/auth/refresh`] as const;

export type AuthControllerRefreshTokensMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerRefreshTokens>>>
export type AuthControllerRefreshTokensMutationError = unknown

export const useAuthControllerRefreshTokens = <TError = unknown>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof authControllerRefreshTokens>>, TError, Key, Arguments, Awaited<ReturnType<typeof authControllerRefreshTokens>>> & { swrKey?: string }, request?: SecondParameter<typeof customInstance>}
) => {

  const {swr: swrOptions, request: requestOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getAuthControllerRefreshTokensMutationKey();
  const swrFn = getAuthControllerRefreshTokensMutationFetcher(requestOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}

