import prismaClient from "@database/prisma";
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { ApplicationException } from "@exceptions/ApplicationException";

class AuthenticateUserService {
  async execute(email: string, password: string) {
    const user = await prismaClient.users.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new ApplicationException("Wrong email or password", 403);
    }

    const passwordIsEqual = await bcrypt.compare(password, user.password);

    if (!passwordIsEqual) {
      throw new ApplicationException("Wrong email or password", 403);
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    const token = sign(payload, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d"
    });

    return {
      token
    };
  }
}

export { AuthenticateUserService };