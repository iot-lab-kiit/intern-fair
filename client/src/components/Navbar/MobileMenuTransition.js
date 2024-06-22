"use client";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import MobileMenuButton from "./MobileMenuButton";

const MobileMenuTransition = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className="relative">
      <MobileMenuButton onClick={() => setOpen((prevOpen) => !prevOpen)} />
      <Transition
        show={open}
        enter="transition-height duration-300"
        enterFrom="h-0"
        enterTo="h-52"
        leave="transition-height duration-300"
        leaveFrom="h-52"
        leaveTo="h-0"
        className="absolute top-0 left-0 w-full bg-white z-40"
        style={{ overflow: "hidden" }}
      >
        <div className="px-2 pt-2">{children}</div>
      </Transition>
    </div>
  );
};

export default MobileMenuTransition;
