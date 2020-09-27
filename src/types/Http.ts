import { Controller as HttpController } from "..//http/Http.controller";

export type Headers = { [key: string]: string | number };
export type Queries = { [key: string]: string };
export type Params = { [key: string]: string };
export type Controller = new (...args: any[]) => HttpController;
