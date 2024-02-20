export default async function executeOrRetryAsync(asyncFn) {
  try {
    return await asyncFn();
  } catch (error) {
    console.log(error.message);
    return executeOrRetryAsync(asyncFn);
  }
}
