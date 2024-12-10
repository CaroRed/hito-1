import request from "supertest"
import { describe, it, expect, vi } from "vitest"
import app from "../../src/app"

vi.mock("../../src/models/book.model", () => {
    return {
        Book: {
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

describe("/books", () => {
    it("GET should return books", async () => {
        const response = await request(app).get("/api/v1/books");
        expect(response.statusCode).toBe(200);
    });
});