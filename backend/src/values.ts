import dotenv from "dotenv";
dotenv.config();

export const VALUES: {
    PORT: string;
    HOST: string;
    PEKA_VM_URL: string;
} = {
    PORT: process.env.PORT || "5000",
    HOST: process.env.HOST || "127.0.0.1",
    PEKA_VM_URL: process.env.PEKA_VM_URL || "https://www.peka.poznan.pl/vm/method.vm"
};