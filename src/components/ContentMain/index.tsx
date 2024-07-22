import React from 'react';
import { IconChevron, IconForum, IconInfo, IconMoreVert, IconRefresh } from '../../assets/icons';
import IconInbox from '../../assets/icons/IconInbox';
import IconPromotions from '../../assets/icons/IconPromotions';
import IconSocial from '../../assets/icons/IconSocial';
import Message from './Message';



function ContentMain() {
    return (
        <div className="bg-white flex-1 rounded-md p-2">
            <div className="flex flex-1 row justify-between p-4 items-center">
                <div className="flex row items-center gap-2">
                    <input type="checkbox" className="transform scale-150"/>
                    <IconRefresh className="w-[35px] h-[26px]"/>
                    <IconMoreVert className="w-[35px] h-[26px]"/>
                </div>

                <div className='flex row items-center gap-2'>
                    <span>1-100 of 9,392</span>  
                    <IconChevron className="w-[35px] h-[26px] fill-[#8B8B8B] rotate-180"/>
                    <IconChevron className="w-[35px] h-[26px] fill-[#8B8B8B]"/>
                </div>
            </div>

            <div className="flex row justify-between">
                <div className="flex row gap-4 p-4 border-b-2 cursor-pointer items-center border-[#0B57D0]">
                    <IconInbox className="w-[35px] h-[26px]"/>
                    <div className="flex flex-col">
                        <h2 className="text-md text-[#0B57D0] font-bold">Primary</h2>
                    </div>
                    
                </div>
                <div className="flex row gap-4 p-4 items-center cursor-pointer ">
                    <IconPromotions className="w-[30px] h-[26px]"/>
                    <div className="flex flex-col">
                        <h2 className="text-md ">Promotions</h2>
                        <p className="text-sm text-[#A3A3A3]">LinkedIn Job Alerts</p>
                    </div>
                </div>

                <div className="flex row gap-4 p-4 items-center cursor-pointer ">
                    <IconSocial className="w-[30px] h-[26px]"/>
                    <div className="flex flex-col">
                        <h2 className="text-md ">Social</h2>
                        <p className="text-sm text-[#A3A3A3]">LinkedIn Job Alerts</p>
                    </div>
                </div>

                <div className="flex row gap-4 p-4 items-center cursor-pointer ">
                    <IconInfo className="w-[30px] h-[26px] fill-[#1C1B1F]"/>
                    <div className="flex flex-col">
                        <h2 className="text-md ">Updates</h2>
                        <p className="text-sm text-[#A3A3A3]">Internshala</p>
                    </div>
                </div>

                <div className="flex row gap-4 p-4 items-center">
                    <IconForum className="w-[30px] h-[26px] fill-[#1C1B1F]"/>
                    <div className="flex flex-col">
                        <h2 className="text-md ">Forum</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                {/* E-mails */}
                {data.map((email) => {
                    return (
                        <Message
                            title={email.title}
                            description={email.description}
                            content={email.content}
                        />
                    )
                })}
                
            </div>

        </div>
    )
}

export default ContentMain;


const data = [
    {
        title: "Foxtale",
        description: "The Starlet launches TOMORROW!",
        content: "- Get early access with a special offer tomorrow. Tap to know all ..."
    },
    {
        title: "Moonlight Serenade",
        description: "New Album Release!",
        content: "- Enjoy the soothing tunes of the latest album."
    },
    {
        title: "Tech Expo 2024",
        description: "Join us for the biggest.",
        content: "- Explore the latest innovations and gadgets."
    },
    {
        title: "Spring Fashion Week",
        description: "Unveiling the Spring Collection.",
        content: "- Discover the latest trends in fashion. Exclusive designs available"
    },
    {
        title: "Culinary Masterclass",
        description: "Learn from the best chefs in the industry.",
        content: "- Join our masterclass and enhance your culinary skills."
    },
    {
        title: "Adventure Awaits",
        description: "Your next adventure is just a click away.",
        content: "- Book your next travel experience with us and enjoy"
    },
    {
        title: "Fitness Challenge",
        description: "Get ready for the ultimate fitness challenge.",
        content: "- Push your limits and achieve your fitness goals"
    },
    {
        title: "Art Exhibition",
        description: "Experience the beauty of contemporary art.",
        content: "- Visit our gallery to explore stunning artworks"
    },
    {
        title: "Book Club Meeting",
        description: "Discussing the latest bestsellers.",
        content: "- Join our community of book lovers and dive int"
    },
    {
        title: "Gardening Workshop",
        description: "Grow your own garden.",
        content: "- Learn the basics of gardening and start "
    }
];
