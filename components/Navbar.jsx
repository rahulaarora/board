import { GiHamburgerMenu } from 'react-icons/gi';
import { forwardRef } from 'react';

const Navbar = forwardRef((props, ref) => {

    return (
        <div ref={ref} className="navigation hidden xl:flex flex-col min-h-screen">
            <div className='flex justify-between'>

                <div className="board">Board.</div>
            <GiHamburgerMenu className="text-white hamburger-icon cursor-pointer xl:hidden block mt-3 " onClick={
                () => {
                    props.navBarToggleHandler();
                }
            } />
            </div>

            <div className="flex flex-col justify-between h-[80%] xl:h-full">
                <div className="flex flex-col gap-y-10">
                    <div className="flex gap-5 cursor-pointer">
                        <img
                            className="dashboard-icon"
                            alt="Dashboard icon"
                            src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/dashboard-icon-1@2x.png"
                        />
                        <div className="text-wrapper">Dashboard</div>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <img
                            className="transaction-icon"
                            alt="Transaction icon"
                            src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/transaction-icon-1@2x.png"
                        />
                        <div className="transactions">Transactions</div>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <img
                            className="schedule-icon"
                            alt="Schedule icon"
                            src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/schedule-icon-1@2x.png"
                        />
                        <div className="schedules">Schedules</div>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <img
                            className="user-icon"
                            alt="User icon"
                            src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/user-icon-1@2x.png"
                        />
                        <div className="users">Users</div>
                    </div>
                    <div className="flex gap-5 cursor-pointer">
                        <img
                            className="setting-icon"
                            alt="Setting icon"
                            src="https://generation-sessions.s3.amazonaws.com/82572d8b3b29bc23d59cdbc1d68818c8/img/setting-icon-1.svg"
                        />
                        <div className="settings">Settings</div>
                    </div>

                </div>

                <div className="flex flex-col gap-y-5 ">

                    <div className="help cursor-pointer">Help</div>
                    <div className="contact-us cursor-pointer">Contact Us</div>
                </div>
            </div>
        </div>
    );
});

export default Navbar;