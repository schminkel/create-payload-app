import React from 'react'

const TailwindcssTest: React.FC = () => {
  return (
    <div className="py-6 border-gray-500 border-2 border-solid w-full bg-error text-white font-bold text-center flex grow">
      <div className="grow"></div>
      <div className="font-bold text-white">TailwindCSS</div>
      &nbsp;
      <div className="font-light underline text-white">Alert</div>
      <div className="grow"></div>
    </div>
  )
}
export default TailwindcssTest
