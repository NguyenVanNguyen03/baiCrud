import { Schema, model } from "mongoose";

interface Imember {
  name: String;
  phone: String;
}
const MemberSchema = new Schema<Imember>({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Member = model<Imember>("Members", MemberSchema);

export default Member;
