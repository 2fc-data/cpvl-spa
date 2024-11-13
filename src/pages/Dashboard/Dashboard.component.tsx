import { BlockContentWrap } from "../../styles/Global/default.ts"
import { DashboardWrap } from "./Dashboard.styles.ts"

import { useFetch } from "../../"
import { Sidebar } from "../../components/Sidebar"




export const Dashboard = () => {

  const { data: allowedRoutes } = useFetch<IAllowedRoutes[]>({
    url: getURI(API.profile)
  });

  return (
    <DashboardWrap>
      <div className='dash-board-content'>
        <div className="dboard-block dboard-summary-blocks">

          <BlockContentWrap className="dboard-block">
            <div className="summary-block-details">
              <p className="summary-block-ttl">Acesso restrito CPVL!</p>
            </div>
          </BlockContentWrap>

        </div>
      </div>
    </DashboardWrap>
  )
}

