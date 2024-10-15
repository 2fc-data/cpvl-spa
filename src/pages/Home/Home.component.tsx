import { BlockContentWrap } from "../../../styles/global/default.ts"
import { HomeWrap } from "./Home.styles.ts"

const Home = () => {
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

export default Home
