import prismaClient from "@database/prisma";
import { ApplicationException } from "@exceptions/ApplicationException";
import bcrypt from "bcryptjs";

class CreateUserService {
  async execute(email: string, password: string) {
    const exists = await prismaClient.users.findUnique({
      where: {
        email,
      }
    });

    if (exists) {
      throw new ApplicationException("User already exists", 409);
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const user = await prismaClient.users.create({
      data: {
        email,
        password: hashPassword
      }
    });

    return user;
  }
}

export { CreateUserService };
