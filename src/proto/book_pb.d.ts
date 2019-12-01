// package: 
// file: book.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetBookRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookRequest): GetBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookRequest;
    static deserializeBinaryFromReader(message: GetBookRequest, reader: jspb.BinaryReader): GetBookRequest;
}

export namespace GetBookRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetBookResponse extends jspb.Message { 

    hasBook(): boolean;
    clearBook(): void;
    getBook(): Book | undefined;
    setBook(value?: Book): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBookResponse): GetBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBookResponse;
    static deserializeBinaryFromReader(message: GetBookResponse, reader: jspb.BinaryReader): GetBookResponse;
}

export namespace GetBookResponse {
    export type AsObject = {
        book?: Book.AsObject,
    }
}

export class Book extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): void;

    getAuthor(): string;
    setAuthor(value: string): void;

    getPrice(): number;
    setPrice(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Book.AsObject;
    static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Book;
    static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
    export type AsObject = {
        title: string,
        author: string,
        price: number,
    }
}
