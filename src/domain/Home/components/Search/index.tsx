import { Search } from 'lucide-react'
import * as S from './styles'
import { FormEvent, useEffect, useState } from 'react'
import { useParams } from '../../../../hooks/useParams'

export function SearchInput(){
  const { params, navigate, location } = useParams()
  const [inputValue, setInputValue] = useState('')

  function onSearch(){
    if(inputValue){
      params.set(`search-query`, inputValue)
      navigate(`/search?${params.toString()}`)
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    setInputValue(params.get('search-query') ?? '')
  }, [location.search, params])

  function onSubmitForm(event: FormEvent){
    event.preventDefault()
    onSearch()
  }

  return (
    <S.InputWrapper onSubmit={onSubmitForm}>
      <S.Input
        type="text"
        placeholder="Buscar filme pelo nome"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onBlur={onSearch}
      />

      <Search onClick={onSearch} />
    </S.InputWrapper>
  )
}