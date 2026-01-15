import mongoose, { Mongoose } from "mongoose"

const uri = process.env.MONGODB_URI as string

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable")
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Mongoose | null
    promise: Promise<Mongoose> | null
  } | undefined
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  }
}

export async function connectDB(): Promise<Mongoose> {
    
  if (cached!.conn) {
    return cached!.conn
  }

  if (!cached!.promise) {
    cached!.promise = mongoose.connect(uri, {
      bufferCommands: false,
    })
  }

  cached!.conn = await cached!.promise
  return cached!.conn
}
