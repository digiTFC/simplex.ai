import React from 'react'

const Loader = () => {
  return (
    <div className="flex items-center h-full w-full justify-center">
    <div className="w-10 h-10 animate-spin border-2 rounded-full border-black dark:border-white border-t-transparent"></div>
  </div>
  )
}

export default Loader