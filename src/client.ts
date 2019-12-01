import * as grpc from "grpc";
import * as book_grpc_pb from "./proto/book_grpc_pb";
import * as book_pb from "./proto/book_pb";

const client = new book_grpc_pb.BookServiceClient(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

const req = new book_pb.GetBookRequest();
req.setId("book1");

client.getBook(req, function(error, result) {
  if (error) console.log("Error: ", error);
  else console.log(result.toObject());
});
