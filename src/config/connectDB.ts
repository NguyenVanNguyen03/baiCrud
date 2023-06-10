import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://TomDev:ghghfgvbh123@cluster0.utxdpxz.mongodb.net/New_Prj"
    );
    console.log("DB connected okiii!!");
  } catch (error) {
    console.log("DB connect fail !!");
  }
}
