export default function PageReveal() {
    return (
        <div className="pagereveal loader">
            <div className="overlay">
                <div className="block console-bg"></div>
                <div className="block console-bg"></div>
            </div>

            <div className="intro-logo">
                <div className="word flex-1 mr-3" id="word-1">
                    <h1 className="text-right">
                        Welcome
                    </h1>
                </div>
                <div className="word flex-1 ml-3" id="word-2">
                    <h1>to my Portfolio</h1>
                </div>
            </div>

            <div className="divider"></div>

            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        </div>
    );
}
