"use client";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import MobileMenuButton from "./MobileMenuButton";

const MobileMenuTransition = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (open) {
      setOpen(false);
    }
  };

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
    <div>
      <MobileMenuButton onClick={() => setOpen((prevOpen) => !prevOpen)} />
      <Transition
        show={open}
        enter="transition-all ease-in-out duration-300"
        enterFrom="h-0"
        enterTo="h-52 opacity-100"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="h-52 opacity-100"
        leaveTo="h-0 opacity-0"
        onEnter={() => setOpen(true)}
        onExit={() => setOpen(false)}
      >
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">{children}</div>
        </div>
      </Transition>
    </div>
  );
};

export default MobileMenuTransition;

