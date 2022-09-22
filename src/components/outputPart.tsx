import "../styles/outputStyle.less";

function OutputPart() {
  return (
    <div className="output-part">
      <div className="tip-amount">
        <div className="text">
          <p>Tip Amount</p>
          <p className="person">/ person</p>
        </div>
        <div className="amount">$0.00</div>
      </div>
      <div className="total">
        <div className="text">
          <p>Total</p>
          <p className="person">/ person</p>
        </div>
        <div className="total-amount">$0.00</div>
      </div>
      <button className="reset">RESET</button>
    </div>
  );
}

export default OutputPart;
