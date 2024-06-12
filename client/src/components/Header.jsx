
import { Link, useLocation, } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useRef } from 'react';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { FaRegCircleUser } from "react-icons/fa6";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {useSelector,useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';
export default function Header() {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
const path = useLocation().pathname
  const {currentUser} = useSelector(state=>state.user)
  const {theme} = useSelector((state)=>state.theme)
  return (
   <div>
    <div className='flex justify-between items-center border-b mt-3 mx-2 py-2'>
        <div >
          <Link className='flex whitespace-nowrap' to={'/'}>
          <span className='text-xl px-2 rounded-lg text-white bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500'>Tech</span><h1 className='text-xl'>Masters</h1>
          </Link>
        </div> 
        <div>
          <div className='md:flex gap-3 text-xl hidden'>
            <Link to='/'>
              Home
            </Link>
            <Link to='/about'>
              About
            </Link>
            <Link to='/projects'>
              Projects
            </Link>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='md:flex hidden'>
           <input
           type='text'
           placeholder='Search...'
           className='outline-none outline rounded-md py-1'
           />
          </div>
          <div>
           <button onClick={()=>dispatch(toggleTheme())}>
           {theme === 'light'? <FaSun/>: <FaMoon/>}
           </button>
          </div>
          <div>
            {currentUser ?(
              <div className=''>
             <Menu>
  <MenuButton
  className='rounded-full'
    as={IconButton}
    aria-label='menu'
    icon={<FaRegCircleUser  />}
  />
  <MenuList>
  <MenuGroup title='Profile'>
      <MenuItem>{currentUser.username}</MenuItem>
      <MenuItem><span className='text-sm truncate'>{currentUser.email}</span> </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>
      <Link to='/dashboard?tab=profile'>

      </Link>
      </MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
              </div>
            ):(
                   <Link to='/sign-in'>
                   <button className='bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500 text-white px-4 py-1 rounded-md text-lg font-semibold'>
                       Sign In
                     </button>
                   </Link>
            )}
       
          </div>
          <div className='md:hidden flex'>
            <button ref={btnRef} onClick={onOpen}>
            <AiOutlineMenu   />
            </button>
             <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
          <div className='flex justify-end items-center font-bold text-2xl'>
          <button ref={btnRef} onClick={onClose} className=' text-2xl '>
              x
            </button>
          </div>
         <div className='flex flex-col gap-2'>
         <Link to='/'>
              Home
            </Link>
            <Link to='/about'>
              About
            </Link>
            <Link to='/projects'>
              Projects
            </Link>
         <input
           type='text'
           placeholder='Search...'
           className='outline-none rounded-md py-1'
           />
         </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
          </div>
        </div>
    </div>
   </div>
  );
}