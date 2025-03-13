'use client'
import { useEffect, useState } from "react";

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (event : MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
  
      // Add mousemove event listener
      window.addEventListener('mousemove', handleMouseMove);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div>
        {/* Cursor follower div */}
        <div
          className="fixed w-6 h-6  md:bg-white md:bg-opacity-25 md:border border-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out z-50"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        />
      </div>
    );
  };
  
  export default CursorFollower;