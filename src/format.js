export default function format(amount) {
  const power = Math.floor(Math.log10(amount));
  const mantissa = amount / 10 ** power;

  if (power < 3) return amount.toFixed(0);
  return `${mantissa.toFixed(2)}e${power}`;
}
