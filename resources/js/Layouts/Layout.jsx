import Footer from "@/Layouts/Footer";
import NavBar from "@/Components/NavBar";

export default function Layout({ auth, children, header, footer, user }) {
    return (
        <>
            <NavBar auth={auth} user={user} />
            <main>{children}</main>
            <div className="mx-auto">
                <Footer />
            </div>
        </>
    );
}
