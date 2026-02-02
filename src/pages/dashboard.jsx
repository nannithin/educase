const Dashboard = () => {
    return (
            <div className="w-full min-h-screen md:max-w-sm md:mx-auto bg-[#F7F8F9] rounded-lg border border-gray-200">
                <div className="p-8 border-b border-gray-200 bg-white">
                    <h1 className="text-2xl font-semibold text-gray-900">Account Settings</h1>
                </div>

                <div className="p-8 border-b border-dashed">
                    <div className="flex items-start gap-6 mb-8">
                        <div className="relative w-24 h-24 shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop"
                                alt="Merry Doe"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-white text-xs font-bold">✓</span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <h2 className="text-xl font-semibold text-gray-900">Merry Doe</h2>
                            <p className="text-gray-600">Merry@Gmail.Com</p>
                        </div>
                    </div>

                    

                    <p className="text-gray-700 leading-relaxed text-[15px]">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            </div>
    )
}

export default Dashboard;