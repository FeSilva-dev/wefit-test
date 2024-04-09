import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <header><h1>Header</h1></header>
      <main>                
          <Outlet />
      </main>
    </>
  )
}