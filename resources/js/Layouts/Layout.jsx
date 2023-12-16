import Navigation from "../Components/Navigation";
import ThemeToggle from "@/Components/ThemeToggle";
import SideMenu from "@/Components/SideMenu copy";

export default function Layout({ auth, children, header, footer, user }) {
    return (
        <>
            <Navigation auth={auth} user={user} />
           

            <main className="max-w-full  mx-auto center ">{children}</main>
        </>
    );
}
