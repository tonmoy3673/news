import q1 from "../../../../assets/qZone1.png";
import q2 from "../../../../assets/qZone2.png";
import q3 from "../../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="mb-5">
      <h5 className="text-secondary text-center">Q Zone </h5>
      <div className="mb-3">
        <img src={q1} className="img-fluid" />
        <img src={q2} className="img-fluid" />
        <img src={q3} className="img-fluid" />
      </div>
    </div>
  );
};

export default QZone;
