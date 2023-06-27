import StatsCard from "./StatsCard";
import { GiHamburgerMenu } from 'react-icons/gi';
import { forwardRef } from "react";
import { useSession, signOut } from "next-auth/react";
import LineGraph from "./Charts/Line";
import PieGraph from "./Charts/Pie";

const Board = forwardRef((props, ref) => {
    const { data: session, status } = useSession();

    const cardData = [
        {
            color: "green",
            icon: "https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/vector-6.svg",
            heading: "Total Revenues",
            stat: "$2,129,430"
        },
        {
            color: "peach",
            icon: "https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/total-transactions-icon@2x.png",
            heading: "Total Transactions",
            stat: "1,520"
        },
        {
            color: "pink",
            icon: "https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/vector-5.svg",
            heading: "Total Likes",
            stat: "9,721"
        },
        {
            color: "purple",
            icon: "https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/vector-4.svg",
            heading: "Total Users",
            stat: "892"
        },
    ]





    return (
        <>
            <section className="xl:ml-[60px] dashboard w-full mt-5" ref={ref}>
                <div>
                    <header className="header flex justify-between items-center w-full">
                        <div className="flex gap-3 items-center">
                            <GiHamburgerMenu className="text-black hamburger-icon cursor-pointer xl:hidden block" onClick={
                                () => {
                                    props.navBarToggleHandler();
                                }
                            } />
                            <div className="text-wrapper-39">Dashboard</div>
                        </div>

                        <div className="flex items-center gap-[30px]">
                            <div className="hidden md:block search-bar">
                                <input type="text" className="overlap-9 text-wrapper-40" placeholder="Search..." />
                                <span className="search-icon">

                                    <img
                                        className="search-icon"
                                        alt="Line"
                                        src="/search.svg"
                                    />
                                </span>
                            </div>

                            <img
                                className="vector-7 cursor-pointer"
                                alt="Vector"
                                src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/vector.svg"
                            />

                            <img
                                className="mask-group cursor-pointer"
                                alt="profile"
                                title="Sign out"
                                src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/mask-group-1.svg"
                                onClick={() => signOut({ callbackUrl: "/" })}
                            />
                        </div>
                    </header>

                    <section className="flex justify-center flex-wrap xl:flex-nowrap gap-4 xl:gap-9 mt-[40px]">
                        {
                            cardData.map((card, index) => {
                                return (
                                    <StatsCard key={index} color={card.color} icon={card.icon} heading={card.heading} stat = {card.stat}/>
                                )
                            }
                            )
                        }
                    </section>

                    {/* graphs */}
                    <section className="mt-[40px]">
                        <div className="activities-card pt-20 p-5 pl-0 xl:pl-5 relative">
                            <div className="header">Activities</div>
                            <div className="">
                                <div className="text-wrapper-35 absolute top-[60px] left-10">May - June 2021</div>
                                <img
                                    className=" absolute top-[63px] left-[140px] "
                                    alt="Vector"
                                    src="/arrow-down.svg"
                                    width={10}
                                    height={10}
                                />
                            </div>
                            <LineGraph data={props.data} />
                        </div>
                    </section>


                    <section className="flex flex-col items-center lg:flex-row gap-10 mt-10">
                        <div className="top-products-card p-10 pt-15 pb-2 w-full xl:w-[50%] relative">
                            <div className="header">Top Products</div>
                            <div className="">
                                <div className="text-wrapper-35 absolute top-10 right-10">May - June 2021</div>
                                <img
                                    className=" absolute top-11 right-6"
                                    alt="Vector"
                                    src="/arrow-down.svg"
                                    width={10}
                                    height={10}
                                />
                            </div>
                            <PieGraph data={props.data} />
                        </div>
                        <div className="schedules-card w-full xl:w-[50%]">
                            <div className="overlap-8 flex justify-between">
                                <div className="text-wrapper-32">Today’s schedule</div>
                                <div className="flex gap-3">
                                    <div className="text-wrapper-35">See All</div>
                                    <img
                                        className="vector-6"
                                        alt="Vector"
                                        src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/vector-1.svg"
                                    />
                                </div>
                                <div className="group-8">
                                    <p className="p">Meeting with suppliers from Kuta Bali</p>
                                    <div className="text-wrapper-33">14.00-15.00</div>
                                    <p className="text-wrapper-34">at Sunset Road, Kuta, Bali</p>
                                    <img
                                        className="line-7"
                                        alt="Line"
                                        src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/line-6-1.svg"
                                    />
                                </div>
                                <div className="group-9">
                                    <p className="text-wrapper-36">
                                        Check operation at Giga Factory 1
                                    </p>
                                    <div className="text-wrapper-37">18.00-20.00</div>
                                    <div className="text-wrapper-38">at Central Jakarta</div>
                                    <img
                                        className="line-8"
                                        alt="Line"
                                        src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/line-6.svg"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
})

export default Board;