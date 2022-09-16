import {
    messageReducer,
    sendMessage,
    deleteMessage,
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,
    initialState,
} from "../../messages";


describe("message reducer", () => {
    it("send message", () => {
        const MESSAGE = { author: "Test", message: "Test" };

        const result = messageReducer(
            { messages: {} },
            sendMessage("room1", MESSAGE)
        );

        // expect(result).toEqual({ messages: { room1: [MESSAGE] } });

        expect(result.messages.room1).toBeDefined();
        expect(result.messages.room1.length).toBe(1);
        expect(result.messages.room1[0].author).toBe(MESSAGE.author);
        expect(result.messages.room1[0].message).toBe(MESSAGE.message);
    });

    it("delete message", () => {
        const MESSAGE_ID = 1;
        const result = messageReducer(
            { messages: { room1: [{ id: 1 }, { id: 2 }] } },
            deleteMessage("room1", MESSAGE_ID)
        );

        expect(result.messages.room1.length).toBe(1);
        expect(result.messages.room1.filter((m) => m.id === MESSAGE_ID)).toEqual(
            []
        );
        expect(
            result.messages.room1.filter((m) => m.id === MESSAGE_ID).length
        ).toBe(0);
    });

    describe("default", () => {
        it("default value", () => {
            const state = { test: "test" };

            const result = messageReducer(state, {});

            expect(result).toEqual(state);
        });

        it("default state", () => {
            const result = messageReducer();

            expect(result).toEqual(initialState);
        });
    });

    describe("get messages types", () => {
        it("start", () => {
            const result = messageReducer(
                { pending: false, error: "error" },
                getMessagesStart()
            );

            expect(result.pending).toBe(true);
            expect(result.pending).toBeTruthy();

            expect(result.error).toBe(null);
            expect(result.error).toBeNull();
        });

        it("success", () => {
            const MESSAGES = "test mssages";

            const result = messageReducer(
                { pending: true, messages: MESSAGES },
                getMessagesSuccess(MESSAGES)
            );

            expect(result.pending).toBe(false);
            expect(result.pending).toBeFalsy();

            expect(result.messages).toBe(MESSAGES);
        });

        it("error", () => {
            const ERROR = "error";

            const result = messageReducer(
                { pending: true, error: null },
                getMessagesError(ERROR)
            );

            expect(result.pending).toBe(false);
            expect(result.pending).toBeFalsy();

            expect(result.error).toBe(ERROR);
        });
    });
});