import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useParams() {
  const location = useLocation()
  const navigate = useNavigate()

  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  )

  return {
    location,
    navigate,
    params,
  }
}
