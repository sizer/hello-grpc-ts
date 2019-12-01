// package: 
// file: book.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as book_pb from "./book_pb";

interface IBookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getBook: IBookServiceService_IGetBook;
}

interface IBookServiceService_IGetBook extends grpc.MethodDefinition<book_pb.GetBookRequest, book_pb.GetBookResponse> {
    path: string; // "/.BookService/GetBook"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<book_pb.GetBookRequest>;
    requestDeserialize: grpc.deserialize<book_pb.GetBookRequest>;
    responseSerialize: grpc.serialize<book_pb.GetBookResponse>;
    responseDeserialize: grpc.deserialize<book_pb.GetBookResponse>;
}

export const BookServiceService: IBookServiceService;

export interface IBookServiceServer {
    getBook: grpc.handleUnaryCall<book_pb.GetBookRequest, book_pb.GetBookResponse>;
}

export interface IBookServiceClient {
    getBook(request: book_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: book_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    getBook(request: book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    getBook(request: book_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
}

export class BookServiceClient extends grpc.Client implements IBookServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getBook(request: book_pb.GetBookRequest, callback: (error: grpc.ServiceError | null, response: book_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public getBook(request: book_pb.GetBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
    public getBook(request: book_pb.GetBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.GetBookResponse) => void): grpc.ClientUnaryCall;
}
