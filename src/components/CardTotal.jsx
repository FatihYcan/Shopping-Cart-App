const CardTotal = ({ products }) => {
  const taxRate = 0.18;
  const shipping = 25;

  const subTotal = products.reduce((acc, item) => {
    return (acc += Number(item.amount) * Number(item.price) * item.dampingRate);
  }, 0);

  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $ {subTotal.toFixed(2)}
            <span className="subtotal"></span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $ {(subTotal * taxRate).toFixed(2)}
            <span className="tax"></span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $ {shipping.toFixed(2)}
            <span className="shipping"></span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $ {(subTotal + shipping + subTotal * taxRate).toFixed(2)}{" "}
            <span className="total"></span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
