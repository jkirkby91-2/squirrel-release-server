export const mockResourceController = jest.fn().mockImplementation(() => {
    return {
        index: jest.fn(),
        create: jest.fn(),
        show: jest.fn(),
        update: jest.fn(),
        destroy: jest.fn(),
    };
});