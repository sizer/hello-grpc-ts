import * as grpc from "grpc";
import * as bookGrpcPb from "./proto/book_grpc_pb";
import * as bookPb from "./proto/book_pb";

const client = new bookGrpcPb.BookServiceClient(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

const req = new bookPb.GetBookRequest();
req.setId("book1");

client.getBook(req, function(error, result) {
  if (error) console.log("Error: ", error);
  else console.log(result.toObject());
});
