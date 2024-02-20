export default async function executeOrRetryAsync(asyncFn, handleError) {
  try {
    return await asyncFn();
  } catch (error) {
    handleError(error.message);
    return executeOrRetryAsync(asyncFn, handleError);
  }
}
