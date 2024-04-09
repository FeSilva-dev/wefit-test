import { Outlet } from "react-router-dom"
import * as S from './style'
import { Header } from "../components/Header"

export function Layout() {
  return (
    <S.Container>
      <Header />
      <main>                
        <Outlet />
      </main>
    </S.Container>
  )
}