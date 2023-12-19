import NavBar from "@/Components/NavBar";
import Footer from "@/Layouts/Footer";
import WelcomeHero from "@/Components/WelcomeHero";

export default function Layout({ auth, children, header, footer, user }) {
    return (
        <>
            <NavBar auth={auth} user={user} />
            <main>{children}</main>
            <Footer />
        </>
    );
}
