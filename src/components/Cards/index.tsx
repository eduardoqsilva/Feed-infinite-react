import { Heart, IconContext, PaperPlaneTilt } from "@phosphor-icons/react";
import { CardWrapper, WrapperButtons, WrapperHeader } from "./cards.style";

export function Card() {
  return (
    <CardWrapper>
      <WrapperHeader>
        <div className="imgPerf">
          <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className="user">
          <h2>UsersName</h2>
          <h3>@usersnick</h3>
        </div>
      </WrapperHeader>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae corrupti esse sint? Ab esse harum magni, maxime suscipit vitae reiciendis repellendus est repellat explicabo distinctio id facere quo deleniti!</p>
      <div className="imgPost">
        <img src="https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg" />
      </div>
      <span>20/04/23 • 18:30</span>
      <WrapperButtons>
        <IconContext.Provider
          value={{
            size: 25,
          }}
        >
          <Heart />
          <PaperPlaneTilt />
        </IconContext.Provider>
      </WrapperButtons>
    </CardWrapper>
  )
}