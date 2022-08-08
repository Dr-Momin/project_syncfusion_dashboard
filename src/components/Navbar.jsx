import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {useStateContext} from "../contexts/ContextProvider";
import avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from '.';
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {FiShoppingCart} from "react-icons/fi";
import {BsChatLeft} from "react-icons/bs";
import {RiNotification3Line} from "react-icons/ri";
import {MdKeyboardArrowDown} from "react-icons/md";


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title}>
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
      <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
            {icon}
        </button>
    </TooltipComponent>
);

function Navbar(props) {

    const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, setScreenSize, screenSize} = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900)
            setActiveMenu(false)
        else
            setActiveMenu(true)
    }, [screenSize]);



    return (
        <div className={"flex justify-between p-2 md:mx-6 relative"}>

            {/* Hamburger ICON at LEFT*/}
            <NavButton
                title={"Menu"}
                customFunc={() => setActiveMenu((prevState) => !prevState)}
                icon={<AiOutlineMenu/>}
                color={"blue"}
            />

            {/*ICONS at TOP RIGHT && USER INFO */}
            <div className="flex">

                <NavButton
                    title="Cart"
                    customFunc={() => handleClick('cart')}
                    color={"blue"}
                    icon={<FiShoppingCart />}
                />

                <NavButton
                    title="Chat"
                    dotColor="#03C9D7"
                    customFunc={() => handleClick('chat')}
                    color={"blue"}
                    icon={<BsChatLeft />}
                />

                <NavButton
                    title="Notification"
                    dotColor="rgb(254, 201, 15)"
                    customFunc={() => handleClick('notification')}
                    color={"blue"}
                    icon={<RiNotification3Line />}
                />


                <TooltipComponent
                    content={"Profile"}
                    position={"BottomCenter"}
                >

                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                        onClick={() => handleClick('profile')}
                    >
                        <img
                            className={"rounded-full h-8 w-8"}
                            src={avatar}
                            alt=""/>

                        <p>
                            <span className={"text-gray-400 text-14"}>Hi, </span>
                            <span className={"text-gray-400 font-bold ml-1 text-14"}>Momin</span>
                        </p>

                        <MdKeyboardArrowDown
                            className={"text-gray-400 text-14"}
                        />

                    </div>

                </TooltipComponent>

            </div>


            {/* Toggling on the TOP RIGHT ICONS */}
            {isClicked.cart && <Cart/>}
            {isClicked.chat && <Chat/>}
            {isClicked.notification && <Notification/>}
            {isClicked.userProfile && <UserProfile/>}



        </div>
    );
}

export default Navbar;
