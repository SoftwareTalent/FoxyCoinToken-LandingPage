import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// SVGs
import { MenuAlt, Search, MenuClose } from "../elements/svg";

// Logo
import Logo from "../../assets/img/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="shadow-2xl">
      <div className="max-w-300 mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div>
            <a href="/" className="inline-block">
              <img className="max-w-logo" src={Logo} alt="Workflow" />
            </a>
          </div>
          <div className="hidden lg:block max-w-3xl ml-auto flex-grow">
            <div className="flex items-baseline justify-between">
              <a
                href="#concept"
                className="text-white hover:text-green px-1 py-2 rounded-md font-medium font-sourcesans text-lg hover:text-primary-darker"
              >
                CONCEPT
              </a>

              <a
                href="#nft"
                className="text-white hover:text-green px-1 py-2 rounded-md font-medium font-sourcesans text-lg hover:text-primary-darker"
              >
                NFT
              </a>

              <a
                href="#foxycoin"
                className="text-white hover:text-green px-1 py-2 rounded-md font-medium font-sourcesans text-lg hover:text-primary-darker"
              >
                FOXYCOIN
              </a>

              <a
                href="#wallet"
                className="text-white hover:text-green px-1 py-2 rounded-md font-medium font-sourcesans text-lg hover:text-primary-darker"
              >
                WALLET
              </a>

              <a
                href="#etfgamefi"
                className="text-white hover:text-green px-1 py-2 rounded-md font-medium font-sourcesans text-lg hover:text-primary-darker"
              >
                ETSGAMEFI
              </a>

              <a
                href="#roadmap"
                className="text-white hover:text-green px-1 py-2 rounded-md font-medium font-sourcesans text-lg hover:text-primary-darker"
              >
                ROADMAP
              </a>
            </div>
          </div>
          <div
            className="flex items-center justify-end lg:hidden"
            style={{ flex: 2 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <MenuAlt /> : <MenuClose />}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="container mx-auto px-4 lg:px-8 pb-4">
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="">
                <a
                  href="#"
                  className="block text-white hover:text-green px-1 py-2 rounded-md font-medium font-Sanchez text-base"
                >
                  CONCEPT
                </a>

                <a
                  href="#"
                  className="block text-white hover:text-green px-1 py-2 rounded-md font-medium font-Sanchez text-base"
                >
                  NFT
                </a>

                <a
                  href="#"
                  className="block text-white hover:text-green px-1 py-2 rounded-md font-medium font-Sanchez text-base"
                >
                  FOXYCOIN
                </a>

                <a
                  href="#"
                  className="block text-white hover:text-green px-1 py-2 rounded-md font-medium font-Sanchez text-base"
                >
                  WALLET
                </a>

                <a
                  href="#"
                  className="block text-white hover:text-green px-1 py-2 rounded-md font-medium font-Sanchez text-base"
                >
                  ETSGAMEFI
                </a>

                <a
                  href="#"
                  className="block text-white hover:text-green px-1 py-2 rounded-md font-medium font-Sanchez text-base"
                >
                  ROADMAP
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Header;
