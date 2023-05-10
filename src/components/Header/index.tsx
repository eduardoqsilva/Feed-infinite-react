import { GearSix, Planet } from "@phosphor-icons/react";
import { WrapperHeader } from "./header.styled";

export function Header() {
  return (
    <WrapperHeader>
      <div className="wrapper">
        <Planet size={32} weight="regular" />
        <h3>Feed</h3>
      </div>
      <GearSix size={32} weight="regular" />
    </WrapperHeader>
  )
}