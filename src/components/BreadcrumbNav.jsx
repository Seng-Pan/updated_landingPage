import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const BreadcrumbNav = ({paths}) => {
  return (
    <nav className='flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto' >
        <ol className='inline-flex items-center space-x-1 md:space-x-3' >
            {paths.map((path,index) => (
                <li key={index} className='inline-flex items-center' >
                    {index !== 0 && <FaChevronRight className='w-4 h-4 text-gray-400 mx-1' />}
                    {index !== paths.length -1 ? (
                        <a href={path.href} className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900' >
                            {path.name}
                        </a>
                    ) : (
                        <span className='inline-flex items-center text-sm font-medium text-gray-500' >
                            {path.name}
                        </span>
                    )}
                </li>
            ))}
        </ol>
    </nav>
  )
}

export default BreadcrumbNav