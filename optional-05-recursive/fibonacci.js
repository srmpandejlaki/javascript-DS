function fibonacci(n) {
  if (n <= 0) {
    return [0];
  }
  if (n == 1) {
    return [...fibonacci(n - 1), n];
  }
  const fibo = fibonacci(n - 1);
  return [...fibo, fibo[fibo.length - 1] + fibo[fibo.length - 2]];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
