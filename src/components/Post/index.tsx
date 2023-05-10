import { Heart, IconContext, PaperPlaneTilt } from "@phosphor-icons/react";
import { CardWrapper, WrapperButtons, WrapperHeader } from "./post.style";
import { useState } from "react";
import { colors } from "../../styles/variables";

interface PostType {
  user: [UserName: string, At: string, UserImg: string]
  text: string
  imgPost?: string
  date: string

}
export function Post({ user, text, imgPost, date }: PostType) {

  const [like, setLike] = useState(false)

  return (
    <CardWrapper>
      <WrapperHeader>
        <div className="imgPerf">
          <img src={user[2]} />
        </div>
        <div className="user">
          <h2>{user[0]}</h2>
          <h3>{user[1].toLowerCase()}</h3>
        </div>
      </WrapperHeader>
      <p>{text}</p>
      {imgPost ?
        <div className="imgPost">
          <img src={imgPost} />
        </div>
        : ''
      }
      <span>{`${date}`}</span>
      <WrapperButtons>
        <IconContext.Provider
          value={{
            size: 25,
          }}
        >
          <Heart onClick={() => setLike((prev) => !prev)}
            weight={like ? 'fill' : 'regular'}
            color={like ? colors.red : colors.gray7}
          />
          <PaperPlaneTilt />
        </IconContext.Provider>
      </WrapperButtons>
    </CardWrapper>
  )
}