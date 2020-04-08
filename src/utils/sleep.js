export default async function sleep(second = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
}
