import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Vishal", lastName: "Nenavath", email: "vishalnenavath1337@gmail.com" };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Acess and manage your account and transactions efficiently"
                    />

                    <TotalBalancebox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={12500.35}


                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 2500.40 }]}
            />
        </section>
    )
}

export default Home