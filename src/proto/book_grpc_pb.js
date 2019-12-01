// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var book_pb = require('./book_pb.js');

function serialize_GetBookRequest(arg) {
  if (!(arg instanceof book_pb.GetBookRequest)) {
    throw new Error('Expected argument of type GetBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetBookRequest(buffer_arg) {
  return book_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetBookResponse(arg) {
  if (!(arg instanceof book_pb.GetBookResponse)) {
    throw new Error('Expected argument of type GetBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetBookResponse(buffer_arg) {
  return book_pb.GetBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BookServiceService = exports.BookServiceService = {
  getBook: {
    path: '/BookService/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.GetBookRequest,
    responseType: book_pb.GetBookResponse,
    requestSerialize: serialize_GetBookRequest,
    requestDeserialize: deserialize_GetBookRequest,
    responseSerialize: serialize_GetBookResponse,
    responseDeserialize: deserialize_GetBookResponse,
  },
};

exports.BookServiceClient = grpc.makeGenericClientConstructor(BookServiceService);
