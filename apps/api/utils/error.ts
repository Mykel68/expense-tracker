export const errorHandler = (error: any): { statusCode: number, message: string } => {
    if (error.name === 'ValidationError') {
        return {
            statusCode: 400,
            message: 'Validation Error: ' + error.message,
        };
    }

    if (error.name === 'UnauthorizedError') {
        // Handle unauthorized access
        return {
            statusCode: 401,
            message: 'Unauthorized access',
        };
    }

    if (error.name === 'ForbiddenError') {
        // Handle forbidden access
        return {
            statusCode: 403,
            message: 'Forbidden access',
        };
    }

    if (error.name === 'NotFoundError') {
        // Handle not found errors
        return {
            statusCode: 404,
            message: 'Resource not found',
        };
    }

    // Handle generic errors (default error handler)
    return {
        statusCode: 500,
        message: 'An unexpected error occurred',
    };
};
