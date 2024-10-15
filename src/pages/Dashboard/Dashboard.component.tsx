import { MdAttachMoney, MdBarChart } from "react-icons/md"
import { BlockContentWrap } from "../../styles/global/default.ts"
import { DashboardWrap } from "./Dashboard.styles.ts"

export const Dashboard = () => {
  return (
    <DashboardWrap>
      <div className='dash-board-content'>
        <div className="dboard-block dboard-summary-blocks">
          <BlockContentWrap className="dboard-block">
            <div className="summary-block-icon">
              <MdBarChart/>
            </div>
            <div className="summary-block-details">
              <p className="summary-block-ttl">Pagamentos</p>
              <div className="summary-block-val">$350.5</div>
            </div>
          </BlockContentWrap>

          <BlockContentWrap className="dboard-block dboard-block-sales">
            <div className="summary-block-icon">
              <MdAttachMoney />
            </div>
            <div className="summary-block-details">
              <p className="summary-block-ttl">Despesas</p>
              <div className="summary-block-val">$150.3</div>
            </div>
          </BlockContentWrap>
        </div>
      </div>
    </DashboardWrap>
  )
}
