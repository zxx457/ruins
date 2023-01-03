import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** hello world ;) */
export type HelloModel = {
  __typename?: 'HelloModel';
  word: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: TodoModel;
  storeHello: HelloModel;
};


export type MutationAddTodoArgs = {
  input: TodoInput;
};


export type MutationStoreHelloArgs = {
  input: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hellos: Array<HelloModel>;
  todo: TodoModel;
  todos: Array<TodoModel>;
};


export type QueryTodoArgs = {
  id: Scalars['String'];
};

export type TodoDateInput = {
  create: Scalars['String'];
  delete?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['String']>;
};

/** todo item's date info */
export type TodoDateModel = {
  __typename?: 'TodoDateModel';
  create: Scalars['String'];
  delete?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
};

/** todo item input */
export type TodoInput = {
  date: TodoDateInput;
  description?: InputMaybe<Scalars['String']>;
  done: Scalars['Boolean'];
  title: Scalars['String'];
};

/** todo item */
export type TodoModel = {
  __typename?: 'TodoModel';
  date: TodoDateModel;
  description?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hellos: Array<{ __typename?: 'HelloModel', word: string }> };

export type StoreHelloMutationVariables = Exact<{
  input: Scalars['String'];
}>;


export type StoreHelloMutation = { __typename?: 'Mutation', storeHello: { __typename?: 'HelloModel', word: string } };

export const HelloDocument = gql`
    query Hello {
  hellos {
    word
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class HelloGQL extends Apollo.Query<HelloQuery, HelloQueryVariables> {
    document = HelloDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StoreHelloDocument = gql`
    mutation StoreHello($input: String!) {
  storeHello(input: $input) {
    word
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StoreHelloGQL extends Apollo.Mutation<StoreHelloMutation, StoreHelloMutationVariables> {
    document = StoreHelloDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }