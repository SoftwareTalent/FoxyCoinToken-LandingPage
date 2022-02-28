import React, { useState } from "react";

// Partials
import Header from "./components/partials/Header";

// Images
import LandBanner from "./assets/img/land-banner.png";
import RunningFox from "./assets/img/running-fox.png";
import NFTLeft from "./assets/img/nft-left.png";
import NFTRight from "./assets/img/nft-right.png";
import FoxycoinChart from "./assets/img/foxycoinChart.png";
import Cld from "./assets/img/云2cld.png";
import Paws from "./assets/img/paws.png";
import MoneyBag from "./assets/img/moneybag.png";
import Gamfisct from "./assets/img/gamfisct.png";
import Landmap from "./assets/img/land-map.png";
import Gmdevprog1 from "./assets/img/gmdevprog1.png";
import Gmdevprog2 from "./assets/img/gmdevprog2.png";
import TeamJay from "./assets/img/team_jay.png";
import TeamShin from "./assets/img/team_shin.png";
import TeamArun from "./assets/img/team_arun.png";
import TeamMaurice from "./assets/img/team_maurice.png";
import TeamAndrew from "./assets/img/team_andrew.png";
import TeamVolume from "./assets/img/team_volume.png";

// Components
import {
  Discord,
  Email,
  MinusSM,
  Twitter,
  WebsiteLink,
  Youtube,
} from "./components/elements/svg";
import Heading from "./components/elements/Typography/Heading";
import Paragraph from "./components/elements/Typography/Paragraph";

// 3rd Party
import { motion } from "framer-motion/dist/framer-motion";
import Chart from "react-apexcharts";

function App() {
  const isMobile = window.innerWidth < 768;

  const [activeTab, setActiveTab] = useState("left");
  const [chartData, setChartData] = useState({
    series: [15, 30, 10, 5, 15, 10, 15],
    options: {
      chart: {
        type: "donut",
      },
      labels: [
        "Staking Rewards : 15%",
        "Game Ecosystem : 30%",
        "Initial Liquidity : 10%",
        "IEO/Public sale : 5%",
        "Airdop to NFT holders : 15%",
        "Marketing/Partnership : 10%",
        "Team : 15%",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <main className="max-w-full min-h-screen bg-secondary font-Sanchez overflow-x-hidden">
      <Header />
      <section className="max-w-300 mx-auto pt-20 pb-9 px-4 md:px-8" id="home">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              offscreen: {
                x: isMobile ? "-50%" : "-90%",
              },
              onscreen: {
                x: 0,
                transition: {
                  type: "spring",
                  duration: 0.6,
                },
              },
            }}
          > */}
          <div className="flex flex-1 justify-center md:justify-start">
            <div className="flex flex-col justify-center text-center pt-5 pb-5 md:text-left">
              <Heading variants={"h1"}>Let the Adventure Begin..</Heading>
              <Paragraph className="pb-9 pt-1 max-w-md text-white">
                Welcome to the SouloFox token page!.
              </Paragraph>
              <div className="flex justify-center md:justify-start">
                <a
                  href="#"
                  className="flex gap-2 justify-center items-center transition-all bg-primary hover:bg-primary-dark text-sm text-black font-bold py-2 px-4 rounded-sm tracking-wide w-full mt-5"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          {/* </motion.div>
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              offscreen: {
                x: isMobile ? "50%" : "90%",
              },
              onscreen: {
                x: 0,
                transition: {
                  type: "spring",
                  duration: 0.6,
                },
              },
            }}
          > */}
          <div className="flex justify-center flex-1 md:justify-end">
            <div className="max-w-lg">
              <img src={LandBanner} alt="" />
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* Concept */}
      <section
        className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8"
        id="concept"
      >
        <div>
          <div>
            <Heading variants="h2" className="text-center">
              Project Concept
            </Heading>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  x: isMobile ? "-50%" : "-90%",
                },
                onscreen: {
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0.1,
                  },
                },
              }}
            >
              <div className="flex flex-1 justify-center items-center lg:justify-start">
                <div>
                  <img src={RunningFox} alt="running fox" />
                </div>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  x: isMobile ? "50%" : "90%",
                },
                onscreen: {
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                    delay: 0.1,
                  },
                },
              }}
            >
              <div className="flex flex-1 justify-center items-center max-w-md md:text-left  whitespace-normal pt-5 text-white">
                <ul>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className={"text-primary-darkest"} />
                    </div>
                    <div>
                      <Paragraph>
                        Members of our team are all big 2D RPG fans, so in this
                        project we are aiming to build a RPG game where NFT
                        owners can use their NFT as character in the game and
                        earn FoxyCoin.
                      </Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className={"text-primary-darkest"} />
                    </div>
                    <div>
                      <Paragraph>
                        The game will be a multiplayer game where foxians can
                        socialize, level up through defeating enemies, join
                        raids, earn FoxyCoin and much more.
                      </Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className={"text-primary-darkest"} />
                    </div>
                    <div>
                      <Paragraph>
                        We want players to feel the nostalgia of 2D RPG and
                        bring back memories that thrilled their heart in the
                        past.
                      </Paragraph>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NFTS */}
      <section id="nft" className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8">
        <div>
          <Heading variants="h2" className="text-center">
            NFTS
          </Heading>
        </div>
        <div className="flex flex-wrap text-white">
          <div className="w-full">
            <ul
              className="grid grid-cols-2 gap-4 sm:gap-8 pt-3 pb-4"
              role="tablist"
            >
              <li className="-mb-px sm:mr-2 sm:pl-10 last:mr-0 flex-auto text-center ">
                <button
                  className={`flex gap-2 justify-center items-center transition-all bg-primary hover:bg-primary-dark text-sm text-black font-bold py-2 px-4 rounded-sm tracking-wide w-full ${
                    activeTab === "left" ? "bg-primary-dark" : ""
                  }`}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                  onClick={() => setActiveTab("left")}
                >
                  SouloFox NFT
                </button>
              </li>
              <li className="-mb-px sm:pr-10 last:mr-0 flex-auto text-center">
                <button
                  className={`flex gap-2 justify-center items-center transition-all bg-primary hover:bg-primary-dark text-sm text-black font-bold py-2 px-4 rounded-sm tracking-wide w-full ${
                    activeTab === "right" ? "bg-primary-dark" : ""
                  }`}
                  data-toggle="tab"
                  role="tablist"
                  onClick={() => setActiveTab("right")}
                >
                  Community NFT
                </button>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-2 sm:py-5 flex-auto">
                <div className="tab-content tab-space px-0 sm:px-6">
                  <motion.div
                    viewport={{ once: true, amount: 0.2 }}
                    initial="offscreen"
                    whileInView="onscreen"
                    className={`${
                      activeTab === "left"
                        ? "block md:flex sm:flew-row"
                        : "hidden"
                    }`}
                    variants={{
                      offscreen: {
                        x: isMobile ? "50%" : "90%",
                      },
                      onscreen: {
                        x: 0,
                        transition: {
                          type: "spring",
                          duration: 0.7,
                        },
                      },
                    }}
                  >
                    <div className=" max-w-lg  md:text-left  whitespace-normal pt-5">
                      <ul>
                        <li className="flex mb-5">
                          <div className="mr-4 text-200">
                            <MinusSM className={"text-primary-darkest"} />
                          </div>
                          <div>
                            <Paragraph>
                              2,222 unique and programmatically generated from
                              over 100 different attributes. Attributes are
                              carefully designed following the lore.
                            </Paragraph>
                          </div>
                        </li>
                        <li className="flex mb-5">
                          <div className="mr-4 text-200">
                            <MinusSM className={"text-primary-darkest"} />
                          </div>
                          <div>
                            <Paragraph>
                              Holders of SouloFox NTF's will have access to the
                              game using the NFT as characters.
                            </Paragraph>
                          </div>
                        </li>
                        <li className="flex mb-5">
                          <div className="mr-4 text-200">
                            <MinusSM className={"text-primary-darkest"} />
                          </div>
                          <div>
                            <Paragraph>
                              Gen 0 Soulofox will only have 2,222 and will never
                              increase.
                            </Paragraph>
                          </div>
                        </li>
                        <li className="flex mb-5">
                          <div className="mr-4 text-200">
                            <MinusSM className={"text-primary-darkest"} />
                          </div>
                          <div>
                            <Paragraph>
                              Gen 0 Soulofox NFTs will have background at the
                              current stage of lore (Aruguya Jungle &amp;
                              Forbidding Tundra) and will not be released
                              anymore in future.
                            </Paragraph>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <img
                      src={NFTLeft}
                      alt=""
                      srcset=""
                      className="mx-auto md:ml-auto object-contain"
                    />
                  </motion.div>
                  <motion.div
                    viewport={{ once: true, amount: 0.2 }}
                    initial="offscreen"
                    whileInView="onscreen"
                    className={`${
                      activeTab === "left"
                        ? "block md:flex sm:flew-row"
                        : "hidden"
                    }`}
                    variants={{
                      offscreen: {
                        x: isMobile ? "50%" : "90%",
                      },
                      onscreen: {
                        x: 0,
                        transition: {
                          type: "spring",
                          duration: 0.7,
                        },
                      },
                    }}
                    className={`${
                      activeTab === "right"
                        ? "block md:flex sm:flew-row"
                        : "hidden"
                    }`}
                  >
                    <div className=" max-w-lg  md:text-left  whitespace-normal pt-5">
                      <ul>
                        <li className="flex mb-5">
                          <div className="mr-4 text-200">
                            <MinusSM className={"text-primary-darkest"} />
                          </div>
                          <div>
                            <Paragraph>
                              In Soulofox, we aim to build a community that is
                              fun, engaging, and rewarding. Hence, we developed
                              the discord $foxy-coin system where foxians can
                              earn the coin through playing games, staying
                              active, inviting new members, or even robbing from
                              other foxians! (in a fun way)
                            </Paragraph>
                          </div>
                        </li>
                        <li className="flex mb-5">
                          <div className="mr-4 text-200">
                            <MinusSM className={"text-primary-darkest"} />
                          </div>
                          <div>
                            <Paragraph>
                              The discord $foxy-coin can be used to redeem
                              community NFT in our discord foxian store,
                              including pfp, 3d NFT, 3d miniworld..etc
                            </Paragraph>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <img
                      src={NFTRight}
                      alt=""
                      srcset=""
                      className="mx-auto md:ml-auto object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FoxyCoin */}
      <section
        id="foxycoin"
        className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8 items-center"
      >
        <div>
          <div>
            <Heading variants="h2" className="text-center">
              FoxyCoin Token
            </Heading>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 text-white">
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  scale: 0.5,
                },
                onscreen: {
                  scale: 1,
                  transition: {
                    type: "spring",
                    duration: 0.7,
                  },
                },
              }}
            >
              <div className="mx-auto w-5/5">
                <div>
                  {/* <img src={FoxycoinChart} alt="foxycoin chart" /> */}
                  <Chart
                    width={"100%"}
                    options={chartData.options}
                    series={chartData.series}
                    type="donut"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "-50%" : "-90%",
                  scale: 0.5,
                },
                onscreen: {
                  scale: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 0.7,
                  },
                },
              }}
            >
              <div className="flex flex-1 justify-center items-center max-w-md m-auto md:text-left  whitespace-normal pt-5">
                <ul>
                  <li className="flex mb-5 text-white">
                    <div>
                      <Paragraph>Total Supply: 1 Billion Tokens</Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div>
                      <Paragraph>Key Token Utilities:</Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <Paragraph>In game store</Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <Paragraph>P2P marketplace</Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <Paragraph>Community NFT Store</Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <Paragraph>Staking Rewards</Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <Paragraph>
                        NFT drops from future Gen based on staked levels
                      </Paragraph>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <Paragraph>Discounts on Stores</Paragraph>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wallets */}
      <section id="wallet" className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8">
        <div className="pb-4">
          <Heading variants="h2" className="text-center">
            Soulofox Wallets
          </Heading>
        </div>
        <div className="text-white">
          <div className="mb-4">
            <Paragraph>
              Our wallets will be funded adequately funded as below:{" "}
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4">
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
            >
              <Paragraph>
                1. Community Wallet (SOLANA balance)20% NFT sales (buyback floor
                price/NFT Burn)2% Secondary NFT sales40% Community NFT store
                income
              </Paragraph>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
            >
              <img src={Cld} alt="" srcset="" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4">
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              className="order-2 lg:order-1"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
            >
              <img src={Paws} alt="" srcset="" className="pb-4" />
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              className="order-1 lg:order-2"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
            >
              <Paragraph>
                2. Marketing/Partnership wallet (FOXYCOIN balance)10% Token
                supply2% P2P marketplace commissions1% Secondary NFT sales10%
                Community NFT store income
              </Paragraph>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-4">
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
            >
              <Paragraph>
                3. Game Ecosystem Wallet (FOXYCOIN balance)8% P2P marketplace
                commissions30% Token Supply10% Community NFT store income100% In
                game store income
              </Paragraph>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
            >
              <img src={MoneyBag} alt="" srcset="" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GameFi */}
      <section
        id="etfgamefi"
        className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8"
      >
        <div>
          <Heading className="text-center">GameFi</Heading>
          <div className="flex items-center md:items-start flex-col-reverse md:flex-row mt-4">
            <Paragraph className="text-white mt-4 md:mt-0 md:pr-8">
              The universe of Soulofox is dominated by a evil creature called
              Zadir.Foxian would have to level up by defeating animals or plants
              that has been possessed by Zadir. Foxian will earn Foxycoin and
              level up through defeating enemies and taking part in raids with
              other foxians. The NFT will be a rare skin where players c an use
              it in the game to showcase their cool NFT!To incentivise player in
              playing, FoxyCoin token and NFTs (armors, weapons, accessories,
              and pet) will be dropped during boss fight in raid. Player will
              need to level up themselves through daily quests and defeating the
              enemies to challenge a higher level raid. Every NFTs acquire in
              game can then be sold on the marketplace to obtain Foxycoin token.
              There are also in game stores where players can purchase non-NFT
              consumables items like red potions, mana potions, arrow..etc from
              a NPC using Foxycoin. There will be a 10% transaction fee from P2P
              marketplace. Both the foxy-coin from P2P marketplace transaction
              fee and in game store will be used to maintain the Soulofox
              ecosystem.
            </Paragraph>
            <img src={Gamfisct} alt="" className="lg:m-5 mt-0 object-contain" />
          </div>
        </div>
      </section>

      {/* Land Ownership */}
      <section className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8">
        <div>
          <div>
            <Heading className="text-center">Land Ownership</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 items-center">
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  x: isMobile ? "-50%" : "-90%",
                },
                onscreen: {
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 0.7,
                  },
                },
              }}
              className="md:order-2"
            >
              <div className="max-w-lg mx-auto ">
                <img src={Landmap} alt="land ownership map" />
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  x: isMobile ? "50%" : "90%",
                },
                onscreen: {
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 0.7,
                  },
                },
              }}
            >
              <div className="max-w-md m-auto md:text-left whitespace-normal lg:justify-end text-white">
                <ul>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <p>
                        Players will be able to acquire a piece of land in the
                        game world using FoxyCoin.
                      </p>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <p>
                        Owning the land unlocks the ability of generate
                        dungeons. Raids will be randomly selected on one of the
                        dungeons daily.
                      </p>
                    </div>
                  </li>
                  <li className="flex mb-5">
                    <div className="mr-4 text-200">
                      <MinusSM className="text-primary-darkest" />
                    </div>
                    <div>
                      <p>
                        10% of the raids income will belong to the land owners.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Dev in Process */}
      <section className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8">
        <div>
          <Heading className="text-center">
            Game Development In Progress
          </Heading>
          <div className="p-2">
            <Paragraph className="text-white text-center">
              Game is being developed using Unity.
            </Paragraph>
          </div>
          <div className="flex mt-4">
            <div className="flex w-full justify-around flex-col md:flex-row">
              <div className="text-center">
                <img
                  src={Gmdevprog1}
                  alt=""
                  className="object-contain mx-auto"
                />
                <Paragraph className="text-white mt-2 text-center">
                  Character Animation Design
                </Paragraph>
              </div>
              <div className="mt-6 md:mt-0">
                <img
                  src={Gmdevprog2}
                  alt=""
                  className="object-contain mx-auto"
                />
                <Paragraph className="text-white mt-2 text-center">
                  Game Level Design
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Video */}
      <section className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8">
        <div>
          <div>
            <Heading className="text-center">Trailer Video</Heading>
          </div>
          <div className="max-w-3xl h-60 lg:h-80 mx-auto border-4 border-primary-dark">
            <iframe
              src="https://www.youtube.com/embed/nPy6Qb5exko"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameborder="0"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* RoadMap */}
      <section
        id="roadmap"
        className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8"
      >
        <div>
          <Heading className="text-center">RoadMap</Heading>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-center bg-no-repeat mt-4 bg-none md:bg-roadMap"
          style={{
            backgroundSize: "70%",
          }}
        >
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              offscreen: {
                // x: isMobile ? "-50%" : "-90%",
                scale: 0.4,
              },
              onscreen: {
                scale: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 0.7,
                },
              },
            }}
          >
            <div>
              <div className="flex flex-col justify-center items-center ">
                <div className="text-center text-primary-darker">
                  2022 Q1
                  <Paragraph className="m-2 mb-10 text-white">
                    Merchandise shop will be opened. Land ownership feature will
                    be released. Game beta version will be released.
                  </Paragraph>
                  2021 OCT
                  <Paragraph className="m-2 text-white">
                    2,222 Foxian NFT will be released. Community wallet will be
                    setup for our foxians members.
                  </Paragraph>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:block"></div>
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial="offscreen"
            whileInView="onscreen"
            variants={{
              offscreen: {
                // x: isMobile ? "-50%" : "-90%",
                scale: 0.4,
              },
              onscreen: {
                scale: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 0.7,
                },
              },
            }}
          >
            <div>
              <div className="flex flex-col justify-center items-center ">
                <div className="text-center text-primary-darker">
                  2022 Q2
                  <Paragraph className="m-2 mb-10 text-white">
                    Full game released with play to earn feature.
                  </Paragraph>
                  2021 Q4
                  <Paragraph className="m-2 text-white">
                    FoxyCoin token will be released and NFT owners will start
                    receiving token by holding the NFTs. Staking Pool will be
                    launched.
                  </Paragraph>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-300 mx-auto pt-9 pb-9 px-4 md:px-8">
        <div>
          <div>
            <Heading className="text-center">Team</Heading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-4 md:gap-8 md:grid-cols-3 mt-4">
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
              className="flex flex-col justify-center items-center"
            >
              <div>
                <img src={TeamJay} alt="Jay" />
              </div>
              <Heading variants="h4" className="text-center pt-2 font-normal">
                Jay
              </Heading>
              <Paragraph variants="h5" className="text-white">
                Game Designer
              </Paragraph>
              <Paragraph className="text-white">Singapore</Paragraph>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 140,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2.2,
                  },
                },
              }}
              className="flex flex-col justify-center items-center"
            >
              <div>
                <img src={TeamShin} alt="Shin" />
              </div>
              <Heading variants="h4" className="text-center pt-2 font-normal">
                Shin
              </Heading>
              <Paragraph variants="h5" className="text-white">
                Lead Artist
              </Paragraph>
              <Paragraph className="text-white">Taiwan</Paragraph>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 180,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2.4,
                  },
                },
              }}
              className="flex flex-col justify-center items-center"
            >
              <div>
                <img src={TeamArun} alt="Arun" />
              </div>
              <Heading variants="h4" className="text-center pt-2 font-normal">
                Arun
              </Heading>
              <Paragraph variants="h5" className="text-white">
                Blockchain Developer
              </Paragraph>
              <Paragraph className="text-white">Germany</Paragraph>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 100,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2,
                  },
                },
              }}
              className="flex flex-col justify-center items-center"
            >
              <div>
                <img src={TeamMaurice} alt="Maurice" />
              </div>
              <Heading variants="h4" className="text-center pt-2 font-normal">
                Maurice
              </Heading>
              <Paragraph variants="h5" className="text-white">
                Marketing Lead
              </Paragraph>
              <Paragraph className="text-white">Germany/Mexico</Paragraph>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 140,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2.2,
                  },
                },
              }}
              className="flex flex-col justify-center items-center"
            >
              <div>
                <img src={TeamAndrew} alt="Andrew" />
              </div>
              <Heading variants="h4" className="text-center pt-2 font-normal">
                Andrew
              </Heading>
              <Paragraph variants="h5" className="text-white">
                Animation
              </Paragraph>
              <Paragraph className="text-white">Malaysia</Paragraph>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial="offscreen"
              whileInView="onscreen"
              variants={{
                offscreen: {
                  // x: isMobile ? "50%" : "90%",
                  y: 180,
                  opacity: 0,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 2.4,
                  },
                },
              }}
              className="flex flex-col justify-center items-center"
            >
              <div>
                <img src={TeamVolume} alt="Volume" />
              </div>
              <Heading variants="h4" className="text-center pt-2 font-normal">
                Volume
              </Heading>
              <Paragraph variants="h5" className="text-white">
                Frontend Developer
              </Paragraph>
              <Paragraph className="text-white">Malaysia</Paragraph>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-9 pb-9 bg-opacity-80 bg-secondary shadow-xl">
        <div className="max-w-300 mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row min-h-50 lg:items-center pt-5 pb-5">
            <div className="flex-1">
              <div>
                <div>
                  <Heading className="text-left">Contact Us</Heading>
                  <hr className="bg-200 h-1 border-transparent mt-1 w-10" />
                </div>
                <Paragraph className="max-w-md pt-3 text-white">
                  We would love to hear any feedback and would love to connect
                  with the NFT community. Feel free to contact us with the
                  following methods.
                </Paragraph>
              </div>
            </div>
            <div className="flex-2 justify-end social-icons">
              <div>
                <ul className="flex mt-5 lg:mt-0 flex-wrap flex-row">
                  <li className="pt-2 pb-2 mr-5 lg:mr-0 lg:ml-5 text-white hover:text-primary-darker">
                    <a
                      href="https://discord.gg/NSHrXBhk4F"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-200"
                    >
                      <div className="flex items-center social-icons-wrapper">
                        <Discord />
                        <p className="pl-2 hover:transiton-all">Discord</p>
                      </div>
                    </a>
                  </li>
                  <li className="pt-2 pb-2 mr-5 lg:mr-0 lg:ml-5 text-white hover:text-primary-darker">
                    <a
                      href="mailto:soulofox.nft@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-200"
                    >
                      <div className="flex items-center social-icons-wrapper">
                        <Email />
                        <p className="pl-2 hover:transiton-all">Email</p>
                      </div>
                    </a>
                  </li>
                  <li className="pt-2 pb-2 mr-5 lg:mr-0 lg:ml-5 text-white hover:text-primary-darker">
                    <a
                      href="https://www.youtube.com/channel/SoulofoxNFT"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-200"
                    >
                      <div className="flex items-center social-icons-wrapper">
                        <Youtube />
                        <p className="pl-2 hover:transiton-all">Youtube</p>
                      </div>
                    </a>
                  </li>
                  <li className="pt-2 pb-2 mr-5 lg:mr-0 lg:ml-5 text-white hover:text-primary-darker">
                    <a
                      href="https://twitter.com/soulofoxNFT"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-200"
                    >
                      <div className="flex items-center social-icons-wrapper">
                        <Twitter />
                        <p className="pl-2 hover:transiton-all">Twitter</p>
                      </div>
                    </a>
                  </li>
                  <li className="pt-2 pb-2 mr-5 lg:mr-0 lg:ml-5 text-white hover:text-primary-darker">
                    <a
                      href="https://soulofox.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-200"
                    >
                      <div className="flex items-center social-icons-wrapper">
                        <WebsiteLink />
                        <p className="pl-2">Website</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
