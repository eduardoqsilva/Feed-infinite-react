import { CircleNotch } from "@phosphor-icons/react"
import { WrapperLoading } from "./loading.styled"
import { colors } from "../../styles/variables"

interface LoadingType {
  load: boolean
}

export function Loading({ load }: LoadingType) {
  return (
    <WrapperLoading load={load} >
      <CircleNotch size={32} color={colors.gray7} />
    </WrapperLoading>
  )
}