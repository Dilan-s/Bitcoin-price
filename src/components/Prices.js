export function Prices(props) {
  const usd = props.usd;
  const eur = props.eur;
  const gbp = props.gbp;
  /*
    usd: 123
    eur: 1234
    gbp: 10
  */

  return (
    <div>
      <p>${usd}</p>
      <p>€{eur}</p>
      <p>£{gbp}</p>
    </div>
  );
}
