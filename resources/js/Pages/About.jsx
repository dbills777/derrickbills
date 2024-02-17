import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { AboutHero } from "@/Components/AboutHero";
import { Stats } from "@/Components/Stats";
import { Timeline } from "@/Components/Timeline";

const About = ({ auth }) => {
    return (
        <Layout>
            <Head title="About" />
            <AboutHero />
            <section className="">
                <div className="flex flex-col items-center justify-center py-10">
                    <div className="stats bg-primary text-primary-content">
                        <div className="stat">
                            <div className="stat-title">Account balance</div>
                            <div className="stat-value">$89,400</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm btn-success">
                                    Add funds
                                </button>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Current balance</div>
                            <div className="stat-value">$89,400</div>
                            <div className="stat-actions">
                                <button className="btn btn-sm m-1">
                                    Withdrawal
                                </button>
                                <button className="btn btn-sm">deposit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-10">
                    <Stats />
                </div>
                <div className="flex flex-col items-center justify-center py-10">
                    <Timeline />
                </div>
            </section>
        </Layout>
    );
};
export default About;
