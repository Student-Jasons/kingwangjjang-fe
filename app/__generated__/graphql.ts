/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
};

export type DailyType = {
  __typename?: 'DailyType';
  createTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  rank: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allDaily?: Maybe<Array<Maybe<DailyType>>>;
  allRealtime?: Maybe<Array<Maybe<RealTimeType>>>;
};

export type RealTimeType = {
  __typename?: 'RealTimeType';
  GPTAnswer: Scalars['String']['output'];
  Id: Scalars['String']['output'];
  createTime: Scalars['DateTime']['output'];
  site: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', allRealtime?: Array<{ __typename?: 'RealTimeType', Id: string, GPTAnswer: string } | null> | null };

export type AllRealtimeQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRealtimeQuery = { __typename?: 'Query', allRealtime?: Array<{ __typename?: 'RealTimeType', Id: string, site: string, title: string, url: string, createTime: any, GPTAnswer: string } | null> | null };


export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRealtime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"GPTAnswer"}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;
export const AllRealtimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllRealtime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRealtime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createTime"}},{"kind":"Field","name":{"kind":"Name","value":"GPTAnswer"}}]}}]}}]} as unknown as DocumentNode<AllRealtimeQuery, AllRealtimeQueryVariables>;