import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();


export const app = express();

app.use(express.json());
app.use(cors());

    const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
            const address = server.address() as AddressInfo;
            console.log(`Servidor Rodando em http://localhost:
            ${address.port}`);
        } else {
            console.error(`Falha no Servidor...`);
        }
});
