import React from 'react'
import { IoSearchSharp } from 'react-icons/io5';

function SearchInput() {
    return (
        <div>
            <form className='flex items-center gap-2'>
                <input type='text' placeholder='Search' className='h-10 input input-bordered rounded-xl' />
                <button type='submit' className='  text-gray-800' >
                    <IoSearchSharp className='w-5 h-10 outline-none' />
                </button>
            </form>
        </div>
    )
}

export default SearchInput


//started code

// import React from 'react'
// import { IoSearchSharp } from 'react-icons/io5';

// function SearchInput() {
//     return (
//         <div>
//             <form className='flex items-center gap-2'>
//                 <input type='text' placeholder='Search' className='h-10 input input-bordered rounded-xl' />
//                 <button type='submit' className='  text-gray-800' >
//                     <IoSearchSharp className='w-5 h-10 outline-none' />
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default SearchInput