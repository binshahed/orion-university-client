export type TError = {
  data: {
    success: boolean;
    message: string;
    err?: {
      statusCode: number;
    };
  };
};
