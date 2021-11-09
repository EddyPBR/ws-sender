import prismaClient from "@database/prisma";
import { ApplicationException } from "@exceptions/ApplicationException";

class GetUserDataService {
  async execute(id: string) {
    const user = await prismaClient.users.findUnique({
      where: {
        id
      }
    });

    if(!user) {
      throw new ApplicationException("User not found!", 403);
    }

    return user;
  }
}

export { GetUserDataService };
