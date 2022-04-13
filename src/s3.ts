import { S3 } from "@aws-sdk/client-s3";

export async function listS3BucketObjects(): Promise<void> {
  // dummy code, only for repro
  const s3 = new S3({});
  console.log(await s3.listObjects({ Bucket: "foo" }));
}
