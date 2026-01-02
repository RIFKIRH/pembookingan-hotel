import {auth} from "@/auth";
import {prisma} from "@/lib/prisma";

export const getAmenities = async () => {
    const session = await auth();
    if (!session?.user) {
    throw new Error("Unauthorized");
    }
    try {
        const result = await prisma.amenities.findMany();
        return result;
    } catch (error) {
        console.log(error);
    }
}

