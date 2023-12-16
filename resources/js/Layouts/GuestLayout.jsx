import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20  " />
                </Link>
            </div>

            {/* <main className="w-full sm:max-w-md mt-6 px-6 py-4  shadow-md overflow-hidden sm:rounded-lg"> */}
            <section>{children}</section>
        </div>
    );
}

