export default async function executeOrRetryAsync(asyncFn, context) {
  try {
    return await asyncFn.call(context);
  } catch (error) {
    console.log(error.message);
    return executeOrRetryAsync(asyncFn, context);
  }
}
