import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Logo ersetzt den alten h1 Text */}
        <div className="mb-6 w-64 md:w-96 relative">
          <Image
            src="/mdmpmlogo_bw_org_V2.png"
            alt="mdmpm logo"
            width={400}
            height={100}
            priority
            className="w-full h-auto"
          />
        </div>
        
        <h2 className="text-xl md:text-2xl text-gray-300 text-center mb-12 max-w-2xl">
          Modern Document & Project Management
        </h2>
        
        {/* Rest des Codes bleibt gleich */}
        <div className="bg-gray-800/50 rounded-lg p-6 md:p-8 mb-8 max-w-2xl w-full">
          <p className="text-lg text-gray-300 text-center">
            Enhanced markdown for modern project management - bridging human readability with machine processing
          </p>
        </div>
        
        <div className="space-y-4 text-center">
          <p className="text-gray-400">Coming Soon</p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/mdmpm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}