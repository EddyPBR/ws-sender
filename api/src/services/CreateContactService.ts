import prismaClient from "@src/database/prisma";
import { ApplicationException } from "@exceptions/ApplicationException";

class CreateContactService {
  async execute(name: string, phone: string) {
    const exists = await prismaClient.phones.findUnique({
      where: {
        phone,
      }
    });

    if(exists) {
      throw new ApplicationException("Phone number already exists", 409);
    }

    const contact = await prismaClient.phones.create({
      data: {
        name, 
        phone
      }
    });

    return contact;
  }
}

export { CreateContactService };
