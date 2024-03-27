export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center relative">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 opacity-20">
                    404
                </h1>
                <p className="text-4xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    404 Error
                </p>
                <br></br>
                <p className="text-xl mt-8">Page Not Found</p>
                <a href="/" className="mt-8 inline-block bg-purple-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                    Go Home
                </a>
            </div>
        </div>
    );
}
