import { BlockContentWrap } from "../../styles/Global/default.ts"
import { HomeWrap } from "./Home.styles.ts"

export const Home = () => {
  return (
    <HomeWrap>
      <div className='home-content'>
        <div className="home-block">
          <BlockContentWrap className="home-block">

          </BlockContentWrap>
          </div>
      </div>
    </HomeWrap>
  )
}

