import request from "supertest"
import { describe, it, expect, vi } from "vitest"
import app from "../../src/app"

/* app.get("/", (req, res) => {
    res.status(200).json({ ok: true })
})

describe("test express", () => {
    it("GET / should return code 200", async () => {
        const response = await request(app).get("/")
        const statusCode = response.statusCode

        expect(statusCode).toBe(200);
    })
}) */

vi.mock("../../src/models/user.model", () => {
    return {
        UserModel: {
            findAll: vi.fn(async () => []),
        },
    };
});

// Mock del middleware verifyToken
vi.mock("../../src/middlewares/jwt.middleware", () => {
    return {
        verifyToken: vi.fn((req, res, next) => {
            // Simular datos del usuario autenticado
            req.email = "mocked@example.com";
            req.uid = "mocked-uid";
            next();
        }),
    };
});

describe("/users", () => {
    it("GET should return users", async () => {
        const response = await request(app).get("/api/v1/users");

        console.log(response.body);

        expect(response.statusCode).toBe(200);
    });
});