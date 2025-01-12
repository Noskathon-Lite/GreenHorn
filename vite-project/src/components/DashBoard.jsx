
import { useData } from "../contexts/GraphDataProvider";
import styles from "./DashBoard.module.css";
import GraphComponent from "./GraphComponent";

function DashBoard() {
  const { graphData: data } = useData();

  return (
    <div className={styles.dashBoard}>
      <div className={styles.textPart}>
        <div className={styles.streak}>
          <div className={styles.title}>Current Streak🔥</div>
          <div className={styles.value}>10 days</div>
        </div>
        <div className={styles.footPrint}>
          <div className={styles.title}>Carbon Foot Print⛽</div>
          <div className={styles.value}>1300 units</div>
        </div>
        <div className={styles.level}>
          <div className={styles.title}>Contribution Level🦸‍♀️</div>
          <div className={styles.value}>High</div>
        </div>
      </div>
      <div className={styles.graphsPart}>
        <div className={styles.barGraph}>
          {data && <GraphComponent data={data} type={"bar"} />}
        </div>
        <div className={styles.pieChart}>
          {data && <GraphComponent data={data} type={"pie"} />}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
