import React from 'react'

const SearchResult = ({src, alt}) => {
  return (
                 <img className='mt-3 ms-3 thumbnail' src={src} alt={alt} />
  )
}

export default SearchResult