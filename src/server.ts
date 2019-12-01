import * as grpc from "grpc";
import * as bookGrpcPb from "./proto/book_grpc_pb";
import * as bookPb from "./proto/book_pb";

import { bookData } from "./books";

class BookService implements bookGrpcPb.IBookServiceServer {
  getBook(
    call: grpc.ServerUnaryCall<bookPb.GetBookRequest>,
    callback: grpc.sendUnaryData<bookPb.GetBookResponse>
  ) {
    const bookId = call.request.getId();

    const response = new bookPb.GetBookResponse();
    const book = new bookPb.Book();
    book.setTitle(bookData[bookId].title);
    book.setAuthor(bookData[bookId].author);
    response.setBook(book);

    callback(null, response);
  }
}

(() => {
  const server = new grpc.Server();
  server.bind(`0.0.0.0:50051`, grpc.ServerCredentials.createInsecure());
  server.addService(bookGrpcPb.BookServiceService, new BookService());

  server.start();
})();
