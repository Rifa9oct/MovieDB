export default function MovieDetailsLayout({ children, modal }) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}