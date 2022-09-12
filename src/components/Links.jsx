import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { url: "/search", text: "🔍 All" },
    { url: "/news", text: "📰 News" },
    { url: "/images", text: "🎞 Images" },
    { url: "/videos", text: "🎥 Videos" }
]

export const Links = () => {
    
  return (
    <div className='flex justify-between sm:justify-center items-center mt-4'>
        {links.map(({ url, text, }) => (
            <NavLink to={url} className="m-2">
                {text}
            </NavLink>
        ))}
    </div>
  )
}